import React from 'react';

const Experiences = () => {
  // Data for Popular Experiences section
  const popularExperiences = [
    {
      title: "Delicious Dining",
      desc: "Savor exquisite cuisines prepared by top chefs using fresh, local ingredients.",
      bullets: ["Multi-cuisine options", "Local & international flavors", "Fine dining experience"],
      img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&q=80",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
    },
    {
      title: "Wellness & Spa",
      desc: "Relax your mind, body, and soul with our luxury spa therapies.",
      bullets: ["Relaxing spa sessions", "Yoga & meditation", "Rejuvenating therapies"],
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
    },
    {
      title: "Adventure Activities",
      desc: "Exciting adventures for thrill seekers and nature lovers.",
      bullets: ["Water sports", "Trekking & hiking", "Outdoor adventures"],
      img: "https://images.unsplash.com/photo-1533240332313-0bc499f530d9?w=600&q=80",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    },
    {
      title: "Cultural Tours",
      desc: "Explore heritage, history and local traditions with expert guides.",
      bullets: ["Heritage walk", "Local culture", "Traditional shows"],
      img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
    },
    {
      title: "Nature & Wildlife",
      desc: "Connect with nature and witness breathtaking wildlife experiences.",
      bullets: ["Wildlife safaris", "Bird watching", "Nature trails"],
      img: "https://images.unsplash.com/photo-1504567961542-e24d9439a724?w=600&q=80",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"></path>
    },
    {
      title: "Romantic Getaways",
      desc: "Perfect experiences to celebrate love and create beautiful memories.",
      bullets: ["Candle light dinner", "Private setups", "Romantic stays"],
      img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
    }
  ];

  const categories = [
    { name: "Adventure", icon: "🏕️" },
    { name: "Wellness", icon: "🧘" },
    { name: "Food & Dining", icon: "🍽️" },
    { name: "Cultural", icon: "🏛️" },
    { name: "Nature & Wildlife", icon: "🦌" },
    { name: "Water Activities", icon: "🏄" },
    { name: "Romantic", icon: "❤️" },
    { name: "Family Fun", icon: "👨‍👩‍👧‍👦" }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* 1. Hero Section */}
      <section 
        className="relative w-full h-[550px] bg-cover bg-center flex flex-col justify-center px-4 lg:px-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80')" }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-10">
          <p className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-3">Experiences</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight max-w-2xl shadow-sm drop-shadow-md">
            Experience More<br />Than Just a Stay
          </h1>
          <p className="text-gray-200 text-lg mb-8 max-w-md drop-shadow-md">
            Handpicked experiences to make your journey extraordinary and unforgettable.
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-3">
            {[
              { text: "Curated by Experts", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { text: "Best Price Guarantee", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
              { text: "Safe & Trusted", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
              { text: "24/7 Support", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" }
            ].map((badge, idx) => (
              <div key={idx} className="bg-white/95 text-gray-800 px-4 py-2 rounded-full text-xs font-bold flex items-center shadow-sm">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-[#0052CC] flex items-center justify-center mr-2">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={badge.icon}></path></svg>
                </div>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Floating Search Bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="bg-white p-3 rounded-2xl flex flex-col lg:flex-row items-center shadow-xl shadow-gray-200/50 w-full border border-gray-100 gap-2">
          
          <div className="flex-1 w-full p-2 border-b lg:border-b-0 lg:border-r border-gray-100 px-4">
            <label className="block text-xs font-bold text-gray-800 mb-1">Where to?</label>
            <div className="flex items-center">
              <input type="text" placeholder="Search destination" className="w-full text-sm outline-none placeholder-gray-400 font-medium text-gray-900" />
              <svg className="w-4 h-4 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path></svg>
            </div>
          </div>

          <div className="flex-1 w-full p-2 border-b lg:border-b-0 lg:border-r border-gray-100 px-4">
            <label className="block text-xs font-bold text-gray-800 mb-1">Experience Type</label>
            <select className="w-full text-sm outline-none bg-transparent font-medium text-gray-900 appearance-none cursor-pointer">
              <option>All Categories</option>
              <option>Adventure</option>
              <option>Wellness</option>
            </select>
          </div>

          <div className="w-full lg:w-48 p-2 border-b lg:border-b-0 lg:border-r border-gray-100 px-4">
            <label className="block text-xs font-bold text-gray-800 mb-1">Date</label>
            <div className="flex items-center justify-between">
              <input type="text" placeholder="Pick a date" className="w-full text-sm outline-none placeholder-gray-400 font-medium text-gray-900" />
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
          </div>

          <div className="w-full lg:w-48 p-2 px-4">
            <label className="block text-xs font-bold text-gray-800 mb-1">Guests</label>
            <select className="w-full text-sm outline-none bg-transparent font-medium text-gray-900 appearance-none cursor-pointer">
              <option>2 Adults</option>
              <option>1 Adult</option>
              <option>Family</option>
            </select>
          </div>

          <div className="p-2 w-full lg:w-auto">
            <button className="w-full lg:w-auto bg-[#0052CC] hover:bg-blue-700 text-white text-sm font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-sm">
              Explore Experiences
            </button>
          </div>

        </div>
      </div>

      {/* 3. Why Book With Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-20">
        <div className="bg-[#F8FAFC] rounded-3xl p-10 border border-gray-100">
          <div className="text-center mb-10">
            <p className="text-[#0052CC] font-bold text-xs tracking-widest uppercase mb-1">Why Book With Us?</p>
            <h2 className="text-2xl font-bold text-gray-900">We Make Experiences Better</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Handpicked Experiences", desc: "We carefully choose the best experiences for you.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "Local Experts", desc: "Our local experts bring you authentic experiences.", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
              { title: "Secure & Easy Booking", desc: "Hassle-free booking with secure payments.", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
              { title: "Customer Support", desc: "We're here 24/7 to help you before, during & after.", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#EBF3FE] text-[#0052CC] flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon}></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Popular Experiences (2-Column Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <p className="text-[#0052CC] font-bold text-xs tracking-widest uppercase mb-1">Popular Experiences</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore the Best Experiences</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {popularExperiences.map((exp, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row h-full">
              <div className="sm:w-2/5 h-48 sm:h-auto">
                <img src={exp.img} alt={exp.title} className="w-full h-full object-cover" />
              </div>
              <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded bg-[#EBF3FE] text-[#0052CC] flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {exp.icon}
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">{exp.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{exp.desc}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center text-xs font-medium text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-2"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            {[
              { num: "500+", text: "Happy Guests", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { num: "200+", text: "Unique Experiences", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
              { num: "50+", text: "Top Destinations", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
              { num: "4.8/5", text: "Guest Rating", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4">
                <div className="w-12 h-12 rounded-full border-2 border-blue-100 text-[#0052CC] flex items-center justify-center mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon}></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-[#0052CC] mb-1">{stat.num}</h3>
                <p className="text-xs font-bold text-gray-700">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Experience Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <p className="text-[#0052CC] font-bold text-xs tracking-widest uppercase mb-1">Experience Categories</p>
        <h2 className="text-2xl font-bold text-gray-900 mb-10">Find Experiences That Match Your Mood</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 flex flex-col items-center justify-center hover:border-blue-300 hover:shadow-md cursor-pointer transition-all group">
              <span className="text-3xl mb-3 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all">{cat.icon}</span>
              <p className="text-xs font-bold text-gray-700">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. What's Included */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <p className="text-[#0052CC] font-bold text-xs tracking-widest uppercase mb-1">What's Included</p>
          <h2 className="text-2xl font-bold text-gray-900">Everything You Need for a Perfect Experience</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-x divide-gray-100">
          {[
            { title: "Expert Guides", text: "Professional & friendly guides", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
            { title: "Safe & Secure", text: "Your safety is our top priority", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
            { title: "Comfort & Convenience", text: "Well-planned for your comfort", icon: "M5 13l4 4L19 7" },
            { title: "Flexible Options", text: "Choose what suits your needs", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
            { title: "No Hidden Charges", text: "Transparent pricing always", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center px-4">
              <div className="w-10 h-10 rounded bg-[#F8FAFC] text-gray-500 flex items-center justify-center mb-3 border border-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
              </div>
              <h4 className="font-bold text-sm text-gray-900 mb-1">{item.title}</h4>
              <p className="text-[11px] text-gray-500 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#F4F7FB] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between border border-blue-50 overflow-hidden relative">
          <div className="md:w-1/2 relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Help Planning Your Experience?</h2>
            <p className="text-gray-600 mb-8 max-w-sm">Our concierge team is here to help you create the perfect itinerary.</p>
            <button className="bg-[#0052CC] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm">
              Contact Concierge
            </button>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end relative z-10">
            {/* Simple SVG Illustration placeholder matching the vibe */}
            <svg width="250" height="200" viewBox="0 0 250 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="120" width="150" height="80" rx="10" fill="#0052CC"/>
              <circle cx="125" cy="70" r="40" fill="#FFC1A1"/>
              <path d="M105 50 Q125 30 145 50 L145 70 L105 70 Z" fill="#333"/>
              <rect x="80" y="140" width="90" height="40" rx="4" fill="#6699FF"/>
              <circle cx="160" cy="70" r="8" fill="#555"/>
              <path d="M165 70 L180 80" stroke="#555" strokeWidth="4" strokeLinecap="round"/>
              <rect x="180" y="20" width="60" height="40" rx="20" fill="white"/>
              <circle cx="195" cy="40" r="3" fill="#0052CC"/><circle cx="210" cy="40" r="3" fill="#0052CC"/><circle cx="225" cy="40" r="3" fill="#0052CC"/>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experiences;