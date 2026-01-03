import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      </div>
    </header>
  );
};

export default Header;

