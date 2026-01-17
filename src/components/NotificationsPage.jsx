import React from 'react';
import { Bell, CheckCircle, AlertCircle, Info } from 'lucide-react';

const NotificationsPage = () => {
  const notifications = [
    { id: 1, type: 'success', title: 'Booking Confirmed', message: 'Your booking with John Handyman has been confirmed.', time: '2 hours ago' },
    { id: 2, type: 'info', title: 'Payment Received', message: 'Payment of $150 has been processed successfully.', time: '5 hours ago' },
    { id: 3, type: 'warning', title: 'Upcoming Booking', message: 'You have a booking scheduled for tomorrow at 10:00 AM.', time: '1 day ago' },
    { id: 4, type: 'success', title: 'Review Submitted', message: 'Your review for Mike Electrician has been posted.', time: '2 days ago' },
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'success': return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'warning': return <AlertCircle className="w-6 h-6 text-yellow-500" />;
      default: return <Info className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Notifications</h1>
        <button className="text-emerald-500 hover:text-emerald-400">Mark all as read</button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="bg-gray-800 rounded-lg p-4 flex items-start space-x-4">
            {getIcon(notification.type)}
            <div className="flex-1">
              <h3 className="text-white font-semibold">{notification.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{notification.message}</p>
              <p className="text-gray-500 text-xs mt-2">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;
