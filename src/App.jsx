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
    <div className="flex h-screen">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} onLogout={handleLogout} />
      <MainContent activeNav={activeNav} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default App;
