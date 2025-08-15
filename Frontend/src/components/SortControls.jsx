import React from 'react';

const SortControls = ({ onSort }) => {
  return (
    <div className="flex space-x-2">
      <button onClick={() => onSort('title-asc')} className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600">Sort by Title (A-Z)</button>
      <button onClick={() => onSort('title-desc')} className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600">Sort by Title (Z-A)</button>
    </div>
  );
};

export default SortControls;