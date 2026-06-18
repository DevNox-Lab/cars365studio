import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchOrderStats, fetchOrders } from '../../store/slices/ordersSlice';
import OrdersTable, { StatsCards } from '../../components/admin/OrdersTable';

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  const { orders, stats, loading, statsLoading } = useAppSelector(
    (state) => state.orders
  );

  useEffect(() => {
    dispatch(fetchOrderStats());
    dispatch(fetchOrders({ page: 1, limit: 5, previewOnly: true }));
  }, [dispatch]);

  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Overview
        </p>
        <h1 className="mt-2 font-headline text-4xl font-bold uppercase tracking-wide text-on-surface">
          Dashboard
        </h1>
        <p className="mt-2 text-sm text-on-surface-variant">
          Monitor order activity and revenue at a glance.
        </p>
      </div>

      <StatsCards stats={stats} loading={statsLoading} />

      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="font-headline text-2xl font-semibold uppercase tracking-wide text-on-surface">
              Recent Orders
            </h2>
            <p className="text-sm text-on-surface-variant">
              Latest customer requests from the website.
            </p>
          </div>
          <Link
            to="/admin/orders"
            className="rounded-xl border border-primary px-4 py-2 font-body text-sm text-primary transition-colors hover:bg-primary/10"
          >
            View all orders
          </Link>
        </div>

        <OrdersTable orders={orders} loading={loading} compact showVisitDate />
      </div>
    </div>
  );
}
