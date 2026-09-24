import React from "react";
import {
  MapPin,
  ArrowUpRight,
  Maximize2,
  CheckCircle2,
  Sparkles,
  Bed,
  Car,
  Layers,
  ExternalLink,
  Eye,
} from "lucide-react";
import { Development, DevelopmentId, DEVELOPMENTS_LIST } from "../data/apartmentData";

interface CampaignsShowcaseSectionProps {
  currentDev: Development;
  onSelectDev: (id: DevelopmentId) => void;
}

export const CampaignsShowcaseSection: React.FC<CampaignsShowcaseSectionProps> = ({
  currentDev,
  onSelectDev,
}) => {
  return (
    <section id="empreendimentos" className="py-20 lg:py-28 bg-stone-950 border-t border-stone-850 relative">
      {/* Background glow effects */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfólio Residencial de Alto Padrão</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif-luxury leading-tight">
            Três Campanhas Exclusivas nas Melhores Localizações de São Paulo
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            Compare os empreendimentos abaixo, identifique o bairro que combina com o seu estilo de vida e registre seu interesse no formulário oficial de cada projeto.
          </p>
        </div>

        {/* 3 Campaigns Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {DEVELOPMENTS_LIST.map((dev) => {
            const isSelected = dev.id === currentDev.id;
            return (
              <div
                key={dev.id}
                className={`flex flex-col rounded-3xl overflow-hidden transition-all duration-300 border ${
                  isSelected
                    ? "bg-stone-900 border-amber-500 shadow-2xl shadow-amber-500/15 scale-[1.02] ring-2 ring-amber-500/40"
                    : "bg-stone-900/70 border-stone-800 hover:border-stone-700 hover:bg-stone-900/90 shadow-xl"
                }`}
              >
                {/* Image Header with Location Badge */}
                <div className="relative h-64 sm:h-72 overflow-hidden group">
                  <img
                    src={dev.heroImage}
                    alt={dev.fullName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

                  {/* Top Badge: City Zone */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-950/85 backdrop-blur-md border border-amber-500/40 text-amber-400 font-bold text-[11px] uppercase tracking-wider shadow-lg">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{dev.shortNeighborhood}</span>
                    </span>

                    {isSelected && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-500 text-stone-950 text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                        Visualizando Agora
                      </span>
                    )}
                  </div>

                  {/* Bottom Image Overlay: Price Tag */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] text-amber-300 uppercase tracking-widest font-semibold block">
                      Condição de Lançamento
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-white font-serif-luxury">
                      {dev.priceStartingFrom}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Empreendimento Name - Emphasized */}
                    <div className="mb-3">
                      <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block mb-1">
                        {dev.badge}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-luxury leading-tight">
                        {dev.name}
                      </h3>
                    </div>

                    {/* Exact Address / Location Emphasis */}
                    <div className="flex items-start gap-2 p-3 rounded-xl bg-stone-950/80 border border-stone-800/80 mb-5">
                      <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-stone-200">
                          {dev.neighborhood}
                        </div>
                        <div className="text-[11px] text-stone-400 mt-0.5 line-clamp-1">
                          {dev.address}
                        </div>
                      </div>
                    </div>

                    {/* Quick Specs */}
                    <div className="grid grid-cols-2 gap-3 mb-5 text-xs text-stone-300">
                      <div className="flex items-center gap-2 bg-stone-800/40 p-2.5 rounded-lg border border-stone-800">
                        <Layers className="w-4 h-4 text-amber-400 shrink-0" />
                        <div>
                          <span className="text-[10px] text-stone-400 block uppercase">Área</span>
                          <span className="font-semibold text-white">{dev.areaRange}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 bg-stone-800/40 p-2.5 rounded-lg border border-stone-800">
                        <Bed className="w-4 h-4 text-amber-400 shrink-0" />
                        <div>
                          <span className="text-[10px] text-stone-400 block uppercase">Dormitórios</span>
                          <span className="font-semibold text-white">{dev.suitesRange}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 bg-stone-800/40 p-2.5 rounded-lg border border-stone-800">
                        <Car className="w-4 h-4 text-amber-400 shrink-0" />
                        <div>
                          <span className="text-[10px] text-stone-400 block uppercase">Vagas</span>
                          <span className="font-semibold text-white">{dev.parkingRange}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 bg-stone-800/40 p-2.5 rounded-lg border border-stone-800">
                        <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                        <div>
                          <span className="text-[10px] text-stone-400 block uppercase">Destaque</span>
                          <span className="font-semibold text-white truncate max-w-[100px]">{dev.rooftopHighlight}</span>
                        </div>
                      </div>
                    </div>

                    {/* Key Highlights list */}
                    <p className="text-xs text-stone-400 line-clamp-2 mb-6 leading-relaxed">
                      {dev.subheadline}
                    </p>
                  </div>

                  {/* Actions: Direct Form CTA + Deep Dive Explore Button */}
                  <div className="space-y-2.5 pt-4 border-t border-stone-800/80">
                    {/* Primary Interest Button -> Direct to user's specified Google Form */}
                    <a
                      href={dev.formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-amber-500/25 transition-all group"
                    >
                      <span>Tenho Interesse no {dev.shortNeighborhood}</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:scale-110" />
                    </a>

                    {/* Secondary: Switch page content to this development */}
                    <button
                      type="button"
                      onClick={() => {
                        onSelectDev(dev.id);
                        // smooth scroll to gallery or details
                        const target = document.getElementById("sobre");
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-stone-800 text-amber-400 border border-amber-500/30"
                          : "bg-stone-950/60 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800"
                      }`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>
                        {isSelected
                          ? "Página adaptada a este empreendimento"
                          : `Ver fotos e plantas de ${dev.name}`}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
