import { Link } from 'react-router-dom'

const EFFECTIVE_DATE = '1 January 2025'

// ── Section data ──────────────────────────────────────────────────────────────
const sections = [
  {
    num: '01',
    title: 'Introduction & Acceptance',
    content: [
      {
        type: 'p',
        text: 'These Terms and Conditions ("Terms") govern all services provided by CARS365 STUDIO ("we", "us", "our", "the Studio"), a premium automotive protection and detailing studio operating in Dubai, United Arab Emirates. By booking an appointment, dropping off your vehicle, or engaging with our services in any capacity, you ("the Customer") confirm that you have read, understood, and agreed to be bound by these Terms in their entirety.',
      },
      {
        type: 'p',
        text: 'If you do not agree with any part of these Terms, please refrain from booking or using our services. We reserve the right to refuse service to any person who does not comply with these Terms.',
      },
    ],
  },
  {
    num: '02',
    title: 'Our Services',
    content: [
      {
        type: 'p',
        text: 'CARS365 STUDIO provides the following automotive protection and enhancement services:',
      },
      {
        type: 'list',
        items: [
          'Paint Protection Film (PPF) — partial and full-body installation',
          'Ceramic Coating — single-layer, multi-layer, and graphene formulations',
          'Full Vehicle Wrapping — colour change, textured, and printed wraps',
          'Window Tinting — dyed, carbon, and ceramic-grade film',
          'Paint Correction & Machine Polishing — single-stage and multi-stage',
          'Interior Detailing — deep-clean extraction, leather conditioning, and odour treatment',
        ],
      },
      {
        type: 'p',
        text: 'Specific service details, materials used, and process timelines will be discussed with you at the time of booking or during your vehicle inspection. We reserve the right to decline a service if, in our professional assessment, the vehicle condition renders the service inadvisable or likely to produce unsatisfactory results.',
      },
    ],
  },
  {
    num: '03',
    title: 'Bookings & Appointments',
    content: [
      {
        type: 'p',
        text: 'All appointments must be pre-arranged via our website, WhatsApp, telephone, or in person at the studio. Walk-in services are subject to availability and cannot be guaranteed. The following conditions apply to all bookings:',
      },
      {
        type: 'list',
        items: [
          'A non-refundable booking deposit of 20% of the total estimated service cost is required to confirm your appointment.',
          'Appointments are provisional until the deposit is received.',
          'Final pricing is subject to physical vehicle inspection upon arrival and may differ from the online estimate.',
          'We will notify you of any pricing changes before commencing work, and you may cancel without penalty if you do not accept the revised price (less the deposit).',
          'Estimated service durations are provided in good faith. Complex jobs may require additional time; we will communicate any significant delays promptly.',
        ],
      },
    ],
  },
  {
    num: '04',
    title: 'Pricing & Payment',
    content: [
      {
        type: 'p',
        text: 'All prices quoted on our website and by our staff are denominated in UAE Dirhams (AED) and are inclusive of 5% Value Added Tax (VAT) in accordance with UAE Federal Tax Authority regulations. Our Tax Registration Number (TRN) is available upon request.',
      },
      {
        type: 'list',
        items: [
          'Full payment of the outstanding balance is due upon service completion before vehicle collection.',
          'We accept cash (AED), major credit and debit cards, and approved bank transfers.',
          'A VAT-compliant tax invoice will be issued for all services.',
          'Prices are subject to change without prior notice; however, any confirmed booking will be honoured at the quoted price.',
          'Disputes regarding invoiced amounts must be raised within 7 days of the invoice date.',
        ],
      },
    ],
  },
  {
    num: '05',
    title: 'Cancellations & Rescheduling',
    content: [
      {
        type: 'p',
        text: 'We understand that circumstances change. Our cancellation and rescheduling policy is as follows:',
      },
      {
        type: 'list',
        items: [
          'Cancellations made more than 48 hours before the scheduled appointment will receive a credit note equal to the deposit amount, redeemable against a future booking within 6 months.',
          'Cancellations made between 24 and 48 hours before the appointment will forfeit 50% of the deposit.',
          'Cancellations within 24 hours of the appointment, or no-shows without prior notice, will result in full forfeiture of the booking deposit.',
          'Rescheduling is permitted at no charge if requested more than 24 hours in advance, subject to availability.',
          'Each booking may be rescheduled a maximum of two times. Further rescheduling requests may require a new deposit.',
        ],
      },
    ],
  },
  {
    num: '06',
    title: 'Vehicle Drop-off & Collection',
    content: [
      {
        type: 'p',
        text: 'The following conditions govern the drop-off and collection of your vehicle:',
      },
      {
        type: 'list',
        items: [
          'Customers are responsible for arranging transport to and from the studio.',
          'You must present valid vehicle registration documents and a valid Emirates ID or passport upon drop-off.',
          'All personal belongings must be removed from the vehicle prior to drop-off. CARS365 STUDIO accepts no responsibility for items left in the vehicle.',
          'Vehicles must be collected within 48 hours of receiving our completion notification.',
          'A storage fee of AED 150 per calendar day will be applied to vehicles not collected within the 48-hour window.',
          'Vehicles abandoned on our premises for more than 14 days without communication may be reported to the relevant Dubai authorities.',
        ],
      },
    ],
  },
  {
    num: '07',
    title: 'Vehicle Condition & Pre-existing Damage',
    content: [
      {
        type: 'p',
        text: 'Prior to commencing any service, our technicians will conduct a thorough walk-around inspection of your vehicle. This inspection is documented with written notes and photographic/video evidence.',
      },
      {
        type: 'list',
        items: [
          'All pre-existing damage — including scratches, dents, paint chips, haze, delamination, rust, and windscreen damage — will be recorded and brought to your attention.',
          'You will be required to sign an Inspection Report acknowledging all documented pre-existing conditions.',
          'CARS365 STUDIO will not be held liable for any pre-existing damage identified and documented prior to service commencement.',
          'If significant hidden damage is discovered during the service process (e.g. beneath trim panels during a wrap), we will pause work, document the finding, and contact you immediately.',
          'Vehicles presented in a condition that could compromise service quality (e.g. heavily contaminated paintwork) may require preparatory services at an additional cost.',
        ],
      },
    ],
  },
  {
    num: '08',
    title: 'Service Warranties',
    content: [
      {
        type: 'p',
        text: 'CARS365 STUDIO stands behind the quality of its work and the materials used. The following warranties apply to our services:',
      },
      {
        type: 'list',
        items: [
          'Full Body Paint Protection Film: 10-year manufacturer warranty against yellowing, cracking, bubbling, peeling, and delamination under normal conditions.',
          'Ceramic Coating (5-Year): 5-year warranty covering loss of hydrophobic performance and significant reduction in gloss below the guaranteed threshold.',
          'Window Tinting: 3-year warranty against bubbling, peeling, and discolouration.',
          'Paint Correction: 30-day satisfaction guarantee against swirl marks or scratches introduced by our process.',
          'All other services: 30-day workmanship guarantee.',
        ],
      },
      {
        type: 'p',
        text: 'Warranties are void if: the vehicle has been subjected to automatic or abrasive car washes; non-approved chemical cleaners have been used; the vehicle has been involved in an accident affecting the protected surface; or if modifications have been made to the coated or wrapped surfaces without our consent. Warranty claims must be submitted in writing with photographic evidence within the warranty period.',
      },
    ],
  },
  {
    num: '09',
    title: 'Limitation of Liability',
    content: [
      {
        type: 'p',
        text: 'CARS365 STUDIO takes every reasonable precaution to protect your vehicle while in our care. However, our liability is subject to the following limitations:',
      },
      {
        type: 'list',
        items: [
          'Our total liability for any claim arising directly from our services shall not exceed the total amount paid by the Customer for the specific service in question.',
          'We shall not be liable for any indirect, consequential, incidental, or punitive damages, including but not limited to loss of use of the vehicle, loss of income, or depreciation in vehicle value.',
          'We are not liable for damage caused by circumstances beyond our reasonable control, including but not limited to extreme weather events, fire, flooding, or third-party criminal acts.',
          'Any damage claim must be raised in writing within 48 hours of vehicle collection. Claims raised after this period may not be accepted.',
        ],
      },
    ],
  },
  {
    num: '10',
    title: 'Insurance',
    content: [
      {
        type: 'p',
        text: 'CARS365 STUDIO maintains comprehensive public liability insurance covering our studio premises and operations. Vehicles on our premises are covered for accidental damage directly caused by our staff during the agreed service period.',
      },
      {
        type: 'p',
        text: 'Customers are responsible for maintaining their own comprehensive vehicle insurance at all times. CARS365 STUDIO is not responsible for any insurance excess, no-claims penalties, or consequential costs arising from a claim, even where we are found to be liable for the underlying damage.',
      },
    ],
  },
  {
    num: '11',
    title: 'Photography & Intellectual Property',
    content: [
      {
        type: 'p',
        text: 'CARS365 STUDIO may photograph and/or video your vehicle before, during, and after service for the purpose of quality documentation, warranty records, and marketing. By booking our services, you grant us a non-exclusive, royalty-free licence to use such media for promotional purposes across our website, social media, and marketing materials, unless you expressly opt out in writing at the time of drop-off.',
      },
      {
        type: 'p',
        text: 'All branding, logos, website content, and marketing materials produced by CARS365 STUDIO are the exclusive intellectual property of the company. Unauthorised reproduction or use is prohibited.',
      },
    ],
  },
  {
    num: '12',
    title: 'Governing Law & Dispute Resolution',
    content: [
      {
        type: 'p',
        text: 'These Terms and Conditions are governed by and construed in accordance with the laws of the United Arab Emirates and the Emirate of Dubai. Any dispute arising from or in connection with these Terms that cannot be resolved amicably shall be referred to the exclusive jurisdiction of the Dubai Courts.',
      },
      {
        type: 'p',
        text: 'We encourage customers to contact us directly in the first instance to resolve any concerns. We are committed to fair resolution and will respond to formal complaints within 5 business days.',
      },
    ],
  },
  {
    num: '13',
    title: 'Amendments to These Terms',
    content: [
      {
        type: 'p',
        text: 'CARS365 STUDIO reserves the right to amend these Terms at any time. The most current version will always be published on our website with a revised effective date. Your continued use of our services following any changes constitutes your acceptance of the revised Terms.',
      },
    ],
  },
]

