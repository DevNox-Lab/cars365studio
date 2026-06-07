import { useState, useRef, useEffect } from 'react';
import { usePackageBuilderContext } from '../context/PackageBuilderContext';

const CAR_COLORS = [
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

export default function BookingDetailsForm({ formData, onFormChange }) {
  const contextData = usePackageBuilderContext();
  const actualFormData = formData || contextData?.formData;
  const actualUpdateFormData = onFormChange || contextData?.updateFormData;

  const [colorOpen, setColorOpen] = useState(false);
  const colorDropdownRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (
        colorDropdownRef.current &&
        !colorDropdownRef.current.contains(e.target)
      ) {
        setColorOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const today = new Date().toISOString().split('T')[0];

  const inputClass =
    'w-full bg-surface-container border border-border-highlight rounded-xl px-4 py-3 font-body text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200';
  const labelClass =
    'font-mono text-[10px] text-primary uppercase tracking-[0.2em] mb-2 block';
  const sectionTitleClass =
    'font-headline font-bold text-xl text-on-surface uppercase tracking-wide mb-6 mt-10 pb-2 border-b border-border-highlight';

  return (
    <div className="flex flex-col gap-6 mt-12">
      {/* ── Visit Planning ── */}
      <div>
        <h3 className="font-headline font-bold text-xl text-on-surface uppercase tracking-wide mb-2">
          When are you planning to visit us?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className={labelClass}>Select Date</label>
            <input
              type="date"
              min={today}
              value={actualFormData.visitDate}
              onChange={(e) =>
                actualUpdateFormData('visitDate', e.target.value)
              }
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Select Time</label>
            <input
              type="time"
              value={actualFormData.visitTime}
              onChange={(e) =>
                actualUpdateFormData('visitTime', e.target.value)
              }
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* ── Customer Information ── */}
      <div>
        <h3 className={sectionTitleClass}>Your Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              value={actualFormData.userName}
              onChange={(e) => actualUpdateFormData('userName', e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Phone Number</label>
            <input
              type="tel"
              placeholder="+971 -- --- ----"
              value={actualFormData.userNumber}
              onChange={(e) =>
                actualUpdateFormData('userNumber', e.target.value)
              }
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* ── Vehicle Information ── */}
      <div>
        <h3 className={sectionTitleClass}>Vehicle Information</h3>
        <p className="font-body text-xs text-on-surface-variant mb-4">
          Model and Car Type are automatically populated from your car selection
          in Step One. You can adjust the year and color below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Model</label>
            <input
              type="text"
              placeholder="e.g. Porsche 911 GT3"
              value={actualFormData.model}
              readOnly
              className="w-full bg-surface border border-border-highlight rounded-xl px-4 py-3 font-body text-sm text-on-surface placeholder:text-outline focus:outline-none transition-colors duration-200 opacity-75 cursor-not-allowed"
            />
          </div>
          <div>
            <label className={labelClass}>Car Type</label>
            <input
              type="text"
              placeholder="e.g. Coupe / Sedan"
              value={actualFormData.carType}
              readOnly
              className="w-full bg-surface border border-border-highlight rounded-xl px-4 py-3 font-body text-sm text-on-surface placeholder:text-outline focus:outline-none transition-colors duration-200 opacity-75 cursor-not-allowed"
            />
          </div>
          <div>
            <label className={labelClass}>Year of Manufacture</label>
            <input
              type="number"
              placeholder="e.g. 2024"
              value={actualFormData.year}
              onChange={(e) => actualUpdateFormData('year', e.target.value)}
              className={inputClass}
            />
          </div>

          {/* ── Color Dropdown ── */}
          <div className="relative" ref={colorDropdownRef}>
            <label className={labelClass}>Color</label>
            <button
              type="button"
              onClick={() => setColorOpen((prev) => !prev)}
              className={`w-full flex items-center gap-3 bg-surface-container border rounded-xl px-4 py-3 cursor-pointer transition-colors duration-200 ${
                colorOpen
                  ? 'border-primary ring-1 ring-primary'
                  : 'border-border-highlight'
              }`}
            >
              <span
                className="w-[22px] h-[22px] rounded-[6px] flex-shrink-0 border border-white/10"
                style={{ backgroundColor: actualFormData.color }}
              />
              <span className="font-mono text-xs text-on-surface uppercase tracking-wide flex-1 text-left">
                {CAR_COLORS.find((c) => c.hex === actualFormData.color)?.name ??
                  actualFormData.color}
              </span>
              <svg
                className={`w-4 h-4 text-outline transition-transform duration-200 ${colorOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {colorOpen && (
              <div className="absolute z-50 top-[calc(100%+6px)] left-0 right-0 bg-surface border border-border-highlight rounded-xl shadow-2xl overflow-hidden max-h-72 overflow-y-auto">
                {CAR_COLORS.map((c) => (
                  <div
                    key={c.hex}
                    onClick={() => {
                      actualUpdateFormData('color', c.hex);
                      setColorOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer transition-colors duration-150 hover:bg-primary/10 ${
                      actualFormData.color === c.hex ? 'bg-primary/15' : ''
                    }`}
                  >
                    <span
                      className="w-[22px] h-[22px] rounded-[6px] flex-shrink-0 border border-white/10"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="font-mono text-[11px] text-on-surface uppercase tracking-wide flex-1">
                      {c.name}
                    </span>
                    {/* <span className="font-mono text-[10px] text-on-surface-variant">
                      {c.hex}
                    </span> */}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Plate Information ── */}
      <div>
        <h3 className={sectionTitleClass}>Plate Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Select City</label>
            <select
              value={actualFormData.city}
              onChange={(e) => actualUpdateFormData('city', e.target.value)}
              className={inputClass}
            >
              <option value="Dubai">Dubai</option>
              <option value="Abu Dhabi">Abu Dhabi</option>
              <option value="Sharjah">Sharjah</option>
              <option value="Ajman">Ajman</option>
              <option value="Umm Al Quwain">Umm Al Quwain</option>
              <option value="Ras Al Khaimah">Ras Al Khaimah</option>
              <option value="Fujairah">Fujairah</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Plate Type</label>
            <select
              value={actualFormData.plateType}
              onChange={(e) =>
                actualUpdateFormData('plateType', e.target.value)
              }
              className={inputClass}
            >
              <option value="Private">Private</option>
              <option value="Classic">Classic</option>
              <option value="Fun Vehicle">Fun Vehicle</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Plate Letter</label>
            <input
              type="text"
              placeholder="e.g. A"
              maxLength={2}
              value={actualFormData.plateLetter}
              onChange={(e) =>
                actualUpdateFormData(
                  'plateLetter',
                  e.target.value.toUpperCase()
                )
              }
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Plate Number</label>
            <input
              type="text"
              placeholder="e.g. 12345"
              value={actualFormData.plateNumber}
              onChange={(e) =>
                actualUpdateFormData('plateNumber', e.target.value)
              }
              className={inputClass}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
