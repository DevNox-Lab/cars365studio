import { usePackageBuilderContext } from '../context/PackageBuilderContext';
import { cars } from '../data/carData';
import { useMemo } from 'react';

export default function CarSelector() {
  const {
    selectedCarId,
    selectedBrand,
    setSelectedBrand,
    manufacturers,
    modelsByBrand,
    selectCar,
    currentCar,
  } = usePackageBuilderContext();

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    setSelectedBrand(brand);
    // When brand changes, clear the specific car selection
    selectCar(null);
  };

  const handleModelChange = (e) => {
    const selectedModelId = e.target.value;
    selectCar(selectedModelId || null);
  };

  const getPricingTierDisplay = (classKey) => {
    const tiers = {
      coupe_hatch: 'COUPE / HATCHBACK',
      sedan_wagon: 'SEDAN / WAGON',
      suv_4x4: 'SUV / 4x4',
    };
    return tiers[classKey] || classKey;
  };

  const getClassColor = (classKey) => {
    const colors = {
      coupe_hatch: 'text-blue-400',
      sedan_wagon: 'text-purple-400',
      suv_4x4: 'text-amber-400',
    };
    return colors[classKey] || 'text-primary';
  };

  const getBasePriceForClass = (classKey) => {
    // Get the first service's price as a sample price for this class
    const sampleServiceId = 'front-ppf';
    const allCarsOfClass = cars.filter((car) => car.classKey === classKey);
    if (allCarsOfClass.length > 0) {
      const price = allCarsOfClass[0].pricing[sampleServiceId];
      return price;
    }
    return 0;
  };

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
            SELECT YOUR CAR
          </h3>
        </div>
      </div>

      {/* Brand and Model Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Brand Selector */}
        <div>
          <label className="font-mono text-[10px] text-primary uppercase tracking-[0.2em] mb-2 block">
            Select Brand
          </label>
          <select
            value={selectedBrand}
            onChange={handleBrandChange}
            className="w-full bg-surface-container border border-border-highlight rounded-xl px-4 py-3 font-body text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200"
          >
            <option value="">-- Choose a brand --</option>
            {manufacturers.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Model Selector */}
        <div>
          <label className="font-mono text-[10px] text-primary uppercase tracking-[0.2em] mb-2 block">
            Select Model
          </label>
          <select
            value={selectedCarId || ''}
            onChange={handleModelChange}
            disabled={!selectedBrand}
            className="w-full bg-surface-container border border-border-highlight rounded-xl px-4 py-3 font-body text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option value="">
              {selectedBrand
                ? '-- Choose a model --'
                : '-- Select brand first --'}
            </option>
            {modelsByBrand.map((car) => (
              <option key={car.id} value={car.id}>
                {car.model} ({car.yearFrom})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Selected Car Info Card */}
      {currentCar && (
        <div className="border-2 border-primary bg-primary/5 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Car Name */}
            <div>
              <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-[0.25em] mb-1">
                Selected Car
              </p>
              <p className="font-headline font-bold text-lg text-on-surface">
                {currentCar.manufacturer}
              </p>
              <p className="font-body text-sm text-on-surface-variant">
                {currentCar.model}
              </p>
            </div>

            {/* Car Type */}
            <div>
              <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-[0.25em] mb-1">
                Car Type
              </p>
              <p className="font-headline font-bold text-lg text-on-surface">
                {currentCar.carType}
              </p>
            </div>

            {/* Pricing Tier */}
            <div>
              <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-[0.25em] mb-1">
                Pricing Tier
              </p>
              <p
                className={`font-mono font-bold text-sm ${getClassColor(
                  currentCar.classKey
                )} uppercase tracking-[0.15em]`}
              >
                {getPricingTierDisplay(currentCar.classKey)}
              </p>
            </div>

            {/* Base Price Example */}
            <div>
              <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-[0.25em] mb-1">
                Sample Service Price
              </p>
              <p className="font-headline font-bold text-lg text-primary">
                AED{' '}
                {(currentCar.pricing['front-ppf'] || 0).toLocaleString('en-AE')}
              </p>
              <p className="font-mono text-[10px] text-on-surface-variant">
                (Front PPF)
              </p>
            </div>
          </div>
        </div>
      )}

      {/* No Car Selected Message */}
      {!currentCar && (
        <div className="border-2 border-dashed border-outline-variant rounded-xl p-6 text-center">
          <p className="font-body text-on-surface-variant">
            ⬆️ Select a brand and model to view pricing and continue
          </p>
        </div>
      )}
    </div>
  );
}
