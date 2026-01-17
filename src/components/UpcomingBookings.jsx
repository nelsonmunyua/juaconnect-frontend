import React from 'react';
import BookingCard from './BookingCard';
import { MOCK_BOOKINGS } from '../data/mockData';

const UpcomingBookings = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Upcoming Bookings</h2>
        <button className="text-emerald-500 hover:text-emerald-400">View All</button>
      </div>

      <div className="space-y-4">
        {MOCK_BOOKINGS.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </section>
  );
};

export default UpcomingBookings;