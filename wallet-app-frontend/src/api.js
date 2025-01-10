import axios from 'axios';

const API = axios.create({
    baseURL: 'https://wallet-application-backend.onrender.com',
});

// Add token to request headers if available
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;
