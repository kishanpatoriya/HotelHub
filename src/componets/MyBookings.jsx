import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cancellingId, setCancellingId] = useState(null);

  // ============================
  // FETCH MY BOOKINGS
  // ============================

  useEffect(() => {
    fetchMyBookings();
  }, []);

  const fetchMyBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      const response = await fetch(
        "http://localhost:5000/api/bookings/my-bookings",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();

      console.log("My bookings:", data);

      if (data.success) {
        setBookings(data.bookings || []);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error loading bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  // ============================
  // CANCEL BOOKING
  // ============================

  const handleCancelBooking = async (bookingId) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this booking?",
    );

    if (!confirmed) {
      return;
    }

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login again.");
        return;
      }

      setCancellingId(bookingId);

      const response = await fetch(
        `http://localhost:5000/api/bookings/${bookingId}/cancel`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();

      console.log("Cancel booking response:", data);

      if (data.success) {
        // Update booking status immediately
        setBookings((previousBookings) =>
          previousBookings.map((booking) =>
            booking._id === bookingId
              ? {
                  ...booking,
                  bookingStatus: "cancelled",
                }
              : booking,
          ),
        );

        alert("Booking cancelled successfully.");
      } else {
        alert(data.message || "Unable to cancel booking.");
      }
    } catch (error) {
      console.error("Cancel Booking Error:", error);

      alert("Unable to cancel booking. Please try again.");
    } finally {
      setCancellingId(null);
    }
  };

  // ============================
  // LOADING
  // ============================

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-xl font-semibold">
          Loading your bookings...
        </h2>
      </div>
    );
  }

  // ============================
  // PAGE
  // ============================

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ============================
            HEADER
        ============================ */}

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            My Bookings
          </h1>

          <p className="text-gray-500 mt-2">
            View and manage your hotel reservations.
          </p>
        </div>

        {/* ============================
            NO BOOKINGS
        ============================ */}

        {bookings.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm p-10 text-center">

            <div className="text-6xl mb-5">
              🏨
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              No bookings yet
            </h2>

            <p className="text-gray-500 mt-2">
              You haven't booked any hotel yet.
            </p>

            <button
              onClick={() => navigate("/")}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition cursor-pointer"
            >
              Explore Hotels
            </button>

          </div>
        ) : (

          /* ============================
             BOOKINGS
          ============================ */

          <div className="space-y-6">

            {bookings.map((booking) => {

              const checkIn = new Date(
                booking.checkIn,
              ).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              });

              const checkOut = new Date(
                booking.checkOut,
              ).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              });

              return (
                <div
                  key={booking._id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                >

                  <div className="p-6">

                    <div className="flex flex-col md:flex-row gap-6">

                      {/* ============================
                          HOTEL IMAGE
                      ============================ */}

                      <img
                        src={booking.hotelImage}
                        alt={booking.hotelName}
                        className="w-full md:w-60 h-40 object-cover rounded-xl"
                      />

                      {/* ============================
                          BOOKING INFO
                      ============================ */}

                      <div className="flex-1">

                        <div className="flex flex-col sm:flex-row sm:justify-between gap-3">

                          <div>

                            <h2 className="text-2xl font-bold text-gray-900">
                              {booking.hotelName}
                            </h2>

                            <p className="text-gray-500 mt-1">
                              📍 {booking.hotelLocation}
                            </p>

                          </div>

                          {/* STATUS */}

                          <span
                            className={`self-start px-3 py-1 rounded-full text-sm font-semibold ${
                              booking.bookingStatus === "confirmed"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {booking.bookingStatus === "confirmed"
                              ? "✓ Confirmed"
                              : "✕ Cancelled"}
                          </span>

                        </div>

                        {/* ============================
                            ROOM
                        ============================ */}

                        <div className="mt-5">

                          <p className="font-semibold text-gray-800">
                            🛏️ {booking.roomName}
                          </p>

                          <p className="text-gray-500 mt-1">
                            ₹{booking.roomPrice} / night
                          </p>

                        </div>

                        {/* ============================
                            DATES
                        ============================ */}

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">

                          <div className="bg-gray-50 rounded-lg p-3">

                            <p className="text-sm text-gray-500">
                              Check-in
                            </p>

                            <p className="font-semibold mt-1">
                              {checkIn}
                            </p>

                          </div>

                          <div className="bg-gray-50 rounded-lg p-3">

                            <p className="text-sm text-gray-500">
                              Check-out
                            </p>

                            <p className="font-semibold mt-1">
                              {checkOut}
                            </p>

                          </div>

                          <div className="bg-gray-50 rounded-lg p-3">

                            <p className="text-sm text-gray-500">
                              Guests
                            </p>

                            <p className="font-semibold mt-1">
                              {booking.guests}
                            </p>

                          </div>

                        </div>

                        {/* ============================
                            BOTTOM
                        ============================ */}

                        <div className="border-t mt-5 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                          {/* TOTAL */}

                          <div>

                            <p className="text-sm text-gray-500">
                              Total Amount
                            </p>

                            <p className="text-2xl font-bold text-green-600">
                              ₹{booking.totalPrice}
                            </p>

                          </div>

                          {/* BUTTONS */}

                          <div className="flex flex-col sm:flex-row gap-3">

                            {/* VIEW BOOKING */}

                            <button
                              onClick={() =>
                                navigate("/booking-confirmation", {
                                  state: {
                                    booking: booking,
                                  },
                                })
                              }
                              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition cursor-pointer"
                            >
                              View Booking
                            </button>

                            {/* CANCEL BOOKING */}

                            {booking.bookingStatus === "confirmed" && (
                              <button
                                onClick={() =>
                                  handleCancelBooking(booking._id)
                                }
                                disabled={
                                  cancellingId === booking._id
                                }
                                className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
                              >
                                {cancellingId === booking._id
                                  ? "Cancelling..."
                                  : "Cancel Booking"}
                              </button>
                            )}

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>
        )}

      </div>
    </div>
  );
};

export default MyBookings;
