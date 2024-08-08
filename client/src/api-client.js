// src/api-client.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Make sure to set this in your .env file
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
