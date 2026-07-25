import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Yahan humne sabhi hotels ka data import kiya hai
import { hotelsData } from '../data/hotelsData'; 

const Hotels = () => {
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Logic to show only the current page's hotels (Ab hotelsData use kar rahe hain)
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentHotels = hotelsData.slice(indexOfFirstItem, indexOfLastItem);

  // SVG Icon Helpers
  const AmenityIcon = ({ type }) => {
    switch (type) {
      case 'Free Wi-Fi':
        return <svg className="w-3.5 h-3.5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>;
      case 'Pool':
        return <svg className="w-3.5 h-3.5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 11a9 9 0 019 9m-9-9a9 9 0 009-9m-9 9H3m9 9v1m0-19V2"></path></svg>;
      case 'Parking':
        return <svg className="w-3.5 h-3.5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h8a4 4 0 110 8H5V8z"></path></svg>;
      case 'Breakfast':
        return <svg className="w-3.5 h-3.5 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 8h-2.5m0 0V4a1 1 0 00-1-1H5a1 1 0 00-1 1v4m13.5 0A2.5 2.5 0 0120 10.5v1A2.5 2.5 0 0117.5 14H17v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2H4.5A2.5 2.5 0 012 11.5v-1A2.5 2.5 0 014.5 8h2.5"></path></svg>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 font-sans text-gray-900 pb-16">
      
      {/* 1. Wrapper for Hero & Search Bar to prevent overflow */}
      <div className="w-full mb-12 lg:mb-16">
        
        {/* Hero Section */}
        <section className="relative w-full min-h-[350px] lg:h-[450px] flex flex-col justify-center bg-gray-900 overflow-hidden">
          {/* FULL WIDTH Background Image */}
          <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1600&q=80')" }}>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          </div>

          {/* Text Content */}
          <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pt-10 pb-20 lg:py-0">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 shadow-sm drop-shadow-md">
              Find Your Perfect Stay
            </h1>
            <p className="text-gray-200 text-lg drop-shadow-md max-w-lg">
              Discover top-rated hotels and enjoy a memorable stay.
            </p>
          </div>
        </section>

        {/* Floating Search Bar */}
        <div className="relative z-20 max-w-6xl mx-auto w-full px-6 -mt-16 lg:-mt-12">
          <div className="bg-white p-3 rounded-2xl flex flex-col lg:flex-row items-center shadow-xl shadow-gray-200/50 w-full border border-gray-100">
            {/* Destination */}
            <div className="flex-1 w-full p-2 border-b lg:border-b-0 lg:border-r border-gray-100 px-4">
              <label className="block text-xs font-bold text-gray-800 mb-1">Destination</label>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <input type="text" placeholder="Where are you going?" className="w-full text-sm outline-none placeholder-gray-400" />
              </div>
            </div>

            {/* Check-in */}
            <div className="w-full lg:w-48 p-2 border-b lg:border-b-0 lg:border-r border-gray-100 px-4">
              <label className="block text-xs font-bold text-gray-800 mb-1">Check-in</label>
              <div className="flex items-center justify-between">
                <input type="text" placeholder="Select date" className="w-full text-sm outline-none placeholder-gray-400" />
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
            </div>

            {/* Check-out */}
            <div className="w-full lg:w-48 p-2 border-b lg:border-b-0 lg:border-r border-gray-100 px-4">
              <label className="block text-xs font-bold text-gray-800 mb-1">Check-out</label>
              <div className="flex items-center justify-between">
                <input type="text" placeholder="Select date" className="w-full text-sm outline-none placeholder-gray-400" />
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              </div>
            </div>

            {/* Guests */}
            <div className="w-full lg:w-48 p-2 px-4 flex items-center justify-between">
               <div className="w-full">
                 <label className="block text-xs font-bold text-gray-800 mb-1">Guests</label>
                 <div className="flex items-center justify-between">
                   <input type="text" placeholder="2 Guests" defaultValue="2 Guests" className="w-full text-sm font-medium outline-none text-gray-900" />
                   <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                 </div>
               </div>
            </div>

            {/* Button */}
            <div className="p-3 w-full lg:w-auto">
              <button className="w-full lg:w-auto bg-[#1A63F4] hover:bg-blue-700 text-white text-sm font-semibold px-8 py-3.5 rounded-lg transition-colors">
                Search Hotels
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Content Container */}
      <section className="max-w-6xl mx-auto px-6">
        
        {/* Header & Filter */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">All Hotels</h2>
            <p className="text-gray-500 text-sm">Explore our collection of amazing hotels around the world.</p>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-gray-500 mr-2">Sort by:</span>
            <div className="border border-gray-200 rounded-md px-3 py-1.5 flex items-center bg-white cursor-pointer hover:bg-gray-50 transition-colors">
              <span className="font-medium mr-2">Recommended</span>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* 3. Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentHotels.map((hotel) => (
            <div key={hotel.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group">
              
              {/* Image & Badges */}
              <div className="relative h-56 w-full overflow-hidden">
                <img src={hotel.mainImage} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 rounded text-xs font-bold flex items-center">
                  ★ {hotel.rating}
                </div>
                {/* Favorite Icon */}
                <button className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 p-2 rounded-full backdrop-blur-sm transition-colors text-white">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </button>
              </div>

              {/* Details */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-gray-900">{hotel.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{hotel.location}</p>
                
                {/* Stars & Reviews */}
                <div className="flex items-center mb-4">
                  <div className="flex text-[#F4B400] mr-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">({hotel.reviews} reviews)</span>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-xs text-gray-600 font-medium">
                  {hotel.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center">
                      <AmenityIcon type={amenity} />
                      {amenity}
                    </div>
                  ))}
                </div>

                {/* Price & Action */}
                <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-100">
                  <p className="font-bold text-lg text-gray-900">
                    ₹{hotel.price} <span className="font-normal text-xs text-gray-500">/ night</span>
                  </p>
                  
                  {/* Yeh yahan page change karta hai */}
                  <Link 
                    to={`/hotel/${hotel.id}`} 
                    className="bg-[#1A63F4] hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. Custom Pagination */}
        <div className="flex justify-center items-center space-x-2">
          {/* Prev Button */}
          <button 
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className={`w-8 h-8 rounded flex items-center justify-center font-bold text-sm transition-colors ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            &lt;
          </button>
          
          {/* Page 1 */}
          <button 
            onClick={() => setCurrentPage(1)}
            className={`w-8 h-8 rounded flex items-center justify-center font-bold text-sm transition-colors ${currentPage === 1 ? 'bg-[#1A63F4] text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            1
          </button>

          {/* Page 2 */}
          <button 
            onClick={() => setCurrentPage(2)}
            className={`w-8 h-8 rounded flex items-center justify-center font-bold text-sm transition-colors ${currentPage === 2 ? 'bg-[#1A63F4] text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            2
          </button>

          {/* Next Button */}
          <button 
            onClick={() => setCurrentPage(2)}
            disabled={currentPage === 2}
            className={`w-8 h-8 rounded flex items-center justify-center font-bold text-sm transition-colors ${currentPage === 2 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            &gt;
          </button>
        </div>

      </section>
    </div>
  );
};

export default Hotels;