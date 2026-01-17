import React, { useState } from 'react';
import { Menu, X, Zap, CheckCircle } from 'lucide-react';

const LandingPage = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <span className="text-xl font-bold text-gray-900">JuaConnect</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">How it Works</a>
              <button
                onClick={() => onNavigate('login')}
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Login
              </button>
              <button
                onClick={() => onNavigate('signup')}
                className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition"
              >
                Sign Up
              </button>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-gray-600 hover:text-gray-900">Features</a>
              <a href="#how-it-works" className="block text-gray-600 hover:text-gray-900">How it Works</a>
              <button
                onClick={() => onNavigate('login')}
                className="block w-full text-left text-gray-600 hover:text-gray-900"
              >
                Login
              </button>
              <button
                onClick={() => onNavigate('signup')}
                className="block w-full bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </header>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Connect with skilled artisans in minutes
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Find trusted Juakali professionals for plumbing, electrical work, carpentry, and more. Simple, fast, and reliable.
          </p>
          <button
            onClick={() => onNavigate('signup')}
            className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition shadow-lg hover:shadow-xl"
          >
            Get Started Free
          </button>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why JuaConnect?</h2>
            <p className="text-xl text-gray-600">Everything you need to manage your service bookings</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Booking</h3>
              <p className="text-gray-600">Book skilled artisans in minutes. Track your bookings in real-time.</p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Verified Professionals</h3>
              <p className="text-gray-600">All artisans are vetted for quality and reliability.</p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Simple Dashboard</h3>
              <p className="text-gray-600">Manage bookings, payments, and communication in one place.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Get started in three simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Create Account</h3>
              <p className="text-gray-600">Sign up in seconds and access your dashboard</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Book Service</h3>
              <p className="text-gray-600">Choose your service and schedule a time</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Get It Done</h3>
              <p className="text-gray-600">The artisan completes your job professionally</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to get started?</h2>
          <p className="text-xl text-emerald-100 mb-8">Join JuaConnect today and find the right artisan for your needs</p>
          <button
            onClick={() => onNavigate('signup')}
            className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition shadow-lg"
          >
            Create Your Account
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">J</span>
              </div>
              <span className="text-xl font-bold text-white">JuaConnect</span>
            </div>
            <p className="text-sm">© 2025 JuaConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;