import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">Welcome to Claros Dashboard</h1>
        <p className="text-lg text-indigo-100">
          Your modern data management solution
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Users</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">10</p>
            </div>
            <div className="bg-indigo-100 p-3 rounded-full">
              <span className="text-3xl">👥</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Active Now</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">8</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <span className="text-3xl">✅</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Data Sources</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">1</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <span className="text-3xl">📊</span>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Dashboard</h2>
        <div className="space-y-3 text-gray-600">
          <p>
            This dashboard application demonstrates modern web development practices using:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>React 18</strong> with TypeScript for type-safe development</li>
            <li><strong>Redux Toolkit</strong> for predictable state management</li>
            <li><strong>TailwindCSS</strong> for beautiful, responsive design</li>
            <li><strong>JSONPlaceholder API</strong> for realistic data fetching</li>
          </ul>
          <p className="mt-4">
            Navigate to the <strong>Data</strong> section to see the interactive user table with search and pagination features.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">✨ Features</h3>
          <ul className="space-y-2 text-gray-600">
            <li>🔍 Real-time search functionality</li>
            <li>📄 Paginated data display</li>
            <li>📱 Fully responsive design</li>
            <li>⚡ Fast and efficient</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">🛠️ Tech Stack</h3>
          <ul className="space-y-2 text-gray-600">
            <li>⚛️ React + TypeScript</li>
            <li>🔄 Redux Toolkit</li>
            <li>🎨 TailwindCSS</li>
            <li>🚀 Vite</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

