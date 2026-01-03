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
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-indigo-500 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Total Users</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{totalUsers || 30}</p>
              <p className="text-xs text-gray-400 mt-1">All registered users</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-4 rounded-full shadow-lg">
              <span className="text-3xl">👥</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-green-500 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Active Now</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{activeUsers || 24}</p>
              <p className="text-xs text-gray-400 mt-1">{totalUsers > 0 ? Math.round((activeUsers / totalUsers) * 100) : 0}% of total</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-full shadow-lg">
              <span className="text-3xl">✅</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-purple-500 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Data Sources</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">1</p>
              <p className="text-xs text-gray-400 mt-1">API connected</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-full shadow-lg">
              <span className="text-3xl">📊</span>
            </div>
          </div>
        </div>
      </div>

      {/* About Claros Analytics */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-t-4 border-indigo-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="text-indigo-600">📊</span>
          About Claros Analytics
        </h2>
        <div className="space-y-3 text-gray-600">
          <p className="text-base leading-relaxed">
            Claros Analytics provides powerful insights and data visualization capabilities to help you understand your user base and make informed decisions.
          </p>
          <ul className="list-none space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-1">→</span>
              <div>
                <strong className="text-gray-800">User Analytics</strong> - Track and analyze user distribution across companies and cities
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-1">→</span>
              <div>
                <strong className="text-gray-800">Data Insights</strong> - Get real-time statistics and trends from your data
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-1">→</span>
              <div>
                <strong className="text-gray-800">Interactive Dashboards</strong> - Explore data with search, filter, and pagination features
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-600 font-bold mt-1">→</span>
              <div>
                <strong className="text-gray-800">Visual Reports</strong> - View charts and metrics for better data comprehension
              </div>
            </li>
          </ul>
          <div className="mt-6 p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
            <p className="text-sm text-gray-700">
              Navigate to the <strong className="text-indigo-700">Data</strong> section to explore the user database, visit <strong className="text-indigo-700">Analytics</strong> for detailed insights and statistics, 
              and customize your experience in <strong className="text-indigo-700">Settings</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Analytics Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-white to-indigo-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-indigo-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">📈</span>
            Analytics Capabilities
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              Company distribution analysis
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              City-based user insights
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              Trend visualization
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              Advanced data filtering
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-white to-purple-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-purple-100">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">💡</span>
            Key Insights
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Total user count tracking
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Active user monitoring
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Company performance metrics
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
              Geographic distribution data
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

