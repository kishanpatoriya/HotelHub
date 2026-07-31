import { useState } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "./componets/Navbar";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Footer from "./componets/Footer";
import ScrollToTop from "./componets/ScrollToTop";
import HotelDetails from "./pages/HotelDetails";
import UserProfile from "./pages/UserProfile";
import Experiences from "./pages/Experiences";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Offers from "./pages/Offers";
import LoginModal from "./pages/LoginModal";
import Booking from "./pages/Booking";
import BookingConfirmation from "./pages/BookingConfirmation";
import MyBookings from "./componets/MyBookings";

import "./App.css";

function App() {
  // Login popup
  const [showLogin, setShowLogin] = useState(false);

  // Check if already logged in
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);

    toast.custom((t) => (
      <div
        className={`
        ${t.visible ? "animate-fadeIn" : ""}
        w-[350px]
        bg-white
        shadow-2xl
        rounded-2xl
        border
        border-gray-100
        overflow-hidden
      `}
      >
        {/* Gradient Line */}
        <div className="h-1 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400"></div>

        <div className="p-5 flex items-center gap-4">
          {/* Logout Icon */}
          <div
            className="
          w-14 h-14
          rounded-full
          bg-red-100
          flex
          items-center
          justify-center
        "
          >
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-lg font-bold text-gray-800">Logged Out 👋</h3>

            <p className="text-sm text-gray-500">
              You have been logged out successfully
            </p>

            <p className="text-xs text-red-500 mt-1 font-medium">
              See you again soon!
            </p>
          </div>
        </div>
      </div>
    ));
  };

  const MainLayout = () => {
    return (
      <>
        <Navbar
          isLoggedIn={isLoggedIn}
          onLoginClick={() => setShowLogin(true)}
          onLogout={handleLogout}
        />

        <Outlet />

        <Footer />
      </>
    );
  };

  return (
    <>
      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,
          style: {
            borderRadius: "12px",
            background: "#ffffff",
            color: "#111827",
            padding: "14px 18px",
            fontSize: "15px",
          },
          success: {
            iconTheme: {
              primary: "#10B981",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#EF4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Hotels" element={<Hotels />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/booking" element={<Booking />} />

          <Route
            path="/my-bookings"
            element={isLoggedIn ? <MyBookings /> : <Navigate to="/" replace />}
          />

          <Route
            path="/booking-confirmation"
            element={<BookingConfirmation />}
          />
        </Route>
      </Routes>

      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onLoginSuccess={() => setIsLoggedIn(true)}
      />
    </>
  );
}

export default App;
