
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 text-imperial-silver hover:text-imperial-purple transition-colors">
      <div className="h-8 w-8 bg-gradient-to-br from-imperial-purple to-imperial-light-purple rounded-md flex items-center justify-center">
        <span className="text-white font-bold text-sm">AI</span>
      </div>
      <div className="font-semibold text-lg tracking-tight">
        <span className="text-imperial-silver">Agent</span>
        <span className="text-imperial-purple">Imperial</span>
      </div>
    </Link>
  );
};

export default Logo;
