import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-white shadow-md border-b-2 border-gray-200 sticky top-0 z-10 backdrop-blur-sm bg-white/95">
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <span className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></span>
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;

