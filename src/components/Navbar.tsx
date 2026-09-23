import React, { useState, useEffect } from "react";
import { Building2, Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { INTEREST_FORM_URL } from "../data/apartmentData";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "O Empreendimento", href: "#sobre" },
    { label: "Fotos Modernas", href: "#galeria" },
    { label: "Localização Nobre", href: "#localizacao" },
    { label: "Plantas & Tipologias", href: "#plantas" },
    { label: "Lazer & Rooftop", href: "#lazer" },
    { label: "Simulador", href: "#simulador" },
    { label: "FAQ", href: "#duvidas" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-stone-950/90 backdrop-blur-md border-b border-stone-800/80 py-3 shadow-2xl"
          : "bg-gradient-to-b from-stone-950/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-stone-950 shadow-md group-hover:scale-105 transition-transform">
            <Building2 className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <span className="font-serif-luxury text-xl md:text-2xl font-bold tracking-wider text-white block">
              AURORA
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400/90 font-medium block -mt-1">
              Residences · Alto Padrão
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
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
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 text-stone-400 text-xs border-r border-stone-800 pr-4">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Plantão de Vendas</span>
          </div>

          <a
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-stone-300 hover:text-white rounded-lg bg-stone-900/60 border border-stone-800"
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950/98 border-b border-stone-800 px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider text-stone-300 hover:text-amber-400 transition-colors py-2 border-b border-stone-900 font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-3">
              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-stone-500">
                Atendimento consultivo e confidencial
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
