# JuaConnect Frontend

A modern React-based frontend application for JuaConnect, a platform connecting clients with artisans for service bookings, reviews, and availability management.

## Overview

JuaConnect Frontend is a responsive web application built with React and Vite, designed to provide a seamless user experience for both clients and artisans. The application enables users to browse services, book appointments, manage availability, view reviews, and handle notifications.

## Features

- **User Authentication**: Sign in and sign up functionality for secure access
- **Artisan Dashboard**: Comprehensive dashboard for artisans to manage their services
- **Booking Management**: View and manage service bookings
- **Availability Management**: Set and update service availability
- **Reviews & Ratings**: Client reviews and ratings for artisans
- **Notifications**: Real-time notifications for bookings and updates
- **Verification System**: Identity and credential verification for artisans
- **Responsive Design**: Mobile-first, fully responsive user interface

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router DOM 7.12.0
- **Styling**: Tailwind CSS 4.1.18 + Material-UI (MUI) 7.3.7
- **CSS-in-JS**: Emotion (@emotion/react, @emotion/styled)
- **Code Quality**: ESLint 9.39.1



## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/juaconnect-frontend.git
cd juaconnect-frontend
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port specified by Vite).

### Build

Build the project for production:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality:

```bash
npm run lint
```

## Key Components

### Authentication (`components/auth/`)

- **SignIn.jsx**: User login page
- **SignUp.jsx**: User registration page

### Artisan Features (`components/artisan/`)

- **ArtisanLayout.jsx**: Main layout for artisan dashboard
- **Sidebar.jsx**: Navigation sidebar
- **router.jsx**: Artisan-specific routing configuration

### Pages (`components/pages/`)

- **Dashboard.jsx**: Main dashboard overview
- **Bookings.jsx**: Manage service bookings
- **Availability.jsx**: Manage service availability
- **Reviews.jsx**: View and manage reviews
- **Verification.jsx**: Verification status and documents
- **Notifications.jsx**: View and manage notifications
- **Home.jsx**: Home/landing page

### Layout (`components/layout/`)

- **Header.jsx**: Navigation header
- **layout.jsx**: Main layout wrapper

## Styling

The application uses a combination of:

- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Custom CSS**: Component-specific styles in `.css` files

## Contributing

1. Create a new branch for your feature (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add some amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is private and proprietary. All rights reserved.

## Support

For issues or questions, please contact the development team or open an issue in the project repository.
