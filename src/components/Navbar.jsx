import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <Link to="/" style={styles.logo}>
          🛠️ ArtisanConnect
        </Link>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/services" style={styles.navLink}>Services</Link>
          <Link to="/bookings" style={styles.navLink}>Bookings</Link>
          <Link to="/artisan/1/dashboard" style={styles.artisanLink}>
            Artisan Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '1rem 0',
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  navLink: {
    color: 'white',
    fontSize: '1rem',
    padding: '0.5rem 0',
  },
  artisanLink: {
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    fontSize: '0.9rem',
  }
};

export default Navbar;