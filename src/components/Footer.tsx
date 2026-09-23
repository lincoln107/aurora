import React from "react";
import { Building2, ArrowUpRight, MapPin, ShieldCheck, Mail, Phone } from "lucide-react";
import { INTEREST_FORM_URL } from "../data/apartmentData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-850 pt-16 pb-24 text-stone-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-850">
          {/* Brand & Concept */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-stone-950 font-bold">
                <Building2 className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="font-serif-luxury text-xl font-bold tracking-wider text-white">
                AURORA RESIDENCES
              </span>
            </div>
            <p className="text-stone-400 leading-relaxed text-xs">
              Apartamentos modernos de alto padrão concebidos com a harmonia entre biofilia, sustentabilidade e localização nobre definitiva.
            </p>
            <div className="pt-1">
              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold uppercase tracking-wider text-[11px] transition-colors"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#sobre" className="hover:text-amber-400 transition-colors">
                  O Empreendimento
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-amber-400 transition-colors">
                  Fotos Modernas & Galeria
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-400 transition-colors">
                  Localização Privilegiada
                </a>
              </li>
              <li>
                <a href="#plantas" className="hover:text-amber-400 transition-colors">
                  Plantas & Tipologias
                </a>
              </li>
              <li>
                <a href="#lazer" className="hover:text-amber-400 transition-colors">
                  Lazer & Rooftop Club
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-amber-400 transition-colors">
                  Simulador de Financiamento
                </a>
              </li>
            </ul>
          </div>

          {/* Stand & Location */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">
              Espaço & Stand de Vendas
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Av. das Acácias Nobres, 1250 - Bairro Jardins / Região Nobre
                  <br />
                  Estacionamento privativo com manobrista no local.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Atendimento diário das 09h às 19h</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>contato@auroraresidences.com.br</span>
              </div>
            </div>
          </div>

          {/* Official Google Form Link */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">
              Formulário Oficial
            </h4>
            <p className="text-xs text-stone-400 mb-3">
              Garanta seu atendimento prioritário preenchendo o formulário de interesse:
            </p>
            <a
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 break-all underline text-xs block mb-3"
            >
              https://forms.gle/KZbo9q1tfRPDRHoH8
            </a>
            <div className="flex items-center gap-2 text-[11px] text-stone-500">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Incorporação registrada sob o R.I. com patrimônio de afetação.</span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimers & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>
            © {new Date().getFullYear()} Aurora Residences. Todos os direitos reservados. Imagens e perspectivas artísticas meramente ilustrativas sujeitas a alterações sem aviso prévio.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-amber-400 transition-colors"
            >
              Formulário de Interesse
            </a>
            <span>·</span>
            <span className="text-stone-500">Política de Privacidade & LGPD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
