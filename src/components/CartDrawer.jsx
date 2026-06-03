import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePackageBuilderContext } from '../context/PackageBuilderContext';

export default function CartDrawer() {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    selectedServicesWithPrices, 
    total,
    removeService 
  } = usePackageBuilderContext();
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
      const raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => setVisible(true))
      );
      return () => {
        cancelAnimationFrame(raf);
        document.body.style.overflow = '';
      };
    } else {
      setVisible(false);
      document.body.style.overflow = '';
    }
  }, [isCartOpen]);

  function handleCheckout() {
    setIsCartOpen(false);
    navigate('/build-package');
  }

  if (!isCartOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex justify-end transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={() => setIsCartOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Drawer Panel */}
      <div
        className={`relative w-full max-w-md bg-surface border-l border-border-highlight h-full shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          visible ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-border-highlight flex items-center justify-between">
          <h2 className="font-headline font-bold text-2xl text-on-surface uppercase tracking-wide">
            Your Arsenal
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {selectedServicesWithPrices.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <span className="material-symbols-outlined text-outline text-6xl mb-4">
                shopping_cart_off
              </span>
              <p className="font-body text-on-surface-variant">Your cart is empty.</p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigate('/services');
                }}
                className="mt-6 font-mono text-xs text-primary uppercase tracking-widest border-b border-primary/40 pb-0.5 hover:border-primary transition-colors"
              >
                Browse Services
              </button>
            </div>
          ) : (
            selectedServicesWithPrices.map((service) => (
              <div
                key={service.id}
                className="group flex items-center justify-between p-4 bg-surface-container-low border border-border-highlight rounded-xl"
              >
                <div>
                  <h4 className="font-headline font-semibold text-on-surface uppercase tracking-wide text-sm">
                    {service.name}
                  </h4>
                  <p className="font-mono text-[10px] text-primary mt-1">
                    AED {service.calculatedPrice.toLocaleString('en-AE')}
                  </p>
                </div>
                <button
                  onClick={() => removeService(service.id)}
                  className="text-outline hover:text-error transition-colors p-1"
                >
                  <span className="material-symbols-outlined text-xl">delete</span>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {selectedServicesWithPrices.length > 0 && (
          <div className="p-6 border-t border-border-highlight bg-surface-container-low">
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">
                Total Estimate
              </span>
              <span className="font-headline font-bold text-2xl text-primary">
                AED {total.toLocaleString('en-AE')}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-primary text-on-primary font-mono text-sm font-bold uppercase tracking-widest py-4 rounded-full hover:bg-primary-fixed transition-all active:scale-[0.98] glow-effect"
            >
              Checkout & Personalise
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
