import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PackageBuilder from "./components/PackageBuilder";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="bg-obsidian-deep text-on-surface font-body antialiased selection:bg-primary selection:text-on-primary">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <PackageBuilder />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
