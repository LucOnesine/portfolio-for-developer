'use client';

import { BookOpen, Target, Zap } from 'lucide-react';

export function Approach() {
  const pillars = [
    {
      title: 'Apprentissage',
      description: 'Chaque ligne de code est une opportunité d\'apprendre et d\'améliorer mes compétences.',
      icon: <BookOpen size={40} className="text-accent" />,
    },
    {
      title: 'Persévérance',
      description:
        'Une approche déterminée pour surmonter les défis et atteindre mes objectifs techniques.',
      icon: <Target size={40} className="text-accent" />,
    },
    {
      title: 'Passion',
      description:
        'Une motivation constante pour explorer de nouvelles technologies et créer des solutions innovantes.',
      icon: <Zap size={40} className="text-accent" />,
    },
  ];

  return (
    <section
      id="approach"
      className="relative min-h-screen py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

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
        <div className="mb-12 sm:mb-16 md:mb-20 text-center" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="block text-foreground mb-2">Mon approche de</span>
            <span className="gradient-text">développement</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-4 sm:mt-6 max-w-2xl mx-auto px-2">
            Mes principes fondamentaux qui guident chaque projet et chaque décision technique.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="p-6 sm:p-8 rounded-xl border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-all group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 w-fit rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-all">
                {pillar.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">{pillar.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
