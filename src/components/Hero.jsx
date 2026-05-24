const TICKER_TEXT =
  "PPF \u2022 CERAMIC COATING \u2022 WRAPPING \u2022 POLISHING \u2022 WINDOW TINTING \u2022 ";

export default function Hero() {
  const tickerContent = TICKER_TEXT.repeat(8);

  return (
    <section
      id="hero"
      className="relative h-screen w-full bg-obsidian-deep overflow-hidden flex flex-col"
    >
      {/* ── Full-width background image ─────────────────────────────────────── */}
      <img
        src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=1920&auto=format&fit=crop&q=85"
        alt="Luxury car — CARS365 STUDIO"
        loading="eager"
        fetchpriority="high"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: "brightness(0.72) contrast(1.08) saturate(0.9)" }}
      />

      {/* ── Gradient layers ─────────────────────────────────────────────────── */}

      {/* Bottom fade — blends image seamlessly into obsidian-deep */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.92) 12%, rgba(8,8,8,0.55) 30%, rgba(8,8,8,0.15) 55%, transparent 75%)",
        }}
      />

      {/* Top vignette — keeps navbar area dark */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,8,8,0.65) 0%, transparent 25%)",
        }}
      />

      {/* Left vignette — text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(8,8,8,0.75) 0%, rgba(8,8,8,0.3) 35%, transparent 65%)",
        }}
      />

      {/* Subtle gold radial glow — centre-bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(233,193,118,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ── Main hero copy — bottom-left ────────────────────────────────────── */}
      <div className="absolute bottom-20 left-0 right-0 z-20 px-margin-mobile md:px-margin-desktop select-none">
        {/* Eyebrow */}
        <p className="font-mono text-xs tracking-[0.35em] text-primary uppercase mb-4">
          Dubai&apos;s Premier Detailing Studio
        </p>

        {/* Headline */}
        <h2
          className="font-headline font-bold text-on-surface uppercase leading-none mb-5"
          style={{ fontSize: "clamp(2.2rem, 5.5vw, 5rem)" }}
        >
          PROTECT. POLISH.
          <br />
          <span className="text-primary">PERFECT.</span>
        </h2>

        {/* Sub-row */}
        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-primary opacity-70" />
            <p className="font-mono text-xs text-on-surface-variant tracking-widest uppercase">
              Est. 2018
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-on-primary
                       font-mono text-xs font-bold uppercase tracking-widest
                       px-5 py-2.5 rounded-full hover:bg-primary-fixed
                       transition-colors duration-200"
          >
            <span className="material-symbols-outlined text-base">
              calendar_month
            </span>
            BOOK A SESSION
          </a>
        </div>
      </div>

      {/* ── Scrolling ticker bar — very bottom ──────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-surface-container-lowest/80 backdrop-blur-sm border-t border-border-highlight py-3">
        <div className="ticker-wrap">
          <span className="ticker font-mono text-xs text-primary tracking-[0.22em] uppercase">
            {tickerContent}
            {tickerContent}
          </span>
        </div>
      </div>
    </section>
  );
}
