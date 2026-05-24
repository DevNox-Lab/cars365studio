const serviceCards = [
  {
    id: "front-ppf",
    num: "01",
    category: "PROTECTION",
    title: "Full Front PPF",
    description: "Bumper, Hood, Fenders, Mirrors",
    tags: ["SELF-HEALING", "INVISIBLE"],
    icon: "layers",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
  },
  {
    id: "full-ppf",
    num: "02",
    category: "PROTECTION",
    title: "Full Body PPF",
    description: "Complete exterior coverage",
    tags: ["SELF-HEALING", "10 YR WARRANTY"],
    icon: "layers",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
  },
  {
    id: "ceramic",
    num: "03",
    category: "CERAMIC",
    title: "Ceramic Coating",
    description: "Paint, Wheels, Glass",
    tags: ["9H HARDNESS", "HYDROPHOBIC"],
    icon: "water_drop",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
  },
  {
    id: "wrap",
    num: "04",
    category: "WRAPPING",
    title: "Full Car Wrap",
    description: "Matte, Satin, Gloss or Texture",
    tags: ["CUSTOM COLORS", "REVERSIBLE"],
    icon: "palette",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  },
  {
    id: "tint",
    num: "05",
    category: "TINTING",
    title: "Window Tinting",
    description: "Full vehicle, ceramic grade",
    tags: ["UV BLOCK", "HEAT REJECT"],
    icon: "wb_sunny",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
  },
  {
    id: "polish",
    num: "06",
    category: "DETAILING",
    title: "Paint Correction",
    description: "2-stage machine polish & decontamination",
    tags: ["SWIRL FREE", "HIGH GLOSS"],
    icon: "auto_fix_high",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

function ServiceCard({ num, category, title, description, tags, image }) {
  return (
    <article className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[1/1] select-none">
      {/* ── Image: grayscale → colour on hover ── */}
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover
                   grayscale transition duration-700 ease-in-out
                   group-hover:grayscale-0 group-hover:scale-105"
      />

      {/* Permanent dark vignette so text is always readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 pointer-events-none" />

      {/* Gold left-border accent — visible on hover */}
      <div
        className="absolute left-0 top-8 bottom-8 w-0.5 bg-primary
                   scale-y-0 group-hover:scale-y-100
                   transition-transform duration-500 ease-in-out origin-bottom"
      />

      {/* Top tag strip — visible on hover */}
      <div
        className="absolute top-0 left-0 right-0 p-4 flex flex-wrap gap-1.5
                   opacity-0 group-hover:opacity-100
                   -translate-y-2 group-hover:translate-y-0
                   transition-all duration-500 ease-in-out"
      >
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[9px] text-primary border border-primary/50
                       rounded-full px-2 py-0.5 tracking-widest bg-black/60 backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom content — always visible */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <p className="font-mono text-[10px] text-primary uppercase tracking-[0.25em] mb-2">
          {num}&nbsp;/&nbsp;{category}
        </p>
        <h3
          className="font-headline font-semibold text-xl md:text-2xl text-white uppercase
                     tracking-wide leading-tight transition-colors duration-300
                     group-hover:text-primary"
        >
          {title}
        </h3>

        {/* Description slides in on hover */}
        <p
          className="font-body text-xs text-white/60 mt-1 leading-relaxed
                     max-h-0 overflow-hidden group-hover:max-h-12
                     transition-all duration-500 ease-in-out"
        >
          {description}
        </p>
      </div>
    </article>
  );
}

export default function Services() {
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
          <a
            href="#package-builder"
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
          </a>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceCards.map((card) => (
            <ServiceCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
