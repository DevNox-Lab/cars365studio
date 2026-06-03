import { createContext, useContext, useState, useMemo } from 'react';
import vehicles from '../data/vehicles';
import services from '../data/services';

const PackageBuilderContext = createContext();

export const WHATSAPP_NUMBER = '971544541345';

export function PackageBuilderProvider({ children }) {
  const [selectedVehicleId, setSelectedVehicleId] = useState('coupe');
  const [selectedServiceIds, setSelectedServiceIds] = useState(new Set());
  const [isPackageBuilderOpen, setIsPackageBuilderOpen] = useState(false);

  // New form fields
  const [formData, setFormData] = useState({
    visitDate: '',
    visitTime: '',
    model: '',
    carType: '',
    year: '',
    color: '#000000',
    city: 'Dubai',
    plateType: 'Private',
    plateLetter: '',
    plateNumber: '',
    userName: '',
    userNumber: '',
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const currentVehicle = useMemo(
    () => vehicles.find((v) => v.id === selectedVehicleId) || vehicles[0],
    [selectedVehicleId]
  );

  const currentMultiplier = currentVehicle.multiplier;

  const selectedServicesWithPrices = useMemo(() => {
    return services
      .filter((s) => selectedServiceIds.has(s.id))
      .map((s) => ({
        ...s,
        calculatedPrice: Math.round(s.basePrice * currentMultiplier),
      }));
  }, [selectedServiceIds, currentMultiplier]);

  const total = useMemo(
    () =>
      selectedServicesWithPrices.reduce((sum, s) => sum + s.calculatedPrice, 0),
    [selectedServicesWithPrices]
  );

  function selectVehicle(id) {
    setSelectedVehicleId(id);
  }

  function toggleService(id) {
    setSelectedServiceIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function addService(id) {
    setSelectedServiceIds((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    setIsPackageBuilderOpen(true);
  }

  function getWhatsAppUrl(overrideName, overridePhone) {
    const vehicleLabel = currentVehicle.label;

    const serviceLines = selectedServicesWithPrices
      .map((s) => `- ${s.name}: AED ${s.calculatedPrice.toLocaleString('en-AE')}`)
      .join('\n');

    const name = overrideName || formData.userName;
    const phone = overridePhone || formData.userNumber;

    const message = [
      `*NEW BOOKING FROM CARS365 STUDIO*`,
      `--------------------------------`,
      `*Services for ${vehicleLabel}:*`,
      serviceLines || '- (No services selected)',
      ``,
      `*Total Estimate:* AED ${total.toLocaleString('en-AE')}`,
      `--------------------------------`,
      `*Visit Details:*`,
      `- Date: ${formData.visitDate || 'N/A'}`,
      `- Time: ${formData.visitTime || 'N/A'}`,
      ``,
      `*Vehicle Info:*`,
      `- Model: ${formData.model || 'N/A'}`,
      `- Type: ${formData.carType || 'N/A'}`,
      `- Year: ${formData.year || 'N/A'}`,
      `- Color: ${formData.color || 'N/A'}`,
      ``,
      `*Plate Info:*`,
      `- City: ${formData.city || 'N/A'}`,
      `- Type: ${formData.plateType || 'N/A'}`,
      `- Letter: ${formData.plateLetter || 'N/A'}`,
      `- Number: ${formData.plateNumber || 'N/A'}`,
      ``,
      `*Customer Info:*`,
      `- Name: ${name || 'N/A'}`,
      `- Phone: ${phone || 'N/A'}`,
    ].join('\n');

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  const value = {
    selectedVehicleId,
    selectedServiceIds,
    currentVehicle,
    currentMultiplier,
    selectedServicesWithPrices,
    total,
    selectVehicle,
    toggleService,
    addService,
    getWhatsAppUrl,
    isPackageBuilderOpen,
    setIsPackageBuilderOpen,
    formData,
    updateFormData,
  };

  return (
    <PackageBuilderContext.Provider value={value}>
      {children}
    </PackageBuilderContext.Provider>
  );
}

export function usePackageBuilderContext() {
  const context = useContext(PackageBuilderContext);
  if (!context) {
    throw new Error('usePackageBuilderContext must be used within a PackageBuilderProvider');
  }
  return context;
}
