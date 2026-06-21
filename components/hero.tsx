'use client';

import { ArrowRight, Code2, Smartphone } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function Hero() {
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

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
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
      id="home"
      className="relative min-h-screen flex items-center justify-center lg:ml-64 overflow-hidden"
    >
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-4xl">
        <div className="space-y-6">
          {/* Greeting */}
          <div className="inline-block">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/40 border border-accent/30">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-accent">Bienvenue sur mon portfolio</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block text-foreground">Développeur</span>
            <span className="block gradient-text">Full Stack Web & Mobile</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Je conçois et développe des expériences numériques exceptionnelles. Avec expertise en web
            moderne, applications mobiles et solutions backend, je transforme vos idées en produits
            scalables et performants.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-cyan-500 transition-all hover-lift"
            >
              Voir mes projets
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-accent/50 text-foreground font-semibold hover:bg-secondary/60 transition-all"
            >
              Me contacter
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-12 border-t border-border">
            <div>
              <p className="text-3xl font-bold gradient-text">50+</p>
              <p className="text-sm text-muted-foreground">Projets réalisés</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">8+</p>
              <p className="text-sm text-muted-foreground">Années d&apos;expérience</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">30+</p>
              <p className="text-sm text-muted-foreground">Clients satisfaits</p>
            </div>
          </div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute -right-20 -bottom-20 w-40 h-40 opacity-10">
          <Code2 size={200} className="text-accent" />
        </div>
        <div className="absolute -left-10 bottom-20 w-32 h-32 opacity-10">
          <Smartphone size={160} className="text-accent" />
        </div>
      </div>
    </section>
  );
}
