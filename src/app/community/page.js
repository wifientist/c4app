"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SignupForm from "@/components/SignupForm";

export default function CommunityPage() {
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    const elements = Array(6)
      .fill()
      .map(() => ({ x: Math.random() * 100 + "%" }));
    setFloatingElements(elements);
  }, []);

  const communityLinks = [
    { title: "Forums", description: "Join discussions with other traders.", href: "/forums" },
    { title: "Discord", description: "Chat with our crypto community in real-time.", href: "https://discord.com/invite/crypto" },
    { title: "AI Chat App", description: "Ask our AI trading assistant anything.", href: "/ai-chat" },
    { title: "Feedback Form", description: "Help us improve by sharing your thoughts.", href: "/feedback" },
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col items-center p-10 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((item, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 bg-purple-500 rounded-full opacity-30"
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
        <h1 className="text-4xl font-bold text-purple-400">Join Our Crypto Community</h1>
        <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
          Connect, chat, and learn with other crypto enthusiasts.
        </p>
      </motion.div>

      {/* Community Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 z-10 max-w-4xl">
        {communityLinks.map((link, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <Link href={link.href} target={link.href.startsWith("http") ? "_blank" : "_self"}>
              <h2 className="text-2xl font-semibold">{link.title}</h2>
              <p className="mt-2 text-gray-300">{link.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
      <SignupForm />
    </div>
  );
}
