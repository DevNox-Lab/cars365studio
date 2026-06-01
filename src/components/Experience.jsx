import { useState } from 'react'

// ── Stats ───────────────────────────────────────────────────────────────────
const stats = [
  { value: '5+', label: 'Years Experience', sub: 'Premium Detailing' },
  { value: '1,200+', label: 'Vehicles Protected', sub: 'Since Founding' },
  { value: '100%', label: 'Client Satisfaction', sub: 'Guaranteed' },
  { value: '10 Yr', label: 'Warranty Offered', sub: 'On PPF & Coating' },
]

// ── Reviews ─────────────────────────────────────────────────────────────────
const reviews = [
  {
    id: 1,
    stars: 5,
    quote:
      '"The level of detail CARS365 STUDIO provides is unparalleled. My car looks better now than it did on the showroom floor. The ceramic coating finish is absolutely glass-like."',
    author: 'Marcello Rossi',
    role: 'Ferrari 488 Pista Owner',
    initials: 'MR',
  },
  {
    id: 2,
    stars: 5,
    quote:
      '"Complete interior restoration on my classic 911. They respected the history while bringing the materials back to pristine condition. Absolute specialists."',
    author: 'Julian Vane',
    role: 'Collector',
    initials: 'JV',
  },
  {
    id: 3,
    stars: 5,
    quote:
      '"Had the full body PPF installed on my new G-Wagon. The team was meticulous, the fitment was perfect. You genuinely cannot tell it\'s there — that\'s exactly the point."',
    author: 'Khalid Al Mansoori',
    role: 'Mercedes G63 AMG Owner',
    initials: 'KM',
  },
  {
    id: 4,
    stars: 5,
    quote:
      '"Professional from the first call to the final handover. My Lamborghini came back looking better than when I bought it. Worth every single dirham."',
    author: 'Ahmed Al Rashid',
    role: 'Lamborghini Urus Owner',
    initials: 'AR',
  },
]

// ── ReviewCard ───────────────────────────────────────────────────────────────
function ReviewCard({ review }) {
  return (
    <div className="flex flex-col gap-6 p-6 md:p-8 rounded-xl border border-border-highlight bg-surface-container">
      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: review.stars }).map((_, i) => (
          <span
            key={i}
            className="material-symbols-outlined text-primary text-xl"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}
          >
            star
          </span>
        ))}
      </div>

      {/* Quote */}
      <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed flex-1 italic">
        {review.quote}
      </p>

      {/* Divider */}
      <div className="h-px bg-border-highlight" />

      {/* Author */}
      <div className="flex items-center gap-4">
        {/* Avatar placeholder */}
        <div className="shrink-0 w-10 h-10 rounded bg-surface-container-high border border-border-highlight flex items-center justify-center">
          <span className="font-mono text-xs text-primary font-bold tracking-wide">
            {review.initials}
          </span>
        </div>
        <div>
          <p className="font-headline font-semibold text-sm text-on-surface uppercase tracking-wide">
            {review.author}
          </p>
          <p className="font-body text-xs text-outline mt-0.5">{review.role}</p>
        </div>
      </div>
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Experience() {
  const [current, setCurrent] = useState(0)
  const total = reviews.length

  function prev() {
    setCurrent((c) => (c - 1 + total) % total)
  }

  function next() {
    setCurrent((c) => (c + 1) % total)
  }

  // Show two adjacent reviews; wraps around
  const visibleReviews = [reviews[current], reviews[(current + 1) % total]]

  return (
    <section
      id="experience"
      className="bg-surface py-section-gap px-margin-mobile md:px-margin-desktop"
    >
      <div className="max-w-container-max mx-auto">
        {/* ── Stats row ─────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 mb-16 border-b border-border-highlight">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-1">
              <span className="font-headline font-bold text-4xl md:text-5xl text-primary leading-none">
                {stat.value}
              </span>
              <span className="font-mono text-[10px] text-on-surface uppercase tracking-widest mt-1">
                {stat.label}
              </span>
              <span className="font-body text-xs text-on-surface-variant">{stat.sub}</span>
            </div>
          ))}
        </div>

        {/* ── Heading ───────────────────────────────────────────────────────── */}
        <div className="text-center mb-12">
          <p className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-4">
            Client Stories
          </p>
          <h2 className="font-headline font-bold text-5xl md:text-6xl text-on-surface uppercase tracking-widest">
            THE VERDICT
          </h2>
        </div>

        {/* ── Review cards ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {visibleReviews.map((review, idx) => (
            <ReviewCard key={`${review.id}-${idx}`} review={review} />
          ))}
        </div>

        {/* ── Navigation ───────────────────────────────────────────────────── */}
        <div className="flex items-center justify-center gap-4">
          {/* Prev */}
          <button
            type="button"
            onClick={prev}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-border-highlight
                       text-on-surface-variant hover:border-primary hover:text-primary
                       transition-all duration-200 active:scale-90"
            aria-label="Previous reviews"
          >
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === current
                    ? 'w-6 h-1.5 bg-primary'
                    : 'w-1.5 h-1.5 bg-outline hover:bg-on-surface-variant'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-border-highlight
                       text-on-surface-variant hover:border-primary hover:text-primary
                       transition-all duration-200 active:scale-90"
            aria-label="Next reviews"
          >
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  )
}
