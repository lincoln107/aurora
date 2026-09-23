import React from "react";
import { Building2, Sparkles, ShieldCheck, Zap, VolumeX, Leaf, ArrowRight } from "lucide-react";
import { INTEREST_FORM_URL } from "../data/apartmentData";

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: <Building2 className="w-6 h-6 text-amber-400" />,
      title: "Torre Única & Exclusiva",
      description: "Terreno generoso com apenas 2 apartamentos por andar, garantindo privacidade, ventilação cruzada e luminosidade inigualável."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      title: "Arquitetura Biofílica & Autoral",
      description: "Fachada arrojada com brises dinâmicos, floreiras automatizadas e esquadrias piso-teto que trazem o verde para dentro do seu living."
    },
    {
      icon: <VolumeX className="w-6 h-6 text-amber-400" />,
      title: "Atenuação Acústica Superior",
      description: "Mantas de alta densidade no contrapiso e vidros laminados especiais para silêncio e repouso completo da sua família."
    },
    {
      icon: <Leaf className="w-6 h-6 text-amber-400" />,
      title: "Sustentabilidade & Eletromobilidade",
      description: "Ponto de recarga individual para carro elétrico em todas as vagas, painéis solares para áreas sociais e captação de água da chuva."
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "Gerador Full 100%",
      description: "Continuidade total: o gerador alimenta todo o edifício, incluindo elevadores, ar-condicionado e tomadas internas das unidades."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
      title: "Segurança de Alta Tecnologia",
      description: "Portaria blindada 24 horas, reconhecimento facial, eclusa dupla para pedestres e veículos, e monitoramento perimetral inteligente."
    }
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-stone-950 border-t border-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest block mb-2">
              Diferenciais de Engenharia & Design
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif-luxury leading-tight">
              Cada detalhe planejado para elevar seu padrão de vida.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
              O Aurora Residences reúne inovação construtiva, conforto térmico e tecnologias pensadas para valorizar seu patrimônio por décadas.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
            >
              <div className="w-12 h-12 rounded-xl bg-stone-800/80 group-hover:bg-amber-500/10 border border-stone-700/50 group-hover:border-amber-500/30 flex items-center justify-center mb-6 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-serif-luxury group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Fast Action Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-900/90 to-amber-950/40 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white font-serif-luxury">
              Deseja receber o Memorial Descritivo Completo?
            </h4>
            <p className="text-stone-400 text-sm mt-1">
              Conheça as marcas dos materiais, acabamentos e cronograma oficial da obra.
            </p>
          </div>

          <a
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm uppercase tracking-wide transition-all shadow-lg hover:shadow-amber-500/20 whitespace-nowrap"
          >
            <span>Tenho Interesse</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
