import React from "react";
import { ArrowUpRight, Compass, ShieldCheck, Sparkles, MapPin, ChevronDown } from "lucide-react";
import { INTEREST_FORM_URL } from "../data/apartmentData";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Architectural Image with Luxury Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90"
          alt="Aurora Residences - Living Contemporâneo com Vista Panorâmica"
          className="w-full h-full object-cover object-center brightness-[0.45] scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Gradients for depth and legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-stone-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Subtle Editorial Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/80 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm mb-6 shadow-inner">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Lançamento Exclusivo · Oportunidade Única de Investimento</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-serif-luxury leading-[1.15]">
            O Encontro Entre a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">Arquitetura Moderna</span> e a Localização Mais Nobre da Cidade.
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-stone-300 font-normal leading-relaxed max-w-2xl">
            Apartamentos de alto padrão com <strong>3 e 4 suítes</strong> (128m² a 284m²), living integrado com varanda gourmet, lazer privativo no rooftop e a exclusividade de viver onde tudo acontece ao seu redor.
          </p>
        </div>

        {/* Primary CTA & Conversion Triggers */}
        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-xl">
          <a
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span>Tenho Interesse</span>
            <div className="w-6 h-6 rounded-full bg-stone-950/20 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
              <ArrowUpRight className="w-4 h-4 text-stone-950 stroke-[2.5]" />
            </div>
          </a>

          <a
            href="#galeria"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-white font-semibold text-sm border border-stone-700/80 hover:border-stone-500 transition-all backdrop-blur-sm"
          >
            <span>Ver Fotos Modernas</span>
          </a>
        </div>

        {/* Confidence & Privileged Location Signals */}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-stone-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Localização Privilegiada a 3 min do Parque</span>
          </div>
          <span className="hidden sm:inline text-stone-600">·</span>
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Walk Score 98/100 (Faça tudo a pé)</span>
          </div>
          <span className="hidden sm:inline text-stone-600">·</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Condições Especiais de Pré-Lançamento</span>
          </div>
        </div>

        {/* Metric Bar / Key Highlights */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="bg-stone-900/40 p-4 rounded-xl border border-stone-800/50 backdrop-blur-sm">
            <span className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif-luxury block">
              128 a 284 m²
            </span>
            <span className="text-xs uppercase tracking-wider text-stone-400 mt-1 block">
              Área Privativa Ampla
            </span>
          </div>

          <div className="bg-stone-900/40 p-4 rounded-xl border border-stone-800/50 backdrop-blur-sm">
            <span className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif-luxury block">
              3 e 4 Suítes
            </span>
            <span className="text-xs uppercase tracking-wider text-stone-400 mt-1 block">
              Com Closet & Banho Spa
            </span>
          </div>

          <div className="bg-stone-900/40 p-4 rounded-xl border border-stone-800/50 backdrop-blur-sm">
            <span className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif-luxury block">
              2 a 4 Vagas
            </span>
            <span className="text-xs uppercase tracking-wider text-stone-400 mt-1 block">
              Com Ponto para Carro Elétrico
            </span>
          </div>

          <div className="bg-stone-900/40 p-4 rounded-xl border border-stone-800/50 backdrop-blur-sm">
            <span className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif-luxury block">
              Rooftop 360°
            </span>
            <span className="text-xs uppercase tracking-wider text-stone-400 mt-1 block">
              Piscina Borda Infinita
            </span>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <a
        href="#sobre"
        aria-label="Rolar para baixo"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 text-stone-500 hover:text-amber-400 transition-colors hidden md:block animate-bounce"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
};
