import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  fetchOrders,
  setLimit,
  setPage,
  setSearch,
} from '../../store/slices/ordersSlice';
import OrdersTable from '../../components/admin/OrdersTable';

export default function OrdersPage() {
  const dispatch = useAppDispatch();
  const { orders, page, limit, search, total, totalPages, loading } =
    useAppSelector((state) => state.orders);
  const { isAuthenticated, checkAuthLoading } = useAppSelector(
    (state) => state.auth
  );
  const [searchInput, setSearchInput] = useState(search);

  useEffect(() => {
    if (!isAuthenticated) return;
    dispatch(fetchOrders());
  }, [dispatch, page, limit, search, isAuthenticated]);

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
            You must be logged in to view orders.
          </p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput !== search) {
        dispatch(setSearch(searchInput));
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [dispatch, searchInput, search]);

  const handlePageChange = (nextPage) => {
    if (nextPage < 1 || nextPage > totalPages) return;
    dispatch(setPage(nextPage));
  };

  const handleLimitChange = (event) => {
    dispatch(setLimit(Number(event.target.value)));
  };

  const startItem = total === 0 ? 0 : (page - 1) * limit + 1;
  const endItem = Math.min(page * limit, total);

  return (
    <div className="space-y-8">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Management
        </p>
        <h1 className="mt-2 font-headline text-4xl font-bold uppercase tracking-wide text-on-surface">
          Orders
        </h1>
        <p className="mt-2 text-sm text-on-surface-variant">
          Search and review all customer orders with pagination.
        </p>
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border border-border-highlight bg-surface-container-low p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <label htmlFor="order-search" className="sr-only">
            Search orders
          </label>
          <input
            id="order-search"
            type="search"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            placeholder="Search by name, phone, model, or car type..."
            className="w-full rounded-xl border border-border-highlight bg-surface-container px-4 py-3 font-body text-sm text-on-surface placeholder:text-outline focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="flex items-center gap-3">
          <label
            htmlFor="rows-per-page"
            className="text-sm text-on-surface-variant"
          >
            Rows
          </label>
          <select
            id="rows-per-page"
            value={limit}
            onChange={handleLimitChange}
            className="rounded-xl border border-border-highlight bg-surface-container px-3 py-2 text-sm text-on-surface focus:border-primary focus:outline-none"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      <OrdersTable orders={orders} loading={loading} showVisitDate />

      <div className="flex flex-col gap-4 rounded-2xl border border-border-highlight bg-surface-container-low px-4 py-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-on-surface-variant">
          Showing {startItem}-{endItem} of {total} orders
        </p>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handlePageChange(page - 1)}
            disabled={page <= 1}
            className="rounded-lg border border-border-highlight px-3 py-2 text-sm text-on-surface disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          <span className="px-3 text-sm text-on-surface">
            Page {page} of {totalPages}
          </span>

          <button
            type="button"
            onClick={() => handlePageChange(page + 1)}
            disabled={page >= totalPages}
            className="rounded-lg border border-border-highlight px-3 py-2 text-sm text-on-surface disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
