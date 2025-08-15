import React from 'react';

const FilterBar = ({ onFilter }) => {
  return (
    <div className="flex space-x-2">
      <button onClick={() => onFilter('all')} className="px-3 py-1 text-sm text-white bg-gray-500 rounded hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600">All</button>
      <button onClick={() => onFilter('active')} className="px-3 py-1 text-sm text-white bg-yellow-500 rounded hover:bg-yellow-600 dark:bg-yellow-700 dark:hover:bg-yellow-600">Active</button>
      <button onClick={() => onFilter('completed')} className="px-3 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-600">Completed</button>
    </div>
  );
};

export default FilterBar;