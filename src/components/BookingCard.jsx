import React from 'react';
import { ChevronDown } from 'lucide-react';
import { getStatusColor, getStatusText } from '../utils/statusHelpers';

const BookingCard = ({ booking }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${booking.artisan}`}
          alt={booking.artisan}
          className="w-12 h-12 rounded-full bg-gray-600"
        />
        <div>
          <h3 className="text-white font-semibold">{booking.service}</h3>
          <p className="text-gray-400 text-sm">{booking.artisan} · {booking.description}</p>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="text-right">
          <p className="text-white font-semibold">${booking.price}</p>
          <p className="text-gray-400 text-sm">{booking.date}</p>
        </div>
        <div className={`${getStatusColor(booking.status)} text-white px-4 py-2 rounded-lg flex items-center space-x-2`}>
          <span className="capitalize">{getStatusText(booking.status)}</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default BookingCard;