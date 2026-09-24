import React, { useState } from "react";
import {
  MapPin,
  Navigation,
  Compass,
  UtensilsCrossed,
  Trees,
  GraduationCap,
  ShoppingBag,
  Car,
  Footprints,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Development, LocationPoint } from "../data/apartmentData";

interface LocationSectionProps {
  currentDev: Development;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ currentDev }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Todos os Pontos", icon: <MapPin className="w-4 h-4" /> },
    { id: "gastronomia", label: "Gastronomia", icon: <UtensilsCrossed className="w-4 h-4" /> },
    { id: "parques", label: "Parques & Lazer", icon: <Trees className="w-4 h-4" /> },
    { id: "compras", label: "Compras & Shoppings", icon: <ShoppingBag className="w-4 h-4" /> },
    { id: "educacao", label: "Educação & Saúde", icon: <GraduationCap className="w-4 h-4" /> },
    { id: "mobilidade", label: "Mobilidade & Vias", icon: <Car className="w-4 h-4" /> },
  ];

  const filteredPoints =
    selectedCategory === "all"
      ? currentDev.locationPoints
      : currentDev.locationPoints.filter((p) => p.category === selectedCategory);

  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-stone-950 border-t border-stone-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <Navigation className="w-3.5 h-3.5" />
              <span>Localização Privilegiada · {currentDev.name}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif-luxury leading-tight">
              A Exclusividade de Viver na {currentDev.shortNeighborhood}.
            </h2>
            <div className="mt-3 flex items-center gap-2 text-amber-300 font-semibold text-sm">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{currentDev.address}</span>
            </div>
          </div>

          <div className="max-w-md">
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {currentDev.zoneDescription}
            </p>
          </div>
        </div>

        {/* WalkScore & Key Location Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-stone-900/80 border border-amber-500/30 flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/40 flex flex-col items-center justify-center shrink-0">
              <span className="text-amber-400 font-bold text-xl leading-none">{currentDev.walkScore}</span>
              <span className="text-[9px] uppercase tracking-wider text-amber-300 font-medium">WalkScore</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">{currentDev.walkScoreLabel}</h3>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                {currentDev.walkScoreDesc}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-stone-800 flex items-center justify-center shrink-0 text-amber-400">
              <Compass className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Eixo Nobre & Arborizado</h3>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Rua tranquila com segurança patrimonial, fácil acesso e infraestrutura comercial de primeira linha.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-stone-800 flex items-center justify-center shrink-0 text-amber-400">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Valorização Consagrada</h3>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Região com histórico de valorização imobiliária acima da média do mercado da capital.
              </p>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/20"
                    : "bg-stone-900 text-stone-300 hover:text-white hover:bg-stone-850 border border-stone-800"
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Location Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-stone-900/70 border border-stone-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                    {point.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white bg-stone-800 px-2.5 py-1 rounded-md">
                    {point.transportType === "walking" ? (
                      <Footprints className="w-3.5 h-3.5 text-amber-400" />
                    ) : (
                      <Car className="w-3.5 h-3.5 text-amber-400" />
                    )}
                    <span>{point.distanceTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white font-serif-luxury mb-1">
                  {point.name}
                </h3>
                <span className="text-xs text-amber-300/80 block mb-2 font-medium">
                  {point.type}
                </span>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-500">
                <span>{currentDev.shortNeighborhood} · SP</span>
                <span className="text-amber-400/90 font-medium">Acesso Rápido</span>
              </div>
            </div>
          ))}
        </div>

        {/* Address Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-stone-900/90 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">
                Localização Exata de {currentDev.name}
              </span>
              <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                {currentDev.address}
              </p>
            </div>
          </div>

          <a
            href={currentDev.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-lg"
          >
            <span>Tenho Interesse no {currentDev.shortNeighborhood}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
