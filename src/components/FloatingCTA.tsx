import React, { useState, useEffect } from "react";
import { ArrowUpRight, Sparkles, X, MapPin } from "lucide-react";
import { Development, DevelopmentId, DEVELOPMENTS_LIST } from "../data/apartmentData";

interface FloatingCTAProps {
  currentDev: Development;
  onSelectDev: (id: DevelopmentId) => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ currentDev, onSelectDev }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  const otherDevs = DEVELOPMENTS_LIST.filter((d) => d.id !== currentDev.id);

  return (
    <aside
      aria-label="Ação rápida de interesse"
      className="fixed bottom-3 left-3 right-3 sm:left-6 sm:right-6 md:left-auto md:right-8 md:bottom-6 z-40 max-w-xl w-auto animate-slideUp"
    >
      <div className="bg-stone-900/95 backdrop-blur-md border border-amber-500/40 p-4 rounded-2xl shadow-2xl shadow-black/80 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          {/* Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                <MapPin className="w-3 h-3" />
                <span>{currentDev.neighborhood} · SP</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white font-serif-luxury line-clamp-1">
                {currentDev.name}
              </div>
              <div className="text-[11px] text-stone-400">
                {currentDev.areaRange} · {currentDev.priceStartingFrom}
              </div>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Fechar notificação"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action Buttons: Main CTA with Development Name + Quick links for other two */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-800">
          <a
            href={currentDev.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-amber-500/30 whitespace-nowrap transition-transform active:scale-95"
            title={`Abrir formulário oficial: Tenho Interesse no ${currentDev.fullName}`}
          >
            <span>Tenho Interesse no {currentDev.name}</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>

          {/* Quick buttons for the other two developments */}
          <div className="flex items-center gap-1.5">
            {otherDevs.map((dev) => (
              <a
                key={dev.id}
                href={dev.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-2 rounded-xl bg-stone-950/80 hover:bg-stone-800 text-amber-300 text-[10px] font-semibold uppercase tracking-wider border border-amber-500/20 hover:border-amber-400 transition-colors"
                title={`Tenho Interesse no ${dev.fullName}`}
              >
                <span>Interesse {dev.name}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
