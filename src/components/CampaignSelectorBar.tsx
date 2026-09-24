import React from "react";
import { MapPin, Check, Building2, ExternalLink } from "lucide-react";
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
    <div className="bg-stone-900/95 border-b border-stone-800/80 backdrop-blur-md sticky top-[61px] sm:top-[69px] z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Label */}
          <div className="flex items-center gap-2 text-xs text-stone-400 shrink-0">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="font-semibold text-stone-300">Escolha a Campanha Ativa:</span>
          </div>

          {/* 3 Interactive Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none justify-start sm:justify-end">
            {DEVELOPMENTS_LIST.map((dev) => {
              const isSelected = dev.id === currentDev.id;
              return (
                <button
                  key={dev.id}
                  onClick={() => onSelectDev(dev.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? "bg-amber-500 text-stone-950 border-amber-400 shadow-md shadow-amber-500/20 font-bold scale-[1.02]"
                      : "bg-stone-950/80 text-stone-300 hover:text-white hover:bg-stone-800 border-stone-800"
                  }`}
                  aria-pressed={isSelected}
                >
                  <MapPin className={`w-3.5 h-3.5 ${isSelected ? "text-stone-950" : "text-amber-400"}`} />
                  <span className="font-serif-luxury font-bold">{dev.name}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                      isSelected
                        ? "bg-stone-950/20 text-stone-950 font-bold"
                        : "bg-stone-800 text-amber-300"
                    }`}
                  >
                    {dev.shortNeighborhood}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
