import { formatAEDDecimal, formatDate } from '../../utils/formatters';
import { ORDER_STATUSES, STATUS_STYLES } from '../../utils/orderHelpers';

import { getColorName, CAR_COLORS } from '../../utils/getColors';

export default function OrderDetailsModal({ order, onClose, onEdit }) {
  if (!order) return null;

  const style = STATUS_STYLES[order.status] || STATUS_STYLES.pending;

  return (
    <div className="fixed inset-0 z-50 flex items-center  justify-center overflow-y-auto bg-black/50 p-4 ">
      <div className="w-full max-w-2xl rounded-2xl border border-border-highlight bg-surface-container-low shadow-2xl">
        {/* Header */}
        <div className="flex items-center rounded-2xl justify-between border-b border-border-highlight bg-surface-container px-6 py-4 sm:px-8">
          <div>
            <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
              Order Details
            </h2>
            <p className="mt-1 font-mono text-xs text-on-surface-variant sm:text-sm">
              {order.invoiceNumber ||
                order.orderNumber ||
                `ORD-${order._id.slice(-4).toUpperCase()}`}
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-on-surface-variant transition-colors hover:bg-surface-container-high"
            aria-label="Close"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-6 sm:px-8 max-h-[calc(100vh-200px)]">
          <div className="space-y-6">
            {/* Order Status & Date */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-outline">
                  Status
                </label>
                <div className="mt-2">
                  <span
                    className={`inline-flex rounded-full px-3 py-1.5 text-xs font-medium capitalize ${style.bg} ${style.text}`}
                  >
                    {order.status || 'Pending'}
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-outline">
                  Order Date
                </label>
                <p className="mt-2 text-sm text-on-surface">
                  {formatDate(order.createdAt)}
                </p>
              </div>
            </div>

            {/* Customer Information */}
            <div className="rounded-xl border border-border-highlight/50 bg-surface-container/50 p-4 sm:p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-outline">
                Customer Information
              </h3>
              <div className="mt-4 space-y-3">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs text-on-surface-variant">
                      Name
                    </label>
                    <p className="mt-1 text-sm font-medium text-on-surface">
                      {order.customerName || '—'}
                    </p>
                  </div>
                  <div>
                    <label className="text-xs text-on-surface-variant">
                      Phone
                    </label>
                    <p className="mt-1 text-sm font-medium text-on-surface">
                      {order.phoneNumber || '—'}
                    </p>
                  </div>
                </div>
                <div>
                  <label className="text-xs text-on-surface-variant">
                    Email
                  </label>
                  <p className="mt-1 text-sm font-medium text-on-surface">
                    {order.email || '—'}
                  </p>
                </div>
                <div>
                  <label className="text-xs text-on-surface-variant">
                    Address
                  </label>
                  <p className="mt-1 text-sm font-medium text-on-surface">
                    {order.address ||
                      order.plateInfo?.city ||
                      order.plateInfo?.emirate ||
                      '—'}
                  </p>
                </div>
              </div>
            </div>

            {/* Vehicle Information */}
            <div className="rounded-xl border border-border-highlight/50 bg-surface-container/50 p-4 sm:p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-outline">
                Vehicle Information
              </h3>
              <div className="mt-4 space-y-3">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs text-on-surface-variant">
                      Model
                    </label>
                    <p className="mt-1 text-sm font-medium text-on-surface">
                      {order.vehicleInfo?.model || '—'}
                    </p>
                  </div>
                  <div>
                    <label className="text-xs text-on-surface-variant">
                      Type
                    </label>
                    <p className="mt-1 text-sm font-medium text-on-surface">
                      {order.vehicleInfo?.carType || '—'}
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs text-on-surface-variant">
                      Color
                    </label>
                    <p className="mt-1 text-sm font-medium text-on-surface">
                      {getColorName(order.vehicleInfo?.color)}
                    </p>
                  </div>
                  <div>
                    <label className="text-xs text-on-surface-variant">
                      Plate Number
                    </label>
                    <p className="mt-1 text-sm font-medium text-on-surface">
                      {order.plateInfo?.plateNumber || '—'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="rounded-xl border border-border-highlight/50 bg-surface-container/50 p-4 sm:p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-outline">
                Services
              </h3>
              <div className="mt-4">
                {(order.services?.selectedServices || []).length > 0 ? (
                  <ul className="space-y-2">
                    {order.services.selectedServices.map((service) => (
                      <li
                        key={service.serviceId || service._id}
                        className="flex items-start gap-2 rounded-lg bg-surface-container px-3 py-2"
                      >
                        <span className="text-primary">•</span>
                        <span className="text-sm text-on-surface">
                          {service.serviceName}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-on-surface-variant">
                    No services selected
                  </p>
                )}
              </div>
            </div>

            {/* Notes */}
            {order.notes && (
              <div className="rounded-xl border border-border-highlight/50 bg-surface-container/50 p-4 sm:p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-outline">
                  Notes
                </h3>
                <p className="mt-3 text-sm text-on-surface-variant">
                  {order.notes}
                </p>
              </div>
            )}

            {/* Total Amount */}
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-wider text-outline">
                  Total Amount
                </span>
                <span className="text-xl font-bold text-emerald-300 sm:text-2xl">
                  {formatAEDDecimal(order.services?.totalPrice)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col rounded-b-2xl gap-3 border-t border-border-highlight bg-surface-container px-6 py-4 sm:flex-row sm:justify-end sm:px-8">
          <button
            onClick={onClose}
            className="rounded-lg border border-border-highlight px-4 py-2.5 font-semibold text-on-surface transition-colors hover:bg-surface-container-high sm:order-2"
          >
            Close
          </button>
          <button
            onClick={() => {
              onEdit(order);
              onClose();
            }}
            className="flex items-center justify-center gap-2 rounded-lg bg-yellow-600 px-4 py-2.5 font-semibold text-white  transition-colors hover:bg-yellow-500 sm:order-1"
          >
            <span className="material-symbols-outlined text-base">edit</span>
            Edit Order
          </button>
        </div>
      </div>
    </div>
  );
}
