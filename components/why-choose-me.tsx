'use client';

import { CheckCircle2 } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { translations } from '@/lib/translations';

export function WhyChooseMe() {
  const { language } = useApp();
  const t = translations[language].contact.whyChooseMe;

  const reasons = [t.r1, t.r2, t.r3, t.r4];

  return (
    <div className="mt-12 p-6 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-md">
      <h3 className="text-lg font-bold text-foreground mb-6">{t.title}</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {reasons.map((reason, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{reason}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
