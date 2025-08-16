import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: User info */}
        <div className="flex items-center space-x-2">
          {user ? (
            <>
              <span className="font-bold">{user.name}</span>
              <span className="text-gray-300 text-sm">{user.email}</span>
            </>
          ) : (
            <span className="font-bold">Guest</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
