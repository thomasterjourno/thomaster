'use client';

import { useEffect, useRef } from 'react';

export default function Scanlines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let offset = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Subtle scanlines
      ctx.fillStyle = 'rgba(0, 212, 255, 0.015)';
      const lineHeight = 4;
      const gap = 6;
      
      for (let y = offset; y < canvas.height; y += lineHeight + gap) {
        ctx.fillRect(0, y, canvas.width, lineHeight);
      }
      
      // Occasional flicker line
      if (Math.random() > 0.98) {
        ctx.fillStyle = 'rgba(0, 212, 255, 0.08)';
        const flickerY = Math.random() * canvas.height;
        ctx.fillRect(0, flickerY, canvas.width, 2);
      }
      
      offset = (offset + 0.3) % (lineHeight + gap);
      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-60"
      aria-hidden="true"
    />
  );
}
