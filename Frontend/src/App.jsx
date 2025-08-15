
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import TaskList from './pages/TaskList';
import TaskCreate from './pages/TaskCreate';
import TaskEdit from './pages/TaskEdit';
import NotFound from './pages/NotFound';
import { useTheme } from './contexts/ThemeContext';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg z-50"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<TaskList />} />
          <Route path="/create" element={<TaskCreate />} />
          <Route path="/edit/:id" element={<TaskEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

