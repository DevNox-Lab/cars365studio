const TICKER_TEXT =
  'PPF \u2022 CERAMIC COATING \u2022 WRAPPING \u2022 POLISHING \u2022 WINDOW TINTING \u2022 '

export default function Hero() {
  // Duplicate the text so the seamless loop works
  const tickerContent = TICKER_TEXT.repeat(6)

  return (
    <section
      id="hero"
      className="relative h-screen w-full bg-obsidian-deep overflow-hidden flex flex-col"
    >
      {/* Radial background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(233, 193, 118, 0.06) 0%, transparent 70%)',
        }}
      />

      {/* Ghosted background headline text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none px-4">
        <h1
          className="font-headline font-bold text-center leading-none tracking-tight"
          style={{
            fontSize: 'clamp(3rem, 12vw, 11rem)',
            color: 'rgba(233, 193, 118, 0.10)',
            lineHeight: 0.9,
          }}
        >
          PROTECT.
          <br />
          POLISH.
          <br />
          PERFECT.
        </h1>
      </div>

      {/* Car image — centered, with drop shadow */}
      <div className="flex-1 flex items-center justify-center relative z-10 px-4">
        <div className="relative w-full max-w-4xl">
          {/* Subtle ground reflection */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(233,193,118,0.12) 0%, transparent 70%)',
              filter: 'blur(12px)',
            }}
          />
          <img
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&auto=format&fit=crop&q=80"
            alt="Luxury car — CARS365 STUDIO"
            className="w-full h-auto object-contain relative z-10"
            style={{
              filter:
                'drop-shadow(0 30px 60px rgba(0,0,0,0.9)) drop-shadow(0 0 40px rgba(233,193,118,0.08))',
            }}
            loading="eager"
          />
        </div>
      </div>

      {/* Hero text overlay — bottom-left */}
      <div className="absolute bottom-24 left-0 right-0 z-20 px-margin-mobile md:px-margin-desktop pointer-events-none select-none">
        <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-2">
          Dubai&apos;s Premier Detailing Studio
        </p>
        <div className="flex items-center gap-4">
          <div className="w-8 h-px bg-primary opacity-60" />
          <p className="font-mono text-xs text-on-surface-variant tracking-widest uppercase">
            Est. 2018
          </p>
        </div>
      </div>

      {/* Scrolling ticker bar — bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-surface-container-lowest border-t border-border-highlight py-3">
        <div className="ticker-wrap">
          <span className="ticker font-mono text-xs text-primary tracking-[0.2em] uppercase">
            {tickerContent}
            {tickerContent}
          </span>
        </div>
      </div>
    </section>
  )
}
