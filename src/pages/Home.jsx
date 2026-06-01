import { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import PackageBuilder from '../components/PackageBuilder';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Home() {
  // Handle hash-based deep links when navigating from another page
  // e.g. user clicks "Services" in navbar while on /terms → lands at /#services
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const id = hash.slice(1);
    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (attempts < 8) {
        setTimeout(() => tryScroll(attempts + 1), 80);
      }
    };
    tryScroll();
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <PackageBuilder />
      <Experience />
      <Contact />
    </>
  );
}
