import React from "react";
import { Building2, Sparkles, ShieldCheck, Zap, VolumeX, Leaf, ArrowRight, MapPin } from "lucide-react";
import { Development } from "../data/apartmentData";

interface AboutSectionProps {
  currentDev: Development;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentDev }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-6 h-6 text-amber-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-400" />,
    Leaf: <Leaf className="w-6 h-6 text-amber-400" />,
    Zap: <Zap className="w-6 h-6 text-amber-400" />,
    VolumeX: <VolumeX className="w-6 h-6 text-amber-400" />,
  };

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-stone-950 border-t border-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-widest mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Diferenciais · {currentDev.name} ({currentDev.shortNeighborhood})</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif-luxury leading-tight">
              Cada detalhe planejado para elevar seu padrão de vida.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
              O <strong>{currentDev.fullName}</strong> reúne inovação construtiva, conforto térmico e tecnologias sustentáveis na melhor localização de {currentDev.neighborhood}.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentDev.highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-stone-900/60 border border-stone-850 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-stone-800/80 border border-stone-700/60 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500/10 group-hover:border-amber-500/40 transition-all">
                {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-amber-400" />}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-serif-luxury group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Stand address */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-900 to-stone-900/80 border border-stone-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold block">
                Plantão de Vendas & Decorado ({currentDev.shortNeighborhood})
              </span>
              <p className="text-sm font-semibold text-white mt-0.5">
                {currentDev.standAddress}
              </p>
            </div>
          </div>

          <a
            href={currentDev.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            <span>Agendar Visita no Decorado</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
