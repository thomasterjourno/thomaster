'use client';

import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  once?: boolean;
}

/**
 * Simple wrapper that renders children immediately.
 * Previously used framer-motion for scroll animations, but caused
 * hydration issues where content appeared invisible.
 * 
 * Content now shows immediately. CSS transitions can be added via className.
 */
export default function FadeIn({ 
  children, 
  className = '', 
}: FadeInProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}