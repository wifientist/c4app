// components/CryptoBackground.js
import React from 'react';

export default function CryptoBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 800 600"
        >
          <defs>
            {/* Gradient for a futuristic feel */}
            <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#16213e" />
            </linearGradient>
            {/* A repeating pattern that suggests circuits and crypto icons */}
            <pattern
              id="circuit-pattern"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="80" height="80" fill="none" stroke="#0f3460" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="5" fill="#e94560" />
              <line x1="40" y1="45" x2="40" y2="70" stroke="#0f3460" strokeWidth="1" />
              <line x1="40" y1="45" x2="20" y2="60" stroke="#0f3460" strokeWidth="1" />
              <line x1="40" y1="45" x2="60" y2="60" stroke="#0f3460" strokeWidth="1" />
            </pattern>
          </defs>
          {/* Base gradient background */}
          <rect width="800" height="600" fill="url(#bg-gradient)" />
          {/* Overlay with pattern to add tech detail */}
          <rect width="800" height="600" fill="url(#circuit-pattern)" opacity="0.3" />
        </svg>
      </div>
      {/* Content goes here */}
      {children}
    </div>
  );
}
