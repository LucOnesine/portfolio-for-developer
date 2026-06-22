'use client';

import { Download, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div style={{ animation: 'fadeInUp 0.8s ease-out' }}>
            <p className="text-accent text-sm font-semibold mb-4">Bienvenue, Je suis</p>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Armel<br />Rantomahampy
            </h1>

            <p className="text-2xl font-semibold text-muted-foreground mb-6">
              Développeur React Native & Next.js
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
              Développeur passionné spécialisé en React Native (Expo) et Next.js. Fort de plusieurs années d&apos;expérience, je crée des applications web et mobiles modernes, performantes et user-friendly. Mon expertise couvre l&apos;ensemble du développement full-stack, de la conception UI/UX à la mise en production.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-cyan-500 transition-all"
              >
                <MessageCircle size={20} />
                Me contacter
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-all"
              >
                <Download size={20} />
                Télécharger CV
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative flex justify-center"
            style={{ animation: 'slideInRight 0.8s ease-out' }}
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Green Border Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-cyan-600 rounded-3xl transform -skew-y-2" />

              {/* White Background with Image */}
              <div className="absolute inset-2 bg-white rounded-3xl overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="Armel Rantomahampy"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
