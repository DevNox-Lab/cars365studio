import { useState, useMemo } from 'react';
import { usePackageBuilderContext } from '../context/PackageBuilderContext';
import services from '../data/services';

function formatAED(amount) {
  return `AED ${Math.round(amount).toLocaleString('en-AE')}`;
}

export default function ServiceSelector() {
  const { selectedServiceIds, currentCar, toggleService } = usePackageBuilderContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  // Extract unique categories (tags)
  const allTags = useMemo(() => {
    const categories = services.map((s) => {
      if (s.category.includes(' / ')) {
        return s.category.split(' / ')[1];
      }
      return s.category;
    });
    return ['All', ...Array.from(new Set(categories))];
  }, []);

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    
    const categoryName = service.category.includes(' / ') 
      ? service.category.split(' / ')[1] 
      : service.category;
      
    const matchesTag = activeTag === 'All' || categoryName === activeTag;
    
    return matchesSearch && matchesTag;
  });

  return (
    <div>
      {/* Step header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-primary bg-primary/10 shrink-0">
          <span className="font-mono text-sm font-bold text-primary">02</span>
        </div>
        <div>
          <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-[0.25em]">
            Step Two
          </p>
          <h3 className="font-headline font-semibold text-lg text-on-surface uppercase tracking-wide">
            SELECT SERVICES
          </h3>
        </div>
      </div>

      {/* Warning if no car selected */}
      {!currentCar && (
        <div className="border-l-4 border-orange-500 bg-orange-500/10 rounded-r-lg px-4 py-3 mb-6">
          <p className="font-body text-sm text-on-surface">
            ⚠️ <strong>Select a car first</strong> to unlock services. Go back to Step One to choose your vehicle.
          </p>
        </div>
      )}

      {/* ── Search & Filter ── */}
      <div className="mb-8 space-y-6">
        {/* Search Bar */}
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">
            search
          </span>
          <input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface-container border border-border-highlight rounded-full py-3.5 pl-12 pr-6 font-body text-sm text-on-surface placeholder:text-outline/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
          />
        </div>

        {/* Tags Scrollable */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 -mx-2 px-2">
          <div className="flex gap-2 shrink-0">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`
                  font-mono text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border transition-all duration-200 whitespace-nowrap
                  ${
                    activeTag === tag
                      ? 'bg-primary text-on-primary border-primary shadow-lg shadow-primary/20'
                      : 'bg-transparent text-on-surface-variant border-outline-variant hover:border-primary hover:text-primary'
                  }
                `}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Service rows */}
      <div className="flex flex-col gap-3">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => {
            const isSelected = selectedServiceIds.has(service.id);
            const servicePrice = currentCar ? (currentCar.pricing[service.id] || null) : null;
            const hasPrice = servicePrice !== null && servicePrice > 0;
            const isDisabled = !currentCar || !hasPrice;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => !isDisabled && toggleService(service.id)}
                disabled={isDisabled}
                className={`group w-full text-left flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${
                  isDisabled
                    ? 'cursor-not-allowed opacity-50 border-border-highlight bg-surface-container'
                    : isSelected
                    ? 'border-primary bg-primary/5 cursor-pointer'
                    : 'border-border-highlight bg-surface-container hover:border-outline cursor-pointer'
                }`}
                aria-pressed={isSelected && !isDisabled}
              >
                {/* Custom checkbox */}
                <div
                  className={`shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                    isDisabled
                      ? 'border-outline bg-transparent'
                      : isSelected
                      ? 'border-primary bg-primary'
                      : 'border-outline group-hover:border-on-surface-variant bg-transparent'
                  }`}
                >
                  {isSelected && !isDisabled && (
                    <span className="material-symbols-outlined text-on-primary text-sm leading-none">
                      check
                    </span>
                  )}
                </div>

                {/* Service info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p
                        className={`font-headline font-semibold text-base uppercase tracking-wide transition-colors duration-200 ${
                          isSelected && !isDisabled ? 'text-primary' : 'text-on-surface'
                        }`}
                      >
                        {service.name}
                      </p>
                      <p className="font-body text-xs text-on-surface-variant mt-0.5 truncate">
                        {service.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="shrink-0 text-right">
                      <p
                        className={`font-mono font-bold text-sm transition-colors duration-200 ${
                          isSelected && !isDisabled ? 'text-primary' : 'text-on-surface'
                        }`}
                      >
                        {hasPrice
                          ? formatAED(servicePrice)
                          : 'N/A'}
                      </p>
                      {!hasPrice && currentCar && (
                        <p className="font-mono text-[10px] text-outline">
                          Not available
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-mono text-[9px] px-1.5 py-0.5 rounded-full border tracking-widest transition-colors duration-200 ${
                          isSelected && !isDisabled
                            ? 'border-primary/40 text-primary/70'
                            : 'border-outline-variant text-outline'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            );
          })
        ) : (
          <div className="py-12 text-center border border-dashed border-border-highlight rounded-xl">
            <span className="material-symbols-outlined text-outline text-4xl mb-3">
              search_off
            </span>
            <p className="font-body text-sm text-on-surface-variant">
              No services match your search or filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveTag('All');
              }}
              className="mt-4 font-mono text-[10px] text-primary uppercase tracking-widest border-b border-primary/40 pb-0.5 hover:border-primary transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
