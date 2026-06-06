/**
 * CARS DATA — Dubai Auto Services Platform
 *
 * All vehicles launched after 2010, grouped by manufacturer.
 * Each car carries per-service pricing in AED (Dubai market averages, 2024-2025).
 *
 * Pricing tiers are based on vehicle class:
 *   CLASS A → Coupe / Hatchback
 *   CLASS B → Sedan / Wagon
 *   CLASS C → SUV / 4x4
 *
 * Service pricing sourced from Dubai market rates (XPEL, 3M, Suntop, RMA PPF,
 * Topaz Detailing, SuperQuick, CarMantra, Cobone listings, Dubizzle 2024-2025).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * SERVICE ID → PRICE REFERENCE (AED, Dubai avg 2024-2025)
 * ─────────────────────────────────────────────────────────────────────────────
 * front-ppf          Full Front PPF
 *   Coupe/Hatch:  3,500 | Sedan/Wagon: 4,000 | SUV/4x4: 5,000
 *
 * full-ppf           Full Body PPF
 *   Coupe/Hatch: 10,500 | Sedan/Wagon: 12,500 | SUV/4x4: 16,000
 *
 * ceramic            Ceramic Coating (full exterior, 5-yr warranty tier)
 *   Coupe/Hatch:  1,800 | Sedan/Wagon:  2,200 | SUV/4x4:  2,800
 *
 * wrap               Full Car Wrap (premium vinyl, colour-change)
 *   Coupe/Hatch:  5,000 | Sedan/Wagon:  7,000 | SUV/4x4: 10,500
 *
 * tint               Window Tinting (ceramic film, all windows)
 *   Coupe/Hatch:    700 | Sedan/Wagon:    900 | SUV/4x4:  1,100
 *
 * polish             Paint Correction (2-stage machine polish)
 *   Coupe/Hatch:  1,200 | Sedan/Wagon:  1,600 | SUV/4x4:  2,000
 *
 * interior-detailing Interior Detailing (steam + leather + deep clean)
 *   Coupe/Hatch:    550 | Sedan/Wagon:    700 | SUV/4x4:    900
 *
 * seat-upholstery    Seat Upholstery Replacement (full re-trim)
 *   Coupe/Hatch:  3,500 | Sedan/Wagon:  4,500 | SUV/4x4:  5,500
 *
 * dashboard-wrapping Dashboard Wrapping (leather / Alcantara / vinyl)
 *   Coupe/Hatch:  1,800 | Sedan/Wagon:  2,000 | SUV/4x4:  2,500
 *
 * bodykit-full       Full Body Kit Installation + paint match
 *   Coupe/Hatch:  4,500 | Sedan/Wagon:  5,000 | SUV/4x4:  6,500
 *
 * carbon-hood        Carbon Fiber Hood Installation
 *   Coupe/Hatch:  3,000 | Sedan/Wagon:  3,500 | SUV/4x4:  4,500
 *
 * facelift-complete  Complete Facelift Conversion
 *   Coupe/Hatch: 12,000 | Sedan/Wagon: 15,000 | SUV/4x4: 20,000
 *
 * ecu-remap          ECU Remapping (Stage 1/2/3)
 *   Coupe/Hatch:  2,000 | Sedan/Wagon:  2,500 | SUV/4x4:  3,000
 *
 * exhaust-catback    Cat-Back Exhaust Installation
 *   Coupe/Hatch:  2,500 | Sedan/Wagon:  3,000 | SUV/4x4:  3,800
 *
 * accessory-roof-rack Roof Rack Installation
 *   Coupe/Hatch:    N/A | Sedan/Wagon:  1,200 | SUV/4x4:  1,500
 *
 * performance-parts  Performance Parts Installation
 *   Coupe/Hatch:  1,200 | Sedan/Wagon:  1,500 | SUV/4x4:  2,000
 *
 * ambient-lighting   Ambient Lighting Installation (RGB / fiber)
 *   Coupe/Hatch:  1,500 | Sedan/Wagon:  1,800 | SUV/4x4:  2,200
 *
 * star-roof          Starlight Headliner Installation
 *   Coupe/Hatch:  3,000 | Sedan/Wagon:  4,000 | SUV/4x4:  5,000
 *
 * custom-rims        Custom Wheel Installation (per wheel, avg set of 4)
 *   Coupe/Hatch:    700 | Sedan/Wagon:    800 | SUV/4x4:  1,000
 *
 * custom-consultation Vehicle Customization Consultation
 *   All classes:    500
 *
 * leather-seat-install Leather Seat Installation
 *   Coupe/Hatch:  4,000 | Sedan/Wagon:  5,000 | SUV/4x4:  6,500
 *
 * roof-lining-replacement Roof Lining Replacement
 *   Coupe/Hatch:  1,200 | Sedan/Wagon:  1,500 | SUV/4x4:  2,000
 *
 * steering-wheel-wrap Steering Wheel Wrap (leather / Alcantara)
 *   All classes:    800
 *
 * door-panel-custom  Door Panel Customization
 *   Coupe/Hatch:  1,000 | Sedan/Wagon:  1,200 | SUV/4x4:  1,500
 *
 * wide-body-kit      Wide Body Kit Installation
 *   Coupe/Hatch:  7,000 | Sedan/Wagon:  8,000 | SUV/4x4: 10,000
 *
 * carbon-interior-trim Carbon Fiber Interior Trim
 *   All classes:  1,500
 *
 * headlight-upgrade  Headlight Upgrade / LED-HID Conversion
 *   All classes:  1,500
 *
 * wheel-alignment    Wheel Alignment & Balancing
 *   All classes:    400
 * ─────────────────────────────────────────────────────────────────────────────
 */

