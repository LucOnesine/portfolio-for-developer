'use client';

import { Layout, Server, Smartphone, Database, Zap, BookOpen } from 'lucide-react';
import { useEffect, useRef } from 'react';

const services = [
  {
    title: 'Développement Frontend',
    description:
      'Création d\'interfaces modernes, réactives et optimisées avec React JS, Tailwind CSS et HTML/CSS.',
    icon: <Layout size={32} />,
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Développement Backend',
    description:
      'Conception d\'API robustes et sécurisées avec Node JS, Express JS, Django ou Laravel.',
    icon: <Server size={32} />,
    gradient: 'from-purple-500 to-pink-400',
  },
  {
    title: 'Applications Mobile',
    description:
      'Développement d\'applications iOS et Android avec React Native et Expo Router.',
    icon: <Smartphone size={32} />,
    gradient: 'from-green-500 to-emerald-400',
  },
  {
    title: 'Gestion de Bases de Données',
    description:
      'Modélisation et gestion de données fiables avec MySQL et PostgreSQL.',
    icon: <Database size={32} />,
    gradient: 'from-orange-500 to-yellow-400',
  },
  {
    title: 'Intégration & DevOps',
    description:
      'Mise en place de conteneurs, CI/CD et déploiements automatisés avec Docker et GitHub Actions.',
    icon: <Zap size={32} />,
    gradient: 'from-indigo-500 to-purple-400',
  },
  {
    title: 'Formation & Support',
    description:
      'Accompagnement et formation pour la prise en main des solutions développées.',
    icon: <BookOpen size={32} />,
    gradient: 'from-red-500 to-pink-400',
  },
];

export function Services() {
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
      id="services"
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
          <span className="text-accent text-xs sm:text-sm font-semibold tracking-widest">MES SERVICES </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4">
            <span className=" text-foreground mb-2">Ce que je vous </span>
            <span className="gradient-text">propose</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-4 sm:mt-6 max-w-2xl mx-auto px-2">
            Une gamme complète de services pour concrétiser vos projets digitaux.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-secondary/20 p-6 sm:p-8 hover:bg-secondary/40 transition-all"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}
              />

              {/* Icon */}
              <div
                className={`mb-4 sm:mb-6 p-3 sm:p-4 w-fit rounded-lg bg-gradient-to-br ${service.gradient} text-white`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{service.description}</p>

              {/* Hover Effect */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/10 to-transparent rounded-full -mr-10 -mb-10 group-hover:scale-150 transition-transform duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
