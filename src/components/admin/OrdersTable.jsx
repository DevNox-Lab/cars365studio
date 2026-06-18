import { formatAED, formatDate } from '../../utils/formatters';

export default function OrdersTable({
  orders,
  loading,
  compact = false,
  showVisitDate = false,
}) {
  if (loading) {
    return (
      <div className="rounded-2xl border border-border-highlight bg-surface-container-low p-8 text-center text-sm text-on-surface-variant">
        Loading orders...
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div className="rounded-2xl border border-border-highlight bg-surface-container-low p-8 text-center text-sm text-on-surface-variant">
        No orders found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border-highlight bg-surface-container-low">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-border-highlight">
          <thead className="bg-surface-container">
            <tr>
              <th className="px-4 py-4 text-left font-mono text-xs uppercase tracking-[0.2em] text-outline">
                Date
              </th>
              <th className="px-4 py-4 text-left font-mono text-xs uppercase tracking-[0.2em] text-outline">
                Customer
              </th>
              <th className="px-4 py-4 text-left font-mono text-xs uppercase tracking-[0.2em] text-outline">
                Phone
              </th>
              <th className="px-4 py-4 text-left font-mono text-xs uppercase tracking-[0.2em] text-outline">
                Vehicle
              </th>
              {!compact && (
                <th className="px-4 py-4 text-left font-mono text-xs uppercase tracking-[0.2em] text-outline">
                  Car Type
                </th>
              )}
              {showVisitDate && (
                <th className="px-4 py-4 text-left font-mono text-xs uppercase tracking-[0.2em] text-outline">
                  Visit Date
                </th>
              )}
              <th className="px-4 py-4 text-left font-mono text-xs uppercase tracking-[0.2em] text-outline">
                Total
              </th>
              {!compact && (
                <th className="px-4 py-4 text-left font-mono text-xs uppercase tracking-[0.2em] text-outline">
                  Status
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-border-highlight">
            {orders.map((order) => (
              <tr
                key={order._id}
                className="transition-colors hover:bg-surface-container/60"
              >
                <td className="px-4 py-4 text-sm text-on-surface-variant">
                  {formatDate(order.createdAt)}
                </td>
                <td className="px-4 py-4 text-sm font-medium text-on-surface">
                  {order.customerName}
                </td>
                <td className="px-4 py-4 text-sm text-on-surface-variant">
                  {order.phoneNumber}
                </td>
                <td className="px-4 py-4 text-sm text-on-surface">
                  {order.vehicleInfo?.model || '—'}
                </td>
                {!compact && (
                  <td className="px-4 py-4 text-sm text-on-surface-variant">
                    {order.vehicleInfo?.carType || '—'}
                  </td>
                )}
                {showVisitDate && (
                  <td className="px-4 py-4 text-sm text-on-surface-variant">
                    {order.visitDate
                      ? `${order.visitDate}${order.visitTime ? ` ${order.visitTime}` : ''}`
                      : '—'}
                  </td>
                )}
                <td className="px-4 py-4 text-sm font-medium text-primary">
                  {formatAED(order.services?.totalPrice)}
                </td>
                {!compact && (
                  <td className="px-4 py-4">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      New
                    </span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function StatsCards({ stats, loading }) {
  const cards = [
    {
      label: 'Orders This Week',
      value: stats.weekOrders,
      format: (value) => value.toLocaleString('en-AE'),
    },
    {
      label: 'Orders This Month',
      value: stats.monthOrders,
      format: (value) => value.toLocaleString('en-AE'),
    },
    {
      label: 'Total Revenue',
      value: stats.totalRevenue,
      format: (value) => formatAED(value),
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-2xl border border-border-highlight bg-surface-container-low p-6"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-outline">
            {card.label}
          </p>
          <p className="mt-4 font-headline text-3xl font-bold text-on-surface">
            {loading ? '...' : card.format(card.value)}
          </p>
        </div>
      ))}
    </div>
  );
}
