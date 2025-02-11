// src/App.jsx
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CommunityFeed from "./pages/CommunityFeed";
import { ToastContainer } from "react-toastify"; // For toast notifications
import "react-toastify/dist/ReactToastify.css"; // Toast styles
// import "./styles/globals.css"; // Global styles
import "../src/styles/theme.css";

const App = () => {
  // Example: State for authentication (you can replace this with a context or Zustand)
  const [user, setUser] = useState(null);

  // Function to handle login
  const handleLogin = (userData) => {
    setUser(userData);
  };

  // Function to handle logout
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-background text-primary">
        {/* Header */}
        <Header user={user} onLogout={handleLogout} />

        {/* Main Content */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/marketplace"
            element={user ? <Marketplace /> : <Login />}
          />
          <Route
            path="/dashboard"
            element={user ? <Dashboard /> : <Login />}
          />
          <Route
            path="/profile"
            element={user ? <Profile /> : <Login />}
          />
          <Route
            path="/community-feed"
            element={user ? <CommunityFeed /> : <Login />}
          />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Toast Notifications */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
};

export default App;