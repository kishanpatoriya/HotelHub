const Booking = require("../models/Booking");
const mongoose = require("mongoose");

// ============================
// CREATE BOOKING
// ============================

const createBooking = async (req, res) => {
  try {
    const {
      hotelId,
      hotelName,
      hotelLocation,
      hotelImage,
      roomName,
      roomImage,
      roomPrice,
      checkIn,
      checkOut,
      guests,
      nights,
      guestName,
      phone,
      email,
      taxes,
      totalPrice,
    } = req.body;

    // ============================
    // REQUIRED FIELDS
    // ============================

    if (
      !hotelId ||
      !hotelName ||
      !roomName ||
      !checkIn ||
      !checkOut ||
      !guests ||
      !nights ||
      !guestName ||
      !phone ||
      !email ||
      totalPrice === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required booking details.",
      });
    }

    // ============================
    // CHECK HOTEL ID
    // ============================

    if (!mongoose.Types.ObjectId.isValid(hotelId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid hotel ID.",
      });
    }

    // ============================
    // CHECK DATES
    // ============================

    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking dates.",
      });
    }

    if (endDate <= startDate) {
      return res.status(400).json({
        success: false,
        message: "Check-out must be after check-in.",
      });
    }

    // ============================
    // CREATE BOOKING
    // ============================

    const booking = await Booking.create({
      hotelId,
      hotelName,
      hotelLocation,
      hotelImage,
      roomName,
      roomImage,
      roomPrice,
      checkIn: startDate,
      checkOut: endDate,
      guests,
      nights,
      guestName,
      phone,
      email,
      taxes,
      totalPrice,
      bookingStatus: "confirmed",
    });

    // ============================
    // SUCCESS
    // ============================

    res.status(201).json({
      success: true,
      message: "Booking created successfully.",
      booking,
    });

  } catch (error) {
    console.error("Create Booking Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while creating booking.",
    });
  }
};

module.exports = {
  createBooking,
};
