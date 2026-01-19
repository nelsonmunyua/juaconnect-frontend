import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Bookings = () => {
const [bookings, setBookings] = useState([]);
const [services, setServices] = useState([]);
const [loading, setLoading] = useState(true);

const API_BASE = 'http://localhost:5000';

useEffect(() => {
fetchData();
}, []);

const fetchData = async () => {
try {
const [bookingsRes, servicesRes] = await Promise.all([
fetch(`${API_BASE}/bookings`),
fetch(`${API_BASE}/services`)
]);

const bookingsData = await bookingsRes.json();
const servicesData = await servicesRes.json();

setBookings(bookingsData);
setServices(servicesData);
} catch (error) {
console.log('Using mock data');

} finally {
setLoading(false);
}
};

const validationSchema = Yup.object({
service_id: Yup.number().required('Service is required'),
client_id: Yup.number().required('Client ID is required'),
date: Yup.date().required('Date is required'),
notes: Yup.string().max(500, 'Too long')
});

const handleSubmit = async (values, { resetForm }) => {
try {
const response = await fetch(`${API_BASE}/bookings`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(values)
});

if (response.ok) {
const newBooking = await response.json();
setBookings([...bookings, newBooking]);
resetForm();
alert('Booking created successfully!');
}
} catch (error) {
console.log('Error creating booking:', error);
alert('Error creating booking');
}
};

const handleStatusUpdate = async (bookingId, newStatus) => {
try {
const response = await fetch(`${API_BASE}/bookings/${bookingId}`, {
method: 'PATCH',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ status: newStatus })
});

if (response.ok) {
setBookings(bookings.map(b =>
b.id === bookingId ? { ...b, status: newStatus } : b
));
}
} catch (error) {
console.log('Error updating status:', error);
}
};

if (loading) {
return (
<div style={styles.loading}>
<h1>Bookings Management</h1>
<p>Loading bookings...</p>
</div>
);
}

return (
<div style={styles.container}>
<h1>Bookings Management</h1>

<div style={styles.sections}>
{/* Create Booking Form */}
<div style={styles.formSection}>
<h2>Create New Booking</h2>
<Formik
initialValues={{
service_id: '',
client_id: 1,
date: '',
notes: ''
}}
validationSchema={validationSchema}
onSubmit={handleSubmit}
>
{({ isSubmitting }) => (
<Form style={styles.form}>
<div style={styles.formGroup}>
<label htmlFor="service_id">Service *</label>
<Field as="select" id="service_id" name="service_id" style={styles.input}>
<option value="">Select a service</option>
{services.map(service => (
<option key={service.id} value={service.id}>
{service.title}
</option>
))}
</Field>
<ErrorMessage name="service_id" component="div" style={styles.error} />
</div>

<div style={styles.formGroup}>
<label htmlFor="client_id">Client ID *</label>
<Field type="number" id="client_id" name="client_id" style={styles.input} />
<ErrorMessage name="client_id" component="div" style={styles.error} />
</div>

<div style={styles.formGroup}>
<label htmlFor="date">Date & Time *</label>
<Field type="datetime-local" id="date" name="date" style={styles.input} />
<ErrorMessage name="date" component="div" style={styles.error} />
</div>

<div style={styles.formGroup}>
<label htmlFor="notes">Notes (Optional)</label>
<Field as="textarea" id="notes" name="notes" style={styles.textarea} rows="3" />
<ErrorMessage name="notes" component="div" style={styles.error} />
</div>

<button type="submit" disabled={isSubmitting} style={styles.submitButton}>
{isSubmitting ? 'Creating...' : 'Create Booking'}
</button>
</Form>
)}
</Formik>
</div>

{/* Bookings List */}
<div style={styles.listSection}>
<h2>All Bookings</h2>
{bookings.length === 0 ? (
<p style={styles.noBookings}>No bookings yet. Create your first booking!</p>
) : (
<div style={styles.bookingsList}>
{bookings.map(booking => (
<div key={booking.id} style={styles.bookingCard}>
<div style={styles.bookingHeader}>
<h4>Booking #{booking.id}</h4>
<select
value={booking.status}
onChange={(e) => handleStatusUpdate(booking.id, e.target.value)}
style={styles.statusSelect(booking.status)}
>
<option value="pending">Pending</option>
<option value="confirmed">Confirmed</option>
<option value="completed">Completed</option>
<option value="cancelled">Cancelled</option>
</select>
</div>

<div style={styles.bookingDetails}>
<p><strong>Date:</strong> {new Date(booking.date).toLocaleString()}</p>
<p><strong>Client ID:</strong> {booking.client_id}</p>
<p><strong>Service ID:</strong> {booking.service_id}</p>
{booking.notes && <p><strong>Notes:</strong> {booking.notes}</p>}
</div>
</div>
))}
</div>
)}
</div>
</div>
</div>
);
};

const styles = {
container: {
padding: '2rem 0',
},
sections: {
display: 'grid',
gridTemplateColumns: '1fr 1fr',
gap: '2rem',
marginTop: '2rem',
},
formSection: {
backgroundColor: 'white',
padding: '2rem',
borderRadius: '8px',
boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
},
listSection: {
backgroundColor: 'white',
padding: '2rem',
borderRadius: '8px',
boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
maxHeight: '600px',
overflowY: 'auto',
},
form: {
display: 'flex',
flexDirection: 'column',
gap: '1rem',
},
formGroup: {
display: 'flex',
flexDirection: 'column',
},
input: {
padding: '0.75rem',
border: '1px solid #ddd',
borderRadius: '6px',
fontSize: '1rem',
marginTop: '0.25rem',
},
textarea: {
padding: '0.75rem',
border: '1px solid #ddd',
borderRadius: '6px',
fontSize: '1rem',
marginTop: '0.25rem',
resize: 'vertical',
},
error: {
color: '#e74c3c',
fontSize: '0.875rem',
marginTop: '0.25rem',
},
submitButton: {
backgroundColor: '#27ae60',
color: 'white',
padding: '0.75rem',
border: 'none',
borderRadius: '6px',
fontSize: '1rem',
cursor: 'pointer',
marginTop: '1rem',
},
loading: {
textAlign: 'center',
padding: '3rem',
fontSize: '1.2rem',
},
noBookings: {
textAlign: 'center',
padding: '2rem',
color: '#7f8c8d',
},
bookingsList: {
display: 'flex',
flexDirection: 'column',
gap: '1rem',
},
bookingCard: {
border: '1px solid #eee',
borderRadius: '8px',
padding: '1rem',
},
bookingHeader: {
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
marginBottom: '1rem',
},
statusSelect: (status) => ({
padding: '0.25rem 0.5rem',
borderRadius: '4px',
border: '1px solid #ddd',
backgroundColor:
status === 'completed' ? '#d4edda' :
status === 'confirmed' ? '#d1ecf1' :
status === 'pending' ? '#fff3cd' : '#f8d7da',
color:
status === 'completed' ? '#155724' :
status === 'confirmed' ? '#0c5460' :
status === 'pending' ? '#856404' : '#721c24',
}),
bookingDetails: {
color: '#666',
lineHeight: '1.6',
},
};

export default Bookings;