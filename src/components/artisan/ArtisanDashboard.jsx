import React, { useState } from 'react';
import Sidebar from '../artisan/Sidebar';
import { Home, Calendar, Star, CheckCircle, Bell, LogOut } from 'lucide-react';

const ArtisanDashboard = () => {
  const [activeNav, setActiveNav] = useState('dashboard');

  const mainStyle = {
    display: 'flex',
    height: '100vh',
  };

  const sidebarStyle = {
    width: '250px',
    backgroundColor: '#2c3e50',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  };

  const headerStyle = {
    padding: '24px',
    borderBottom: '1px solid #34495e',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  };

  const navStyle = {
    flex: 1,
    padding: '16px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  };

  const navButtonStyle = (isActive) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: isActive ? '#3498db' : 'transparent',
    color: isActive ? '#fff' : '#bdc3c7',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s',
  });

  const contentStyle = {
    flex: 1,
    overflowY: 'auto',
    backgroundColor: '#f5f5f5',
    padding: '32px',
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    marginBottom: '24px',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: '16px',
  };

  const statsStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    marginBottom: '24px',
  };

  const statCardStyle = {
    backgroundColor: '#fff',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const statLabelStyle = {
    fontSize: '13px',
    color: '#7f8c8d',
    fontWeight: '500',
  };

  const statValueStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#3498db',
  };

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'verification', label: 'Verification', icon: CheckCircle },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  return (
    <div style={mainStyle}>
      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <div style={headerStyle}>
          <Home size={28} color="#3498db" />
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>JuaConnect</span>
        </div>

        <nav style={navStyle}>
          {navItems.map(item => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                style={navButtonStyle(activeNav === item.id)}
                onMouseEnter={(e) => {
                  if (activeNav !== item.id) {
                    e.target.style.backgroundColor = '#34495e';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeNav !== item.id) {
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <IconComponent size={20} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div style={{ padding: '16px', borderTop: '1px solid #34495e' }}>
          <button
            style={{...navButtonStyle(false), color: '#e74c3c'}}
            onClick={() => console.log('Logging out...')}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Content */}
      <main style={contentStyle}>
        <h1 style={titleStyle}>
          {activeNav === 'dashboard' && 'Dashboard'}
          {activeNav === 'bookings' && 'My Bookings'}
          {activeNav === 'reviews' && 'Reviews & Ratings'}
          {activeNav === 'verification' && 'Profile Verification'}
          {activeNav === 'notifications' && 'Notifications'}
        </h1>

        {activeNav === 'dashboard' && (
          <>
            <div style={statsStyle}>
              <div style={statCardStyle}>
                <div>
                  <div style={statLabelStyle}>Total Bookings</div>
                  <div style={statValueStyle}>12</div>
                </div>
                <Calendar size={32} color="#3498db" />
              </div>
              <div style={statCardStyle}>
                <div>
                  <div style={statLabelStyle}>Completed Jobs</div>
                  <div style={statValueStyle}>10</div>
                </div>
                <CheckCircle size={32} color="#27ae60" />
              </div>
              <div style={statCardStyle}>
                <div>
                  <div style={statLabelStyle}>Average Rating</div>
                  <div style={statValueStyle}>4.8★</div>
                </div>
                <Star size={32} color="#f39c12" />
              </div>
              <div style={statCardStyle}>
                <div>
                  <div style={statLabelStyle}>Total Earnings</div>
                  <div style={statValueStyle}>KES 45,000</div>
                </div>
                <span style={{ fontSize: '24px' }}>💰</span>
              </div>
            </div>

            <div style={cardStyle}>
              <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#2c3e50' }}>
                Welcome to Your Artisan Dashboard
              </h2>
              <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                Manage your bookings, track your earnings, and grow your business with JuaConnect. 
                Your profile is pending verification. Complete your profile details to start accepting jobs.
              </p>
            </div>
          </>
        )}

        {activeNav === 'bookings' && (
          <div style={cardStyle}>
            <p style={{ color: '#7f8c8d' }}>No bookings yet. Your profile is pending verification.</p>
          </div>
        )}

        {activeNav === 'reviews' && (
          <div style={cardStyle}>
            <p style={{ color: '#7f8c8d' }}>No reviews yet. Complete jobs to get customer reviews.</p>
          </div>
        )}

        {activeNav === 'verification' && (
          <div style={cardStyle}>
            <p style={{ color: '#7f8c8d' }}>
              Your profile is pending verification. Our team will verify your credentials within 24 hours.
            </p>
          </div>
        )}

        {activeNav === 'notifications' && (
          <div style={cardStyle}>
            <p style={{ color: '#7f8c8d' }}>You have no new notifications.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ArtisanDashboard;
