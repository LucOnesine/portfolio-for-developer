'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { translations } from '@/lib/translations';

export function Navbar() {
  const { language, setLanguage, theme, toggleTheme } = useApp();
  const t = translations[language].nav;

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: t.home, href: '#home' },
    { label: t.about, href: '#about' },
    { label: t.skills, href: '#skills' },
    { label: t.services, href: '#services' },
    { label: t.projects, href: '#projects' },
    { label: t.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // When scrolling down, hide navbar. When scrolling UP, show navbar.
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      const sections = ['home', 'about', 'skills', 'services', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    setIsVisible(true); // Ensure navbar stays visible on link click
    setActiveSection(href.slice(1));
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100 shadow-md' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-2 font-bold text-lg sm:text-xl text-foreground flex-shrink-0 hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shadow-md shadow-accent/20">
            <span className="text-accent-foreground font-bold">▲</span>
          </div>
          <span className="hidden sm:inline">Portfolio</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  isActive ? 'text-accent' : 'text-muted-foreground hover:text-accent'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full animate-in fade-in duration-300"></span>
                )}
              </a>
            );
          })}
        </div>

        {/* Language & Theme Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-secondary/60 p-1 rounded-lg border border-border/50">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                language === 'en'
                  ? 'bg-accent text-accent-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              title="English"
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
                language === 'fr'
                  ? 'bg-accent text-accent-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              title="Français"
            >
              FR
            </button>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary/60 border border-border/50 text-foreground hover:text-accent hover:bg-secondary transition-all"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-indigo-600" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground rounded-lg bg-secondary/60 border border-border/50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 sm:px-6 py-4 space-y-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block text-sm font-medium py-2 px-3 rounded-md transition-colors ${
                    isActive ? 'bg-secondary text-accent font-semibold' : 'text-muted-foreground hover:bg-secondary/50 hover:text-accent'
                  }`}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
