import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNav, setActiveNav] = useState('dashboard');

  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar 
        activeNav={activeNav} 
        setActiveNav={setActiveNav} 
        onLogout={handleLogout} 
      />
      <MainContent 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
    </div>
  );
};

export default App;