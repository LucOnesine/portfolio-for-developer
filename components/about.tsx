'use client';

import { Download, MessageCircle } from 'lucide-react';
import { ArrowRight, Code2, Smartphone } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function About() {
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
    <section id="about" className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

      <div className="relative z-10 max-w-7xl mx-auto">
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

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20" style={{ animation: 'fadeInUp 8s ease-out' }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className=" text-foreground mb-2">À propos de </span>
            <span className="gradient-text">moi</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Développeur passionné, je transforme vos idées en solutions digitales modernes et performantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
              Développeur Web & Mobile passionné, je conçois des applications modernes, performantes et intuitives. Curieux et en constante évolution, j'améliore continuellement mes compétences en React, Next.js, React Native et les technologies du développement afin de créer des solutions innovantes offrant une excellente expérience utilisateur.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              Mon approche se base sur l&apos;apprentissage continu et la pratique régulière. Chaque projet est une opportunité d&apos;apprendre quelque chose de nouveau et d&apos;améliorer mes compétences techniques et créatives.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground mb-8 leading-relaxed">
              Je suis ouvert aux opportunités de collaboration et aux projets qui me permettront de grandir en tant que développeur.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-cyan-500 transition-all text-sm sm:text-base"
              >
                <MessageCircle size={20} />
                Me contacter
              </a>
              <a
                href="/FITAHIANTSOALucOnesineCV.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-all"
              >
                <Download size={20} />
                Télécharger CV
              </a>
            </div>
          </div>

          {/* Right Stats */}
          <div
            className="grid grid-cols-2 gap-4 sm:gap-6"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
          >
            <div className="p-4 sm:p-6 rounded-lg border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">6+</div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Projets personnels</p>
            </div>

            <div className="p-4 sm:p-6 rounded-lg border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">3</div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Apps en développement</p>
            </div>

            <div className="p-4 sm:p-6 rounded-lg border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">4+</div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Langages maîtrisés</p>
            </div>

            <div className="p-4 sm:p-6 rounded-lg border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">100%</div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Motivation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
