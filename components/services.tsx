'use client';

import { Layout, Server, Smartphone, Database, Zap, BookOpen } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { translations } from '@/lib/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { BackgroundCanvas } from './background-canvas';

export function Services() {
  const { language } = useApp();
  const t = translations[language].services;
  const sectionRef = useScrollReveal<HTMLDivElement>();

  const icons = [
    <Layout key="1" size={32} />,
    <Server key="2" size={32} />,
    <Smartphone key="3" size={32} />,
    <Database key="4" size={32} />,
    <Zap key="5" size={32} />,
    <BookOpen key="6" size={32} />,
  ];

  const gradients = [
    'from-blue-500 to-cyan-400',
    'from-purple-500 to-pink-400',
    'from-green-500 to-emerald-400',
    'from-orange-500 to-yellow-400',
    'from-indigo-500 to-purple-400',
    'from-red-500 to-pink-400',
  ];

  return (
    <section id="services" className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.items.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-border/60 bg-card/70 backdrop-blur-md card-hover hover-lift flex flex-col justify-between group"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div>
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  {icons[index % icons.length]}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
