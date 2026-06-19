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
  const { isAuthenticated, checkAuthLoading } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (!isAuthenticated) return;

    dispatch(fetchOrderStats());
    dispatch(fetchOrders({ page: 1, limit: 5, previewOnly: true }));
  }, [dispatch, isAuthenticated]);

  if (!isAuthenticated) {
    if (checkAuthLoading) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-obsidian-deep">
          <div className="text-center">
            <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            <p className="text-on-surface">Loading...</p>
          </div>
        </div>
      );
    }

    return (
      <div className="flex min-h-screen items-center justify-center bg-obsidian-deep px-4 text-center">
        <div>
          <p className="text-xl font-semibold text-on-surface">
            Please login first
          </p>
          <p className="mt-2 text-sm text-on-surface-variant">
            You must be logged in to view dashboard data.
          </p>
        </div>
      </div>
    );
  }

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
          Monitor order activity and revenue at a glance
        </p>
      </div>

      <StatsCards stats={stats} loading={statsLoading} />

      <div className="space-y-4 ">
        <div className="mt-20 flex flex-col gap-4 md:flex-row md:items-center md:justify-between lg:mt-12">
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
            className="w-32 rounded-xl border border-primary px-4 py-2 text-center text-sm font-body text-primary transition-colors hover:bg-primary/10 md:w-auto"
          >
            View all orders
          </Link>
        </div>

        <OrdersTable orders={orders} loading={loading} compact showVisitDate />
      </div>
    </div>
  );
}
