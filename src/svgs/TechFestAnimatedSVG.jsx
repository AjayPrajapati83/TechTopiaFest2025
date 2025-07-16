import React from "react";
import { motion } from "framer-motion";

// Tech Fest SVG: technology, education, and network theme
const TechFestAnimatedSVG = () => (
  <motion.svg
    width="100%"
    height="auto"
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="techFestTitle"
    style={{ maxWidth: "480px", display: "block", margin: "0 auto" }}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
  >
    <title id="techFestTitle">Tech Fest Animated Illustration</title>
    {/* Background */}
    <rect width="400" height="300" fill="#000" />
    {/* Animated background particles */}
    <motion.circle cx="50" cy="50" r="2" fill="#43fcff" opacity={0.6}
      animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity }} />
    <motion.circle cx="350" cy="80" r="1.5" fill="#43fcff" opacity={0.4}
      animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 2.5, repeat: Infinity }} />
    <motion.circle cx="300" cy="220" r="1" fill="#43fcff" opacity={0.7}
      animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 4, repeat: Infinity }} />
    <motion.circle cx="80" cy="250" r="1.5" fill="#43fcff" opacity={0.5}
      animate={{ opacity: [0.5, 0.9, 0.5] }} transition={{ duration: 3.5, repeat: Infinity }} />


    {/* Central brain/circuit fusion */}
    <g transform="translate(200, 150)">
      {/* Brain outline */}
      <path d="M-40,-30 Q-50,-40 -35,-50 Q-20,-55 -10,-50 Q10,-55 25,-50 Q40,-45 45,-30 Q50,-15 45,0 Q40,15 25,25 Q10,30 -10,25 Q-25,30 -40,15 Q-50,0 -45,-15 Q-50,-25 -40,-30" fill="none" stroke="#43fcff" strokeWidth="2" opacity="0.8" />
      {/* Circuit paths inside brain */}
      <motion.path d="M-30,-20 L-15,-20 L-15,-10 L0,-10 L0,0 L15,0 L15,10 L30,10" fill="none" stroke="#43fcff" strokeWidth="1.5" opacity={0.9}
        strokeDasharray="100 0"
        animate={{ strokeDasharray: ["0 100", "100 0", "0 100"] }}
        transition={{ duration: 4, repeat: Infinity }} />
      <motion.path d="M-25,5 L-10,5 L-10,15 L10,15 L10,5 L25,5" fill="none" stroke="#43fcff" strokeWidth="1.5" opacity={0.7}
        strokeDasharray="80 0"
        animate={{ strokeDasharray: ["0 80", "80 0", "0 80"] }}
        transition={{ duration: 3.5, repeat: Infinity }} />
      {/* Circuit nodes */}
      <motion.circle cx="-15" cy="-20" r={3} fill="#43fcff" opacity={0.9}
        animate={{ r: [3, 5, 3] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.circle cx="0" cy="-10" r={3} fill="#43fcff" opacity={0.8}
        animate={{ r: [3, 5, 3] }} transition={{ duration: 2.5, repeat: Infinity }} />
      <motion.circle cx="15" cy="0" r={3} fill="#43fcff" opacity={0.9}
        animate={{ r: [3, 5, 3] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.circle cx="-10" cy="15" r={3} fill="#43fcff" opacity={0.7}
        animate={{ r: [3, 5, 3] }} transition={{ duration: 2.8, repeat: Infinity }} />
    </g>

    {/* Left side - Technology icons */}
    <g transform="translate(80, 100)">
      {/* Laptop */}
      <rect x="-20" y="-8" width="40" height="25" rx="2" fill="none" stroke="#43fcff" strokeWidth="2" opacity="0.8" />
      <rect x="-18" y="-6" width="36" height="18" fill="#43fcff" opacity="0.2" />
      <rect x="-22" y="17" width="44" height="3" rx="1.5" fill="#43fcff" opacity="0.6" />
      {/* Code symbols */}
      <text x="-10" y="2" fontFamily="monospace" fontSize="8" fill="#43fcff" opacity="0.7">{'</>'}</text>
      {/* Connecting line to center */}
      <motion.path d="M20,5 Q60,10 100,40" fill="none" stroke="#43fcff" strokeWidth="2" opacity={0.5}
        strokeDasharray="100 0"
        animate={{ strokeDasharray: ["0 100", "100 0", "0 100"] }}
        transition={{ duration: 5, repeat: Infinity }} />
    </g>

    {/* Right side - Education icons */}
    <g transform="translate(320, 200)">
      {/* Book */}
      <rect x="-15" y="-8" width="30" height="20" rx="1" fill="none" stroke="#43fcff" strokeWidth="2" opacity="0.8" />
      <line x1="-15" y1="-8" x2="-15" y2="12" stroke="#43fcff" strokeWidth="2" opacity="0.6" />
      <line x1="-10" y1="-6" x2="10" y2="-6" stroke="#43fcff" strokeWidth="1" opacity="0.5" />
      <line x1="-10" y1="-2" x2="10" y2="-2" stroke="#43fcff" strokeWidth="1" opacity="0.5" />
      <line x1="-10" y1="2" x2="5" y2="2" stroke="#43fcff" strokeWidth="1" opacity="0.5" />
      {/* Graduation cap */}
      <path d="M-8,-25 L8,-25 L12,-30 L-12,-30 Z" fill="#43fcff" opacity="0.7" />
      <rect x="-1" y="-25" width="2" height="8" fill="#43fcff" opacity="0.6" />
      <circle cx="1" cy="-17" r="2" fill="#43fcff" opacity="0.8" />
      {/* Connecting line to center */}
      <motion.path d="M-20,0 Q-60,-10 -100,-40" fill="none" stroke="#43fcff" strokeWidth="2" opacity={0.5}
        strokeDasharray="100 0"
        animate={{ strokeDasharray: ["0 100", "100 0", "0 100"] }}
        transition={{ duration: 5, repeat: Infinity }} />
    </g>

    {/* Bottom - Network connections */}
    <g transform="translate(200, 250)">
      {/* Network nodes */}
      <motion.circle cx="-60" cy="0" r={4} fill="#43fcff" opacity={0.8}
        animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 2, repeat: Infinity }} />
      <motion.circle cx="-20" cy="10" r={3} fill="#43fcff" opacity={0.7}
        animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2.5, repeat: Infinity }} />
      <motion.circle cx="20" cy="10" r={3} fill="#43fcff" opacity={0.7}
        animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.circle cx="60" cy="0" r={4} fill="#43fcff" opacity={0.8}
        animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 2.2, repeat: Infinity }} />
      {/* Network connections */}
      <motion.path d="M-60,0 L-20,10 L20,10 L60,0" fill="none" stroke="#43fcff" strokeWidth="1.5" opacity={0.6}
        strokeDasharray="200 0"
        animate={{ strokeDasharray: ["0 200", "200 0", "0 200"] }}
        transition={{ duration: 6, repeat: Infinity }} />
      <motion.path d="M-20,10 L0,-80 L20,10" fill="none" stroke="#43fcff" strokeWidth="1.5" opacity={0.4}
        strokeDasharray="150 0"
        animate={{ strokeDasharray: ["0 150", "150 0", "0 150"] }}
        transition={{ duration: 5.5, repeat: Infinity }} />
    </g>

    {/* Top decorative elements */}
    <g transform="translate(200, 50)">
      {/* Data flow visualization */}
      <motion.path d="M-80,0 Q-40,-20 0,0 Q40,20 80,0" fill="none" stroke="#43fcff" strokeWidth="2" opacity={0.6}
        strokeDasharray="240 0"
        animate={{ strokeDasharray: ["0 240", "240 0", "0 240"] }}
        transition={{ duration: 4, repeat: Infinity }} />
      {/* Floating data points */}
      <motion.circle cx="-60" cy="-10" r={2} fill="#43fcff" opacity={0.8}
        animate={{ cy: [-10, -20, -10] }} transition={{ duration: 3, repeat: Infinity }} />
      <motion.circle cx="0" cy="-15" r={2} fill="#43fcff" opacity={0.9}
        animate={{ cy: [-15, -30, -15] }} transition={{ duration: 2.5, repeat: Infinity }} />
      <motion.circle cx="60" cy="-10" r={2} fill="#43fcff" opacity={0.8}
        animate={{ cy: [-10, -20, -10] }} transition={{ duration: 3.5, repeat: Infinity }} />
    </g>

    {/* Subtle glow effect (static, as SVG filters are not animatable in React/Framer) */}
    <g transform="translate(200, 150)">
      <motion.circle cx="0" cy="0" r={8} fill="#43fcff" opacity={0.3}
        animate={{ r: [8, 12, 8] }} transition={{ duration: 3, repeat: Infinity }} />
    </g>
  </motion.svg>
);

export default TechFestAnimatedSVG;
