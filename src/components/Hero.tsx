import React from "react";
import { ArrowUpRight, Compass, ShieldCheck, Sparkles, MapPin, Building2, ChevronRight } from "lucide-react";
import { Development, DevelopmentId, DEVELOPMENTS_LIST } from "../data/apartmentData";

interface HeroProps {
  currentDev: Development;
  onSelectDev: (id: DevelopmentId) => void;
}

export const Hero: React.FC<HeroProps> = ({ currentDev, onSelectDev }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <img
          key={currentDev.id}
          src={currentDev.heroImage}
          alt={`${currentDev.fullName} - ${currentDev.neighborhood}`}
          className="w-full h-full object-cover object-center brightness-[0.42] scale-105 transition-all duration-1000"
        />
        {/* Gradients for depth and legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-stone-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* 3 Campaining Switcher Pills directly in Hero */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="text-[11px] uppercase tracking-wider text-stone-400 font-bold mr-1">
            Empreendimentos Disponíveis:
          </span>
          {DEVELOPMENTS_LIST.map((dev) => {
            const isSelected = dev.id === currentDev.id;
            return (
              <button
                key={dev.id}
                onClick={() => onSelectDev(dev.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-amber-500 text-stone-950 border-amber-400 shadow-md font-bold scale-105"
                    : "bg-stone-900/80 text-stone-300 hover:text-white hover:bg-stone-800 border-stone-700/80"
                }`}
              >
                <MapPin className={`w-3 h-3 ${isSelected ? "text-stone-950" : "text-amber-400"}`} />
                <span>{dev.name}</span>
                <span className="opacity-75">({dev.shortNeighborhood})</span>
              </button>
            );
          })}
        </div>

        {/* Subtle Editorial Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/80 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm mb-4 shadow-inner">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{currentDev.badge}</span>
        </div>

        {/* Main Headline with Heavy Emphasis on Name and Location */}
        <div className="max-w-4xl">
          <div className="text-amber-400 font-serif-luxury text-xl sm:text-2xl font-bold tracking-wide mb-2 uppercase">
            {currentDev.fullName}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif-luxury leading-[1.15]">
            {currentDev.headlineTitle}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 underline decoration-amber-500/40">
              {currentDev.headlineHighlight}
            </span>.
          </h1>

          {/* Emphasized Exact Location Pill */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-stone-900/80 border border-stone-800 text-stone-200 text-xs sm:text-sm font-medium">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
            <span><strong>Endereço:</strong> {currentDev.address}</span>
          </div>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-stone-300 font-normal leading-relaxed max-w-3xl">
            {currentDev.subheadline}
          </p>
        </div>

        {/* Primary CTA & Conversion Triggers */}
        <div className="mt-8 flex flex-col gap-3 max-w-xl">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={currentDev.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <span>Tenho Interesse no {currentDev.name}</span>
              <div className="w-6 h-6 rounded-full bg-stone-950/20 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="w-4 h-4 text-stone-950 stroke-[2.5]" />
              </div>
            </a>

            <a
              href="#empreendimentos"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-white font-semibold text-sm border border-stone-700/80 hover:border-stone-500 transition-all backdrop-blur-sm"
            >
              <span>Ver os 3 Empreendimentos</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </a>
          </div>

          {/* Quick direct buttons for the other 2 developments */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-stone-400 mt-1">
            <span className="text-[11px] text-stone-500 font-medium">Ou acesse direto:</span>
            {DEVELOPMENTS_LIST.filter((d) => d.id !== currentDev.id).map((dev) => (
              <a
                key={dev.id}
                href={dev.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-stone-900/90 hover:bg-stone-800 text-amber-300 hover:text-white border border-stone-800 hover:border-amber-500/40 text-[11px] font-semibold transition-colors"
                title={`Tenho Interesse no ${dev.fullName}`}
              >
                <span>Tenho Interesse no {dev.name}</span>
                <ArrowUpRight className="w-3 h-3 text-amber-400" />
              </a>
            ))}
          </div>
        </div>

        {/* Confidence & Privileged Location Signals */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-stone-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Localização Nobre: {currentDev.neighborhood}</span>
          </div>
          <span className="hidden sm:inline text-stone-600">·</span>
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Walk Score {currentDev.walkScore}/100</span>
          </div>
          <span className="hidden sm:inline text-stone-600">·</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>{currentDev.priceStartingFrom}</span>
          </div>
        </div>

        {/* Metric Bar / Key Highlights of the chosen development */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="bg-stone-900/50 p-4 rounded-xl border border-stone-800/60 backdrop-blur-sm">
            <span className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif-luxury block">
              {currentDev.areaRange}
            </span>
            <span className="text-xs uppercase tracking-wider text-stone-400 mt-1 block">
              Metragens Privativas
            </span>
          </div>

          <div className="bg-stone-900/50 p-4 rounded-xl border border-stone-800/60 backdrop-blur-sm">
            <span className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif-luxury block">
              {currentDev.suitesRange}
            </span>
            <span className="text-xs uppercase tracking-wider text-stone-400 mt-1 block">
              Com Suíte & Varanda
            </span>
          </div>

          <div className="bg-stone-900/50 p-4 rounded-xl border border-stone-800/60 backdrop-blur-sm">
            <span className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif-luxury block">
              {currentDev.parkingRange}
            </span>
            <span className="text-xs uppercase tracking-wider text-stone-400 mt-1 block">
              Garagem Coberta
            </span>
          </div>

          <div className="bg-stone-900/50 p-4 rounded-xl border border-stone-800/60 backdrop-blur-sm">
            <span className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif-luxury block">
              {currentDev.rooftopHighlight}
            </span>
            <span className="text-xs uppercase tracking-wider text-stone-400 mt-1 block">
              Lazer de Alto Padrão
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
