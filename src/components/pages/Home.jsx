import React, { useState } from "react";
// import { Button, Box, Typography } from "@mui/material";
import Navbar from "../ui/Navbar";

export default function Home() {
    const [formData, setFormData] = useState({ name: '', phone: '', service: '' });

    const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Request sent! An artisan will contact you soon.');
    setFormData({ name: '', phone: '', service: '' });
  };

  return (
   <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Find Trusted Artisans. Get Quality Work Done.
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            JuaConnect links skilled Juakali artisans with clients across Kenya — fast, secure, and reliable.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Hire an Artisan
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">
              Register as Artisan
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Services We Offer</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Plumbing', 'Carpentry', 'Masonry', 'Electrical', 'Welding', 'Repairs'].map((service) => (
              <div key={service} className="text-center p-6 border rounded-lg hover:shadow-md transition">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-indigo-600 font-bold">{service[0]}</span>
                </div>
                <h3 className="font-semibold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">How JuaConnect Works</h2>
          <div className="flex flex-col md:flex-row items-center justify-around">
            {[
              { step: '1', title: 'Post a Job', desc: 'Tell us what service you need' },
              { step: '2', title: 'Get Matched', desc: 'We connect you with skilled artisans' },
              { step: '3', title: 'Get It Done', desc: 'Hire, pay securely, and rate' },
            ].map((item) => (
              <div key={item.step} className="text-center max-w-xs mb-8 md:mb-0">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Skilled Artisan?</h2>
          <p className="text-xl mb-8 opacity-90">Get connected in minutes.</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg text-gray-800"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (e.g. 07XX XXX XXX)"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg text-gray-800"
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg text-gray-800"
              required
            >
              <option value="">Select Service</option>
              <option>Plumbing</option>
              <option>Carpentry</option>
              <option>Masonry</option>
              <option>Electrical</option>
              <option>Welding</option>
              <option>General Repairs</option>
            </select>
            <button
              type="submit"
              className="w-full bg-white text-indigo-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Request Artisan
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl font-bold mb-2">JuaConnect</h3>
          <p className="mb-4">Bridging skilled artisans with clients across Kenya.</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy</a>
          </div>
          <p className="mt-6 text-gray-400">© 2026 JuaConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>

  );
}
