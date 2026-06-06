import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderAPI } from '../utils/api';
import { generateInvoicePDF } from '../utils/pdfGenerator';

export default function OrderDetailsPage() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderAndGeneratePDF = async () => {
      try {
        setLoading(true);
        // Fetch order details
        const response = await getOrderAPI(id);
        if (response.success && response.data) {
          setOrder(response.data);
          
          // Generate PDF
          try {
            const pdf = await generateInvoicePDF(response.data);
            setPdfUrl(pdf);
          } catch (pdfError) {
            console.error('Error generating PDF:', pdfError);
            setError('Failed to generate PDF. Please try again.');
          }
        } else {
          setError('Order not found');
        }
      } catch (err) {
        console.error('Error fetching order:', err);
        setError(err.message || 'Failed to load order details');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchOrderAndGeneratePDF();
    }
  }, [id]);

  const handleDownloadPDF = () => {
    if (pdfUrl) {
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `Invoice-${order._id.slice(-6)}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-600 mx-auto mb-4"></div>
          <p className="text-white">Loading and generating invoice...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-center">
          <p className="text-red-500 text-lg mb-4">Error: {error}</p>
          <a href="/" className="text-yellow-500 hover:text-yellow-400 underline">
            Return to home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Header with Download Button */}
      <div className="sticky top-0 z-50 bg-black border-b border-yellow-600 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-yellow-500">Order Invoice</h1>
        <button
          onClick={handleDownloadPDF}
          className="bg-yellow-600 hover:bg-yellow-700 text-black px-6 py-2 rounded font-bold transition-colors"
        >
          Download PDF
        </button>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 overflow-hidden">
        {pdfUrl ? (
          <iframe
            src={pdfUrl}
            title="Order Invoice"
            className="w-full h-full border-none"
            style={{
              width: '100%',
              height: '100%',
              minHeight: 'calc(100vh - 70px)',
            }}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-white">PDF not available</p>
          </div>
        )}
      </div>
    </div>
  );
}
