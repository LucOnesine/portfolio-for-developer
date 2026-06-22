'use client';

import { Code2, Database, Smartphone, Zap, Cloud, Users } from 'lucide-react';

interface SkillItem {
  name: string;
  percentage: number;
  link: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
  bgColor: string;
  barColor: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Code2 size={24} />,
    bgColor: 'from-blue-600 to-blue-500',
    barColor: 'from-blue-400 to-cyan-300',
    skills: [
      { name: 'React JS', percentage: 90, link: 'https://react.dev' },
      { name: 'JavaScript', percentage: 90, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'HTML', percentage: 95, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS', percentage: 85, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'Tailwind CSS', percentage: 90, link: 'https://tailwindcss.com' },
    ],
  },
  {
    title: 'Frameworks',
    icon: <Zap size={24} />,
    bgColor: 'from-pink-600 to-pink-500',
    barColor: 'from-pink-400 to-rose-300',
    skills: [
      { name: 'Express JS', percentage: 85, link: 'https://expressjs.com' },
      { name: 'Next JS', percentage: 85, link: 'https://nextjs.org' },
      { name: 'Django', percentage: 85, link: 'https://www.djangoproject.com' },
      { name: 'Laravel', percentage: 80, link: 'https://laravel.com' },
    ],
  },
  {
    title: 'Backend',
    icon: <Database size={24} />,
    bgColor: 'from-purple-600 to-purple-500',
    barColor: 'from-purple-400 to-pink-300',
    skills: [
      { name: 'Node JS', percentage: 85, link: 'https://nodejs.org' },
      { name: 'Python', percentage: 85, link: 'https://www.python.org' },
      { name: 'PHP', percentage: 80, link: 'https://www.php.net' },
    ],
  },
  {
    title: 'Bases de données',
    icon: <Database size={24} />,
    bgColor: 'from-green-600 to-green-500',
    barColor: 'from-green-400 to-emerald-300',
    skills: [
      { name: 'MySQL', percentage: 85, link: 'https://www.mysql.com' },
      { name: 'PostgreSQL', percentage: 90, link: 'https://www.postgresql.org' },
      { name: 'SQLite', percentage: 90, link: 'https://www.sqlite.org' },
      { name: 'MongoDB', percentage: 90, link: 'https://www.mongodb.com' },
    ],
  },
  {
    title: 'DevOps & Outils',
    icon: <Cloud size={24} />,
    bgColor: 'from-yellow-600 to-yellow-500',
    barColor: 'from-yellow-400 to-orange-300',
    skills: [
      { name: 'Docker', percentage: 90, link: 'https://www.docker.com' },
      { name: 'GitHub', percentage: 90, link: 'https://github.com' },
      { name: 'Git CI/CD', percentage: 85, link: 'https://git-scm.com' },
      { name: 'Kubernetes', percentage: 70, link: 'https://kubernetes.io' },
    ],
  },
  {
    title: 'Méthodologies',
    icon: <Users size={24} />,
    bgColor: 'from-red-600 to-red-500',
    barColor: 'from-red-400 to-pink-300',
    skills: [
      { name: 'Agile', percentage: 80, link: 'https://www.agilealliance.org' },
      { name: 'UML', percentage: 80, link: 'https://www.omg.org/spec/UML' },
      { name: 'Merise', percentage: 85, link: 'https://en.wikipedia.org/wiki/Merise' },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative min-h-screen py-20 px-6 md:px-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
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
          @keyframes slideBar {
            from {
              width: 0;
            }
          }
        `}</style>

        {/* Section Header */}
        <div className="mb-16 text-center" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="block text-foreground mb-2">Mes</span>
            <span className="gradient-text">Compétences</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-lg overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                background: `linear-gradient(135deg, hsl(var(--color-start)) 0%, hsl(var(--color-end)) 100%)`,
              }}
            >
              {/* Custom CSS for gradient backgrounds */}
              <style>{`
                div[style*="${category.title}"] {
                  background: linear-gradient(135deg, var(--color-1) 0%, var(--color-2) 100%);
                }
              `}</style>

              {/* Dynamic gradient header */}
              <div className={`bg-gradient-to-r ${category.bgColor} p-4 rounded-lg mb-6 flex items-center gap-3`}>
                <div className="text-white">{category.icon}</div>
                <h3 className="text-white font-bold text-lg">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <a
                    key={skill.name}
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block hover:opacity-80 transition-opacity"
                  >
                    {/* Skill Name & Percentage */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold text-sm">{skill.name}</span>
                      <span className="text-white text-sm font-bold">{skill.percentage}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.barColor} rounded-full transition-all duration-500`}
                        style={{
                          width: `${skill.percentage}%`,
                          animation: `slideBar 0.8s ease-out`,
                        }}
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
