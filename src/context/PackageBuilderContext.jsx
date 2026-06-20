import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import services from '../data/services';
import { cars } from '../data/carData';

const PackageBuilderContext = createContext();

export const WHATSAPP_NUMBER = '971544541345';

export function PackageBuilderProvider({ children, persist = true }) {
  const [selectedCarId, setSelectedCarId] = useState(() => {
    if (!persist) return null;
    return localStorage.getItem('selectedCarId') || null;
  });

  const [selectedBrand, setSelectedBrand] = useState(() => {
    if (!persist) return '';
    return localStorage.getItem('selectedBrand') || '';
  });

  const [selectedServiceIds, setSelectedServiceIds] = useState(() => {
    if (!persist) return new Set();
    const saved = localStorage.getItem('selectedServiceIds');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [serviceFiltersResetKey, setServiceFiltersResetKey] = useState(0);

  // New form fields
  const [formData, setFormData] = useState(() => {
    if (!persist) {
      return {
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
        address: '',
        notes: '',
      };
    }

    const saved = localStorage.getItem('formData');
    if (saved) return JSON.parse(saved);

    // Default form data with first car info if no car is selected
    const defaultCar = cars.find((c) => c.id === selectedCarId) || cars[0];
    return {
      visitDate: '',
      visitTime: '',
      model: defaultCar.model,
      carType: defaultCar.carType,
      year: defaultCar.year || '',
      color: '#000000',
      city: 'Dubai',
      plateType: 'Private',
      plateLetter: '',
      plateNumber: '',
      userName: '',
      userNumber: '',
    };
  });

  useEffect(() => {
    if (!persist) return;
    localStorage.setItem('selectedCarId', selectedCarId || '');
  }, [selectedCarId, persist]);

  useEffect(() => {
    if (!persist) return;
    localStorage.setItem('selectedBrand', selectedBrand || '');
  }, [selectedBrand, persist]);

  useEffect(() => {
    if (!persist) return;
    localStorage.setItem(
      'selectedServiceIds',
      JSON.stringify(Array.from(selectedServiceIds))
    );
  }, [selectedServiceIds, persist]);

  useEffect(() => {
    if (!persist) return;
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData, persist]);

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  function resetServiceFilters() {
    setServiceFiltersResetKey((k) => k + 1);
  }

  const currentCar = useMemo(
    () => (selectedCarId ? cars.find((c) => c.id === selectedCarId) : null),
    [selectedCarId]
  );

  // Get unique manufacturers sorted alphabetically
  const manufacturers = useMemo(() => {
    const brands = new Set(cars.map((car) => car.manufacturer));
    return Array.from(brands).sort();
  }, []);

  // Get models for selected manufacturer
  const modelsByBrand = useMemo(() => {
    if (!selectedBrand) return [];
    return cars
      .filter((car) => car.manufacturer === selectedBrand)
      .sort((a, b) => a.model.localeCompare(b.model));
  }, [selectedBrand]);

  // Calculate selected services with prices from the selected car
  const selectedServicesWithPrices = useMemo(() => {
    if (!currentCar) {
      // Fallback to base pricing if no car is selected
      return services
        .filter((s) => selectedServiceIds.has(s.id))
        .map((s) => ({
          ...s,
          calculatedPrice: s.basePrice,
        }));
    }

    return services
      .filter((s) => selectedServiceIds.has(s.id))
      .map((s) => ({
        ...s,
        calculatedPrice: currentCar.pricing[s.id] || s.basePrice,
      }));
  }, [selectedServiceIds, currentCar]);

  const total = useMemo(
    () =>
      selectedServicesWithPrices.reduce((sum, s) => sum + s.calculatedPrice, 0),
    [selectedServicesWithPrices]
  );

  function selectCar(carId) {
    if (!carId) {
      setSelectedCarId(null);
      updateFormData('model', '');
      updateFormData('carType', '');
      return;
    }
    const car = cars.find((c) => c.id === carId);
    if (car) {
      setSelectedCarId(carId);
      setSelectedBrand(car.manufacturer);
      // Auto-populate formData with car info
      updateFormData('model', car.model);
      updateFormData('carType', car.carType);
    }
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
    setIsCartOpen(true);
  }

  function removeService(id) {
    setSelectedServiceIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }

  function initializeBuilder({
    carId = null,
    brand = '',
    serviceIds = [],
    formValues = {},
  } = {}) {
    setSelectedCarId(carId);
    setSelectedBrand(brand);
    setSelectedServiceIds(new Set(serviceIds));
    setFormData((prev) => ({ ...prev, ...formValues }));
  }

  function getWhatsAppUrl(overrideName, overridePhone) {
    const vehicleLabel = currentCar
      ? `${currentCar.manufacturer} ${currentCar.model}`
      : 'Unknown Vehicle';

    const name = overrideName || formData.userName;
    const phone = overridePhone || formData.userNumber;

    const message = [
      `*NEW INQUIRY FROM CARS365 STUDIO*`,
      ``,
      `*Customer Info:*`,
      `- Name: ${name || 'N/A'}`,
      `- Phone: ${phone || 'N/A'}`,
      ``,
      `*Vehicle:* ${vehicleLabel}`,
      ``,
      `*Preferred Time:* ${formData.visitTime || 'N/A'}`,
    ].join('\n');

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  const value = {
    selectedCarId,
    selectedBrand,
    setSelectedBrand,
    selectedServiceIds,
    currentCar,
    manufacturers,
    modelsByBrand,
    selectedServicesWithPrices,
    total,
    selectCar,
    toggleService,
    addService,
    removeService,
    initializeBuilder,
    resetServiceFilters,
    serviceFiltersResetKey,
    getWhatsAppUrl,
    isCartOpen,
    setIsCartOpen,
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
    throw new Error(
      'usePackageBuilderContext must be used within a PackageBuilderProvider'
    );
  }
  return context;
}
