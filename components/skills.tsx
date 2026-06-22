'use client';

import { Code2, Database, Smartphone, Zap, Cloud, Users, ExternalLink } from 'lucide-react';

interface Skill {
  name: string;
  link: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  description: string;
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Code2 size={24} />,
    color: 'from-blue-500 to-cyan-400',
    description: 'Interfaces web modernes et responsives',
    skills: [
      { name: 'React', link: 'https://react.dev' },
      { name: 'Next.js', link: 'https://nextjs.org' },
      { name: 'TypeScript', link: 'https://www.typescriptlang.org' },
      { name: 'Tailwind CSS', link: 'https://tailwindcss.com' },
      { name: 'Vue.js', link: 'https://vuejs.org' },
      { name: 'Three.js', link: 'https://threejs.org' },
    ],
  },
  {
    title: 'Backend',
    icon: <Zap size={24} />,
    color: 'from-purple-500 to-pink-400',
    description: 'APIs robustes et scalables',
    skills: [
      { name: 'Node.js', link: 'https://nodejs.org' },
      { name: 'Express', link: 'https://expressjs.com' },
      { name: 'Python', link: 'https://www.python.org' },
      { name: 'Django', link: 'https://www.djangoproject.com' },
      { name: 'FastAPI', link: 'https://fastapi.tiangolo.com' },
      { name: 'NestJS', link: 'https://nestjs.com' },
    ],
  },
  {
    title: 'Mobile',
    icon: <Smartphone size={24} />,
    color: 'from-green-500 to-emerald-400',
    description: 'Apps iOS et Android natives/cross-platform',
    skills: [
      { name: 'React Native', link: 'https://reactnative.dev' },
      { name: 'Flutter', link: 'https://flutter.dev' },
      { name: 'Swift', link: 'https://www.swift.org' },
      { name: 'Kotlin', link: 'https://kotlinlang.org' },
      { name: 'Dart', link: 'https://dart.dev' },
      { name: 'Expo', link: 'https://expo.dev' },
    ],
  },
  {
    title: 'Base de Données',
    icon: <Database size={24} />,
    color: 'from-green-500 to-teal-400',
    description: 'Gestion de données complexe',
    skills: [
      { name: 'PostgreSQL', link: 'https://www.postgresql.org' },
      { name: 'MongoDB', link: 'https://www.mongodb.com' },
      { name: 'Firebase', link: 'https://firebase.google.com' },
      { name: 'Redis', link: 'https://redis.io' },
      { name: 'Elasticsearch', link: 'https://www.elastic.co' },
      { name: 'GraphQL', link: 'https://graphql.org' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud size={24} />,
    color: 'from-orange-500 to-yellow-400',
    description: 'Déploiement et infrastructure',
    skills: [
      { name: 'AWS', link: 'https://aws.amazon.com' },
      { name: 'Google Cloud', link: 'https://cloud.google.com' },
      { name: 'Docker', link: 'https://www.docker.com' },
      { name: 'Kubernetes', link: 'https://kubernetes.io' },
      { name: 'GitHub Actions', link: 'https://github.com/features/actions' },
      { name: 'Vercel', link: 'https://vercel.com' },
    ],
  },
  {
    title: 'Outils & Méthodes',
    icon: <Users size={24} />,
    color: 'from-red-500 to-pink-400',
    description: 'Collaboration et qualité',
    skills: [
      { name: 'Git', link: 'https://git-scm.com' },
      { name: 'GitHub', link: 'https://github.com' },
      { name: 'Testing', link: 'https://vitest.dev' },
      { name: 'Figma', link: 'https://www.figma.com' },
      { name: 'Jira', link: 'https://www.atlassian.com/software/jira' },
      { name: 'REST APIs', link: 'https://restfulapi.net' },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative min-h-screen lg:ml-64 py-20 px-6 md:px-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

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
        <div className="mb-16 text-center" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="block text-foreground mb-2">Mes</span>
            <span className="gradient-text">Compétences</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Une gamme complète de technologies modernes pour construire des solutions performantes,
            scalables et maintenables.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 rounded-xl border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-all duration-300 overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Gradient Top Bar */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`} />

              {/* Icon */}
              <div
                className={`mb-4 p-3 w-fit rounded-lg bg-gradient-to-br ${category.color} text-white`}
              >
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">{category.description}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <a
                    key={skill.name}
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/30 hover:border-accent/80 hover:bg-accent/20 transition-all inline-flex items-center gap-1 group/skill"
                  >
                    {skill.name}
                    <ExternalLink size={10} className="opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mt-20 pt-20 border-t border-border">
          <h3 className="text-2xl md:text-3xl font-bold mb-12">
            <span className="gradient-text">Parcours Professionnel</span>
          </h3>

          <div className="space-y-8">
            {[
              {
                year: '2024 - Présent',
                title: 'Lead Developer',
                company: 'Tech Startup',
                description:
                  'Direction technique, architecture Full Stack et mentoring de 5 développeurs.',
              },
              {
                year: '2021 - 2024',
                title: 'Senior Full Stack Developer',
                company: 'Digital Agency',
                description:
                  'Développement de solutions SaaS, applications mobile et optimisation de performance.',
              },
              {
                year: '2018 - 2021',
                title: 'Full Stack Developer',
                company: 'E-commerce Platform',
                description: 'Construction de backend scalable et interfaces frontend réactives.',
              },
              {
                year: '2016 - 2018',
                title: 'Junior Developer',
                company: 'First Company',
                description: 'Débuts en développement web avec React et Node.js.',
              },
            ].map((exp, index) => (
              <div
                key={index}
                className="flex gap-6 pb-8 border-b border-border/30 last:border-b-0"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent ring-4 ring-background" />
                  {index < 3 && <div className="w-0.5 h-16 bg-accent/30 mt-4" />}
                </div>
                <div className="pt-1">
                  <p className="text-sm font-semibold text-accent">{exp.year}</p>
                  <h4 className="text-lg font-bold text-foreground mt-1">{exp.title}</h4>
                  <p className="text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
