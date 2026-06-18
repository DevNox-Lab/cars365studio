import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchOrderStatsRequest,
  fetchOrdersRequest,
} from '../../utils/adminApi';

const initialState = {
  orders: [],
  stats: {
    weekOrders: 0,
    monthOrders: 0,
    totalRevenue: 0,
  },
  page: 1,
  limit: 10,
  search: '',
  total: 0,
  totalPages: 1,
  loading: false,
  statsLoading: false,
  error: null,
};

export const fetchOrderStats = createAsyncThunk(
  'orders/fetchOrderStats',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
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
      const { page, limit, search } = getState().orders;
      const response = await fetchOrdersRequest(token, {
        page: overrides.page ?? page,
        limit: overrides.limit ?? limit,
        search: overrides.search ?? search,
      });

      return {
        orders: response.data,
        pagination: response.pagination,
        previewOnly: Boolean(overrides.previewOnly),
      };
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch orders');
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

        if (!action.payload.previewOnly) {
          state.page = action.payload.pagination.page;
          state.limit = action.payload.pagination.limit;
          state.total = action.payload.pagination.total;
          state.totalPages = action.payload.pagination.totalPages;
        }
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage, setLimit, setSearch, clearOrdersError } =
  ordersSlice.actions;
export default ordersSlice.reducer;
