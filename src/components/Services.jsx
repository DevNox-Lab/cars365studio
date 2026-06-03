import { useState } from "react";
import { Link } from 'react-router-dom';
import services from "../data/services";
import ServiceModal from "./ServiceModal";

// ── Per-service hero images (visual-only, not stored in data layer) ───────────
const CARD_IMAGE = {
  "front-ppf":
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
  "full-ppf":
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
  ceramic:
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
  wrap: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  tint: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
  polish:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
};

// ── Service card ─────────────────────────────────────────────────────────────
function ServiceCard({ service, onViewDetails }) {
  const image = CARD_IMAGE[service.id] || CARD_IMAGE["front-ppf"];

  return (
    <article className="group relative overflow-hidden rounded-xl aspect-[1/1] select-none">
      {/* ── Background image: grayscale → colour on hover ── */}
      <img
        src={image}
        alt={service.name}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover
                   grayscale transition duration-700 ease-in-out
                   group-hover:grayscale-0 group-hover:scale-105"
      />

      {/* Permanent dark gradient so bottom text is always legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/35 to-black/10 pointer-events-none" />

      {/* Gold left-border accent — slides in on hover */}
      <div
        className="absolute left-0 top-8 bottom-8 w-0.5 bg-primary
                   scale-y-0 group-hover:scale-y-100
                   transition-transform duration-500 ease-in-out origin-bottom"
      />

      {/* Tag strip — fades in from top on hover */}
      <div
        className="absolute top-0 left-0 right-0 p-4 flex flex-wrap gap-1.5
                   opacity-0 group-hover:opacity-100
                   -translate-y-2 group-hover:translate-y-0
                   transition-all duration-500 ease-in-out"
      >
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[9px] text-primary border border-primary/50
                       rounded-full px-2 py-0.5 tracking-widest bg-black/60 backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom content — always present, extras reveal on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        {/* Category / number label */}
        <p className="font-mono text-[10px] text-primary uppercase tracking-[0.25em] mb-2">
          {service.category}
        </p>

        {/* Service name */}
        <h3
          className="font-headline font-semibold text-xl md:text-2xl text-white uppercase
                     tracking-wide leading-tight transition-colors duration-300
                     group-hover:text-primary"
        >
          {service.name}
        </h3>

        {/* Tagline — slides up on hover */}
        <p
          className="font-body text-xs text-white/60 mt-1 leading-relaxed
                     max-h-0 overflow-hidden group-hover:max-h-10
                     transition-all duration-500 ease-in-out"
        >
          {service.tagline}
        </p>

        {/* "View Details" pill — fades in on hover */}
        <div
          className="mt-3
                     opacity-0 group-hover:opacity-100
                     translate-y-1 group-hover:translate-y-0
                     transition-all duration-300 ease-out"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(service);
            }}
            className="
              font-mono text-[11px] uppercase tracking-wider
              px-4 py-1.5 rounded-full
              border border-outline-variant text-on-surface-variant
              hover:border-primary hover:text-primary
              transition-all duration-200
              focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none
              glow-effect-hover
            "
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function Services({ limit }) {
  const [selectedService, setSelectedService] = useState(null);

  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section
      id="services"
      className="bg-obsidian-deep py-section-gap px-margin-mobile md:px-margin-desktop"
    >
      <div className="max-w-container-max mx-auto">
        {/* ── Section header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          {/* Left */}
          <div>
            <p className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-3">
              What We Do
            </p>
            <h2 className="font-headline font-bold text-5xl md:text-6xl text-on-surface uppercase leading-none tracking-wide mb-4">
              OUR ARSENAL
            </h2>
            <p className="font-body text-on-surface-variant text-sm max-w-sm leading-relaxed">
              Our specialized treatments are designed for those who demand
              nothing less than perfection for their high-value automotive
              assets.
            </p>
          </div>

          {/* Right — CTA */}
          {limit && (
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 font-mono text-xs text-primary uppercase
                         tracking-widest border-b border-primary/40 pb-0.5
                         hover:border-primary transition-colors duration-200 shrink-0"
            >
              VIEW ALL SERVICES
              <span
                className="material-symbols-outlined text-base transition-transform duration-200
                           group-hover:translate-x-1"
              >
                arrow_forward
              </span>
            </Link>
          )}
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onViewDetails={setSelectedService}
            />
          ))}
        </div>
      </div>

      {/* ── Service detail modal ── */}
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
