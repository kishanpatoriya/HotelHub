const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  // OTP for password reset
  resetOtp: {
    type: String,
    default: null,
  },

  // OTP expiry time
  resetOtpExpiry: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model("User", userSchema);