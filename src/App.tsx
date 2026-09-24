/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { CampaignSelectorBar } from "./components/CampaignSelectorBar";
import { Hero } from "./components/Hero";
import { CampaignsShowcaseSection } from "./components/CampaignsShowcaseSection";
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
import { DEVELOPMENTS, DevelopmentId } from "./data/apartmentData";

export default function App() {
  const [selectedDevId, setSelectedDevId] = useState<DevelopmentId>("aurora");
  const currentDev = DEVELOPMENTS[selectedDevId] || DEVELOPMENTS.aurora;

  const handleSelectDev = (id: DevelopmentId) => {
    setSelectedDevId(id);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans antialiased selection:bg-amber-500/30 selection:text-amber-200">
      {/* Navigation */}
      <Navbar currentDev={currentDev} onSelectDev={handleSelectDev} />

      {/* Persistent Quick Campaign Switcher Bar */}
      <CampaignSelectorBar currentDev={currentDev} onSelectDev={handleSelectDev} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero currentDev={currentDev} onSelectDev={handleSelectDev} />

        {/* 3 Campaigns Separated Showcase (Mooca, Cidade Jardim, Tatuapé) */}
        <CampaignsShowcaseSection currentDev={currentDev} onSelectDev={handleSelectDev} />

        {/* About & Architectural Highlights of Selected Development */}
        <AboutSection currentDev={currentDev} />

        {/* Modern Photo Gallery (Destaque para fotos modernas do empreendimento) */}
        <GallerySection currentDev={currentDev} />

        {/* Privileged Location (Destaque para a localização privilegiada com endereço) */}
        <LocationSection currentDev={currentDev} />

        {/* Floor Plans & Typologies */}
        <FloorPlansSection currentDev={currentDev} />

        {/* Leisure & Rooftop Amenities */}
        <AmenitiesSection currentDev={currentDev} />

        {/* Investment & Financing Simulator */}
        <SimulatorSection currentDev={currentDev} />

        {/* Official Interest Form & Direct Links to the 3 Forms */}
        <InterestCTASection currentDev={currentDev} onSelectDev={handleSelectDev} />

        {/* Frequently Asked Questions */}
        <FAQSection currentDev={currentDev} />
      </main>

      {/* Footer */}
      <Footer currentDev={currentDev} onSelectDev={handleSelectDev} />

      {/* Persistent Floating Action Bar */}
      <FloatingCTA currentDev={currentDev} onSelectDev={handleSelectDev} />
    </div>
  );
}
