'use client';

import { ReactNode, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Scanlines from './Scanlines';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration.scope);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="noise" aria-hidden="true" />
      <div className="gradient-bg" aria-hidden="true" />
      <Scanlines />
      <Navbar />
      <main id="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
}