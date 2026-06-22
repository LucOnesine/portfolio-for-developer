'use client';

import { Code2, Globe } from 'lucide-react';

export function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen lg:ml-64 py-20 px-6 md:px-12 flex items-center"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <div className="relative z-10 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6" style={{ animation: 'fadeInLeft 0.8s ease-out' }}>
            <style>{`
              @keyframes fadeInLeft {
                from {
                  opacity: 0;
                  transform: translateX(-30px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }
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
              @keyframes slideInRight {
                from {
                  opacity: 0;
                  transform: translateX(30px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }
            `}</style>

            {/* Header */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="block text-foreground mb-2">À propos de</span>
                <span className="gradient-text">moi</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed">
              Développeur passionné en apprentissage, j&apos;ai découvert ma vocation dans le monde du
              code il y a quelques années.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Actuellement en formation intensive en{' '}
              <span className="text-accent font-semibold">React Native et Next.js</span>, je développe
              mes compétences jour après jour pour créer des solutions digitales modernes.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Mon approche se base sur l&apos;apprentissage continu et la pratique régulière. Chaque projet
              est une opportunité d&apos;apprendre quelque chose de nouveau et d&apos;améliorer mes compétences
              techniques et créatives.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Basé à <span className="text-accent font-semibold">Madagascar</span>, je suis ouvert aux
              opportunités de collaboration et aux projets qui me permettront de grandir en tant que
              développeur.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-cyan-500 transition-all"
                style={{ animation: 'slideInRight 0.8s ease-out 0.2s both' }}
              >
                Télécharger CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-accent/50 text-foreground font-semibold hover:bg-secondary/60 transition-all"
                style={{ animation: 'slideInRight 0.8s ease-out 0.3s both' }}
              >
                Me contacter
              </a>
            </div>
          </div>

          {/* Right Stats */}
          <div
            className="grid grid-cols-2 gap-6"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
          >
            {[
              {
                number: '5+',
                label: 'Projets personnels',
                icon: <Code2 size={32} className="text-accent" />,
              },
              {
                number: '3',
                label: 'Apps en développement',
                icon: <Globe size={32} className="text-accent" />,
              },
              {
                number: '4+',
                label: 'Langages maîtrisés',
                icon: <Code2 size={32} className="text-accent" />,
              },
              {
                number: '100%',
                label: 'Motivation',
                icon: <Globe size={32} className="text-accent" />,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-all"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.1}s both`,
                }}
              >
                <div className="mb-4">{stat.icon}</div>
                <p className="text-3xl font-bold gradient-text mb-2">{stat.number}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
