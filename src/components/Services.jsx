import { useState } from 'react';
import { Link } from 'react-router-dom';
import services from '../data/services';
import ServiceModal from './ServiceModal';

// ── Per-service hero images (visual-only, not stored in data layer) ───────────
const CARD_IMAGE = {
  'front-ppf':
    'https://images.pexels.com/photos/20051468/pexels-photo-20051468.jpeg',
  'full-ppf':
    'https://images.pexels.com/photos/31154217/pexels-photo-31154217.jpeg',
  ceramic:
    'https://tedcardetailing.com/wp-content/uploads/2024/09/Untitled-design-33-1536x1024.jpg',
  wrap: 'https://images.pexels.com/photos/25213457/pexels-photo-25213457.jpeg',
  tint: 'https://images.pexels.com/photos/20522462/pexels-photo-20522462.jpeg',
  polish:
    'https://images.unsplash.com/photo-1708805282695-ef186db20192?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'interior-detailing':
    'https://plus.unsplash.com/premium_photo-1661909961389-7d501737abde?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'seat-upholstery':
    'https://images.pexels.com/photos/15526366/pexels-photo-15526366.jpeg',
  dashboardWrapping:
    'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg',
  'bodykit-full':
    'https://images.unsplash.com/photo-1625430854348-2391ff8f7053?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'carbon-hood':
    'https://images.unsplash.com/photo-1774317348829-45f3c9a4b45f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.unsplash.com/photo-1692089321052-d071866a300d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.unsplash.com/photo-1692089566248-fe87474129a0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80',
  'ecu-remap':
    // 'https://images.unsplash.com/photo-1727893380169-4dda123e19f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1682126117799-064f3f7a034e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.unsplash.com/photo-1659576048262-940d9c1c84fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'exhaust-catback':
    'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&q=80',
  'ambient-lighting':
    'https://images.unsplash.com/photo-1615135902020-f499dc74b655?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.unsplash.com/photo-1778938370787-427b11040c5d?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.unsplash.com/photo-1772555429170-be39986f4d99?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.unsplash.com/photo-1661220715153-95724e5f3500?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.unsplash.com/photo-1677137855528-81d64da55fe1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'custom-rims':
    // 'https://images.unsplash.com/photo-1610210629765-1317a26cbc14?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1762857362077-6efc4654e737?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  
};

// ── Service card ─────────────────────────────────────────────────────────────
function ServiceCard({ service, onViewDetails }) {
  const image = CARD_IMAGE[service.id] || CARD_IMAGE['front-ppf'];

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
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  // Extract unique tags
  const allTags = [
    'All',
    ...Array.from(new Set(services.flatMap((s) => s.tags))),
  ];

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = activeTag === 'All' || service.tags.includes(activeTag);
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

            {/* Tags Scrollable/Wrap */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`
                    font-mono text-[10px] md:text-xs uppercase tracking-widest px-4 md:px-6 py-2 md:py-2.5 rounded-full border transition-all duration-200
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
        )}

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedServices.length > 0 ? (
            displayedServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
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
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
