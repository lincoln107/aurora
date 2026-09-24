import React, { useState, useEffect } from "react";
import { Building2, Menu, X, ArrowUpRight, ChevronDown, MapPin, Sparkles } from "lucide-react";
import { Development, DevelopmentId, DEVELOPMENTS_LIST } from "../data/apartmentData";

interface NavbarProps {
  currentDev: Development;
  onSelectDev: (id: DevelopmentId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentDev, onSelectDev }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [devDropdownOpen, setDevDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Os 3 Projetos", href: "#empreendimentos" },
    { label: "Fotos", href: "#galeria" },
    { label: "Localização", href: "#localizacao" },
    { label: "Plantas", href: "#plantas" },
    { label: "Simulador", href: "#simulador" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-stone-950/98 backdrop-blur-md border-b border-stone-800/80 py-2.5 shadow-2xl"
          : "bg-stone-950/95 backdrop-blur-sm border-b border-stone-850 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Brand Logo & Current Development */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-stone-950 shadow-md group-hover:scale-105 transition-transform shrink-0">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="font-serif-luxury text-base sm:text-lg font-bold tracking-wider text-white block leading-tight">
                {currentDev.name.toUpperCase()}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-amber-400 font-semibold block">
                <MapPin className="w-2.5 h-2.5" />
                <span>{currentDev.neighborhood}</span>
              </span>
            </div>
          </a>

          {/* Development Selector Dropdown */}
          <div className="relative hidden 2xl:block ml-2">
            <button
              onClick={() => setDevDropdownOpen(!devDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-900 border border-stone-700/80 text-[11px] text-stone-300 hover:text-white hover:border-amber-500/50 transition-colors cursor-pointer"
              title="Trocar visualização do empreendimento"
            >
              <span>Ver Outro Projeto</span>
              <ChevronDown className="w-3 h-3 text-amber-400" />
            </button>

            {devDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-stone-900 border border-stone-800 shadow-2xl p-2 z-50 animate-fadeIn"
                onMouseLeave={() => setDevDropdownOpen(false)}
              >
                <div className="text-[10px] uppercase font-bold text-stone-400 px-3 py-1 mb-1">
                  Selecione o Empreendimento:
                </div>
                {DEVELOPMENTS_LIST.map((dev) => (
                  <button
                    key={dev.id}
                    onClick={() => {
                      onSelectDev(dev.id);
                      setDevDropdownOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-lg flex items-center justify-between text-xs transition-colors cursor-pointer ${
                      dev.id === currentDev.id
                        ? "bg-amber-500/15 text-amber-300 font-bold border border-amber-500/30"
                        : "text-stone-300 hover:bg-stone-800 hover:text-white"
                    }`}
                  >
                    <div>
                      <div className="font-serif-luxury font-bold">{dev.name}</div>
                      <div className="text-[10px] text-stone-400">{dev.shortNeighborhood}</div>
                    </div>
                    {dev.id === currentDev.id && (
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-wider text-stone-300 hover:text-amber-400 transition-colors py-1 relative font-medium group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Fixed Interest Buttons Group for ALL 3 Developments with their names */}
        <div className="flex items-center gap-2">
          {/* Desktop/Tablet (md and up): All 3 interest buttons explicitly named */}
          <div className="hidden md:flex items-center gap-1.5">
            {DEVELOPMENTS_LIST.map((dev) => {
              const isCurrent = dev.id === currentDev.id;
              return (
                <a
                  key={dev.id}
                  href={dev.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all duration-200 border ${
                    isCurrent
                      ? "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 border-amber-400 shadow-md shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98]"
                      : "bg-stone-900/90 text-stone-300 hover:text-white hover:bg-stone-800/90 border-stone-800 hover:border-amber-500/40"
                  }`}
                  title={`Abrir formulário de interesse oficial: ${dev.fullName}`}
                >
                  <span>Tenho Interesse no {dev.name}</span>
                  <ArrowUpRight
                    className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      isCurrent ? "text-stone-950 stroke-[2.5]" : "text-amber-400"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Mobile only (< md): Active development interest button */}
          <div className="flex md:hidden items-center gap-1.5">
            <a
              href={currentDev.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-bold text-[11px] uppercase tracking-wider shadow-md active:scale-95"
              title={`Tenho Interesse no ${currentDev.name}`}
            >
              <span>Interesse {currentDev.name}</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-stone-300 hover:text-white rounded-lg bg-stone-900/80 border border-stone-800"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-stone-950/98 border-b border-stone-800 px-5 py-5 animate-fadeIn max-h-[85vh] overflow-y-auto">
          {/* Direct Named Interest Buttons for all 3 developments in mobile */}
          <div className="mb-5 pb-5 border-b border-stone-850">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold block">
                Formulários de Interesse Oficiais:
              </span>
              <span className="text-[10px] text-stone-400">Links Diretos</span>
            </div>
            <div className="flex flex-col gap-2">
              {DEVELOPMENTS_LIST.map((dev) => {
                const isCurrent = dev.id === currentDev.id;
                return (
                  <a
                    key={dev.id}
                    href={dev.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl border flex items-center justify-between text-left transition-all ${
                      isCurrent
                        ? "bg-gradient-to-r from-amber-500/20 to-stone-900 border-amber-500"
                        : "bg-stone-900/80 border-stone-800 hover:border-amber-500/40"
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                        <span>Tenho Interesse no {dev.name}</span>
                        {isCurrent && (
                          <span className="text-[9px] bg-amber-400 text-stone-950 px-1.5 py-0.2 rounded font-bold">
                            Ativo
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-stone-400 mt-0.5">
                        {dev.neighborhood} · {dev.address}
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 ml-2">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Development Switcher */}
          <div className="mb-5 pb-5 border-b border-stone-850">
            <span className="text-[11px] uppercase tracking-wider text-stone-400 font-bold block mb-2">
              Visualizar Dados de Outro Empreendimento:
            </span>
            <div className="grid grid-cols-1 gap-2">
              {DEVELOPMENTS_LIST.map((dev) => (
                <button
                  key={dev.id}
                  onClick={() => {
                    onSelectDev(dev.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`p-2.5 rounded-lg flex items-center justify-between text-left text-xs transition-colors cursor-pointer border ${
                    dev.id === currentDev.id
                      ? "bg-amber-500/20 border-amber-500 text-white font-bold"
                      : "bg-stone-900 border-stone-800 text-stone-300"
                  }`}
                >
                  <div>
                    <div className="font-serif-luxury font-bold text-xs">{dev.name}</div>
                    <div className="text-[10px] text-amber-400/90">{dev.neighborhood}</div>
                  </div>
                  <span className="text-[10px] text-stone-400">{dev.areaRange}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-wider text-stone-300 hover:text-amber-400 transition-colors font-medium py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
