'use client';

export function Footer() {
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
    <footer className="relative lg:ml-64 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20">
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

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div style={{ animation: 'fadeInUp 0.6s ease-out' }}>
            <h3 className="text-lg font-bold text-accent mb-4">Armel Rantomahampy</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Développeur en apprentissage créant des expériences digitales modernes. Passionné par React Native
              et Next.js.
            </p>
          </div>

          {/* Navigation */}
          <div style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2026 Armel Rantomahampy. Tous droits réservés.</p>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
              Retour en haut
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
