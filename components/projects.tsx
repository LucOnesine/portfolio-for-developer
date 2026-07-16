'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: 'Web' | 'Mobile' | 'WordPress' | 'Tous';
  demoLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'K2TH : Application mobile de Code, Technique, Histoir et chant pour les scout',
    description:
      'Application mobile avec kotlin et SQLite qui permet d\'apprendre desimuler les code technique et chant pour les scouts. ',
    image: '/K2TH.jpg',
    tags: [' kotlin ', 'SQLite'],
    link: 'http://localhost:5173/',
    category: 'Mobile',
    demoLink: 'http://localhost:5172/',
  },
  {
    id: 2,
    title: 'gestion de vol : Dashboard analytics en temps réel pour la gestion de vol',
    description:
      'site web pour faire une reservation de billet d\'avion pour le client. Une application pour gerer les vols valider le demande de billet pour une aeroport',
    image: '/vol.png',
    tags: ['C#', 'SQL Server', 'ASP.NET'],
    link: '#projects',
    category: 'Web',
    demoLink: '#projects',
  },
  {
    id: 3,
    title: 'gestion de parking : Site web pour gere un parking',
    description:
      'Site Web pour une reservation de parking et interface pour l\'administrateur pour suivre le demande valider ou rejeter la demande',
    image: '/parking1.jpeg',
    tags: ['AngularJS', 'Python', 'PostgresSQL'],
    link: '#projects',
    category: 'Web',
    demoLink: '#projects',
  },
  {
    id: 4,
    title: 'Gestion de conger : Application web pour la gestion des congés',
    description:
      'Une application web pour faire une demande de conger et pour l\'administrateur pour valider ou rejeter la demande de conger',
    image: '/GestionConge.png',
    tags: ['Next.js', 'TypeScript', 'Python', 'PostgreSQL'],
    link: '#projects',
    category: 'Web',
    demoLink: '#',
  },
  {
    id: 5,
    title: 'site vitrine du Cyndicat ',
    description:
      'SIte vitrine pour le syndicat des travailleurs mettant en avant les activités, les actualités et les informations importantes pour les membres et le public.',
    image: '/syndicat.jpeg',
    tags: ['React.js', 'Node.js', 'PostgreSQL'],
    link: '#projects',
    category: 'Web',
    demoLink: '#projects',
  },
  {
    id: 6,
    title: 'Portfolio Personnel',
    description:
      'Site portfolio personnel showcasing mes projets et compétences en développement web et mobile.',
    image: '/ftspic.png',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    link: 'https://portfolioluconesine.vercel.app/#projects',
    category: 'Web',
    demoLink: 'https://portfolioluconesine.vercel.app/#projects',
  },
];

const categories = ['Tous', 'Web', 'Mobile'];



export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('Tous');

  const filteredProjects =
    activeFilter === 'Tous'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  
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
    <section id="projects" className="relative min-h-screen py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8">
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
        <div className="mb-10 sm:mb-12 md:mb-16 text-center" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className=" text-foreground mb-2">Mes </span>
            <span className="gradient-text">Projets</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto px-2">
            Découvrez une sélection de mes réalisations récentes, alliant innovation technique et design moderne
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 md:mb-16"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold transition-all text-xs sm:text-sm ${
                activeFilter === category
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-secondary/40 text-foreground border border-border/50 hover:border-accent/50'
              }`}
            >
              ⚡ {category} ({projects.filter((p) => p.category === category || category === 'Tous').length})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <a
                href={project.demoLink}
                className="block"
              >
                <div className="relative h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden mb-4 sm:mb-6 bg-secondary/40 border border-border/50 card-hover">
                  {/* Image Placeholder with Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent flex items-center justify-center">
                    <div className="text-center px-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Link Icon */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                    <div className="p-2 sm:p-3 rounded-lg bg-accent/90 text-accent-foreground">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                    <span className="text-xs font-semibold text-white bg-accent/80 px-2 sm:px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              </a>

              {/* Project Info */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-1 sm:mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-accent/10 text-accent border border-accent/30 group-hover:border-accent/60 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Demo Button */}
                <a
                  href={project.demoLink}
                  className="inline-flex items-center justify-center w-full gap-2 px-3 sm:px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-cyan-500 transition-all text-xs sm:text-sm"
                >
                  Démo
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