// Helper: build a pricing map for a given class
// classKey: 'coupe_hatch' | 'sedan_wagon' | 'suv_4x4'
const PRICING = {
  coupe_hatch: {
    'front-ppf': 3500,
    'full-ppf': 10500,
    ceramic: 1800,
    wrap: 5000,
    tint: 700,
    polish: 1200,
    'interior-detailing': 550,
    'seat-upholstery': 3500,
    'dashboard-wrapping': 1800,
    'bodykit-full': 4500,
    'carbon-hood': 3000,
    'facelift-complete': 12000,
    'ecu-remap': 2000,
    'exhaust-catback': 2500,
    'accessory-roof-rack': null,
    'performance-parts': 1200,
    'ambient-lighting': 1500,
    'star-roof': 3000,
    'custom-rims': 700,
    'custom-consultation': 500,
    'leather-seat-install': 4000,
    'roof-lining-replacement': 1200,
    'steering-wheel-wrap': 800,
    'door-panel-custom': 1000,
    'wide-body-kit': 7000,
    'carbon-interior-trim': 1500,
    'headlight-upgrade': 1500,
    'wheel-alignment': 400,
  },
  sedan_wagon: {
    'front-ppf': 4000,
    'full-ppf': 12500,
    ceramic: 2200,
    wrap: 7000,
    tint: 900,
    polish: 1600,
    'interior-detailing': 700,
    'seat-upholstery': 4500,
    'dashboard-wrapping': 2000,
    'bodykit-full': 5000,
    'carbon-hood': 3500,
    'facelift-complete': 15000,
    'ecu-remap': 2500,
    'exhaust-catback': 3000,
    'accessory-roof-rack': 1200,
    'performance-parts': 1500,
    'ambient-lighting': 1800,
    'star-roof': 4000,
    'custom-rims': 800,
    'custom-consultation': 500,
    'leather-seat-install': 5000,
    'roof-lining-replacement': 1500,
    'steering-wheel-wrap': 800,
    'door-panel-custom': 1200,
    'wide-body-kit': 8000,
    'carbon-interior-trim': 1500,
    'headlight-upgrade': 1500,
    'wheel-alignment': 400,
  },
  suv_4x4: {
    'front-ppf': 5000,
    'full-ppf': 16000,
    ceramic: 2800,
    wrap: 10500,
    tint: 1100,
    polish: 2000,
    'interior-detailing': 900,
    'seat-upholstery': 5500,
    'dashboard-wrapping': 2500,
    'bodykit-full': 6500,
    'carbon-hood': 4500,
    'facelift-complete': 20000,
    'ecu-remap': 3000,
    'exhaust-catback': 3800,
    'accessory-roof-rack': 1500,
    'performance-parts': 2000,
    'ambient-lighting': 2200,
    'star-roof': 5000,
    'custom-rims': 1000,
    'custom-consultation': 500,
    'leather-seat-install': 6500,
    'roof-lining-replacement': 2000,
    'steering-wheel-wrap': 800,
    'door-panel-custom': 1500,
    'wide-body-kit': 10000,
    'carbon-interior-trim': 1500,
    'headlight-upgrade': 1500,
    'wheel-alignment': 400,
  },
};

// ─── CAR DATABASE ─────────────────────────────────────────────────────────────
// Fields per entry:
//   id           — unique slug
//   manufacturer — brand name
//   model        — model name
//   yearFrom     — launch / first model year (post-2010)
//   carType      — display label matching your form field
//   classKey     — internal key for pricing lookup
//   color        — default hex (user can override in form)
//   pricing      — resolved AED pricing map for all 28 services
// ─────────────────────────────────────────────────────────────────────────────

function buildCar(id, manufacturer, model, yearFrom, carType, classKey, color = '#1a1a1a') {
  return {
    id,
    manufacturer,
    model,
    yearFrom,
    carType,
    classKey,
    color,
    pricing: PRICING[classKey],
  };
}

