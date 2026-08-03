'use client';

import { useState, useRef, MouseEvent } from 'react';
import Image from 'next/image';
import { Code2, Smartphone, Zap } from 'lucide-react';

export function Photo3D() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -18; // Max 18 deg tilt
    const rotateY = ((x - centerX) / centerX) * 18;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.05, 1.05, 1.05)`
    );
    setGlarePosition({ x: glareX, y: glareY, opacity: 0.35 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div className="relative flex justify-center items-center py-4">
      {/* Outer 3D Perspective Card Wrapper */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-xs sm:max-w-sm aspect-square cursor-pointer transition-transform duration-200 ease-out preserve-3d"
        style={{ transform, transformStyle: 'preserve-3d' }}
      >
        {/* Layer 1: Ambient 3D Glowing Backdrop */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-accent via-cyan-400 to-blue-600 rounded-3xl opacity-80 blur-xl transition-opacity duration-300 group-hover:opacity-100"
          style={{ transform: 'translateZ(-40px)' }}
        />

        {/* Layer 2: Animated Gradient Frame */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-accent via-cyan-400 to-blue-600 rounded-3xl shadow-2xl transition-transform duration-300"
          style={{ transform: 'translateZ(0px)' }}
        />

        {/* Layer 3: Main Image Card Container */}
        <div
          className="absolute inset-2 bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/60"
          style={{ transform: 'translateZ(20px)' }}
        >
          <Image
            src="/fts.jpg"
            alt="FITAHIANTSOA Luc Onesine"
            fill
            className="object-cover transition-transform duration-500 scale-105"
            priority
          />

          {/* Interactive Light Glare Overlay */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)`,
              opacity: glarePosition.opacity,
            }}
          />
        </div>

        {/* Layer 4: Floating 3D Badge 1 (Top Right - Web Dev) */}
        <div
          className="absolute -top-4 -right-4 px-3.5 py-2 rounded-2xl bg-card/90 backdrop-blur-md border border-accent/40 shadow-xl flex items-center gap-2 text-xs font-bold text-accent animate-bounce"
          style={{
            transform: 'translateZ(60px)',
            animationDuration: '3s',
          }}
        >
          <Code2 size={16} />
          <span>Full Stack</span>
        </div>

        {/* Layer 5: Floating 3D Badge 2 (Bottom Left - Mobile Dev) */}
        <div
          className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-2xl bg-card/90 backdrop-blur-md border border-cyan-400/40 shadow-xl flex items-center gap-2 text-xs font-bold text-foreground animate-pulse"
          style={{
            transform: 'translateZ(60px)',
            animationDuration: '2.5s',
          }}
        >
          <Smartphone size={16} className="text-cyan-400" />
          <span>Mobile Dev</span>
        </div>

        {/* Layer 6: Floating 3D Badge 3 (Bottom Right - React/Next) */}
        <div
          className="absolute bottom-6 -right-6 px-3 py-1.5 rounded-xl bg-accent text-accent-foreground shadow-lg flex items-center gap-1.5 text-xs font-bold"
          style={{
            transform: 'translateZ(50px)',
          }}
        >
          <Zap size={14} />
          <span>Next.js & React</span>
        </div>
      </div>
    </div>
  );
}
