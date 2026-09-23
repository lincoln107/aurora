import React, { useState } from "react";
import { Maximize, Bed, Car, Box, Check, ArrowRight, FileText } from "lucide-react";
import { TYPOLOGIES, TypologyPlan, INTEREST_FORM_URL } from "../data/apartmentData";

export const FloorPlansSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<TypologyPlan>(TYPOLOGIES[0]);

  return (
    <section id="plantas" className="py-20 lg:py-28 bg-stone-900/40 border-t border-stone-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest block mb-2">
            Plantas Humanizadas & Tipologias
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif-luxury leading-tight">
            Projetadas para a Sua Liberdade Espacial.
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            Plantas inteligentes que integram áreas sociais e preservam a privacidade dos dormitórios, com possibilidade de personalização da planta durante a construção.
          </p>
        </div>

        {/* Typology Switcher Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          {TYPOLOGIES.map((plan) => {
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
            {/* Left: Architectural Render / Photo */}
            <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] overflow-hidden bg-stone-950">
              <img
                src={selectedPlan.image}
                alt={selectedPlan.name}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent" />

              {/* Price / Estimated Tag */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold block">
                    Condição Exclusiva de Lançamento
                  </span>
                  <div className="text-xl sm:text-2xl font-bold text-white font-serif-luxury">
                    {selectedPlan.estimatedPrice}
                  </div>
                </div>

                <a
                  href={INTEREST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
                >
                  Tenho Interesse
                </a>
              </div>
            </div>

            {/* Right: Technical Specs & Bullet Points */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block">
                  {selectedPlan.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-luxury mt-1 mb-4">
                  {selectedPlan.name}
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed mb-6">
                  {selectedPlan.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800/80 flex items-center gap-3">
                    <Maximize className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase text-stone-400 block">Metragem</span>
                      <span className="text-sm font-bold text-white">{selectedPlan.area}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800/80 flex items-center gap-3">
                    <Bed className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase text-stone-400 block">Dormitórios</span>
                      <span className="text-sm font-bold text-white">{selectedPlan.suites}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800/80 flex items-center gap-3">
                    <Car className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase text-stone-400 block">Vagas</span>
                      <span className="text-sm font-bold text-white">{selectedPlan.parking}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-950/60 border border-stone-800/80 flex items-center gap-3">
                    <Box className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase text-stone-400 block">Armazenamento</span>
                      <span className="text-sm font-bold text-white">{selectedPlan.storage}</span>
                    </div>
                  </div>
                </div>

                {/* Specific Typology Features */}
                <div className="space-y-2 mb-8">
                  <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block mb-2">
                    Destaques desta Planta:
                  </span>
                  {selectedPlan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-stone-300">
                      <div className="w-4 h-4 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA for floor plan */}
              <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row gap-3">
                <a
                  href={INTEREST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-amber-500/25"
                >
                  <FileText className="w-4 h-4" />
                  <span>Tenho Interesse nesta Planta</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
