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
      'Hood and fender protection',
      'Side mirrors wrapped',
      'Door edge guards',
      'Headlight film protection',
    ],
    benefits: [
      'Self-heals minor scratches with heat',
      'Maintains factory paint resale value',
      'Optically clear — invisible protection',
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
      'Roof and pillars',
      'Door handles and jambs',
      'Rocker panels and sills',
      'Full bumpers front and rear',
    ],
    benefits: [
      'Ultimate protection for high-end vehicles',
      'Preserves paint condition for resale',
      'Backed by 10-year manufacturer warranty',
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
    description:
      'A permanent nano-ceramic shield bonded to your paint for years of effortless shine.',
    tagline: 'Hydrophobic. Glossy. Bulletproof.',
    basePrice: 2500,
    tags: ['9H HARDNESS', 'HYDROPHOBIC', '5 YR WARRANTY'],
    icon: 'water_drop',
    includes: [
      'Full exterior paint coating',
      'Wheel faces and barrel',
      'Glass surfaces',
      'Exterior trim',
      'Pre-coating paint decontamination',
    ],
    benefits: [
      'Water and dirt bead off effortlessly',
      'Extreme gloss amplification',
      'Chemical and UV resistance',
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
      "Transform your vehicle's color and finish with precision-cut premium vinyl.",
    tagline: 'New look. Same car. Total transformation.',
    basePrice: 8000,
    tags: ['CUSTOM COLORS', 'REVERSIBLE', 'MATTE / GLOSS / SATIN'],
    icon: 'palette',
    includes: [
      'Full exterior vinyl application',
      'Color of your choice from premium range',
      'Hood, roof, and trunk',
      'All bumpers and side panels',
      'Door handles and mirrors',
    ],
    benefits: [
      'Fully reversible — return to factory color',
      'Protects original paint beneath',
      'Hundreds of finishes to choose from',
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
      'Ceramic-grade window film for heat rejection, privacy, and UV protection.',
    tagline: 'Cool interior. Sleek exterior. Zero compromise.',
    basePrice: 1200,
    tags: ['UV BLOCK', 'HEAT REJECT', 'CERAMIC GRADE'],
    icon: 'wb_sunny',
    includes: [
      'All side windows',
      'Rear windshield',
      'Windshield visor strip (optional)',
      'Precision computer-cut templates',
      'Ceramic film (no signal interference)',
    ],
    benefits: [
      'Blocks up to 99% of UV rays',
      'Significantly reduces cabin heat',
      "Enhances vehicle's exterior appearance",
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
      'Multi-stage machine polishing to eliminate swirls, scratches, and oxidation.',
    tagline: 'Remove the past. Reveal the perfect.',
    basePrice: 1800,
    tags: ['SWIRL FREE', 'HIGH GLOSS', '2-STAGE POLISH'],
    icon: 'auto_fix_high',
    includes: [
      'Wash and full decontamination',
      'Clay bar treatment',
      '2-stage machine polish',
      'Swirl and scratch removal',
      'Final wax or sealant layer',
    ],
    benefits: [
      'Restores true depth and clarity to paint',
      'Removes years of wash-induced defects',
      'Essential before any coating application',
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
    category: 'INTERIOR',
    description:
      'Deep steam cleaning and restoration of all interior surfaces.',
    tagline: 'Factory-fresh cabin. Every corner sanitized.',
    basePrice: 800,
    tags: ['STEAM CLEAN', 'LEATHER CARE', 'DEEP CLEAN'],
    icon: 'cleaning_services',
    includes: ['Steam cleaning', 'Leather conditioning', 'Stain removal'],
    benefits: ['Removes odors', 'Restores materials', 'Hygienic environment'],
    gallery: [],
  },
  {
    id: 'seat-upholstery',
    name: 'Seat Upholstery Replacement',
    category: 'INTERIOR',
    description: 'Premium leather or fabric replacement for your seats.',
    tagline: 'Luxury you can feel. Custom tailored.',
    basePrice: 4500,
    tags: ['CUSTOM LEATHER', 'TAILORED', 'PREMIUM FABRIC'],
    icon: 'event_seat',
    includes: ['Full seat re-trimming', 'Custom stitching', 'Foam restoration'],
    benefits: ['Custom look', 'Increased comfort', 'Higher resale value'],
    gallery: [],
  },
  {
    id: 'dashboard-wrapping',
    name: 'Dashboard Wrapping',
    category: 'INTERIOR',
    description:
      'Custom leather, alcantara, or vinyl wrapping for your dashboard.',
    tagline: "Elevate your cockpit's aesthetic.",
    basePrice: 2000,
    tags: ['ALCANTARA', 'LEATHER', 'CUSTOM FINISH'],
    icon: 'dashboard',
    includes: ['Dashboard disassembly', 'Precision wrapping', 'Edge finishing'],
    benefits: ['Reduces glare', 'Premium feel', 'Custom interior theme'],
    gallery: [],
  },
  // ── 2. Body Kit Installation Services ──────────────────────────────────────
  {
    id: 'bodykit-full',
    name: 'Full Body Kit Installation',
    category: 'BODY KITS',
    description:
      'Professional fitting and painting of complete aerodynamic body kits.',
    tagline: 'Aggressive stance. Aerodynamic perfection.',
    basePrice: 5000,
    tags: ['AERODYNAMICS', 'PERFECT FIT', 'PAINT MATCH'],
    icon: 'directions_car',
    includes: ['Front/Rear bumpers', 'Side skirts', 'Spoiler installation'],
    benefits: ['Aggressive look', 'Improved aero', 'Custom style'],
    gallery: [],
  },
  // ── 3. Carbon Fiber Services ────────────────────────────────────────────────
  {
    id: 'carbon-hood',
    name: 'Carbon Fiber Hood Installation',
    category: 'CARBON FIBER',
    description: 'Lightweight, high-strength carbon fiber hood replacement.',
    tagline: 'Weight reduction. Racing DNA.',
    basePrice: 3500,
    tags: ['REAL CARBON', 'LIGHTWEIGHT', 'RACING STYLE'],
    icon: 'speed',
    includes: ['OEM hood removal', 'Carbon hood fitting', 'Latch adjustment'],
    benefits: ['Better performance', 'Heat dissipation', 'Exotic look'],
    gallery: [],
  },
  // ── 4. Facelift & Conversion Services ──────────────────────────────────────
  {
    id: 'facelift-complete',
    name: 'Complete Model Conversion',
    category: 'CONVERSIONS',
    description: "Upgrade your vehicle to a newer model year's look.",
    tagline: 'Modernize your machine.',
    basePrice: 15000,
    tags: ['LATEST LOOK', 'OEM PARTS', 'TOTAL UPGRADE'],
    icon: 'autorenew',
    includes: [
      'Headlight/Taillight upgrade',
      'Bumper conversion',
      'Grille upgrade',
    ],
    benefits: ['Updated appearance', 'Higher value', 'Fresh look'],
    gallery: [],
  },
  // ── 5. Dyno Tuning Services ────────────────────────────────────────────────
  {
    id: 'ecu-remap',
    name: 'ECU Remapping',
    category: 'TUNING',
    description: 'Software optimization for increased power and torque.',
    tagline: "Unleash your engine's true potential.",
    basePrice: 2500,
    tags: ['STAGE 1/2/3', 'HP GAINS', 'TORQUE BOOST'],
    icon: 'settings_input_component',
    includes: ['Dyno testing', 'Custom mapping', 'Performance logging'],
    benefits: ['More power', 'Better throttle response', 'Optimized fuel'],
    gallery: [],
  },
  // ── 6. Exhaust Services ────────────────────────────────────────────────────
  {
    id: 'exhaust-catback',
    name: 'Cat-back Exhaust Installation',
    category: 'EXHAUST',
    description: 'High-performance exhaust system for sound and power.',
    tagline: 'Hear the power. Feel the flow.',
    basePrice: 3000,
    tags: ['STAINLESS STEEL', 'DEEP SOUND', 'FLOW BOOST'],
    icon: 'pipe',
    includes: ['Muffler replacement', 'Piping upgrade', 'Tip installation'],
    benefits: ['Sporty sound', 'Weight saving', 'HP increase'],
    gallery: [],
  },
  // ── 7. Car Accessories Installation ────────────────────────────────────────
  {
    id: 'accessory-roof-rack',
    name: 'Roof Rack Installation',
    category: 'ACCESSORIES',
    description: 'Secure and durable roof rack systems for extra cargo.',
    tagline: 'Ready for any adventure.',
    basePrice: 1200,
    tags: ['ADVENTURE READY', 'SECURE', 'HEAVY DUTY'],
    icon: 'grid_view',
    includes: ['Rail installation', 'Crossbar fitting', 'Weight testing'],
    benefits: ['Extra storage', 'Versatile use', 'Rugged look'],
    gallery: [],
  },
  // ── 8. Aftermarket Modification Services ───────────────────────────────────
  {
    id: 'performance-parts',
    name: 'Performance Parts Installation',
    category: 'MODIFICATIONS',
    description:
      'Installation of intakes, intercoolers, and suspension components.',
    tagline: 'Built for speed. Engineered for precision.',
    basePrice: 1500,
    tags: ['BOLT-ON', 'SUSPENSION', 'INTAKE'],
    icon: 'build',
    includes: ['Precision fitting', 'System testing', 'Quality check'],
    benefits: ['Better handling', 'Increased power', 'Reliability'],
    gallery: [],
  },
  // ── 9. Interior Lighting Services ──────────────────────────────────────────
  {
    id: 'ambient-lighting',
    name: 'Ambient Lighting Installation',
    category: 'LIGHTING',
    description: 'Multi-color LED ambient lighting for a futuristic cabin.',
    tagline: 'Set the mood. Change the vibe.',
    basePrice: 1800,
    tags: ['RGB', 'APP CONTROL', 'FIBER OPTIC'],
    icon: 'lightbulb',
    includes: ['Dashboard lighting', 'Door panel LEDs', 'Footwell lights'],
    benefits: ['Modern aesthetic', 'Custom colors', 'Luxury feel'],
    gallery: [],
  },
  {
    id: 'star-roof',
    name: 'Star Roof Installation',
    category: 'LIGHTING',
    description: 'Starlight headliner with hundreds of fiber optic stars.',
    tagline: 'Bring the night sky inside.',
    basePrice: 4000,
    tags: ['FIBER OPTIC', 'CUSTOM PATTERN', 'LUXURY'],
    icon: 'star',
    includes: [
      'Headliner removal',
      'Fiber optic routing',
      'Light engine install',
    ],
    benefits: ['Rolls-Royce aesthetic', 'Twinkling effect', 'Unique interior'],
    gallery: [],
  },
  // ── 10. Exterior Lighting Services ─────────────────────────────────────────
  {
    id: 'led-headlight-upgrade',
    name: 'LED Headlight Upgrade',
    category: 'LIGHTING',
    description: 'High-output LED conversion for better visibility and style.',
    tagline: 'Bright eyes. Clear path.',
    basePrice: 1200,
    tags: ['HIGH LUMEN', 'PLUG & PLAY', 'MODERN LOOK'],
    icon: 'flashlight_on',
    includes: ['Bulb replacement', 'Coding (if needed)', 'Beam alignment'],
    benefits: ['Better night vision', 'Modern look', 'Lower power draw'],
    gallery: [],
  },
  // ── 11. Rim & Wheel Services ───────────────────────────────────────────────
  {
    id: 'custom-rims',
    name: 'Custom Rim Installation',
    category: 'WHEELS',
    description: 'Fitting of aftermarket alloy or forged rims.',
    tagline: 'The ultimate wheel upgrade.',
    basePrice: 800,
    tags: ['FORGED', 'ALLOY', 'CUSTOM FIT'],
    icon: 'trip_origin',
    includes: ['Tire mounting', 'Wheel balancing', 'Precision fitting'],
    benefits: ['Unique style', 'Weight reduction', 'Better stance'],
    gallery: [],
  },
  // ── 12. General Modification ───────────────────────────────────────────────
  {
    id: 'custom-consultation',
    name: 'Customization Consultation',
    category: 'CONSULTATION',
    description: 'One-on-one session to plan your dream vehicle build.',
    tagline: 'Your vision. Our expertise.',
    basePrice: 500,
    tags: ['EXPERT ADVICE', 'BUILD PLAN', 'CUSTOM DESIGN'],
    icon: 'support_agent',
    includes: ['Project scoping', 'Part selection', 'Budgeting'],
    benefits: ['Avoid mistakes', 'Professional roadmap', 'Personalized build'],
    gallery: [],
  },
  {
    id: "leather-seat-install",
    name: "Leather Seat Installation",
    category: "INTERIOR",
    description: "Installation of premium leather seats for enhanced luxury.",
    tagline: "Unmatched comfort and style.",
    basePrice: 5000,
    tags: ["GENUINE LEATHER", "LUXURY", "CUSTOM"],
    icon: "airline_seat_recline_extra",
    includes: ["Seat removal", "Leather fitting", "Quality inspection"],
    benefits: ["Durability", "Elegant look", "Premium feel"],
    gallery: []
  },
  {
    id: "roof-lining-replacement",
    name: "Roof Lining Replacement",
    category: "INTERIOR",
    description: "Replacing old or damaged roof lining with high-quality materials.",
    tagline: "A fresh look from above.",
    basePrice: 1500,
    tags: ["ALCANTARA", "FABRIC", "RESTORATION"],
    icon: "roofing",
    includes: ["Old lining removal", "New material application", "Trim fitting"],
    benefits: ["Clean look", "Custom colors", "Better insulation"],
    gallery: []
  },
  {
    id: "steering-wheel-wrap",
    name: "Steering Wheel Wrapping",
    category: "INTERIOR",
    description: "Custom leather or alcantara wrap for your steering wheel.",
    tagline: "Better grip. Better feel.",
    basePrice: 800,
    tags: ["ALCANTARA", "LEATHER", "CUSTOM STITCH"],
    icon: "adjust",
    includes: ["Wheel removal", "Precision stitching", "Re-installation"],
    benefits: ["Improved grip", "Sporty look", "Personalized touch"],
    gallery: []
  },
  {
    id: "door-panel-custom",
    name: "Door Panel Customization",
    category: "INTERIOR",
    description: "Matching door panels to your custom interior theme.",
    tagline: "Consistency in every detail.",
    basePrice: 1200,
    tags: ["MATCHING", "CUSTOM", "INTERIOR"],
    icon: "door_front",
    includes: ["Panel trimming", "Material matching", "Refitting"],
    benefits: ["Cohesive design", "Premium finish", "Personalized"],
    gallery: []
  },
  {
    id: "wide-body-kit",
    name: "Wide Body Kit Installation",
    category: "BODY KITS",
    description: "Installation of wide body fenders and components for an aggressive look.",
    tagline: "The widest stance on the road.",
    basePrice: 8000,
    tags: ["WIDE BODY", "AGGRESSIVE", "CUSTOM"],
    icon: "directions_car",
    includes: ["Fender cutting/fitting", "Bodywork", "Paint match"],
    benefits: ["Exotic look", "Wider tires", "Unique presence"],
    gallery: []
  },
  {
    id: "carbon-interior-trim",
    name: "Carbon Fiber Interior Trim",
    category: "CARBON FIBER",
    description: "Replacing factory interior trims with real carbon fiber.",
    tagline: "Race-inspired cockpit.",
    basePrice: 1500,
    tags: ["REAL CARBON", "INTERIOR", "SPORTY"],
    icon: "dashboard_customize",
    includes: ["Trim removal", "Carbon trim fitting", "Secure mounting"],
    benefits: ["Modern look", "Lightweight", "High-tech feel"],
    gallery: []
  },
  {
    id: "headlight-upgrade",
    name: "Headlight Upgrade/Conversion",
    category: "LIGHTING",
    description: "Modernizing your headlights with latest LED/HID technology.",
    tagline: "See and be seen.",
    basePrice: 1500,
    tags: ["LED", "HID", "MODERN"],
    icon: "visibility",
    includes: ["Unit replacement", "Wiring", "Testing"],
    benefits: ["Safety", "Aesthetics", "Efficiency"],
    gallery: []
  },
  {
    id: "wheel-alignment",
    name: "Wheel Alignment & Balancing",
    category: "WHEELS",
    description: "Precision alignment and balancing for smooth driving.",
    tagline: "Perfectly balanced. Perfectly aligned.",
    basePrice: 400,
    tags: ["PRECISION", "SAFETY", "SMOOTH"],
    icon: "settings_backup_restore",
    includes: ["4-wheel alignment", "Computer balancing", "Tire check"],
    benefits: ["Even tire wear", "Better fuel economy", "Stable handling"],
    gallery: []
  },
];

export default services;
