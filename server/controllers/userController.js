const User = require("../models/User");

// ============================
// Get Logged-in User Profile
// ============================
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ============================
// Update User Profile
// ============================
const updateProfile = async (req, res) => {
  try {
    const {
      name,
      username,
      phone,
      dob,
      gender,
      country,
      state,
      city,
      zipCode,
      address,
      website,
      facebook,
      instagram,
      about,
      profileImage,
    } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.name = name || user.name;
    user.username = username || user.username;
    user.phone = phone || user.phone;
    user.dob = dob || user.dob;
    user.gender = gender || user.gender;
    user.country = country || user.country;
    user.state = state || user.state;
    user.city = city || user.city;
    user.zipCode = zipCode || user.zipCode;
    user.address = address || user.address;
    user.website = website || user.website;
    user.facebook = facebook || user.facebook;
    user.instagram = instagram || user.instagram;
    user.about = about || user.about;
    user.profileImage = profileImage || user.profileImage;

    await user.save();

    user.password = undefined;

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user,
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
  getProfile,
  updateProfile,
};
