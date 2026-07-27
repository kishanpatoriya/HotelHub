import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import  Navbar  from "./componets/Navbar";
import  Home  from "./pages/Home";
import Hotels from "./pages/Hotels"
import  Footer  from "./componets/Footer";
import ScrollToTop from './componets/ScrollToTop';
import HotelDetails from './pages/HotelDetails';
import UserProfile from './pages/UserProfile';
import Experiences from './pages/Experiences';
import ContactUs from './pages/ContactUs';
import AboutUs from "./pages/AboutUs";
import Offers from "./pages/Offers";
import LoginModal from "./pages/LoginModal";

import "./App.css";

function App() {
  // Login popup
  const [showLogin, setShowLogin] = useState(false);

  // Check if already logged in
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("token")
  );

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
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