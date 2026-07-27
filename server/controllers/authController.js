const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// =====================
// REGISTER USER
// =====================

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Create token
    const token = jwt.sign(
      { id: user._id },

      process.env.JWT_SECRET,

      { expiresIn: "7d" },
    );

    res.status(201).json({
      success: true,

      message: "Account created successfully",

      token,

      user: {
        id: user._id,

        name: user.name,

        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,

      message: "Server Error",
    });
  }
};

// =====================
// LOGIN USER
// =====================

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,

        message: "User not found",
      });
    }

    // Compare password

    const isMatch = await bcrypt.compare(
      password,

      user.password,
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,

        message: "Invalid password",
      });
    }

    // JWT token

    const token = jwt.sign(
      { id: user._id },

      process.env.JWT_SECRET,

      { expiresIn: "7d" },
    );

    res.json({
      success: true,

      message: "Login Successful",

      token,

      user: {
        id: user._id,

        name: user.name,

        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,

      message: "Server Error",
    });
  }
};

module.exports = {
  registerUser,

  loginUser,
};
