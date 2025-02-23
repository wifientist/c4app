"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add API integration to store emails
  };

  return (
    <div className="relative bg-gray-900 text-white flex flex-col items-center justify-center p-10">
      {/* Header */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold">Join Our Platform</h1>
        <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
          Sign up with your email to receive updates and be among the first to join our crypto education platform!
        </p>
      </motion.div>

      {/* Signup Form */}
      {!submitted ? (
        <motion.form
          className="mt-6 flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <input
            type="email"
            className="p-3 rounded-lg text-gray-900 w-full outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 transition"
          >
            Sign Up
          </button>
        </motion.form>
      ) : (
        <motion.div
          className="mt-6 text-lg bg-green-500 text-white p-4 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Thank you for signing up! Stay tuned for updates. 🚀
        </motion.div>
      )}
    </div>
  );
}
