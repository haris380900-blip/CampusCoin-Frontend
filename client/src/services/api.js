import axios from 'axios';
const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api', withCredentials: true, headers: { 'Content-Type': 'application/json' } });
api.interceptors.response.use(response => response.data, error => Promise.reject(new Error(error.response?.data?.message || 'Unable to reach Campus Coin.')));
export default api;
