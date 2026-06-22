import { useEffect, useState } from 'react';
import {
  PackageBuilderProvider,
  usePackageBuilderContext,
} from '../../context/PackageBuilderContext';
import { cars } from '../../data/carData';
import CarSelector from '../CarSelector';
import ServiceSelector from '../ServiceSelector';
import BookingDetailsForm from '../BookingDetailsForm';
import {
  buildOrderPayload,
  orderToFormState,
  ORDER_STATUSES,
} from '../../utils/orderHelpers';
import { formatAED } from '../../utils/formatters';

// Map stored color names back to hex for the color picker in edit mode.
// BookingDetailsForm stores/uses hex values, but the DB may have a color name.
const COLOR_NAME_TO_HEX = {
  White: '#FFFFFF',
  'Arctic White': '#F8F9FA',
  'Pearl White': '#F5F5F0',
  'Ivory White': '#FFF8E7',
  Black: '#1A1A1A',
  'Jet Black': '#0D0D0D',
  'Obsidian Black': '#111111',
  'Satin Black': '#222222',
  Silver: '#C0C0C0',
  'Metallic Silver': '#A8A9AD',
  'Titanium Silver': '#9FA3A7',
  Gray: '#808080',
  'Dark Gray': '#4A4A4A',
  'Gunmetal Grey': '#5C5C5C',
  'Graphite Grey': '#4A4A4A',
  'Nardo Grey': '#8A8D8F',
  Blue: '#0057B8',
  'Light Blue': '#6FA8DC',
  'Sky Blue': '#4A90B8',
  'Miami Blue': '#00AEEF',
  'Navy Blue': '#1C2B4A',
  'Midnight Blue': '#102542',
  'French Racing Blue': '#003DA5',
  'China Blue': '#5A7DAA',
  Red: '#D32F2F',
  'Racing Red': '#C0392B',
  'Rosso Corsa': '#D40000',
  Maroon: '#800000',
  Burgundy: '#6D1A2A',
  Green: '#2E7D32',
  'British Racing Green': '#1A4A2E',
  'Emerald Green': '#0F8A5F',
  'Olive Green': '#556B2F',
  'Verde Mantis': '#39FF14',
  Yellow: '#FBC02D',
  'Speed Yellow': '#FFD100',
  'Giallo Modena': '#FFD700',
  'Solar Yellow': '#F7D117',
  Orange: '#F57C00',
  'Lava Orange': '#F04E23',
  'Sunset Orange': '#D4511E',
  'Papaya Orange': '#FF6F00',
  Gold: '#C5A84F',
  'Champagne Gold': '#C5A84F',
  'Rose Gold': '#B8736A',
  Brown: '#795548',
  Bronze: '#8B5E3C',
  Beige: '#C8B89A',
  'Sand Beige': '#C8B89A',
  'Cream Ivory': '#E8DFC8',
  'Desert Sand': '#C2B280',
  Purple: '#6A1B9A',
  'Amethyst Purple': '#6A0DAD',
  'Cosmic Purple': '#5A3D7A',
  Pink: '#E91E63',
  Turquoise: '#40E0D0',
  Teal: '#008080',
};

/**
 * Resolve a stored color value to a hex string suitable for BookingDetailsForm.
 * The DB stores what came from the form — which is already a hex string —
 * but older records might have a name. Handle both cases.
 */
