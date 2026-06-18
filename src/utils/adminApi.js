const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

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
  } catch (error) {
    throw new Error('Invalid response format from server');
  }

  if (!response.ok) {
    throw new Error(data.message || `Request failed with status ${response.status}`);
  }

  return data;
};

const handleFetchError = (error, context) => {
  if (error instanceof TypeError) {
    throw new Error(`Network error: ${context} - ${error.message}`);
  }
  throw error;
};

export const loginRequest = async ({ email, password }) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    return parseResponse(response);
  } catch (error) {
    handleFetchError(error, 'login');
  }
};

export const getMeRequest = async (token) => {
  try {
    if (!token) {
      throw new Error('No authentication token provided');
    }

    const response = await fetch(`${API_BASE_URL}/auth/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return parseResponse(response);
  } catch (error) {
    handleFetchError(error, 'get user info');
  }
};

export const fetchOrderStatsRequest = async (token) => {
  try {
    if (!token) {
      throw new Error('No authentication token provided');
    }

    const response = await fetch(`${API_BASE_URL}/admin/stats`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return parseResponse(response);
  } catch (error) {
    handleFetchError(error, 'fetch order stats');
  }
};

export const fetchOrdersRequest = async (token, { page, limit, search }) => {
  try {
    if (!token) {
      throw new Error('No authentication token provided');
    }

    const response = await fetch(
      buildUrl('/admin/orders', { page, limit, search }),
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return parseResponse(response);
  } catch (error) {
    handleFetchError(error, 'fetch orders');
  }
};
