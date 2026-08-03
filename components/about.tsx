'use client';

import { Download, MessageCircle } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { translations } from '@/lib/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { BackgroundCanvas } from './background-canvas';

export function About() {
  const { language } = useApp();
  const t = translations[language].about;
  const sectionRef = useScrollReveal<HTMLDivElement>();

  // Determine CV URL based on active language
  const cvPath = language === 'fr' ? '/FITAHIANTSOALucOnesineCV.pdf' : '/FITAHIANTSOALucOnesineCV_EN.pdf';
  const cvFileName = language === 'fr' ? 'CV_Luc_Onesine_FR.pdf' : 'CV_Luc_Onesine_EN.pdf';

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      {/* Interactive Background Canvas */}
      <BackgroundCanvas />

      <div ref={sectionRef} className="reveal relative z-10 max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t.bio1}
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t.bio2}
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-4">
              {t.bio3}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all text-sm sm:text-base"
              >
                <MessageCircle size={20} />
                {t.contactBtn}
              </a>
              <a
                href={cvPath}
                download={cvFileName}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-accent text-accent font-semibold hover:bg-accent/10 hover:-translate-y-0.5 transition-all text-sm sm:text-base"
              >
                <Download size={20} />
                {t.downloadCV}
              </a>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-2xl border border-border/60 bg-card/70 backdrop-blur-md card-hover hover-lift">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text mb-2">6+</div>
              <p className="text-xs sm:text-sm font-medium text-muted-foreground">{t.stats.projects}</p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl border border-border/60 bg-card/70 backdrop-blur-md card-hover hover-lift">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text mb-2">3</div>
              <p className="text-xs sm:text-sm font-medium text-muted-foreground">{t.stats.apps}</p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl border border-border/60 bg-card/70 backdrop-blur-md card-hover hover-lift">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text mb-2">4+</div>
              <p className="text-xs sm:text-sm font-medium text-muted-foreground">{t.stats.techs}</p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl border border-border/60 bg-card/70 backdrop-blur-md card-hover hover-lift">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text mb-2">100%</div>
              <p className="text-xs sm:text-sm font-medium text-muted-foreground">{t.stats.motivation}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
