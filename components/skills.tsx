'use client';

import { Code2, Database, Zap, Cloud, Users } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { useApp } from '@/context/AppContext';
import { translations } from '@/lib/translations';
import { BackgroundCanvas } from './background-canvas';

interface SkillItem {
  name: string;
  percentage: number;
  link: string;
}

interface SkillCategory {
  titleKey: string;
  icon: React.ReactNode;
  skills: SkillItem[];
  bgColor: string;
  barColor: string;
}

const skillCategoriesData: SkillCategory[] = [
  {
    titleKey: 'frontend',
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
    titleKey: 'frameworks',
    icon: <Zap size={24} />,
    bgColor: 'from-pink-600 to-pink-500',
    barColor: 'from-pink-400 to-rose-300',
    skills: [
      { name: 'Express JS', percentage: 85, link: 'https://expressjs.com' },
      { name: 'Next JS', percentage: 85, link: 'https://nextjs.org' },
      { name: 'Django', percentage: 85, link: 'https://www.djangoproject.com' },
      { name: 'Laravel', percentage: 80, link: 'https://laravel.com' },
      { name: 'Angular JS', percentage: 75, link: 'https://angularjs.org/' },
    ],
  },
  {
    titleKey: 'backend',
    icon: <Database size={24} />,
    bgColor: 'from-purple-600 to-purple-500',
    barColor: 'from-purple-400 to-pink-300',
    skills: [
      { name: 'Node JS', percentage: 85, link: 'https://nodejs.org' },
      { name: 'Python', percentage: 80, link: 'https://www.python.org' },
      { name: 'Java', percentage: 90, link: 'https://www.java.com' },
      { name: 'PHP', percentage: 80, link: 'https://www.php.net' },
    ],
  },
  {
    titleKey: 'databases',
    icon: <Database size={24} />,
    bgColor: 'from-green-600 to-green-500',
    barColor: 'from-green-400 to-emerald-300',
    skills: [
      { name: 'MySQL', percentage: 90, link: 'https://www.mysql.com' },
      { name: 'PostgreSQL', percentage: 90, link: 'https://www.postgresql.org' },
      { name: 'SQLite', percentage: 80, link: 'https://www.sqlite.org' },
    ],
  },
  {
    titleKey: 'mobileTools',
    icon: <Cloud size={24} />,
    bgColor: 'from-yellow-600 to-yellow-500',
    barColor: 'from-yellow-400 to-orange-300',
    skills: [
      { name: 'Docker', percentage: 80, link: 'https://www.docker.com' },
      { name: 'GitHub', percentage: 90, link: 'https://github.com' },
      { name: 'Git CI/CD', percentage: 85, link: 'https://git-scm.com' },
    ],
  },
  {
    titleKey: 'softSkills',
    icon: <Users size={24} />,
    bgColor: 'from-red-600 to-red-500',
    barColor: 'from-red-400 to-pink-300',
    skills: [
      { name: 'Agile', percentage: 80, link: 'https://www.agilealliance.org' },
      { name: 'UML', percentage: 80, link: 'https://www.omg.org/spec/UML' },
      { name: 'Merise', percentage: 95, link: 'https://en.wikipedia.org/wiki/Merise' },
    ],
  },
];

export function Skills() {
  const { language } = useApp();
  const t = translations[language].skills;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const categoryTitles: Record<string, string> = {
    frontend: t.categories.frontend,
    frameworks: t.categories.frameworks,
    backend: t.categories.backend,
    databases: t.categories.databases,
    mobileTools: t.categories.mobileTools,
    softSkills: t.categories.softSkills,
  };

  return (
    <section id="skills" className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background & Interactive Canvas */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      <BackgroundCanvas />

      <div
        ref={sectionRef}
        className={`relative z-10 max-w-7xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
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

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategoriesData.map((category, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-border/60 bg-card/70 backdrop-blur-md card-hover hover-lift flex flex-col justify-between"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.bgColor} text-white shadow-md`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {categoryTitles[category.titleKey] || category.titleKey}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <a
                          href={skill.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-accent transition-colors"
                        >
                          {skill.name}
                        </a>
                        <span className="text-xs font-bold text-accent">
                          {isVisible ? `${skill.percentage}%` : '0%'}
                        </span>
                      </div>
                      <div className="h-2.5 w-full bg-secondary/80 rounded-full overflow-hidden p-0.5 border border-border/40">
                        <div
                          className={`h-full bg-gradient-to-r ${category.barColor} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.percentage}%` : '0%',
                            transitionDelay: `${sIdx * 120 + 200}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
