"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import "chart.js/auto";

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), { ssr: false });

export default function LandingPage() {
  const [chartData, setChartData] = useState(null);
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    setChartData({
      labels: ["1D", "1W", "1M", "3M", "1Y"],
      datasets: [
        {
          label: "Bitcoin Learning Index",
          data: [50, 65, 80, 75, 95],
          borderColor: "#ffffff",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderWidth: 2,
          pointRadius: 4,
          tension: 0.4,
        },
      ],
    });
    
    const elements = Array(10)
      .fill()
      .map(() => ({ x: Math.random() * 100 + "%" }));
    setFloatingElements(elements);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((item, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 bg-gray-600 rounded-full opacity-30"
            initial={{ y: "100vh", x: item.x }}
            animate={{ y: "-10vh" }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.div
        className="text-center z-10 px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold tracking-wide">Zero to Crypto</h1>
        <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
          Learn, simulate, and trade with confidence. Our interactive platform guides you from beginner to expert.
        </p>
        <Link href="/dashboard">
        <button className="mt-6 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition">
          Get Started
        </button>
        </Link>
      </motion.div>

      {/* Chart Section */}
      <div className="w-full max-w-2xl mt-10 z-10">
        {chartData && <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />}
      </div>
    </div>
  );
}
