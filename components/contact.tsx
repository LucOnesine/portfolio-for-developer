'use client';

import { Mail, MapPin, Smartphone, Send, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { FormEvent, useState, useRef } from 'react';
import { useApp } from '@/context/AppContext';
import { translations } from '@/lib/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { BackgroundCanvas } from './background-canvas';
import { WhyChooseMe } from './why-choose-me';

export function Contact() {
  const { language } = useApp();
  const t = translations[language].contact;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useRef<HTMLFormElement>(null);
  const sectionRef = useScrollReveal<HTMLDivElement>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    const nameValue = (formData.get('user_name') as string) || (formData.get('from_name') as string) || '';
    const emailValue = (formData.get('user_email') as string) || (formData.get('from_email') as string) || '';
    const messageValue = (formData.get('message') as string) || '';

    // Send params mapping all possible EmailJS variable names (from_name, user_name, name, from_email, user_email, reply_to, email)
    const templateParams = {
      from_name: nameValue,
      user_name: nameValue,
      name: nameValue,
      from_email: emailValue,
      user_email: emailValue,
      reply_to: emailValue,
      email: emailValue,
      message: messageValue,
    };

    emailjs
      .send(
        'service_0dd9lb6',
        'template_m8m3xru',
        templateParams,
        '6omZyftCIwB3c2bqa'
      )
      .then(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        formElement.reset();

        setTimeout(() => {
          setSubmitted(false);
        }, 4000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error(error);
        alert(t.errorMsg);
      });
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background & Interactive Canvas */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-card/70 backdrop-blur-md card-hover">
                <div className="p-3 rounded-xl bg-accent/15 text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{t.locationTitle}</h3>
                  <p className="text-sm text-muted-foreground">{t.locationValue}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-card/70 backdrop-blur-md card-hover">
                <div className="p-3 rounded-xl bg-accent/15 text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{t.emailTitle}</h3>
                  <a
                    href="mailto:fitahiantsoaluc@gmail.com"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    fitahiantsoaluc@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-border/60 bg-card/70 backdrop-blur-md card-hover">
                <div className="p-3 rounded-xl bg-accent/15 text-accent">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{t.phoneTitle}</h3>
                  <p className="text-sm text-muted-foreground">+261 34 89 276 54</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl border border-border/60 bg-card/70 backdrop-blur-md">
              <h3 className="text-sm font-bold text-foreground mb-4 tracking-wide uppercase">
                Social Profiles
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/LucOnesine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-secondary/70 text-foreground hover:text-accent hover:bg-secondary transition-all hover-lift"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/luc-onesine-fitahiantsoa-a08779306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-secondary/70 text-foreground hover:text-accent hover:bg-secondary transition-all hover-lift"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://facebook.com/luc.onesime.3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-secondary/70 text-foreground hover:text-accent hover:bg-secondary transition-all hover-lift"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="p-8 rounded-2xl border border-border/60 bg-card/70 backdrop-blur-md">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  placeholder={t.namePlaceholder}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border/60 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  placeholder={t.emailPlaceholder}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border/60 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  {t.messageLabel}
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder={t.messagePlaceholder}
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border/60 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover-lift"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 rounded-full border-2 border-accent-foreground border-r-transparent animate-spin" />
                    {t.sendingBtn}
                  </>
                ) : (
                  <>
                    {t.sendBtn}
                    <Send size={18} />
                  </>
                )}
              </button>

              {/* Success Feedback */}
              {submitted && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-500 dark:text-green-400 text-sm font-medium flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  <span>{t.successMsg}</span>
                </div>
              )}
            </form>

            <WhyChooseMe />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-border/60 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            © 2026 FITAHIANTSOA Luc Onesine Portfolio. All rights reserved.
          </p>
          <div className="flex justify-center items-center gap-4 text-xs">
            <a
              href="https://github.com/LucOnesine"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <span className="text-border">•</span>
            <a
              href="https://www.linkedin.com/in/luc-onesine-fitahiantsoa-a08779306"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-border">•</span>
            <a
              href="https://facebook.com/luc.onesime.3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
