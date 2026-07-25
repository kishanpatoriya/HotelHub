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
import Offers  from "./pages/Offers";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const MainLayout = () => {
    return (
      <>
        <Navbar />
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
            <Route path="/contactus" element={<ContactUs/>} />
          </Route>
        </Routes>
      
    </>
  );
}

export default App;
