import { formatAEDDecimal } from '../../utils/formatters';

export default function DashboardStats({ stats, loading, orders = [] }) {
  const derivedTotalOrders = orders.length;
  const derivedCompletedOrders = orders.filter(
    (order) => order.status === 'complete'
  ).length;
  const derivedPendingOrders = orders.filter(
    (order) => order.status === 'pending'
  ).length;
  const derivedPendingAmount = orders.reduce((sum, order) => {
    if (order.status !== 'pending') return sum;
    return sum + Number(order.services?.totalPrice || 0);
  }, 0);

  const totalOrders =
    typeof stats.totalOrders === 'number'
      ? stats.totalOrders
      : derivedTotalOrders;
  const completedOrders =
    typeof stats.completedOrders === 'number'
      ? stats.completedOrders
      : derivedCompletedOrders;
  const pendingOrders = derivedPendingOrders;
  const pendingAmount = derivedPendingAmount;

  const cards = [
    { label: 'Total Orders', value: totalOrders, isCurrency: false },
    { label: 'Completed Orders', value: completedOrders, isCurrency: false },
    { label: 'Pending Orders', value: pendingOrders, isCurrency: false },
    {
      label: 'Total Revenue',
      value: stats.totalRevenue,
      isCurrency: true,
      highlight: true,
    },
    {
      label: 'Pending Amount',
      value: pendingAmount,
      isCurrency: true,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-2xl border border-border-highlight bg-surface-container-low px-5 py-5"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-outline">
            {card.label}
          </p>
          <p
            className={`mt-3 font-headline text-3xl font-bold ${
              card.highlight ? 'text-emerald-300' : 'text-on-surface'
            }`}
          >
            {loading
              ? '...'
              : card.isCurrency
                ? formatAEDDecimal(card.value)
                : Number(card.value || 0).toLocaleString('en-AE')}
          </p>
        </div>
      ))}
    </div>
  );
}
