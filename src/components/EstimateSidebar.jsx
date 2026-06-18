function formatAED(amount) {
  return `AED ${Math.round(amount).toLocaleString('en-AE')}`;
}

export default function EstimateSidebar({
  selectedServicesWithPrices,
  total,
  onProceed,
  isProcessing,
  onRemoveService,
  isMobileModal = false,
}) {
  return (
    <aside
      className={`${isMobileModal ? 'block' : 'hidden lg:block'} ${isMobileModal ? 'sticky top-0 self-start' : 'sticky top-32 self-start'}`}
    >
      <div className="rounded-xl border border-border-highlight bg-surface-container p-6 flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-headline font-bold text-lg text-on-surface uppercase tracking-widest">
            ESTIMATE
          </h3>
          <span className="font-mono text-[10px] text-outline border border-outline-variant rounded-full px-2 py-0.5 uppercase tracking-wider">
            Live
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-border-highlight" />

        {/* Service line items */}
        <div className="flex flex-col min-h-[120px] max-h-[180px] overflow-y-auto scroll-smooth pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-surface-variant [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-primary-fixed">
          {selectedServicesWithPrices.length === 0 ? (
            <p className="font-body text-sm italic text-outline">
              No services selected yet. Choose from the list to build your
              quote.
            </p>
          ) : (
            selectedServicesWithPrices.map((service, index) => (
              <div
                key={service.id}
                className="flex items-start justify-between gap-3 py-2 px-2 rounded-lg transition-all duration-200"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-body text-sm text-on-surface-variant leading-snug">
                    {service.name}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <p className="font-mono text-sm text-primary font-semibold">
                    {formatAED(service.calculatedPrice)}
                  </p>
                  {onRemoveService && (
                    <button
                      type="button"
                      onClick={() => onRemoveService(service.id)}
                      className="material-symbols-outlined text-sm text-error hover:text-error hover:bg-error-container p-1 rounded transition-all duration-200"
                      title="Delete service"
                    >
                      delete
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-border-highlight" />

        {/* Total */}
        <div className="flex items-end justify-between gap-2">
          <div>
            <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">
              Total Estimate
            </p>
            <p className="font-headline font-bold text-3xl text-primary leading-none">
              {formatAED(total)}
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="font-mono text-[10px] text-outline leading-relaxed">
          *Final price subject to vehicle inspection and service confirmation.
        </p>

        {/* CTA button */}
        <button
          type="button"
          onClick={onProceed}
          disabled={isProcessing}
          className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary font-mono text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full hover:bg-primary-fixed active:scale-95 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-base">
            {isProcessing ? 'hourglass_empty' : 'chat'}
          </span>
          {isProcessing ? 'PROCESSING...' : 'PROCEED TO WHATSAPP'}
        </button>
      </div>
    </aside>
  );
}
