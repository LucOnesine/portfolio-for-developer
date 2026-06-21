'use client';

import { Code2, Database, Smartphone, Zap, Cloud, Users } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  description: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Code2 size={24} />,
    description: 'Interfaces web modernes et responsives',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Three.js'],
  },
  {
    title: 'Backend',
    icon: <Zap size={24} />,
    description: 'APIs robustes et scalables',
    skills: ['Node.js', 'Express', 'Python', 'Django', 'FastAPI', 'NestJS'],
  },
  {
    title: 'Mobile',
    icon: <Smartphone size={24} />,
    description: 'Apps iOS et Android natives/cross-platform',
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Dart', 'Expo'],
  },
  {
    title: 'Base de Données',
    icon: <Database size={24} />,
    description: 'Gestion de données complexe',
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'Elasticsearch', 'GraphQL'],
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud size={24} />,
    description: 'Déploiement et infrastructure',
    skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel'],
  },
  {
    title: 'Outils & Méthodes',
    icon: <Users size={24} />,
    description: 'Collaboration et qualité',
    skills: ['Git', 'Agile/Scrum', 'Testing', 'Figma', 'Jira', 'REST/GraphQL'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative min-h-screen lg:ml-64 py-20 px-6 md:px-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

      <div className="relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-accent text-sm font-semibold tracking-widest">
              COMPÉTENCES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="block text-foreground mb-2">Stack Technique</span>
            <span className="gradient-text">& Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
            Une gamme complète de technologies modernes pour construire des solutions
            performantes, scalables et maintenables.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 rounded-xl border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-all duration-300 card-hover"
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

              {/* Icon */}
              <div className="mb-4 p-3 w-fit rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-1">{category.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{category.description}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30 group-hover:border-accent/60 transition-all"
                  >
                    {skill}
                  </span>
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