function resolveColorToHex(color) {
  if (!color) return '#1A1A1A'; // default Black
  if (color.startsWith('#')) return color;
  return COLOR_NAME_TO_HEX[color] || '#1A1A1A';
}

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
  const [errors, setErrors] = useState({});

  // Populate the builder when editing an existing order
  useEffect(() => {
    if (!order) return;

    const formState = orderToFormState(order);

    // Resolve color: DB may store a color name, but the form needs hex
    formState.color = resolveColorToHex(order.vehicleInfo?.color);

    const matchedCar = cars.find(
      (car) =>
        car.model === order.vehicleInfo?.model &&
        car.carType === order.vehicleInfo?.carType
    );

    // Debug logging for car matching
    if (!matchedCar) {
      console.warn('[AdminOrderFormBody] Car not found for order:', {
        model: order.vehicleInfo?.model,
        carType: order.vehicleInfo?.carType,
      });
    }

    initializeBuilder({
      carId: matchedCar?.id || null,
      brand: matchedCar?.manufacturer || '',
      serviceIds: order.services?.selectedServiceIds || [],
      formValues: formState,
    });

    setStatus(order.status || 'pending');
    setNotes(order.notes || '');
    setAddress(order.address || '');
  }, [order]);

  const validate = () => {
    const newErrors = {};
    if (!formData.userName?.trim())
      newErrors.userName = 'Customer name is required.';
    if (!formData.userNumber?.trim())
      newErrors.userNumber = 'Phone number is required.';
    if (!formData.visitDate) newErrors.visitDate = 'Visit date is required.';
    if (!formData.visitTime) newErrors.visitTime = 'Visit time is required.';
    if (selectedServicesWithPrices.length === 0)
      newErrors.services = 'Select at least one service.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

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
    'w-full rounded-xl border border-border-highlight bg-surface-container px-4 py-3 font-body text-sm text-on-surface placeholder:text-outline focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors';

  const errorClass = 'mt-1 text-xs text-red-400';

  const isEditMode = Boolean(order);

  return (
    <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
      {/* Scrollable body */}
      <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6">
        <div className="space-y-8">
          {/* ── Step 1: Car Selector ── */}
          <CarSelector />

          {/* ── Step 2: Booking Details ── */}
          {/* Pass isAdmin=true so admin can set any date (including past dates) */}
          <BookingDetailsForm isAdmin={true} />
          {(errors.visitDate || errors.visitTime) && (
            <p className={errorClass}>{errors.visitDate || errors.visitTime}</p>
          )}
          {(errors.userName || errors.userNumber) && (
            <p className={errorClass}>{errors.userName || errors.userNumber}</p>
          )}

          {/* ── Address & Status ── */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-on-surface-variant">
                Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={inputClass}
                placeholder="Customer address (optional)"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-on-surface-variant">
                Order Status
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

          {/* ── Notes ── */}
          <div>
            <label className="mb-2 block text-sm font-medium text-on-surface-variant">
              Internal Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className={inputClass}
              placeholder="Notes visible only to admins"
            />
          </div>

          {/* ── Step 3: Service Selector ── */}
          <ServiceSelector />
          {errors.services && (
            <p className={`${errorClass} -mt-4`}>{errors.services}</p>
          )}
        </div>
      </div>

      {/* ── Sticky Footer with Total + Action Buttons ── */}
      <div className="shrink-0 border-t border-border-highlight bg-surface-container px-6 py-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Total */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-outline">
              Order Total
            </p>
            <p className="font-headline text-2xl font-bold text-primary">
              {formatAED(total)}
            </p>
            {selectedServicesWithPrices.length > 0 && (
              <p className="mt-0.5 text-xs text-on-surface-variant">
                {selectedServicesWithPrices.length} service
                {selectedServicesWithPrices.length > 1 ? 's' : ''} selected
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={saving}
              className="rounded-xl border border-border-highlight px-5 py-3 text-sm font-medium text-on-surface transition-colors hover:border-primary hover:text-primary disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="inline-flex min-w-[140px] items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-headline text-sm font-bold uppercase tracking-wider text-on-primary shadow-md transition-all hover:opacity-90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? (
                <>
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-on-primary border-t-transparent" />
                  Saving...
                </>
              ) : isEditMode ? (
                <>
                  <span className="material-symbols-outlined text-base leading-none">
                    save
                  </span>
                  Update Order
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-base leading-none">
                    add_circle
                  </span>
                  Create Order
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default function AdminOrderFormModal({
  open,
  order,
  onClose,
  onSubmit,
  saving,
}) {
  if (!open) return null;

  const isEditMode = Boolean(order);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-2 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={isEditMode ? 'Edit Order' : 'New Order'}
    >
      {/* Backdrop close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative flex h-[96vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border-highlight bg-surface-container-low shadow-2xl sm:h-[92vh]">
        {/* Modal Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-border-highlight px-6 py-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              {isEditMode ? 'Edit Order' : 'New Order'}
            </p>
            <h2 className="font-headline text-xl font-bold uppercase tracking-wide text-on-surface sm:text-2xl">
              {isEditMode
                ? order.orderNumber ||
                  `Order ${order._id?.slice(-6).toUpperCase()}`
                : 'Create New Order'}
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

        {/* Form Body — PackageBuilderProvider keyed by order to reset state on open */}
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
