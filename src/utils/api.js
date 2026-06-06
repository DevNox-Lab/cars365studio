/**
 * API Configuration and methods for Cars365 Studio
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Create a new order and return the fetch URL
 * @param {Object} orderData - The order data to send to the backend
 * @returns {Promise<{success: boolean, fetchUrl: string, data: Object}>}
 */
export const createOrderAPI = async (orderData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to create order');
    }

    return data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

/**
 * Get order details by ID
 * @param {string} orderId - The order ID
 * @returns {Promise<{success: boolean, data: Object}>}
 */
export const getOrderAPI = async (orderId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/orders/${orderId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch order');
    }

    return data;
  } catch (error) {
    console.error('Error fetching order:', error);
    throw error;
  }
};

/**
 * Get the full frontend URL for an order details page
 * @param {string} orderId - The order ID
 * @returns {string} - The full URL to access the order details
 */
export const getOrderDetailsUrl = (orderId) => {
  const frontendUrl = import.meta.env.VITE_FRONTEND_URL || 'http://localhost:5173';
  return `${frontendUrl}/order/${orderId}`;
};

/**
 * Get the full API URL for an order
 * @param {string} orderId - The order ID
 * @returns {string} - The full URL to access the order
 */
export const getOrderUrl = (orderId) => {
  return `${API_BASE_URL}/orders/${orderId}`;
};
