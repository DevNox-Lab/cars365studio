import { useState } from 'react';
import { formatAEDDecimal, formatDate } from '../../utils/formatters';
import { ORDER_STATUSES, STATUS_STYLES } from '../../utils/orderHelpers';

function RowActionsMenu({ order, onEdit, onDelete }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
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
          <div className="absolute right-0 z-20 mt-2 min-w-[140px] rounded-xl border border-border-highlight bg-surface-container-high py-2 shadow-xl">
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
  onEdit,
  onDelete,
  onStatusChange,
}) {
  if (loading) {
    return (
      <div className="rounded-2xl border border-border-highlight bg-surface-container-low p-10 text-center text-sm text-on-surface-variant">
        Loading orders...
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div className="rounded-2xl border border-border-highlight bg-surface-container-low p-10 text-center text-sm text-on-surface-variant">
        No orders found for the current filters.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border-highlight bg-surface-container-low">
      <div className="overflow-x-auto">
        <table className="min-w-[1100px] w-full">
          <thead>
            <tr className="border-b border-border-highlight bg-surface-container">
              {[
                'Date / Order ID',
                'Status',
                'User Details',
                'Car Details',
                'Order Details',
                'Notes',
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
              const style = STATUS_STYLES[order.status] || STATUS_STYLES.pending;

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
                      {order.orderNumber || `ORD-${order._id.slice(-4).toUpperCase()}`}
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
                    <p className="text-sm font-medium text-on-surface">
                      {order.customerName}
                    </p>
                    <p className="mt-1 text-sm text-on-surface-variant">
                      {order.phoneNumber}
                    </p>
                    <p className="mt-1 text-xs text-outline">
                      {order.address || order.plateInfo?.city || '—'}
                    </p>
                  </td>

                  <td className="px-4 py-5 align-top">
                    <p className="text-sm font-medium text-on-surface">
                      {order.vehicleInfo?.model || '—'}
                    </p>
                    <p className="mt-1 text-xs text-on-surface-variant">
                      Variant: {order.vehicleInfo?.carType || '—'}
                    </p>
                    <p className="mt-1 text-xs text-outline">
                      {order.vehicleInfo?.carType || '—'} —{' '}
                      {order.vehicleInfo?.color || '—'}
                    </p>
                  </td>

                  <td className="px-4 py-5 align-top">
                    <ul className="space-y-1 text-xs text-on-surface-variant">
                      {(order.services?.selectedServices || []).map((service) => (
                        <li key={service.serviceId || service._id}>
                          • {service.serviceName}
                        </li>
                      ))}
                    </ul>
                  </td>

                  <td className="max-w-[180px] px-4 py-5 align-top">
                    <p className="line-clamp-3 text-xs text-on-surface-variant">
                      {order.notes || '—'}
                    </p>
                  </td>

                  <td className="px-4 py-5 align-top">
                    <p className="text-sm font-semibold text-emerald-300">
                      {formatAEDDecimal(order.services?.totalPrice)}
                    </p>
                  </td>

                  <td className="px-4 py-5 align-top">
                    <RowActionsMenu
                      order={order}
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
    </div>
  );
}
