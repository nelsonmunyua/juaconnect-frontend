// src/components/dashboards/ClientDashboard.jsx
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ClientDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/signin");
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  if (!user) {
    navigate("/signin", { replace: true });
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">
          Client Dashboard
        </h1>

        {/* User Info */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium text-gray-800">{user.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium text-gray-800">{user.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Role</p>
            <p className="font-medium capitalize text-gray-800">
              {user.role}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium text-gray-800">
              {user.location || "Not set"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium text-gray-800">
              {user.phone || "Not set"}
            </p>
          </div>
        </div>

        {/* Bookings Section */}
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-semibold text-gray-800">
            Recent Bookings
          </h2>
          <p className="text-gray-500">
            You have no recent bookings yet.
          </p>
        </div>

        {/* Action */}
        <button
          onClick={() => navigate("/")}
          className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Browse Services
        </button>
      </div>
    </div>
  );
};

export default ClientDashboard;
