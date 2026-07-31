const express = require("express");

const router = express.Router();

const {
  createBooking,
  getMyBookings,
  cancelBooking,
} = require("../controllers/bookingController");

const protect = require("../middleware/authMiddleware");

// Create booking - login required
router.post("/", protect, createBooking);

// Get logged-in user's bookings
router.get("/my-bookings", protect, getMyBookings);

// Cancel booking - login required
router.patch("/:id/cancel", protect, cancelBooking);

module.exports = router;

