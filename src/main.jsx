// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import SignIn from "./components/auth/SignIn.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import ArtisanSignUp from "./components/auth/ArtisanSignUp.jsx";
import ArtisanDashboard from "./components/artisan/ArtisanDashboard.jsx";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/artisan-signup',
    element: <ArtisanSignUp />
  },
  {
    path: '/client-dashboard',
    element: <App />
  },
  {
    path: '/artisan-dashboard',
    element: <ArtisanDashboard />
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={routes} />
  </StrictMode>
);