// ── Sub-components ─────────────────────────────────────────────────────────────
function SectionBlock({ num, title, content }) {
  return (
    <div className="py-8 border-b border-border-highlight last:border-none">
      <div className="flex items-start gap-4 mb-4">
        <span className="font-mono text-xs text-primary shrink-0 mt-1 tracking-widest">
          {num}
        </span>
        <h2 className="font-headline font-semibold text-xl md:text-2xl text-on-surface uppercase tracking-wide">
          {title}
        </h2>
      </div>

      <div className="pl-8 flex flex-col gap-4">
        {content.map((block, i) => {
          if (block.type === 'p') {
            return (
              <p key={i} className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed">
                {block.text}
              </p>
            )
          }
          if (block.type === 'list') {
            return (
              <ul key={i} className="flex flex-col gap-2.5">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-primary shrink-0 mt-1">
                      <span className="material-symbols-outlined text-base"
                        style={{ fontVariationSettings: "'FILL' 1" }}>
                        chevron_right
                      </span>
                    </span>
                    <span className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function TermsAndConditions() {
  return (
    <div className="bg-obsidian-deep min-h-screen">
      {/* ── Hero banner ── */}
      <div
        className="relative pt-24 pb-16 px-margin-mobile md:px-margin-desktop overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #0d0e10 0%, #121315 60%, rgba(233,193,118,0.04) 100%)',
        }}
      >
        {/* Decorative gold line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent opacity-40" />

        <div className="max-w-container-max mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link
              to="/"
              className="font-mono text-xs text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors duration-200 flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">home</span>
              Home
            </Link>
            <span className="material-symbols-outlined text-outline text-sm">
              chevron_right
            </span>
            <span className="font-mono text-xs text-primary uppercase tracking-widest">
              Terms & Conditions
            </span>
          </div>

          {/* Title */}
          <p className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-4">
            Legal Document
          </p>
          <h1
            className="font-headline font-bold text-on-surface uppercase leading-none mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Terms &amp;
            <br />
            Conditions
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-base">
                calendar_today
              </span>
              <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">
                Effective: {EFFECTIVE_DATE}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-base">
                location_on
              </span>
              <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">
                Dubai, United Arab Emirates
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="px-margin-mobile md:px-margin-desktop py-12">
        <div className="max-w-3xl mx-auto">
          {/* Intro callout */}
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5 mb-10 flex items-start gap-4">
            <span className="material-symbols-outlined text-primary text-2xl shrink-0 mt-0.5">
              info
            </span>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Please read these Terms carefully before booking any service. By
              proceeding with a booking, you confirm that you are at least 18
              years of age and legally authorised to enter into this agreement
              on behalf of the vehicle owner.
            </p>
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <SectionBlock key={section.num} {...section} />
          ))}

          {/* Contact block */}
          <div className="mt-12 rounded-xl border border-border-highlight bg-surface-container p-6 md:p-8">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-2xl shrink-0 mt-0.5">
                contact_support
              </span>
              <div>
                <h3 className="font-headline font-semibold text-lg text-on-surface uppercase tracking-wide mb-3">
                  Questions About These Terms?
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-4">
                  If you have any questions or concerns regarding these Terms
                  and Conditions, please contact our team directly:
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    {
                      icon: 'location_on',
                      text: 'Unit 12, Al Quoz Industrial Area 4, Dubai, UAE',
                    },
                    { icon: 'mail', text: 'cars365studio@gamil.com' },
                    { icon: 'phone', text: '+971 54 454 1345' },
                  ].map(({ icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-primary text-base">
                        {icon}
                      </span>
                      <span className="font-body text-sm text-on-surface-variant">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation footer */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border-highlight">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-mono text-xs text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors duration-200"
            >
              <span className="material-symbols-outlined text-base">
                arrow_back
              </span>
              Back to Home
            </Link>
            <Link
              to="/privacy-policy"
              className="inline-flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest hover:text-primary-fixed transition-colors duration-200"
            >
              Privacy Policy
              <span className="material-symbols-outlined text-base">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
