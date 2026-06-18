import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMeRequest, loginRequest } from '../../utils/adminApi';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  checkAuthLoading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await loginRequest(credentials);
      return {
        user: response.user,
        token: response.token,
      };
    } catch (error) {
      return rejectWithValue(error.message || 'Login failed');
    }
  }
);

export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      if (!token) {
        return rejectWithValue('No token found');
      }

      const response = await getMeRequest(token);
      return {
        user: response.user,
        token,
      };
    } catch (error) {
      return rejectWithValue(error.message || 'Session expired');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login thunk cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Login failed';
        state.isAuthenticated = false;
        state.token = null;
      })
      // Check auth thunk cases
      .addCase(checkAuth.pending, (state) => {
        state.checkAuthLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.checkAuthLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.checkAuthLoading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = action.payload || 'Session expired';
      });
  },
});

export const { logoutUser, clearError } = authSlice.actions;
export default authSlice.reducer;
