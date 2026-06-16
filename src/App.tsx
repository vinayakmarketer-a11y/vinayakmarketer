/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Industries from './components/Industries';
import Benefits from './components/Benefits';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-navy-dark text-slate-100 antialiased selection:bg-primary selection:text-white">
      {/* Navigation Headers */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Primary Landing Main Segment */}
      <main>
        {/* HERO SECTION */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* ABOUT US */}
        <About />

        {/* SERVICES OFFERED */}
        <Services />

        {/* WHY CHOOSE US */}
        <WhyChooseUs />

        {/* INDUSTRIES SERVED */}
        <Industries />

        {/* REPLICATING VALUE BENEFITS */}
        <Benefits />

        {/* STATS ACCOMPLISHMENTS */}
        <Stats />

        {/* TESTIMONIAL AUDITS */}
        <Testimonials />

        {/* FREQUENT ENQUIRIES */}
        <FAQ />

        {/* STRATEGIC CONTACT & MAP */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* Floating Elements & Portals */}
      <WhatsAppButton />
      
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />
    </div>
  );
}
