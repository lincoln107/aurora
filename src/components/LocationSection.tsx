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
import { LOCATION_POINTS, LocationPoint, INTEREST_FORM_URL } from "../data/apartmentData";

export const LocationSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Todos os Pontos", icon: <MapPin className="w-4 h-4" /> },
    { id: "parques", label: "Parques & Natureza", icon: <Trees className="w-4 h-4" /> },
    { id: "gastronomia", label: "Gastronomia Nobre", icon: <UtensilsCrossed className="w-4 h-4" /> },
    { id: "compras", label: "Compras & Empórios", icon: <ShoppingBag className="w-4 h-4" /> },
    { id: "educacao", label: "Educação & Saúde", icon: <GraduationCap className="w-4 h-4" /> },
    { id: "mobilidade", label: "Mobilidade & Vias", icon: <Car className="w-4 h-4" /> },
  ];

  const filteredPoints =
    selectedCategory === "all"
      ? LOCATION_POINTS
      : LOCATION_POINTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-stone-950 border-t border-stone-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <Navigation className="w-3.5 h-3.5" />
              <span>Região Nobre & Alta Valorização</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif-luxury leading-tight">
              Uma Localização Privilegiada Onde o Seu Tempo Vale Mais.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Instalado em uma rua arborizada e estritamente residencial, o Aurora Residences oferece o equilíbrio perfeito: tranquilidade absoluta e proximidade imediata dos melhores serviços da cidade.
            </p>
          </div>
        </div>

        {/* WalkScore & Key Location Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-stone-900/80 border border-amber-500/30 flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/40 flex flex-col items-center justify-center shrink-0">
              <span className="text-amber-400 font-bold text-xl leading-none">98</span>
              <span className="text-[9px] uppercase tracking-wider text-amber-300 font-medium">WalkScore</span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Paraíso dos Pedestres</h3>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Faça supermercado gourmet, padarias artesanais, farmácias e passeios a pé com total segurança.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-stone-800 flex items-center justify-center shrink-0 text-amber-400">
              <Compass className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Rua Serena & Arborizada</h3>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Pouco fluxo de trânsito pesado, vigilância privada com ronda 24h e copa de árvores centenárias.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-stone-800 flex items-center justify-center shrink-0 text-amber-400">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Quadrilátero de Alta Liquidez</h3>
              <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                Histórico consistente de valorização do metro quadrado e alta demanda para locação de alto padrão.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Map & Points of Interest Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Stylized Interactive Neighborhood Map Graphic */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 relative shadow-2xl">
            {/* Visual Header */}
            <div className="p-5 border-b border-stone-800 bg-stone-950/70 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Bairro Nobre · Mapa de Proximidades
                </span>
              </div>
              <span className="text-[11px] text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                Raio de 3 km
              </span>
            </div>

            {/* Stylized Map Canvas View */}
            <div className="relative h-[380px] bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 p-6 flex flex-col justify-between overflow-hidden">
              {/* Background Map Grid & Radial Waves */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]" />
              </div>

              {/* Concentric distance circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-amber-500/15 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-amber-500/10 pointer-events-none" />

              {/* Center Landmark: Aurora Residences */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-stone-950 shadow-xl shadow-amber-500/40 ring-4 ring-amber-400/30 animate-pulse">
                    <MapPin className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-stone-950/90 text-amber-400 text-[11px] font-extrabold px-3 py-1 rounded-full border border-amber-500/40 shadow-lg">
                    AURORA RESIDENCES
                  </span>
                </div>
              </div>

              {/* Surrounding Landmark Pins */}
              <div className="absolute top-8 left-8 z-10 bg-stone-900/90 border border-stone-700/80 px-3 py-1.5 rounded-lg flex items-center gap-2 backdrop-blur-md shadow-md">
                <Trees className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-medium text-stone-200">Parque Central (3 min)</span>
              </div>

              <div className="absolute top-12 right-6 z-10 bg-stone-900/90 border border-stone-700/80 px-3 py-1.5 rounded-lg flex items-center gap-2 backdrop-blur-md shadow-md">
                <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px] font-medium text-stone-200">Polo Gastronômico (4 min)</span>
              </div>

              <div className="absolute bottom-14 left-6 z-10 bg-stone-900/90 border border-stone-700/80 px-3 py-1.5 rounded-lg flex items-center gap-2 backdrop-blur-md shadow-md">
                <ShoppingBag className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-[11px] font-medium text-stone-200">Shopping Iguatemi (6 min)</span>
              </div>

              <div className="absolute bottom-8 right-8 z-10 bg-stone-900/90 border border-stone-700/80 px-3 py-1.5 rounded-lg flex items-center gap-2 backdrop-blur-md shadow-md">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[11px] font-medium text-stone-200">Colégios Bilíngues (5 min)</span>
              </div>
            </div>

            {/* Map Card Footer Action */}
            <div className="p-4 bg-stone-950/90 border-t border-stone-800 text-center">
              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-400 font-bold text-xs uppercase tracking-wider border border-amber-500/30 transition-colors"
              >
                <span>Receber Guia do Bairro & Localização</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Category Filter & Detail Cards */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-amber-500 text-stone-950 shadow-md"
                        : "bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800"
                    }`}
                  >
                    {cat.icon}
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* List of Proximity Points */}
            <div className="space-y-3">
              {filteredPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-stone-800/90 group-hover:bg-amber-500/10 border border-stone-700/50 group-hover:border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400 transition-colors mt-0.5 sm:mt-0">
                      {item.transportType === "walking" ? (
                        <Footprints className="w-5 h-5" />
                      ) : (
                        <Car className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                          {item.name}
                        </h4>
                      </div>
                      <span className="text-xs text-stone-400 font-medium block">
                        {item.type}
                      </span>
                      <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-stone-800 shrink-0">
                    <span className="text-xs font-extrabold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 whitespace-nowrap">
                      {item.distanceTime}
                    </span>
                    <span className="text-[10px] text-stone-500 uppercase tracking-wider mt-1">
                      {item.transportType === "walking" ? "Caminhada Rápida" : "Acesso Direto"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct CTA Bar */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-white">
                  Quer conhecer a rua e visitar o stand no local?
                </h4>
                <p className="text-xs text-stone-400 mt-0.5">
                  Agende sua visita com nosso consultor especialista e conheça a maquete.
                </p>
              </div>

              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-amber-500/20 whitespace-nowrap"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
