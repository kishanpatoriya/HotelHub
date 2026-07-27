const express = require("express");
const router = express.Router();

const {
  loginUser,
  registerUser
} = require("../controllers/authController");


// Login API
router.post("/login", loginUser);


// Register API
router.post("/register", registerUser);


module.exports = router;