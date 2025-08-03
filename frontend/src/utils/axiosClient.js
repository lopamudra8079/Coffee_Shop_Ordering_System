// utils/axiosClient.js
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://coffee-shop-ordering-system.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach token if available
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;
