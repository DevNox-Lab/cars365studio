import { useState } from 'react';
import { Link } from 'react-router-dom';
import services from '../data/services';
import ServiceModal from './ServiceModal';

// ── Per-service hero images (visual-only, not stored in data layer) ───────────
const CARD_IMAGE = {
  'front-ppf': '/images/Full Front PPF cars365Studio.webp',
  'full-ppf': '/images/Full Body PPF cars365Studio.webp',
  'color-PPF': '/images/Color PPF cars365Studio.webp',
  ceramic: '/images/Ceramic Coating cars365Studio.webp',
  wrap: '/images/Full Car Wrap cars365Studio.webp',
  tint: '/images/Window Tinting cars365Studio.webp',
  polish: '/images/Paint Correction cars365Studio.webp',
  'interior-detailing': '/images/Interior Detailing cars365Studio.webp',
  'seat-upholstery': '/images/Seat Upholstery Replacement cars365Studio.webp',
  'dashboard-wrapping': '/images/Dashboard wrapping cars365Studio.webp',

  'accessory-roof-rack': '/images/Roof Rack Installation cars365Studio.webp',

  'exhaust-catback': '/images/Cat-Back Exhaust Installation Cars365Studio.webp',
  'bodykit-full': '/images/Full Body Kit Installation cars365Studio.webp',

  'carbon-hood': '/images/Carbon fiber hood Installation cars365Studio.webp',

  'ecu-remap': '/images/ECU Remapping cars365Studio.webp',

  'ambient-lighting':
    '/images/Ambient Lighting Installation cars365Studio.webp',

  'custom-rims': '/images/Custom Wheel Installation cars365Studio.webp',

  'facelift-complete':
    '/images/Complete Facelift Conversion cars365Studio.webp',

  'performance-parts':
    '/images/Performance Parts Installation cars365studio.webp',

  'star-roof': '/images/Starlight Headliner Installation cars365Studio.webp',

  'custom-consultation':
    '/images/Vehicle Customization Consultation cars365Studio.webp',

  'leather-seat-install':
    '/images/Leather Seat Installation cars365Studio.webp',

  'roof-lining-replacement':
    '/images/Roof Lining Replacement cars365Studio.webp',

  'steering-wheel-wrap': '/images/Steering Wheel Wrap cars365Studio.webp',

  'door-panel-custom': '/images/Door Panel Customization cars365Studio.webp',

  'wide-body-kit': '/images/Wide Body Kit Installation cars365Studio.webp',

  'carbon-interior-trim':
    '/images/Carbon Fiber Interior Trim cars365Studio.webp',

  'headlight-upgrade': '/images/Headlight Upgrade cars365Studio.webp',

  'wheel-alignment': '/images/Wheel ALIGNMENT & BALANCING cars365Studio.webp',
};

// ── Service card ─────────────────────────────────────────────────────────────
function ServiceCard({ service, index, onViewDetails }) {
  const image = CARD_IMAGE[service.id] || CARD_IMAGE['front-ppf'];

  const rawLabel = service.category.includes(' / ')
    ? service.category.split(' / ')[1]
    : service.category;
  const dynamicCategory = `NO. ${index + 1} / ${rawLabel}`;

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
          {dynamicCategory}
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
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  // Extract unique tags
  const allTags = [
    'All',
    ...Array.from(new Set(services.flatMap((s) => s.category.split(' / ')[1]))),
  ];

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag =
      activeTag === 'All' || service.category.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  const displayedServices = limit
    ? filteredServices.slice(0, limit)
    : filteredServices;

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

        {/* ── Search & Filter ── */}
        {!limit && (
          <div className="mb-12">
            {/* Search Bar */}
            <div className="relative max-w-xl mb-8 group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
                search
              </span>
              <input
                type="text"
                placeholder="Search our arsenal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface-container border border-border-highlight rounded-full py-4 pl-12 pr-6 font-body text-sm text-on-surface placeholder:text-outline/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
              />
            </div>

            {/* Tags Scrollable */}
            <div className="flex overflow-x-auto no-scrollbar gap-2 md:gap-3 pb-2 -mx-2 px-2">
              <div className="flex gap-2 md:gap-3 shrink-0">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActiveTag(tag)}
                    className={`
                      font-mono text-[10px] md:text-xs uppercase tracking-widest px-4 md:px-6 py-2 md:py-2.5 rounded-full border transition-all duration-200 whitespace-nowrap
                      ${
                        activeTag === tag
                          ? 'bg-primary text-on-primary border-primary shadow-[0_0_15px_rgba(233,193,118,0.3)]'
                          : 'bg-transparent text-on-surface-variant border-outline-variant hover:border-primary hover:text-primary'
                      }
                    `}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedServices.length > 0 ? (
            displayedServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onViewDetails={setSelectedService}
              />
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <span className="material-symbols-outlined text-outline text-6xl mb-4">
                inventory_2
              </span>
              <p className="font-headline text-xl text-on-surface-variant uppercase tracking-widest">
                No services match your search
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveTag('All');
                }}
                className="mt-4 font-mono text-xs text-primary uppercase tracking-widest border-b border-primary/40 pb-0.5 hover:border-primary transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── Service detail modal ── */}
      <ServiceModal
        service={selectedService}
        serviceImage={
          selectedService
            ? CARD_IMAGE[selectedService.id] || CARD_IMAGE['front-ppf']
            : null
        }
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
