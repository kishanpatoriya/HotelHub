import React, { Profiler, useState } from "react";
import { Link, NavLink } from "react-router-dom"; 

const Navbar = () => {
  // Mobile menu ko open/close karne ke liye state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Kaunsa link active hai, usko track karne ke liye state (Default 'home' set kiya hai)
  const [activeLink, setActiveLink] = useState('home');

  // Desktop links ki styling handle karne ka function
  const getDesktopLinkStyle = (linkName) => {
    return activeLink === linkName
      ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
      : "text-gray-600 hover:text-gray-900 transition-colors border-b-2 border-transparent pb-1";
  };

  // Mobile links ki styling handle karne ka function
  const getMobileLinkStyle = (linkName) => {
    return activeLink === linkName
      ? "text-blue-600 font-semibold"
      : "text-gray-600 font-medium hover:text-blue-600";
  };

  // Link click handle karne ka function (Mobile menu band karne ke liye bhi)
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false); // Link pe click hote hi mobile menu band ho jayega
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      {/* Main Navbar Container */}
      <div className="flex items-center justify-between px-4 lg:px-8 py-3">
        
        {/* 1. Left: Logo */}
        <div className="flex items-center cursor-pointer">
          <svg className="w-8 h-8 lg:w-9 lg:h-9 text-[#00838F]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 9.5V21H22V9.5L12 2ZM12 4.5L19.5 10.1V19H16.5V13.5C16.5 11 14.5 9 12 9C9.5 9 7.5 11 7.5 13.5V19H4.5V10.1L12 4.5ZM12 11C13.1 11 14 11.9 14 13C14 13.7 13.6 14.3 13 14.7V17H11V14.7C10.4 14.3 10 13.7 10 13C10 11.9 10.9 11 12 11Z" />
          </svg>
        </div>

        {/* 2. Middle: Desktop Navigation Links (Hidden on Mobile) */}
        {/* Yahan href ki jagah to="/path" lagaya gaya hai */}
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          <NavLink to="/" onClick={() => handleLinkClick('home')} className={getDesktopLinkStyle('home')}>Home</NavLink>
          <NavLink to="/hotels" onClick={() => handleLinkClick('hotels')} className={getDesktopLinkStyle('hotels')}>Hotels</NavLink>
          <NavLink to="/experiences" onClick={() => handleLinkClick('experiences')} className={getDesktopLinkStyle('experiences')}>Experiences</NavLink>
          <NavLink to="/offers" onClick={() => handleLinkClick('offers')} className={getDesktopLinkStyle('offers')}>Offers</NavLink>
          <NavLink to="/contactus" onClick={() => handleLinkClick('concierge')} className={getDesktopLinkStyle('concierge')}>ContactUs</NavLink>
        </div>

        {/* 3. Right: Icons & Buttons */}
        <div className="flex items-center space-x-3 lg:space-x-4">
          
          {/* Search Bar (Desktop Only) */}
          <div className="relative hidden md:flex items-center">
            <svg className="w-4 h-4 text-gray-500 absolute left-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Search destinations..." className="bg-[#EBF3FE] text-xs text-gray-700 pl-9 pr-4 py-2.5 rounded-full outline-none w-48 lg:w-56 focus:w-64 transition-all" />
          </div>

          {/* Heart Icon */}
          <button className="text-gray-600 hover:text-gray-900 p-1.5 transition-colors hidden sm:block">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          {/* Profile Icon */}
          <Link to="/profile" className="text-gray-600 hover:text-gray-900 p-1.5 transition-colors hidden sm:block">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>

          {/* Book Now Button */}
          <button className="bg-[#0052CC] hover:bg-blue-700 text-white text-xs lg:text-sm font-semibold px-4 py-2 lg:py-2.5 rounded-lg transition-colors shadow-sm whitespace-nowrap">
            Book Now
          </button>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-gray-600 hover:text-gray-900 p-1 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* 4. Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 px-4 py-4 shadow-lg z-50 flex flex-col space-y-4">
          
          {/* Mobile Search Bar */}
          <div className="relative w-full flex items-center md:hidden">
            <svg className="w-4 h-4 text-gray-500 absolute left-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Search destinations..." className="bg-[#EBF3FE] text-sm text-gray-700 pl-9 pr-4 py-2.5 rounded-full outline-none w-full" />
          </div>

          {/* Mobile Links */}
          {/* Yahan bhi to="/path" update kiya gaya hai */}
          <NavLink to="/" onClick={() => handleLinkClick('home')} className={getMobileLinkStyle('home')}>Home</NavLink>
          <NavLink to="/hotels" onClick={() => handleLinkClick('hotels')} className={getMobileLinkStyle('hotels')}>Hotels</NavLink>
          <NavLink to="/experiences" onClick={() => handleLinkClick('experiences')} className={getMobileLinkStyle('experiences')}>Experiences</NavLink>
          <NavLink to="/offers" onClick={() => handleLinkClick('offers')} className={getMobileLinkStyle('offers')}>Offers</NavLink>
          <NavLink to="/contactus" onClick={() => handleLinkClick('concierge')} className={getMobileLinkStyle('concierge')}>ContastUS</NavLink>
          
          <hr className="border-gray-100" />
          
          {/* Mobile Extra Icons (Profile/Favorites) */}
          <div className="flex space-x-4 sm:hidden">
             <button className="flex items-center text-gray-600 text-sm font-medium">
               <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
               Favorites
             </button>
             <Link to="/profile" className="flex items-center text-gray-600 text-sm font-medium">
               <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
               Profile
             </Link>
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;