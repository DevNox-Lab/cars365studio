import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ServicesPage from './pages/ServicesPage';
import BuildPackagePage from './pages/BuildPackagePage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { PackageBuilderProvider } from './context/PackageBuilderContext';
import CartDrawer from './components/CartDrawer';

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <BrowserRouter>
      <PackageBuilderProvider>
        <div className="bg-obsidian-deep text-on-surface font-body antialiased selection:bg-primary selection:text-on-primary">
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/build-package" element={<BuildPackagePage />} />
              <Route path="/order/:id" element={<OrderDetailsPage />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </PackageBuilderProvider>
    </BrowserRouter>
  );
}
