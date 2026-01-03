import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setItemsPerPage } from '../features/usersSlice';

const Settings: React.FC = () => {
  const dispatch = useAppDispatch();
  const { itemsPerPage } = useAppSelector((state) => state.users);
  const [notifications, setNotifications] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const handleItemsPerPageChange = (value: number) => {
    dispatch(setItemsPerPage(value));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">Settings</h1>
        <p className="text-lg text-indigo-100">
          Customize your dashboard preferences
        </p>
      </div>

      {/* Display Settings */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-t-4 border-indigo-500">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="text-indigo-600">🖥️</span>
          Display Preferences
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <span>📄</span>
              Items Per Page
            </label>
            <select
              value={itemsPerPage}
              onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
              className="w-full md:w-64 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white font-medium text-gray-700 transition-all duration-200 hover:border-indigo-400"
            >
              <option value={5}>5 items per page</option>
              <option value={10}>10 items per page</option>
              <option value={15}>15 items per page</option>
              <option value={20}>20 items per page</option>
              <option value={30}>30 items per page</option>
            </select>
            <p className="mt-3 text-sm text-gray-500 flex items-center gap-1">
              <span>💡</span>
              Number of items displayed per page in the data table
            </p>
          </div>
        </div>
      </div>

      {/* General Settings */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-t-4 border-green-500">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="text-green-600">⚙️</span>
          General Settings
        </h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📧</span>
              <div>
                <p className="text-sm font-semibold text-gray-800">Email Notifications</p>
                <p className="text-sm text-gray-500">Receive updates via email</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔄</span>
              <div>
                <p className="text-sm font-semibold text-gray-800">Auto Refresh</p>
                <p className="text-sm text-gray-500">Automatically refresh data</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={autoRefresh}
                onChange={(e) => setAutoRefresh(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border-t-4 border-gray-400">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span>ℹ️</span>
          About This Dashboard
        </h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-indigo-600 font-bold">📛</span>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Dashboard Name</p>
              <p className="text-sm font-semibold text-gray-800">Claros Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-indigo-600 font-bold">🔢</span>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Version</p>
              <p className="text-sm font-semibold text-gray-800">1.0</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-indigo-600 font-bold">📅</span>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Last Updated</p>
              <p className="text-sm font-semibold text-gray-800">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
