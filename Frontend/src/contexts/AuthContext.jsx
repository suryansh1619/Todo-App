import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance'; // Import the configured axios instance

export const AuthContext = createContext();

const API_URL = '/auth'; // Base URL is now handled by axiosInstance

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false);
  }, []);

  

  const register = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post(`${API_URL}/register`, userData); // Use axiosInstance
      setUser(response.data.user); 
      setLoading(false);
      return response.data;
    } catch (err) {
      console.error("Registration error:", err);
      setError(err.response?.data?.message || err.message || 'Registration failed');
      setLoading(false);
      throw err;
    }
  };

  const login = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post(`${API_URL}/login`, userData); // Use axiosInstance
      const { user: userDataResponse } = response.data;
      
      setUser(userDataResponse);
      setLoading(false);
      return response.data;
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || err.message || 'Login failed');
      setLoading(false);
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
