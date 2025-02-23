"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import "chart.js/auto";
import SignupForm from "@/components/SignupForm";

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), { ssr: false });

export default function SimulationPage() {
  const [chartData, setChartData] = useState(null);
  const [balance, setBalance] = useState(10000);
  const [btcPrice, setBtcPrice] = useState(97000);
  const [btcHoldings, setBtcHoldings] = useState(0);
  const [ethPrice, setEthPrice] = useState(2700);
  const [ethHoldings, setEthHoldings] = useState(0);
  const [floatingElements, setFloatingElements] = useState([]);

  const mockLeaderboard = [
    { rank: 1, name: "Alice", profit: "$12,500", trades: 45, coinsHeld: 2.5, winRate: "78%" },
    { rank: 2, name: "Bob", profit: "$11,300", trades: 38, coinsHeld: 1.8, winRate: "74%" },
    { rank: 3, name: "Charlie", profit: "$10,700", trades: 32, coinsHeld: 2.1, winRate: "69%" },
    { rank: 4, name: "David", profit: "$10,350", trades: 27, coinsHeld: 1.5, winRate: "65%" },
    { rank: 5, name: "Eve", profit: "$9,600", trades: 24, coinsHeld: 1.2, winRate: "60%" },
  ];

  useEffect(() => {
    setChartData({
      labels: ["1D", "1W", "1M", "3M", "1Y"],
      datasets: [
        {
          label: "Bitcoin Price",
          data: [87000, 99000, 94000, 91000, 97000],
          borderColor: "#ffcc00",
          backgroundColor: "rgba(255, 204, 0, 0.2)",
          borderWidth: 2,
          pointRadius: 4,
          tension: 0.4,
        },
      ],
    });

    const elements = Array(7)
      .fill()
      .map(() => ({ x: Math.random() * 100 + "%" }));
    setFloatingElements(elements);
  }, []);

  const buyCrypto = () => {
    if (balance >= btcPrice) {
      setBalance(balance - btcPrice);
      setHoldings(holdings + 1);
    }
  };

  const sellCrypto = () => {
    if (holdings > 0) {
      setBalance(balance + btcPrice);
      setHoldings(holdings - 1);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center p-10 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((item, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 bg-blue-500 rounded-full opacity-30"
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
        <h1 className="text-4xl font-bold text-yellow-400">Crypto Trading Simulation</h1>
        <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
          Trade fake crypto and track your performance against the market!
        </p>
      </motion.div>

      {/* Chart Section */}
      <div className="w-full max-w-3xl mt-10 z-10">
        {chartData && <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />}
      </div>

            {/* Trading Panel */}
            <div className="mt-10 p-6 bg-gray-800 rounded-lg shadow-md z-10 text-center">
        <h2 className="text-2xl font-semibold">Your Portfolio</h2>
        <p className="text-lg text-gray-300 mb-4">Balance: ${balance.toFixed(2)}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bitcoin Trading Box */}
          <div className="p-4 bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-yellow-400">Bitcoin (BTC)</h3>
            <p className="text-lg text-gray-300">Holdings: {btcHoldings} BTC</p>
            <p className="text-lg text-yellow-400">Price: ${btcPrice.toLocaleString()}</p>
            <div className="mt-4 flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-400 transition"
                onClick={() => buyCrypto("BTC")}
              >
                Buy BTC
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-400 transition"
                onClick={() => sellCrypto("BTC")}
              >
                Sell BTC
              </button>
            </div>
          </div>
          
          {/* Ethereum Trading Box */}
          <div className="p-4 bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-400">Ethereum (ETH)</h3>
            <p className="text-lg text-gray-300">Holdings: {ethHoldings} ETH</p>
            <p className="text-lg text-blue-400">Price: ${ethPrice.toLocaleString()}</p>
            <div className="mt-4 flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-400 transition"
                onClick={() => buyCrypto("ETH")}
              >
                Buy ETH
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-400 transition"
                onClick={() => sellCrypto("ETH")}
              >
                Sell ETH
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Leaderboard Section */}
      <div className="mt-10 p-6 bg-gray-800 rounded-lg shadow-md z-10 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center">Top Traders</h2>
        <ul className="mt-4 text-gray-300 text-lg">
          {mockLeaderboard.map((trader) => (
            <li key={trader.rank} className="flex justify-between border-b border-gray-700 py-2">
              <span className="font-semibold">#{trader.rank} {trader.name}</span>
              <span>{trader.profit}</span>
            </li>
          ))}
        </ul>
      </div>
      <SignupForm />
    </div>
  );
}
