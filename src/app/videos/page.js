"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SignupForm from "@/components/SignupForm";

export default function VideosPage() {
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    const elements = Array(5)
      .fill()
      .map(() => ({ x: Math.random() * 100 + "%" }));
    setFloatingElements(elements);
  }, []);

  const videos = [
    {
      id: 1,
      title: "Introduction to Crypto Trading",
      description: "Learn the fundamentals of cryptocurrency trading and how to get started.",
      thumbnail: "/thumbnails/crypto-trading.jpg",
      link: "https://www.youtube.com/watch?v=xyz123",
    },
    {
      id: 2,
      title: "Understanding Blockchain Technology",
      description: "Explore how blockchain works and its impact on the financial world.",
      thumbnail: "/thumbnails/blockchain-tech.jpg",
      link: "https://www.youtube.com/watch?v=abc456",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center p-10 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((item, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 bg-gray-600 rounded-full opacity-30"
            initial={{ y: "100vh", x: item.x }}
            animate={{ y: "-10vh" }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold">Crypto Video Library</h1>
        <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
          Watch expert videos to expand your knowledge in crypto trading and blockchain technology.
        </p>
      </motion.div>

      {/* Video List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 z-10 max-w-4xl">
        {videos.map((video) => (
          <motion.div
            key={video.id}
            className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <Link href={video.link} target="_blank" rel="noopener noreferrer">
              <img src={video.thumbnail} alt={video.title} className="rounded-lg mb-4" />
              <h2 className="text-2xl font-semibold">{video.title}</h2>
              <p className="mt-2 text-gray-300">{video.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
      <SignupForm />
    </div>
  );
}
