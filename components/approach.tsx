'use client';

import { BookOpen, Target, Zap } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { translations } from '@/lib/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { BackgroundCanvas } from './background-canvas';

export function Approach() {
  const { language } = useApp();
  const t = translations[language].approach;
  const sectionRef = useScrollReveal<HTMLDivElement>();

  const pillars = [
    {
      title: t.learningTitle,
      description: t.learningDesc,
      icon: <BookOpen size={36} className="text-accent" />,
    },
    {
      title: t.perseveranceTitle,
      description: t.perseveranceDesc,
      icon: <Target size={36} className="text-accent" />,
    },
    {
      title: t.passionTitle,
      description: t.passionDesc,
      icon: <Zap size={36} className="text-accent" />,
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      {/* Interactive Background Canvas */}
      <BackgroundCanvas />

      <div ref={sectionRef} className="reveal relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">{t.titlePrefix}</span>
            <span className="gradient-text">{t.titleHighlight}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            {t.subtitle}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-border/60 bg-card/70 backdrop-blur-md card-hover hover-lift flex flex-col items-center text-center group"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/80 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
