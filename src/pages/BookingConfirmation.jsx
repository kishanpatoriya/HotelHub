import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { booking } = location.state || {};

  // ============================
  // NO BOOKING DATA
  // ============================

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">

        <div className="text-center">

          <div className="text-6xl mb-4">
            🏨
          </div>

          <h1 className="text-3xl font-bold text-gray-800">
            Booking Not Found
          </h1>

          <p className="text-gray-500 mt-2">
            We couldn't find your booking information.
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Go Home
          </button>

        </div>

      </div>
    );
  }

  // ============================
  // FORMAT DATES
  // ============================

  const checkIn = new Date(
    booking.checkIn
  ).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const checkOut = new Date(
    booking.checkOut
  ).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10">

      <div className="max-w-4xl mx-auto px-4">

        {/* ============================
            SUCCESS
        ============================ */}

        <div className="bg-white rounded-2xl shadow-sm p-8 text-center">

          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">

            <span className="text-4xl">
              ✓
            </span>

          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6">
            Booking Confirmed!
          </h1>

          <p className="text-gray-500 mt-2">
            Your hotel booking has been successfully confirmed.
          </p>

          {/* BOOKING ID */}

          <div className="mt-5 inline-block bg-gray-100 px-5 py-3 rounded-lg">

            <p className="text-sm text-gray-500">
              Booking ID
            </p>

            <p className="font-bold text-gray-800 mt-1">
              {booking._id}
            </p>

          </div>

        </div>

        {/* ============================
            HOTEL DETAILS
        ============================ */}

        <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

          <h2 className="text-2xl font-bold mb-5">
            Your Stay
          </h2>

          <div className="flex flex-col md:flex-row gap-5">

            <img
              src={booking.hotelImage}
              alt={booking.hotelName}
              className="w-full md:w-52 h-36 object-cover rounded-xl"
            />

            <div>

              <h3 className="text-2xl font-bold">
                {booking.hotelName}
              </h3>

              <p className="text-gray-500 mt-2">
                📍 {booking.hotelLocation}
              </p>

              <p className="text-lg font-semibold mt-4">
                🛏️ {booking.roomName}
              </p>

            </div>

          </div>

        </div>

        {/* ============================
            DATE DETAILS
        ============================ */}

        <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

          <h2 className="text-2xl font-bold mb-5">
            Booking Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="bg-gray-50 rounded-xl p-4">

              <p className="text-sm text-gray-500">
                Check-in
              </p>

              <p className="font-bold mt-1">
                {checkIn}
              </p>

            </div>

            <div className="bg-gray-50 rounded-xl p-4">

              <p className="text-sm text-gray-500">
                Check-out
              </p>

              <p className="font-bold mt-1">
                {checkOut}
              </p>

            </div>

            <div className="bg-gray-50 rounded-xl p-4">

              <p className="text-sm text-gray-500">
                Guests
              </p>

              <p className="font-bold mt-1">
                {booking.guests}{" "}
                {booking.guests === 1
                  ? "Guest"
                  : "Guests"}
              </p>

            </div>

          </div>

          <div className="mt-5 bg-blue-50 rounded-xl p-4">

            <p className="text-blue-700 font-semibold">
              🗓️ {booking.nights}{" "}
              {booking.nights === 1
                ? "Night"
                : "Nights"}
            </p>

          </div>

        </div>

        {/* ============================
            GUEST DETAILS
        ============================ */}

        <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

          <h2 className="text-2xl font-bold mb-5">
            Guest Information
          </h2>

          <div className="space-y-3">

            <p>
              <span className="font-semibold">
                Name:
              </span>{" "}
              {booking.guestName}
            </p>

            <p>
              <span className="font-semibold">
                Phone:
              </span>{" "}
              {booking.phone}
            </p>

            <p>
              <span className="font-semibold">
                Email:
              </span>{" "}
              {booking.email}
            </p>

          </div>

        </div>

        {/* ============================
            PRICE
        ============================ */}

        <div className="bg-white rounded-2xl shadow-sm p-6 mt-6">

          <h2 className="text-2xl font-bold mb-5">
            Payment Summary
          </h2>

          <div className="flex justify-between mb-3">

            <span className="text-gray-600">
              Room
            </span>

            <span>
              ₹{booking.roomPrice}
            </span>

          </div>

          <div className="flex justify-between mb-3">

            <span className="text-gray-600">
              Taxes & fees
            </span>

            <span>
              ₹{booking.taxes}
            </span>

          </div>

          <div className="border-t pt-4 mt-4 flex justify-between">

            <span className="text-xl font-bold">
              Total
            </span>

            <span className="text-2xl font-bold text-green-600">
              ₹{booking.totalPrice}
            </span>

          </div>

        </div>

        {/* ============================
            STATUS
        ============================ */}

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mt-6 text-center">

          <p className="text-green-700 font-bold text-lg">
            ✓ Booking Confirmed
          </p>

          <p className="text-green-600 text-sm mt-1">
            Your reservation has been saved successfully.
          </p>

        </div>

        {/* ============================
            BUTTONS
        ============================ */}

        <div className="flex flex-col sm:flex-row gap-4 mt-6">

          <button
            onClick={() => navigate("/")}
            className="flex-1 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700"
          >
            Back to Home
          </button>

          <button
            onClick={() => window.print()}
            className="flex-1 border border-gray-300 bg-white font-semibold py-3 rounded-xl hover:bg-gray-100"
          >
            🖨️ Print Booking
          </button>

        </div>

      </div>

    </div>
  );
};

export default BookingConfirmation;
