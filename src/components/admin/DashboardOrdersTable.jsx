import { useRef, useState } from 'react';
import { formatAEDDecimal, formatDate } from '../../utils/formatters';
import {
  ORDER_STATUSES,
  STATUS_STYLES,
  getOrderIdentifier,
} from '../../utils/orderHelpers';

function RowActionsMenu({ order, onView, onEdit, onDelete }) {
  const [open, setOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    if (!open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const estimatedMenuHeight = 140;
      const menuRight = rect.right;
      const menuLeft = Math.max(rect.right - 140, 10);
      const spaceBelow = window.innerHeight - rect.bottom;
      const top =
        spaceBelow < estimatedMenuHeight && rect.top > estimatedMenuHeight
          ? rect.top - estimatedMenuHeight - 8
          : rect.bottom + 8;
      setMenuStyle({ top, left: menuLeft, width: 140 });
    }
    setOpen((value) => !value);
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleMenu}
        className="rounded-lg p-2 text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
        aria-label="Order actions"
      >
        <span className="material-symbols-outlined text-base">more_vert</span>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            style={menuStyle}
            className="fixed z-20 rounded-xl border border-border-highlight bg-surface-container-high py-2 shadow-xl"
          >
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onView(order);
              }}
              className="block w-full px-4 py-2 text-left text-sm text-on-surface hover:bg-surface-container"
            >
              View
            </button>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onEdit(order);
              }}
              className="block w-full px-4 py-2 text-left text-sm text-on-surface hover:bg-surface-container"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onDelete(order);
              }}
              className="block w-full px-4 py-2 text-left text-sm text-red-300 hover:bg-surface-container"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default function DashboardOrdersTable({
  orders,
  loading,
  onView,
  onEdit,
  onDelete,
  onStatusChange,
}) {
  if (loading) {
    return (
      <div className="rounded-2xl border border-border-highlight bg-surface-container-low p-6 text-center text-sm text-on-surface-variant sm:p-10">
        Loading orders...
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div className="rounded-2xl border border-border-highlight bg-surface-container-low p-6 text-center text-sm text-on-surface-variant sm:p-10">
        No orders found for the current filters.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border-highlight bg-surface-container-low">
      {/* Desktop Table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border-highlight bg-surface-container">
              {[
                'Date / invoice No',
                'Customer',
                'Car',
                'Status',
                'Amount',
                'Actions',
              ].map((heading) => (
                <th
                  key={heading}
                  className="px-4 py-4 text-left font-mono text-[11px] uppercase tracking-[0.18em] text-outline"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const style =
                STATUS_STYLES[order.status] || STATUS_STYLES.pending;

              return (
                <tr
                  key={order._id}
                  className="border-b border-border-highlight/70 transition-colors hover:bg-surface-container/50"
                >
                  <td className="px-4 py-5 align-top">
                    <p className="text-sm text-on-surface">
                      {formatDate(order.createdAt)}
                    </p>
                    <p className="mt-1 font-mono text-xs text-on-surface-variant">
                      {order.invoiceNumber ||
                        order.orderNumber ||
                        `ORD-${order._id.slice(-4).toUpperCase()}`}
                    </p>
                  </td>

                  <td className="px-4 py-5 align-top">
                    <p className="text-sm font-medium text-on-surface">
                      {order.customerName}
                    </p>
                    <p className="mt-1 text-xs text-on-surface-variant">
                      {order.phoneNumber}
                    </p>
                  </td>

                  <td className="px-4 py-5 align-top">
                    <p className="text-sm font-medium text-on-surface">
                      {order.vehicleInfo?.model || '—'}
                    </p>
                    <p className="mt-1 text-xs text-on-surface-variant">
                      {order.vehicleInfo?.color || '—'}
                    </p>
                  </td>

                  <td className="px-4 py-5 align-top">
                    <select
                      value={order.status || 'pending'}
                      onChange={(e) =>
                        onStatusChange(order._id, e.target.value)
                      }
                      className={`rounded-full border border-border-highlight px-3 py-1.5 text-xs font-medium capitalize ${style.bg} ${style.text} bg-surface-container focus:border-primary focus:outline-none`}
                    >
                      {ORDER_STATUSES.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </td>

                  <td className="px-4 py-5 align-top">
                    <p className="text-sm font-semibold text-emerald-300">
                      {formatAEDDecimal(order.services?.totalPrice)}
                    </p>
                  </td>

                  <td className="px-4 py-5 align-top">
                    <RowActionsMenu
                      order={order}
                      onView={onView}
                      onEdit={onEdit}
                      onDelete={onDelete}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="space-y-3 p-4 md:hidden">
        {orders.map((order) => {
          const style = STATUS_STYLES[order.status] || STATUS_STYLES.pending;

          return (
            <div
              key={order._id}
              className="rounded-xl border border-border-highlight bg-surface-container p-4"
            >
              {/* Header Row */}
              <div className="mb-3 flex items-start justify-between">
                <div className="flex-1">
                  <p className="font-mono text-xs text-on-surface-variant">
                    {getOrderIdentifier(order)}
                  </p>
                  <p className="mt-1 text-xs text-outline">
                    {formatDate(order.createdAt)}
                  </p>
                </div>
                <span
                  className={`ml-2 shrink-0 rounded-full px-2.5 py-1 text-xs font-medium capitalize ${style.bg} ${style.text}`}
                >
                  {order.status || 'Pending'}
                </span>
              </div>

              {/* Customer Info */}
              <div className="mb-3 border-b border-border-highlight/50 pb-3">
                <p className="text-xs text-outline">Customer</p>
                <p className="mt-1 text-sm font-medium text-on-surface">
                  {order.customerName}
                </p>
                <p className="text-xs text-on-surface-variant">
                  {order.phoneNumber}
                </p>
              </div>

              {/* Vehicle Info */}
              <div className="mb-3 border-b border-border-highlight/50 pb-3">
                <p className="text-xs text-outline">Vehicle</p>
                <div className="mt-1 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-on-surface">
                      {order.vehicleInfo?.model || '—'}
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      {order.vehicleInfo?.color || '—'}
                    </p>
                  </div>
                  <p className="text-right text-sm font-semibold text-emerald-300">
                    {formatAEDDecimal(order.services?.totalPrice)}
                  </p>
                </div>
              </div>

              {/* Status Select and Actions */}
              <div className="space-y-3">
                <select
                  value={order.status || 'pending'}
                  onChange={(e) => onStatusChange(order._id, e.target.value)}
                  className={`w-full rounded-lg border border-border-highlight px-3 py-2 text-xs font-medium capitalize ${style.bg} ${style.text} bg-surface-container-high focus:border-primary focus:outline-none`}
                >
                  {ORDER_STATUSES.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>

                <div className="flex gap-2">
                  <button
                    onClick={() => onView(order)}
                    className="flex-1 rounded-lg border border-primary bg-primary/10 px-3 py-2.5 text-center text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => onEdit(order)}
                    className="flex-1 rounded-lg border border-border-highlight px-3 py-2.5 text-center text-xs font-semibold text-on-surface transition-colors hover:bg-surface-container-high"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(order)}
                    className="rounded-lg border border-red-300/30 px-3 py-2.5 text-center text-xs font-semibold text-red-300 transition-colors hover:bg-red-300/10"
                  >
                    <span className="material-symbols-outlined text-base">
                      delete
                    </span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
