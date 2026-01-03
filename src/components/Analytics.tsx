import React from 'react';
import { useAppSelector } from '../store/hooks';

const Analytics: React.FC = () => {
  const { users, filteredUsers } = useAppSelector((state) => state.users);

  // Calculate statistics
  const totalUsers = users.length;
  const uniqueCompanies = new Set(users.map(user => user.company.name)).size;
  const uniqueCities = new Set(users.map(user => user.address.city)).size;
  const activeUsers = filteredUsers.length;

  // Get company distribution
  const companyCounts = users.reduce((acc, user) => {
    acc[user.company.name] = (acc[user.company.name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topCompanies = Object.entries(companyCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  // Get city distribution
  const cityCounts = users.reduce((acc, user) => {
    acc[user.address.city] = (acc[user.address.city] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topCities = Object.entries(cityCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">Analytics Dashboard</h1>
        <p className="text-lg text-indigo-100">
          Insights and statistics about your user data
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Users</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{totalUsers}</p>
            </div>
            <div className="bg-indigo-100 p-3 rounded-full">
              <span className="text-3xl">👥</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Active Users</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{activeUsers}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <span className="text-3xl">✅</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Companies</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{uniqueCompanies}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <span className="text-3xl">🏢</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Cities</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{uniqueCities}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <span className="text-3xl">🌆</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Companies */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Companies</h2>
          <div className="space-y-4">
            {topCompanies.map(([company, count]) => {
              const percentage = (count / totalUsers) * 100;
              return (
                <div key={company}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{company}</span>
                    <span className="text-sm font-bold text-gray-800">{count} users</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-indigo-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Cities */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Cities</h2>
          <div className="space-y-4">
            {topCities.map(([city, count]) => {
              const percentage = (count / totalUsers) * 100;
              return (
                <div key={city}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{city}</span>
                    <span className="text-sm font-bold text-gray-800">{count} users</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-purple-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">User Distribution</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-indigo-50 rounded-lg">
            <p className="text-4xl font-bold text-indigo-600">{totalUsers}</p>
            <p className="text-gray-600 mt-2">Total Users</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-4xl font-bold text-green-600">{uniqueCompanies}</p>
            <p className="text-gray-600 mt-2">Unique Companies</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-4xl font-bold text-purple-600">{uniqueCities}</p>
            <p className="text-gray-600 mt-2">Unique Cities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
