'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Home,
  Code2,
  Briefcase,
  Mail,
  Menu,
  X,
  GitBranch,
  ExternalLink,
  Share2,
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { translations } from '@/lib/translations';

export function Sidebar() {
  const { language } = useApp();
  const tNav = translations[language].nav;

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: tNav.home, href: '#home', icon: <Home size={20} /> },
    { label: tNav.skills, href: '#skills', icon: <Briefcase size={20} /> },
    { label: tNav.projects, href: '#projects', icon: <Code2 size={20} /> },
    { label: tNav.contact, href: '#contact', icon: <Mail size={20} /> },
  ];

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 lg:hidden p-2 rounded-lg bg-secondary/80 text-accent hover:bg-secondary"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-background border-r border-border transition-transform duration-300 lg:translate-x-0 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="mb-12">
            <h1 className="text-2xl font-bold gradient-text">DEV</h1>
            <p className="text-xs text-muted-foreground mt-2">Full Stack Developer</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveSection(item.href.slice(1));
                      setIsOpen(false);
                    }}
                    className={`nav-link ${
                      activeSection === item.href.slice(1) ? 'active' : ''
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="border-t border-border pt-6">
            <p className="text-xs text-muted-foreground mb-4 font-semibold">
              {language === 'fr' ? 'Suivez-moi' : 'Follow me'}
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/LucOnesine"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/60 text-muted-foreground hover:text-accent hover:bg-secondary transition-all"
              >
                <GitBranch size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/luc-onesine-fitahiantsoa-a08779306"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/60 text-muted-foreground hover:text-accent hover:bg-secondary transition-all"
              >
                <ExternalLink size={18} />
              </a>
              <a
                href="https://facebook.com/luc.onesime.3"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/60 text-muted-foreground hover:text-accent hover:bg-secondary transition-all"
              >
                <Share2 size={18} />
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
