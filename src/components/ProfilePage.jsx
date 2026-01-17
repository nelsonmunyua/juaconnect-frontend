import React, { useState } from 'react';
import { MOCK_USER } from '../data/mockData';
import { User, Mail, Phone, MapPin, Edit2 } from 'lucide-react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: MOCK_USER.name,
    email: 'john.doe@example.com',
    phone: '+254 712 345 678',
    location: 'Nairobi, Kenya',
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log('Saved:', userData);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Profile</h1>
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 flex items-center space-x-2"
        >
          <Edit2 className="w-4 h-4" />
          <span>{isEditing ? 'Save' : 'Edit'}</span>
        </button>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 space-y-6">
        <div className="flex items-center space-x-4">
          <img src={MOCK_USER.avatar} alt="Avatar" className="w-24 h-24 rounded-full bg-gray-600" />
          <div>
            <h2 className="text-xl font-bold text-white">{userData.name}</h2>
            <p className="text-gray-400">Client</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <User className="w-5 h-5 text-gray-400" />
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg"
              />
            ) : (
              <span className="text-white">{userData.name}</span>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-gray-400" />
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg"
              />
            ) : (
              <span className="text-white">{userData.email}</span>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-gray-400" />
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg"
              />
            ) : (
              <span className="text-white">{userData.phone}</span>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-gray-400" />
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={userData.location}
                onChange={handleChange}
                className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg"
              />
            ) : (
              <span className="text-white">{userData.location}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
