'use client';

import { Mail, MapPin, Smartphone, Send, CheckCircle2  } from 'lucide-react';
import emailjs from "@emailjs/browser";
import { FaGithub } from "react-icons/fa";
import { FormEvent, useState } from 'react';
import { useEffect, useRef } from 'react';


export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setIsSubmitting(true);

  emailjs
    .sendForm(
      "service_0dd9lb6",
      "template_m8m3xru",
      form.current!,
      "6omZyftCIwB3c2bqa"
    )
    .then(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      form.current?.reset();

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    })
    .catch((error) => {
      setIsSubmitting(false);
      console.log(error);
      alert("Erreur lors de l'envoi.");
    });
};
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
  
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
  
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
  
      const particles: Array<{
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
        opacity: number;
      }> = [];
  
      for (let i = 0; i < 200; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 100,
        });
      }
  
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00d4ff';
  
        particles.forEach((p) => {
          p.x += p.speedX;
          p.y += p.speedY;
  
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;
  
          ctx.globalAlpha = p.opacity;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        });
  
        ctx.globalAlpha = 1;
        requestAnimationFrame(animate);
      };
  
      animate();
    }, []);

    const navigation = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Développement Mobile',
    'Applications Web',
    'Sites WordPress',
    'Apprentissage & Formation',
  ];

  return (
    <section id="contact" className="relative min-h-screen py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="text-accent text-sm font-semibold tracking-widest">
              CONTACT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className=" text-foreground mb-2">Prêt à </span>
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
            <div
            className="lg:col-span-2 p-8 rounded-xl border border-border/50 bg-secondary/20 backdrop-blur-sm"
            style={{
              animation: `fadeInUp 0.6s ease-out 0.4s both`,
            }}
          >

          <div className="relative z-80">

              <h5 className="text-4xl font-bold mb-8">
                  Informations
              </h5>
              {/* Email */}
              <div
                className="flex items-start gap-4"
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
                <div className="p-4 rounded-lg bg-secondary/30 border border-border/50 group-hover:border-accent/50 transition-all inline-block mb-10">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:fitahiantsoaluconesine@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    fitahiantsoaluconesine@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div
                className="flex items-start gap-4"
                style={{
                  animation: `fadeInUp 0.6s ease-out 0.1s both`,
                }}
              >
                <div className="p-4 rounded-lg bg-secondary/30 border border-border/50 group-hover:border-accent/50 transition-all inline-block mb-10">
                  <Smartphone className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                  <a
                    href="tel:+261344232108"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +261 34 42 321 08
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div
                className="flex items-start gap-4"
                style={{
                  animation: `fadeInUp 0.6s ease-out 0.2s both`,
                }}
              >
                <div className="p-4 rounded-lg bg-secondary/30 border border-border/50 group-hover:border-accent/50 transition-all inline-block mb-10">
                  <FaGithub  className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">GitHub</h3>
                  <a
                    href="https://github.com/LucOnesine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    LucOnesine
                  </a>
                </div>
              </div>

              {/* Location */}
              <div
                className="flex items-start gap-4"
                style={{
                  animation: `fadeInUp 0.6s ease-out 0.2s both`,
                }}
              >
                <div className="p-4 rounded-lg bg-secondary/30 border border-border/50 group-hover:border-accent/50 transition-all inline-block mb-10">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Localisation</h3>
                  <p className="text-muted-foreground">Antananarivo, Madagascar</p>
                </div>
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
              </div></div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="lg:col-span-2 p-8 rounded-xl border border-border/50 bg-secondary/20 backdrop-blur-sm"
            style={{
              animation: `fadeInUp 0.6s ease-out 0.4s both`,
            }}
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
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
                    name="email"
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
                  name="subject"
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
                  name="message"
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
            © 2026 Dev Portfolio. Tous droits réservés.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/LucOnesine" className="text-muted-foreground hover:text-accent transition-colors">
              GitHub
            </a>
            <span className="text-border">•</span>
            <a href="https://www.linkedin.com/in/luc-onesine-fitahiantsoa-a08779306" className="text-muted-foreground hover:text-accent transition-colors">
              LinkedIn
            </a>
            <span className="text-border">•</span>
            <a href="https://facebook.com/luc.onesime.3" className="text-muted-foreground hover:text-accent transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