export const cars = [
  // ── TOYOTA ──────────────────────────────────────────────────────────────────
  buildCar('toyota-camry-xv70', 'Toyota', 'Camry (XV70)', 2018, 'Sedan', 'sedan_wagon'),
  buildCar('toyota-corolla-e210', 'Toyota', 'Corolla (E210)', 2019, 'Sedan', 'sedan_wagon'),
  buildCar('toyota-yaris-xp150', 'Toyota', 'Yaris (XP150)', 2011, 'Hatchback', 'coupe_hatch'),
  buildCar('toyota-yaris-xp210', 'Toyota', 'Yaris (XP210)', 2020, 'Sedan / Hatchback', 'coupe_hatch'),
  buildCar('toyota-land-cruiser-j300', 'Toyota', 'Land Cruiser (J300)', 2021, 'SUV / 4x4', 'suv_4x4'),
  buildCar('toyota-land-cruiser-j200', 'Toyota', 'Land Cruiser (J200)', 2012, 'SUV / 4x4', 'suv_4x4'),
  buildCar('toyota-land-cruiser-prado-j150', 'Toyota', 'Land Cruiser Prado (J150)', 2013, 'SUV / 4x4', 'suv_4x4'),
  buildCar('toyota-fortuner-an160', 'Toyota', 'Fortuner (AN160)', 2016, 'SUV / 4x4', 'suv_4x4'),
  buildCar('toyota-rav4-xa50', 'Toyota', 'RAV4 (XA50)', 2019, 'SUV / 4x4', 'suv_4x4'),
  buildCar('toyota-hilux-an120', 'Toyota', 'Hilux (AN120/AN130)', 2016, 'SUV / 4x4', 'suv_4x4'),
  buildCar('toyota-rush', 'Toyota', 'Rush', 2018, 'SUV / 4x4', 'suv_4x4'),
  buildCar('toyota-innova-crysta', 'Toyota', 'Innova Crysta', 2016, 'SUV / 4x4', 'suv_4x4'),
  buildCar('toyota-supra-a90', 'Toyota', 'GR Supra (A90)', 2019, 'Coupe', 'coupe_hatch'),
  buildCar('toyota-gr86-zn8', 'Toyota', 'GR86 (ZN8)', 2021, 'Coupe', 'coupe_hatch'),
  buildCar('toyota-gr-yaris', 'Toyota', 'GR Yaris', 2020, 'Hatchback', 'coupe_hatch'),
  buildCar('toyota-crown-s220', 'Toyota', 'Crown (S220)', 2023, 'Sedan', 'sedan_wagon'),

  // ── NISSAN ───────────────────────────────────────────────────────────────────
  buildCar('nissan-patrol-y62', 'Nissan', 'Patrol (Y62)', 2010, 'SUV / 4x4', 'suv_4x4'),
  buildCar('nissan-patrol-y62-facelift', 'Nissan', 'Patrol (Y62 Facelift)', 2020, 'SUV / 4x4', 'suv_4x4'),
  buildCar('nissan-altima-l34', 'Nissan', 'Altima (L34)', 2019, 'Sedan', 'sedan_wagon'),
  buildCar('nissan-sentra-b18', 'Nissan', 'Sentra (B18)', 2020, 'Sedan', 'sedan_wagon'),
  buildCar('nissan-sunny-n18', 'Nissan', 'Sunny (N18)', 2020, 'Sedan', 'sedan_wagon'),
  buildCar('nissan-x-trail-t32', 'Nissan', 'X-Trail (T32)', 2014, 'SUV / 4x4', 'suv_4x4'),
  buildCar('nissan-x-trail-t33', 'Nissan', 'X-Trail (T33)', 2022, 'SUV / 4x4', 'suv_4x4'),
  buildCar('nissan-kicks-p15', 'Nissan', 'Kicks (P15)', 2017, 'SUV / 4x4', 'suv_4x4'),
  buildCar('nissan-pathfinder-r52', 'Nissan', 'Pathfinder (R52)', 2013, 'SUV / 4x4', 'suv_4x4'),
  buildCar('nissan-murano-z52', 'Nissan', 'Murano (Z52)', 2015, 'SUV / 4x4', 'suv_4x4'),
  buildCar('nissan-gt-r-r35', 'Nissan', 'GT-R (R35)', 2007, 'Coupe', 'coupe_hatch'),
  buildCar('nissan-370z-z34', 'Nissan', 'Z (Z34 / RZ34)', 2009, 'Coupe', 'coupe_hatch'),
  buildCar('nissan-z-rz34', 'Nissan', 'Nissan Z (RZ34)', 2022, 'Coupe', 'coupe_hatch'),
  buildCar('nissan-navara-d23', 'Nissan', 'Navara (D23)', 2015, 'SUV / 4x4', 'suv_4x4'),

  // ── MITSUBISHI ───────────────────────────────────────────────────────────────
  buildCar('mitsubishi-pajero-v80', 'Mitsubishi', 'Pajero (V80/V90)', 2006, 'SUV / 4x4', 'suv_4x4'),
  buildCar('mitsubishi-outlander-gf', 'Mitsubishi', 'Outlander (GF/GG)', 2012, 'SUV / 4x4', 'suv_4x4'),
  buildCar('mitsubishi-outlander-gn', 'Mitsubishi', 'Outlander (GN)', 2021, 'SUV / 4x4', 'suv_4x4'),
  buildCar('mitsubishi-eclipse-cross', 'Mitsubishi', 'Eclipse Cross', 2017, 'SUV / 4x4', 'suv_4x4'),
  buildCar('mitsubishi-asx-ga', 'Mitsubishi', 'ASX (GA)', 2010, 'SUV / 4x4', 'suv_4x4'),
  buildCar('mitsubishi-lancer-ex', 'Mitsubishi', 'Lancer Ex', 2010, 'Sedan', 'sedan_wagon'),

  // ── HONDA ────────────────────────────────────────────────────────────────────
  buildCar('honda-civic-fe', 'Honda', 'Civic (FE/FE1)', 2022, 'Sedan', 'sedan_wagon'),
  buildCar('honda-civic-fk', 'Honda', 'Civic (FK / Hatchback)', 2017, 'Hatchback', 'coupe_hatch'),
  buildCar('honda-accord-cr', 'Honda', 'Accord (CR)', 2013, 'Sedan', 'sedan_wagon'),
  buildCar('honda-accord-cv', 'Honda', 'Accord (CV)', 2018, 'Sedan', 'sedan_wagon'),
  buildCar('honda-crv-rw', 'Honda', 'CR-V (RW)', 2017, 'SUV / 4x4', 'suv_4x4'),
  buildCar('honda-crv-rs', 'Honda', 'CR-V (RS)', 2023, 'SUV / 4x4', 'suv_4x4'),
  buildCar('honda-pilot-yf', 'Honda', 'Pilot (YF6)', 2022, 'SUV / 4x4', 'suv_4x4'),
  buildCar('honda-hrv-rz', 'Honda', 'HR-V (RZ)', 2021, 'SUV / 4x4', 'suv_4x4'),
  buildCar('honda-type-r-fl5', 'Honda', 'Civic Type R (FL5)', 2022, 'Hatchback', 'coupe_hatch'),
  buildCar('honda-passport-yf', 'Honda', 'Passport (YF5)', 2019, 'SUV / 4x4', 'suv_4x4'),

  // ── HYUNDAI ──────────────────────────────────────────────────────────────────
  buildCar('hyundai-elantra-cn7', 'Hyundai', 'Elantra (CN7)', 2021, 'Sedan', 'sedan_wagon'),
  buildCar('hyundai-elantra-ad', 'Hyundai', 'Elantra (AD)', 2016, 'Sedan', 'sedan_wagon'),
  buildCar('hyundai-sonata-dn8', 'Hyundai', 'Sonata (DN8)', 2020, 'Sedan', 'sedan_wagon'),
  buildCar('hyundai-tucson-nx4', 'Hyundai', 'Tucson (NX4)', 2021, 'SUV / 4x4', 'suv_4x4'),
  buildCar('hyundai-santa-fe-mx5', 'Hyundai', 'Santa Fe (MX5)', 2023, 'SUV / 4x4', 'suv_4x4'),
  buildCar('hyundai-creta-su2', 'Hyundai', 'Creta (SU2)', 2020, 'SUV / 4x4', 'suv_4x4'),
  buildCar('hyundai-palisade-lx2', 'Hyundai', 'Palisade (LX2)', 2019, 'SUV / 4x4', 'suv_4x4'),
  buildCar('hyundai-i30-pd', 'Hyundai', 'i30 (PD)', 2017, 'Hatchback', 'coupe_hatch'),
  buildCar('hyundai-veloster-js', 'Hyundai', 'Veloster (JS)', 2019, 'Coupe', 'coupe_hatch'),

  // ── KIA ──────────────────────────────────────────────────────────────────────
  buildCar('kia-cerato-bd', 'Kia', 'Cerato / Forte (BD)', 2019, 'Sedan', 'sedan_wagon'),
  buildCar('kia-k5-dl3', 'Kia', 'K5 / Optima (DL3)', 2020, 'Sedan', 'sedan_wagon'),
  buildCar('kia-sportage-nq5', 'Kia', 'Sportage (NQ5)', 2022, 'SUV / 4x4', 'suv_4x4'),
  buildCar('kia-sorento-mq4', 'Kia', 'Sorento (MQ4)', 2021, 'SUV / 4x4', 'suv_4x4'),
  buildCar('kia-telluride', 'Kia', 'Telluride', 2019, 'SUV / 4x4', 'suv_4x4'),
  buildCar('kia-stinger-ck', 'Kia', 'Stinger (CK)', 2017, 'Sedan', 'sedan_wagon'),
  buildCar('kia-carnival-ks', 'Kia', 'Carnival (KA4)', 2022, 'SUV / 4x4', 'suv_4x4'),
  buildCar('kia-seltos-sp2', 'Kia', 'Seltos (SP2)', 2019, 'SUV / 4x4', 'suv_4x4'),

  // ── MERCEDES-BENZ ────────────────────────────────────────────────────────────
  buildCar('mercedes-c-class-w206', 'Mercedes-Benz', 'C-Class (W206)', 2021, 'Sedan', 'sedan_wagon'),
  buildCar('mercedes-c-class-w205', 'Mercedes-Benz', 'C-Class (W205)', 2014, 'Sedan', 'sedan_wagon'),
  buildCar('mercedes-e-class-w213', 'Mercedes-Benz', 'E-Class (W213)', 2016, 'Sedan', 'sedan_wagon'),
  buildCar('mercedes-e-class-w214', 'Mercedes-Benz', 'E-Class (W214)', 2024, 'Sedan', 'sedan_wagon'),
  buildCar('mercedes-s-class-w222', 'Mercedes-Benz', 'S-Class (W222)', 2013, 'Sedan', 'sedan_wagon'),
  buildCar('mercedes-s-class-w223', 'Mercedes-Benz', 'S-Class (W223)', 2021, 'Sedan', 'sedan_wagon'),
  buildCar('mercedes-gla-h247', 'Mercedes-Benz', 'GLA (H247)', 2020, 'SUV / 4x4', 'suv_4x4'),
  buildCar('mercedes-glb-x247', 'Mercedes-Benz', 'GLB (X247)', 2019, 'SUV / 4x4', 'suv_4x4'),
  buildCar('mercedes-glc-x254', 'Mercedes-Benz', 'GLC (X254)', 2022, 'SUV / 4x4', 'suv_4x4'),
  buildCar('mercedes-gle-v167', 'Mercedes-Benz', 'GLE (V167)', 2019, 'SUV / 4x4', 'suv_4x4'),
  buildCar('mercedes-gls-x167', 'Mercedes-Benz', 'GLS (X167)', 2019, 'SUV / 4x4', 'suv_4x4'),
  buildCar('mercedes-g-class-w463', 'Mercedes-Benz', 'G-Class (W463)', 2018, 'SUV / 4x4', 'suv_4x4'),
  buildCar('mercedes-cla-c118', 'Mercedes-Benz', 'CLA (C118)', 2019, 'Coupe / Sedan', 'sedan_wagon'),
  buildCar('mercedes-amg-gt-r190', 'Mercedes-Benz', 'AMG GT (R190)', 2015, 'Coupe', 'coupe_hatch'),
  buildCar('mercedes-amg-c63-w206', 'Mercedes-Benz', 'AMG C 63 (W206)', 2023, 'Sedan', 'sedan_wagon'),

  // ── BMW ──────────────────────────────────────────────────────────────────────
  buildCar('bmw-3-series-g20', 'BMW', '3 Series (G20)', 2019, 'Sedan', 'sedan_wagon'),
  buildCar('bmw-5-series-g60', 'BMW', '5 Series (G60)', 2024, 'Sedan', 'sedan_wagon'),
  buildCar('bmw-5-series-g30', 'BMW', '5 Series (G30)', 2017, 'Sedan', 'sedan_wagon'),
  buildCar('bmw-7-series-g70', 'BMW', '7 Series (G70)', 2022, 'Sedan', 'sedan_wagon'),
  buildCar('bmw-x3-g01', 'BMW', 'X3 (G01)', 2017, 'SUV / 4x4', 'suv_4x4'),
  buildCar('bmw-x5-g05', 'BMW', 'X5 (G05)', 2018, 'SUV / 4x4', 'suv_4x4'),
  buildCar('bmw-x7-g07', 'BMW', 'X7 (G07)', 2019, 'SUV / 4x4', 'suv_4x4'),
  buildCar('bmw-4-series-g22', 'BMW', '4 Series Coupe (G22)', 2021, 'Coupe', 'coupe_hatch'),
  buildCar('bmw-m3-g80', 'BMW', 'M3 (G80)', 2021, 'Sedan', 'sedan_wagon'),
  buildCar('bmw-m4-g82', 'BMW', 'M4 (G82)', 2021, 'Coupe', 'coupe_hatch'),
  buildCar('bmw-m5-g90', 'BMW', 'M5 (G90)', 2024, 'Sedan', 'sedan_wagon'),
  buildCar('bmw-x6-g06', 'BMW', 'X6 (G06)', 2019, 'SUV / 4x4', 'suv_4x4'),
  buildCar('bmw-2-series-g42', 'BMW', '2 Series Coupe (G42)', 2021, 'Coupe', 'coupe_hatch'),

  // ── AUDI ─────────────────────────────────────────────────────────────────────
  buildCar('audi-a4-b9', 'Audi', 'A4 (B9)', 2016, 'Sedan', 'sedan_wagon'),
  buildCar('audi-a6-c8', 'Audi', 'A6 (C8)', 2018, 'Sedan', 'sedan_wagon'),
  buildCar('audi-a8-d5', 'Audi', 'A8 (D5)', 2017, 'Sedan', 'sedan_wagon'),
  buildCar('audi-q3-f3', 'Audi', 'Q3 (F3)', 2019, 'SUV / 4x4', 'suv_4x4'),
  buildCar('audi-q5-fy', 'Audi', 'Q5 (FY)', 2017, 'SUV / 4x4', 'suv_4x4'),
  buildCar('audi-q7-4m', 'Audi', 'Q7 (4M)', 2015, 'SUV / 4x4', 'suv_4x4'),
  buildCar('audi-q8-4m', 'Audi', 'Q8 (4M)', 2018, 'SUV / 4x4', 'suv_4x4'),
  buildCar('audi-rs6-c8', 'Audi', 'RS6 Avant (C8)', 2019, 'Wagon', 'sedan_wagon'),
  buildCar('audi-r8-typ4s', 'Audi', 'R8 (4S)', 2015, 'Coupe', 'coupe_hatch'),
  buildCar('audi-tt-8s', 'Audi', 'TT (8S)', 2014, 'Coupe', 'coupe_hatch'),
  buildCar('audi-s5-f5', 'Audi', 'S5 (F5)', 2017, 'Coupe', 'coupe_hatch'),
  buildCar('audi-rs3-8y', 'Audi', 'RS3 (8Y)', 2021, 'Sedan', 'sedan_wagon'),
  buildCar('audi-sq8-4m', 'Audi', 'SQ8 (4M)', 2019, 'SUV / 4x4', 'suv_4x4'),

  // ── VOLKSWAGEN ────────────────────────────────────────────────────────────────
  buildCar('vw-golf-8', 'Volkswagen', 'Golf (Mk8)', 2020, 'Hatchback', 'coupe_hatch'),
  buildCar('vw-gti-mk8', 'Volkswagen', 'Golf GTI (Mk8)', 2021, 'Hatchback', 'coupe_hatch'),
  buildCar('vw-golf-r-mk8', 'Volkswagen', 'Golf R (Mk8)', 2021, 'Hatchback', 'coupe_hatch'),
  buildCar('vw-jetta-mk7', 'Volkswagen', 'Jetta (Mk7)', 2018, 'Sedan', 'sedan_wagon'),
  buildCar('vw-passat-b8', 'Volkswagen', 'Passat (B8)', 2015, 'Sedan', 'sedan_wagon'),
  buildCar('vw-tiguan-ad1', 'Volkswagen', 'Tiguan (AD1)', 2016, 'SUV / 4x4', 'suv_4x4'),
  buildCar('vw-touareg-cr', 'Volkswagen', 'Touareg (CR)', 2018, 'SUV / 4x4', 'suv_4x4'),
  buildCar('vw-touareg-cr-2023', 'Volkswagen', 'Touareg (CR Facelift)', 2023, 'SUV / 4x4', 'suv_4x4'),
  buildCar('vw-id4-e21', 'Volkswagen', 'ID.4 (E21)', 2021, 'SUV / 4x4', 'suv_4x4'),

  // ── PORSCHE ──────────────────────────────────────────────────────────────────
  buildCar('porsche-911-992', 'Porsche', '911 (992)', 2019, 'Coupe', 'coupe_hatch'),
  buildCar('porsche-911-gt3-992', 'Porsche', '911 GT3 (992)', 2021, 'Coupe', 'coupe_hatch'),
  buildCar('porsche-718-cayman-982', 'Porsche', '718 Cayman (982)', 2016, 'Coupe', 'coupe_hatch'),
  buildCar('porsche-718-boxster-982', 'Porsche', '718 Boxster (982)', 2016, 'Coupe', 'coupe_hatch'),
  buildCar('porsche-macan-j1', 'Porsche', 'Macan (95B/J1)', 2014, 'SUV / 4x4', 'suv_4x4'),
  buildCar('porsche-cayenne-9ya', 'Porsche', 'Cayenne (9YA)', 2018, 'SUV / 4x4', 'suv_4x4'),
  buildCar('porsche-panamera-g2', 'Porsche', 'Panamera (G2)', 2016, 'Sedan', 'sedan_wagon'),
  buildCar('porsche-taycan-y1a', 'Porsche', 'Taycan (Y1A)', 2019, 'Sedan', 'sedan_wagon'),

  // ── LAMBORGHINI ──────────────────────────────────────────────────────────────
  buildCar('lamborghini-huracan-lp580', 'Lamborghini', 'Huracán EVO', 2014, 'Coupe', 'coupe_hatch'),
  buildCar('lamborghini-urus-la', 'Lamborghini', 'Urus (LA)', 2018, 'SUV / 4x4', 'suv_4x4'),
  buildCar('lamborghini-revuelto', 'Lamborghini', 'Revuelto', 2023, 'Coupe', 'coupe_hatch'),

  // ── FERRARI ──────────────────────────────────────────────────────────────────
  buildCar('ferrari-roma', 'Ferrari', 'Roma', 2020, 'Coupe', 'coupe_hatch'),
  buildCar('ferrari-sf90', 'Ferrari', 'SF90 Stradale', 2019, 'Coupe', 'coupe_hatch'),
  buildCar('ferrari-f8-tributo', 'Ferrari', 'F8 Tributo', 2019, 'Coupe', 'coupe_hatch'),
  buildCar('ferrari-296-gtb', 'Ferrari', '296 GTB', 2022, 'Coupe', 'coupe_hatch'),
  buildCar('ferrari-purosangue', 'Ferrari', 'Purosangue', 2022, 'SUV / 4x4', 'suv_4x4'),

  // ── MCLAREN ──────────────────────────────────────────────────────────────────
  buildCar('mclaren-720s-p14', 'McLaren', '720S (P14)', 2017, 'Coupe', 'coupe_hatch'),
  buildCar('mclaren-765lt', 'McLaren', '765LT', 2020, 'Coupe', 'coupe_hatch'),
  buildCar('mclaren-artura', 'McLaren', 'Artura', 2021, 'Coupe', 'coupe_hatch'),

  // ── BENTLEY ──────────────────────────────────────────────────────────────────
  buildCar('bentley-continental-gt-g3', 'Bentley', 'Continental GT (3rd Gen)', 2018, 'Coupe', 'coupe_hatch'),
  buildCar('bentley-bentayga-pg', 'Bentley', 'Bentayga', 2016, 'SUV / 4x4', 'suv_4x4'),
  buildCar('bentley-flying-spur-gv', 'Bentley', 'Flying Spur (5th Gen)', 2019, 'Sedan', 'sedan_wagon'),

  // ── ROLLS-ROYCE ──────────────────────────────────────────────────────────────
  buildCar('rr-ghost-rr12', 'Rolls-Royce', 'Ghost (RR12)', 2020, 'Sedan', 'sedan_wagon'),
  buildCar('rr-cullinan-rx', 'Rolls-Royce', 'Cullinan (RX)', 2018, 'SUV / 4x4', 'suv_4x4'),
  buildCar('rr-spectre', 'Rolls-Royce', 'Spectre', 2023, 'Coupe', 'coupe_hatch'),
  buildCar('rr-phantom-rr9', 'Rolls-Royce', 'Phantom (RR9)', 2017, 'Sedan', 'sedan_wagon'),

  // ── LEXUS ─────────────────────────────────────────────────────────────────────
  buildCar('lexus-is-xe30', 'Lexus', 'IS (XE30)', 2013, 'Sedan', 'sedan_wagon'),
  buildCar('lexus-es-xa10', 'Lexus', 'ES (XA10)', 2018, 'Sedan', 'sedan_wagon'),
  buildCar('lexus-ls-f5', 'Lexus', 'LS (XF50)', 2017, 'Sedan', 'sedan_wagon'),
  buildCar('lexus-lc-z100', 'Lexus', 'LC 500 (Z100)', 2017, 'Coupe', 'coupe_hatch'),
  buildCar('lexus-nx-az20', 'Lexus', 'NX (AZ20)', 2022, 'SUV / 4x4', 'suv_4x4'),
  buildCar('lexus-rx-al20', 'Lexus', 'RX (AL20)', 2016, 'SUV / 4x4', 'suv_4x4'),
  buildCar('lexus-rx-al30', 'Lexus', 'RX (AL30)', 2022, 'SUV / 4x4', 'suv_4x4'),
  buildCar('lexus-gx-j250', 'Lexus', 'GX (J250)', 2023, 'SUV / 4x4', 'suv_4x4'),
  buildCar('lexus-lx-j310', 'Lexus', 'LX (J310)', 2021, 'SUV / 4x4', 'suv_4x4'),
  buildCar('lexus-tx-al10', 'Lexus', 'TX (AL10)', 2023, 'SUV / 4x4', 'suv_4x4'),

  // ── INFINITI ──────────────────────────────────────────────────────────────────
  buildCar('infiniti-q50-v37', 'Infiniti', 'Q50 (V37)', 2013, 'Sedan', 'sedan_wagon'),
  buildCar('infiniti-q70-y51', 'Infiniti', 'Q70 / M (Y51)', 2011, 'Sedan', 'sedan_wagon'),
  buildCar('infiniti-qx60-l50', 'Infiniti', 'QX60 (L50)', 2013, 'SUV / 4x4', 'suv_4x4'),
  buildCar('infiniti-qx80-z62', 'Infiniti', 'QX80 (Z62)', 2010, 'SUV / 4x4', 'suv_4x4'),
  buildCar('infiniti-qx50-j55', 'Infiniti', 'QX50 (J55)', 2018, 'SUV / 4x4', 'suv_4x4'),

  // ── LAND ROVER ───────────────────────────────────────────────────────────────
  buildCar('landrover-range-rover-l460', 'Land Rover', 'Range Rover (L460)', 2022, 'SUV / 4x4', 'suv_4x4'),
  buildCar('landrover-range-rover-l405', 'Land Rover', 'Range Rover (L405)', 2012, 'SUV / 4x4', 'suv_4x4'),
  buildCar('landrover-rrsp-l494', 'Land Rover', 'Range Rover Sport (L494)', 2013, 'SUV / 4x4', 'suv_4x4'),
  buildCar('landrover-rrsp-l461', 'Land Rover', 'Range Rover Sport (L461)', 2022, 'SUV / 4x4', 'suv_4x4'),
  buildCar('landrover-defender-l663', 'Land Rover', 'Defender (L663)', 2020, 'SUV / 4x4', 'suv_4x4'),
  buildCar('landrover-discovery-l462', 'Land Rover', 'Discovery (L462)', 2017, 'SUV / 4x4', 'suv_4x4'),
  buildCar('landrover-freelander-l359', 'Land Rover', 'Freelander 2 (L359)', 2006, 'SUV / 4x4', 'suv_4x4'),
  buildCar('landrover-evoque-l551', 'Land Rover', 'Range Rover Evoque (L551)', 2019, 'SUV / 4x4', 'suv_4x4'),
  buildCar('landrover-velar-l560', 'Land Rover', 'Range Rover Velar (L560)', 2017, 'SUV / 4x4', 'suv_4x4'),

  // ── JEEP ─────────────────────────────────────────────────────────────────────
  buildCar('jeep-wrangler-jl', 'Jeep', 'Wrangler (JL)', 2018, 'SUV / 4x4', 'suv_4x4'),
  buildCar('jeep-grand-cherokee-wl', 'Jeep', 'Grand Cherokee (WL)', 2021, 'SUV / 4x4', 'suv_4x4'),
  buildCar('jeep-compass-mp', 'Jeep', 'Compass (MP)', 2017, 'SUV / 4x4', 'suv_4x4'),
  buildCar('jeep-renegade-bu', 'Jeep', 'Renegade (BU)', 2015, 'SUV / 4x4', 'suv_4x4'),
  buildCar('jeep-gladiator-jt', 'Jeep', 'Gladiator (JT)', 2019, 'SUV / 4x4', 'suv_4x4'),

  // ── FORD ─────────────────────────────────────────────────────────────────────
  buildCar('ford-mustang-s650', 'Ford', 'Mustang (S650)', 2024, 'Coupe', 'coupe_hatch'),
  buildCar('ford-mustang-s550', 'Ford', 'Mustang (S550)', 2015, 'Coupe', 'coupe_hatch'),
  buildCar('ford-bronco', 'Ford', 'Bronco', 2021, 'SUV / 4x4', 'suv_4x4'),
  buildCar('ford-explorer-u625', 'Ford', 'Explorer (U625)', 2020, 'SUV / 4x4', 'suv_4x4'),
  buildCar('ford-expedition-u554', 'Ford', 'Expedition (U554)', 2018, 'SUV / 4x4', 'suv_4x4'),
  buildCar('ford-edge-cd539', 'Ford', 'Edge (CD539)', 2015, 'SUV / 4x4', 'suv_4x4'),
  buildCar('ford-f150-p702', 'Ford', 'F-150 (14th Gen)', 2021, 'SUV / 4x4', 'suv_4x4'),
  buildCar('ford-raptor-p702', 'Ford', 'F-150 Raptor (P702)', 2021, 'SUV / 4x4', 'suv_4x4'),

  // ── CHEVROLET ─────────────────────────────────────────────────────────────────
  buildCar('chevrolet-camaro-6g', 'Chevrolet', 'Camaro (6th Gen)', 2016, 'Coupe', 'coupe_hatch'),
  buildCar('chevrolet-corvette-c8', 'Chevrolet', 'Corvette (C8)', 2020, 'Coupe', 'coupe_hatch'),
  buildCar('chevrolet-tahoe-t1xx', 'Chevrolet', 'Tahoe (T1XX)', 2021, 'SUV / 4x4', 'suv_4x4'),
  buildCar('chevrolet-suburban-t1xx', 'Chevrolet', 'Suburban (T1XX)', 2021, 'SUV / 4x4', 'suv_4x4'),
  buildCar('chevrolet-silverado-t1xx', 'Chevrolet', 'Silverado (T1XX)', 2019, 'SUV / 4x4', 'suv_4x4'),
  buildCar('chevrolet-malibu-v300', 'Chevrolet', 'Malibu (9th Gen)', 2016, 'Sedan', 'sedan_wagon'),
  buildCar('chevrolet-traverse-c1', 'Chevrolet', 'Traverse (C1)', 2018, 'SUV / 4x4', 'suv_4x4'),
  buildCar('chevrolet-trailblazer-gmt625', 'Chevrolet', 'TrailBlazer', 2021, 'SUV / 4x4', 'suv_4x4'),
  buildCar('chevrolet-equinox-gmt589', 'Chevrolet', 'Equinox (3rd Gen)', 2018, 'SUV / 4x4', 'suv_4x4'),

  // ── GMC ──────────────────────────────────────────────────────────────────────
  buildCar('gmc-yukon-t1xx', 'GMC', 'Yukon (T1XX)', 2021, 'SUV / 4x4', 'suv_4x4'),
  buildCar('gmc-sierra-t1xx', 'GMC', 'Sierra (T1XX)', 2019, 'SUV / 4x4', 'suv_4x4'),

  // ── CADILLAC ──────────────────────────────────────────────────────────────────
  buildCar('cadillac-escalade-gmt1xx', 'Cadillac', 'Escalade (GMT1XX)', 2021, 'SUV / 4x4', 'suv_4x4'),
  buildCar('cadillac-ct5', 'Cadillac', 'CT5', 2020, 'Sedan', 'sedan_wagon'),
  buildCar('cadillac-xt5-c1xx', 'Cadillac', 'XT5', 2017, 'SUV / 4x4', 'suv_4x4'),
  buildCar('cadillac-xt6-e2xx', 'Cadillac', 'XT6', 2020, 'SUV / 4x4', 'suv_4x4'),

  // ── DODGE / RAM ───────────────────────────────────────────────────────────────
  buildCar('dodge-charger-ld', 'Dodge', 'Charger (LD)', 2011, 'Sedan', 'sedan_wagon'),
  buildCar('dodge-charger-xe', 'Dodge', 'Charger (XE / Daytona EV)', 2024, 'Coupe', 'coupe_hatch'),
  buildCar('dodge-challenger-la', 'Dodge', 'Challenger (LA)', 2015, 'Coupe', 'coupe_hatch'),
  buildCar('dodge-durango-wdr', 'Dodge', 'Durango (WD)', 2011, 'SUV / 4x4', 'suv_4x4'),
  buildCar('ram-1500-dt', 'RAM', '1500 (DT)', 2019, 'SUV / 4x4', 'suv_4x4'),

  // ── SUBARU ────────────────────────────────────────────────────────────────────
  buildCar('subaru-wrx-vb', 'Subaru', 'WRX (VB)', 2022, 'Sedan', 'sedan_wagon'),
  buildCar('subaru-sti-va', 'Subaru', 'WRX STI (VA)', 2014, 'Sedan', 'sedan_wagon'),
  buildCar('subaru-brz-zd8', 'Subaru', 'BRZ (ZD8)', 2021, 'Coupe', 'coupe_hatch'),
  buildCar('subaru-outback-bs', 'Subaru', 'Outback (BS)', 2014, 'Wagon', 'sedan_wagon'),
  buildCar('subaru-forester-sk', 'Subaru', 'Forester (SK)', 2019, 'SUV / 4x4', 'suv_4x4'),

  // ── MAZDA ─────────────────────────────────────────────────────────────────────
  buildCar('mazda-3-bp', 'Mazda', 'Mazda3 (BP)', 2019, 'Sedan / Hatchback', 'coupe_hatch'),
  buildCar('mazda-6-gl', 'Mazda', 'Mazda6 (GL)', 2012, 'Sedan', 'sedan_wagon'),
  buildCar('mazda-cx5-kf', 'Mazda', 'CX-5 (KF)', 2017, 'SUV / 4x4', 'suv_4x4'),
  buildCar('mazda-cx9-tc', 'Mazda', 'CX-9 (TC)', 2016, 'SUV / 4x4', 'suv_4x4'),
  buildCar('mazda-mx5-nd', 'Mazda', 'MX-5 (ND)', 2015, 'Coupe', 'coupe_hatch'),
  buildCar('mazda-cx60-kh', 'Mazda', 'CX-60 (KH)', 2022, 'SUV / 4x4', 'suv_4x4'),

  // ── PEUGEOT ───────────────────────────────────────────────────────────────────
  buildCar('peugeot-208-p21', 'Peugeot', '208 (P21)', 2019, 'Hatchback', 'coupe_hatch'),
  buildCar('peugeot-308-p5', 'Peugeot', '308 (P5)', 2021, 'Hatchback', 'coupe_hatch'),
  buildCar('peugeot-508-r8', 'Peugeot', '508 (R8)', 2018, 'Sedan', 'sedan_wagon'),
  buildCar('peugeot-3008-p84', 'Peugeot', '3008 (P84)', 2016, 'SUV / 4x4', 'suv_4x4'),
  buildCar('peugeot-5008-p87', 'Peugeot', '5008 (P87)', 2017, 'SUV / 4x4', 'suv_4x4'),

  // ── RENAULT ───────────────────────────────────────────────────────────────────
  buildCar('renault-megane-mk4', 'Renault', 'Mégane (Mk4)', 2016, 'Hatchback', 'coupe_hatch'),
  buildCar('renault-talisman', 'Renault', 'Talisman', 2015, 'Sedan', 'sedan_wagon'),
  buildCar('renault-koleos-hy', 'Renault', 'Koleos (HY)', 2017, 'SUV / 4x4', 'suv_4x4'),

  // ── VOLVO ─────────────────────────────────────────────────────────────────────
  buildCar('volvo-s60-z', 'Volvo', 'S60 (Z-Series)', 2018, 'Sedan', 'sedan_wagon'),
  buildCar('volvo-s90-p', 'Volvo', 'S90 (P-Series)', 2016, 'Sedan', 'sedan_wagon'),
  buildCar('volvo-xc40-536', 'Volvo', 'XC40 (536)', 2017, 'SUV / 4x4', 'suv_4x4'),
  buildCar('volvo-xc60-u', 'Volvo', 'XC60 (U-Series)', 2017, 'SUV / 4x4', 'suv_4x4'),
  buildCar('volvo-xc90-l', 'Volvo', 'XC90 (L-Series)', 2015, 'SUV / 4x4', 'suv_4x4'),

  // ── TESLA ─────────────────────────────────────────────────────────────────────
  buildCar('tesla-model-3-y3', 'Tesla', 'Model 3 (Highland)', 2023, 'Sedan', 'sedan_wagon'),
  buildCar('tesla-model-s-plaid', 'Tesla', 'Model S (Plaid)', 2021, 'Sedan', 'sedan_wagon'),
  buildCar('tesla-model-x-plaid', 'Tesla', 'Model X (Plaid)', 2021, 'SUV / 4x4', 'suv_4x4'),
  buildCar('tesla-model-y-rwd', 'Tesla', 'Model Y (RWD)', 2021, 'SUV / 4x4', 'suv_4x4'),
  buildCar('tesla-cybertruck', 'Tesla', 'Cybertruck', 2023, 'SUV / 4x4', 'suv_4x4'),

  // ── GENESIS ───────────────────────────────────────────────────────────────────
  buildCar('genesis-g70-ik', 'Genesis', 'G70 (IK)', 2018, 'Sedan', 'sedan_wagon'),
  buildCar('genesis-g80-rg3', 'Genesis', 'G80 (RG3)', 2021, 'Sedan', 'sedan_wagon'),
  buildCar('genesis-g90-hi', 'Genesis', 'G90 (HI)', 2022, 'Sedan', 'sedan_wagon'),
  buildCar('genesis-gv70-jk1', 'Genesis', 'GV70 (JK1)', 2021, 'SUV / 4x4', 'suv_4x4'),
  buildCar('genesis-gv80-jx1', 'Genesis', 'GV80 (JX1)', 2020, 'SUV / 4x4', 'suv_4x4'),

  // ── LINCOLN ───────────────────────────────────────────────────────────────────
  buildCar('lincoln-navigator-u554', 'Lincoln', 'Navigator (L663)', 2018, 'SUV / 4x4', 'suv_4x4'),
  buildCar('lincoln-aviator-cd9', 'Lincoln', 'Aviator (CD9)', 2020, 'SUV / 4x4', 'suv_4x4'),

  // ── MASERATI ──────────────────────────────────────────────────────────────────
  buildCar('maserati-ghibli-m157', 'Maserati', 'Ghibli (M157)', 2013, 'Sedan', 'sedan_wagon'),
  buildCar('maserati-quattroporte-m156', 'Maserati', 'Quattroporte (M156)', 2013, 'Sedan', 'sedan_wagon'),
  buildCar('maserati-levante', 'Maserati', 'Levante', 2016, 'SUV / 4x4', 'suv_4x4'),
  buildCar('maserati-grecale', 'Maserati', 'Grecale', 2022, 'SUV / 4x4', 'suv_4x4'),
  buildCar('maserati-mc20', 'Maserati', 'MC20', 2020, 'Coupe', 'coupe_hatch'),

  // ── ALFA ROMEO ────────────────────────────────────────────────────────────────
  buildCar('alfa-giulia-952', 'Alfa Romeo', 'Giulia (952)', 2016, 'Sedan', 'sedan_wagon'),
  buildCar('alfa-stelvio-949', 'Alfa Romeo', 'Stelvio (949)', 2017, 'SUV / 4x4', 'suv_4x4'),
  buildCar('alfa-tonale-966', 'Alfa Romeo', 'Tonale (966)', 2022, 'SUV / 4x4', 'suv_4x4'),

  // ── JAGUAR ────────────────────────────────────────────────────────────────────
  buildCar('jaguar-f-type-x152', 'Jaguar', 'F-Type (X152)', 2012, 'Coupe', 'coupe_hatch'),
  buildCar('jaguar-xe-x760', 'Jaguar', 'XE (X760)', 2015, 'Sedan', 'sedan_wagon'),
  buildCar('jaguar-xf-x260', 'Jaguar', 'XF (X260)', 2016, 'Sedan', 'sedan_wagon'),
  buildCar('jaguar-fpace-x761', 'Jaguar', 'F-Pace (X761)', 2016, 'SUV / 4x4', 'suv_4x4'),
  buildCar('jaguar-epace-x540', 'Jaguar', 'E-Pace (X540)', 2017, 'SUV / 4x4', 'suv_4x4'),

  // ── CADILLAC LYRIQ ────────────────────────────────────────────────────────────
  buildCar('cadillac-lyriq', 'Cadillac', 'Lyriq', 2023, 'SUV / 4x4', 'suv_4x4'),

  // ── ASTON MARTIN ──────────────────────────────────────────────────────────────
  buildCar('aston-vantage-amr', 'Aston Martin', 'Vantage (AMR21)', 2018, 'Coupe', 'coupe_hatch'),
  buildCar('aston-db11', 'Aston Martin', 'DB11', 2016, 'Coupe', 'coupe_hatch'),
  buildCar('aston-dbx707', 'Aston Martin', 'DBX 707', 2022, 'SUV / 4x4', 'suv_4x4'),

  // ── BUGATTI ───────────────────────────────────────────────────────────────────
  buildCar('bugatti-chiron', 'Bugatti', 'Chiron', 2016, 'Coupe', 'coupe_hatch'),
  buildCar('bugatti-tourbillon', 'Bugatti', 'Tourbillon', 2024, 'Coupe', 'coupe_hatch'),

  // ── KOENIGSEGG ────────────────────────────────────────────────────────────────
  buildCar('koenigsegg-agera-rs', 'Koenigsegg', 'Agera RS', 2015, 'Coupe', 'coupe_hatch'),
  buildCar('koenigsegg-gemera', 'Koenigsegg', 'Gemera', 2020, 'Coupe', 'coupe_hatch'),

  // ── PAGANI ────────────────────────────────────────────────────────────────────
  buildCar('pagani-huayra-bc', 'Pagani', 'Huayra BC', 2016, 'Coupe', 'coupe_hatch'),
  buildCar('pagani-utopia', 'Pagani', 'Utopia', 2022, 'Coupe', 'coupe_hatch'),
];

export default cars;