// utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:'https://api.cloudqlobe.com/',
  withCredentials: true, // If using cookies for authentication
});

// ✅ Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    const token = response.headers['x-auth-token'];
    const tokenName = response.headers['x-auth-token-name'];
console.log("axios",tokenName);

    if (token && tokenName) {
      sessionStorage.setItem(tokenName, token); // ✅ Store token using dynamic name
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ✅ Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Determine which token to attach
    const superAdminToken = sessionStorage.getItem('SuperAdminAuthToken');
    const adminToken = sessionStorage.getItem('AdminAuthToken');
    const memberToken = sessionStorage.getItem('MemberAuthToken');
    const customerToken = sessionStorage.getItem('authToken');

    // ✅ Attach token based on priority (or customize per API)
    if (superAdminToken) {
      config.headers['Authorization'] = `Bearer ${superAdminToken}`;
    } else if (adminToken) {
      config.headers['Authorization'] = `Bearer ${adminToken}`;
    } else if (memberToken) {
      config.headers['Authorization'] = `Bearer ${memberToken}`;
    } else if (customerToken) {
      config.headers['Authorization'] = `Bearer ${customerToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
