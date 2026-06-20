const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const buildUrl = (path, params = {}) => {
  const url = new URL(`${API_BASE_URL}${path}`);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
};

const parseResponse = async (response) => {
  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error('Invalid response format from server');
  }

  if (!response.ok) {
    throw new Error(
      data.message || `Request failed with status ${response.status}`
    );
  }

  return data;
};

const handleFetchError = (error, context) => {
  console.error(`[API Error] ${context}:`, error);
  if (error instanceof TypeError) {
    throw new Error(`Network error: ${context} - ${error.message}`);
  }
  throw error;
};

const fetchOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
};

const authHeaders = (token) => ({
  ...fetchOptions.headers,
  Authorization: `Bearer ${token}`,
});

export const loginRequest = async ({ email, password }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      ...fetchOptions,
      body: JSON.stringify({ email, password }),
    });
    return parseResponse(response);
  } catch (error) {
    handleFetchError(error, 'login');
  }
};

export const getMeRequest = async (token) => {
  try {
    if (!token) throw new Error('No authentication token provided');
    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      method: 'GET',
      ...fetchOptions,
      headers: authHeaders(token),
    });
    return parseResponse(response);
  } catch (error) {
    handleFetchError(error, 'get user info');
  }
};

export const fetchOrderStatsRequest = async (token) => {
  try {
    if (!token) throw new Error('No authentication token provided');
    const response = await fetch(`${API_BASE_URL}/admin/stats`, {
      method: 'GET',
      ...fetchOptions,
      headers: authHeaders(token),
    });
    return parseResponse(response);
  } catch (error) {
    handleFetchError(error, 'fetch order stats');
  }
};

export const fetchOrdersRequest = async (
  token,
  { page, limit, search, status, dateFrom, dateTo, frequency }
) => {
  try {
    if (!token) throw new Error('No authentication token provided');
    const response = await fetch(
      buildUrl('/admin/orders', {
        page,
        limit,
        search,
        status,
        dateFrom,
        dateTo,
        frequency,
      }),
      {
        method: 'GET',
        ...fetchOptions,
        headers: authHeaders(token),
      }
    );
    return parseResponse(response);
  } catch (error) {
    handleFetchError(error, 'fetch orders');
  }
};

export const createAdminOrderRequest = async (token, orderData) => {
  try {
    if (!token) throw new Error('No authentication token provided');
    const response = await fetch(`${API_BASE_URL}/admin/orders`, {
      method: 'POST',
      ...fetchOptions,
      headers: authHeaders(token),
      body: JSON.stringify(orderData),
    });
    return parseResponse(response);
  } catch (error) {
    handleFetchError(error, 'create order');
  }
};

export const updateAdminOrderRequest = async (token, orderId, orderData) => {
  try {
    if (!token) throw new Error('No authentication token provided');
    const response = await fetch(`${API_BASE_URL}/admin/orders/${orderId}`, {
      method: 'PUT',
      ...fetchOptions,
      headers: authHeaders(token),
      body: JSON.stringify(orderData),
    });
    return parseResponse(response);
  } catch (error) {
    handleFetchError(error, 'update order');
  }
};

export const updateOrderStatusRequest = async (token, orderId, status) => {
  try {
    if (!token) throw new Error('No authentication token provided');
    const response = await fetch(
      `${API_BASE_URL}/admin/orders/${orderId}/status`,
      {
        method: 'PATCH',
        ...fetchOptions,
        headers: authHeaders(token),
        body: JSON.stringify({ status }),
      }
    );
    return parseResponse(response);
  } catch (error) {
    handleFetchError(error, 'update order status');
  }
};

export const deleteAdminOrderRequest = async (token, orderId) => {
  try {
    if (!token) throw new Error('No authentication token provided');
    const response = await fetch(`${API_BASE_URL}/admin/orders/${orderId}`, {
      method: 'DELETE',
      ...fetchOptions,
      headers: authHeaders(token),
    });
    return parseResponse(response);
  } catch (error) {
    handleFetchError(error, 'delete order');
  }
};

export const logoutRequest = async (token) => {
  try {
    if (!token) throw new Error('No authentication token provided');
    const response = await fetch(`${API_BASE_URL}/auth/logout`, {
      method: 'POST',
      ...fetchOptions,
      headers: authHeaders(token),
    });
    return parseResponse(response);
  } catch (error) {
    handleFetchError(error, 'logout');
  }
};
