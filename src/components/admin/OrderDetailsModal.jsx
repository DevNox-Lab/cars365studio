import { formatAEDDecimal, formatDate } from '../../utils/formatters';
import { ORDER_STATUSES, STATUS_STYLES } from '../../utils/orderHelpers';

const CAR_COLORS = [
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Arctic White', hex: '#F8F9FA' },
  { name: 'Pearl White', hex: '#F5F5F0' },
  { name: 'Ivory White', hex: '#FFF8E7' },
  { name: 'Black', hex: '#1A1A1A' },
  { name: 'Jet Black', hex: '#0D0D0D' },
  { name: 'Obsidian Black', hex: '#111111' },
  { name: 'Satin Black', hex: '#222222' },
  { name: 'Silver', hex: '#C0C0C0' },
  { name: 'Metallic Silver', hex: '#A8A9AD' },
  { name: 'Titanium Silver', hex: '#9FA3A7' },
  { name: 'Gray', hex: '#808080' },
  { name: 'Dark Gray', hex: '#4A4A4A' },
  { name: 'Gunmetal Grey', hex: '#5C5C5C' },
  { name: 'Graphite Grey', hex: '#4A4A4A' },
  { name: 'Nardo Grey', hex: '#8A8D8F' },
  { name: 'Blue', hex: '#0057B8' },
  { name: 'Light Blue', hex: '#6FA8DC' },
  { name: 'Sky Blue', hex: '#4A90B8' },
  { name: 'Miami Blue', hex: '#00AEEF' },
  { name: 'Navy Blue', hex: '#1C2B4A' },
  { name: 'Midnight Blue', hex: '#102542' },
  { name: 'French Racing Blue', hex: '#003DA5' },
  { name: 'China Blue', hex: '#5A7DAA' },
  { name: 'Red', hex: '#D32F2F' },
  { name: 'Racing Red', hex: '#C0392B' },
  { name: 'Rosso Corsa', hex: '#D40000' },
  { name: 'Maroon', hex: '#800000' },
  { name: 'Burgundy', hex: '#6D1A2A' },
  { name: 'Green', hex: '#2E7D32' },
  { name: 'British Racing Green', hex: '#1A4A2E' },
  { name: 'Emerald Green', hex: '#0F8A5F' },
  { name: 'Olive Green', hex: '#556B2F' },
  { name: 'Verde Mantis', hex: '#39FF14' },
  { name: 'Yellow', hex: '#FBC02D' },
  { name: 'Speed Yellow', hex: '#FFD100' },
  { name: 'Giallo Modena', hex: '#FFD700' },
  { name: 'Solar Yellow', hex: '#F7D117' },
  { name: 'Orange', hex: '#F57C00' },
  { name: 'Lava Orange', hex: '#F04E23' },
  { name: 'Sunset Orange', hex: '#D4511E' },
  { name: 'Papaya Orange', hex: '#FF6F00' },
  { name: 'Gold', hex: '#C5A84F' },
  { name: 'Champagne Gold', hex: '#C5A84F' },
  { name: 'Rose Gold', hex: '#B8736A' },
  { name: 'Brown', hex: '#795548' },
  { name: 'Bronze', hex: '#8B5E3C' },
  { name: 'Beige', hex: '#C8B89A' },
  { name: 'Sand Beige', hex: '#C8B89A' },
  { name: 'Cream Ivory', hex: '#E8DFC8' },
  { name: 'Desert Sand', hex: '#C2B280' },
  { name: 'Purple', hex: '#6A1B9A' },
  { name: 'Amethyst Purple', hex: '#0D0D0D' },
  { name: 'Cosmic Purple', hex: '#5A3D7A' },
  { name: 'Pink', hex: '#E91E63' },
  { name: 'Turquoise', hex: '#40E0D0' },
  { name: 'Teal', hex: '#008080' },
];

const getColorName = (hex) =>
  CAR_COLORS.find((color) => color.hex.toLowerCase() === hex?.toLowerCase())
    ?.name ||
  hex ||
  '—';

export default function OrderDetailsModal({ order, onClose, onEdit }) {
  if (!order) return null;

  const style = STATUS_STYLES[order.status] || STATUS_STYLES.pending;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-2xl border border-border-highlight bg-surface-container-low shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border-highlight bg-surface-container px-6 py-4 sm:px-8">
          <div>
            <h2 className="font-headline text-xl font-bold text-on-surface sm:text-2xl">
              Order Details
            </h2>
            <p className="mt-1 font-mono text-xs text-on-surface-variant sm:text-sm">
              {order.orderNumber || `ORD-${order._id.slice(-4).toUpperCase()}`}
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
        <div className="flex flex-col gap-3 border-t border-border-highlight bg-surface-container px-6 py-4 sm:flex-row sm:justify-end sm:px-8">
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
