import React from "react";
import { Building2, ArrowUpRight, MapPin, ShieldCheck, Mail, Phone, ExternalLink } from "lucide-react";
import { Development, DevelopmentId, DEVELOPMENTS_LIST } from "../data/apartmentData";

interface FooterProps {
  currentDev: Development;
  onSelectDev: (id: DevelopmentId) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentDev, onSelectDev }) => {
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
              <span className="font-serif-luxury text-lg font-bold tracking-wider text-white">
                RESIDENCIAIS DE LUXO
              </span>
            </div>
            <p className="text-stone-400 leading-relaxed text-xs">
              Incorporação e construção de apartamentos modernos de alto padrão em localizações consagradas de São Paulo: Mooca, Cidade Jardim e Tatuapé.
            </p>
            <div className="pt-1">
              <a
                href={currentDev.formUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold uppercase tracking-wider text-[11px] transition-colors"
              >
                <span>Tenho Interesse ({currentDev.shortNeighborhood})</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Os 3 Empreendimentos */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">
              Nossos 3 Empreendimentos
            </h4>
            <div className="space-y-3">
              {DEVELOPMENTS_LIST.map((dev) => (
                <div key={dev.id} className="p-2.5 rounded-lg bg-stone-900/60 border border-stone-800">
                  <div className="flex items-center justify-between gap-1">
                    <button
                      onClick={() => onSelectDev(dev.id)}
                      className="text-left font-serif-luxury font-bold text-white hover:text-amber-400 transition-colors cursor-pointer text-xs"
                    >
                      {dev.name}
                    </button>
                    <a
                      href={dev.formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300"
                      title="Formulário oficial"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="text-[10px] text-stone-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-2.5 h-2.5 text-amber-400" />
                    <span>{dev.neighborhood}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#empreendimentos" className="hover:text-amber-400 transition-colors">
                  Os 3 Empreendimentos
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-amber-400 transition-colors">
                  Diferenciais do Projeto
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
                <a href="#simulador" className="hover:text-amber-400 transition-colors">
                  Simulador de Pagamento
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-amber-400 transition-colors">
                  Formulários Oficiais
                </a>
              </li>
            </ul>
          </div>

          {/* Legal and Plantão */}
          <div className="space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">
              Plantões de Vendas
            </h4>
            <div className="space-y-2 text-stone-400 text-xs">
              <div>
                <strong className="text-white block">Mooca:</strong>
                <span>Rua Juventus, 850 - Alto da Mooca</span>
              </div>
              <div>
                <strong className="text-white block">Cidade Jardim:</strong>
                <span>Av. Cidade Jardim, 1150</span>
              </div>
              <div>
                <strong className="text-white block">Tatuapé:</strong>
                <span>Rua Emília Marengo, 920</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-stone-500 text-[11px]">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>Memorial de Incorporação Registrado</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <p>
            © {new Date().getFullYear()} Incorporação Imobiliária de Alto Padrão em São Paulo. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span>Privacidade & LGPD</span>
            <span>·</span>
            <span>Termos de Uso</span>
            <span>·</span>
            <span>Tabela Direta</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
