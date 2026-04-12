'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/articles', label: 'Articles' },
  { href: '/system-audit', label: 'Systems Audit' },
  { href: '/contact', label: 'Contact', isCTA: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-[1000] backdrop-blur-xl border-b border-white/5"
      style={{
        background: scrolled ? 'rgba(5, 5, 8, 0.95)' : 'rgba(5, 5, 8, 0.8)',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1200px] mx-auto px-8 h-[70px] flex items-center justify-between">
        <Link href="/" className="font-mono text-lg font-medium tracking-wide no-underline">
          <span className="text-[var(--accent)]">[</span>
          <span className="text-[var(--text-primary)]">THOM ASTER</span>
          <span className="text-[var(--accent)]">]</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-normal no-underline relative transition-colors duration-300
                ${link.isCTA 
                  ? 'bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dim)] text-[var(--bg-primary)] px-4 py-2 rounded font-medium text-center'
                  : `text-[var(--text-secondary)] hover:text-[var(--text-primary)] ${pathname === link.href ? 'text-[var(--text-primary)]' : ''}`
                }`}
            >
              {link.isCTA ? (
                <span className="flex flex-col items-center">
                  <span>Contact</span>
                  <span className="text-[0.65rem] opacity-80">(Anonymously)</span>
                </span>
              ) : (
                link.label
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1 bg-transparent border-none cursor-pointer p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <motion.span
            className="w-6 h-0.5 bg-[var(--text-primary)]"
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4 : 0 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-[var(--text-primary)]"
            animate={{ opacity: isOpen ? 0 : 1 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-[var(--text-primary)]"
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-[70px] left-0 w-full bg-[rgba(5,5,8,0.95)] backdrop-blur-xl flex flex-col px-8 py-6 gap-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`text-sm font-normal no-underline block py-2
                    ${link.isCTA 
                      ? 'bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dim)] text-[var(--bg-primary)] px-4 py-2 rounded font-medium text-center'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                >
                  {link.isCTA ? (
                    <span className="flex flex-col items-center">
                      <span>Contact</span>
                      <span className="text-[0.65rem] opacity-80">(Anonymously)</span>
                    </span>
                  ) : (
                    link.label
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}