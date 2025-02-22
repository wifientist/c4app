"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "chart.js/auto";

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), { ssr: false });

export default function DashboardPage() {
  const [floatingElements, setFloatingElements] = useState([]);
  const fakeLeaderboard = [
    { name: "Alice", score: 1200, target: "🚀" },
    { name: "Bob", score: 1150, target: "🎯" },
    { name: "Charlie", score: 1100, target: "🔥" },
  ];
  const tradingLeaderboard = [
    { name: "David", profit: "$12,500" },
    { name: "Eve", profit: "$10,300" },
    { name: "Frank", profit: "$9,700" },
  ];

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    setChartData({
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
      datasets: [
        {
          label: "Your Crypto Learning Index",
          data: [40, 55, 65, 80, 95],
          borderColor: "#4CAF50",
          backgroundColor: "rgba(76, 175, 80, 0.1)",
          borderWidth: 2,
          pointRadius: 4,
          tension: 0.4,
        },
      ],
    });

    const elements = Array(5)
      .fill()
      .map(() => ({ x: Math.random() * 100 + "%" }));
    setFloatingElements(elements);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
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

      {/* Leaderboards */}
      <div className="text-center z-10 px-6 mb-4 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold">Top Learners</h2>
          <ul className="mt-4 text-gray-300">
            {fakeLeaderboard.map((user, index) => (
              <li key={index} className="text-lg">
                {user.name}: {user.score} {user.target}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold">Top Traders</h2>
          <ul className="mt-4 text-gray-300">
            {tradingLeaderboard.map((trader, index) => (
              <li key={index} className="text-lg">
                {trader.name}: {trader.profit}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Crypto Learning Index Chart */}
      <div className="w-full max-w-2xl mt-10 z-10 bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center">Your Crypto Learning Index</h2>
        {chartData && <Line data={chartData} options={{ responsive: true, maintainAspectRatio: true }} />}
      </div>
      
      {/* Header */}
      <motion.div
        className="text-center z-10 mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold">Explore Our Resources</h1>
        <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
          Learn through blogs, videos, and interactive dashboards.
        </p>
      </motion.div>

      {/* Resource Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 z-10">
        {[
          { title: "Blog", href: "/blog", description: "Deep dive into crypto topics." },
          { title: "Videos", href: "/videos", description: "Watch our expert guides." },
          { title: "Simulation", href: "/simulation", description: "Simulate and track markets." },
          { title: "Community", href: "/community", description: "Join our community!" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-md text-center hover:bg-gray-700 transition"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-gray-400">{item.description}</p>
            <Link href={item.href}>
              <span className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-400 transition cursor-pointer">
                Explore {item.title}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
