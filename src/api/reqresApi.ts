
import axios from 'axios';

const BASE_URL = "https://reqres.in/api";

// Create axios instance with base URL
const api = axios.create({
  baseURL: BASE_URL
});

// Add request interceptor to add auth token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Authentication
export const loginUser = async (email: string, password: string) => {
  const response = await api.post('/login', { email, password });
  return response.data;
};

// User operations
export const getUsers = async (page: number = 1) => {
  const response = await api.get(`/users?page=${page}`);
  return response.data;
};

export const getUserById = async (id: number) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const updateUser = async (id: number, userData: { first_name?: string; last_name?: string; email?: string; }) => {
  const response = await api.put(`/users/${id}`, userData);
  return response.data;
};

export const deleteUser = async (id: number) => {
  const response = await api.delete(`/users/${id}`);
  return response.status;
};
