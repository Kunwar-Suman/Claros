import React from 'react';

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow animate-pulse">
      {/* Search Bar Skeleton */}
      <div className="p-6 border-b border-gray-200">
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>

      {/* Table Skeleton */}
      <div className="p-6 space-y-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;

