'use client';

import { ChevronDown, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { useApp } from '@/context/AppContext';
import { translations } from '@/lib/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { BackgroundCanvas } from './background-canvas';

export function Hero() {
  const { language } = useApp();
  const t = translations[language].hero;
  const heroRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none" />

      {/* Interactive Background Canvas */}
      <BackgroundCanvas />

      <div ref={heroRef} className="reveal relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-accent text-sm sm:text-base font-semibold tracking-wide">
              {t.welcome}
            </p>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-foreground tracking-tight leading-tight min-h-[140px] sm:min-h-[180px]">
              <TypeAnimation
                key={language}
                sequence={t.nameSeq}
                speed={20}
                repeat={Infinity}
                cursor={true}
              />
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent min-h-[40px]">
              <TypeAnimation
                key={language + '-roles'}
                sequence={t.roles}
                speed={60}
                repeat={Infinity}
                cursor={true}
              />
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              {t.bio}
            </p>

            {/* Buttons */}
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <MessageCircle size={20} />
                {t.contactBtn}
              </a>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square group">
              {/* Outer Glowing Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent via-cyan-400 to-blue-600 rounded-3xl transform -rotate-3 scale-105 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 shadow-xl shadow-accent/20" />

              {/* Inner White Container */}
              <div className="absolute inset-2 bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                <Image
                  src="/fts.jpg"
                  alt="Luc Onesine FITAHIANTSOA"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16 sm:mt-24 flex flex-col items-center gap-2 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">{t.scrollDown}</p>
          <a
            href="#about"
            className="text-accent hover:text-cyan-400 transition-colors animate-bounce p-2"
            aria-label="Scroll down"
          >
            <ChevronDown size={28} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
