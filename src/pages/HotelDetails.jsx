import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { hotelsData } from '../data/hotelsData'; // Ensure karein ki path sahi ho

const HotelDetails = () => {
  // useParams se hume URL se hotel ki ID mil jayegi (e.g., /hotel/1)
  const { id } = useParams();

  // URL ki ID ke hisaab se hotelsData mein se sahi hotel dhoondein
  const hotel = hotelsData.find((item) => item.id === Number(id));

  // Agar user aisi ID daale jo exist nahi karti, toh ye page dikhega
  if (!hotel) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Hotel Not Found!</h2>
        <p className="text-gray-500 mb-6">The hotel you are looking for does not exist.</p>
        <Link to="/hotels" className="bg-[#1A63F4] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Back to Hotels
        </Link>
      </div>
    );
  }

  // Available Rooms (Abhi ke liye static rakh rahe hain)
  const availableRooms = [
    {
      id: 1,
      name: "Deluxe Room",
      specs: "1 King Bed • 2 Guests • 32 m²",
      view: "City View",
      price: hotel.price,
      image: hotel.images[0]
    },
    {
      id: 2,
      name: "Premium Room",
      specs: "1 King Bed • 2 Guests • 40 m²",
      view: "Premium View with Balcony",
      price: (parseInt(hotel.price.replace(/,/g, '')) + 2000).toLocaleString(),
      image: hotel.images[1]
    },
    {
      id: 3,
      name: "Suite Room",
      specs: "1 King Bed • 2 Guests • 60 m²",
      view: "Living Area • Balcony",
      price: (parseInt(hotel.price.replace(/,/g, '')) + 6000).toLocaleString(),
      image: hotel.images[2]
    }
  ];

  // Similar Properties (hotelsData se koi bhi 4 dusre hotels nikal rahe hain)
  const similarHotels = hotelsData.filter(h => h.id !== hotel.id).slice(0, 4);

  return (
    <div className="w-full min-h-screen bg-white font-sans text-gray-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* 1. Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <Link to="/hotels" className="flex items-center text-sm font-semibold text-gray-700 hover:text-[#1A63F4] transition-colors">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to Hotels
          </Link>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-sm font-semibold text-gray-700 hover:text-gray-900">
              <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              Save
            </button>
            <button className="flex items-center text-sm font-semibold text-gray-700 hover:text-gray-900">
              <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
              Share
            </button>
          </div>
        </div>

        {/* 2. Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-8 h-[300px] md:h-[450px]">
          <div className="md:col-span-3 rounded-2xl overflow-hidden h-full">
            <img src={hotel.mainImage} alt={hotel.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="hidden md:flex flex-col gap-3 h-full">
            <div className="flex-1 rounded-2xl overflow-hidden">
              <img src={hotel.images[0]} alt="Room view" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden">
              <img src={hotel.images[1]} alt="Dining area" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden relative cursor-pointer group">
              <img src={hotel.images[2]} alt="Spa area" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white group-hover:bg-black/40 transition-colors">
                <span className="text-2xl font-bold">+20</span>
                <span className="text-sm font-medium">More Photos</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Header & Price Info */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-gray-900">{hotel.name}</h1>
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-sm font-bold flex items-center">
                {hotel.rating} Excellent
              </span>
              <span className="text-sm text-gray-500">({hotel.reviews} reviews)</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <svg className="w-4 h-4 mr-1 text-[#1A63F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              {hotel.location}
              <div className="flex text-[#F4B400] ml-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:text-right flex flex-col md:items-end">
            <p className="font-bold text-3xl text-gray-900">
              ₹{hotel.price} <span className="font-normal text-sm text-gray-500">/ night</span>
            </p>
            <button className="bg-[#1A63F4] hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-sm font-semibold transition-colors shadow-sm w-full md:w-auto mt-3 mb-1">
              Book Now
            </button>
            <p className="text-xs text-gray-500 font-medium">Best Price Guarantee</p>
          </div>
        </div>

        {/* 4. Tabs */}
        <div className="border-b border-gray-200 mb-8 flex overflow-x-auto no-scrollbar">
          {["Overview", "Rooms", "Amenities", "Reviews", "Location", "Policies"].map((tab, idx) => (
            <button 
              key={idx} 
              className={`pb-4 px-1 mr-8 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                idx === 0 ? "border-[#1A63F4] text-[#1A63F4]" : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 5. Main Content Layout (Left Column & Right Column) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* About Property */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">About This Property</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {hotel.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2 text-sm text-gray-700 font-medium">
                <div className="flex items-center"><svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>Free Wi-Fi</div>
                <div className="flex items-center"><svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 11a9 9 0 019 9m-9-9a9 9 0 009-9m-9 9H3m9 9v1m0-19V2"></path></svg>Swimming Pool</div>
                <div className="flex items-center"><svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>Spa & Wellness</div>
                <div className="flex items-center"><svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>Beachfront</div>
                <div className="flex items-center"><svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>Restaurant</div>
                <div className="flex items-center"><svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h8a4 4 0 110 8H5V8z"></path></svg>Free Parking</div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Available Rooms */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-5">Available Rooms</h2>
              <div className="space-y-4">
                {availableRooms.map((room) => (
                  <div key={room.id} className="border border-gray-200 rounded-xl p-4 flex flex-col md:flex-row gap-5 bg-white">
                    <img src={room.image} alt={room.name} className="w-full md:w-48 h-32 object-cover rounded-lg" />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">{room.name}</h3>
                        <p className="text-gray-500 text-sm mt-1">{room.specs}</p>
                        <p className="text-gray-500 text-sm">{room.view}</p>
                        <p className="text-green-600 text-xs font-semibold mt-2">Free Cancellation</p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center md:items-end border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-5 mt-2 md:mt-0">
                      <p className="font-bold text-xl text-gray-900">
                        ₹{room.price} <span className="font-normal text-xs text-gray-500">/ night</span>
                      </p>
                      <button className="bg-[#1A63F4] hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm mt-3 w-full md:w-auto">
                        Select Room
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN (Sticky Booking Summary) */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              
              {/* Booking Summary Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Booking Summary</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 font-medium mb-1">Check-in</p>
                    <p className="text-sm font-bold text-gray-900">25 Jun 2025</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 font-medium mb-1">Check-out</p>
                    <p className="text-sm font-bold text-gray-900">28 Jun 2025</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 font-medium mb-1">Guests</p>
                    <p className="text-sm font-bold text-gray-900">2 Adults</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 font-medium mb-1">Rooms</p>
                    <p className="text-sm font-bold text-gray-900">1 Room</p>
                  </div>
                </div>

                <div className="flex justify-between items-end border-t border-gray-100 pt-4 mb-5">
                  <p className="font-semibold text-gray-900 text-base">Total Price</p>
                  <div className="text-right">
                    <p className="font-bold text-2xl text-gray-900">
                      ₹{(parseInt(hotel.price.replace(/,/g, '')) * 3).toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">(3 Nights)</p>
                  </div>
                </div>

                <button className="w-full bg-[#1A63F4] hover:bg-blue-700 text-white py-3 rounded-lg text-sm font-semibold transition-colors shadow-sm mb-2">
                  Book Now
                </button>
                <p className="text-center text-xs text-gray-500 font-medium">No hidden charges</p>
              </div>

              {/* Facilities Card */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Facilities</h3>
                <ul className="space-y-3 text-sm text-gray-700 font-medium mb-4">
                  <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path></svg>Free Wi-Fi</li>
                  <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 11a9 9 0 019 9m-9-9a9 9 0 009-9m-9 9H3m9 9v1m0-19V2"></path></svg>Swimming Pool</li>
                  <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>Spa & Wellness</li>
                  <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>Restaurant</li>
                  <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>24/7 Reception</li>
                  <li className="flex items-center"><svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>Airport Shuttle</li>
                </ul>
                <a href="#facilities" className="text-[#1A63F4] font-semibold text-sm hover:underline">View All Facilities</a>
              </div>

            </div>
          </div>
        </div>

        {/* 6. Similar Properties */}
        <section className="mt-16 pt-10 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Similar Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarHotels.map((simHotel) => (
              <Link to={`/hotel/${simHotel.id}`} key={simHotel.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group cursor-pointer">
                <div className="relative h-44 w-full overflow-hidden">
                  <img src={simHotel.mainImage} alt={simHotel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-green-600 text-white px-1.5 py-0.5 rounded text-[10px] font-bold flex items-center">
                    ★ {simHotel.rating}
                  </div>
                  <button onClick={(e) => e.preventDefault()} className="absolute top-3 right-3 text-white hover:text-red-500 transition-colors">
                    <svg className="w-5 h-5 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                  </button>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-sm text-gray-900 truncate">{simHotel.name}</h3>
                  <p className="text-gray-500 text-xs mb-3">{simHotel.location}</p>
                  <p className="font-bold text-sm text-gray-900 mt-auto pt-2 border-t border-gray-100">
                    ₹{simHotel.price} <span className="font-normal text-[10px] text-gray-500">/ night</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default HotelDetails;