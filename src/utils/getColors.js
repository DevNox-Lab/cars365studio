export const CAR_COLORS = [
  // Whites
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Arctic White', hex: '#F8F9FA' },
  { name: 'Pearl White', hex: '#F5F5F0' },
  { name: 'Ivory White', hex: '#FFF8E7' },

  // Blacks
  { name: 'Black', hex: '#1A1A1A' },
  { name: 'Jet Black', hex: '#0D0D0D' },
  { name: 'Obsidian Black', hex: '#111111' },
  { name: 'Satin Black', hex: '#222222' },

  // Silvers & Greys
  { name: 'Silver', hex: '#C0C0C0' },
  { name: 'Metallic Silver', hex: '#A8A9AD' },
  { name: 'Titanium Silver', hex: '#9FA3A7' },
  { name: 'Gray', hex: '#808080' },
  { name: 'Dark Gray', hex: '#4A4A4A' },
  { name: 'Gunmetal Grey', hex: '#5C5C5C' },
  { name: 'Graphite Grey', hex: '#4A4A4A' },
  { name: 'Nardo Grey', hex: '#8A8D8F' },

  // Blues
  { name: 'Blue', hex: '#0057B8' },
  { name: 'Light Blue', hex: '#6FA8DC' },
  { name: 'Sky Blue', hex: '#4A90B8' },
  { name: 'Miami Blue', hex: '#00AEEF' }, // Porsche
  { name: 'Navy Blue', hex: '#1C2B4A' },
  { name: 'Midnight Blue', hex: '#102542' },
  { name: 'French Racing Blue', hex: '#003DA5' }, // Bugatti
  { name: 'China Blue', hex: '#5A7DAA' }, // G-Wagon

  // Reds
  { name: 'Red', hex: '#D32F2F' },
  { name: 'Racing Red', hex: '#C0392B' },
  { name: 'Rosso Corsa', hex: '#D40000' }, // Ferrari
  { name: 'Maroon', hex: '#800000' },
  { name: 'Burgundy', hex: '#6D1A2A' },

  // Greens
  { name: 'Green', hex: '#2E7D32' },
  { name: 'British Racing Green', hex: '#1A4A2E' }, // Aston Martin, Bentley, Jaguar
  { name: 'Emerald Green', hex: '#0F8A5F' },
  { name: 'Olive Green', hex: '#556B2F' },
  { name: 'Verde Mantis', hex: '#39FF14' }, // Lamborghini

  // Yellows
  { name: 'Yellow', hex: '#FBC02D' },
  { name: 'Speed Yellow', hex: '#FFD100' }, // Porsche
  { name: 'Giallo Modena', hex: '#FFD700' }, // Ferrari
  { name: 'Solar Yellow', hex: '#F7D117' },

  // Oranges
  { name: 'Orange', hex: '#F57C00' },
  { name: 'Lava Orange', hex: '#F04E23' }, // Porsche
  { name: 'Sunset Orange', hex: '#D4511E' },
  { name: 'Papaya Orange', hex: '#FF6F00' }, // McLaren

  // Golds & Browns
  { name: 'Gold', hex: '#C5A84F' },
  { name: 'Champagne Gold', hex: '#C5A84F' }, // Rolls-Royce, Bentley
  { name: 'Rose Gold', hex: '#B8736A' },
  { name: 'Brown', hex: '#795548' },
  { name: 'Bronze', hex: '#8B5E3C' },

  // Beiges
  { name: 'Beige', hex: '#C8B89A' },
  { name: 'Sand Beige', hex: '#C8B89A' },
  { name: 'Cream Ivory', hex: '#E8DFC8' },
  { name: 'Desert Sand', hex: '#C2B280' }, // Jeep, G-Wagon

  // Purples
  { name: 'Purple', hex: '#6A1B9A' },
  { name: 'Amethyst Purple', hex: '#6A0DAD' },
  { name: 'Cosmic Purple', hex: '#5A3D7A' },

  // Special Luxury Colors
  { name: 'Pink', hex: '#E91E63' },
  { name: 'Turquoise', hex: '#40E0D0' },
  { name: 'Teal', hex: '#008080' },
];

export const getColorName = (hex) =>
  CAR_COLORS.find((color) => color.hex.toLowerCase() === hex?.toLowerCase())
    ?.name ||
  hex ||
  '—';
