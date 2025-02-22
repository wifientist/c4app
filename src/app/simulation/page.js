"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import "chart.js/auto";

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), { ssr: false });

export default function SimulationPage() {
  const [chartData, setChartData] = useState(null);
  const [balance, setBalance] = useState(10000);
  const [btcPrice, setBtcPrice] = useState(97000);
  const [holdings, setHoldings] = useState(0);
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    setChartData({
      labels: ["1D", "1W", "1M", "3M", "1Y"],
      datasets: [
        {
          label: "Bitcoin Price",
          data: [89000, 93000, 95000, 90000, 97000],
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
        <p className="text-lg text-gray-300">Balance: ${balance.toFixed(2)}</p>
        <p className="text-lg text-gray-300">Bitcoin Holdings: {holdings} BTC</p>
        <p className="text-lg text-yellow-400">Current BTC Price: ${btcPrice.toLocaleString()}</p>
        <div className="mt-4 flex justify-center gap-6">
          <button
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-400 transition"
            onClick={buyCrypto}
          >
            Buy BTC
          </button>
          <button
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-400 transition"
            onClick={sellCrypto}
          >
            Sell BTC
          </button>
        </div>
      </div>
    </div>
  );
}
