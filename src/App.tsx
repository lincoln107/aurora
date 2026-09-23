/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { GallerySection } from "./components/GallerySection";
import { LocationSection } from "./components/LocationSection";
import { FloorPlansSection } from "./components/FloorPlansSection";
import { AmenitiesSection } from "./components/AmenitiesSection";
import { SimulatorSection } from "./components/SimulatorSection";
import { InterestCTASection } from "./components/InterestCTASection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { FloatingCTA } from "./components/FloatingCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans antialiased selection:bg-amber-500/30 selection:text-amber-200">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About & Architectural Highlights */}
        <AboutSection />

        {/* Modern Photo Gallery (Destaque para fotos modernas) */}
        <GallerySection />

        {/* Privileged Location (Destaque para a localização privilegiada) */}
        <LocationSection />

        {/* Floor Plans & Typologies */}
        <FloorPlansSection />

        {/* Leisure & Rooftop Amenities */}
        <AmenitiesSection />

        {/* Investment & Financing Simulator */}
        <SimulatorSection />

        {/* Official Interest Form & Direct Link */}
        <InterestCTASection />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating Action Bar */}
      <FloatingCTA />
    </div>
  );
}
