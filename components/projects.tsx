'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Plateforme SaaS Analytics',
    description:
      'Dashboard analytics en temps réel avec visualisation de données avancée, authentification OAuth et intégrations API multiples.',
    image: '/project-1.jpg',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    link: '#',
    category: 'Web',
  },
  {
    id: 2,
    title: 'Application Mobile E-Commerce',
    description:
      'Application iOS/Android complète avec panier, paiements, notifications push et système de recommandation IA.',
    image: '/project-2.jpg',
    tags: ['React Native', 'Firebase', 'Stripe', 'TensorFlow Lite'],
    link: '#',
    category: 'Mobile',
  },
  {
    id: 3,
    title: 'Système de Gestion Projet',
    description:
      'Plateforme collaborative avec kanban boards, timeline, notifications en temps réel et gestion d&apos;équipe.',
    image: '/project-3.jpg',
    tags: ['Next.js', 'WebSockets', 'MongoDB', 'Tailwind CSS'],
    link: '#',
    category: 'Web',
  },
  {
    id: 4,
    title: 'Application Fitness & Wellness',
    description:
      'App mobile avec tracking d&apos;entraînements, coaching IA, social features et intégration wearables.',
    image: '/project-4.jpg',
    tags: ['Flutter', 'Dart', 'Cloud Functions', 'ML Kit'],
    link: '#',
    category: 'Mobile',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative min-h-screen lg:ml-64 py-20 px-6 md:px-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <div className="relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-accent text-sm font-semibold tracking-widest">
              PORTFOLIO
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="block text-foreground mb-2">Projets</span>
            <span className="gradient-text">qui font la différence</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
            Voici une sélection de mes projets les plus impactants, allant de startups SaaS à
            applications mobiles grand public.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              className="group cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
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
              <div className="relative h-96 rounded-xl overflow-hidden mb-6 bg-secondary/40 border border-border/50 card-hover">
                {/* Image Placeholder with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-accent/20 mb-2">
                      {String(project.id).padStart(2, '0')}
                    </div>
                    <p className="text-muted-foreground text-sm">{project.title}</p>
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
              </div>

              {/* Project Info */}
              <div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary/60 text-muted-foreground border border-border/50 group-hover:border-accent/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-accent/50 text-foreground font-semibold hover:bg-secondary/60 transition-all hover-lift"
          >
            Voir tous les projets
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
