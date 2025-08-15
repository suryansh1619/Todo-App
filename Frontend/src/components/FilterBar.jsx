import React from 'react';

const FilterBar = ({ onFilter }) => {
  return (
    <div className="flex flex-wrap justify-center space-x-2 space-y-2 sm:space-y-0">
      <select
        onChange={(e) => onFilter('priority', e.target.value)}
        className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
      >
        <option value="">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <select
        onChange={(e) => onFilter('completed', e.target.value)}
        className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
      >
        <option value="">All Statuses</option>
        <option value="false">Active</option>
        <option value="true">Completed</option>
      </select>
    </div>
  );
};

export default FilterBar;