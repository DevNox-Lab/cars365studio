import { useState } from 'react';
import { Link } from 'react-router-dom';
import services from '../data/services';
import ServiceModal from './ServiceModal';

// ── Per-service hero images (visual-only, not stored in data layer) ───────────
const CARD_IMAGE = {
  'front-ppf': '/public/images1/Full Front PPF cars365Studio.webp',
  'full-ppf': '/public/images1/Full Body PPF cars365Studio.webp',
  ceramic: '/public/images1/Ceramic Coating cars365Studio.webp',
  wrap: '/public/images1/Full Car Wrap cars365Studio.webp',
  tint: '/public/images1/Window Tinting cars365Studio.webp',
  polish: '',
  'interior-detailing':
    'https://plus.unsplash.com/premium_photo-1661909961389-7d501737abde?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'seat-upholstery':
    'https://images.pexels.com/photos/15526366/pexels-photo-15526366.jpeg',
  'dashboard-wrapping':
    'https://images.unsplash.com/photo-1549064233-945d7063292f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg',

  'accessory-roof-rack':
    'https://images.unsplash.com/photo-1583073438286-344990a97638?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'exhaust-catback':
    'https://cdn.pixabay.com/photo/2017/10/20/17/58/porsche-2872152_1280.jpg',
  'bodykit-full':
    'https://images.unsplash.com/photo-1625430854348-2391ff8f7053?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'carbon-hood':
    'https://images.unsplash.com/photo-1774317348829-45f3c9a4b45f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.unsplash.com/photo-1692089321052-d071866a300d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.unsplash.com/photo-1692089566248-fe87474129a0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80',

  'ecu-remap':
    'https://images.unsplash.com/photo-1659576048262-940d9c1c84fe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.unsplash.com/photo-1727893380169-4dda123e19f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://plus.unsplash.com/premium_photo-1682126117799-064f3f7a034e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'ambient-lighting':
    'https://images.unsplash.com/photo-1615135902020-f499dc74b655?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.unsplash.com/photo-1778938370787-427b11040c5d?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.unsplash.com/photo-1772555429170-be39986f4d99?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.unsplash.com/photo-1661220715153-95724e5f3500?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // 'https://images.unsplash.com/photo-1677137855528-81d64da55fe1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'custom-rims':
    // 'https://images.unsplash.com/photo-1610210629765-1317a26cbc14?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1762857362077-6efc4654e737?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'facelift-complete':
    // 'https://images.pexels.com/photos/17878183/pexels-photo-17878183.jpeg',
    'https://images.pexels.com/photos/14776716/pexels-photo-14776716.jpeg',

  'performance-parts':
    'https://images.unsplash.com/photo-1666554498255-5250121b4865?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'star-roof':
    'https://images.unsplash.com/photo-1776639520962-dad59bd15197?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'custom-consultation':
    'https://img.magnific.com/premium-photo/seller-buyer-auto-show_255667-1750.jpg',
  // 'https://images.pexels.com/photos/36730224/pexels-photo-36730224.jpeg',
  // 'https://img.magnific.com/premium-photo/picture-two-men-standing-inside-they-hold-journal-look-it-people-smile-they-stand-red-car-man-white-shirt-points-journal-smile_152404-5642.jpg',

  'leather-seat-install':
    'https://img.magnific.com/free-photo/luxury-car-interior-brown-black-colors_181624-31177.jpg?t=st=1780575408~exp=1780579008~hmac=39c2db29196de10ef47493480dc72edd81482c5157fe157e2c55bf9689b8e10b&w=2000',

  'roof-lining-replacement':
    'https://img.magnific.com/premium-photo/interior-design-modern-car-sunroof-incorporates-sleek-aesthetics-innovative-features_152904-56323.jpg',

  'steering-wheel-wrap':
    'https://images.unsplash.com/photo-1770588802071-4d2cc4f0328e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHN0ZWVyaW5nJTIwd2hlZWwlMjB3cmFwfGVufDB8fDB8fHww',

  'door-panel-custom':
    'https://images.unsplash.com/photo-1780296269515-0c8c068d0767?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'wide-body-kit':
    'https://images.unsplash.com/photo-1771556961902-4979a2ebd55f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'carbon-interior-trim':
    'https://img.magnific.com/premium-photo/car-automatic-shift-lever_466739-8645.jpg?w=2000',

  'headlight-upgrade':
    'https://img.magnific.com/premium-photo/hand-holding-headlight-dark-car_23-2147963066.jpg?w=2000',

  'wheel-alignment':
    'https://img.magnific.com/premium-photo/mechanic-using-computer-balancing-machine-car-wheel_695242-21394.jpg?w=2000',
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
