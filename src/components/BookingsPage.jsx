import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Search } from 'lucide-react';
import { getStatusColor, getStatusText } from '../utils/statusHelpers';
import api from '../services/api';

const BookingsPage = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBookings();
  }, [filter]);

  const loadBookings = async () => {
    setLoading(true);
    try {
      const response = filter === 'all' 
        ? await api.getBookings() 
        : await api.getBookings(filter);
      
      if (response.success) {
        setBookings(response.data);
      }
    } catch (error) {
      console.error('Error loading bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = 
      booking.service_type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.artisan_name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const getStatusCount = (status) => {
    if (status === 'all') return bookings.length;
    return bookings.filter(b => b.status === status).length;
  };

  if (loading) {
    return <div className="p-6 text-white">Loading bookings...</div>;
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">My Bookings</h1>
        <p className="text-gray-400">Manage and track all your service bookings</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search bookings..."
            className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-3 rounded-lg font-medium transition-colors $
              filter === 'all'
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            All ({getStatusCount('all')})
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-3 rounded-lg font-medium transition-colors $
              filter === 'active'
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Active ({getStatusCount('active')})
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-3 rounded-lg font-medium transition-colors $
              filter === 'pending'
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Pending ({getStatusCount('pending')})
          </button>
          <button
            onClick={() => setFilter('paid')}
            className={`px-4 py-3 rounded-lg font-medium transition-colors $
              filter === 'paid'
                ? 'bg-emerald-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Completed ({getStatusCount('paid')})
          </button>
        </div>
      </div>

      <div className="grid gap-4">
        {filteredBookings.length === 0 ? (
          <div className="bg-gray-800 rounded-lg p-12 text-center">
            <Calendar className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No bookings found</h3>
            <p className="text-gray-400">Try adjusting your filters or search query</p>
          </div>
        ) : (
          filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=$booking.artisan_name}`}
                    alt={booking.artisan_name}
                    className="w-16 h-16 rounded-full bg-gray-700"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{booking.service_type}</h3>
                    <p className="text-gray-400 mb-2">{booking.artisan_name}</p>
                    <div className={`$getStatusColor(booking.status)} text-white px-3 py-1 rounded-full text-sm inline-flex items-center space-x-1`}>
                      <span className="capitalize">{getStatusText(booking.status)}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-emerald-500">$booking.price}</p>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Calendar className="w-5 h-5" />
                    <div>
                      <p className="text-xs text-gray-500">Date</p>
                      <p className="text-white">{booking.booking_date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Clock className="w-5 h-5" />
                    <div>
                      <p className="text-xs text-gray-500">Time</p>
                      <p className="text-white">{booking.booking_time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPin className="w-5 h-5" />
                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="text-white">{booking.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-300">
                    <span className="font-medium text-white">Description:</span> {booking.description}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookingsPage;