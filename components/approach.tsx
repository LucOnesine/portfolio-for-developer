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
      className="relative min-h-screen lg:ml-64 py-20 px-6 md:px-12 flex items-center"
    >
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
        <div className="mb-16 text-center" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="block text-foreground mb-2">Mon approche de</span>
            <span className="gradient-text">développement</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Mes principes fondamentaux qui guident chaque projet et chaque décision technique.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="p-8 rounded-xl border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-all group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              <div className="mb-6 p-4 w-fit rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-all">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
