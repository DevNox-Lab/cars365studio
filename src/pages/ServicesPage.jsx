import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';

export default function ServicesPage() {
  return (
    <>
      <div className="pt-20"> {/* Add padding for fixed navbar */}
        <Services />
      </div>
      <Contact />
    </>
  );
}
