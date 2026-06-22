'use client';

import { Download, MessageCircle } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
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

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="block text-foreground mb-2">À propos de</span>
            <span className="gradient-text">moi</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Développeur passionné, je transforme vos idées en solutions digitales modernes et performantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div style={{ animation: 'fadeInUp 0.8s ease-out 0.1s both' }}>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
              Développeur passionné en apprentissage, j&apos;ai découvert ma vocation dans le monde du code il y a quelques années. Actuellement en formation intensive en React Native et Next.js, je développe mes compétences jour après jour pour créer des solutions digitales modernes.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              Mon approche se base sur l&apos;apprentissage continu et la pratique régulière. Chaque projet est une opportunité d&apos;apprendre quelque chose de nouveau et d&apos;améliorer mes compétences techniques et créatives.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground mb-8 leading-relaxed">
              Basé à Madagascar, je suis ouvert aux opportunités de collaboration et aux projets qui me permettront de grandir en tant que développeur.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-cyan-500 transition-all text-sm sm:text-base"
              >
                <MessageCircle size={20} />
                Me contacter
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-all text-sm sm:text-base"
              >
                <Download size={20} />
                Télécharger CV
              </a>
            </div>
          </div>

          {/* Right Stats */}
          <div
            className="grid grid-cols-2 gap-4 sm:gap-6"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
          >
            <div className="p-4 sm:p-6 rounded-lg border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">5+</div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Projets personnels</p>
            </div>

            <div className="p-4 sm:p-6 rounded-lg border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">3</div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Apps en développement</p>
            </div>

            <div className="p-4 sm:p-6 rounded-lg border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">4+</div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Langages maîtrisés</p>
            </div>

            <div className="p-4 sm:p-6 rounded-lg border border-border/50 bg-secondary/20 hover:bg-secondary/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text">100%</div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Motivation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
