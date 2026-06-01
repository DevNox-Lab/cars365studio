import vehicles from '../data/vehicles'

export default function VehicleSelector({ selectedVehicleId, onSelectVehicle }) {
  return (
    <div className="mb-10">
      {/* Step header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-primary bg-primary/10 shrink-0">
          <span className="font-mono text-sm font-bold text-primary">01</span>
        </div>
        <div>
          <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-[0.25em]">
            Step One
          </p>
          <h3 className="font-headline font-semibold text-lg text-on-surface uppercase tracking-wide">
            VEHICLE CLASS
          </h3>
        </div>
      </div>

      {/* Vehicle radio cards */}
      <div className="grid grid-cols-3 gap-3">
        {vehicles.map((vehicle) => {
          const isSelected = vehicle.id === selectedVehicleId
          return (
            <button
              key={vehicle.id}
              type="button"
              onClick={() => onSelectVehicle(vehicle.id)}
              className={`group flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                isSelected
                  ? 'border-primary bg-primary/10'
                  : 'border-border-highlight bg-surface-container hover:border-outline'
              }`}
              aria-pressed={isSelected}
            >
              <span
                className={`material-symbols-outlined text-3xl transition-colors duration-200 ${
                  isSelected ? 'text-primary' : 'text-outline group-hover:text-on-surface-variant'
                }`}
                style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 32" }}
              >
                {vehicle.icon}
              </span>
              <span
                className={`font-mono text-[10px] text-center tracking-widest leading-tight uppercase transition-colors duration-200 ${
                  isSelected ? 'text-primary' : 'text-on-surface-variant'
                }`}
              >
                {vehicle.label}
              </span>
              {/* Multiplier badge */}
              <span
                className={`font-mono text-[9px] px-2 py-0.5 rounded-full border transition-colors duration-200 ${
                  isSelected
                    ? 'border-primary text-primary bg-primary/10'
                    : 'border-outline-variant text-outline'
                }`}
              >
                {vehicle.multiplier === 1.0 ? 'BASE' : `×${vehicle.multiplier.toFixed(1)}`}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
