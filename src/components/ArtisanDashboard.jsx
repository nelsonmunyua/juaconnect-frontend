import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ArtisanDashboard = () => {
  const { id } = useParams();
  const [dashboardData, setDashboardData] = useState(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);

  const API_BASE = "http://localhost:5000";

  useEffect(() => {
    fetchDashboardData();
  }, [id]);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch(`${API_BASE}/artisan/${id}/dashboard`);
      const data = await response.json();
      setDashboardData(data);
    } catch (error) {
      console.log("Using mock dashboard data");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (bookingId, newStatus) => {
    try {
      const response = await fetch(`${API_BASE}/bookings/${bookingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        // Update local state
        setDashboardData((prev) => ({
          ...prev,
          bookings: prev.bookings.map((b) =>
            b.id === bookingId ? { ...b, status: newStatus } : b,
          ),
        }));
        alert("Booking status updated!");
      }
    } catch (error) {
      console.log("Error updating status:", error);
    }
  };

  if (loading) {
    return (
      <div style={styles.loading}>
        <h1>Artisan Dashboard</h1>
        <p>Loading dashboard data...</p>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div style={styles.error}>
        <h1>Error Loading Dashboard</h1>
        <p>Unable to load dashboard data. Please try again.</p>
      </div>
    );
  }

  const { artisan, services, bookings, reviews, stats } = dashboardData;

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1>{artisan.username}'s Dashboard</h1>
        <p style={styles.bio}>{artisan.bio}</p>

        <div style={styles.stats}>
          <div style={styles.stat}>
            <h3>{stats.total_services}</h3>
            <p>Services</p>
          </div>
          <div style={styles.stat}>
            <h3>{stats.total_bookings}</h3>
            <p>Bookings</p>
          </div>
          <div style={styles.stat}>
            <h3>{stats.pending_bookings}</h3>
            <p>Pending</p>
          </div>
          <div style={styles.stat}>
            <h3>${stats.total_revenue}</h3>
            <p>Revenue</p>
          </div>
          <div style={styles.stat}>
            <h3>{stats.average_rating.toFixed(1)}</h3>
            <p>Rating</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={styles.tabs}>
        <button
          style={activeTab === "overview" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          style={activeTab === "services" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("services")}
        >
          Services ({services.length})
        </button>
        <button
          style={activeTab === "bookings" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("bookings")}
        >
          Bookings ({bookings.length})
        </button>
        <button
          style={activeTab === "reviews" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews ({reviews.length})
        </button>
      </div>

      {/* Content */}
      <div style={styles.content}>
        {activeTab === "overview" && (
          <div style={styles.overview}>
            <div style={styles.overviewGrid}>
              <div style={styles.card}>
                <h3>Recent Bookings</h3>
                {bookings.slice(0, 3).map((booking) => (
                  <div key={booking.id} style={styles.bookingItem}>
                    <div>
                      <strong>Booking #{booking.id}</strong>
                      <p>{new Date(booking.date).toLocaleDateString()}</p>
                    </div>
                    <span style={styles.status(booking.status)}>
                      {booking.status}
                    </span>
                  </div>
                ))}
              </div>

              <div style={styles.card}>
                <h3>Recent Reviews</h3>
                {reviews.slice(0, 2).map((review) => (
                  <div key={review.id} style={styles.reviewItem}>
                    <div style={styles.rating}>
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </div>
                    <p style={styles.reviewComment}>{review.comment}</p>
                    <small>
                      {new Date(review.created_at).toLocaleDateString()}
                    </small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "services" && (
          <div style={styles.card}>
            <h3>My Services</h3>
            <div style={styles.servicesList}>
              {services.map((service) => (
                <div key={service.id} style={styles.serviceItem}>
                  <h4>{service.title}</h4>
                  <div style={styles.serviceDetails}>
                    <span style={styles.price}>${service.price}</span>
                    <span style={styles.category}>{service.category}</span>
                    <span style={styles.duration}>{service.duration} mins</span>
                  </div>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "bookings" && (
          <div style={styles.card}>
            <h3>Manage Bookings</h3>
            <div style={styles.bookingsTable}>
              <div style={styles.tableHeader}>
                <span>Booking ID</span>
                <span>Date</span>
                <span>Status</span>
                <span>Actions</span>
              </div>
              {bookings.map((booking) => (
                <div key={booking.id} style={styles.tableRow}>
                  <span>#{booking.id}</span>
                  <span>{new Date(booking.date).toLocaleDateString()}</span>
                  <span>
                    <select
                      value={booking.status}
                      onChange={(e) =>
                        handleStatusUpdate(booking.id, e.target.value)
                      }
                      style={styles.statusSelect}
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </span>
                  <span>
                    <button
                      style={styles.completeButton}
                      onClick={() =>
                        handleStatusUpdate(booking.id, "completed")
                      }
                    >
                      Mark Complete
                    </button>
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div style={styles.card}>
            <h3>Customer Reviews</h3>
            {reviews.map((review) => (
              <div key={review.id} style={styles.reviewCard}>
                <div style={styles.reviewHeader}>
                  <div style={styles.rating}>
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>
                  <div>
                    <small>
                      {new Date(review.created_at).toLocaleDateString()}
                    </small>
                    <div style={styles.helpfulCount}>
                      👍 {review.helpful_count} people found this helpful
                    </div>
                  </div>
                </div>
                <p style={styles.reviewText}>{review.comment}</p>
                <button style={styles.helpfulButton}>Mark as Helpful</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem 0",
  },
  header: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    marginBottom: "2rem",
  },
  bio: {
    color: "#666",
    marginBottom: "2rem",
    lineHeight: "1.6",
  },
  stats: {
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap",
  },
  stat: {
    textAlign: "center",
    padding: "1rem",
    minWidth: "120px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
  },
  statH3: {
    fontSize: "2rem",
    color: "#2c3e50",
    marginBottom: "0.5rem",
  },
  statP: {
    color: "#7f8c8d",
  },
  tabs: {
    display: "flex",
    gap: "0",
    borderBottom: "2px solid #eee",
    marginBottom: "2rem",
  },
  tab: {
    padding: "1rem 2rem",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "2px solid transparent",
    fontSize: "1rem",
    cursor: "pointer",
    color: "#666",
  },
  activeTab: {
    padding: "1rem 2rem",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "2px solid #3498db",
    fontSize: "1rem",
    cursor: "pointer",
    color: "#3498db",
    fontWeight: "bold",
  },
  content: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    minHeight: "400px",
  },
  overview: {
    padding: "1rem",
  },
  overviewGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
  },
  card: {
    padding: "1.5rem",
    border: "1px solid #eee",
    borderRadius: "8px",
  },
  bookingItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.75rem 0",
    borderBottom: "1px solid #eee",
  },
  status: (status) => ({
    padding: "0.25rem 0.75rem",
    borderRadius: "20px",
    fontSize: "0.875rem",
    backgroundColor:
      status === "completed"
        ? "#d4edda"
        : status === "confirmed"
          ? "#d1ecf1"
          : status === "pending"
            ? "#fff3cd"
            : "#f8d7da",
    color:
      status === "completed"
        ? "#155724"
        : status === "confirmed"
          ? "#0c5460"
          : status === "pending"
            ? "#856404"
            : "#721c24",
  }),
  reviewItem: {
    padding: "1rem 0",
    borderBottom: "1px solid #eee",
  },
  rating: {
    color: "#f39c12",
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },
  reviewComment: {
    margin: "0.5rem 0",
    color: "#666",
  },
  servicesList: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  serviceItem: {
    padding: "1rem",
    border: "1px solid #eee",
    borderRadius: "6px",
  },
  serviceDetails: {
    display: "flex",
    gap: "1rem",
    margin: "0.5rem 0",
  },
  price: {
    fontWeight: "bold",
    color: "#27ae60",
  },
  category: {
    backgroundColor: "#ecf0f1",
    padding: "0.25rem 0.5rem",
    borderRadius: "4px",
    fontSize: "0.875rem",
  },
  duration: {
    color: "#7f8c8d",
    fontSize: "0.875rem",
  },
  bookingsTable: {
    display: "flex",
    flexDirection: "column",
  },
  tableHeader: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 2fr 2fr",
    padding: "1rem",
    backgroundColor: "#f8f9fa",
    fontWeight: "bold",
    borderBottom: "2px solid #ddd",
  },
  tableRow: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 2fr 2fr",
    padding: "1rem",
    borderBottom: "1px solid #eee",
    alignItems: "center",
  },
  statusSelect: {
    padding: "0.5rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    width: "100%",
  },
  completeButton: {
    backgroundColor: "#27ae60",
    color: "white",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  reviewCard: {
    padding: "1.5rem",
    border: "1px solid #eee",
    borderRadius: "8px",
    marginBottom: "1rem",
  },
  reviewHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "1rem",
  },
  helpfulCount: {
    color: "#666",
    fontSize: "0.875rem",
    marginTop: "0.25rem",
  },
  reviewText: {
    color: "#666",
    lineHeight: "1.6",
    margin: "1rem 0",
  },
  helpfulButton: {
    backgroundColor: "#3498db",
    color: "white",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "0.875rem",
  },
  loading: {
    textAlign: "center",
    padding: "3rem",
    fontSize: "1.2rem",
  },
  error: {
    textAlign: "center",
    padding: "3rem",
    color: "#e74c3c",
  },
};

export default ArtisanDashboard;
