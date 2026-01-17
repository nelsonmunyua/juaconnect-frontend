import React from 'react';
import BookingCard from './BookingCard';
import { MOCK_BOOKINGS } from '../data/mockData';

const BookingsPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">All Bookings</h1>
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600">
          New Booking
        </button>
      </div>

      <div className="space-y-4">
        {MOCK_BOOKINGS.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default BookingsPage;
