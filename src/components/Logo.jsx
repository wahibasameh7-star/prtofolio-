import React from 'react';

export default function Logo({ className = "w-10 h-10" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transform transition-transform duration-300 hover:scale-105"
      >
        <defs>
          <linearGradient id="swMonogramGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>

          <linearGradient id="swAccentGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>

          <filter id="swGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Tech Squircle Frame */}
        <rect
          x="3"
          y="3"
          width="94"
          height="94"
          rx="24"
          fill="#0B111A"
          fillOpacity="0.9"
          stroke="url(#swMonogramGrad)"
          strokeWidth="1.8"
          strokeOpacity="0.4"
        />

        {/* Corner Circuit Pins */}
        <circle cx="14" cy="14" r="1.5" fill="#34D399" fillOpacity="0.7" />
        <circle cx="86" cy="14" r="1.5" fill="#10B981" fillOpacity="0.7" />
        <circle cx="14" cy="86" r="1.5" fill="#10B981" fillOpacity="0.7" />
        <circle cx="86" cy="86" r="1.5" fill="#F59E0B" fillOpacity="0.7" />

        {/* Letter 'S' Circuit Path */}
        <path
          d="M 45 30 L 26 30 L 26 48 L 45 52 L 45 70 L 24 70"
          stroke="url(#swMonogramGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#swGlow)"
        />

        {/* Letter 'W' Interlocking Path */}
        <path
          d="M 53 30 L 58 70 L 67 46 L 76 70 L 82 30"
          stroke="url(#swAccentGrad)"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#swGlow)"
        />

        {/* Neural IoT Nodes */}
        <circle cx="26" cy="30" r="3" fill="#34D399" />
        <circle cx="24" cy="70" r="3" fill="#10B981" />
        <circle cx="67" cy="46" r="3" fill="#F59E0B" />
        <circle cx="82" cy="30" r="3" fill="#34D399" />
      </svg>
    </div>
  );
}
