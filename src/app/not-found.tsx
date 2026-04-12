'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-8 relative z-[2]">
      <motion.div
        className="font-mono text-[6rem] md:text-[10rem] lg:text-[12rem] font-bold leading-none mb-4"
        style={{
          background: 'linear-gradient(135deg, #00d4ff 0%, #0088aa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.div>
      
      <motion.h1
        className="text-xl md:text-2xl mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Page Not Found
      </motion.h1>
      
      <motion.p
        className="text-[var(--text-secondary)] max-w-md mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        The page you&apos;re looking for has been moved, deleted, or never existed.
        Perhaps it was redacted. 🔍
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dim)] text-[var(--bg-primary)] rounded-md font-medium no-underline transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,212,255,0.3)]"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}