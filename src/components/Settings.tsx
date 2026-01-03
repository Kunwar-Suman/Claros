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
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Display</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Items Per Page
            </label>
            <select
              value={itemsPerPage}
              onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
              className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value={5}>5 items</option>
              <option value={10}>10 items</option>
              <option value={15}>15 items</option>
              <option value={20}>20 items</option>
              <option value={30}>30 items</option>
            </select>
            <p className="mt-2 text-sm text-gray-500">
              Number of items displayed per page
            </p>
          </div>
        </div>
      </div>

      {/* General Settings */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">General</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700">Email Notifications</p>
              <p className="text-sm text-gray-500">Receive updates via email</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700">Auto Refresh</p>
              <p className="text-sm text-gray-500">Automatically refresh data</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={autoRefresh}
                onChange={(e) => setAutoRefresh(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">About</h2>
        <div className="space-y-2 text-sm text-gray-600">
          <p><strong>Dashboard Name:</strong> Claros Dashboard</p>
          <p><strong>Version:</strong> 1.0</p>
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
