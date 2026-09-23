import React from "react";
import { Sparkles, Waves, Dumbbell, Wine, Coffee, HeartPulse, Dog, ArrowRight } from "lucide-react";
import { INTEREST_FORM_URL } from "../data/apartmentData";

export const AmenitiesSection: React.FC = () => {
  const leisureItems = [
    {
      title: "Rooftop Pool & Solarium 360°",
      subtitle: "A 120m de altura com borda infinita aquecida",
      description: "Desfrute do pôr do sol mais espetacular da cidade com espreguiçadeiras molhadas e bar de apoio.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85",
      icon: <Waves className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Academia Profissional Life Fitness",
      subtitle: "Espaço Wellness com vista verde",
      description: "Equipamentos de musculação e aeróbicos de ponta, área de pesos livres e sala com espelhos para yoga.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85",
      icon: <Dumbbell className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Wine Lounge & Gastronomia Privativa",
      subtitle: "Ambiente assinado para celebrar momentos",
      description: "Espaço gourmet com cozinha de chef totalmente equipada, adega climatizada e isolamento acústico.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85",
      icon: <Wine className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Spa Privativo & Sauna",
      subtitle: "Recuperação física e mental diária",
      description: "Sauna seca e a vapor, sala de massagem privativa e duchas de imersão cromoterápicas.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
      icon: <HeartPulse className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Coworking & Meeting Room",
      subtitle: "Produtividade sem sair de casa",
      description: "Estações de trabalho ergonômicas, cabines acústicas individuais para chamadas e sala de reunião multimídia.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85",
      icon: <Coffee className="w-5 h-5 text-amber-400" />
    },
    {
      title: "Pet Place & Áreas Verdes",
      subtitle: "Espaço exclusivo para o seu melhor amigo",
      description: "Área cercada com gramado natural, circuito agility e espaço de banho pet wash no subsolo.",
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
            <span>Lazer Club & Bem-Estar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif-luxury leading-tight">
            Um Resort Privativo Suspenso Sobre a Cidade.
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            Áreas comuns entregues totalmente decoradas e climatizadas, com curadoria de mobiliário de designers brasileiros e internacionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leisureItems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden bg-stone-900/60 border border-stone-800 hover:border-amber-500/40 transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-56 overflow-hidden bg-stone-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                <div className="absolute top-4 left-4 p-2 rounded-lg bg-stone-950/80 backdrop-blur-md border border-stone-800">
                  {item.icon}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-serif-luxury group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-400 text-xs sm:text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leisure conversion callout */}
        <div className="mt-14 text-center">
          <a
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Tenho Interesse no Empreendimento</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </section>
  );
};
