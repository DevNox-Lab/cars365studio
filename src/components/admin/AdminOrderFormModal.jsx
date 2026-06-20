import { useEffect, useState } from 'react';
import { PackageBuilderProvider, usePackageBuilderContext } from '../../context/PackageBuilderContext';
import { cars } from '../../data/carData';
import CarSelector from '../CarSelector';
import ServiceSelector from '../ServiceSelector';
import BookingDetailsForm from '../BookingDetailsForm';
import { buildOrderPayload, orderToFormState, ORDER_STATUSES } from '../../utils/orderHelpers';
import { formatAED } from '../../utils/formatters';

function AdminOrderFormBody({ order, onClose, onSubmit, saving }) {
  const {
    selectedServiceIds,
    selectedServicesWithPrices,
    currentCar,
    total,
    initializeBuilder,
    formData,
    updateFormData,
  } = usePackageBuilderContext();

  const [status, setStatus] = useState(order?.status || 'pending');
  const [notes, setNotes] = useState(order?.notes || '');
  const [address, setAddress] = useState(order?.address || '');

  useEffect(() => {
    if (!order) return;

    const formState = orderToFormState(order);
    const matchedCar = cars.find(
      (car) =>
        car.model === order.vehicleInfo?.model &&
        car.carType === order.vehicleInfo?.carType
    );

    initializeBuilder({
      carId: matchedCar?.id || null,
      brand: matchedCar?.manufacturer || '',
      serviceIds: order.services?.selectedServiceIds || [],
      formValues: formState,
    });

    setStatus(order.status || 'pending');
    setNotes(order.notes || '');
    setAddress(order.address || '');
  }, [order, initializeBuilder]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.userName || !formData.userNumber) {
      alert('Please fill in customer name and phone number.');
      return;
    }

    if (!formData.visitDate || !formData.visitTime) {
      alert('Please fill in visit date and time.');
      return;
    }

    if (selectedServicesWithPrices.length === 0) {
      alert('Please select at least one service.');
      return;
    }

    const payload = buildOrderPayload({
      formData: { ...formData, address, notes },
      currentCar,
      selectedServiceIds,
      selectedServicesWithPrices,
      total,
      status,
      notes,
      address,
    });

    onSubmit(payload);
  };

  const inputClass =
    'w-full rounded-xl border border-border-highlight bg-surface-container px-4 py-3 font-body text-sm text-on-surface placeholder:text-outline focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary';

  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-col">
      <div className="flex-1 space-y-8 overflow-y-auto px-6 py-6">
        <CarSelector />
        <BookingDetailsForm />

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-on-surface-variant">
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={inputClass}
              placeholder="Customer address"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-on-surface-variant">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className={inputClass}
            >
              {ORDER_STATUSES.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm text-on-surface-variant">
            Notes
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className={inputClass}
            placeholder="Internal notes for this order"
          />
        </div>

        <ServiceSelector />
      </div>

      <div className="border-t border-border-highlight bg-surface-container px-6 py-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-outline">
              Order Total
            </p>
            <p className="font-headline text-2xl font-bold text-primary">
              {formatAED(total)}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-border-highlight px-5 py-3 text-sm text-on-surface transition-colors hover:border-primary hover:text-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-primary px-5 py-3 font-headline text-sm font-semibold uppercase tracking-wider text-on-primary transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? 'Saving...' : order ? 'Update Order' : 'Create Order'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default function AdminOrderFormModal({ open, order, onClose, onSubmit, saving }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4">
      <div className="flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border-highlight bg-surface-container-low shadow-2xl">
        <div className="flex items-center justify-between border-b border-border-highlight px-6 py-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              {order ? 'Edit Order' : 'New Order'}
            </p>
            <h2 className="font-headline text-2xl font-bold uppercase tracking-wide text-on-surface">
              {order ? order.orderNumber || 'Update Order' : 'Create Order'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-border-highlight p-2 text-on-surface transition-colors hover:border-primary hover:text-primary"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <PackageBuilderProvider persist={false} key={order?._id || 'new'}>
          <AdminOrderFormBody
            order={order}
            onClose={onClose}
            onSubmit={onSubmit}
            saving={saving}
          />
        </PackageBuilderProvider>
      </div>
    </div>
  );
}
