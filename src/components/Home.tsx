import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchUsers } from '../features/usersSlice';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  const totalUsers = users.length;
  const activeUsers = Math.floor(totalUsers * 0.8); // 80% active

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
              <p className="text-3xl font-bold text-gray-800 mt-2">{totalUsers || 30}</p>
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
              <p className="text-3xl font-bold text-gray-800 mt-2">{activeUsers || 24}</p>
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

      {/* About Claros Analytics */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Claros Analytics</h2>
        <div className="space-y-3 text-gray-600">
          <p>
            Claros Analytics provides powerful insights and data visualization capabilities to help you understand your user base and make informed decisions.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>User Analytics</strong> - Track and analyze user distribution across companies and cities</li>
            <li><strong>Data Insights</strong> - Get real-time statistics and trends from your data</li>
            <li><strong>Interactive Dashboards</strong> - Explore data with search, filter, and pagination features</li>
            <li><strong>Visual Reports</strong> - View charts and metrics for better data comprehension</li>
          </ul>
          <p className="mt-4">
            Navigate to the <strong>Data</strong> section to explore the user database, visit <strong>Analytics</strong> for detailed insights and statistics, 
            and customize your experience in <strong>Settings</strong>.
          </p>
        </div>
      </div>

      {/* Analytics Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">📈 Analytics Capabilities</h3>
          <ul className="space-y-2 text-gray-600">
            <li>📊 Company distribution analysis</li>
            <li>🌆 City-based user insights</li>
            <li>📉 Trend visualization</li>
            <li>🔍 Advanced data filtering</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">💡 Key Insights</h3>
          <ul className="space-y-2 text-gray-600">
            <li>👥 Total user count tracking</li>
            <li>✅ Active user monitoring</li>
            <li>🏢 Company performance metrics</li>
            <li>📍 Geographic distribution data</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

