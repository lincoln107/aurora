import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { GalleryPhoto, INTEREST_FORM_URL } from "../data/apartmentData";

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  onClose: () => void;
  onSelectPhoto: (photo: GalleryPhoto) => void;
  formUrl?: string;
  devName?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  photos,
  onClose,
  onSelectPhoto,
  formUrl = INTEREST_FORM_URL,
  devName,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!photo) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (photo) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [photo, photos]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onSelectPhoto(photos[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    onSelectPhoto(photos[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/95 backdrop-blur-md p-4 md:p-8 animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors border border-stone-800"
        aria-label="Fechar galeria"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-stone-900/80 hover:bg-amber-600 text-white transition-colors border border-stone-800 shadow-xl"
        aria-label="Foto anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-stone-900/80 hover:bg-amber-600 text-white transition-colors border border-stone-800 shadow-xl"
        aria-label="Próxima foto"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content */}
      <div className="relative max-w-5xl w-full flex flex-col items-center">
        <div className="relative w-full max-h-[72vh] flex items-center justify-center overflow-hidden rounded-xl border border-stone-800 bg-stone-900">
          <img
            src={photo.url}
            alt={photo.title}
            className="w-full h-full max-h-[70vh] object-cover md:object-contain rounded-lg"
          />
        </div>

        {/* Caption info & Direct CTA */}
        <div className="mt-4 w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-stone-900/90 border border-stone-800/80 p-4 md:p-5 rounded-xl">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold tracking-wide uppercase mb-1">
              <span>{photo.tag}</span>
              <span className="text-stone-600">·</span>
              <span className="text-stone-400">{photo.categoryLabel}</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white font-serif-luxury">
              {photo.title}
            </h3>
            <p className="text-sm text-stone-400 mt-1 max-w-2xl">
              {photo.description}
            </p>
          </div>

          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm transition-all shadow-lg hover:shadow-amber-500/20 whitespace-nowrap"
          >
            <span>Tenho Interesse no {devName || "Empreendimento"}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
