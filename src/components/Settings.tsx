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
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-xl shadow-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
              <span className="text-3xl">⚙️</span>
            </div>
            <h1 className="text-4xl font-bold">Settings</h1>
          </div>
          <p className="text-lg text-white/90 ml-14">
            Customize your dashboard preferences and manage your experience
          </p>
        </div>
      </div>

      {/* Display Settings */}
      <div className="bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-indigo-500 transform hover:-translate-y-1">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-3 rounded-lg shadow-md">
            <span className="text-2xl">🖥️</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Display Preferences</h2>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-inner border border-indigo-100">
          <label className="block text-sm font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <span className="text-indigo-600 text-lg">📄</span>
            <span>Items Per Page</span>
          </label>
          <div className="relative">
            <select
              value={itemsPerPage}
              onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
              className="w-full md:w-80 px-5 py-4 border-2 border-indigo-200 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 bg-white font-semibold text-gray-800 transition-all duration-300 hover:border-indigo-400 hover:shadow-md appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236366f1'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                backgroundSize: '1.5em 1.5em',
                paddingRight: '3rem'
              }}
            >
              <option value={5}>5 items per page</option>
              <option value={10}>10 items per page</option>
              <option value={15}>15 items per page</option>
              <option value={20}>20 items per page</option>
              <option value={30}>30 items per page</option>
            </select>
          </div>
          <div className="mt-4 flex items-start gap-2 p-3 bg-indigo-50 rounded-lg border border-indigo-100">
            <span className="text-indigo-600 text-lg mt-0.5">💡</span>
            <p className="text-sm text-gray-600 leading-relaxed">
              Choose how many items you want to see on each page of the data table. This helps you manage large datasets more efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* General Settings */}
      <div className="bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-green-500 transform hover:-translate-y-1">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-lg shadow-md">
            <span className="text-2xl">⚙️</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">General Settings</h2>
        </div>
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 hover:border-green-300 group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">📧</span>
                </div>
                <div className="flex-1">
                  <p className="text-base font-bold text-gray-800 mb-1">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive important updates and alerts via email</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-4">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all after:shadow-lg peer-checked:bg-gradient-to-r peer-checked:from-green-500 peer-checked:to-green-600"></div>
              </label>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 hover:border-green-300 group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">🔄</span>
                </div>
                <div className="flex-1">
                  <p className="text-base font-bold text-gray-800 mb-1">Auto Refresh</p>
                  <p className="text-sm text-gray-500">Automatically refresh data at regular intervals</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-4">
                <input
                  type="checkbox"
                  checked={autoRefresh}
                  onChange={(e) => setAutoRefresh(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all after:shadow-lg peer-checked:bg-gradient-to-r peer-checked:from-green-500 peer-checked:to-green-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-gray-400 transform hover:-translate-y-1">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-gradient-to-br from-gray-400 to-gray-500 p-3 rounded-lg shadow-md">
            <span className="text-2xl">ℹ️</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">About This Dashboard</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-indigo-300 transform hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 p-2 rounded-lg">
                <span className="text-xl">📛</span>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Dashboard Name</p>
            </div>
            <p className="text-lg font-bold text-gray-800 ml-11">Claros Dashboard</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-purple-300 transform hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-2 rounded-lg">
                <span className="text-xl">🔢</span>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Version</p>
            </div>
            <p className="text-lg font-bold text-gray-800 ml-11">1.0</p>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-green-300 transform hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-br from-green-100 to-green-200 p-2 rounded-lg">
                <span className="text-xl">📅</span>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Last Updated</p>
            </div>
            <p className="text-lg font-bold text-gray-800 ml-11">{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
