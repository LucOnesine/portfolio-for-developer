'use client';

import { useState, useEffect } from 'react';
import { X, ExternalLink, Code2, Layers, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { translations } from '@/lib/translations';

export interface ProjectModalData {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  status: string;
  screenshots: string[];
  features: string[];
  architecture: string;
  tags: string[];
  demoLink: string;
  link: string;
}

interface ProjectModalProps {
  project: ProjectModalData | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { language } = useApp();
  const t = translations[language].projects.modal;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const screenshots = project.screenshots && project.screenshots.length > 0
    ? project.screenshots
    : ['/placeholder.jpg'];

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
      {/* Modal Card */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border/80 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 text-foreground animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-secondary/80 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Header Title & Status */}
        <div className="pr-10 space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-accent/20 text-accent border border-accent/30">
              {project.status}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold gradient-text">
            {project.title}
          </h3>
        </div>

        {/* Screenshots Showcase */}
        <div className="space-y-3">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-secondary/60 border border-border/50 group shadow-lg">
            <Image
              src={screenshots[activeImageIndex]}
              alt={`${project.title} Screenshot ${activeImageIndex + 1}`}
              fill
              className="object-contain bg-black/40"
            />

            {screenshots.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all opacity-80 group-hover:opacity-100"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all opacity-80 group-hover:opacity-100"
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails row if multiple */}
          {screenshots.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-1 pt-1">
              {screenshots.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                    activeImageIndex === idx ? 'border-accent scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt="Thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Full Description */}
        <div className="space-y-2">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {project.fullDescription || project.description}
          </p>
        </div>

        {/* Key Features & Architecture Grid */}
        <div className="grid md:grid-cols-2 gap-6 pt-2">
          {/* Key Features */}
          <div className="p-5 rounded-2xl bg-secondary/30 border border-border/50 space-y-3">
            <div className="flex items-center gap-2 text-accent font-bold text-sm">
              <CheckCircle2 size={18} />
              <span>{t.featuresLabel}</span>
            </div>
            <ul className="space-y-2">
              {project.features && project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                  <span className="text-accent font-bold">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture & Tech Stack */}
          <div className="p-5 rounded-2xl bg-secondary/30 border border-border/50 space-y-3">
            <div className="flex items-center gap-2 text-accent font-bold text-sm">
              <Layers size={18} />
              <span>{t.architectureLabel}</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {project.architecture}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-semibold rounded-md bg-accent/15 text-accent border border-accent/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-end gap-3 pt-4 border-t border-border/50">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-border/60 text-muted-foreground hover:text-foreground hover:bg-secondary/60 text-sm font-semibold transition-all"
          >
            {t.closeBtn}
          </button>

          {project.demoLink && project.demoLink.startsWith('http') && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-accent text-accent-foreground text-sm font-semibold shadow-md shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all"
            >
              <span>{t.demoBtn}</span>
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
