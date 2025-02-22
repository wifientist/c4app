"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogPage() {
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    const elements = Array(5)
      .fill()
      .map(() => ({ x: Math.random() * 100 + "%" }));
    setFloatingElements(elements);
  }, []);

  const posts = [
    {
      id: 1,
      title: "Mastering Crypto 101",
      excerpt: "Kickstart your journey into cryptocurrency with the basics.",
      date: "2025-02-20",
      slug: "mastering-crypto-101",
    },
    {
      id: 2,
      title: "How Blockchain Works",
      excerpt: "Understand the fundamentals behind blockchain technology.",
      date: "2025-02-19",
      slug: "how-blockchain-works",
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
        <h1 className="text-4xl font-bold">Crypto Insights & Articles</h1>
        <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
          Stay updated with the latest trends and knowledge in cryptocurrency.
        </p>
      </motion.div>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 z-10 max-w-4xl">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <small className="text-gray-400">{post.date}</small>
            <p className="mt-2 text-gray-300">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>
              <p className="mt-4 inline-block text-blue-400 hover:underline">Read more →</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
