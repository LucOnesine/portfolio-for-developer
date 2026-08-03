'use client';

import { useState } from 'react';
import { ArrowUpRight, Info } from 'lucide-react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { translations } from '@/lib/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { BackgroundCanvas } from './background-canvas';
import { ProjectModal, ProjectModalData } from './project-modal';

interface StaticProjectInfo {
  id: number;
  image: string;
  tags: string[];
  link: string;
  category: 'Web' | 'Mobile';
  demoLink: string;
}

const staticProjects: StaticProjectInfo[] = [
  {
    id: 1,
    image: '/K2TH.jpg',
    tags: ['Kotlin', 'SQLite'],
    link: '#projects',
    category: 'Mobile',
    demoLink: 'http://localhost:5172/',
  },
  {
    id: 2,
    image: '/vol.png',
    tags: ['C#', 'SQL Server', 'ASP.NET'],
    link: '#projects',
    category: 'Web',
    demoLink: '#projects',
  },
  {
    id: 3,
    image: '/parking1.jpeg',
    tags: ['AngularJS', 'Python', 'PostgreSQL'],
    link: '#projects',
    category: 'Web',
    demoLink: '#projects',
  },
  {
    id: 4,
    image: '/GestionConge.png',
    tags: ['Next.js', 'TypeScript', 'Python', 'PostgreSQL'],
    link: '#projects',
    category: 'Web',
    demoLink: '#projects',
  },
  {
    id: 5,
    image: '/syndicat.jpeg',
    tags: ['React.js', 'Node.js', 'PostgreSQL'],
    link: '#projects',
    category: 'Web',
    demoLink: '#projects',
  },
  {
    id: 6,
    image: '/ftspic.png',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    link: 'https://portfolioluconesine.vercel.app/#projects',
    category: 'Web',
    demoLink: 'https://portfolioluconesine.vercel.app/#projects',
  },
];

export function Projects() {
  const { language } = useApp();
  const t = translations[language].projects;
  const sectionRef = useScrollReveal<HTMLDivElement>();

  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<ProjectModalData | null>(null);

  const filterOptions = [
    { key: 'ALL', label: t.categories.all },
    { key: 'Web', label: t.categories.web },
    { key: 'Mobile', label: t.categories.mobile },
  ];

  const projectList: ProjectModalData[] = t.items.map((item) => {
    const staticData = staticProjects.find((p) => p.id === item.id) || staticProjects[0];
    return {
      ...item,
      image: staticData.image,
      tags: staticData.tags,
      link: staticData.link,
      demoLink: staticData.demoLink,
      screenshots: item.screenshots || [staticData.image],
      fullDescription: item.fullDescription || item.description,
      status: item.status || 'Active',
      features: item.features || [],
      architecture: item.architecture || 'Web / Mobile Stack',
    };
  });

  const filteredProjects =
    activeFilter === 'ALL'
      ? projectList
      : projectList.filter((p) => {
          const staticData = staticProjects.find((sp) => sp.id === p.id);
          return staticData?.category === activeFilter;
        });

  return (
    <section id="projects" className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background & Interactive Canvas */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      <BackgroundCanvas />

      <div ref={sectionRef} className="reveal relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-foreground">{t.titlePrefix}</span>
            <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setActiveFilter(opt.key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeFilter === opt.key
                  ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/25'
                  : 'bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-2xl border border-border/60 bg-card/70 backdrop-blur-md overflow-hidden card-hover hover-lift flex flex-col justify-between group"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div>
                {/* Project Image & Top Live Demo Overlay Button */}
                <div className="relative w-full aspect-video overflow-hidden bg-secondary">
                  <Image
                    src={project.screenshots[0] || '/placeholder.jpg'}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <a
                      href={project.demoLink || '#projects'}
                      target={project.demoLink && project.demoLink.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-accent text-accent-foreground font-semibold text-xs flex items-center justify-center gap-2 shadow-lg backdrop-blur-sm hover:bg-cyan-400 transition-all"
                    >
                      <ArrowUpRight size={16} />
                      <span>{language === 'fr' ? 'Faire un démo' : 'Live Demo'}</span>
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 text-xs font-semibold rounded-md bg-accent/15 text-accent border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Action Button (Opens Modal with Details & Screenshots) */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline py-1"
                >
                  <Info size={15} />
                  <span>{t.viewDetailsBtn}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
