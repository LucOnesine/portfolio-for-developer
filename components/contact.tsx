'use client';

import { Mail, MapPin, Smartphone, Send, CheckCircle2 } from 'lucide-react';
import { FormEvent, useState } from 'react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="relative min-h-screen lg:ml-64 py-20 px-6 md:px-12">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <div className="relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="text-accent text-sm font-semibold tracking-widest">
              CONTACT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="block text-foreground mb-2">Prêt à</span>
            <span className="gradient-text">collaborer?</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl">
            Je suis toujours intéressé par de nouveaux projets. Contactez-moi pour discuter
            de votre idée, poser une question, ou simplement dire bonjour!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Email */}
              <div
                className="group"
                style={{
                  animation: `fadeInUp 0.6s ease-out 0s both`,
                }}
              >
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
                <div className="p-4 rounded-lg bg-secondary/30 border border-border/50 group-hover:border-accent/50 transition-all inline-block mb-3">
                  <Mail className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:hello@devportfolio.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  hello@devportfolio.com
                </a>
              </div>

              {/* Phone */}
              <div
                className="group"
                style={{
                  animation: `fadeInUp 0.6s ease-out 0.1s both`,
                }}
              >
                <div className="p-4 rounded-lg bg-secondary/30 border border-border/50 group-hover:border-accent/50 transition-all inline-block mb-3">
                  <Smartphone className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                <a
                  href="tel:+33123456789"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </div>

              {/* Location */}
              <div
                className="group"
                style={{
                  animation: `fadeInUp 0.6s ease-out 0.2s both`,
                }}
              >
                <div className="p-4 rounded-lg bg-secondary/30 border border-border/50 group-hover:border-accent/50 transition-all inline-block mb-3">
                  <MapPin className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Localisation</h3>
                <p className="text-muted-foreground">Paris, France</p>
              </div>

              {/* Response Time */}
              <div
                className="p-4 rounded-lg bg-accent/10 border border-accent/30"
                style={{
                  animation: `fadeInUp 0.6s ease-out 0.3s both`,
                }}
              >
                <p className="text-sm">
                  <span className="font-semibold text-accent">Temps de réponse:</span>
                  <br />
                  <span className="text-muted-foreground">
                    Généralement dans les 24 heures
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="lg:col-span-2 p-8 rounded-xl border border-border/50 bg-secondary/20 backdrop-blur-sm"
            style={{
              animation: `fadeInUp 0.6s ease-out 0.4s both`,
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  placeholder="Sujet du message"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Votre message..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover-lift"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-accent-foreground border-r-transparent animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send size={20} />
                  </>
                )}
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                  ✓ Message envoyé avec succès! Je vous recontacterai bientôt.
                </div>
              )}

              {/* Why Choose Me */}
              <div className="mt-8 p-6 rounded-xl border border-border/50 bg-secondary/20">
                <h3 className="text-lg font-bold text-foreground mb-6">Pourquoi me choisir ?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {['Réponse rapide sous 24h', 'Devis gratuit et détaillé', 'Suivi personnalisé du projet', 'Support post-livraison'].map((reason) => (
                    <div key={reason} className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-border text-center">
          <p className="text-muted-foreground mb-4">
            © 2024 Dev Portfolio. Tous droits réservés.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              GitHub
            </a>
            <span className="text-border">•</span>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              LinkedIn
            </a>
            <span className="text-border">•</span>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
