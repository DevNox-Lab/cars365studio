import React from 'react';

export default function OrderInvoicePDF({ order, onPrint }) {
  if (!order) {
    return <div className="p-8 text-center">Loading order details...</div>;
  }

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-AE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  const calculateDueDate = (createdAt) => {
    const date = new Date(createdAt);
    date.setDate(date.getDate() + 7);
    return date.toLocaleDateString('en-AE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  const invoiceNumber =
    order.invoiceNumber || `INV-${order._id.slice(-6).toUpperCase()}`;
  const createdDate = formatDate(order.createdAt);
  const dueDate = calculateDueDate(order.createdAt);
  const subtotal = order.services?.totalPrice || 0;
  const discount = Math.round(subtotal * 0.05); // 5% discount
  const vat = Math.round((subtotal - discount) * 0.05); // 5% VAT
  const total = subtotal - discount + vat;

  return (
    <div className="w-full bg-black text-white font-sans">
      {/* Print Button */}
      <div className="no-print sticky top-0 z-50 bg-black border-b border-yellow-600 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-yellow-500">Order Invoice</h1>
        <button
          onClick={onPrint}
          className="bg-yellow-600 hover:bg-yellow-700 text-black px-6 py-2 rounded font-bold transition-colors"
        >
          Print / Download PDF
        </button>
      </div>

      {/* Invoice Content */}
      <div className="max-w-4xl mx-auto p-8 print:p-0">
        {/* Header */}
        <div className="flex justify-between items-start mb-12 pb-8 border-b border-yellow-600">
          <div>
            <h1 className="text-4xl font-bold text-yellow-500">
              CARS365<span className="text-yellow-400">STUDIO</span>
            </h1>
            <p className="text-xs text-gray-400 tracking-widest mt-1">
              PREMIUM AUTOMOTIVE CUSTOMIZATION • DUBAI, UAE
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-yellow-500">INVOICE</p>
            <div className="text-sm text-gray-400 mt-2">
              <p>
                INVOICE NO.{' '}
                <span className="text-white font-bold">{invoiceNumber}</span>
              </p>
              <p>
                DATE <span className="text-white font-bold">{createdDate}</span>
              </p>
              <p>
                DUE DATE <span className="text-white font-bold">{dueDate}</span>
              </p>
              <p>
                STATUS <span className="text-yellow-500 font-bold">UNPAID</span>
              </p>
            </div>
          </div>
        </div>

        {/* Customer & Vehicle Details */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* Customer Details */}
          <div>
            <h3 className="text-xs font-bold text-yellow-500 tracking-widest mb-4 pb-2 border-b border-yellow-600">
              CUSTOMER DETAILS
            </h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                <span className="text-gray-500">Name:</span>{' '}
                <span className="text-white font-semibold">
                  {order.customerName}
                </span>
              </p>
              <p>
                <span className="text-gray-500">Phone:</span>{' '}
                <span className="text-white font-semibold">
                  {order.phoneNumber}
                </span>
              </p>
              <p>
                <span className="text-gray-500">Email:</span>{' '}
                <span className="text-white font-semibold">
                  contact@cars365studio.ae
                </span>
              </p>
              <p>
                <span className="text-gray-500">Address:</span>{' '}
                <span className="text-white font-semibold">
                  Unit 12, Al Quoz Industrial Area 4, Dubai
                </span>
              </p>
            </div>
          </div>

          {/* Vehicle Information */}
          <div>
            <h3 className="text-xs font-bold text-yellow-500 tracking-widest mb-4 pb-2 border-b border-yellow-600">
              VEHICLE INFORMATION
            </h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                <span className="text-gray-500">Model/Make:</span>{' '}
                <span className="text-white font-semibold">
                  {order.vehicleInfo?.model || 'N/A'}
                </span>
              </p>
              <p>
                <span className="text-gray-500">Year:</span>{' '}
                <span className="text-white font-semibold">
                  {order.vehicleInfo?.yearOfManufacture || 'N/A'}
                </span>
              </p>
              <p>
                <span className="text-gray-500">Type:</span>{' '}
                <span className="text-white font-semibold">
                  {order.vehicleInfo?.carType || 'N/A'}
                </span>
              </p>
              <p>
                <span className="text-gray-500">Color:</span>{' '}
                <span className="text-white font-semibold flex items-center gap-2">
                  {order.vehicleInfo?.color || 'N/A'}{' '}
                  <div
                    className="w-4 h-4 border border-gray-600 rounded"
                    style={{
                      backgroundColor: order.vehicleInfo?.color || '#000',
                    }}
                  />
                </span>
              </p>
              <p>
                <span className="text-gray-500">Plate No.:</span>{' '}
                <span className="text-white font-semibold">
                  {order.plateInfo?.city} {order.plateInfo?.plateLetter}{' '}
                  {order.plateInfo?.plateNumber}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Visit Details */}
        <div className="mb-12 p-4 bg-gray-900 rounded border border-yellow-600">
          <h3 className="text-xs font-bold text-yellow-500 tracking-widest mb-3">
            VISIT DETAILS
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
            <p>
              <span className="text-gray-500">Visit Date:</span>{' '}
              <span className="text-white font-semibold">
                {formatDate(order.visitDate)}
              </span>
            </p>
            <p>
              <span className="text-gray-500">Visit Time:</span>{' '}
              <span className="text-white font-semibold">
                {order.visitTime || 'N/A'}
              </span>
            </p>
          </div>
        </div>

        {/* Services Table */}
        <div className="mb-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-y-2 border-yellow-600">
                <th className="text-left py-3 px-2 text-xs font-bold text-yellow-500 tracking-widest">
                  #
                </th>
                <th className="text-left py-3 px-2 text-xs font-bold text-yellow-500 tracking-widest">
                  SERVICE
                </th>
                <th className="text-left py-3 px-2 text-xs font-bold text-yellow-500 tracking-widest">
                  CATEGORY
                </th>
                <th className="text-right py-3 px-2 text-xs font-bold text-yellow-500 tracking-widest">
                  UNIT PRICE(AED)
                </th>
                <th className="text-right py-3 px-2 text-xs font-bold text-yellow-500 tracking-widest">
                  TOTAL (AED)
                </th>
              </tr>
            </thead>
            <tbody>
              {order.services?.selectedServices?.map((service, index) => (
                <tr
                  key={service.serviceId}
                  className="border-b border-gray-700 hover:bg-gray-900"
                >
                  <td className="py-3 px-2 text-gray-400">
                    {String(index + 1).padStart(2, '0')}
                  </td>
                  <td className="py-3 px-2 text-gray-200">
                    {service.serviceName}
                  </td>
                  <td className="py-3 px-2 text-gray-400 text-xs">SERVICE</td>
                  <td className="py-3 px-2 text-right text-gray-200">
                    {service.price?.toLocaleString('en-AE', {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </td>
                  <td className="py-3 px-2 text-right font-semibold text-gray-100">
                    {service.finalPrice?.toLocaleString('en-AE', {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals Section */}
        <div className="flex justify-end mb-12">
          <div className="w-80">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-gray-700">
                <span className="text-gray-400">Subtotal</span>
                <span className="text-gray-200">
                  AED {subtotal?.toLocaleString('en-AE')}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-700">
                <span className="text-gray-400">Discount</span>
                <span className="text-gray-200">
                  AED {discount?.toLocaleString('en-AE')}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-700">
                <span className="text-gray-400">VAT (5%)</span>
                <span className="text-gray-200">
                  AED {vat?.toLocaleString('en-AE')}
                </span>
              </div>
              <div className="flex justify-between py-3 px-3 bg-yellow-600 text-black font-bold rounded mt-2">
                <span>TOTAL DUE</span>
                <span>AED {total?.toLocaleString('en-AE')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Notes */}
        <div className="bg-gray-900 p-4 rounded border border-gray-700 text-xs text-gray-400 space-y-2 mb-8">
          <h3 className="font-bold text-yellow-500 mb-2">PAYMENT & NOTES</h3>
          <p>
            A 30% advance payment is required to confirm the booking. The
            remaining 70% balance is due upon completion of the service and
            prior to vehicle handover.
          </p>
          <p>
            Bank Transfer: IBAN AE XX XXXX XXXX XXXX XXXX | Bank: Emirates NBD
          </p>
          <p>All prices in AED. VAT (5%) applied on amount after discount.</p>
          <p>
            Warranty terms apply per service. Contact us at
            info@cars365studio.ae
          </p>
        </div>

        {/* Footer */}
        <div className="border-t border-yellow-600 pt-8 text-center text-xs text-gray-500">
          <p>
            CARS365STUDIO • 15B St - Al Qouz Ind.fourth - Al Quoz - Dubai -
            United Arab Emirates • +971 50 436 2316 • www.cars365studio.com
          </p>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body {
            background: black;
            margin: 0;
            padding: 0;
          }
          .no-print {
            display: none !important;
          }
          .print\\:p-0 {
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
