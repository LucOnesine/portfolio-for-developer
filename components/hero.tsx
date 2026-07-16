'use client';

import { ChevronDown, Download, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { ArrowRight, Code2, Smartphone } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

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
    <section id="home" className="relative min-h-screen pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-0">
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
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-12px);
            }
          }
        `}</style>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            <p className="text-accent text-sm font-semibold mb-4">Bienvenue, Je suis</p>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight min-h-[180px]">
              <TypeAnimation
                sequence={[
                  'FITAHIANTSOA',
                  1000,
                  `FITAHIANTSOA Luc Onesine`,
                  5000,
                ]}
                speed={20}
                repeat={Infinity}
                cursor={true}
              />
            </h1>

           <div className="text-2xl md:text-3xl font-semibold text-accent mb-6">
            <TypeAnimation
              sequence={[
                'Développeur Web',
                1500,
                'Développeur Mobile',
                1500,
                'Développeur Full Stack',
                1500,
                'Développeur Web & Mobile',
                2000,
              ]}
              speed={60}
              repeat={Infinity}
              cursor={true}
            />
          </div>

            <div className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              <TypeAnimation
                sequence={[
                  `Je conçois et développe des expériences numériques exceptionnelles.
                  Avec expertise en développement web moderne, applications mobiles
                  et solutions backend, je transforme vos idées en produits
                  performants et évolutifs.`,
                ]}
                speed={90}
                cursor={false}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-cyan-500 transition-all"
              >
                <MessageCircle size={20} />
                Me contacter
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative flex justify-center"
            style={{ animation: 'slideInRight 0.8s ease-out' }}
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Green Border Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-cyan-600 rounded-3xl transform -skew-y-2" />

              {/* White Background with Image */}
              <div className="absolute inset-2 bg-white rounded-3xl overflow-hidden">
                <Image
                  src="/fts.jpg"
                  alt="Luc Onesine FITAHIANTSOA"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        {/* Scroll Down Arrow */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="text-sm text-muted-foreground">Scroller pour découvrir</p>
          <a
            href="#about"
            className="text-accent hover:text-cyan-400 transition-colors"
            style={{ animation: 'bounce 2s infinite' }}
          >
            <ChevronDown size={32} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
