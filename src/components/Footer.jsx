const serviceLinks = [
  { label: 'Ceramic Coating', href: '#services' },
  { label: 'Paint Protection Film', href: '#services' },
  { label: 'Interior Detailing', href: '#services' },
  { label: 'Window Tinting', href: '#services' },
]

const companyLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Portfolio', href: '#' },
  { label: 'Contact', href: '#contact' },
  { label: 'Membership', href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-obsidian-deep border-t border-border-highlight">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column — spans 2 on large */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 w-fit group">
              <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform duration-200">
                directions_car
              </span>
              <span className="font-headline font-bold text-xl tracking-widest text-primary">
                CARS365 STUDIO
              </span>
            </a>

            {/* Tagline */}
            <p className="font-body text-on-surface-variant text-sm leading-relaxed max-w-xs">
              Dubai&apos;s premier destination for paint protection, ceramic coatings, and custom
              vehicle transformations. Protecting what drives you.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              {[
                { icon: 'photo_camera', label: 'Instagram' },
                { icon: 'chat', label: 'WhatsApp' },
                { icon: 'play_circle', label: 'YouTube' },
              ].map(({ icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-border-highlight text-on-surface-variant hover:border-primary hover:text-primary transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-base">{icon}</span>
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="font-mono text-[10px] text-outline uppercase tracking-widest mt-2">
              &copy; {year} CARS365 STUDIO. All rights reserved.
            </p>
          </div>

          {/* Services column */}
          <div>
            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-6">
              Services
            </p>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-6">
              Company
            </p>
            <ul className="flex flex-col gap-3">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border-highlight flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-outline uppercase tracking-widest">
            Certified Installer &bull; XPEL Authorized Partner &bull; ISO 9001
          </p>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-outline uppercase tracking-widest">
              Made with
            </span>
            <span className="material-symbols-outlined text-primary text-sm">favorite</span>
            <span className="font-mono text-[10px] text-outline uppercase tracking-widest">
              in Dubai
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
