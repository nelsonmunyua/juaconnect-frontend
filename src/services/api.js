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
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
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
    const response = await fetch(`${API_BASE_URL}/auth/signin`, {
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
    const response = await fetch(`${API_BASE_URL}/auth/profile`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    return await response.json();
  },

  updateProfile: async (profileData) => {
    const response = await fetch(`${API_BASE_URL}/auth/profile`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData)
    });
    return await response.json();
  },

  // Client Service Requests
  createServiceRequest: async (requestData) => {
    const response = await fetch(`${API_BASE_URL}/client/requests`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData)
    });
    return await response.json();
  },

  getMyRequests: async () => {
    const response = await fetch(`${API_BASE_URL}/client/requests`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    return await response.json();
  },

  getRequestDetail: async (id) => {
    const response = await fetch(`${API_BASE_URL}/client/requests/${id}`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    return await response.json();
  },

  cancelRequest: async (id) => {
    const response = await fetch(`${API_BASE_URL}/client/requests/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'cancelled' })
    });
    return await response.json();
  },

  getMyBookings: async () => {
    const response = await fetch(`${API_BASE_URL}/client/bookings`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    return await response.json();
  },

  // Artisan Endpoints
  getAvailableRequests: async () => {
    const response = await fetch(`${API_BASE_URL}/artisan/available-requests`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    return await response.json();
  },

  getAcceptedRequests: async () => {
    const response = await fetch(`${API_BASE_URL}/artisan/accepted-requests`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    return await response.json();
  },

  acceptRequest: async (requestId) => {
    const response = await fetch(`${API_BASE_URL}/artisan/requests/${requestId}/accept`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      }
    });
    return await response.json();
  },

  startWork: async (requestId, totalAmount) => {
    const response = await fetch(`${API_BASE_URL}/artisan/requests/${requestId}/start`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ total_amount: totalAmount })
    });
    return await response.json();
  },

  completeWork: async (requestId) => {
    const response = await fetch(`${API_BASE_URL}/artisan/requests/${requestId}/complete`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getToken()}`,
        'Content-Type': 'application/json',
      }
    });
    return await response.json();
  },

  searchArtisans: async (serviceCategory, location) => {
    const params = new URLSearchParams();
    if (serviceCategory) params.append('service_category', serviceCategory);
    if (location) params.append('location', location);
    
    const response = await fetch(`${API_BASE_URL}/artisan/search?${params.toString()}`);
    return await response.json();
  },

  // Artisan Profile
  getArtisanProfile: async () => {
    const response = await fetch(`${API_BASE_URL}/artisan/profile`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    });
    return await response.json();
  },

  // Legacy methods (kept for compatibility)
  createBooking: async (bookingData) => {
    const response = await fetch(`${API_BASE_URL}/client/bookings`, {
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
    return await api.getMyBookings();
  },

  getBooking: async (id) => {
    return await api.getRequestDetail(id);
  },

  getBookingRequests: async () => {
    return await api.getAvailableRequests();
  },

  getActiveJobs: async () => {
    return await api.getAcceptedRequests();
  },

  acceptBooking: async (bookingId) => {
    return await api.acceptRequest(bookingId);
  },

  completeJob: async (bookingId) => {
    return await api.completeWork(bookingId);
  }
};

export default api;