function formatAED(amount) {
  return `AED ${Math.round(amount).toLocaleString('en-AE')}`
}

export default function EstimateSidebar({ selectedServicesWithPrices, total, onProceed }) {
  return (
    <aside className="hidden lg:block sticky top-32 self-start">
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
        <div className="flex flex-col gap-3 min-h-[120px]">
          {selectedServicesWithPrices.length === 0 ? (
            <p className="font-body text-sm italic text-outline">
              No services selected yet. Choose from the list to build your quote.
            </p>
          ) : (
            selectedServicesWithPrices.map((service) => (
              <div key={service.id} className="flex items-start justify-between gap-3">
                <p className="font-body text-sm text-on-surface-variant flex-1 leading-snug">
                  {service.name}
                </p>
                <p className="font-mono text-sm text-on-surface shrink-0">
                  {formatAED(service.calculatedPrice)}
                </p>
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
          {selectedServicesWithPrices.length > 0 && (
            <span className="material-symbols-outlined text-primary text-2xl">
              trending_up
            </span>
          )}
        </div>

        {/* Disclaimer */}
        <p className="font-mono text-[10px] text-outline leading-relaxed">
          *Final price subject to vehicle inspection and service confirmation.
        </p>

        {/* CTA button */}
        <button
          type="button"
          onClick={onProceed}
          className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary font-mono text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full hover:bg-primary-fixed active:scale-95 transition-all duration-200"
        >
          <span className="material-symbols-outlined text-base">chat</span>
          PROCEED TO WHATSAPP
        </button>
      </div>
    </aside>
  )
}
