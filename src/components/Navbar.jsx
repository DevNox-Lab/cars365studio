import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Services', href: '#services' },
  // { label: 'Portfolio', href: '#portfolio' },
  // { label: 'Protection', href: '#protection' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('Services')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleLinkClick(label) {
    setActiveLink(label)
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-glass backdrop-blur-md border-b border-border-highlight'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" aria-label="CARS365 STUDIO home">
          <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform duration-200">
            directions_car
          </span>
          <span className="font-headline font-bold text-xl tracking-widest text-primary">
            CARS365 STUDIO
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => handleLinkClick(link.label)}
                className={`font-mono text-xs uppercase tracking-widest transition-colors duration-200 pb-1 ${
                  activeLink === link.label
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-on-primary font-mono text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full hover:bg-primary-fixed transition-colors duration-200"
        >
          <span className="material-symbols-outlined text-base">calendar_month</span>
          BOOK SESSION
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded text-on-surface hover:text-primary transition-colors duration-200"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="material-symbols-outlined text-2xl">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-surface-glass backdrop-blur-md border-b border-border-highlight px-margin-mobile py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => handleLinkClick(link.label)}
              className={`font-mono text-sm uppercase tracking-widest py-2 border-b border-border-highlight last:border-none transition-colors duration-200 ${
                activeLink === link.label
                  ? 'text-primary'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-mono text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full mt-2 hover:bg-primary-fixed transition-colors duration-200"
          >
            <span className="material-symbols-outlined text-base">calendar_month</span>
            BOOK SESSION
          </a>
        </div>
      </div>
    </header>
  )
}
