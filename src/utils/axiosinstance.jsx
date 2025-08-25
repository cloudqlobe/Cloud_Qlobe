// utils/axiosInstance.js
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_SERVER_URL || 'http://localhost:5000/' 
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve the JWT token from local storage or cookies
    const token = localStorage.getItem('token'); // Adjust based on how you're storing the token

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Attach the token to the request headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
