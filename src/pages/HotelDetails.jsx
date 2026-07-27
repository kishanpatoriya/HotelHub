import React, { useState } from 'react';

const Hotels = () => {
  // 18 Villas Data (9 for Page 1, 9 for Page 2)
  const allVillas = [
    // --- PAGE 1 ---
    {
      id: 1, name: "Ocean Paradise Villa", location: "Bali, Indonesia",
      beds: 4, baths: 4, guests: 8, price: "28,000", rating: 4.9, reviews: 120,
      image: "https://images.unsplash.com/photo-1582719478250-c894e4dc240e?w=800&q=80", badge: "Bestseller"
    },
    {
      id: 2, name: "Tropical Beach Villa", location: "Maldives",
      beds: 3, baths: 3, guests: 6, price: "35,000", rating: 4.8, reviews: 98,
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80"
    },
    {
      id: 3, name: "Sunset Cliff Villa", location: "Goa, India",
      beds: 4, baths: 5, guests: 8, price: "22,000", rating: 4.7, reviews: 86,
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80"
    },
    {
      id: 4, name: "Palm Grove Villa", location: "Thailand",
      beds: 4, baths: 4, guests: 8, price: "18,000", rating: 4.6, reviews: 74,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
    },
    {
      id: 5, name: "Azure Bay Villa", location: "Bali, Indonesia",
      beds: 5, baths: 6, guests: 10, price: "40,000", rating: 4.9, reviews: 110,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80", badge: "New"
    },
    {
      id: 6, name: "Royal Lagoon Villa", location: "Maldives",
      beds: 4, baths: 4, guests: 8, price: "32,000", rating: 4.8, reviews: 92,
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80"
    },
    {
      id: 7, name: "Cliffside Luxury Villa", location: "UAE, Dubai",
      beds: 6, baths: 6, guests: 12, price: "55,000", rating: 4.9, reviews: 130,
      image: "https://images.unsplash.com/photo-1511840636560-acee95b3a83f?w=800&q=80"
    },
    {
      id: 8, name: "Serenity Beach Villa", location: "Goa, India",
      beds: 3, baths: 3, guests: 6, price: "16,000", rating: 4.5, reviews: 60,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80"
    },
    {
      id: 9, name: "Infinity Ocean Villa", location: "Bali, Indonesia",
      beds: 5, baths: 5, guests: 10, price: "45,000", rating: 4.9, reviews: 115,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80"
    },
    // --- PAGE 2 ---
    {
      id: 10, name: "Majestic Mountain Villa", location: "Manali, India",
      beds: 4, baths: 4, guests: 8, price: "24,000", rating: 4.8, reviews: 88,
      image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800&q=80", badge: "Bestseller"
    },
    {
      id: 11, name: "Emerald Forest Retreat", location: "Kerala, India",
      beds: 3, baths: 3, guests: 6, price: "20,000", rating: 4.7, reviews: 65,
      image: "https://images.unsplash.com/photo-1542314831-c6a4d14d8c85?w=800&q=80"
    },
    {
      id: 12, name: "Golden Sands Villa", location: "Phuket, Thailand",
      beds: 5, baths: 5, guests: 10, price: "38,000", rating: 4.9, reviews: 142,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
    },
    {
      id: 13, name: "Silver Cove Mansion", location: "Santorini, Greece",
      beds: 6, baths: 7, guests: 14, price: "75,000", rating: 5.0, reviews: 210,
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80", badge: "Luxury"
    },
    {
      id: 14, name: "Desert Oasis Villa", location: "Dubai, UAE",
      beds: 4, baths: 4, guests: 8, price: "42,000", rating: 4.6, reviews: 54,
      image: "https://images.unsplash.com/photo-1511840636560-acee95b3a83f?w=800&q=80"
    },
    {
      id: 15, name: "Crystal Water Villa", location: "Bora Bora",
      beds: 2, baths: 2, guests: 4, price: "60,000", rating: 4.9, reviews: 180,
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80"
    },
    {
      id: 16, name: "Heritage Courtyard", location: "Jaipur, India",
      beds: 5, baths: 5, guests: 10, price: "26,000", rating: 4.8, reviews: 95,
      image: "https://images.unsplash.com/photo-1582719478250-c894e4dc240e?w=800&q=80"
    },
    {
      id: 17, name: "Orchid Island Villa", location: "Seychelles",
      beds: 3, baths: 3, guests: 6, price: "48,000", rating: 4.7, reviews: 77,
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80"
    },
    {
      id: 18, name: "Cloud Nine Estate", location: "Swiss Alps",
      beds: 6, baths: 6, guests: 12, price: "85,000", rating: 4.9, reviews: 155,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80", badge: "New"
    }
  ];

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentVillas = allVillas.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(allVillas.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Smooth scroll to top of villas section when page changes
    document.getElementById('villas-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 font-sans text-gray-900 pb-20">
      
      {/* 1. Dark Navbar */}
      <nav className="w-full bg-[#0B0F19] border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 py-4">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <svg className="w-8 h-8 text-[#F59E0B] mr-2" viewBox="0 0 24 24" fill="currentColor">
               <path d="M4 4h2v16H4V4zm6 0h2v16h-2V4zm6 0h2v16h-2V4zm6 0h2v16h-2V4z" />
            </svg>
            <span className="text-white font-bold text-xl tracking-wide">Hotel Hub</span>
          </div>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#villas" className="text-white border-b-2 border-[#F59E0B] pb-1 font-semibold">Villas</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a>
            <a href="#offers" className="text-gray-300 hover:text-white transition-colors">Offers</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>

          {/* Icons & Button */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="text-gray-300 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="bg-[#F59E0B] hover:bg-yellow-500 text-black text-sm font-bold px-5 py-2.5 rounded-lg transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section 
        className="relative w-full h-[450px] bg-cover bg-center flex flex-col justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1600&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">
            Luxury Villas
          </h1>
          <p className="text-gray-200 text-lg max-w-md leading-relaxed mb-6">
            Discover and book the world's most beautiful private villas
          </p>
          <div className="w-16 h-1 bg-[#F59E0B]"></div>
        </div>
      </section>

      {/* 3. Villas Grid Section */}
      <section id="villas-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-20">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900">Explore Our Luxury Villas</h2>
          <div className="flex items-center text-sm font-semibold text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm mt-4 sm:mt-0">
            <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            {allVillas.length} Villas Found
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentVillas.map((villa) => (
            <div key={villa.id} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 flex flex-col group relative">
              
              {/* Image & Badges */}
              <div className="relative h-60 w-full overflow-hidden">
                <img src={villa.image} alt={villa.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                {/* Badge (if exists) */}
                {villa.badge && (
                  <div className="absolute top-4 left-4 bg-[#F59E0B] text-black px-3 py-1 rounded text-xs font-bold shadow-sm">
                    {villa.badge}
                  </div>
                )}

                {/* Heart Icon */}
                <button className="absolute top-4 right-4 w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Details Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-gray-900 mb-1">{villa.name}</h3>
                <div className="flex items-center text-xs text-gray-500 mb-4 font-medium">
                  <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {villa.location}
                </div>

                {/* Features (Beds, Baths, Guests) */}
                <div className="flex items-center gap-4 text-[13px] text-gray-600 font-medium mb-6">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                    {villa.beds} Beds
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path></svg>
                    {villa.baths} Baths
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    {villa.guests} Guests
                  </div>
                </div>

                {/* Footer (Price & Rating) */}
                <div className="mt-auto pt-4 flex justify-between items-center border-t border-gray-100">
                  <div className="text-gray-900 font-bold text-lg">
                    ₹{villa.price} <span className="text-xs text-gray-500 font-normal">/ night</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-[#F59E0B] mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <span className="font-bold text-[#F59E0B] mr-1">{villa.rating}</span>
                    <span className="text-gray-400 text-xs">({villa.reviews} reviews)</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* 4. Pagination */}
        <div className="flex justify-center items-center space-x-3 mt-12">
          
          {/* Page 1 Button */}
          <button 
            onClick={() => paginate(1)}
            className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-colors border shadow-sm
              ${currentPage === 1 ? 'bg-[#F59E0B] text-black border-[#F59E0B]' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}
          >
            1
          </button>

          {/* Page 2 Button */}
          <button 
            onClick={() => paginate(2)}
            className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-colors border shadow-sm
              ${currentPage === 2 ? 'bg-[#F59E0B] text-black border-[#F59E0B]' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}
          >
            2
          </button>

          {/* Next Button */}
          <button 
            onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 rounded-lg flex items-center justify-center border shadow-sm
              ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

        </div>
      </section>

    </div>
  );
};

export default Hotels;