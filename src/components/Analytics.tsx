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
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-indigo-500 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">Total Users</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{totalUsers}</p>
              <p className="text-xs text-indigo-600 mt-1 font-medium">100%</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-4 rounded-full shadow-lg">
              <span className="text-3xl">👥</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-green-500 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">Active Users</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{activeUsers}</p>
              <p className="text-xs text-green-600 mt-1 font-medium">
                {totalUsers > 0 ? Math.round((activeUsers / totalUsers) * 100) : 0}% active
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-full shadow-lg">
              <span className="text-3xl">✅</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-purple-500 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">Companies</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{uniqueCompanies}</p>
              <p className="text-xs text-purple-600 mt-1 font-medium">Unique</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-full shadow-lg">
              <span className="text-3xl">🏢</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-blue-500 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">Cities</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{uniqueCities}</p>
              <p className="text-xs text-blue-600 mt-1 font-medium">Locations</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-full shadow-lg">
              <span className="text-3xl">🌆</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Top Companies */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-t-4 border-indigo-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-indigo-600">🏢</span>
            Top Companies
          </h2>
          <div className="space-y-5">
            {topCompanies.map(([company, count], index) => {
              const percentage = (count / totalUsers) * 100;
              return (
                <div key={company} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-1 rounded">
                        #{index + 1}
                      </span>
                      <span className="text-sm font-semibold text-gray-800">{company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {percentage.toFixed(1)}%
                      </span>
                      <span className="text-sm font-bold text-indigo-600">{count} users</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-3 rounded-full transition-all duration-500 group-hover:from-indigo-600 group-hover:to-indigo-700"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Cities */}
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-t-4 border-purple-500">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="text-purple-600">🌆</span>
            Top Cities
          </h2>
          <div className="space-y-5">
            {topCities.map(([city, count], index) => {
              const percentage = (count / totalUsers) * 100;
              return (
                <div key={city} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                        #{index + 1}
                      </span>
                      <span className="text-sm font-semibold text-gray-800">{city}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {percentage.toFixed(1)}%
                      </span>
                      <span className="text-sm font-bold text-purple-600">{count} users</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-500 group-hover:from-purple-600 group-hover:to-purple-700"
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
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-t-4 border-gray-300">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span>📊</span>
          User Distribution Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg border-2 border-indigo-200 hover:border-indigo-400 transition-all duration-300 transform hover:scale-105">
            <p className="text-5xl font-bold text-indigo-600 mb-2">{totalUsers}</p>
            <p className="text-gray-700 font-semibold mt-2">Total Users</p>
            <p className="text-xs text-gray-500 mt-1">All registered accounts</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-2 border-green-200 hover:border-green-400 transition-all duration-300 transform hover:scale-105">
            <p className="text-5xl font-bold text-green-600 mb-2">{uniqueCompanies}</p>
            <p className="text-gray-700 font-semibold mt-2">Unique Companies</p>
            <p className="text-xs text-gray-500 mt-1">Different organizations</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
            <p className="text-5xl font-bold text-purple-600 mb-2">{uniqueCities}</p>
            <p className="text-gray-700 font-semibold mt-2">Unique Cities</p>
            <p className="text-xs text-gray-500 mt-1">Geographic locations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
