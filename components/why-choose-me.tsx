'use client';

import { CheckCircle2 } from 'lucide-react';

export function WhyChooseMe() {
  const reasons = [
    'Réponse rapide sous 24h',
    'Devis gratuit et détaillé',
    'Suivi personnalisé du projet',
    'Support post-livraison',
  ];

  return (
    <div className="mt-12 p-6 rounded-xl border border-border/50 bg-secondary/20">
      <h3 className="text-lg font-bold text-foreground mb-6">Pourquoi me choisir ?</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {reasons.map((reason) => (
          <div key={reason} className="flex items-center gap-3">
            <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
            <span className="text-muted-foreground">{reason}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
