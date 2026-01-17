const API_BASE_URL = 'http://localhost:5000/v1';

const getToken = () => {
  return localStorage.getItem('token');
};

const setToken = (token) => {
  localStorage.setItem('token', token);
};

const removeToken = () => {
  localStorage.removeItem('token');
};

const setUserType = (userType) => {
  localStorage.setItem('user_type', userType);
};

const getUserType = () => {
  return localStorage.getItem('user_type');
};

const api = {
  // Auth
  register: async (userData) => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });
    const data = await response.json();
    if (data.success && data.data.token) {
      setToken(data.data.token);
      setUserType(data.data.user.user_type);
    }
    return data;
  },

  login: async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (data.success && data.data.token) {
      setToken(data.data.token);
      setUserType(data.data.user.user_type);
    }
    return data;
  },

  logout: () => {
    removeToken();
    localStorage.removeItem('user_type');
  },

  getUserType: getUserType,

  // User Profile
  getProfile: async () => {
    const response = await fetch(`${API_BASE_URL}/users/profile`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    return await response.json();
  },

  updateProfile: async (profileData) => {
    const response = await fetch(`${API_BASE_URL}/users/profile`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData)
    });
    return await response.json();
  },

  // Client Bookings
  createBooking: async (bookingData) => {
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData)
    });
    return await response.json();
  },

  getBookings: async (status = null) => {
    const url = status 
      ? `${API_BASE_URL}/bookings?status=${status}`
      : `${API_BASE_URL}/bookings`;
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    return await response.json();
  },

  getBooking: async (id) => {
    const response = await fetch(`${API_BASE_URL}/bookings/${id}`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    return await response.json();
  },

  updateBookingStatus: async (id, status) => {
    const response = await fetch(`${API_BASE_URL}/bookings/${id}/status`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status })
    });
    return await response.json();
  },

  deleteBooking: async (id) => {
    const response = await fetch(`${API_BASE_URL}/bookings/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    return await response.json();
  },

  searchBookings: async (query) => {
    const response = await fetch(`${API_BASE_URL}/bookings/search?q=${query}`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    return await response.json();
  },

  // ARTISAN ENDPOINTS
  getArtisanProfile: async () => {
    const response = await fetch(`${API_BASE_URL}/artisans/profile`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    return await response.json();
  },

  updateArtisanProfile: async (profileData) => {
    const response = await fetch(`${API_BASE_URL}/artisans/profile`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData)
    });
    return await response.json();
  },

  getBookingRequests: async () => {
    const response = await fetch(`${API_BASE_URL}/artisans/booking-requests`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    return await response.json();
  },

  getActiveJobs: async () => {
    const response = await fetch(`${API_BASE_URL}/artisans/active-jobs`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    return await response.json();
  },

  acceptBooking: async (bookingId) => {
    const response = await fetch(`${API_BASE_URL}/artisans/bookings/${bookingId}/accept`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    return await response.json();
  },

  rejectBooking: async (bookingId) => {
    const response = await fetch(`${API_BASE_URL}/artisans/bookings/${bookingId}/reject`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    return await response.json();
  },

  completeJob: async (bookingId) => {
    const response = await fetch(`${API_BASE_URL}/artisans/bookings/${bookingId}/complete`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    return await response.json();
  },

  getEarnings: async () => {
    const response = await fetch(`${API_BASE_URL}/artisans/earnings`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    return await response.json();
  }
};

export default api;