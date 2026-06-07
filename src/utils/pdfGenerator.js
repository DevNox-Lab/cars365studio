export const generateInvoicePDF = async (order) => {
  if (!order) {
    throw new Error('Order data is required');
  }

  try {
    const html2pdf = (await import('html2pdf.js')).default;

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

    const invoiceNumber = `INV-${order._id.slice(-6).toUpperCase()}`;
    const createdDate = formatDate(order.createdAt);
    const dueDate = calculateDueDate(order.createdAt);
    const total = order.services?.totalPrice || 0;

    const colorOrange = '#FFDEA5';
    const colorDarkGrey = '#121315';
    const colorMediumGrey = '#374151';
    const colorText = '#F3F4F6';
    const colorSubtext = '#9CA3AF';

    const CAR_COLOR_NAMES = {
      '#FFFFFF': 'White',
      '#F8F9FA': 'Arctic White',
      '#F5F5F0': 'Pearl White',
      '#FFF8E7': 'Ivory White',
      '#1A1A1A': 'Black',
      '#0D0D0D': 'Jet Black',
      '#111111': 'Obsidian Black',
      '#222222': 'Satin Black',
      '#C0C0C0': 'Silver',
      '#A8A9AD': 'Metallic Silver',
      '#9FA3A7': 'Titanium Silver',
      '#808080': 'Gray',
      '#4A4A4A': 'Dark Gray',
      '#5C5C5C': 'Gunmetal Grey',
      '#8A8D8F': 'Nardo Grey',
      '#0057B8': 'Blue',
      '#6FA8DC': 'Light Blue',
      '#4A90B8': 'Sky Blue',
      '#00AEEF': 'Miami Blue',
      '#1C2B4A': 'Navy Blue',
      '#102542': 'Midnight Blue',
      '#003DA5': 'French Racing Blue',
      '#5A7DAA': 'China Blue',
      '#D32F2F': 'Red',
      '#C0392B': 'Racing Red',
      '#D40000': 'Rosso Corsa',
      '#800000': 'Maroon',
      '#6D1A2A': 'Burgundy',
      '#2E7D32': 'Green',
      '#1A4A2E': 'British Racing Green',
      '#0F8A5F': 'Emerald Green',
      '#556B2F': 'Olive Green',
      '#39FF14': 'Verde Mantis',
      '#FBC02D': 'Yellow',
      '#FFD100': 'Speed Yellow',
      '#FFD700': 'Giallo Modena',
      '#F7D117': 'Solar Yellow',
      '#F57C00': 'Orange',
      '#F04E23': 'Lava Orange',
      '#D4511E': 'Sunset Orange',
      '#FF6F00': 'Papaya Orange',
      '#C5A84F': 'Gold',
      '#B8736A': 'Rose Gold',
      '#795548': 'Brown',
      '#8B5E3C': 'Bronze',
      '#C8B89A': 'Beige',
      '#E8DFC8': 'Cream Ivory',
      '#C2B280': 'Desert Sand',
      '#6A1B9A': 'Purple',
      '#6A0DAD': 'Amethyst Purple',
      '#5A3D7A': 'Cosmic Purple',
      '#E91E63': 'Pink',
      '#40E0D0': 'Turquoise',
      '#008080': 'Teal',
    };

    const getColorLabel = (color) => {
      if (!color) return 'N/A';
      const normalized = String(color).trim().toUpperCase();
      return CAR_COLOR_NAMES[normalized] || color;
    };

    const invoiceHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Invoice ${invoiceNumber}</title>
        <style>
          @page {
            size: A4 portrait;
            margin: 0;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html, body {
            width: 210mm;
            min-height: 100%;
            margin: 0;
            padding: 0;
            background-color: ${colorDarkGrey};
          }
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: ${colorText};
            font-size: 11px;
            line-height: 1.4;
          }

          /*
           * Strict A4 page: fixed 210×297mm, content fills vertically.
           * flex column with the footer pinned to bottom.
           */
          .page {
            width: 210mm;
            min-height: 297mm;
            padding: 16px 20px;
            background-color: ${colorDarkGrey};
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
          }

          /* Main body grows to push footer down */
          .page-body {
            flex: 1 1 auto;
            display: flex;
            flex-direction: column;
          }

          /* ── Header ── */
          .header-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 18px;
            padding-bottom: 12px;
            border-bottom: 2px solid ${colorOrange};
            flex-shrink: 0;
          }
          .brand-info h1 {
            font-size: 34px;
            font-weight: 900;
            letter-spacing: -0.5px;
            color: ${colorText};
          }
          .brand-info h1 .orange { color: ${colorOrange}; }
          .brand-info p {
            font-size: 7px;
            color: ${colorSubtext};
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-top: 3px;
          }
          .invoice-meta { text-align: right; }
          .invoice-meta .title {
            font-size: 26px;
            font-weight: 900;
            color: ${colorOrange};
            margin-bottom: 10px;
          }
          .meta-row {
            display: flex;
            justify-content: flex-end;
            gap: 15px;
            margin-bottom: 5px;
            font-size: 10px;
          }
          .meta-label { color: ${colorSubtext}; width: 80px; text-align: right; }
          .meta-value { color: ${colorText}; font-weight: 600; width: 100px; text-align: right; }
          .meta-value.status { color: ${colorOrange}; font-weight: 900; }

          /* ── Customer / Vehicle grid ── */
          .content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 14px;
            flex-shrink: 0;
          }
          .section { display: flex; flex-direction: column; }
          .section-title {
            font-size: 8px;
            color: ${colorOrange};
            text-transform: uppercase;
            letter-spacing: 1.5px;
            font-weight: 900;
            margin-bottom: 8px;
            padding-bottom: 6px;
            border-bottom: 1px solid ${colorOrange};
          }
          .field {
            display: flex;
            justify-content: space-between;
            margin-bottom: 6px;
            font-size: 10px;
          }
          .field-label { color: ${colorSubtext}; width: 45%; }
          .field-value { color: ${colorText}; font-weight: 600; width: 50%; text-align: right; }

          /* ── Visit details ── */
          .visit-section {
            background-color: ${colorMediumGrey};
            padding: 10px 14px;
            border-radius: 4px;
            border-left: 3px solid ${colorOrange};
            margin-bottom: 14px;
            flex-shrink: 0;
          }
          .visit-section .section-title { margin-top: 0; padding-bottom: 6px; }
          .visit-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
          .visit-field { font-size: 10px; }
          .visit-field-label {
            color: ${colorSubtext};
            margin-bottom: 2px;
            font-size: 8px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .visit-field-value { color: ${colorText}; font-weight: 600; }

          /* ── Services table ── */
          .services-section { margin-bottom: 0; flex-shrink: 0; }
          .services-title {
            font-size: 8px;
            color: ${colorOrange};
            text-transform: uppercase;
            letter-spacing: 1.5px;
            font-weight: 900;
            margin-bottom: 8px;
            padding-bottom: 6px;
            border-bottom: 1px solid ${colorOrange};
          }
          table {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
          }
          col.col-num   { width: 8%; }
          col.col-name  { width: 72%; }
          col.col-total { width: 20%; }
          thead {
            display: table-header-group;
            background-color: ${colorMediumGrey};
            border-top: 1px solid ${colorOrange};
            border-bottom: 1px solid ${colorOrange};
          }
          tbody {
            display: table-row-group;
          }
          tr {
            page-break-inside: avoid;
          }
          th {
            padding: 8px;
            text-align: left;
            font-size: 8px;
            color: ${colorOrange};
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            white-space: nowrap;
            overflow: hidden;
          }
          th.right { text-align: right; }
          td {
            padding: 8px;
            font-size: 10px;
            color: ${colorText};
            border-bottom: 1px solid ${colorMediumGrey};
            word-wrap: break-word;
            vertical-align: middle;
          }
          td.right { text-align: right; }
          tbody tr:last-child td { border-bottom: 1px solid ${colorOrange}; }
          tbody tr { page-break-inside: avoid; }

          /* ── Spacer pushes totals down 10rem ── */
          .totals-spacer {
            height: 1.11rem;
            flex-shrink: 0;
          }

          /* ── Totals ── */
          .totals-section {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 0;
            flex-shrink: 0;
          }
          .totals-box { width: 300px; }
          .total-due-row {
            display: flex;
            justify-content: space-between;
            padding: 12px;
            background-color: ${colorOrange};
            color: ${colorDarkGrey};
            font-weight: 900;
            font-size: 12px;
            border-radius: 3px;
          }

          /*
           * ── Footer (pinned to bottom of the A4 page) ──
           * Contains both Payment Terms and the brand line.
           */
          .page-footer {
            margin-top: auto;
            flex-shrink: 0;
          }
          .payment-notes {
            background-color: ${colorMediumGrey};
            padding: 10px 12px;
            border-left: 3px solid ${colorOrange};
            border-radius: 3px;
            margin-bottom: 10px;
            font-size: 8.5px;
            line-height: 1.5;
          }
          .payment-notes-title {
            color: ${colorOrange};
            font-weight: 900;
            margin-bottom: 5px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-size: 7.5px;
          }
          .payment-notes p { color: ${colorSubtext}; margin-bottom: 3px; }
          .brand-footer {
            border-top: 1px solid ${colorOrange};
            padding-top: 10px;
            text-align: center;
            font-size: 7.5px;
            color: ${colorSubtext};
          }
          .brand-footer-name {
            color: ${colorOrange};
            font-weight: 900;
            margin-bottom: 3px;
            font-size: 9px;
          }
        </style>
      </head>
      <body>
        <div class="page">

          <!-- ── Scrollable body content ── -->
          <div class="page-body">

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

            <!-- Customer & Vehicle -->
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
                  <span class="field-value">cars365studio@gmail.com</span>
                </div>
                <div class="field">
                  <span class="field-label">Location</span>
                  <span class="field-value">${order.location || order.plateInfo?.city || 'NaN'}</span>
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
                  <span class="field-value">${getColorLabel(order.vehicleInfo?.color)}</span>
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
                <colgroup>
                  <col class="col-num" />
                  <col class="col-name" />
                  <col class="col-total" />
                </colgroup>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Service Name</th>
                    <th class="right">Total (AED)</th>
                  </tr>
                </thead>
                <tbody>
                  ${
                    order.services?.selectedServices?.length
                      ? order.services.selectedServices
                          .map(
                            (service, index) => `
                          <tr>
                            <td>${String(index + 1).padStart(2, '0')}</td>
                            <td>${service.serviceName || 'Service'}</td>
                            <td class="right">${(service.finalPrice || 0).toLocaleString('en-AE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                          </tr>`
                          )
                          .join('')
                      : `<tr><td colspan="3" style="text-align:center;color:${colorSubtext};">No services added</td></tr>`
                  }
                </tbody>
              </table>
            </div>

            <!-- 10rem spacer above Total -->
            <div class="totals-spacer"></div>

            <!-- Totals -->
            <div class="totals-section">
              <div class="totals-box">
                <div class="total-due-row">
                  <span>TOTAL</span>
                  <span>AED ${(total || 0).toLocaleString('en-AE')}</span>
                </div>
              </div>
            </div>

          </div>
          <!-- end .page-body -->

          <!-- ── Pinned footer: Payment Terms + Brand line ── -->
          <div class="page-footer">
            <div class="payment-notes">
              <div class="payment-notes-title">Payment Terms &amp; Notes</div>
              <p>• A 50% advance payment is required to confirm the booking. The remaining 50% balance is due upon completion of the service and prior to vehicle handover.</p>
              <p>• Bank Transfer: Emirates NBD (Details on request)</p>
              <p>• All prices in AED inclusive of taxes</p>
              <p>• Warranty applies per service terms</p>
            </div>
            <div class="brand-footer">
              <div class="brand-footer-name">CARS365STUDIO</div>
              <p>15B St - Al Qouz Ind.fourth - Al Quoz - Dubai, UAE | +971 54 454 1345 | www.cars365studio.com</p>
            </div>
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
        allowTaint: true,
      },
      jsPDF: {
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      },
      pagebreak: {
        mode: ['css', 'legacy'],
      },
    };

    return new Promise((resolve, reject) => {
      html2pdf()
        .set(opt)
        .from(invoiceHTML)
        .output('dataurlstring')
        .then((pdfDataUrl) => resolve(pdfDataUrl))
        .catch((error) => {
          globalThis.console?.error('PDF generation error:', error);
          reject(new Error('Failed to generate PDF'));
        });
    });
  } catch (error) {
    globalThis.console?.error('Error in generateInvoicePDF:', error);
    throw error;
  }
};
