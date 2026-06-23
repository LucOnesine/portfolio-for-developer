'use client';

import { BookOpen, Target, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function Approach() {
  const pillars = [
    {
      title: 'Apprentissage',
      description: 'Chaque ligne de code est une opportunité d\'apprendre et d\'améliorer mes compétences.',
      icon: <BookOpen size={40} className="text-accent" />,
    },
    {
      title: 'Persévérance',
      description:
        'Une approche déterminée pour surmonter les défis et atteindre mes objectifs techniques.',
      icon: <Target size={40} className="text-accent" />,
    },
    {
      title: 'Passion',
      description:
        'Une motivation constante pour explorer de nouvelles technologies et créer des solutions innovantes.',
      icon: <Zap size={40} className="text-accent" />,
    },
  ];
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 200; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 100,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00d4ff';

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section
      id="approach"
      className="relative min-h-screen py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        {/* Section Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className=" text-foreground mb-2">Mon approche de </span>
            <span className="gradient-text">développement</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-4 sm:mt-6 max-w-2xl mx-auto px-2">
            Mes principes fondamentaux qui guident chaque projet et chaque décision technique.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="p-6 sm:p-8 rounded-xl border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-all group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 w-fit rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-all">
                {pillar.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">{pillar.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
