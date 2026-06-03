import { usePackageBuilderContext } from '../context/PackageBuilderContext';
import VehicleSelector from './VehicleSelector';
import ServiceSelector from './ServiceSelector';
import EstimateSidebar from './EstimateSidebar';
import BookingDetailsForm from './BookingDetailsForm';

function formatAED(amount) {
  return `AED ${Math.round(amount).toLocaleString('en-AE')}`;
}

export default function PackageBuilder({ isModal = false }) {
  const {
    selectedVehicleId,
    selectedServiceIds,
    currentMultiplier,
    selectedServicesWithPrices,
    total,
    selectVehicle,
    toggleService,
    getWhatsAppUrl,
  } = usePackageBuilderContext();

  function handleProceed() {
    if (selectedServicesWithPrices.length === 0) {
      alert('Please select at least one service to continue.');
      return;
    }
    const url = getWhatsAppUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div
      id={!isModal ? 'package-builder' : undefined}
      className={`relative bg-surface overflow-hidden ${isModal ? 'py-10 px-6' : 'py-section-gap px-margin-mobile md:px-margin-desktop'}`}
    >
      {/* Decorative gold gradient — top right */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 100% 0%, rgba(233, 193, 118, 0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-container-max mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-4">
            Personalise
          </p>
          <h2 className="font-headline font-bold text-5xl md:text-6xl text-on-surface uppercase tracking-wide mb-4">
            BUILD YOUR PACKAGE
          </h2>
          <p className="font-body text-on-surface-variant text-sm max-w-xl leading-relaxed">
            Select your vehicle type and the services you want. Prices update
            live based on your vehicle class.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left — steps (8/12) */}
          <div className="lg:col-span-8">
            <VehicleSelector
              selectedVehicleId={selectedVehicleId}
              onSelectVehicle={selectVehicle}
            />

            <BookingDetailsForm />

            <ServiceSelector
              selectedServiceIds={selectedServiceIds}
              currentMultiplier={currentMultiplier}
              onToggleService={toggleService}
            />
          </div>

          {/* Right — sticky estimate sidebar (4/12) */}
          <div className="lg:col-span-4">
            <EstimateSidebar
              selectedServicesWithPrices={selectedServicesWithPrices}
              total={total}
              onProceed={handleProceed}
            />
          </div>
        </div>
      </div>

      {/* Mobile fixed bottom estimate bar */}
      {total > 0 && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-container-low border-t border-border-highlight px-margin-mobile py-3">
          <div className="flex items-center justify-between gap-4 max-w-container-max mx-auto">
            <div>
              <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
                Total Estimate
              </p>
              <p className="font-headline font-bold text-xl text-primary leading-tight">
                {formatAED(total)}
              </p>
            </div>
            <button
              type="button"
              onClick={handleProceed}
              className="flex items-center gap-2 bg-primary text-on-primary font-mono text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full hover:bg-primary-fixed active:scale-95 transition-all duration-200 shrink-0"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              BOOK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
