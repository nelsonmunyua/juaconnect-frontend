import React from 'react';
import { Home, Calendar, CreditCard, Bell, User, LogOut } from 'lucide-react';
import { MOCK_USER } from '../data/mockData';

const Sidebar = ({ activeNav, setActiveNav, onLogout }) => {
  return (
    <aside className="w-64 bg-gray-800 flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <Home className="w-8 h-8 text-emerald-500" />
          <span className="text-xl font-bold text-white">Dashboard</span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <button
          onClick={() => setActiveNav('dashboard')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
            activeNav === 'dashboard' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Dashboard</span>
        </button>

        <button
          onClick={() => setActiveNav('bookings')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
            activeNav === 'bookings' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
          }`}
        >
          <Calendar className="w-5 h-5" />
          <span>Bookings</span>
        </button>

        <button
          onClick={() => setActiveNav('payments')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
            activeNav === 'payments' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
          }`}
        >
          <CreditCard className="w-5 h-5" />
          <span>Payments</span>
        </button>

        <button
          onClick={() => setActiveNav('notifications')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
            activeNav === 'notifications' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
          }`}
        >
          <Bell className="w-5 h-5" />
          <span>Notifications</span>
        </button>

        <button
          onClick={() => setActiveNav('profile')}
          className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg ${
            activeNav === 'profile' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'
          }`}
        >
          <User className="w-5 h-5" />
          <span>Profile</span>
        </button>
      </nav>

      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center space-x-3 mb-4">
          <img src={MOCK_USER.avatar} alt="Avatar" className="w-10 h-10 rounded-full bg-gray-600" />
          <span className="text-white font-medium">{MOCK_USER.name}</span>
        </div>
        <button
          onClick={onLogout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;