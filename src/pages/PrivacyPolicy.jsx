import { Link } from 'react-router-dom';

const EFFECTIVE_DATE = '1 January 2025';

// ── Section data ──────────────────────────────────────────────────────────────
const sections = [
  {
    num: '01',
    title: 'Introduction',
    content: [
      {
        type: 'p',
        text: 'CARS365 STUDIO ("we", "us", "our") is committed to safeguarding the privacy and personal data of our customers, website visitors, and enquirers. This Privacy Policy explains how we collect, use, store, share, and protect your personal information when you interact with our services, visit our website, or communicate with us.',
      },
      {
        type: 'p',
        text: 'This policy is designed to comply with UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL) and, where applicable, the European Union General Data Protection Regulation (GDPR). By engaging with our services, you acknowledge that you have read and understood this policy.',
      },
    ],
  },
  {
    num: '02',
    title: 'Information We Collect',
    content: [
      {
        type: 'p',
        text: 'We may collect the following categories of personal information:',
      },
      {
        type: 'list',
        items: [
          'Identity Information: Full name, Emirates ID number (required for insurance documentation purposes only).',
          'Contact Information: Mobile phone number, WhatsApp number, email address.',
          'Vehicle Information: Make, model, year, colour, registration plate, VIN/chassis number, service history.',
          'Transaction Data: Booking records, invoices, payment history, deposit receipts, and service completion records.',
          'Communication Records: WhatsApp messages, emails, call logs, and in-person consultation notes.',
          'Media: Photographs and video footage of your vehicle taken during our inspection, service process, and quality checks.',
          'Pickup & Drop-off Information: (If you request our optional pick and drop service) your pickup address, delivery address, preferred time windows, and any special access instructions to facilitate vehicle transportation.',
          'Technical Data: IP address, browser type, device information, and page interaction data when you visit our website.',
        ],
      },
    ],
  },
  {
    num: '03',
    title: 'How We Collect Your Information',
    content: [
      {
        type: 'p',
        text: 'We collect personal information through the following channels:',
      },
      {
        type: 'list',
        items: [
          'Directly from you via our website contact and booking forms.',
          'Via WhatsApp conversations, telephone calls, or SMS messages.',
          'In person at our studio during vehicle drop-off, inspection, and service consultations.',
          'Automatically through website analytics tools and browser cookies when you visit our website.',
          'From trusted third-party referral partners, with your prior consent.',
        ],
      },
    ],
  },
  {
    num: '04',
    title: 'How We Use Your Information',
    content: [
      {
        type: 'p',
        text: 'We use your personal data for the following purposes, relying on the legal bases of contractual necessity, legitimate interests, legal obligation, or your explicit consent as applicable:',
      },
      {
        type: 'list',
        items: [
          'Booking Management: To schedule, confirm, and manage your service appointments.',
          'Service Delivery: To provide the requested automotive protection and detailing services effectively.',
          'Pick and Drop Coordination: To arrange vehicle pickup from your specified location and delivery back after service completion, including coordinating with drivers and providing real-time updates.',
          'Communication: To send appointment reminders, service completion notifications, quotes, and follow-up care instructions.',
          'Payment Processing: To raise invoices, process payments, and maintain financial records as required by UAE law.',
          'Quality Assurance: To review service outcomes, handle complaints, and continuously improve our standards.',
          'Warranty Administration: To register your warranty and process any warranty claims.',
          'Marketing (with consent only): To send promotional communications about new services, seasonal offers, and studio news. You may withdraw consent at any time.',
          'Legal Compliance: To meet our obligations under UAE commercial, tax, and regulatory laws.',
          'Safety & Security: To maintain the security of our premises and the integrity of our operations.',
        ],
      },
    ],
  },
  {
    num: '05',
    title: 'WhatsApp & Direct Communications',
    content: [
      {
        type: 'p',
        text: 'WhatsApp is our primary channel for booking communications and customer service. By providing your WhatsApp number, you consent to receiving the following types of messages from CARS365 STUDIO:',
      },
      {
        type: 'list',
        items: [
          'Booking confirmations and appointment reminders.',
          'Service progress updates and completion notifications.',
          'Quotes, invoices, and warranty documentation.',
          'Post-service care instructions and maintenance tips.',
        ],
      },
      {
        type: 'p',
        text: 'Marketing messages (promotional offers, new service announcements) will only be sent with your explicit consent. You may opt out of marketing communications at any time by replying "STOP" to any marketing message, without affecting the delivery of transactional messages related to your booking.',
      },
      {
        type: 'p',
        text: "Please note that WhatsApp communications are subject to WhatsApp's own Privacy Policy. We recommend reviewing WhatsApp's terms at www.whatsapp.com/legal/privacy-policy.",
      },
    ],
  },
  {
    num: '06',
    title: 'Sharing Your Information',
    content: [
      {
        type: 'p',
        text: 'We do not sell, rent, or trade your personal information to third parties for their own marketing purposes. We may share your data in the following limited circumstances:',
      },
      {
        type: 'list',
        items: [
          'Service Providers: With vetted third-party vendors who assist us in delivering our services (e.g. payment processors, cloud storage providers), under strict data processing agreements.',
          'Warranty Providers: With manufacturers and warranty administrators for the registration and processing of product warranties on your behalf.',
          'Insurance Partners: With our insurance provider, solely for the purposes of managing liability claims.',
          'Legal Authorities: With UAE government agencies, courts, or law enforcement where we are legally required or authorised to do so.',
          'Business Transfers: In the event of a merger, acquisition, or sale of our business, your data may be transferred to the successor entity, with appropriate safeguards in place.',
        ],
      },
      {
        type: 'p',
        text: 'All third parties with whom we share data are contractually obligated to maintain confidentiality and to use your information only for the stated purpose.',
      },
    ],
  },
  {
    num: '07',
    title: 'Data Retention',
    content: [
      {
        type: 'p',
        text: 'We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, subject to the following minimum retention periods required by UAE law:',
      },
      {
        type: 'list',
        items: [
          'Customer Records & Service History: 7 years from the date of last service (UAE Commercial Transactions Law requirement).',
          'Financial Records & VAT Invoices: 5 years from the end of the tax period (UAE Federal Tax Authority requirement).',
          'Warranty Documentation: For the full duration of the warranty period plus 2 additional years.',
          'Marketing Preferences & Consent Records: Until you withdraw your consent.',
          'Website Analytics Data: 26 months from the date of collection.',
          'CCTV / Security Footage from Premises: 90 days, after which recordings are permanently deleted.',
        ],
      },
      {
        type: 'p',
        text: 'Upon expiry of the applicable retention period, your personal data will be securely deleted, destroyed, or anonymised in a manner that prevents recovery or reconstruction.',
      },
    ],
  },
  {
    num: '08',
    title: 'Data Security',
    content: [
      {
        type: 'p',
        text: 'We take the security of your personal data seriously and implement appropriate technical and organisational measures to protect it from unauthorised access, disclosure, alteration, or destruction. Our security measures include:',
      },
      {
        type: 'list',
        items: [
          'Encryption of customer records stored in our CRM and cloud systems.',
          'Password protection and multi-factor authentication for all systems containing personal data.',
          'Access controls ensuring that only authorised personnel can access your information on a need-to-know basis.',
          'Regular security reviews and staff training on data protection best practices.',
          'Secure disposal of physical documents containing personal information (cross-shredding).',
          'SSL/TLS encryption for all data transmitted via our website.',
        ],
      },
      {
        type: 'p',
        text: 'While we take every reasonable precaution, no data transmission over the internet is completely secure. If you have reason to believe that your personal data has been compromised, please contact us immediately at cars365studio@gamil.com.',
      },
    ],
  },
  {
    num: '09',
    title: 'Your Rights',
    content: [
      {
        type: 'p',
        text: 'Under UAE data protection law and, where applicable, the GDPR, you have the following rights regarding your personal data:',
      },
      {
        type: 'list',
        items: [
          'Right of Access: Request a copy of the personal data we hold about you.',
          'Right of Correction: Request that we correct any inaccurate or incomplete personal data.',
          'Right of Deletion: Request that we delete your personal data, subject to our legal retention obligations.',
          'Right to Restrict Processing: Request that we limit how we use your data in certain circumstances.',
          'Right to Object: Object to the processing of your data for marketing purposes at any time.',
          'Right to Data Portability: Receive your data in a structured, commonly used, machine-readable format.',
          'Right to Withdraw Consent: Where processing is based on your consent, withdraw that consent at any time without affecting the lawfulness of prior processing.',
        ],
      },
      {
        type: 'p',
        text: 'To exercise any of these rights, please submit a written request to cars365studio@gamil.com, including your full name, contact number, and a description of your request. We will acknowledge your request within 5 business days and respond in full within 30 calendar days.',
      },
    ],
  },
  {
    num: '10',
    title: 'Cookies & Website Analytics',
    content: [
      {
        type: 'p',
        text: 'Our website may use cookies and similar tracking technologies to enhance your browsing experience, remember your preferences, and collect anonymised analytics data about how visitors interact with our site. Types of cookies we may use:',
      },
      {
        type: 'list',
        items: [
          'Essential Cookies: Required for the website to function correctly. These cannot be disabled.',
          'Analytics Cookies: Used to understand visitor behaviour and improve our website (e.g. page views, session duration).',
          'Preference Cookies: Used to remember your settings and personalise your experience.',
        ],
      },
      {
        type: 'p',
        text: 'You can manage cookie preferences through your browser settings. Most browsers allow you to refuse cookies or to delete existing cookies. Please note that disabling certain cookies may affect the functionality of our website.',
      },
    ],
  },
  {
    num: '11',
    title: "Children's Privacy",
    content: [
      {
        type: 'p',
        text: 'Our services are intended for individuals aged 18 and above. We do not knowingly collect, use, or store personal information from individuals under the age of 18. If you are a parent or guardian and believe your child has provided us with personal information without your consent, please contact us immediately at cars365studio@gamil.com, and we will take prompt steps to delete that information.',
      },
    ],
  },
  {
    num: '12',
    title: 'Changes to This Privacy Policy',
    content: [
      {
        type: 'p',
        text: 'We may update this Privacy Policy from time to time to reflect changes in our business practices, legal requirements, or technology. When we make material changes, we will post the updated policy on our website with a revised "Effective Date" at the top of the page.',
      },
      {
        type: 'p',
        text: 'For significant changes that affect how we use your personal data, we will endeavour to notify existing customers via WhatsApp or email prior to the change taking effect. Your continued use of our services after any changes constitutes your acceptance of the updated Privacy Policy.',
      },
    ],
  },
  {
    num: '13',
    title: 'Contact Our Privacy Officer',
    content: [
      {
        type: 'p',
        text: 'For any privacy-related enquiries, data subject requests, or complaints, please contact our designated Privacy Officer. We are committed to resolving privacy concerns promptly and transparently.',
      },
    ],
  },
];

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
              <p
                key={i}
                className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed"
              >
                {block.text}
              </p>
            );
          }
          if (block.type === 'list') {
            return (
              <ul key={i} className="flex flex-col gap-2.5">
                {block.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-primary shrink-0 mt-1">
                      <span
                        className="material-symbols-outlined text-base"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        chevron_right
                      </span>
                    </span>
                    <span className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function PrivacyPolicy() {
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
              Privacy Policy
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
            Privacy
            <br />
            Policy
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
                verified_user
              </span>
              <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">
                UAE PDPL Compliant
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
              shield
            </span>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              Your privacy matters to us. We collect only the information
              necessary to deliver our services and never sell your data to
              third parties. This policy is written in plain language so you can
              understand exactly how your data is used. Pick and drop services
              are also available; when you use them, we collect pickup/delivery
              location data as described below.
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
                privacy_tip
              </span>
              <div>
                <h3 className="font-headline font-semibold text-lg text-on-surface uppercase tracking-wide mb-3">
                  Contact Our Privacy Officer
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-4">
                  For data requests, privacy concerns, or to exercise your
                  rights under UAE data protection law, please contact us:
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    {
                      icon: 'location_on',
                      text: 'Unit 12, Al Quoz Industrial Area 4, Dubai, UAE',
                    },
                    { icon: 'mail', text: 'cars365studio@gamil.com' },
                    { icon: 'phone', text: '+971 54 454 1345' },
                    {
                      icon: 'schedule',
                      text: 'Response within 5 business days',
                    },
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

          {/* Rights quick-reference card */}
          <div className="mt-6 rounded-xl border border-border-highlight bg-surface-container-low p-6">
            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
              Your Data Rights at a Glance
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: 'visibility', label: 'Access' },
                { icon: 'edit', label: 'Correct' },
                { icon: 'delete', label: 'Delete' },
                { icon: 'block', label: 'Object' },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border-highlight"
                >
                  <span className="material-symbols-outlined text-primary text-xl">
                    {icon}
                  </span>
                  <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation footer */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border-highlight">
            <Link
              to="/terms-and-conditions"
              className="inline-flex items-center gap-2 font-mono text-xs text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors duration-200"
            >
              <span className="material-symbols-outlined text-base">
                arrow_back
              </span>
              Terms &amp; Conditions
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-widest hover:text-primary-fixed transition-colors duration-200"
            >
              Back to Home
              <span className="material-symbols-outlined text-base">home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
