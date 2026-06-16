import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { usePackageBuilderContext } from '../context/PackageBuilderContext';
import { LuCalendarDays } from 'react-icons/lu';
import { MdOutlineShoppingCart } from 'react-icons/md';

// Hash links always use the absolute /#hash form so they work from any page.
// On the home page this is just a same-document hash change (no reload);
// from a sub-page React Router navigates to / and the browser jumps to the anchor.
const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Contact', hash: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const { setIsCartOpen, selectedServiceIds } = usePackageBuilderContext();

  useEffect(() => {
    // Close mobile menu and reset scroll state on route change
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On the home page use bare hashes (smooth-scroll in place);
  // on sub-pages prefix with / so the browser navigates home first.
  const getHref = (hash) => (isHome ? hash : `/${hash}`);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-surface-glass backdrop-blur-md border-b border-border-highlight'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between h-16">
        {/* Logo — always links to home */}
        {/* <Link
          to="/"
          className="flex items-center gap-2 group"
          aria-label="CARS365 STUDIO home"
        >
          <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform duration-200">
            directions_car
          </span>
          <span className="font-headline font-bold text-xl tracking-widest text-primary">
            CARS365 STUDIO
          </span>
        </Link> */}
        <div>
          <img
            src="/public/images/Logo image/123.png"
            alt="CARS365 STUDIO logo"
            className="h-39 w-40"
          />
        </div>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.to ? (
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-xs uppercase tracking-widest transition-colors duration-200 pb-1 text-on-surface-variant hover:text-primary"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={getHref(link.hash)}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-xs uppercase tracking-widest transition-colors duration-200 pb-1 text-on-surface-variant hover:text-primary"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Cart Icon */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center justify-center w-10 h-10 rounded-full bg-surface-container border border-border-highlight text-on-surface-variant hover:text-primary hover:border-primary transition-all duration-200 group"
            aria-label="View cart"
          >
            <span className="material-symbols-outlined text-xl">
              <MdOutlineShoppingCart />
            </span>
            {selectedServiceIds.size > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-on-primary">
                {selectedServiceIds.size}
              </span>
            )}
          </button>

          {/* Booking CTA */}
          <a
            href={getHref('#contact')}
            className="inline-flex items-center gap-2 bg-primary text-on-primary font-mono text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full hover:bg-primary-fixed transition-colors duration-200"
          >
            <LuCalendarDays className="w-3.5 h-3.5" />
            BOOK SESSION
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center justify-center w-10 h-10 rounded-full bg-surface-container border border-border-highlight text-white"
            aria-label="View cart"
          >
            <span className="material-symbols-outlined text-xl text-white">
              shopping_cart
            </span>
            {selectedServiceIds.size > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-on-primary">
                {selectedServiceIds.size}
              </span>
            )}
          </button>

          <button
            className="flex items-center justify-center w-10 h-10 rounded text-on-surface hover:text-primary transition-colors duration-200"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-margin-mobile py-6 flex flex-col gap-4 bg-surface-container border-t border-border-highlight shadow-xl">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.to ? (
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="block font-mono text-sm uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={getHref(link.hash)}
                  onClick={() => setMenuOpen(false)}
                  className="block font-mono text-sm uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
          <li className="pt-2">
            <a
              href={getHref('#contact')}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-primary text-on-primary font-mono text-xs font-bold uppercase tracking-widest px-5 py-4 rounded-full"
            >
              <span className="text-base">
                {/* <img
                  src="../../public/images/icons/calendar_black.png"
                  alt="Calendar Icon"
                  className="w-5 h-5"
                /> */}
              </span>
              BOOK SESSION
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
