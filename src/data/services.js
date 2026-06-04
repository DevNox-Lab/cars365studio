// Named export so Services.jsx and ServiceModal can import { services }
// Default export preserved so usePackageBuilder.js (import services from ...) keeps working
export const services = [
  {
    id: 'front-ppf',
    name: 'Full Front PPF',
    category: 'NO. 1 / PROTECTION',
    description:
      'Invisible, self-healing armor for the most impact-prone areas of your vehicle.',
    tagline: "Your car's first line of defense against the road.",
    basePrice: 3500,
    tags: ['SELF-HEALING', 'INVISIBLE', '10 YR WARRANTY'],
    icon: 'layers',
    includes: [
      'Full front bumper coverage',
      'Full hood protection',
      'Full front fender protection',
      'Side mirrors wrapped',
      'Headlight film protection',
    ],
    benefits: [
      'Self-healing technology removes minor swirl marks and scratches with heat',
      'Shields against rock chips, bug splatter, and road debris',
      'Helps preserve factory paint and vehicle resale value',
      'Crystal-clear finish with virtually invisible protection',
    ],
    gallery: [
      {
        before:
          'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',

        after:
          'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      },
      {
        before:
          'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80',
        after:
          'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
      },
    ],
  },
  {
    id: 'full-ppf',
    name: 'Full Body PPF',
    category: 'NO. 2 / PROTECTION',
    description:
      'Complete exterior coverage with premium self-healing paint protection film.',
    tagline: 'Total peace of mind. Every panel. Every edge.',
    basePrice: 12000,
    tags: ['SELF-HEALING', '10 YR WARRANTY', 'FULL COVERAGE'],
    icon: 'layers',
    includes: [
      'All painted exterior panels',
      'Full hood, fenders, doors, quarter panels, and trunk',
      'Roof and pillars protected',
      'Front and rear bumpers wrapped',
      'Side mirrors and door handle cups',
      'Rocker panels and side skirts protected',
    ],
    benefits: [
      'Maximum protection against rock chips, scratches, and road debris',
      'Preserves factory paint and long-term resale value',
      'Self-healing film technology for minor surface marks',
      'Backed by a 10-year manufacturer warranty',
    ],
    gallery: [
      {
        before:
          'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80',
        after:
          'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
      },
    ],
  },
  {
    id: 'ceramic',
    name: 'Ceramic Coating',
    category: 'NO. 3 / CERAMIC',

    TODO: 'BHAI jab card ko click kreen to ceramic coating k nechy likha ana chahiye',
    description:
      // 'A professional nano-ceramic coating bonded to your paint for years of lasting protection and shine',
      'A durable nano-ceramic shield that enhances gloss and protects your paint for years.',
    tagline: 'Hydrophobic. Glossy. Protected.',
    basePrice: 2500,
    tags: ['CERAMIC PROTECTION', 'HYDROPHOBIC', '5 YR WARRANTY'],
    icon: 'water_drop',
    includes: [
      'Full exterior paint coating',
      'Glass surfaces coated',
      'Exterior plastic and trim protection',
      'Paint decontamination and surface preparation',
    ],
    benefits: [
      'Exceptional hydrophobic performance for easier cleaning',
      'Deep gloss and enhanced paint clarity',
      'Protection against UV rays, contaminants, and chemicals',
      'Helps maintain a cleaner appearance for longer',
    ],
    gallery: [
      {
        before:
          'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80',
        after:
          'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
      },
    ],
  },
  {
    id: 'wrap',
    name: 'Full Car Wrap',
    category: 'NO. 4 / WRAPPING',
    description:
      'Transform your vehicle with a premium vinyl wrap available in a wide range of colors and finishes.',
    tagline: 'New look. Same car. Total transformation.',
    basePrice: 8000,
    tags: ['CUSTOM COLORS', 'REVERSIBLE', 'MATTE / GLOSS / SATIN'],
    icon: 'palette',
    includes: [
      'Full exterior vinyl application',
      'Premium color and finish selection',
      'Hood, roof, doors, and trunk',
      'Front and rear bumpers',
      'Side panels and mirrors',
    ],
    benefits: [
      'Fully reversible without affecting factory paint',
      'Adds a layer of protection against everyday wear',
      'Extensive range of premium colors and finishes',
    ],
    gallery: [
      {
        before:
          'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
        after:
          'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
      },
    ],
  },
  {
    id: 'tint',
    name: 'Window Tinting',
    category: 'NO. 5 / TINTING',
    description:
      'Premium window film for heat rejection, privacy, and UV protection.',
    tagline: 'Cool interior. Sleek exterior. Zero compromise.',
    basePrice: 1200,
    tags: ['UV BLOCK', 'HEAT REJECT', 'CERAMIC GRADE'],
    icon: 'wb_sunny',
    includes: [
      'All side windows',
      'Rear windshield',
      'Precision computer-cut templates',
      'Ceramic film (no signal interference)',
    ],
    benefits: [
      'Blocks up to 99% of UV rays',
      'Helps reduce cabin heat and glare',
      "Enhances your vehicle's appearance",
    ],
    gallery: [
      {
        before:
          'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
        after:
          'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80',
      },
    ],
  },
  {
    id: 'polish',
    name: 'Paint Correction',
    category: 'NO. 6 / DETAILING',
    description:
      'Professional machine polishing to correct paint defects and restore clarity and shine.',
    tagline: 'Remove the past. Reveal the perfect.',
    basePrice: 1800,
    tags: ['PAINT CORRECTION', 'HIGH GLOSS', '2-STAGE POLISH'],
    icon: 'auto_fix_high',
    includes: [
      'Wash and full decontamination',
      'Clay bar treatment',
      '2-stage machine polish',
      'Swirl mark and scratch correction',
      'Removal of swirls and light paint defects',
    ],
    benefits: [
      'Restores depth, gloss, and paint clarity',
      'Corrects wash-induced defects and imperfections',
      'Ideal preparation before ceramic coating',
    ],
    gallery: [
      {
        before:
          'https://images.unsplash.com/photo-1635774855317-edf3ee4463db?w=800&q=80',
        after:
          'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80',
      },
    ],
  },
  // ── 1. Upholstery & Interior Services ──────────────────────────────────────
  {
    id: 'interior-detailing',
    name: 'Interior Detailing',
    category: 'NO. 7 / INTERIOR',
    description:
      'Professional interior detailing with deep cleaning, steam treatment, and surface conditioning.',
    tagline: 'Factory-fresh cabin. Every corner refreshed.',
    basePrice: 800,
    tags: ['STEAM CLEAN', 'LEATHER CARE', 'DEEP CLEAN'],
    icon: 'cleaning_services',
    includes: [
      'Steam cleaning',
      'Leather conditioning',
      'Stain and spot treatment',
    ],
    benefits: [
      'Reduces unwanted odors',
      'Revitalizes interior surfaces',
      'Creates a cleaner, more hygienic cabin',
    ],
    gallery: [],
  },
  {
    id: 'seat-upholstery',
    name: 'Seat Upholstery Replacement',
    category: 'NO. 8 / INTERIOR',
    description:
      'Premium leather or fabric re-trimming and upholstery for vehicle seats.',
    tagline: 'Luxury you can feel. Custom tailored.',
    basePrice: 4500,
    tags: ['CUSTOM UPHOLSTERY', 'TAILORED FIT', 'PREMIUM MATERIALS'],
    icon: 'event_seat',
    includes: [
      'Full seat re-trimming',
      'Custom stitching design',
      'Foam repair and reshaping (if required)',
    ],
    benefits: [
      'Custom interior styling',
      'Improved seating comfort and feel',
      'Enhances interior appearance and value perception',
    ],
    gallery: [],
  },
  {
    id: 'dashboard-wrapping',
    name: 'Dashboard Wrapping',
    category: 'NO. 9 / INTERIOR',
    description:
      'Custom wrapping of dashboard using leather, Alcantara, or vinyl for an enhanced interior finish.',
    tagline: 'Elevate your cockpit’s aesthetic.',
    basePrice: 2000,
    tags: ['ALCANTARA', 'LEATHER', 'CUSTOM FINISH'],
    icon: 'dashboard',
    includes: ['Dashboard disassembly', 'Precision wrapping', 'Edge finishing'],
    benefits: [
      'Improved interior appearance',
      'Reduced dashboard glare',
      'Custom interior styling',
    ],
    gallery: [],
  },
  // ── 2. Body Kit Installation Services ──────────────────────────────────────
  {
    id: 'bodykit-full',
    name: 'Full Body Kit Installation',
    category: 'NO. 10 / BODY KITS',
    description:
      'Professional installation and painting of complete aerodynamic body kits.',
    tagline: 'Aggressive stance. Aerodynamic design.',
    basePrice: 5000,
    tags: ['AERODYNAMICS', 'PROPER FITMENT', 'PAINT MATCH'],
    icon: 'directions_car',
    includes: ['Front and rear bumpers', 'Side skirts', 'Spoiler installation'],
    benefits: [
      'Enhanced aggressive appearance',
      'Aerodynamic styling',
      'Custom exterior look',
    ],
    gallery: [],
  },
  // ── 3. Carbon Fiber Services ────────────────────────────────────────────────
  {
    id: 'carbon-hood',
    name: 'Carbon Fiber Hood Installation',
    category: 'NO. 11 / CARBON FIBER',
    description:
      'Installation of lightweight, high-strength carbon fiber hood replacement.',
    tagline: 'Weight reduction. Racing DNA.',
    basePrice: 3500,
    tags: ['REAL CARBON', 'LIGHTWEIGHT', 'RACING STYLE'],
    icon: 'speed',
    includes: [
      'OEM hood removal',
      'Carbon fiber hood installation',
      'Latch adjustment',
    ],
    benefits: [
      'Reduced weight',
      'Sport-inspired styling',
      'Enhanced heat management',
    ],
    gallery: [],
  },
  // ── 4. Facelift & Conversion Services ──────────────────────────────────────
  {
    id: 'facelift-complete',
    name: 'Complete Facelift Conversion',
    category: 'NO. 12 / CONVERSIONS',
    description:
      'Exterior upgrade to refresh your vehicle with a newer model-year design language.',
    tagline: 'Modernize your machine.',
    basePrice: 15000,
    tags: ['LATEST DESIGN', 'OEM PARTS', 'FULL EXTERIOR UPGRADE'],
    icon: 'autorenew',
    includes: [
      'Headlight and taillight upgrade',
      'Bumper conversion',
      'Grille upgrade',
    ],
    benefits: [
      'Refreshed exterior appearance',
      'Modernized styling',
      'Enhanced visual appeal',
    ],
    gallery: [],
  },
  // ── 5. Dyno Tuning Services ────────────────────────────────────────────────
  {
    id: 'ecu-remap',
    name: 'ECU Remapping',
    category: 'NO. 13 / TUNING',
    description:
      'Engine control unit software optimization for improved power and torque output.',
    tagline: "Unleash your engine's true potential.",
    basePrice: 2500,
    tags: ['STAGE 1/2/3', 'POWER GAINS', 'TORQUE IMPROVEMENT'],
    icon: 'settings_input_component',
    includes: ['Dyno testing', 'Custom ECU mapping', 'Performance logging'],
    benefits: [
      'Increased power output',
      'Improved throttle response',
      'Optimized fuel calibration',
    ],
    gallery: [],
  },
  // ── 6. Exhaust Services ────────────────────────────────────────────────────
  {
    id: 'exhaust-catback',
    name: 'Cat-Back Exhaust Installation',
    category: 'NO. 14 / EXHAUST',
    description:
      'Performance cat-back exhaust system designed for improved sound and exhaust flow.',
    tagline: 'Hear the power. Feel the flow.',
    basePrice: 3000,
    tags: ['STAINLESS STEEL', 'AGGRESSIVE SOUND', 'IMPROVED FLOW'],
    icon: 'pipe',
    includes: [
      'Muffler replacement',
      'Exhaust piping upgrade',
      'Exhaust tip installation',
    ],
    benefits: [
      'Enhanced exhaust sound',
      'Reduced exhaust restriction',
      'Sport-inspired driving feel',
    ],
    gallery: [],
  },
  // ── 7. Car Accessories Installation ────────────────────────────────────────
  {
    id: 'accessory-roof-rack',
    name: 'Roof Rack Installation',
    category: 'NO. 15 / ACCESSORIES',
    description:
      'Installation of secure and durable roof rack system for additional cargo capacity.',
    tagline: 'Ready for any adventure.',
    basePrice: 1200,
    tags: ['ADVENTURE READY', 'SECURE FITMENT', 'HEAVY DUTY'],
    icon: 'grid_view',
    includes: ['Roof rail installation', 'Crossbar fitting', 'Load testing'],
    benefits: [
      'Additional cargo capacity',
      'Improved storage versatility',
      'Enhanced utility for travel',
    ],
    gallery: [],
  },
  // ── 8. Aftermarket Modification Services ───────────────────────────────────
  {
    id: 'performance-parts',
    name: 'Performance Parts Installation',
    category: 'NO. 16 / MODIFICATIONS',
    description:
      'Installation of performance components including intakes, intercoolers, and suspension systems.',
    tagline: 'Built for speed. Engineered for precision.',
    basePrice: 1500,
    tags: ['BOLT-ON', 'SUSPENSION', 'INTAKE'],
    icon: 'build',
    includes: ['Precision fitting', 'System testing', 'Quality inspection'],
    benefits: [
      'Improved vehicle responsiveness',
      'Enhanced handling characteristics',
      'Optimized system performance',
    ],
    gallery: [],
  },
  // ── 9. Interior Lighting Services ──────────────────────────────────────────
  {
    id: 'ambient-lighting',
    name: 'Ambient Lighting Installation',
    category: 'NO. 17 / LIGHTING',
    description:
      'Multi-color LED ambient lighting system for an enhanced interior cabin atmosphere.',
    tagline: 'Set the mood. Change the vibe.',
    basePrice: 1800,
    tags: ['RGB', 'APP CONTROL', 'FIBER OPTIC'],
    icon: 'lightbulb',
    includes: [
      'Dashboard lighting',
      'Door panel lighting',
      'Footwell lighting',
    ],
    benefits: [
      'Enhanced interior aesthetics',
      'Customizable color options',
      'Premium cabin atmosphere',
    ],
    gallery: [],
  },
  {
    id: 'star-roof',
    name: 'Starlight Headliner Installation',
    category: 'NO. 18 / LIGHTING',
    description:
      'Custom starlight headliner system with fiber optic lighting for a premium cabin effect.',
    tagline: 'Bring the night sky inside.',
    basePrice: 4000,
    tags: ['FIBER OPTIC', 'CUSTOM PATTERN', 'LUXURY FINISH'],
    icon: 'star',
    includes: [
      'Headliner removal',
      'Fiber optic installation',
      'Light engine installation',
    ],
    benefits: [
      'Luxury-inspired interior ambiance',
      'Twinkling star effect',
      'Custom interior design',
    ],
    gallery: [],
  },

  // ── 11. Rim & Wheel Services ───────────────────────────────────────────────
  {
    id: 'custom-rims',
    name: 'Custom Wheel Installation',
    category: 'NO. 19 / WHEELS',
    description:
      'Installation of aftermarket alloy or forged wheels for improved styling and fitment.',
    tagline: 'The ultimate wheel upgrade.',
    basePrice: 800,
    tags: ['FORGED', 'ALLOY', 'CUSTOM FITMENT'],
    icon: 'trip_origin',
    includes: ['Tire mounting', 'Wheel balancing', 'Precision fitment'],
    benefits: [
      'Enhanced vehicle styling',
      'Optimized wheel setup',
      'Improved stance appearance',
    ],
    gallery: [],
  },
  // ── 12. General Modification ───────────────────────────────────────────────
  {
    id: 'custom-consultation',
    name: 'Vehicle Customization Consultation',
    category: 'NO. 20 / CONSULTATION',
    description:
      'One-on-one consultation session to plan your custom vehicle build.',
    tagline: 'Your vision. Our expertise.',
    basePrice: 500,
    tags: ['EXPERT GUIDANCE', 'BUILD PLANNING', 'CUSTOM DESIGN'],
    icon: 'support_agent',
    includes: [
      'Project scoping',
      'Parts selection guidance',
      'Budget planning',
    ],
    benefits: [
      'Reduced planning errors',
      'Structured build roadmap',
      'Personalized customization plan',
    ],
    gallery: [],
  },
  {
    id: 'leather-seat-install',
    name: 'Leather Seat Installation',
    category: 'NO. 21 / INTERIOR',
    description:
      'Installation of premium leather seat upholstery for enhanced interior comfort and luxury.',
    tagline: 'Unmatched comfort and style.',
    basePrice: 5000,
    tags: ['GENUINE LEATHER', 'LUXURY FINISH', 'CUSTOM UPHOLSTERY'],
    icon: 'airline_seat_recline_extra',
    includes: [
      'Seat removal',
      'Leather upholstery fitting',
      'Quality inspection',
    ],
    benefits: [
      'Enhanced durability',
      'Refined interior appearance',
      'Improved cabin comfort',
    ],
    gallery: [],
  },
  {
    id: 'roof-lining-replacement',
    name: 'Roof Lining Replacement',
    category: 'NO. 22 / INTERIOR',
    description:
      'Replacement of worn or damaged roof lining with high-quality interior materials.',
    tagline: 'A fresh look from above.',
    basePrice: 1500,
    tags: ['ALCANTARA', 'FABRIC', 'INTERIOR RESTORATION'],
    icon: 'roofing',
    includes: [
      'Old headliner removal',
      'New material installation',
      'Trim refitting',
    ],
    benefits: [
      'Refreshed interior appearance',
      'Custom material options',
      'Improved cabin comfort',
    ],
    gallery: [],
  },
  {
    id: 'steering-wheel-wrap',
    name: 'Steering Wheel Wrap',
    category: 'NO. 23 / INTERIOR',
    description:
      'Custom leather or Alcantara wrapping for steering wheel enhancement.',
    tagline: 'Better grip. Better feel.',
    basePrice: 800,
    tags: ['ALCANTARA', 'LEATHER', 'CUSTOM STITCHING'],
    icon: 'adjust',
    includes: [
      'Steering wheel removal',
      'Precision stitching',
      'Reinstallation',
    ],
    benefits: [
      'Enhanced grip',
      'Sport-inspired appearance',
      'Personalized interior detail',
    ],
    gallery: [],
  },
  {
    id: 'door-panel-custom',
    name: 'Door Panel Customization',
    category: 'NO. 24 / INTERIOR',
    description:
      'Custom door panel finishing to match your interior design theme.',
    tagline: 'Consistency in every detail.',
    basePrice: 1200,
    tags: ['MATCHING', 'CUSTOM INTERIOR', 'INTERIOR FINISH'],
    icon: 'door_front',
    includes: ['Panel trimming', 'Material matching', 'Panel refitting'],
    benefits: [
      'Cohesive interior design',
      'Refined interior finish',
      'Personalized styling',
    ],
    gallery: [],
  },
  {
    id: 'wide-body-kit',
    name: 'Wide Body Kit Installation',
    category: 'NO. 25 / BODY KITS',
    description:
      'Installation of wide body fender extensions and components for an aggressive exterior stance.',
    tagline: 'The widest stance on the road.',
    basePrice: 8000,
    tags: ['WIDE BODY', 'AGGRESSIVE STYLING', 'CUSTOM FITMENT'],
    icon: 'directions_car',
    includes: [
      'Fender modification and fitting',
      'Bodywork fabrication',
      'Paint matching',
    ],
    benefits: [
      'Aggressive exterior appearance',
      'Enhanced stance design',
      'Distinctive road presence',
    ],
    gallery: [],
  },
  {
    id: 'carbon-interior-trim',
    name: 'Carbon Fiber Interior Trim',
    category: 'NO. 26 / CARBON FIBER',
    description:
      'Replacement of factory interior trims with real carbon fiber components.',
    tagline: 'Race-inspired cockpit.',
    basePrice: 1500,
    tags: ['REAL CARBON', 'INTERIOR TRIM', 'SPORT INSPIRED'],
    icon: 'dashboard_customize',
    includes: [
      'Interior trim removal',
      'Carbon trim installation',
      'Secure mounting',
    ],
    benefits: [
      'Enhanced interior aesthetics',
      'Modern cockpit design',
      'Sport-inspired cabin feel',
    ],
    gallery: [],
  },
  {
    id: 'headlight-upgrade',
    name: 'Headlight Upgrade / Conversion',
    category: 'NO. 27 / LIGHTING',
    description:
      'Upgrade or conversion to modern LED or HID headlight systems for improved visibility and styling.',
    tagline: 'See and be seen.',
    basePrice: 1500,
    tags: ['LED', 'HID', 'MODERN LIGHTING'],
    icon: 'visibility',
    includes: [
      'Headlight unit replacement',
      'Wiring integration',
      'System testing',
    ],
    benefits: [
      'Improved road visibility',
      'Enhanced exterior styling',
      'Optimized lighting efficiency',
    ],
    gallery: [],
  },
  {
    id: 'wheel-alignment',
    name: 'Wheel Alignment & Balancing',
    category: 'NO. 28 / WHEELS',
    description:
      'Precision wheel alignment and dynamic balancing for improved driving stability and comfort.',
    tagline: 'Perfectly balanced. Perfectly aligned.',
    basePrice: 400,
    tags: ['PRECISION ALIGNMENT', 'SAFETY', 'SMOOTH RIDE'],
    icon: 'settings_backup_restore',
    includes: [
      '4-wheel alignment',
      'Computerized wheel balancing',
      'Tire inspection',
    ],
    benefits: [
      'Even tire wear',
      'Improved fuel efficiency',
      'Enhanced driving stability',
    ],
    gallery: [],
  },
];

export default services;
