import React, { useState, useEffect } from "react";
import { Maximize, Bed, Car, Box, Check, ArrowRight, FileText, MapPin } from "lucide-react";
import { Development, TypologyPlan } from "../data/apartmentData";

interface FloorPlansSectionProps {
  currentDev: Development;
}

export const FloorPlansSection: React.FC<FloorPlansSectionProps> = ({ currentDev }) => {
  const [selectedPlan, setSelectedPlan] = useState<TypologyPlan>(currentDev.typologies[0]);

  // When development changes, default to first typology of that development
  useEffect(() => {
    setSelectedPlan(currentDev.typologies[0]);
  }, [currentDev.id]);

  return (
    <section id="plantas" className="py-20 lg:py-28 bg-stone-900/40 border-t border-stone-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-widest mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Plantas & Tipologias · {currentDev.name}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif-luxury leading-tight">
            Projetadas para a Sua Liberdade Espacial na {currentDev.shortNeighborhood}.
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            Plantas inteligentes que integram áreas sociais e preservam a privacidade dos dormitórios no <strong>{currentDev.fullName}</strong>.
          </p>
        </div>

        {/* Typology Switcher Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          {currentDev.typologies.map((plan) => {
            const isSelected = selectedPlan.id === plan.id;
            return (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan)}
                className={`w-full sm:w-auto px-6 py-4 rounded-xl text-left sm:text-center transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? "bg-amber-500 text-stone-950 border-amber-400 shadow-xl shadow-amber-500/20"
                    : "bg-stone-900/90 text-stone-300 border-stone-800 hover:border-stone-700 hover:bg-stone-800"
                }`}
              >
                <div className="font-bold text-base sm:text-lg font-serif-luxury">
                  {plan.name}
                </div>
                <div
                  className={`text-xs mt-1 ${
                    isSelected ? "text-stone-900 font-bold" : "text-stone-400"
                  }`}
                >
                  {plan.area} · {plan.suites}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Typology Detail Card */}
        <div className="rounded-3xl bg-stone-900/80 border border-stone-800 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left: Architectural Render */}
            <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] overflow-hidden bg-stone-950">
              <img
                src={selectedPlan.image}
                alt={selectedPlan.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-stone-900/90 text-amber-400 font-bold border border-amber-500/30">
                  {currentDev.shortNeighborhood} · {selectedPlan.area}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-stone-900/90 text-white font-medium">
                  {selectedPlan.estimatedPrice}
                </span>
              </div>
            </div>

            {/* Right: Technical Specs & Inclusions */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
                  {selectedPlan.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-luxury">
                  {selectedPlan.name}
                </h3>
                <p className="mt-3 text-stone-300 text-xs sm:text-sm leading-relaxed">
                  {selectedPlan.description}
                </p>

                {/* Key Spec Badges */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex items-center gap-2.5">
                    <Maximize className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase">Área</span>
                      <span className="text-xs font-bold text-white">{selectedPlan.area}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex items-center gap-2.5">
                    <Bed className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase">Suítes</span>
                      <span className="text-xs font-bold text-white">{selectedPlan.suites}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex items-center gap-2.5">
                    <Car className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase">Garagem</span>
                      <span className="text-xs font-bold text-white">{selectedPlan.parking}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800 flex items-center gap-2.5">
                    <Box className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-stone-400 block uppercase">Depósito</span>
                      <span className="text-xs font-bold text-white">{selectedPlan.storage}</span>
                    </div>
                  </div>
                </div>

                {/* Features checklist */}
                <div className="mt-6 space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-stone-400 font-bold block mb-2">
                    Destaques desta Planta:
                  </span>
                  {selectedPlan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-stone-800">
                <a
                  href={currentDev.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-amber-500/20"
                >
                  <FileText className="w-4 h-4" />
                  <span>Tenho Interesse no {currentDev.name} · Solicitar Planta</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
