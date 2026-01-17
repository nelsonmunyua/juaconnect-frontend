import React from 'react';
import PaymentCard from './PaymentCard';
import { MOCK_BOOKINGS } from '../data/mockData';

const Payments = () => {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Payments</h2>
        <button className="text-emerald-500 hover:text-emerald-400">View All</button>
      </div>

      <div className="space-y-4">
        {MOCK_BOOKINGS.slice(0, 2).map((booking) => (
          <PaymentCard key={booking.id} booking={booking} />
        ))}
      </div>
    </section>
  );
};

export default Payments;