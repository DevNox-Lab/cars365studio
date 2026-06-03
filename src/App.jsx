import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ServicesPage from './pages/ServicesPage';
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { PackageBuilderProvider } from './context/PackageBuilderContext';
import PackageBuilderModal from './components/PackageBuilderModal';

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
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </main>
          <Footer />
          <PackageBuilderModal />
        </div>
      </PackageBuilderProvider>
    </BrowserRouter>
  );
}
