// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from './pages/LandingPage';
import ArtisanLayout from "./artisan/ArtisanLayout.jsx";
import Dashboard from "./artisan/pages/Dashboard.jsx";
import Bookings from "./artisan/pages/Bookings.jsx";
import Availability from "./artisan/pages/Availability.jsx";
import Reviews from "./artisan/pages/Reviews.jsx";
import Verification from "./artisan/pages/Verification.jsx";
import Notifications from "./artisan/pages/Notifications.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/artisan" element={<ArtisanLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="availability" element={<Availability />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="verification" element={<Verification />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
