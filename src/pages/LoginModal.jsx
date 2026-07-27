import React, { useState } from "react";

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async () => {
    try {
      const url = isSignup
        ? "http://localhost:5000/api/auth/register"
        : "http://localhost:5000/api/auth/login";

      const body = isSignup
        ? {
            name,
            email,
            password,
          }
        : {
            email,
            password,
          };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (data.success) {
        // Save JWT Token
        localStorage.setItem("token", data.token);

        // Save User Data
        localStorage.setItem("user", JSON.stringify(data.user));

        alert(data.message);

        if (onLoginSuccess) {
          onLoginSuccess();
        }

        onClose();
        
        // Clear form
        setName("");
        setEmail("");
        setPassword("");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6 text-center">
          <h2 className="text-3xl font-bold">
            {isSignup ? "Create Account" : "Welcome Back"}
          </h2>

          <p className="text-sm mt-2 text-blue-100">
            {isSignup
              ? "Create your account to get started."
              : "Sign in to continue."}
          </p>
        </div>

        {/* Form */}
        <div className="p-6">
          {/* Name */}
          {isSignup && (
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 text-sm font-medium"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Forgot Password */}
          {!isSignup && (
            <div className="text-right mb-5">
              <button className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            {isSignup ? "Create Account" : "Sign In"}
          </button>

          {/* Switch Login Signup */}
          <p className="text-center text-gray-600 mt-6 text-sm">
            {isSignup ? "Already have an account?" : "Don't have an account?"}

            <button
              onClick={() => setIsSignup(!isSignup)}
              className="ml-2 text-blue-600 font-semibold hover:underline"
            >
              {isSignup ? "Sign In" : "Create Account"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
