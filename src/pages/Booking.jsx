import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { hotel, room } = location.state || {};

  // =========================
  // BOOKING STATES
  // =========================

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const [guestName, setGuestName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bookingLoading, setBookingLoading] = useState(false);

  // =========================
  // IF DATA IS MISSING
  // =========================

  if (!hotel || !room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🏨</div>

          <h1 className="text-3xl font-bold text-gray-800">
            Booking information not found
          </h1>

          <p className="text-gray-500 mt-2">
            Please select a room from the hotel page.
          </p>

          <button
            onClick={() => navigate(-1)}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // =========================
  // CALCULATE NIGHTS
  // =========================

  let nights = 1;

  if (checkIn && checkOut) {
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);

    const difference = endDate.getTime() - startDate.getTime();

    nights = Math.ceil(difference / (1000 * 60 * 60 * 24));

    if (nights < 1) {
      nights = 0;
    }
  }

  // =========================
  // PRICE CALCULATION
  // =========================

  const roomPrice = Number(room.price) || 0;

  const roomTotal = roomPrice * nights;

  const taxes = Math.round(roomTotal * 0.12);

  const totalPrice = roomTotal + taxes;

  // =========================
  // TODAY DATE
  // =========================

  const today = new Date().toISOString().split("T")[0];

  // =========================
  // CONTINUE BOOKING
  // =========================

  const handleContinue = async () => {
    // ============================
    // VALIDATION
    // ============================

    if (!checkIn) {
      alert("Please select your check-in date.");
      return;
    }

    if (!checkOut) {
      alert("Please select your check-out date.");
      return;
    }

    if (nights <= 0) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    if (!guestName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    try {
      setBookingLoading(true);

      // ============================
      // BOOKING DATA
      // ============================

      const bookingData = {
        hotelId: hotel._id,
        hotelName: hotel.name,
        hotelLocation: hotel.location,
        hotelImage: hotel.image,

        roomName: room.name,
        roomImage: room.image,
        roomPrice: roomPrice,

        checkIn,
        checkOut,

        guests,
        nights,

        guestName: guestName.trim(),
        phone: phone.trim(),
        email: email.trim(),

        taxes,
        totalPrice,
      };

      console.log("Sending booking:", bookingData);

      // ============================
      // SEND TO BACKEND
      // ============================

      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      console.log("Booking response:", data);

      // ============================
      // SUCCESS
      // ============================

      if (data.success) {
        navigate("/booking-confirmation", {
          state: {
            booking: data.booking,
          },
        });
      } else {
        alert(data.message || "Booking failed.");
      }
    } catch (error) {
      console.error("Booking Error:", error);

      alert(
        "Unable to create booking. Please make sure the server is running.",
      );
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* =========================
            HEADER
        ========================= */}

        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:text-blue-800 mb-4"
          >
            ← Back to hotel
          </button>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Complete Your Booking
          </h1>

          <p className="text-gray-500 mt-2">
            Enter your stay details and guest information.
          </p>
        </div>

        {/* =========================
            MAIN GRID
        ========================= */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ==================================
              LEFT SIDE
          ================================== */}

          <div className="lg:col-span-2 space-y-6">
            {/* =========================
                HOTEL
            ========================= */}

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-5">Hotel</h2>

              <div className="flex flex-col sm:flex-row gap-5">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full sm:w-40 h-28 object-cover rounded-xl"
                />

                <div>
                  <h3 className="text-xl font-bold">{hotel.name}</h3>

                  <p className="text-gray-500 mt-2">📍 {hotel.location}</p>

                  <div className="mt-3">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-md text-sm">
                      4.8 ⭐
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================
                ROOM
            ========================= */}

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-5">Selected Room</h2>

              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full md:w-64 h-48 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <h3 className="text-2xl font-bold">{room.name}</h3>

                  <div className="flex flex-wrap gap-4 mt-4 text-gray-600">
                    <span>👥 Up to {room.guests} Guests</span>

                    <span>🛏️ {room.beds}</span>
                  </div>

                  <p className="text-gray-600 mt-4 leading-6">
                    {room.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {room.amenities?.map((amenity, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                      >
                        ✓ {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* =========================
                STAY DETAILS
            ========================= */}

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-5">Your Stay</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* CHECK IN */}

                <div>
                  <label className="block font-semibold mb-2">Check-in</label>

                  <input
                    type="date"
                    min={today}
                    value={checkIn}
                    onChange={(e) => {
                      setCheckIn(e.target.value);

                      if (checkOut && e.target.value >= checkOut) {
                        setCheckOut("");
                      }
                    }}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* CHECK OUT */}

                <div>
                  <label className="block font-semibold mb-2">Check-out</label>

                  <input
                    type="date"
                    min={checkIn || today}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* NIGHTS */}

              {checkIn && checkOut && nights > 0 && (
                <div className="mt-5 bg-blue-50 border border-blue-100 rounded-lg p-4">
                  <p className="text-blue-800 font-semibold">
                    🗓️ {nights} {nights === 1 ? "Night" : "Nights"}
                  </p>

                  <p className="text-blue-600 text-sm mt-1">
                    {checkIn} → {checkOut}
                  </p>
                </div>
              )}

              {/* GUESTS */}

              <div className="mt-5">
                <label className="block font-semibold mb-2">
                  Number of Guests
                </label>

                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {Array.from(
                    { length: room.guests },
                    (_, index) => index + 1,
                  ).map((guest) => (
                    <option key={guest} value={guest}>
                      {guest} {guest === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* =========================
                GUEST DETAILS
            ========================= */}

            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-5">Guest Details</h2>

              {/* NAME */}

              <div className="mb-5">
                <label className="block font-semibold mb-2">Full Name</label>

                <input
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* PHONE + EMAIL */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block font-semibold mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ==================================
              RIGHT SIDE
          ================================== */}

          <div>
            <div className="bg-white rounded-2xl shadow-sm p-6 lg:sticky lg:top-6">
              <h2 className="text-2xl font-bold mb-6">Price Summary</h2>

              {/* ROOM PRICE */}

              <div className="flex justify-between mb-4">
                <span className="text-gray-600">
                  ₹{roomPrice} × {nights} {nights === 1 ? "night" : "nights"}
                </span>

                <span className="font-semibold">₹{roomTotal}</span>
              </div>

              {/* TAX */}

              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Taxes & fees</span>

                <span className="font-semibold">₹{taxes}</span>
              </div>

              {/* DIVIDER */}

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between">
                  <span className="text-xl font-bold">Total</span>

                  <span className="text-2xl font-bold text-green-600">
                    ₹{totalPrice}
                  </span>
                </div>
              </div>

              {/* BOOKING BUTTON */}

              <button
                onClick={handleContinue}
                disabled={bookingLoading}
                className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl mt-6 hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {bookingLoading ? "Confirming Booking..." : "Continue Booking"}
              </button>

              <p className="text-xs text-gray-400 text-center mt-4">
                You won't be charged yet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
