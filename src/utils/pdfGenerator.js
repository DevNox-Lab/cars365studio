/**
 * PDF Generation utilities for Cars365 Studio
 * Uses html2pdf to convert invoice HTML to PDF
 * Theme: Dark mode with orangish (#FF8C42) and grey colors
 */

/**
 * Generate PDF from invoice data
 * Returns a data URL that can be displayed in iframe
 * @param {Object} order - Order data
 * @returns {Promise<string>} - Data URL of the PDF
 */
export const generateInvoicePDF = async (order) => {
  if (!order) {
    throw new Error('Order data is required');
  }

  try {
    // Dynamically import html2pdf
    const html2pdf = (await import('html2pdf.js')).default;

    const formatDate = (dateString) => {
      if (!dateString) return 'N/A';
      return new Date(dateString).toLocaleDateString('en-AE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    };

    const calculateDueDate = (createdAt) => {
      const date = new Date(createdAt);
      date.setDate(date.getDate() + 7);
      return date.toLocaleDateString('en-AE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
    };

    const invoiceNumber = `INV-${order._id.slice(-6).toUpperCase()}`;
    const createdDate = formatDate(order.createdAt);
    const dueDate = calculateDueDate(order.createdAt);
    const total = order.services?.totalPrice || 0;
    
    // Color scheme: Orangish (#FF8C42) and Grey (#6B7280, #9CA3AF)
    const colorOrange = '#FFDEA5';
    const colorDarkGrey = '#121315';
    const colorMediumGrey = '#374151';
    const colorLightGrey = '#D1D5DB';
    const colorText = '#F3F4F6';
    const colorSubtext = '#9CA3AF';

    // Generate HTML string for the invoice
    const invoiceHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Invoice ${invoiceNumber}</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html, body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: ${colorDarkGrey};
            color: ${colorText};
            font-size: 11px;
            line-height: 1.4;
          }
          .page {
            width: 210mm;
            height: 297mm;
            padding: 20px;
            background-color: ${colorDarkGrey};
            display: flex;
            flex-direction: column;
          }
          .header-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 2px solid ${colorOrange};
          }
          .brand-info h1 {
            font-size: 36px;
            font-weight: 900;
            margin-bottom: 5px;
            letter-spacing: -0.5px;
            color: ${colorText};
          }
          .brand-info h1 .orange {
            color: ${colorOrange};
          }
          .brand-info p {
            font-size: 8px;
            color: ${colorSubtext};
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-top: 3px;
          }
          .invoice-meta {
            text-align: right;
          }
          .invoice-meta .title {
            font-size: 28px;
            font-weight: 900;
            color: ${colorOrange};
            margin-bottom: 12px;
          }
          .meta-row {
            display: flex;
            justify-content: flex-end;
            gap: 15px;
            margin-bottom: 6px;
            font-size: 10px;
          }
          .meta-label {
            color: ${colorSubtext};
            width: 80px;
            text-align: right;
          }
          .meta-value {
            color: ${colorText};
            font-weight: 600;
            width: 100px;
            text-align: right;
          }
          .meta-value.status {
            color: ${colorOrange};
            font-weight: 900;
          }
          .content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin-bottom: 20px;
          }
          .section {
            display: flex;
            flex-direction: column;
          }
          .section-title {
            font-size: 9px;
            color: ${colorOrange};
            text-transform: uppercase;
            letter-spacing: 1.5px;
            font-weight: 900;
            margin-bottom: 10px;
            padding-bottom: 8px;
            border-bottom: 1px solid ${colorOrange};
          }
          .field {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            font-size: 10px;
          }
          .field-label {
            color: ${colorSubtext};
            width: 45%;
          }
          .field-value {
            color: ${colorText};
            font-weight: 600;
            width: 50%;
            text-align: right;
          }
          .visit-section {
            background-color: ${colorMediumGrey};
            padding: 15px;
            border-radius: 4px;
            border-left: 3px solid ${colorOrange};
            margin-bottom: 20px;
          }
          .visit-section .section-title {
            margin-top: 0;
            border-bottom: 1px solid ${colorOrange};
            padding-bottom: 8px;
          }
          .visit-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }
          .visit-field {
            font-size: 10px;
          }
          .visit-field-label {
            color: ${colorSubtext};
            margin-bottom: 3px;
            font-size: 8px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .visit-field-value {
            color: ${colorText};
            font-weight: 600;
          }
          .services-section {
            margin-bottom: 20px;
          }
          .services-title {
            font-size: 9px;
            color: ${colorOrange};
            text-transform: uppercase;
            letter-spacing: 1.5px;
            font-weight: 900;
            margin-bottom: 10px;
            padding-bottom: 8px;
            border-bottom: 1px solid ${colorOrange};
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 15px;
          }
          thead {
            background-color: ${colorMediumGrey};
            border-top: 1px solid ${colorOrange};
            border-bottom: 1px solid ${colorOrange};
          }
          th {
            padding: 10px 8px;
            text-align: left;
            font-size: 9px;
            color: ${colorOrange};
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          th.right {
            text-align: right;
          }
          td {
            padding: 10px 8px;
            font-size: 10px;
            color: ${colorText};
            border-bottom: 1px solid ${colorMediumGrey};
          }
          td.right {
            text-align: right;
          }
          tr:last-child td {
            border-bottom: 1px solid ${colorOrange};
          }
          .totals-section {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 20px;
          }
          .totals-box {
            width: 300px;
          }
          .total-row {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            border-bottom: 1px solid ${colorMediumGrey};
            font-size: 10px;
          }
          .total-label {
            color: ${colorSubtext};
          }
          .total-value {
            color: ${colorText};
            font-weight: 600;
          }
          .total-due-row {
            display: flex;
            justify-content: space-between;
            padding: 12px;
            background-color: ${colorOrange};
            color: ${colorDarkGrey};
            font-weight: 900;
            font-size: 12px;
            margin-top: 8px;
            border-radius: 3px;
          }
          .payment-notes {
            background-color: ${colorMediumGrey};
            padding: 12px;
            border-left: 3px solid ${colorOrange};
            border-radius: 3px;
            margin-bottom: 15px;
            font-size: 9px;
            line-height: 1.5;
          }
          .payment-notes-title {
            color: ${colorOrange};
            font-weight: 900;
            margin-bottom: 6px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-size: 8px;
          }
          .payment-notes p {
            color: ${colorSubtext};
            margin-bottom: 4px;
          }
          .footer {
            border-top: 1px solid ${colorOrange};
            padding-top: 12px;
            text-align: center;
            font-size: 8px;
            color: ${colorSubtext};
            margin-top: auto;
          }
          .footer-brand {
            color: ${colorOrange};
            font-weight: 900;
            margin-bottom: 4px;
            font-size: 10px;
          }
        </style>
      </head>
      <body>
        <div class="page">
          <!-- Header -->
          <div class="header-section">
            <div class="brand-info">
              <h1>CARS365<span class="orange">STUDIO</span></h1>
              <p>Premium Automotive Customization • Dubai, UAE</p>
            </div>
            <div class="invoice-meta">
              <div class="title">INVOICE</div>
              <div class="meta-row">
                <span class="meta-label">Invoice No.</span>
                <span class="meta-value">${invoiceNumber}</span>
              </div>
              <div class="meta-row">
                <span class="meta-label">Date</span>
                <span class="meta-value">${createdDate}</span>
              </div>
              <div class="meta-row">
                <span class="meta-label">Due Date</span>
                <span class="meta-value">${dueDate}</span>
              </div>
              <div class="meta-row">
                <span class="meta-label">Status</span>
                <span class="meta-value status">UNPAID</span>
              </div>
            </div>
          </div>

          <!-- Customer & Vehicle Info -->
          <div class="content-grid">
            <div class="section">
              <div class="section-title">Customer Details</div>
              <div class="field">
                <span class="field-label">Name</span>
                <span class="field-value">${order.customerName || 'N/A'}</span>
              </div>
              <div class="field">
                <span class="field-label">Phone</span>
                <span class="field-value">${order.phoneNumber || 'N/A'}</span>
              </div>
              <div class="field">
                <span class="field-label">Email</span>
                <span class="field-value">info@cars365studio.ae</span>
              </div>
              <div class="field">
                <span class="field-label">Location</span>
                <span class="field-value">Al Quoz, Dubai</span>
              </div>
            </div>
            <div class="section">
              <div class="section-title">Vehicle Information</div>
              <div class="field">
                <span class="field-label">Model</span>
                <span class="field-value">${order.vehicleInfo?.model || 'N/A'}</span>
              </div>
              <div class="field">
                <span class="field-label">Year</span>
                <span class="field-value">${order.vehicleInfo?.yearOfManufacture || 'N/A'}</span>
              </div>
              <div class="field">
                <span class="field-label">Type</span>
                <span class="field-value">${order.vehicleInfo?.carType || 'N/A'}</span>
              </div>
              <div class="field">
                <span class="field-label">Color</span>
                <span class="field-value">${order.vehicleInfo?.color || 'N/A'}</span>
              </div>
            </div>
          </div>

          <!-- Visit Details -->
          <div class="visit-section">
            <div class="section-title">Visit Details</div>
            <div class="visit-grid">
              <div class="visit-field">
                <div class="visit-field-label">Date</div>
                <div class="visit-field-value">${formatDate(order.visitDate)}</div>
              </div>
              <div class="visit-field">
                <div class="visit-field-label">Time</div>
                <div class="visit-field-value">${order.visitTime || 'N/A'}</div>
              </div>
            </div>
          </div>

          <!-- Services -->
          <div class="services-section">
            <div class="services-title">Services Ordered</div>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Service Name</th>
                  <th class="right">Unit Price (AED)</th>
                  <th class="right">Total (AED)</th>
                </tr>
              </thead>
              <tbody>
                ${order.services?.selectedServices?.map((service, index) => `
                  <tr>
                    <td>${String(index + 1).padStart(2, '0')}</td>
                    <td>${service.serviceName || 'Service'}</td>
                    <td class="right">${(service.price || 0).toLocaleString('en-AE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                    <td class="right">${(service.finalPrice || 0).toLocaleString('en-AE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                  </tr>
                `).join('') || '<tr><td colspan="4" style="text-align: center; color: ' + colorSubtext + ';">No services added</td></tr>'}
              </tbody>
            </table>
          </div>

          <!-- Totals -->
          <div class="totals-section">
            <div class="totals-box">
              <div class="total-due-row">
                <span>TOTAL</span>
                <span>AED ${(total || 0).toLocaleString('en-AE')}</span>
              </div>
            </div>
          </div>

          <!-- Payment Notes -->
          <div class="payment-notes">
            <div class="payment-notes-title">Payment Terms & Notes</div>
            <p>• Payment due within 7 days of invoice date</p>
            <p>• Bank Transfer: Emirates NBD (Details on request)</p>
            <p>• All prices in AED inclusive of taxes</p>
            <p>• Warranty applies per service terms</p>
          </div>

          <!-- Footer -->
          <div class="footer">
            <div class="footer-brand">CARS365STUDIO</div>
            <p>Al Quoz Industrial Area, Dubai, UAE | +971544541345 | www.cars365studio.ae</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const opt = {
      margin: [0, 0, 0, 0],
      filename: `${invoiceNumber}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        backgroundColor: colorDarkGrey,
        useCORS: true,
        logging: false,
        allowTaint: true
      },
      jsPDF: { 
        orientation: 'portrait', 
        unit: 'mm', 
        format: 'a4',
        compress: true
      }
    };

    return new Promise((resolve, reject) => {
      html2pdf()
        .set(opt)
        .from(invoiceHTML)
        .output('dataurlstring')
        .then((pdfDataUrl) => {
          resolve(pdfDataUrl);
        })
        .catch((error) => {
          console.error('PDF generation error:', error);
          reject(new Error('Failed to generate PDF'));
        });
    });
  } catch (error) {
    console.error('Error in generateInvoicePDF:', error);
    throw error;
  }
};
