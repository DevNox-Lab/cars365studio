import { useState, useEffect, useRef, useCallback } from 'react'
import { usePackageBuilderContext } from '../context/PackageBuilderContext';

const WHATSAPP_NUMBER = '971544541345'

// ─────────────────────────────────────────────────────────────────────────────
// Before / After Slider
// ─────────────────────────────────────────────────────────────────────────────
function BeforeAfterSlider({ gallery, serviceId }) {
  const [sliderPos, setSliderPos] = useState(50)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  // Reset to centre whenever the service or gallery pair changes
  useEffect(() => {
    setSliderPos(50)
    setGalleryIndex(0)
  }, [serviceId])

  useEffect(() => {
    setSliderPos(50)
  }, [galleryIndex])

  const currentPair = gallery?.[galleryIndex] ?? {}

  // ── Shared position calculator ───────────────────────────────────────────
  const calcPos = useCallback((clientX) => {
    if (!containerRef.current) return 50
    const { left, width } = containerRef.current.getBoundingClientRect()
    return Math.max(0, Math.min(100, ((clientX - left) / width) * 100))
  }, [])

  // ── Mouse handlers ───────────────────────────────────────────────────────
  const onMouseDown = useCallback(
    (e) => {
      e.preventDefault()
      setIsDragging(true)
      setSliderPos(calcPos(e.clientX))
    },
    [calcPos]
  )

  const onMouseMove = useCallback(
    (e) => {
      if (!isDragging) return
      setSliderPos(calcPos(e.clientX))
    },
    [isDragging, calcPos]
  )

  const onMouseUp = useCallback(() => setIsDragging(false), [])

  // ── Touch handlers ───────────────────────────────────────────────────────
  const onTouchStart = useCallback(
    (e) => {
      setIsDragging(true)
      setSliderPos(calcPos(e.touches[0].clientX))
    },
    [calcPos]
  )

  const onTouchMove = useCallback(
    (e) => {
      if (!isDragging) return
      // Prevent page scroll while dragging the slider
      e.preventDefault()
      setSliderPos(calcPos(e.touches[0].clientX))
    },
    [isDragging, calcPos]
  )

  const onTouchEnd = useCallback(() => setIsDragging(false), [])

  return (
    <div className="flex flex-col h-full bg-surface-container-lowest">
      {/* ── Comparison area ── */}
      <div
        ref={containerRef}
        className="relative flex-1 aspect-[4/3] md:aspect-auto overflow-hidden select-none"
        style={{ touchAction: 'none', cursor: isDragging ? 'ew-resize' : 'default' }}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        aria-label="Before and after comparison slider"
      >
        {/* BEFORE — base layer */}
        {currentPair.before ? (
          <img
            src={currentPair.before}
            alt="Before treatment"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-outline text-4xl">image</span>
          </div>
        )}

        {/* AFTER — clipped on top */}
        {currentPair.after && (
          <img
            src={currentPair.after}
            alt="After treatment"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          />
        )}

        {/* ── Drag handle ── */}
        <div
          className="absolute top-0 bottom-0 z-10 flex items-center justify-center"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        >
          {/* Thin gold dividing line */}
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-primary shadow-[0_0_8px_rgba(233,193,118,0.6)]" />

          {/* Circular grip */}
          <button
            type="button"
            aria-label="Drag to compare before and after"
            className="relative z-10 w-9 h-9 rounded-full bg-primary border-2 border-white/30 flex items-center justify-center shadow-xl cursor-ew-resize focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
          >
            <span
              className="material-symbols-outlined text-on-primary"
              style={{ fontSize: '17px', fontVariationSettings: "'FILL' 1" }}
            >
              swap_horiz
            </span>
          </button>
        </div>

        {/* BEFORE label */}
        <div className="absolute bottom-3 left-3 z-20 pointer-events-none">
          <span className="font-mono text-[9px] text-white uppercase tracking-widest px-2.5 py-1 bg-black/70 backdrop-blur-sm rounded-full">
            BEFORE
          </span>
        </div>

        {/* AFTER label */}
        <div className="absolute bottom-3 right-3 z-20 pointer-events-none">
          <span className="font-mono text-[9px] text-white uppercase tracking-widest px-2.5 py-1 bg-black/70 backdrop-blur-sm rounded-full">
            AFTER
          </span>
        </div>
      </div>

      {/* ── Gallery dot indicators (only when multiple pairs) ── */}
      {gallery && gallery.length > 1 && (
        <div className="flex items-center justify-center gap-2 py-3 shrink-0 border-t border-border-highlight">
          {gallery.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setGalleryIndex(i)}
              aria-label={`Gallery pair ${i + 1}`}
              className={`rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${
                i === galleryIndex
                  ? 'w-6 h-1.5 bg-primary'
                  : 'w-2 h-2 bg-outline hover:bg-on-surface-variant'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Checklist row shared by "What's Included" and "Why CARS365"
// ─────────────────────────────────────────────────────────────────────────────
function CheckRow({ text }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="material-symbols-outlined text-primary text-base shrink-0 mt-0.5"
        style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}
      >
        check_circle
      </span>
      <span className="font-body text-sm text-on-surface leading-relaxed">{text}</span>
    </li>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Modal
// ─────────────────────────────────────────────────────────────────────────────
export default function ServiceModal({ service, isOpen, onClose }) {
  const [visible, setVisible] = useState(false)
  const panelRef = useRef(null)
  const closeButtonRef = useRef(null)
  const { addService } = usePackageBuilderContext();

  function handleAddToCart() {
    addService(service.id);
    onClose();
  }

  // ── Body scroll lock + entrance animation trigger ──────────────────────────
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Double rAF ensures the element is painted before the class change
      // that triggers the CSS transition
      const raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => setVisible(true))
      )
      return () => {
        cancelAnimationFrame(raf)
        document.body.style.overflow = ''
      }
    } else {
      setVisible(false)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // ── Focus close button once animation has started ─────────────────────────
  useEffect(() => {
    if (!isOpen) return
    const t = setTimeout(() => closeButtonRef.current?.focus(), 60)
    return () => clearTimeout(t)
  }, [isOpen])

  // ── ESC key + basic focus trap ────────────────────────────────────────────
  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key !== 'Tab' || !panelRef.current) return

      const focusable = [
        ...panelRef.current.querySelectorAll(
          'button:not([disabled]), [href]:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ),
      ]
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Don't render anything when closed
  if (!isOpen || !service) return null

  const whatsAppMsg = `Hello Cars365 Studio! I'm interested in booking the ${service.name} service. Could you please provide more details and availability?`
  const whatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsAppMsg)}`

  return (
    <>
      {/* ── Full-screen overlay ── */}
      <div
        className={`
          fixed inset-0 z-[100]
          flex items-end md:items-center justify-center
          p-0 md:p-6
          transition-opacity duration-300 motion-reduce:transition-none
          ${visible ? 'opacity-100' : 'opacity-0'}
        `}
        role="dialog"
        aria-modal="true"
        aria-label={`${service.name} service details`}
        onClick={onClose}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* ── Modal panel ── */}
        <div
          ref={panelRef}
          className={`
            relative z-10
            w-full md:max-w-4xl md:mx-auto
            bg-surface-container-low
            border border-border-highlight
            rounded-t-2xl md:rounded-xl
            flex flex-col md:flex-row
            max-h-[92vh] md:max-h-[85vh]
            overflow-hidden
            transition-all duration-300 ease-out
            motion-reduce:transition-none motion-reduce:transform-none
            ${
              visible
                ? 'translate-y-0 md:scale-100 opacity-100'
                : 'translate-y-full md:translate-y-0 md:scale-95 opacity-0'
            }
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile drag pill */}
          <div
            className="md:hidden flex justify-center pt-3 pb-1 shrink-0"
            aria-hidden="true"
          >
            <div className="w-10 h-1 rounded-full bg-outline-variant" />
          </div>

          {/* ── Close button ── */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close service details"
            className="
              absolute top-3 right-3 z-20
              flex items-center justify-center w-8 h-8
              rounded-full bg-surface-container border border-border-highlight
              text-on-surface-variant hover:text-primary hover:border-primary
              transition-all duration-200
              focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none
            "
          >
            <span
              className="material-symbols-outlined text-xl"
              style={{ fontSize: '20px' }}
            >
              close
            </span>
          </button>

          {/* ── LEFT COLUMN: Before/After slider ── */}
          <div className="md:w-5/12 shrink-0 flex flex-col">
            <BeforeAfterSlider
              gallery={service.gallery}
              serviceId={service.id}
            />
          </div>

          {/* ── RIGHT COLUMN: Content (scrollable) ── */}
          <div className="flex-1 overflow-y-auto p-5 md:p-7 flex flex-col gap-5">
            {/* Header */}
            <div className="pr-8">
              <p className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-2">
                {service.category}
              </p>
              <h2 className="font-headline font-bold text-2xl md:text-3xl text-on-surface uppercase tracking-wide leading-tight mb-2">
                {service.name}
              </h2>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                {service.tagline}
              </p>
            </div>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] text-primary border border-outline-variant rounded-full px-3 py-1 tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-border-highlight shrink-0" />

            {/* What's Included */}
            {service.includes?.length > 0 && (
              <div>
                <p className="font-mono text-[10px] text-primary uppercase tracking-[0.25em] mb-3">
                  What&apos;s Included
                </p>
                <ul className="flex flex-col gap-2.5">
                  {service.includes.map((item) => (
                    <CheckRow key={item} text={item} />
                  ))}
                </ul>
              </div>
            )}

            {/* Why CARS365 */}
            {service.benefits?.length > 0 && (
              <div>
                <p className="font-mono text-[10px] text-primary uppercase tracking-[0.25em] mb-3">
                  Why CARS365
                </p>
                <ul className="flex flex-col gap-2.5">
                  {service.benefits.map((benefit) => (
                    <CheckRow key={benefit} text={benefit} />
                  ))}
                </ul>
              </div>
            )}

            {/* Pricing */}
            <div className="rounded-xl border border-border-highlight bg-surface-container px-4 py-3 flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[9px] text-on-surface-variant uppercase tracking-widest mb-1">
                  Starting From
                </p>
                <p className="font-headline font-bold text-3xl text-primary leading-none">
                  AED {service.basePrice.toLocaleString('en-AE')}
                </p>
                <p className="font-body text-[11px] italic text-on-surface-variant mt-1">
                  price varies by vehicle size
                </p>
              </div>
              <span
                className="material-symbols-outlined text-primary/40 shrink-0"
                style={{ fontSize: '40px' }}
              >
                {service.icon}
              </span>
            </div>

            {/* CTA */}
            <div className="mt-auto pt-1 flex flex-col gap-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className="
                  flex items-center justify-center gap-2
                  w-full
                  bg-on-surface text-surface
                  font-mono text-xs font-bold uppercase tracking-widest
                  px-6 py-3.5 rounded-full
                  hover:bg-on-surface-variant
                  transition-all duration-200
                  focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-on-surface focus-visible:ring-offset-surface-container-low focus-visible:outline-none
                "
              >
                <span
                  className="material-symbols-outlined text-base"
                  style={{ fontSize: '18px' }}
                >
                  add_shopping_cart
                </span>
                Add to Cart
              </button>

              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-2
                  w-full
                  bg-primary text-on-primary
                  font-mono text-xs font-bold uppercase tracking-widest
                  px-6 py-3.5 rounded-full
                  hover:bg-amber-glow
                  transition-all duration-200
                  focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:ring-offset-surface-container-low focus-visible:outline-none
                  glow-effect-hover
                "
              >
                <span
                  className="material-symbols-outlined text-base"
                  style={{ fontSize: '18px' }}
                >
                  chat
                </span>
                Book This Service
              </a>
              <p className="font-body text-[11px] italic text-on-surface-variant text-center mt-1">
                We&apos;ll get back to you within 1 hour
              </p>
            </div>
          </div>
          {/* end right column */}
        </div>
        {/* end panel */}
      </div>
      {/* end overlay */}
    </>
  );
}
