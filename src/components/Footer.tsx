'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="bg-[var(--bg-primary)] border-t border-white/5 py-8 px-8 relative z-[2]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-center gap-4">
        <div>
          <p className="font-mono font-medium tracking-wide">[THOM ASTER]</p>
          <p className="text-sm text-[var(--text-muted)]">
            Licensed? No. Filtered? No. Dictated to? No.
          </p>
        </div>
        <div>
          <p className="text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} Thom Aster. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}