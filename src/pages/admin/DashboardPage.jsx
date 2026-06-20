import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  createOrder,
  deleteOrder,
  fetchOrderStats,
  fetchOrders,
  updateOrder,
  updateOrderStatus,
} from '../../store/slices/ordersSlice';
import DashboardStats from '../../components/admin/DashboardStats';
import OrderFiltersBar from '../../components/admin/OrderFiltersBar';
import DashboardOrdersTable from '../../components/admin/DashboardOrdersTable';
import OrdersTableFooter from '../../components/admin/OrdersTableFooter';
import AdminOrderFormModal from '../../components/admin/AdminOrderFormModal';

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, checkAuthLoading } = useAppSelector(
    (state) => state.auth
  );
  const {
    orders,
    stats,
    loading,
    statsLoading,
    saving,
    page,
    limit,
    search,
    status,
    dateFrom,
    dateTo,
    frequency,
  } = useAppSelector((state) => state.orders);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) return;
    dispatch(fetchOrderStats());
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) return;
    dispatch(fetchOrders());
  }, [
    dispatch,
    isAuthenticated,
    page,
    limit,
    search,
    status,
    dateFrom,
    dateTo,
    frequency,
  ]);

  const handleCreate = () => {
    setEditingOrder(null);
    setModalOpen(true);
  };

  const handleEdit = (order) => {
    setEditingOrder(order);
    setModalOpen(true);
  };

  const handleDelete = async (order) => {
    if (!window.confirm(`Delete order ${order.orderNumber || order._id}?`)) {
      return;
    }
    await dispatch(deleteOrder(order._id));
  };

  const handleStatusChange = (id, nextStatus) => {
    dispatch(updateOrderStatus({ id, status: nextStatus }));
  };

  const handleSubmit = async (payload) => {
    if (editingOrder) {
      const result = await dispatch(
        updateOrder({ id: editingOrder._id, orderData: payload })
      );
      if (updateOrder.fulfilled.match(result)) {
        setModalOpen(false);
        setEditingOrder(null);
      }
      return;
    }

    const result = await dispatch(createOrder(payload));
    if (createOrder.fulfilled.match(result)) {
      setModalOpen(false);
    }
  };

  if (!isAuthenticated) {
    if (checkAuthLoading) {
      return (
        <div className="flex min-h-[50vh] items-center justify-center">
          <div className="text-center">
            <div className="mb-4 inline-block h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            <p className="text-on-surface">Loading...</p>
          </div>
        </div>
      );
    }

    return (
      <div className="flex min-h-[50vh] items-center justify-center px-4 text-center">
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
    <div className="space-y-6">
      <div className="flex flex-col gap-4 border-b border-border-highlight pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-headline text-3xl font-bold uppercase tracking-[0.08em] text-primary">
            365 Studio
          </p>
          <p className="mt-2 text-sm text-on-surface-variant">
            Dashboard / Orders
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={handleCreate}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary bg-primary/10 px-5 py-3 font-headline text-sm font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary/20"
          >
            <span className="material-symbols-outlined text-base">add</span>
            New Order
          </button>

          <div className="flex items-center gap-3 rounded-2xl border border-border-highlight bg-surface-container-low px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div>
              <p className="text-sm font-medium text-on-surface">
                {user?.name || 'Admin'}
              </p>
              <p className="text-xs text-on-surface-variant">Studio Admin</p>
            </div>
          </div>
        </div>
      </div>

      <DashboardStats stats={stats} loading={statsLoading} />

      <OrderFiltersBar />

      <DashboardOrdersTable
        orders={orders}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
      />

      <OrdersTableFooter />

      <AdminOrderFormModal
        open={modalOpen}
        order={editingOrder}
        onClose={() => {
          setModalOpen(false);
          setEditingOrder(null);
        }}
        onSubmit={handleSubmit}
        saving={saving}
      />
    </div>
  );
}
