import { MdAdd } from 'react-icons/md';
import { useEffect, useRef, useState } from 'react';
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
import OrderDetailsModal from '../../components/admin/OrderDetailsModal';

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
  const [viewingOrder, setViewingOrder] = useState(null);
  const [orderToDelete, setOrderToDelete] = useState(null);
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    if (!isAuthenticated) return;
    dispatch(fetchOrderStats());
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    if (orderToDelete) {
      cancelButtonRef.current?.focus();
    }
  }, [orderToDelete]);

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

  const handleView = (order) => {
    setViewingOrder(order);
  };

  const handleDelete = (order) => {
    setOrderToDelete(order);
  };

  const confirmDelete = async () => {
    if (!orderToDelete) return;
    await dispatch(deleteOrder(orderToDelete._id));
    setOrderToDelete(null);
  };

  const cancelDelete = () => {
    setOrderToDelete(null);
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
        await dispatch(fetchOrderStats());
        await dispatch(fetchOrders({ page: 1 }));
        setModalOpen(false);
        setEditingOrder(null);
      }
      return;
    }

    const result = await dispatch(createOrder(payload));
    if (createOrder.fulfilled.match(result)) {
      await dispatch(fetchOrderStats());
      await dispatch(fetchOrders({ page: 1 }));
      setModalOpen(false);
    }
  };

  const searchTerm = search?.trim().toLowerCase();
  const displayedOrders = searchTerm
    ? orders.filter((order) => {
        const orderId =
          order.invoiceNumber?.toLowerCase() ||
          order.orderNumber?.toLowerCase() ||
          '';
        const customer = order.customerName?.toLowerCase() || '';
        const phone = order.phoneNumber?.toLowerCase() || '';
        return (
          orderId.includes(searchTerm) ||
          customer.includes(searchTerm) ||
          phone.includes(searchTerm)
        );
      })
    : orders;

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
      {/* Header Section */}
      <div className="border-b border-border-highlight pb-4 sm:pb-6">
        {/* Top Row - Title and Actions */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          {/* Left Section - Title and Breadcrumb */}
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <h1 className="font-headline text-2xl font-bold uppercase tracking-[0.08em] text-primary sm:text-3xl">
                CARS365Studio
              </h1>
            </div>
            <p className="mt-1.5 text-xs uppercase tracking-wider text-on-surface-variant sm:mt-2 sm:text-sm">
              Dashboard /{' '}
              <span className="text-on-surface font-medium">Orders</span>
            </p>
          </div>

          {/* Right Section - Button (Mobile & Desktop) */}
          <button
            type="button"
            onClick={handleCreate}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary bg-yellow-500 px-4 py-2.5 font-headline text-xs font-bold uppercase tracking-wide text-white transition-all hover:bg-yellow-600 active:scale-95 sm:w-auto sm:px-6 sm:py-3"
          >
            <MdAdd className="text-lg" />
            <span>New Order</span>
          </button>
        </div>
      </div>

      <DashboardStats stats={stats} loading={statsLoading} orders={orders} />

      <OrderFiltersBar />

      <DashboardOrdersTable
        orders={displayedOrders}
        loading={loading}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
      />

      <OrdersTableFooter />

      {/* Modals */}
      <OrderDetailsModal
        order={viewingOrder}
        onClose={() => setViewingOrder(null)}
        onEdit={handleEdit}
      />

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

      {orderToDelete && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 px-4 py-6">
          <div className="w-full max-w-lg rounded-3xl border border-border-highlight bg-surface-container-low p-6 shadow-2xl">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-on-surface">
                Are you sure you want to delete this Order?
              </h2>
              <p className="mt-3 text-sm text-on-surface-variant">
                This action cannot be undone.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                ref={cancelButtonRef}
                type="button"
                onClick={cancelDelete}
                className="rounded-xl border border-border-highlight px-4 py-3 text-sm font-medium text-on-surface transition-colors hover:bg-surface-container-high"
              >
                No
              </button>
              <button
                type="button"
                onClick={confirmDelete}
                className="rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-500"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
