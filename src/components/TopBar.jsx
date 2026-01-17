import React from 'react';
import { Search, Plus } from 'lucide-react';
import { MOCK_USER } from '../data/mockData';

const TopBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="bg-gray-800 border-b border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Welcome, {MOCK_USER.name.split(' ')[0]}</h1>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-emerald-700">
          <Plus className="w-5 h-5" />
          <span>Book a service</span>
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for service"
          className="w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>
    </div>
  );
};

export default TopBar;