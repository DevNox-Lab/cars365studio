import { usePackageBuilderContext } from '../context/PackageBuilderContext';

export default function BookingDetailsForm({ formData, onFormChange }) {
  // If props are provided, use them (standalone mode)
  // Otherwise use context (backward compatibility)
  const contextData = usePackageBuilderContext();
  const actualFormData = formData || contextData?.formData;
  const actualUpdateFormData = onFormChange || contextData?.updateFormData;

  const today = new Date().toISOString().split('T')[0];

  const inputClass =
    'w-full bg-surface-container border border-border-highlight rounded-xl px-4 py-3 font-body text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200';
  const labelClass = 'font-mono text-[10px] text-primary uppercase tracking-[0.2em] mb-2 block';
  const sectionTitleClass = 'font-headline font-bold text-xl text-on-surface uppercase tracking-wide mb-6 mt-10 pb-2 border-b border-border-highlight';

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
              onChange={(e) => actualUpdateFormData('visitDate', e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Select Time</label>
            <input
              type="time"
              value={actualFormData.visitTime}
              onChange={(e) => actualUpdateFormData('visitTime', e.target.value)}
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
              onChange={(e) => actualUpdateFormData('userNumber', e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* ── Vehicle Information ── */}
      <div>
        <h3 className={sectionTitleClass}>Vehicle Information</h3>
        <p className="font-body text-xs text-on-surface-variant mb-4">
          Model and Car Type are automatically populated from your car selection in Step One. You can adjust the year and color below.
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
          <div>
            <label className={labelClass}>Color</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={actualFormData.color}
                onChange={(e) => actualUpdateFormData('color', e.target.value)}
                className="w-[46px] h-[46px] rounded-xl cursor-pointer bg-surface-container border border-border-highlight p-1"
              />
              <span className="font-mono text-xs text-on-surface-variant uppercase">
                {actualFormData.color}
              </span>
            </div>
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
              onChange={(e) => actualUpdateFormData('plateType', e.target.value)}
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
                actualUpdateFormData('plateLetter', e.target.value.toUpperCase())
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
              onChange={(e) => actualUpdateFormData('plateNumber', e.target.value)}
              className={inputClass}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
