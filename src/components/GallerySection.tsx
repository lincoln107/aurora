import React, { useState } from "react";
import { Maximize2, Sparkles, ExternalLink, ArrowRight, MapPin } from "lucide-react";
import { Development, GalleryPhoto } from "../data/apartmentData";
import { LightboxModal } from "./LightboxModal";

interface GallerySectionProps {
  currentDev: Development;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ currentDev }) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filterTabs = [
    { id: "all", label: "Todas as Fotos" },
    { id: "fachada", label: "Fachada & Arquitetura" },
    { id: "interiores", label: "Living & Interiores" },
    { id: "suites", label: "Suítes & Detalhes" },
    { id: "lazer", label: "Lazer & Rooftop" },
  ];

  const filteredPhotos =
    activeFilter === "all"
      ? currentDev.photos
      : currentDev.photos.filter((photo) => photo.category === activeFilter);

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-stone-900/50 border-t border-stone-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tour Visual Exclusivo · {currentDev.name}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif-luxury leading-tight">
            Fotos Modernas de {currentDev.name}
          </h2>
          <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-stone-300 text-xs">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Localização: {currentDev.neighborhood}</span>
          </div>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            Uma imersão completa em espaços pensados para conectar sofisticação, amplitude e luminosidade natural em {currentDev.shortNeighborhood}.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20"
                    : "bg-stone-900 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-amber-500/50 shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Aspect ratio container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-950">
                <img
                  src={photo.url}
                  alt={photo.title}
                  loading={idx < 3 ? "eager" : "lazy"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Category & Dev Tag */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-md bg-stone-950/80 backdrop-blur-md text-[10px] uppercase tracking-wider font-bold text-amber-400 border border-amber-500/20 shadow">
                    {photo.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-stone-950/70 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-amber-400" />
                  </div>
                </div>

                {/* Title & Description Overlay */}
                <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                  <div className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider mb-0.5">
                    {currentDev.name} · {currentDev.shortNeighborhood}
                  </div>
                  <h3 className="text-base font-bold text-white font-serif-luxury line-clamp-1 group-hover:text-amber-300 transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-stone-300 line-clamp-2 mt-1 opacity-90 leading-tight">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-12 text-center">
          <a
            href={currentDev.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-850 border border-amber-500/40 text-amber-400 font-semibold text-xs uppercase tracking-wider hover:border-amber-400 transition-colors"
          >
            <span>Solicitar Livreto Digital com Todas as Fotos de {currentDev.shortNeighborhood}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <LightboxModal
          photo={selectedPhoto}
          photos={filteredPhotos}
          onClose={() => setSelectedPhoto(null)}
          onSelectPhoto={(photo) => setSelectedPhoto(photo)}
          formUrl={currentDev.formUrl}
          devName={currentDev.name}
        />
      )}
    </section>
  );
};
