// src/components/Home.jsx
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-8 bg-card rounded-lg shadow-custom border border-border text-center">
        <h1 className="text-3xl font-semibold text-primary mb-6">Home</h1>
        {user ? (
          <div>
            <p className="text-xl text-textPrimary mb-4">Welcome, <span className="font-semibold">{user.username}</span>!</p>
            <button
              onClick={logout}
              className="bg-accent text-white py-2 px-4 rounded-md hover:bg-accent/80 transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <p className="text-lg text-textSecondary mb-4">You are not logged in.</p>
            <Link to="/login" className="text-primary hover:underline">Login</Link>
            <br />
            <Link to="/signup" className="text-primary hover:underline">Signup</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
