import React, { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import SearchBar from '../components/SearchBar';
import SortControls from '../components/SortControls';
import Pagination from '../components/Pagination';
import { usePagination } from '../hooks/usePagination';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { currentPage, setCurrentPage, currentTableData, pageSize } = usePagination({ data: filteredTasks, pageSize: 3 });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get('http://localhost:5000/api/todos', config);
        setTasks(response.data);
        setFilteredTasks(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch tasks');
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        await axios.delete(`http://localhost:5000/api/todos/${id}`, config);
        setTasks(tasks.filter((task) => task._id !== id));
        setFilteredTasks(filteredTasks.filter((task) => task._id !== id));
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to delete task');
      }
    }
  };

  if (loading) return <div className="text-center dark:text-white">Loading tasks...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="container px-4 py-8 mx-auto dark:bg-gray-900 dark:text-gray-100">
      <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Task List</h1>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 space-y-4 sm:space-y-0 sm:space-x-4">
        <SearchBar onSearch={() => {}} />
        <FilterBar onFilter={() => {}} />
        <SortControls onSort={() => {}} />
      </div>
      <div className="space-y-4">
        {currentTableData.map((task) => (
          <div key={task._id} className={`p-4 rounded-lg shadow-md ${task.completed ? 'bg-green-100 dark:bg-green-800 dark:text-white' : 'bg-white dark:bg-gray-800'}`}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">{task.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{task.description}</p>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={() => navigate(`/edit-task/${task._id}`)}
                className="px-2 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(task._id)}
                className="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <Pagination currentPage={currentPage} onPageChange={setCurrentPage} totalCount={filteredTasks.length} pageSize={pageSize} />
    </div>
  );
};

export default TaskList;
