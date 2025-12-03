import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "https://chatclone-f5lp.onrender.com",
  withCredentials: true,
});

export default axiosInstance;
