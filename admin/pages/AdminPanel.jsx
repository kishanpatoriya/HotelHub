import React from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };

  const stats = [
    {
      title: "Total Hotels",
      value: "24",
      change: "+4.8%",
      icon: "🏨",
    },
    {
      title: "Total Rooms",
      value: "186",
      change: "+8.2%",
      icon: "🛏️",
    },
    {
      title: "Total Bookings",
      value: "1,248",
      change: "+12.5%",
      icon: "📅",
    },
    {
      title: "Total Users",
      value: "3,842",
      change: "+6.4%",
      icon: "👥",
    },
  ];

  const bookings = [
    {
      id: "#HB1024",
      customer: "Rahul Sharma",
      hotel: "Hotel Sunrise Inn",
      date: "02 Aug 2026",
      amount: "₹4,500",
      status: "Confirmed",
    },
    {
      id: "#HB1023",
      customer: "Priya Patel",
      hotel: "Hotel Royal Stay",
      date: "02 Aug 2026",
      amount: "₹6,200",
      status: "Confirmed",
    },
    {
      id: "#HB1022",
      customer: "Amit Shah",
      hotel: "Hotel Comfort Residency",
      date: "01 Aug 2026",
      amount: "₹3,800",
      status: "Pending",
    },
    {
      id: "#HB1021",
      customer: "Neha Mehta",
      hotel: "Hotel Sunrise Inn",
      date: "01 Aug 2026",
      amount: "₹5,100",
      status: "Cancelled",
    },
    {
      id: "#HB1020",
      customer: "Karan Patel",
      hotel: "Hotel Royal Stay",
      date: "31 Jul 2026",
      amount: "₹7,400",
      status: "Confirmed",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#f5f7fb] text-gray-800">
      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="fixed left-0 top-0 bottom-0 w-[250px] bg-[#111827] text-white hidden lg:flex flex-col z-50">
        {/* Logo */}
        <div className="h-[72px] px-6 flex items-center border-b border-gray-700">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-xl mr-3">
            🏨
          </div>

          <div>
            <h1 className="text-xl font-bold">
              Hotel<span className="text-blue-400">Hub</span>
            </h1>

            <p className="text-[11px] text-gray-400">ADMIN PANEL</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="px-4 py-6 flex-1">
          <p className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold px-3 mb-3">
            Main Menu
          </p>

          <nav className="space-y-1">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-600 text-white font-medium">
              <span>📊</span>
              Dashboard
            </button>

            <button
              onClick={() => navigate("/admin/hotels")}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800 transition cursor-pointer"
            >
              <span>🏨</span>
              Hotels
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800 transition">
              <span>🛏️</span>
              Rooms
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800 transition">
              <span>📅</span>
              Bookings
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800 transition">
              <span>👥</span>
              Users
            </button>
          </nav>

          <p className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold px-3 mt-8 mb-3">
            System
          </p>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800 transition">
            <span>⚙️</span>
            Settings
          </button>
        </div>

        {/* Admin Profile */}
        <div className="border-t border-gray-700 p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
              A
            </div>

            <div className="min-w-0">
              <p className="text-sm font-semibold truncate">Administrator</p>

              <p className="text-xs text-gray-400">Super Admin</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full py-2.5 rounded-lg bg-gray-800 hover:bg-red-600 text-gray-300 hover:text-white transition text-sm font-medium"
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="lg:ml-[250px] min-h-screen">
        {/* =================================================
            TOP BAR
        ================================================= */}

        <header className="h-[72px] bg-white border-b border-gray-200 px-5 sm:px-8 flex items-center justify-between sticky top-0 z-40">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Dashboard
            </h2>

            <p className="text-xs sm:text-sm text-gray-500">
              Overview of your hotel business
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Notification */}
            <button className="relative w-10 h-10 rounded-xl border border-gray-200 hover:bg-gray-50 flex items-center justify-center">
              🔔
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
            </button>

            {/* Profile */}
            <div className="flex items-center gap-3 pl-3 border-l">
              <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                A
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold">Admin</p>

                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        {/* =================================================
            PAGE CONTENT
        ================================================= */}

        <main className="p-5 sm:p-8 max-w-[1600px] mx-auto">
          {/* Welcome */}

          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Welcome back, Admin 👋
            </h1>

            <p className="text-gray-500 mt-1">
              Here's what's happening with HotelHub today.
            </p>
          </div>

          {/* =================================================
              STAT CARDS
          ================================================= */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md transition"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{stat.title}</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-2">
                      {stat.value}
                    </h2>
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-xl">
                    {stat.icon}
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-md">
                    ↑ {stat.change}
                  </span>

                  <span className="text-xs text-gray-400">vs last month</span>
                </div>
              </div>
            ))}
          </div>

          {/* =================================================
              TWO COLUMN SECTION
          ================================================= */}

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
            {/* Revenue */}

            <div className="xl:col-span-2 bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-bold text-lg">Revenue Overview</h2>

                  <p className="text-sm text-gray-500">
                    Monthly revenue performance
                  </p>
                </div>

                <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none">
                  <option>2026</option>
                  <option>2025</option>
                </select>
              </div>

              {/* Simple chart */}

              <div className="h-[230px] flex items-end gap-3 sm:gap-6 border-b border-gray-100 pb-2">
                {[45, 65, 52, 75, 60, 82, 70, 90, 68, 78, 88, 96].map(
                  (height, index) => (
                    <div key={index} className="flex-1 h-full flex items-end">
                      <div
                        className="w-full bg-blue-500 hover:bg-blue-600 rounded-t-lg transition"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ),
                )}
              </div>

              <div className="flex justify-between text-xs text-gray-400 mt-3">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </div>

            {/* Booking Summary */}

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="font-bold text-lg">Booking Summary</h2>

              <p className="text-sm text-gray-500 mb-6">
                This month's bookings
              </p>

              <div className="flex items-center justify-center mb-6">
                <div className="w-36 h-36 rounded-full border-[18px] border-blue-500 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold">82%</p>

                    <p className="text-xs text-gray-500">Occupancy</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Confirmed</span>

                  <span className="font-semibold">820</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Pending</span>

                  <span className="font-semibold">128</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Cancelled</span>

                  <span className="font-semibold">64</span>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              QUICK ACTIONS
          ================================================= */}

          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Quick Actions</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="bg-white border border-gray-200 rounded-xl p-5 text-left hover:border-blue-400 hover:shadow-sm transition">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-xl mb-3">
                  ➕
                </div>

                <p className="font-semibold">Add Hotel</p>

                <p className="text-xs text-gray-500 mt-1">Create new hotel</p>
              </button>

              <button className="bg-white border border-gray-200 rounded-xl p-5 text-left hover:border-blue-400 hover:shadow-sm transition">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-xl mb-3">
                  🛏️
                </div>

                <p className="font-semibold">Add Room</p>

                <p className="text-xs text-gray-500 mt-1">Add hotel room</p>
              </button>

              <button className="bg-white border border-gray-200 rounded-xl p-5 text-left hover:border-blue-400 hover:shadow-sm transition">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-xl mb-3">
                  📅
                </div>

                <p className="font-semibold">Bookings</p>

                <p className="text-xs text-gray-500 mt-1">Manage bookings</p>
              </button>

              <button className="bg-white border border-gray-200 rounded-xl p-5 text-left hover:border-blue-400 hover:shadow-sm transition">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-xl mb-3">
                  👥
                </div>

                <p className="font-semibold">Users</p>

                <p className="text-xs text-gray-500 mt-1">Manage customers</p>
              </button>
            </div>
          </div>

          {/* =================================================
              RECENT BOOKINGS
          ================================================= */}

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
              <div>
                <h2 className="font-bold text-lg">Recent Bookings</h2>

                <p className="text-sm text-gray-500 mt-1">
                  Latest reservations from customers
                </p>
              </div>

              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                View All →
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-6 py-4 text-xs uppercase tracking-wide text-gray-500">
                      Booking
                    </th>

                    <th className="text-left px-6 py-4 text-xs uppercase tracking-wide text-gray-500">
                      Customer
                    </th>

                    <th className="text-left px-6 py-4 text-xs uppercase tracking-wide text-gray-500">
                      Hotel
                    </th>

                    <th className="text-left px-6 py-4 text-xs uppercase tracking-wide text-gray-500">
                      Date
                    </th>

                    <th className="text-left px-6 py-4 text-xs uppercase tracking-wide text-gray-500">
                      Amount
                    </th>

                    <th className="text-left px-6 py-4 text-xs uppercase tracking-wide text-gray-500">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {bookings.map((booking) => (
                    <tr
                      key={booking.id}
                      className="border-t border-gray-100 hover:bg-gray-50 transition"
                    >
                      <td className="px-6 py-4 font-semibold text-sm">
                        {booking.id}
                      </td>

                      <td className="px-6 py-4 text-sm">{booking.customer}</td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {booking.hotel}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-500">
                        {booking.date}
                      </td>

                      <td className="px-6 py-4 text-sm font-semibold">
                        {booking.amount}
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                            booking.status === "Confirmed"
                              ? "bg-green-100 text-green-700"
                              : booking.status === "Pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}

          <div className="text-center text-xs text-gray-400 py-8">
            HotelHub Admin Dashboard © 2026
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
