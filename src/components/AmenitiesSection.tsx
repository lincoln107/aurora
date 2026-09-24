import React from "react";
import { Sparkles, Waves, Dumbbell, Wine, Coffee, HeartPulse, Dog, ArrowRight, MapPin } from "lucide-react";
import { Development } from "../data/apartmentData";

interface AmenitiesSectionProps {
  currentDev: Development;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ currentDev }) => {
  const leisureItems = [
    {
      title: "Rooftop Pool & Solarium 360°",
      subtitle: `Exclusividade suspensa em ${currentDev.shortNeighborhood}`,
      description: "Piscina aquecida com borda infinita, espreguiçadeiras molhadas e vista para o skyline paulistano.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85",
      icon: <Waves className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Academia Profissional Climatizada",
      subtitle: "Fitness center com aparelhos de última geração",
      description: "Equipamentos de musculação e aeróbicos de ponta, área de pesos livres e espaço para pilates.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85",
      icon: <Dumbbell className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Wine Lounge & Gastronomia Gourmet",
      subtitle: "Ambiente assinado para celebrações íntimas",
      description: "Espaço gourmet privativo com cozinha de chef, churrasqueira embutida e adega climatizada.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85",
      icon: <Wine className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Spa Privativo & Sala de Massagem",
      subtitle: "Recuperação física e mental diária",
      description: "Sauna seca e a vapor, duchas cromoterápicas e espaço dedicado para terapias corporais.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
      icon: <HeartPulse className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Coworking & Salas de Reunião",
      subtitle: "Produtividade sem sair de casa",
      description: "Estações de trabalho ergonômicas, cabines acústicas individuais para chamadas e internet de alta velocidade.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85",
      icon: <Coffee className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Pet Place & Áreas Verdes",
      subtitle: "Conforto e segurança para o seu melhor amigo",
      description: "Espaço cercado com gramado, circuito agility e área de lavagem pet no subsolo.",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1000&q=85",
      icon: <Dog className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <section id="lazer" className="py-20 lg:py-28 bg-stone-950 border-t border-stone-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lazer Club & Bem-Estar · {currentDev.name}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif-luxury leading-tight">
            Um Resort Privativo em {currentDev.shortNeighborhood}.
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            Ambientes de lazer entregues equipados, climatizados e decorados por renomados designers de interiores.
          </p>
        </div>

        {/* Leisure Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leisureItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-stone-900/60 border border-stone-800 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-stone-900/90 backdrop-blur-md flex items-center justify-center shrink-0 border border-stone-700">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-white font-serif-luxury truncate">
                    {item.title}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>
                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
