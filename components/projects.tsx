'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

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
    title: 'Iz\'aho : Application mobile de numérologie',
    description:
      'Application mobile de numérologie moderne permettant d\'analyser un profil à partir du nom et de la date de naissance.',
    image: '/project-1.png',
    tags: ['React Native', 'SQLite'],
    link: '#',
    category: 'Mobile',
    demoLink: '#',
  },
  {
    id: 2,
    title: 'E-laytsena : Application mobile de gestion commerciale',
    description:
      'Le projet e-laytsena est une application mobile développée avec React Native et Expo Router, visant à simplifier la gestion...',
    image: '/project-2.png',
    tags: ['React Native', 'Expo Router', 'Nativewind'],
    link: '#',
    category: 'Mobile',
    demoLink: '#',
  },
  {
    id: 3,
    title: 'Kiambale : Site web professionnel d\'un restaurant',
    description:
      'Site web élégant et moderne pour le restaurant Kiambale, conçu pour offrir une expérience utilisateur exceptionnelle et...',
    image: '/project-3.png',
    tags: ['WordPress', 'PHP', 'MySQL'],
    link: '#',
    category: 'WordPress',
    demoLink: '#',
  },
  {
    id: 4,
    title: 'Plateforme SaaS Analytics',
    description:
      'Dashboard analytics en temps réel avec visualisation de données avancée, authentification OAuth et intégrations API.',
    image: '/project-1.png',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    link: '#',
    category: 'Web',
    demoLink: '#',
  },
  {
    id: 5,
    title: 'Application Fitness & Wellness',
    description:
      'App mobile avec tracking d\'entraînements, coaching IA, social features et intégration wearables.',
    image: '/project-4.png',
    tags: ['Flutter', 'Dart', 'Cloud Functions'],
    link: '#',
    category: 'Mobile',
    demoLink: '#',
  },
  {
    id: 6,
    title: 'Portfolio Personnel',
    description:
      'Site portfolio personnel showcasing mes projets et compétences en développement web et mobile.',
    image: '/project-1.png',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    link: '#',
    category: 'Web',
    demoLink: '#',
  },
];

const categories = ['Tous', 'Web', 'Mobile', 'WordPress'];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('Tous');

  const filteredProjects =
    activeFilter === 'Tous'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="relative min-h-screen lg:ml-64 py-20 px-6 md:px-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <div className="relative z-10 max-w-6xl">
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
        <div className="mb-12 text-center" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="block text-foreground mb-2">Mes</span>
            <span className="gradient-text">Projets</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations récentes, alliant innovation technique et
            design moderne
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-16"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.demoLink}
              className="group cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="relative h-64 rounded-xl overflow-hidden mb-6 bg-secondary/40 border border-border/50 card-hover">
                {/* Image Placeholder with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent/30 mb-2">
                      {project.category}
                    </div>
                    <p className="text-muted-foreground text-xs">{project.title}</p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Link Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                  <div className="p-3 rounded-lg bg-accent/90 text-accent-foreground">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold text-white bg-accent/80 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30 group-hover:border-accent/60 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Demo Button */}
                <a
                  href={project.demoLink}
                  className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-cyan-500 transition-all text-sm"
                >
                  Démo
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </a>
          ))}
        </div>


      </div>
    </section>
  );
}
