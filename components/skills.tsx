'use client';

import { Code2, Database, Smartphone, Zap, Cloud, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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

interface SkillBarProps {
  skill: SkillItem;
  barColor: string;
}

function SkillBar({ skill, barColor }: SkillBarProps) {
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let currentPercentage = 0;
          const interval = setInterval(() => {
            if (currentPercentage < skill.percentage) {
              currentPercentage += Math.ceil(skill.percentage / 30);
              setDisplayPercentage(Math.min(currentPercentage, skill.percentage));
              setWidth(Math.min(currentPercentage, skill.percentage));
            } else {
              clearInterval(interval);
            }
          }, 30);
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [skill.percentage]);

  return (
    <a
      ref={barRef}
      key={skill.name}
      href={skill.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block hover:opacity-80 transition-opacity"
    >
      {/* Skill Name & Percentage */}
      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
        <span className="text-white font-semibold text-xs sm:text-sm">{skill.name}</span>
        <span className="text-white text-xs sm:text-sm font-bold">{displayPercentage}%</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white/20 rounded-full h-1.5 sm:h-2 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${barColor} rounded-full transition-all duration-300`}
          style={{
            width: `${width}%`,
          }}
        />
      </div>
    </a>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative min-h-screen py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
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
        <div className="mb-12 sm:mb-16 md:mb-20 text-center" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="block text-foreground mb-2">Mes</span>
            <span className="gradient-text">Compétences</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-4 sm:p-6 rounded-lg overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                background: `linear-gradient(135deg, hsl(var(--color-start)) 0%, hsl(var(--color-end)) 100%)`,
              }}
            >
              {/* Dynamic gradient header */}
              <div className={`bg-gradient-to-r ${category.bgColor} p-3 sm:p-4 rounded-lg mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3`}>
                <div className="text-white text-sm sm:text-base">{category.icon}</div>
                <h3 className="text-white font-bold text-base sm:text-lg">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} barColor={category.barColor} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
