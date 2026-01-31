'use client';

import { motion } from 'framer-motion';

export default function Logo({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <motion.div whileHover={{ scale: 1.06, rotate: -6 }} className={`inline-flex items-center ${className}`}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="2" y="2" width="44" height="44" rx="10" stroke="currentColor" strokeWidth="1.2" opacity="0.08" />

        <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
          <path d="M12 30v-8a6 6 0 016-6h8" />
          <circle cx="20" cy="18" r="2" fill="currentColor" />
          <circle cx="30" cy="30" r="2" fill="currentColor" />
          <path d="M16 30h16" />
          <path d="M24 12v4" />
        </g>
      </svg>
    </motion.div>
  );
}
