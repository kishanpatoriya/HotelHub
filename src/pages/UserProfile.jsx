import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [profileImage, setProfileImage] = useState(null);
  const [profileData, setProfileData] = useState({
    fullName: '', username: '', email: '', phone: '', dob: '', gender: '',
    country: '', state: '', city: '', zip: '', address: '',
    website: '', facebook: '', instagram: '', linkedin: '', bio: ''
  });

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });

  useEffect(() => {
    const savedData = localStorage.getItem('hotelHubUserProfile');
    const savedImage = localStorage.getItem('hotelHubUserImage');
    
    if (savedData) {
      setProfileData(JSON.parse(savedData));
    }
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profileData.email);

  const calculateCompletion = () => {
    let filledFields = 0;
    const totalFields = Object.keys(profileData).length + 1; // +1 for image
    
    if (profileImage) filledFields++;
    Object.values(profileData).forEach(val => {
      if (val && val.trim() !== '') filledFields++;
    });

    return Math.round((filledFields / totalFields) * 100);
  };
  const completionPercentage = calculateCompletion();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSaveChanges = () => {
    localStorage.setItem('hotelHubUserProfile', JSON.stringify(profileData));
    if (profileImage) {
      localStorage.setItem('hotelHubUserImage', profileImage);
    } else {
      localStorage.removeItem('hotelHubUserImage');
    }
    alert("✅ Profile changes saved successfully!");
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({ ...prev, [name]: value }));
  };

  const handleSavePassword = () => {
    if (passwords.new !== passwords.confirm) {
      alert("New password and confirm password do not match!");
      return;
    }
    if (passwords.new.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    alert("✅ Password changed successfully!");
    setIsPasswordModalOpen(false);
    setPasswords({ current: '', new: '', confirm: '' });
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      navigate('/');
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100; // Offset for navbar
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const UserPlaceholderIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );

  return (
    <div className="w-full min-h-screen bg-gray-50 font-sans pb-20">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-10">
        
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
          
          <aside className="w-full lg:w-72 flex flex-col gap-6 sticky top-24 shrink-0">
            
            {/* Navigation Menu */}
            <div className="bg-white rounded-2xl shadow-sm p-4 flex flex-col space-y-1 border border-gray-100">
              <button onClick={() => scrollToSection('personal-info')} className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl text-sm font-semibold transition-colors">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                Personal Info
              </button>
              <button onClick={() => scrollToSection('address-details')} className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl text-sm font-semibold transition-colors">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Address
              </button>
              <button onClick={() => scrollToSection('security-settings')} className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl text-sm font-semibold transition-colors">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                Security
              </button>
              <button onClick={() => scrollToSection('my-listings')} className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl text-sm font-semibold transition-colors">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                My Listings
              </button>
              <hr className="my-2 border-gray-100" />
              <button onClick={handleLogout} className="flex items-center w-full px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl text-sm font-semibold transition-colors">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                Log Out
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-bold text-gray-800">Profile Completion</h3>
                <span className="text-[#1A63F4] font-bold text-sm">{completionPercentage}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-4 overflow-hidden">
                <div 
                  className="bg-[#1A63F4] h-full rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                Add details to reach 100% and earn the 'Elite Member' badge.
              </p>
            </div>

          </aside>

          <main className="flex-1 w-full flex flex-col gap-6">
            
            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center border border-gray-100 gap-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-16 h-16 rounded-full object-cover border border-gray-200" />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 text-gray-400">
                      <UserPlaceholderIcon className="w-8 h-8" />
                    </div>
                  )}
                  {completionPercentage > 80 && (
                    <div className="absolute bottom-0 right-0 bg-green-500 p-0.5 rounded-full border-2 border-white">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                  )}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {profileData.fullName || "Your Name"}
                  </h1>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-500">@{profileData.username || "username"}</span>
                    {completionPercentage === 100 && (
                      <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded">Verified Host</span>
                    )}
                  </div>
                </div>
              </div>
              <button onClick={handleSaveChanges} className="bg-[#0052CC] hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center shadow-sm w-full sm:w-auto justify-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
                Save Changes
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Profile Photo</h2>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                
                <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} className="hidden" />

                <div onClick={() => fileInputRef.current.click()} className="flex-1 w-full border-2 border-dashed border-gray-200 bg-gray-50 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-colors cursor-pointer">
                  <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  <p className="text-sm font-medium text-gray-700"><span className="text-[#1A63F4]">Click to upload</span> photo</p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG or GIF (max. 5MB)</p>
                </div>
                
                <div className="flex flex-col gap-3 w-full md:w-48">
                  <button onClick={() => fileInputRef.current.click()} className="w-full bg-[#EBF3FE] text-[#1A63F4] font-semibold py-2.5 rounded-xl text-sm hover:bg-blue-100 transition-colors">
                    Upload New
                  </button>
                  <button onClick={handleRemoveImage} className={`w-full font-semibold py-2.5 rounded-xl text-sm transition-colors border ${profileImage ? 'bg-white border-red-200 text-red-500 hover:bg-red-50' : 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'}`} disabled={!profileImage}>
                    Remove
                  </button>
                </div>
              </div>
            </div>

            <div id="personal-info" className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 scroll-mt-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Full Name</label>
                  <input name="fullName" value={profileData.fullName} onChange={handleInputChange} type="text" placeholder="e.g. John Doe" className="w-full bg-[#F4F7FB] px-4 py-3 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A63F4]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Username</label>
                  <input name="username" value={profileData.username} onChange={handleInputChange} type="text" placeholder="e.g. johndoe123" className="w-full bg-[#F4F7FB] px-4 py-3 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A63F4]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Email Address</label>
                  <div className={`relative border rounded-xl overflow-hidden ${isEmailValid && profileData.email ? 'border-green-300' : 'border-transparent'}`}>
                    <input name="email" value={profileData.email} onChange={handleInputChange} type="email" placeholder="john@example.com" className="w-full bg-[#F4F7FB] pl-4 pr-10 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none" />
                    {isEmailValid && profileData.email && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-500 rounded-full p-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                    )}
                  </div>
                  {isEmailValid && profileData.email ? (
                    <p className="text-[10px] text-green-600 mt-1 font-medium">Email verified successfully</p>
                  ) : profileData.email ? (
                    <p className="text-[10px] text-red-500 mt-1 font-medium">Please enter a valid email</p>
                  ) : null}
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Phone Number</label>
                  <input name="phone" value={profileData.phone} onChange={handleInputChange} type="text" placeholder="+1 (000) 000-0000" className="w-full bg-[#F4F7FB] px-4 py-3 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A63F4]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Date of Birth</label>
                  <input name="dob" value={profileData.dob} onChange={handleInputChange} type="date" className="w-full bg-[#F4F7FB] px-4 py-3 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A63F4]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Gender</label>
                  <select name="gender" value={profileData.gender} onChange={handleInputChange} className="w-full bg-[#F4F7FB] px-4 py-3 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1A63F4]">
                    <option value="" disabled hidden>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div id="address-details" className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 scroll-mt-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Address Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                <div className="md:col-span-1">
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Country</label>
                  <select name="country" value={profileData.country} onChange={handleInputChange} className="w-full bg-[#F4F7FB] px-4 py-3 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1A63F4]">
                    <option value="" disabled hidden>Select Country</option>
                    <option value="us">United States</option>
                    <option value="in">India</option>
                    <option value="uk">United Kingdom</option>
                  </select>
                </div>
                <div className="md:col-span-1">
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">State / Region</label>
                  <input name="state" value={profileData.state} onChange={handleInputChange} type="text" placeholder="e.g. California" className="w-full bg-[#F4F7FB] px-4 py-3 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A63F4]" />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">City</label>
                  <input name="city" value={profileData.city} onChange={handleInputChange} type="text" placeholder="e.g. Los Angeles" className="w-full bg-[#F4F7FB] px-4 py-3 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A63F4]" />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">ZIP Code</label>
                  <input name="zip" value={profileData.zip} onChange={handleInputChange} type="text" placeholder="e.g. 90001" className="w-full bg-[#F4F7FB] px-4 py-3 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A63F4]" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">Full Address</label>
                <input name="address" value={profileData.address} onChange={handleInputChange} type="text" placeholder="Street, Suite, Unit..." className="w-full bg-[#F4F7FB] px-4 py-3 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A63F4]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Social Profiles */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 flex flex-col h-full">
                <h2 className="text-lg font-bold text-gray-900 mb-5">Social Profiles</h2>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#F4F7FB] rounded-full flex items-center justify-center text-[#1A63F4] shrink-0"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg></div>
                    <input name="website" value={profileData.website} onChange={handleInputChange} type="text" placeholder="https://yourwebsite.com" className="w-full bg-[#F4F7FB] px-4 py-2.5 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A63F4]" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#F4F7FB] rounded-full flex items-center justify-center text-[#1A63F4] shrink-0"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></div>
                    <input name="facebook" value={profileData.facebook} onChange={handleInputChange} type="text" placeholder="facebook.com/username" className="w-full bg-[#F4F7FB] px-4 py-2.5 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A63F4]" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#F4F7FB] rounded-full flex items-center justify-center text-[#E1306C] shrink-0"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg></div>
                    <input name="instagram" value={profileData.instagram} onChange={handleInputChange} type="text" placeholder="instagram.com/username" className="w-full bg-[#F4F7FB] px-4 py-2.5 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A63F4]" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 flex flex-col h-full">
                <h2 className="text-lg font-bold text-gray-900 mb-5">About Me</h2>
                <textarea 
                  name="bio" value={profileData.bio} onChange={handleInputChange}
                  placeholder="Tell us a little bit about yourself..." 
                  className="w-full bg-[#F4F7FB] p-4 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A63F4] resize-none h-full min-h-[140px]"
                ></textarea>
              </div>
            </div>

            <div id="security-settings" className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 scroll-mt-24">
               <h2 className="text-lg font-bold text-gray-900 mb-2">Security Settings</h2>
               <p className="text-sm text-gray-500 mb-4">Manage your password and security preferences.</p>
               <button onClick={() => setIsPasswordModalOpen(true)} className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors">
                 Change Password
               </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 mb-8">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Account Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-[#F4F7FB] rounded-xl p-4 flex flex-col items-center justify-center">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Member Since</p>
                  <p className="text-lg font-bold text-gray-900">Today</p>
                </div>
                <div className="bg-[#F4F7FB] rounded-xl p-4 flex flex-col items-center justify-center">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Profile Strength</p>
                  <p className={`text-lg font-bold ${completionPercentage === 100 ? 'text-green-600' : 'text-orange-500'}`}>
                    {completionPercentage < 50 ? 'Weak' : completionPercentage < 100 ? 'Good' : 'Excellent'}
                  </p>
                </div>
                <div className="bg-[#F4F7FB] rounded-xl p-4 flex flex-col items-center justify-center">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Verification Status</p>
                  <div className={`flex items-center font-bold text-sm mt-1 ${isEmailValid && profileData.email ? 'text-green-600' : 'text-gray-400'}`}>
                    <div className={`${isEmailValid && profileData.email ? 'bg-green-500' : 'bg-gray-300'} rounded-full p-0.5 mr-1.5 transition-colors`}>
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    {isEmailValid && profileData.email ? 'Email Verified' : 'Unverified'}
                  </div>
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>

      {isPasswordModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl relative animate-fadeIn">
            
            <button onClick={() => setIsPasswordModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <h2 className="text-xl font-bold text-gray-900 mb-6">Change Password</h2>
            
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">Current Password</label>
                <input type="password" name="current" value={passwords.current} onChange={handlePasswordChange} placeholder="Enter current password" className="w-full bg-[#F4F7FB] px-4 py-3 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1A63F4]" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">New Password</label>
                <input type="password" name="new" value={passwords.new} onChange={handlePasswordChange} placeholder="Enter new password" className="w-full bg-[#F4F7FB] px-4 py-3 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1A63F4]" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">Confirm New Password</label>
                <input type="password" name="confirm" value={passwords.confirm} onChange={handlePasswordChange} placeholder="Confirm new password" className="w-full bg-[#F4F7FB] px-4 py-3 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1A63F4]" />
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setIsPasswordModalOpen(false)} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-xl text-sm font-semibold transition-colors">
                Cancel
              </button>
              <button onClick={handleSavePassword} className="flex-1 bg-[#0052CC] hover:bg-blue-700 text-white py-3 rounded-xl text-sm font-semibold transition-colors">
                Save Password
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default UserProfile;