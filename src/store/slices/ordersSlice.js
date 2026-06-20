import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createAdminOrderRequest,
  deleteAdminOrderRequest,
  fetchOrderStatsRequest,
  fetchOrdersRequest,
  updateAdminOrderRequest,
  updateOrderStatusRequest,
} from '../../utils/adminApi';

const initialState = {
  orders: [],
  stats: {
    totalOrders: 0,
    completedOrders: 0,
    pendingOrders: 0,
    totalRevenue: 0,
    pendingAmount: 0,
    activeOnSite: 0,
  },
  page: 1,
  limit: 10,
  search: '',
  status: 'all',
  dateFrom: '',
  dateTo: '',
  frequency: 'all',
  total: 0,
  totalPages: 1,
  loading: false,
  statsLoading: false,
  saving: false,
  error: null,
};

const getFilterParams = (state, overrides = {}) => ({
  page: overrides.page ?? state.orders.page,
  limit: overrides.limit ?? state.orders.limit,
  search: overrides.search ?? state.orders.search,
  status: overrides.status ?? state.orders.status,
  dateFrom: overrides.dateFrom ?? state.orders.dateFrom,
  dateTo: overrides.dateTo ?? state.orders.dateTo,
  frequency: overrides.frequency ?? state.orders.frequency,
});

export const fetchOrderStats = createAsyncThunk(
  'orders/fetchOrderStats',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      if (!token) return rejectWithValue('please login first');
      const response = await fetchOrderStatsRequest(token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch stats');
    }
  }
);

export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async (overrides = {}, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      if (!token) return rejectWithValue('please login first');

      const params = getFilterParams(getState(), overrides);
      const response = await fetchOrdersRequest(token, params);

      return {
        orders: response.data,
        pagination: response.pagination,
      };
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch orders');
    }
  }
);

export const createOrder = createAsyncThunk(
  'orders/createOrder',
  async (orderData, { getState, rejectWithValue, dispatch }) => {
    try {
      const { token } = getState().auth;
      const response = await createAdminOrderRequest(token, orderData);
      dispatch(fetchOrderStats());
      dispatch(fetchOrders());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to create order');
    }
  }
);

export const updateOrder = createAsyncThunk(
  'orders/updateOrder',
  async ({ id, orderData }, { getState, rejectWithValue, dispatch }) => {
    try {
      const { token } = getState().auth;
      const response = await updateAdminOrderRequest(token, id, orderData);
      dispatch(fetchOrderStats());
      dispatch(fetchOrders());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to update order');
    }
  }
);

export const updateOrderStatus = createAsyncThunk(
  'orders/updateOrderStatus',
  async ({ id, status }, { getState, rejectWithValue, dispatch }) => {
    try {
      const { token } = getState().auth;
      const response = await updateOrderStatusRequest(token, id, status);
      dispatch(fetchOrderStats());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to update status');
    }
  }
);

export const deleteOrder = createAsyncThunk(
  'orders/deleteOrder',
  async (id, { getState, rejectWithValue, dispatch }) => {
    try {
      const { token } = getState().auth;
      await deleteAdminOrderRequest(token, id);
      dispatch(fetchOrderStats());
      dispatch(fetchOrders());
      return id;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to delete order');
    }
  }
);

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
      state.page = 1;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
      state.page = 1;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
      state.page = 1;
    },
    setDateFrom: (state, action) => {
      state.dateFrom = action.payload;
      state.frequency = 'all';
      state.page = 1;
    },
    setDateTo: (state, action) => {
      state.dateTo = action.payload;
      state.frequency = 'all';
      state.page = 1;
    },
    setFrequency: (state, action) => {
      state.frequency = action.payload;
      if (action.payload !== 'all') {
        state.dateFrom = '';
        state.dateTo = '';
      }
      state.page = 1;
    },
    clearOrdersError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderStats.pending, (state) => {
        state.statsLoading = true;
      })
      .addCase(fetchOrderStats.fulfilled, (state, action) => {
        state.statsLoading = false;
        state.stats = action.payload;
      })
      .addCase(fetchOrderStats.rejected, (state, action) => {
        state.statsLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.orders;
        state.page = action.payload.pagination.page;
        state.limit = action.payload.pagination.limit;
        state.total = action.payload.pagination.total;
        state.totalPages = action.payload.pagination.totalPages;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createOrder.pending, (state) => {
        state.saving = true;
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.saving = false;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.saving = false;
        state.error = action.payload;
      })
      .addCase(updateOrder.pending, (state) => {
        state.saving = true;
      })
      .addCase(updateOrder.fulfilled, (state) => {
        state.saving = false;
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.saving = false;
        state.error = action.payload;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.orders = state.orders.map((order) =>
          order._id === action.payload._id ? action.payload : order
        );
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.orders = state.orders.filter((order) => order._id !== action.payload);
      });
  },
});

export const {
  setPage,
  setLimit,
  setSearch,
  setStatus,
  setDateFrom,
  setDateTo,
  setFrequency,
  clearOrdersError,
} = ordersSlice.actions;

export default ordersSlice.reducer;
