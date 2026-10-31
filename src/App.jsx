import React from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoAbout from './components/BentoAbout';
import TechStack from './components/TechStack';
import FeaturedProjects from './components/FeaturedProjects';
import EducationJourney from './components/EducationJourney';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian-bg text-slate-100 selection:bg-emerald-500 selection:text-black font-sans relative overflow-x-hidden">
      {/* Viewport Reading Scroll Progress */}
      <ScrollProgress />

      {/* Floating Obsidian & Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero />
        <BentoAbout />
        <TechStack />
        <FeaturedProjects />
        <EducationJourney />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top */}
      <BackToTop />
    </div>
  );
}
