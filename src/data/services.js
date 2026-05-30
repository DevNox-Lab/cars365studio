// Named export so Services.jsx and ServiceModal can import { services }
// Default export preserved so usePackageBuilder.js (import services from ...) keeps working
export const services = [
  {
    id: "front-ppf",
    name: "Full Front PPF",
    category: "NO. 1 / PROTECTION",
    description:
      "Invisible, self-healing armor for the most impact-prone areas of your vehicle.",
    tagline: "Your car's first line of defense against the road.",
    basePrice: 3500,
    tags: ["SELF-HEALING", "INVISIBLE", "10 YR WARRANTY"],
    icon: "layers",
    includes: [
      "Full front bumper coverage",
      "Hood and fender protection",
      "Side mirrors wrapped",
      "Door edge guards",
      "Headlight film protection",
    ],
    benefits: [
      "Self-heals minor scratches with heat",
      "Maintains factory paint resale value",
      "Optically clear — invisible protection",
    ],
    gallery: [
      {
        before:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
        after:
          "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
      },
      {
        before:
          "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&q=80",
        after:
          "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
      },
    ],
  },
  {
    id: "full-ppf",
    name: "Full Body PPF",
    category: "NO. 2 / PROTECTION",
    description:
      "Complete exterior coverage with premium self-healing paint protection film.",
    tagline: "Total peace of mind. Every panel. Every edge.",
    basePrice: 12000,
    tags: ["SELF-HEALING", "10 YR WARRANTY", "FULL COVERAGE"],
    icon: "layers",
    includes: [
      "All painted exterior panels",
      "Roof and pillars",
      "Door handles and jambs",
      "Rocker panels and sills",
      "Full bumpers front and rear",
    ],
    benefits: [
      "Ultimate protection for high-end vehicles",
      "Preserves paint condition for resale",
      "Backed by 10-year manufacturer warranty",
    ],
    gallery: [
      {
        before:
          "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
        after:
          "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
      },
    ],
  },
  {
    id: "ceramic",
    name: "Ceramic Coating",
    category: "NO. 3 / CERAMIC",
    description:
      "A permanent nano-ceramic shield bonded to your paint for years of effortless shine.",
    tagline: "Hydrophobic. Glossy. Bulletproof.",
    basePrice: 2500,
    tags: ["9H HARDNESS", "HYDROPHOBIC", "5 YR WARRANTY"],
    icon: "water_drop",
    includes: [
      "Full exterior paint coating",
      "Wheel faces and barrel",
      "Glass surfaces",
      "Exterior trim",
      "Pre-coating paint decontamination",
    ],
    benefits: [
      "Water and dirt bead off effortlessly",
      "Extreme gloss amplification",
      "Chemical and UV resistance",
    ],
    gallery: [
      {
        before:
          "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80",
        after:
          "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
      },
    ],
  },
  {
    id: "wrap",
    name: "Full Car Wrap",
    category: "NO. 4 / WRAPPING",
    description:
      "Transform your vehicle's color and finish with precision-cut premium vinyl.",
    tagline: "New look. Same car. Total transformation.",
    basePrice: 8000,
    tags: ["CUSTOM COLORS", "REVERSIBLE", "MATTE / GLOSS / SATIN"],
    icon: "palette",
    includes: [
      "Full exterior vinyl application",
      "Color of your choice from premium range",
      "Hood, roof, and trunk",
      "All bumpers and side panels",
      "Door handles and mirrors",
    ],
    benefits: [
      "Fully reversible — return to factory color",
      "Protects original paint beneath",
      "Hundreds of finishes to choose from",
    ],
    gallery: [
      {
        before:
          "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
        after:
          "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
      },
    ],
  },
  {
    id: "tint",
    name: "Window Tinting",
    category: "NO. 5 / TINTING",
    description:
      "Ceramic-grade window film for heat rejection, privacy, and UV protection.",
    tagline: "Cool interior. Sleek exterior. Zero compromise.",
    basePrice: 1200,
    tags: ["UV BLOCK", "HEAT REJECT", "CERAMIC GRADE"],
    icon: "wb_sunny",
    includes: [
      "All side windows",
      "Rear windshield",
      "Windshield visor strip (optional)",
      "Precision computer-cut templates",
      "Ceramic film (no signal interference)",
    ],
    benefits: [
      "Blocks up to 99% of UV rays",
      "Significantly reduces cabin heat",
      "Enhances vehicle's exterior appearance",
    ],
    gallery: [
      {
        before:
          "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
        after:
          "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80",
      },
    ],
  },
  {
    id: "polish",
    name: "Paint Correction",
    category: "NO. 6 / DETAILING",
    description:
      "Multi-stage machine polishing to eliminate swirls, scratches, and oxidation.",
    tagline: "Remove the past. Reveal the perfect.",
    basePrice: 1800,
    tags: ["SWIRL FREE", "HIGH GLOSS", "2-STAGE POLISH"],
    icon: "auto_fix_high",
    includes: [
      "Wash and full decontamination",
      "Clay bar treatment",
      "2-stage machine polish",
      "Swirl and scratch removal",
      "Final wax or sealant layer",
    ],
    benefits: [
      "Restores true depth and clarity to paint",
      "Removes years of wash-induced defects",
      "Essential before any coating application",
    ],
    gallery: [
      {
        before:
          "https://images.unsplash.com/photo-1635774855317-edf3ee4463db?w=800&q=80",
        after:
          "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80",
      },
    ],
  },
];

export default services;
