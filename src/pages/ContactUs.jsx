import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    inquiryType: 'Booking & Reservations',
    message: ''
  });

  const [activeFaq, setActiveFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({ firstName: '', lastName: '', email: '', inquiryType: 'Booking & Reservations', message: '' });
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I modify an existing reservation?",
      answer: "You can modify your reservation by logging into your account, navigating to 'My Bookings', and selecting 'Modify'. Alternatively, you can contact our 24/7 concierge team for assistance."
    },
    {
      question: "What exclusive benefits come with Luxe Membership?",
      answer: "Luxe Members enjoy complimentary room upgrades, late check-out, exclusive access to member-only rates, and dedicated priority support during their stays."
    },
    {
      question: "Do you offer specialized corporate travel accounts?",
      answer: "Yes, we offer tailored corporate travel programs that include discounted rates, consolidated billing, and a dedicated account manager. Please reach out to our corporate team for more details."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-gray-900 pb-20">
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="max-w-3xl">
          <p className="text-[#0052CC] font-bold text-xs tracking-widest uppercase mb-3">Connect With Us</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            How can we assist you?
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-xl">
            Our dedicated concierge team is available 24/7 to ensure your luxury travel experience is seamless and extraordinary.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Column: Contact Form */}
          <div className="w-full lg:w-3/5 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">First Name</label>
                  <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Jane" className="w-full bg-[#F4F7FB] px-4 py-3.5 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0052CC]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">Last Name</label>
                  <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Doe" className="w-full bg-[#F4F7FB] px-4 py-3.5 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0052CC]" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">Email Address</label>
                <input required type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="jane@luxestay.com" className="w-full bg-[#F4F7FB] px-4 py-3.5 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0052CC]" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">Inquiry Type</label>
                <div className="relative">
                  <select name="inquiryType" value={formData.inquiryType} onChange={handleInputChange} className="w-full bg-[#F4F7FB] px-4 py-3.5 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0052CC] appearance-none cursor-pointer">
                    <option>Booking & Reservations</option>
                    <option>Membership Support</option>
                    <option>Corporate Travel</option>
                    <option>Feedback & Suggestions</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">Message</label>
                <textarea required name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us how we can help make your stay perfect..." className="w-full bg-[#F4F7FB] p-4 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0052CC] resize-none h-32"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#0052CC] hover:bg-blue-700 text-white font-semibold py-4 rounded-xl text-sm transition-colors flex justify-center items-center">
                Send Message
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </form>
          </div>

          <div className="w-full lg:w-2/5 flex flex-col gap-6">
            
            {/* Direct Contact */}
            <div className="bg-[#F0F7FF] rounded-3xl p-8 border border-blue-50">
              <h3 className="text-sm font-bold text-gray-800 mb-6">Direct Contact</h3>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#0052CC] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Reservations</p>
                  <p className="text-sm font-semibold text-gray-900">+1 (800) LUXE-STAY</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0052CC] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-sm font-semibold text-gray-900">concierge@luxestay.com</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F4F7FB] rounded-3xl p-8 border border-gray-100">
              <h3 className="text-sm font-bold text-gray-800 mb-5">Office Hours</h3>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-600">Monday — Friday</span>
                <span className="text-sm font-bold text-gray-900">24 Hours</span>
              </div>
              <div className="flex justify-between items-center mb-5 pb-5 border-b border-gray-200">
                <span className="text-sm text-gray-600">Saturday — Sunday</span>
                <span className="text-sm font-bold text-gray-900">24 Hours</span>
              </div>
              <p className="text-[11px] font-bold text-[#0052CC] italic">
                Global Support available in 12 languages.
              </p>
            </div>

            <div className="px-2 mt-2">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Connect Globally</h3>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-50 hover:text-[#0052CC] transition-colors shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-50 hover:text-[#0052CC] transition-colors shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-gray-50 hover:text-[#E1306C] transition-colors shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"></line></svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Frequently Asked Questions</h2>
          <p className="text-sm text-gray-500">Quick answers to common inquiries about our luxury services.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-sm pr-4">{faq.question}</span>
                <svg className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 shrink-0 ${activeFaq === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${activeFaq === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
              >
                <div className="p-6 pt-0 text-sm text-gray-500 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full h-[500px] relative bg-gray-200">
        {/* Placeholder Map Image (Using a generic map image from Unsplash to simulate the map) */}
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80" 
          alt="Map Location" 
          className="w-full h-full object-cover grayscale opacity-80"
        />
        
        <div className="absolute top-1/2 left-1/2 md:left-2/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="w-10 h-10 bg-[#0052CC] rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white/50 animate-bounce">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          </div>
          <div className="bg-white px-3 py-1.5 rounded-lg shadow-md text-[10px] font-bold text-gray-800 mt-2 whitespace-nowrap">
            Corporate Office Location
          </div>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-12 lg:left-32 w-[90%] md:w-80 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 z-10">
          <h3 className="text-xl font-bold text-gray-900 mb-1">Contact Us</h3>
          <p className="text-xs text-gray-500 mb-6">Luxe Stay - New York Headquarters</p>
          
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#0052CC] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <div>
                <p className="text-sm font-bold text-gray-900 mb-1">Global HQ</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-2">750 Fifth Avenue, 24th Floor<br/>New York, NY 10019</p>
                <a href="#" className="text-xs font-bold text-[#0052CC] hover:underline flex items-center">
                  Get Directions <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-[11px] text-gray-500 mb-3"><span className="font-bold text-gray-700">Mon-Fri:</span> 9:00 AM - 5:00 PM</p>
              <button className="w-full bg-[#3273DC] hover:bg-blue-600 text-white font-semibold py-2.5 rounded-lg text-xs transition-colors">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;