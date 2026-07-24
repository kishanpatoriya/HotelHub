import React, { useState } from 'react';

const Home = () => {
  // Testimonial Data
  const testimonials = [
    {
      quote: "Hotel Hub transformed our honeymoon into a seamless dream. The personalized recommendations were spot-on, and the service was truly beyond five stars. We'll never book travel any other way.",
      name: "Sarah Jenkins",
      role: "Travel Enthusiast",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
    },
    {
      quote: "An absolutely incredible experience! Finding the perfect villa took minutes instead of days. The digital concierge handled our dinner reservations flawlessly.",
      name: "Michael Chen",
      role: "Business Traveler",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
    },
    {
      quote: "The curated exclusivity is real. The properties listed here are on another level compared to standard booking sites. Highly recommend for luxury stays.",
      name: "Emma Watson",
      role: "Lifestyle Blogger",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
    }
  ];

  // State to track current testimonial
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* 1. Hero Section (100vh) */}
      <section 
        className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center px-6 lg:px-12"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 w-full max-w-[1400px] mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 ">
            Your Private Sanctuary Awaits.
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl">
            Discover a refined collection of extraordinary homes, villas, and estates curated for the discerning traveler.
          </p>

          {/* Search Box - Full Width (w-full) */}
          <div className="bg-white p-2 rounded-xl flex flex-col lg:flex-row items-center gap-2 md:gap-4 shadow-lg w-full">
            <div className="flex-1 w-full flex items-center bg-gray-100 rounded-lg px-4 py-3.5">
              <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <input type="text" placeholder="Where to?" className="bg-transparent outline-none w-full text-base" />
            </div>
            <div className="flex-1 w-full flex items-center bg-gray-100 rounded-lg px-4 py-3.5">
              <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <input type="text" placeholder="Add dates" className="bg-transparent outline-none w-full text-base" />
            </div>
            <div className="flex-1 w-full flex items-center bg-gray-100 rounded-lg px-4 py-3.5">
              <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              <input type="text" placeholder="1 Room, 2 Guests" className="bg-transparent outline-none w-full text-base" />
            </div>
            <button className="w-full lg:w-40 bg-[#0052CC] hover:bg-blue-700 text-white text-base font-semibold px-8 py-3.5 rounded-lg transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* 2. Popular Destinations */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-1">Popular Destinations</h2>
            <p className="text-gray-500 text-sm">Trending locations for your next getaway.</p>
          </div>
          <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Explore All &rarr;</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Santorini', img: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=500&q=80', tag: 'Greece' },
            { name: 'Kyoto', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&q=80', tag: 'Japan' },
            { name: 'Amalfi Coast', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&q=80', tag: 'Italy' },
            { name: 'Dubai', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=80', tag: 'UAE' }
          ].map((dest, idx) => (
            <div key={idx} className="relative h-[340px] rounded-2xl overflow-hidden group cursor-pointer shadow-sm">
              <img src={dest.img} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-5 left-5 text-white">
                <h3 className="text-xl font-bold">{dest.name}</h3>
                <p className="text-xs text-gray-300 mt-1">{dest.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured Hotel Collections */}
      <section className="py-12 px-6 lg:px-12 max-w-[1400px] mx-auto bg-gray-50">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-1">Featured Hotel Collections</h2>
          <p className="text-gray-500 text-sm">Hand-picked stays just for you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'The Alpine Sanctuary', price: '$1,200', location: 'Swiss Alps', rating: '4.9', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&q=80' },
            { title: 'Azure Horizon Villa', price: '$2,500', location: 'Maldives', rating: '5.0', img: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=500&q=80' },
            { title: 'The Imperial Court', price: '$850', location: 'London, UK', rating: '4.8', img: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&q=80' }
          ].map((hotel, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="relative h-64">
                <img src={hotel.img} alt={hotel.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white px-2.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                  <svg className="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  {hotel.rating}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-xl text-gray-900">{hotel.title}</h3>
                  <p className="text-blue-600 font-bold">{hotel.price}<span className="text-xs text-gray-500 font-normal">/night</span></p>
                </div>
                <p className="text-sm text-gray-500 mb-5 line-clamp-2">Experience luxury in the heart of {hotel.location} with premium amenities and breathtaking views.</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-gray-100 pt-4">
                  <span className="flex items-center gap-1.5">🛏️ 3 Beds</span>
                  <span className="flex items-center gap-1.5">🛁 2 Baths</span>
                  <span className="flex items-center gap-1.5">📐 1200 sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Promos & Rewards */}
      <section className="py-12 px-6 lg:px-12 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 relative h-96 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-center items-start p-10">
          <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1000&q=80" alt="Promo" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10">
            <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">Exclusive Offer</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Island Solitude: 30% Off</h2>
            <p className="text-white/90 text-base max-w-lg mb-8">Book your private villa escape now and enjoy exclusive perks including a complimentary private dinner under the stars.</p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">Claim Offer</button>
          </div>
        </div>
        
        <div className="lg:col-span-1 bg-[#0052CC] rounded-2xl p-8 text-white flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="text-2xl font-bold mb-4">Early Bird Rewards</h3>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed">Planning ahead has its perks. Book 60 days in advance and unlock double loyalty points, plus a 15% discount on spa services.</p>
          </div>
          <div>
            <p className="text-sm font-medium mb-5 flex items-center gap-2">
               <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
               Free Cancellation
            </p>
            <button className="w-full bg-white text-[#0052CC] py-3.5 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
              Unlock Rewards
            </button>
          </div>
        </div>
      </section>

      {/* 5. The Hotel Hub Standard */}
      <section className="py-20 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3">The Hotel Hub Standard</h2>
        <p className="text-gray-500 text-base mb-16">Redefining luxury travel through three core pillars of excellence.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
            </div>
            <h3 className="font-bold text-xl mb-3">Curated Exclusivity</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">We handpick every property, ensuring only the top 1% make it to your screen. Quality and aesthetics are our primary criteria.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
            <h3 className="font-bold text-xl mb-3">24/7 Digital Concierge</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">From restaurant reservations to personal shoppers, our dedicated team is available at your fingertips, anytime, anywhere.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            </div>
            <h3 className="font-bold text-xl mb-3">Frictionless Travel</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">Seamless bookings, transparent payment systems, and direct communication with hotel staff for an effortless experience.</p>
          </div>
        </div>
      </section>

      {/* 6. Testimonial Slider (Width matched, height reduced) */}
      <section className="py-12 px-6 lg:px-12 max-w-[1400px] mx-auto text-center relative">
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden transition-all duration-500">
          
          {/* Quote Icon */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 text-blue-100">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path></svg>
          </div>
          
          {/* Dynamic Content */}
          <h3 className="text-xl md:text-2xl font-medium italic text-gray-800 leading-relaxed mt-10 mb-6 relative z-10 min-h-[80px] max-w-4xl mx-auto">
            "{testimonials[currentTestimonial].quote}"
          </h3>
          
          <div className="flex flex-col items-center justify-center">
            <img 
              src={testimonials[currentTestimonial].img} 
              alt={testimonials[currentTestimonial].name} 
              className="w-12 h-12 rounded-full mb-2 object-cover shadow-sm" 
            />
            <p className="font-bold text-sm text-gray-900">{testimonials[currentTestimonial].name}</p>
            <p className="text-xs text-gray-500">{testimonials[currentTestimonial].role}</p>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white border border-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-blue-600 hover:shadow-md hover:border-blue-200 transition-all z-20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white border border-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-blue-600 hover:shadow-md hover:border-blue-200 transition-all z-20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-6">
            {testimonials.map((_, idx) => (
              <span 
                key={idx} 
                className={`block w-2 h-2 rounded-full transition-all ${idx === currentTestimonial ? 'bg-blue-600 w-5' : 'bg-gray-200'}`}
              ></span>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Newsletter */}
      <section className="py-16 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="bg-[#1A2534] rounded-2xl p-16 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Stay Inspired.</h2>
          <p className="text-gray-300 text-base mb-10 max-w-xl mx-auto">Join our newsletter to receive curated travel guides, hidden gem discoveries, and exclusive early offers.</p>
          
          <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-white/10 border border-white/20 rounded-lg px-5 py-4 text-base text-white placeholder-gray-400 focus:outline-none focus:border-white/50"
            />
            <button className="bg-[#0052CC] hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-5">By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;