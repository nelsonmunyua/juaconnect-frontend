import React from 'react';
import TopBar from './TopBar';
import UpcomingBookings from './UpcomingBookings';
import Payments from './Payments';
import BookingsPage from './BookingsPage';
import PaymentsPage from './PaymentsPage';
import NotificationsPage from './NotificationsPage';
import ProfilePage from './ProfilePage';

const MainContent = ({ activeNav, searchQuery, setSearchQuery }) => {
  return (
    <main className="flex-1 overflow-y-auto">
      <TopBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <div className="p-6 space-y-8">
        {activeNav === 'dashboard' && (
          <>
            <UpcomingBookings />
            <Payments />
          </>
        )}
        {activeNav === 'bookings' && <BookingsPage />}
        {activeNav === 'payments' && <PaymentsPage />}
        {activeNav === 'notifications' && <NotificationsPage />}
        {activeNav === 'profile' && <ProfilePage />}
      </div>
    </main>
  );
};

export default MainContent;