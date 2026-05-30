import { useState, useMemo } from 'react'
import vehicles from '../data/vehicles'
import services from '../data/services'

// ─── WhatsApp number — easy to find and replace ───────────────────────────────
export const WHATSAPP_NUMBER = '9710544541345'

export default function usePackageBuilder() {
  const [selectedVehicleId, setSelectedVehicleId] = useState('coupe')
  const [selectedServiceIds, setSelectedServiceIds] = useState(new Set())

  // ── Derived values ──────────────────────────────────────────────────────────
  const currentVehicle = useMemo(
    () => vehicles.find((v) => v.id === selectedVehicleId) || vehicles[0],
    [selectedVehicleId]
  )

  const currentMultiplier = currentVehicle.multiplier

  const selectedServicesWithPrices = useMemo(() => {
    return services
      .filter((s) => selectedServiceIds.has(s.id))
      .map((s) => ({
        ...s,
        calculatedPrice: Math.round(s.basePrice * currentMultiplier),
      }))
  }, [selectedServiceIds, currentMultiplier])

  const total = useMemo(
    () => selectedServicesWithPrices.reduce((sum, s) => sum + s.calculatedPrice, 0),
    [selectedServicesWithPrices]
  )

  // ── Actions ─────────────────────────────────────────────────────────────────
  function selectVehicle(id) {
    setSelectedVehicleId(id)
  }

  function toggleService(id) {
    setSelectedServiceIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  function getWhatsAppUrl(name, phone) {
    const vehicleLabel = currentVehicle.label

    const serviceLines = selectedServicesWithPrices
      .map((s) => `- ${s.name}: AED ${s.calculatedPrice.toLocaleString('en-AE')}`)
      .join('\n')

    const message = [
      `Hello Cars365 Studio! I'd like to book the following services for my ${vehicleLabel}:`,
      serviceLines || '- (No services selected)',
      ``,
      `Total Estimate: AED ${total.toLocaleString('en-AE')}`,
      `Name: ${name || 'N/A'} | Phone: ${phone || 'N/A'}`,
    ].join('\n')

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  }

  return {
    // state
    selectedVehicleId,
    selectedServiceIds,
    // derived
    currentVehicle,
    currentMultiplier,
    selectedServicesWithPrices,
    total,
    // actions
    selectVehicle,
    toggleService,
    getWhatsAppUrl,
  }
}
