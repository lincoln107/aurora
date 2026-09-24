import React, { useState, useEffect } from "react";
import { Building2, Menu, X, ArrowUpRight, Phone, ChevronDown, MapPin } from "lucide-react";
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
    { label: "Os 3 Empreendimentos", href: "#empreendimentos" },
    { label: "Diferenciais", href: "#sobre" },
    { label: "Fotos Modernas", href: "#galeria" },
    { label: "Localização", href: "#localizacao" },
    { label: "Plantas", href: "#plantas" },
    { label: "Lazer & Rooftop", href: "#lazer" },
    { label: "Simulador", href: "#simulador" },
    { label: "Contato & Links", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-stone-950/95 backdrop-blur-md border-b border-stone-800/80 py-2.5 shadow-2xl"
          : "bg-stone-950/90 backdrop-blur-sm border-b border-stone-850 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Current Development */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-stone-950 shadow-md group-hover:scale-105 transition-transform shrink-0">
              <Building2 className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <span className="font-serif-luxury text-lg sm:text-xl font-bold tracking-wider text-white block leading-tight">
                {currentDev.name.toUpperCase()}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-amber-400 font-semibold block">
                <MapPin className="w-2.5 h-2.5" />
                <span>{currentDev.neighborhood}</span>
              </span>
            </div>
          </a>

          {/* Development Selector Dropdown Pill */}
          <div className="relative hidden md:block ml-2">
            <button
              onClick={() => setDevDropdownOpen(!devDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-900 border border-stone-700/80 text-[11px] text-stone-300 hover:text-white hover:border-amber-500/50 transition-colors cursor-pointer"
            >
              <span>Trocar Empreendimento</span>
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
        <nav className="hidden xl:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-wider text-stone-300 hover:text-amber-400 transition-colors py-1 relative font-medium group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Group */}
        <div className="flex items-center gap-3">
          <a
            href={currentDev.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5]" />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-stone-300 hover:text-white rounded-lg bg-stone-900/60 border border-stone-800"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-stone-950/98 border-b border-stone-800 px-6 py-6 animate-fadeIn">
          {/* Mobile Development Switcher */}
          <div className="mb-6 pb-6 border-b border-stone-850">
            <span className="text-[11px] uppercase tracking-wider text-stone-400 font-bold block mb-3">
              Mudar Empreendimento Ativo:
            </span>
            <div className="grid grid-cols-1 gap-2">
              {DEVELOPMENTS_LIST.map((dev) => (
                <button
                  key={dev.id}
                  onClick={() => {
                    onSelectDev(dev.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`p-3 rounded-xl flex items-center justify-between text-left text-xs transition-colors cursor-pointer border ${
                    dev.id === currentDev.id
                      ? "bg-amber-500/20 border-amber-500 text-white font-bold"
                      : "bg-stone-900 border-stone-800 text-stone-300"
                  }`}
                >
                  <div>
                    <div className="font-serif-luxury font-bold text-sm">{dev.name}</div>
                    <div className="text-[11px] text-amber-400/90">{dev.neighborhood}</div>
                  </div>
                  <span className="text-[10px] text-stone-400">{dev.areaRange}</span>
                </button>
              ))}
            </div>
          </div>

          <nav className="flex flex-col gap-3.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider text-stone-300 hover:text-amber-400 transition-colors font-medium py-1"
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
