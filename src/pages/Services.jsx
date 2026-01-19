import React, { useState, useEffect } from "react";
import ServiceForm from "../components/ServiceForm";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  const API_BASE = "http://localhost:5000";

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch(`${API_BASE}/services`);
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.log("Using mock data");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch(`${API_BASE}/services`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const newService = await response.json();
        setServices([...services, newService]);
        resetForm();
        setShowForm(false);
        alert("Service added successfully!");
      }
    } catch (error) {
      console.log("Error adding service:", error);
      alert("Error adding service");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        const response = await fetch(`${API_BASE}/services/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          setServices(services.filter((s) => s.id !== id));
          alert("Service deleted!");
        }
      } catch (error) {
        console.log("Error deleting service:", error);
      }
    }
  };

  if (loading) {
    return (
      <div style={styles.loading}>
        <h1>Services Marketplace</h1>
        <p>Loading services...</p>
      </div>
    );
  }

  return (
    <div>
      <div style={styles.header}>
        <h1>Services Marketplace</h1>
        <button style={styles.addButton} onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "+ Add New Service"}
        </button>
      </div>

      {showForm && <ServiceForm onSubmit={handleSubmit} />}

      <div style={styles.servicesGrid}>
        {services.length === 0 ? (
          <div style={styles.noServices}>
            <p>No services available. Be the first to add one!</p>
          </div>
        ) : (
          services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
  },
  addButton: {
    backgroundColor: "#27ae60",
    color: "white",
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "1.5rem",
  },
  noServices: {
    gridColumn: "1 / -1",
    textAlign: "center",
    padding: "3rem",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  loading: {
    textAlign: "center",
    padding: "3rem",
  },
};

export default Services;
