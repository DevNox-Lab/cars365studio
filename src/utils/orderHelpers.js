export const ORDER_STATUSES = [
  { value: 'pending', label: 'Pending' },
  { value: 'complete', label: 'Complete' },
  { value: 'invoiced', label: 'Invoiced' },
  { value: 'cancelled', label: 'Cancelled' },
];

export const STATUS_STYLES = {
  pending: {
    dot: 'bg-amber-400',
    text: 'text-amber-300',
    bg: 'bg-amber-400/10',
  },
  complete: {
    dot: 'bg-emerald-400',
    text: 'text-emerald-300',
    bg: 'bg-emerald-400/10',
  },
  invoiced: {
    dot: 'bg-sky-400',
    text: 'text-sky-300',
    bg: 'bg-sky-400/10',
  },
  cancelled: {
    dot: 'bg-red-400',
    text: 'text-red-300',
    bg: 'bg-red-400/10',
  },
};

export function buildOrderPayload({
  formData,
  currentCar,
  selectedServiceIds,
  selectedServicesWithPrices,
  total,
  status = 'pending',
  notes = '',
  address = '',
}) {
  return {
    customerName: formData.userName,
    phoneNumber: formData.userNumber,
    address: address || formData.address || '',
    notes: notes || formData.notes || '',
    status,
    visitDate: formData.visitDate,
    visitTime: formData.visitTime,
    vehicleInfo: {
      model: currentCar?.model || formData.model,
      carType: currentCar?.carType || formData.carType,
      yearOfManufacture: formData.year ? parseInt(formData.year, 10) : null,
      color: formData.color,
    },
    plateInfo: {
      city: formData.city,
      plateType: formData.plateType,
      plateLetter: formData.plateLetter || '',
      plateNumber: formData.plateNumber || '',
    },
    services: {
      selectedServiceIds: Array.from(selectedServiceIds),
      selectedServices: selectedServicesWithPrices.map((service) => ({
        serviceId: service.id,
        serviceName: service.name,
        price: service.basePrice,
        multiplier: currentCar
          ? (currentCar.pricing[service.id] || service.basePrice) / service.basePrice
          : 1,
        finalPrice: service.calculatedPrice,
      })),
      totalPrice: total,
      currency: 'AED',
    },
  };
}

export function orderToFormState(order) {
  return {
    visitDate: order.visitDate || '',
    visitTime: order.visitTime || '',
    userName: order.customerName || '',
    userNumber: order.phoneNumber || '',
    model: order.vehicleInfo?.model || '',
    carType: order.vehicleInfo?.carType || '',
    year: order.vehicleInfo?.yearOfManufacture || '',
    color: order.vehicleInfo?.color || 'Black',
    city: order.plateInfo?.city || 'Dubai',
    plateType: order.plateInfo?.plateType || 'Private',
    plateLetter: order.plateInfo?.plateLetter || '',
    plateNumber: order.plateInfo?.plateNumber || '',
    address: order.address || '',
    notes: order.notes || '',
    status: order.status || 'pending',
  };
}
