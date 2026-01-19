import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [stats, setStats] = useState({ artisans: 0, services: 0, bookings: 0 });
  const API_BASE = 'http://localhost:5000';

  useEffect(() => {
    fetch(`${API_BASE}/stats`)
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.log('Using default stats'));
  }, []);

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Connect with Skilled Artisans</h1>
        <p style={styles.heroSubtitle}>
          Find reliable professionals for all your needs or showcase your skills to clients
        </p>
        <div style={styles.heroButtons}>
          <Link to="/services" style={styles.primaryButton}>
            Browse Services
          </Link>
          <Link to="/services" style={styles.secondaryButton}>
            Become an Artisan
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div style={styles.stats}>
        <div style={styles.statCard}>
          <h3>{stats.artisans || 50}+</h3>
          <p>Artisans</p>
        </div>
        <div style={styles.statCard}>
          <h3>{stats.services || 100}+</h3>
          <p>Services</p>
        </div>
        <div style={styles.statCard}>
          <h3>{stats.bookings || 200}+</h3>
          <p>Bookings</p>
        </div>
      </div>

      {/* How it Works */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <div style={styles.steps}>
          <div style={styles.step}>
            <div style={styles.stepNumber}>1</div>
            <h3>Browse Services</h3>
            <p>Find skilled artisans in various categories</p>
          </div>
          <div style={styles.step}>
            <div style={styles.stepNumber}>2</div>
            <h3>Book & Connect</h3>
            <p>Schedule appointments and discuss requirements</p>
          </div>
          <div style={styles.step}>
            <div style={styles.stepNumber}>3</div>
            <h3>Get Work Done</h3>
            <p>Receive quality service and leave reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem 0',
  },
  hero: {
    textAlign: 'center',
    padding: '4rem 1rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '12px',
    color: 'white',
    marginBottom: '3rem',
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    opacity: 0.9,
  },
  heroButtons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#fff',
    color: '#667eea',
    padding: '1rem 2rem',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '8px',
    border: '2px solid white',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '4rem',
  },
  statCard: {
    textAlign: 'center',
    padding: '2rem',
  },
  statCardH3: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    marginBottom: '0.5rem',
  },
  statCardP: {
    color: '#7f8c8d',
    fontSize: '1.1rem',
  },
  section: {
    marginBottom: '4rem',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '3rem',
    color: '#2c3e50',
  },
  steps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  step: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  stepNumber: {
    width: '50px',
    height: '50px',
    backgroundColor: '#3498db',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0 auto 1rem',
  },
};

export default Home;