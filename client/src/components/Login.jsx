// src/components/Login.jsx
import React from 'react';
import useForm from '../hooks/useForm';
import apiClient from '../api-client';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit } = useForm(async () => {
    try {
      await apiClient.post('/api/auth/login', values);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-8 bg-card rounded-lg shadow-custom border border-border">
        <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-textPrimary">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={values.username || ''}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-textPrimary">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password || ''}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/80 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
