import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Bookings from './pages/Bookings';
import ArtisanDashboard from './pages/ArtisanDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/artisan/:id/dashboard" element={<ArtisanDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;