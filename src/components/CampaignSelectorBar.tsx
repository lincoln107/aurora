import React from "react";
import { MapPin, ArrowUpRight, Sparkles, ExternalLink } from "lucide-react";
import { Development, DevelopmentId, DEVELOPMENTS_LIST } from "../data/apartmentData";

interface CampaignSelectorBarProps {
  currentDev: Development;
  onSelectDev: (id: DevelopmentId) => void;
}

export const CampaignSelectorBar: React.FC<CampaignSelectorBarProps> = ({
  currentDev,
  onSelectDev,
}) => {
  return (
    <div className="bg-stone-900/98 border-b border-stone-800 backdrop-blur-md sticky top-[61px] sm:top-[69px] z-30 shadow-xl py-2 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-2.5">
        {/* Left Indicator */}
        <div className="flex items-center gap-2 text-xs text-stone-400 shrink-0 w-full xl:w-auto justify-between xl:justify-start">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="font-semibold text-stone-200 uppercase tracking-wider text-[11px]">
              Formulários Fixados no Topo:
            </span>
          </div>
          <span className="text-[10px] text-amber-400 font-medium bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
            Acesso Direto aos 3 Projetos
          </span>
        </div>

        {/* 3 Developments with Explicit Interest Buttons carrying their names */}
        <div className="flex items-center gap-2 overflow-x-auto w-full xl:w-auto pb-1 xl:pb-0 scrollbar-none justify-start xl:justify-end">
          {DEVELOPMENTS_LIST.map((dev) => {
            const isSelected = dev.id === currentDev.id;
            return (
              <div
                key={dev.id}
                className={`inline-flex items-center rounded-xl p-1 border transition-all duration-200 shrink-0 ${
                  isSelected
                    ? "bg-stone-950 border-amber-500 shadow-md shadow-amber-500/20"
                    : "bg-stone-950/70 border-stone-800 hover:border-stone-700"
                }`}
              >
                {/* Switch page view button */}
                <button
                  type="button"
                  onClick={() => onSelectDev(dev.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-amber-500/20 text-white font-bold"
                      : "text-stone-300 hover:text-white hover:bg-stone-800/80"
                  }`}
                  title={`Ver fotos e informações do ${dev.name}`}
                >
                  <MapPin className={`w-3 h-3 ${isSelected ? "text-amber-400" : "text-stone-400"}`} />
                  <span className="font-serif-luxury font-bold text-xs">{dev.name}</span>
                  <span className="text-[10px] text-stone-400">({dev.shortNeighborhood})</span>
                </button>

                {/* Direct Interest CTA Button with the development name */}
                <a
                  href={dev.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ml-1 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all duration-200 ${
                    isSelected
                      ? "bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 shadow-sm"
                      : "bg-amber-500/15 hover:bg-amber-500 text-amber-300 hover:text-stone-950 border border-amber-500/30"
                  }`}
                  title={`Abrir formulário oficial: Tenho Interesse no ${dev.fullName}`}
                >
                  <span>Tenho Interesse no {dev.name}</span>
                  <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
