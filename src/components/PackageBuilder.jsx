import { useState, useEffect } from 'react';
import {
  usePackageBuilderContext,
  WHATSAPP_NUMBER,
} from '../context/PackageBuilderContext';
import CarSelector from './CarSelector';
import ServiceSelector from './ServiceSelector';
import EstimateSidebar from './EstimateSidebar';
import BookingDetailsForm from './BookingDetailsForm';
import { createOrderAPI } from '../utils/api';

function formatAED(amount) {
  return `AED ${Math.round(amount).toLocaleString('en-AE')}`;
}

export default function PackageBuilder() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [packageFormData, setPackageFormData] = useState({
    visitDate: '',
    visitTime: '',
    userName: '',
    userNumber: '',
    model: '',
    carType: '',
    year: '',
    color: 'Black',
    city: 'Dubai',
    plateType: 'Private',
    plateLetter: '',
    plateNumber: '',
  });

  const {
    selectedServiceIds,
    selectedServicesWithPrices,
    currentCar,
    total,
    removeService,
    setIsCartOpen,
    setSelectedBrand,
    selectCar,
  } = usePackageBuilderContext();

  function handlePackageFormChange(field, value) {
    setPackageFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleProceed() {
    if (!currentCar) {
      alert('Please select a car first to continue.');
      return;
    }
    if (selectedServicesWithPrices.length === 0) {
      alert('Please select at least one service to continue.');
      return;
    }
    if (!packageFormData.userName || !packageFormData.userNumber) {
      alert('Please fill in your name and phone number to continue.');
      return;
    }

    setIsProcessing(true);
    try {
      // Prepare order data with all form details
      const orderData = {
        customerName: packageFormData.userName,
        phoneNumber: packageFormData.userNumber,
        visitDate: packageFormData.visitDate,
        visitTime: packageFormData.visitTime,
        vehicleInfo: {
          model: currentCar.model,
          carType: currentCar.carType,
          yearOfManufacture: packageFormData.year
            ? parseInt(packageFormData.year)
            : null,
          color: packageFormData.color,
        },
        plateInfo: {
          city: packageFormData.city,
          plateType: packageFormData.plateType,
          plateLetter: packageFormData.plateLetter || '',
          plateNumber: packageFormData.plateNumber || '',
        },
        services: {
          selectedServiceIds: Array.from(selectedServiceIds),
          selectedServices: selectedServicesWithPrices.map((service) => ({
            serviceId: service.id,
            serviceName: service.name,
            price: service.basePrice,
            multiplier: currentCar.pricing[service.id] / service.basePrice,
            finalPrice: service.calculatedPrice,
          })),
          totalPrice: total,
          currency: 'AED',
        },
      };

      // Create order and get fetch URL
      const response = await createOrderAPI(orderData);

      if (response.success && response.fetchUrl) {
        // Construct simplified WhatsApp message
        const message = `New Order Request from ${packageFormData.userName}:\n${response.fetchUrl}`;

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

        // Clear selected services (empty the cart)
        Array.from(selectedServiceIds).forEach((id) => removeService(id));
        // Close cart UI if open
        if (setIsCartOpen) setIsCartOpen(false);

        // Reset selected brand and model (clear car selection)
        if (setSelectedBrand) setSelectedBrand('');
        if (selectCar) selectCar(null);

        // Reset the build package form to empty defaults
        setPackageFormData({
          visitDate: '',
          visitTime: '',
          userName: '',
          userNumber: '',
          model: '',
          carType: '',
          year: '',
          color: 'black',
          city: 'Dubai',
          plateType: 'Private',
          plateLetter: '',
          plateNumber: '',
        });

        // Close mobile modal if open
        setIsEstimateModalOpen(false);
      } else {
        alert('Failed to create order. Please try again.');
      }
    } catch (error) {
      console.error('Error during order creation:', error);
      alert(
        `Error: ${error.message || 'Failed to process your request. Please try again.'}`
      );
    } finally {
      setIsProcessing(false);
    }
  }

  // Update model and carType when car is selected
  useEffect(() => {
    if (currentCar) {
      setPackageFormData((prev) => ({
        ...prev,
        model: currentCar.model,
        carType: currentCar.carType,
      }));
    }
  }, [currentCar]);

  return (
    <section
      id="package-builder"
      className="relative bg-surface py-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden"
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
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left — steps (8/12) - scrollable on desktop */}
          <div className="lg:col-span-8 space-y-12 lg:h-[100vh] lg:overflow-y-auto no-scrollbar pb-12">
            {/* Section header */}
            <div className="mb-12">
              <p className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-4">
                Personalise
              </p>
              <h2 className="font-headline font-bold text-5xl md:text-6xl text-on-surface uppercase tracking-wide mb-4">
                BUILD YOUR PACKAGE
              </h2>
              <p className="font-body text-on-surface-variant text-sm max-w-xl leading-relaxed">
                Select your specific car model and the services you want. Prices
                update live based on your vehicle's pricing tier.
              </p>
            </div>

            <CarSelector />

            <BookingDetailsForm
              formData={packageFormData}
              onFormChange={handlePackageFormChange}
            />

            <ServiceSelector />
          </div>

          {/* Right — sticky estimate sidebar (4/12) */}
          <div className="lg:col-span-4">
            <EstimateSidebar
              selectedServicesWithPrices={selectedServicesWithPrices}
              total={total}
              onProceed={handleProceed}
              isProcessing={isProcessing}
              onRemoveService={removeService}
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
              onClick={() => setIsEstimateModalOpen(true)}
              disabled={isProcessing}
              className="flex items-center gap-2 bg-primary text-on-primary font-mono text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-full hover:bg-primary-fixed active:scale-95 transition-all duration-200 shrink-0 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-base">
                {isProcessing ? 'hourglass_empty' : 'chat'}
              </span>
              {isProcessing ? 'PROCESSING...' : 'BOOK'}
            </button>
          </div>
        </div>
      )}

      {/* Mobile Estimate Modal */}
      {isEstimateModalOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-surface lg:hidden">
          {/* Modal Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between bg-surface-container border-b border-border-highlight px-margin-mobile py-4">
            <h3 className="font-headline font-bold text-lg text-on-surface uppercase tracking-widest">
              ESTIMATE
            </h3>
            <button
              type="button"
              onClick={() => setIsEstimateModalOpen(false)}
              className="material-symbols-outlined text-on-surface hover:text-primary transition-colors"
            >
              close
            </button>
          </div>

          {/* Modal Body with EstimateSidebar */}
          <div className="flex-1 overflow-y-auto pb-4">
            <div className="px-margin-mobile pt-4">
              <EstimateSidebar
                selectedServicesWithPrices={selectedServicesWithPrices}
                total={total}
                onProceed={handleProceed}
                isProcessing={isProcessing}
                onRemoveService={removeService}
                isMobileModal={true}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
