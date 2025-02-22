"use client"; // Mark this file as a client component

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  if (pathname === "/") return null; // Hide navbar on landing page

  return (
    <nav className="bg-gray-900 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="flex space-x-8 text-lg font-semibold text-gray-300">
          <Link href="/dashboard" className="hover:text-white transition">Dashboard</Link>
          <Link href="/blog" className="hover:text-white transition">Blog</Link>
          <Link href="/videos" className="hover:text-white transition">Videos</Link>
          <Link href="/simulation" className="hover:text-white transition">Simulation</Link>
          <Link href="/community" className="hover:text-white transition">Community</Link>
        </div>
      </div>
    </nav>
  );
}
