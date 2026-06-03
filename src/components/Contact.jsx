import { useState } from 'react'
import { usePackageBuilderContext } from '../context/PackageBuilderContext'

export default function Contact() {
  const { getWhatsAppUrl } = usePackageBuilderContext()

  const [form, setForm] = useState({
    name: '',
    phone: '',
    vehicleDetails: '',
    preferredDate: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const url = getWhatsAppUrl(form.name, form.phone)
    // Append vehicle details and date to the URL message
    const extra = `\nVehicle: ${form.vehicleDetails || 'N/A'}\nPreferred Date: ${form.preferredDate || 'N/A'}`
    const finalUrl = url.replace(
      /&text=(.*)$/,
      (_, encoded) => `&text=${encodeURIComponent(decodeURIComponent(encoded) + extra)}`
    )
    window.open(finalUrl, '_blank', 'noopener,noreferrer')
  }

  const inputClass =
    'w-full bg-surface-container border border-border-highlight rounded-xl px-4 py-3 font-body text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200'

  return (
    <section
      id="contact"
      className="bg-surface-container-lowest py-section-gap px-margin-mobile md:px-margin-desktop"
    >
      <div className="max-w-container-max mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-4">
            Get In Touch
          </p>
          <h2 className="font-headline font-bold text-5xl md:text-6xl text-on-surface uppercase tracking-wide">
            BOOK A SESSION
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Studio info */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="font-headline font-bold text-2xl text-primary uppercase tracking-widest mb-3">
                CARS365 STUDIO
              </p>
              <p className="font-body text-on-surface-variant text-base leading-relaxed max-w-sm">
                Dubai&apos;s leading premium car protection studio. From invisible PPF to full
                custom wraps — we protect and transform every vehicle with obsessive precision.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-2xl shrink-0 mt-0.5">
                location_on
              </span>
              <div>
                <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-1">
                  Location
                </p>
                <p className="font-body text-on-surface text-sm leading-relaxed">
                  Unit 12, Al Quoz Industrial Area 3<br />
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-2xl shrink-0 mt-0.5">
                schedule
              </span>
              <div>
                <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-1">
                  Studio Hours
                </p>
                <p className="font-body text-on-surface text-sm leading-relaxed">
                  Mon – Sat: 8:00 AM – 8:00 PM<br />
                  Sunday: 10:00 AM – 6:00 PM
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-2xl shrink-0 mt-0.5">
                phone
              </span>
              <div>
                <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-1">
                  Call / WhatsApp
                </p>
                <a
                  href="tel:+971500000000"
                  className="font-body text-on-surface text-sm hover:text-primary transition-colors duration-200"
                >
                  +971 50 000 0000
                </a>
              </div>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-border-highlight" />
              <span className="material-symbols-outlined text-primary text-base">star</span>
              <div className="h-px flex-1 bg-border-highlight" />
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {[
                'Certified Installer',
                'XPEL Authorized',
                '10 Yr Warranty',
                'ISO 9001',
              ].map((badge) => (
                <span
                  key={badge}
                  className="font-mono text-[10px] text-primary border border-outline-variant rounded-full px-3 py-1 tracking-widest uppercase"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest block mb-2"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Mohammed Al Rashid"
                  className={inputClass}
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest block mb-2"
                >
                  Phone / WhatsApp
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+971 50 000 0000"
                  className={inputClass}
                  required
                />
              </div>

              {/* Vehicle Details */}
              <div>
                <label
                  htmlFor="contact-vehicle"
                  className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest block mb-2"
                >
                  Vehicle Details (Year / Make / Model)
                </label>
                <input
                  id="contact-vehicle"
                  type="text"
                  name="vehicleDetails"
                  value={form.vehicleDetails}
                  onChange={handleChange}
                  placeholder="e.g. 2023 Mercedes GLE 450"
                  className={inputClass}
                />
              </div>

              {/* Preferred Date */}
              <div>
                <label
                  htmlFor="contact-date"
                  className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest block mb-2"
                >
                  Preferred Date
                </label>
                <input
                  id="contact-date"
                  type="date"
                  name="preferredDate"
                  value={form.preferredDate}
                  onChange={handleChange}
                  className={inputClass + ' [color-scheme:dark]'}
                />
              </div>

              {/* Note */}
              <p className="font-mono text-[10px] text-outline leading-relaxed">
                Submitting will open WhatsApp with your details pre-filled. Our team will
                confirm your appointment within 2 hours.
              </p>

              {/* Submit */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 border-2 border-primary text-primary font-mono text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full hover:bg-primary hover:text-on-primary active:scale-95 transition-all duration-200 mt-2"
              >
                <span className="material-symbols-outlined text-base">send</span>
                REQUEST CALLBACK
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
