import React, { useState } from "react";
import { Maximize2, Sparkles, ExternalLink, ArrowRight } from "lucide-react";
import { GALLERY_PHOTOS, GalleryPhoto, INTEREST_FORM_URL } from "../data/apartmentData";
import { LightboxModal } from "./LightboxModal";

export const GallerySection: React.FC = () => {
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
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.category === activeFilter);

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-stone-900/50 border-t border-stone-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tour Visual Exclusivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif-luxury leading-tight">
            Fotos Modernas do Empreendimento
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            Uma imersão completa em espaços pensados para conectar sofisticação, amplitude e luminosidade natural em cada metro quadrado.
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Control) */}
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
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative overflow-hidden rounded-2xl bg-stone-900 border border-stone-800/80 hover:border-amber-500/50 transition-all duration-300 cursor-pointer flex flex-col justify-end min-h-[320px] sm:min-h-[360px] shadow-lg"
            >
              {/* Photo Image with Zoom Hover */}
              <img
                src={photo.url}
                alt={photo.title}
                loading={index < 3 ? "eager" : "lazy"}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Tag & Zoom Icon */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-500/20">
                  {photo.tag}
                </span>

                <div className="w-8 h-8 rounded-full bg-stone-950/70 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="relative z-10 p-5 sm:p-6 transition-transform duration-300 group-hover:-translate-y-1">
                <span className="text-xs text-stone-400 font-medium block mb-1">
                  {photo.categoryLabel}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white font-serif-luxury leading-snug group-hover:text-amber-300 transition-colors">
                  {photo.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-300 line-clamp-2 leading-relaxed">
                  {photo.description}
                </p>

                <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-amber-400 opacity-90 group-hover:opacity-100">
                  <span>Clique para ampliar foto</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA Card */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 border border-stone-800 text-center flex flex-col items-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white font-serif-luxury">
            Quer ver o book fotográfico completo com alta resolução e maquetes 3D?
          </h3>
          <p className="mt-2 text-stone-400 text-sm max-w-xl">
            Receba o catálogo digital completo com acabamentos, fotos das áreas comuns e detalhes de cada suíte diretamente no seu WhatsApp ou e-mail.
          </p>

          <a
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-sm uppercase tracking-wider transition-all shadow-xl hover:shadow-amber-500/25"
          >
            <span>Tenho Interesse</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        photo={selectedPhoto}
        photos={filteredPhotos}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={(photo) => setSelectedPhoto(photo)}
      />
    </section>
  );
};
