// api.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api/v1', // Adjust baseURL as per your backend
  timeout: 10000, // Timeout after 10 seconds
});

// Add a request interceptor to include the token in headers
instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token'); // Adjust as per your token storage mechanism
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
