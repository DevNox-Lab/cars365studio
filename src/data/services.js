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
          '/images/WEBP Before After Images/1. Before Full Front PPF cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/1. After Full Front PPF cars365Studio.webp',
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
          '/images/WEBP Before After Images/2.1 Before Full Body PPF cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/2.1 After Full Body PPF cars365Studio.webp',
      },
    ],
  },
  {
    id: 'color-PPF',
    name: 'Color PPF Installation',
    category: 'NO. 3 / PAINT PROTECTION',
    description:
      'Installation of color-matched paint protection film for enhanced vehicle aesthetics and protection.',
    tagline: 'Protect your paint. Enhance your style.',
    basePrice: 1200,
    tags: ['MULTI-COLOR', 'PAINT PROTECTION', 'AESTHETIC UPGRADE'],
    icon: 'style',
    includes: ['Surface preparation', 'PPF application', 'Quality inspection'],
    benefits: [
      'Enhanced vehicle appearance',
      'Protection against scratches and UV damage',
      'Easy maintenance and cleaning',
    ],
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/3. Before Color PPF Installation cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/3. After Color PPF Installation cars365Studio.webp',
      },
    ],
  },
  {
    id: 'ceramic',
    name: 'Ceramic Coating',
    category: 'NO. 4 / CERAMIC',

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
          '/images/WEBP Before After Images/3.1 Before Ceramic Coating cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/3.1 After Ceramic Coating cars365Studio.webp',
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
          '/images/WEBP Before After Images/4.1 before Full Car Wrap cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/4.1 After Full Car Wrap cars365Studio.webp',
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
          '/images/WEBP Before After Images/5.1 Before Window Tinting cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/5.1 After Window Tinting cars365Studio.webp',
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
          '/images/WEBP Before After Images/6.1 Before Paint Correction cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/6.1 After Paint Correction cars365Studio.webp',
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/7.1 Before Interior Detailing cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/7.1 After Interior Detailing cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/9.1 Before Leather Seat Installation cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/9.1 After Leather Seat Installation cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/9.3 Before Dashboard Wrapping cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/9.3 After Dashboard Wrapping cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/10.1 Before Full Body Kit Installation cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/10.1 After Full Body Kit Installation cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/11. Before Carbon Fiber Hood Installation cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/11. After Carbon Fiber Hood Installation cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/12. Before Complete Facelift Conversion cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/12. After Complete Facelift Conversion cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/13. Before ECU Remapping cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/13. After ECU Remapping cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/14. Before Cat-Back Exhaust Installation cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/14. After Cat-Back Exhaust Installation cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/15. Before Roof Rack Installation cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/15. After Roof Rack Installation cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/16. Before Performance Parts Installation cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/16. After Performance Parts Installation cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/17. Before Ambient Lighting Installation cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/17. After Ambient Lighting Installation cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/18. Before Starlight Headliner Installation cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/18. After Starlight Headliner Installation cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/19. Before Custom Wheel Installation cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/19. After Custom Wheel Installation cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/Before Vehicle Customization Consultation cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/After Vehicle Customization Consultation cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/21. Before Leather Seat Installation cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/21. After Leather Seat Installation cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/22. Before Roof Lining Replacement cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/22. After Roof Lining Replacement cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/23. Before Steering Wheel Wrap cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/23. After Steering Wheel Wrap cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/24. Before Door Panel Customization cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/24. After Door Panel Customization cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/25. Before Wide Body Kit Installation cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/25. After Wide Body Kit Installation cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/26. Before Carbon Fiber Interior Trim cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/26. After Carbon Fiber Interior Trim cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/27. Before Headlight Upgrade  Conversion cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/27. After Headlight Upgrade  Conversion cars365Studio.webp',
      },
    ],
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
    gallery: [
      {
        before:
          '/images/WEBP Before After Images/28. Before Wheel Alignment & Balancing cars365Studio.webp',

        after:
          '/images/WEBP Before After Images/28. After Wheel Alignment & Balancing cars365Studio.webp',
      },
    ],
  },
];

export default services;
