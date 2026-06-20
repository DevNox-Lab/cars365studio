import { formatAEDDecimal } from '../../utils/formatters';

export default function DashboardStats({ stats, loading }) {
  const cards = [
    { label: 'Total Orders', value: stats.totalOrders, isCurrency: false },
    { label: 'Completed Orders', value: stats.completedOrders, isCurrency: false },
    { label: 'Pending Orders', value: stats.pendingOrders, isCurrency: false },
    {
      label: 'Total Revenue',
      value: stats.totalRevenue,
      isCurrency: true,
      highlight: true,
    },
    {
      label: 'Pending Amount',
      value: stats.pendingAmount,
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
