import React from 'react';
import TopBar from './TopBar';
import UpcomingBookings from './UpcomingBookings';
import Payments from './Payments';

const MainContent = ({ searchQuery, setSearchQuery }) => {
  return (
    <main className="flex-1 overflow-y-auto">
      <TopBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="p-6 space-y-8">
        <UpcomingBookings />
        <Payments />
      </div>
    </main>
  );
};

export default MainContent;