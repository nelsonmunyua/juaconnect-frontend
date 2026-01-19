import React, { useState } from 'react';

const ServiceCard = ({ service, onDelete }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleBookNow = () => {
    console.log('Book service:', service.id);
    // In a real app, this would navigate to booking page
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <h3 style={styles.title}>{service.title}</h3>
        <span style={styles.price}>${service.price}</span>
      </div>
      
      <p style={styles.description}>
        {showDetails ? service.description : `${service.description.substring(0, 100)}...`}
        {service.description.length > 100 && (
          <button 
            style={styles.readMore}
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Show less' : 'Read more'}
          </button>
        )}
      </p>
      
      <div style={styles.details}>
        <span style={styles.category}>{service.category}</span>
        <span style={styles.duration}>⏱️ {service.duration} mins</span>
      </div>
      
      <div style={styles.actions}>
        <button style={styles.bookButton} onClick={handleBookNow}>
          Book Now
        </button>
        {onDelete && (
          <button 
            style={styles.deleteButton}
            onClick={() => onDelete(service.id)}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1.5rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
    ':hover': {
      transform: 'translateY(-2px)',
    },
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    marginBottom: '1rem',
  },
  title: {
    margin: 0,
    fontSize: '1.25rem',
    color: '#2c3e50',
    flex: 1,
  },
  price: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#27ae60',
    marginLeft: '1rem',
  },
  description: {
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '1rem',
    minHeight: '60px',
  },
  readMore: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#3498db',
    cursor: 'pointer',
    padding: '0',
    marginLeft: '0.5rem',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #eee',
  },
  category: {
    backgroundColor: '#ecf0f1',
    padding: '0.25rem 0.75rem',
    borderRadius: '20px',
    fontSize: '0.875rem',
  },
  duration: {
    color: '#7f8c8d',
    fontSize: '0.875rem',
  },
  actions: {
    display: 'flex',
    gap: '0.5rem',
  },
  bookButton: {
    flex: 1,
    backgroundColor: '#3498db',
    color: 'white',
    padding: '0.5rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ServiceCard;