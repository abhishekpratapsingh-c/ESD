import axios from 'axios';

// All requests to /api/* are forwarded to http://localhost:8080 by the Vite proxy
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default api;
