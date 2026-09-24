import React, { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  ExternalLink,
  Sparkles,
  MapPin,
  Building2,
  Copy,
  Check,
} from "lucide-react";
import {
  Development,
  DevelopmentId,
  DEVELOPMENTS_LIST,
  FORMS_URLS,
} from "../data/apartmentData";

interface InterestCTASectionProps {
  currentDev: Development;
  onSelectDev: (id: DevelopmentId) => void;
}

export const InterestCTASection: React.FC<InterestCTASectionProps> = ({
  currentDev,
  onSelectDev,
}) => {
  const [selectedTargetDev, setSelectedTargetDev] = useState<DevelopmentId>(currentDev.id);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  // Keep target dev in sync if currentDev changes
  React.useEffect(() => {
    setSelectedTargetDev(currentDev.id);
  }, [currentDev.id]);

  const targetDev = DEVELOPMENTS_LIST.find((d) => d.id === selectedTargetDev) || currentDev;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      window.open(targetDev.formUrl, "_blank", "noopener,noreferrer");
    }, 500);
  };

  const handleCopyLink = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-stone-950 border-t border-stone-850 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Plantão de Vendas & Formulários Oficiais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif-luxury leading-tight">
            Manifeste Seu Interesse no Empreendimento Escolhido
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            Disponibilizamos abaixo o acesso direto aos formulários oficiais dos 3 empreendimentos para atendimento prioritário com nossa equipe exclusiva.
          </p>
        </div>

        {/* 3 Explicit Campaign Form Cards with Distinct Links and Emphasized Location */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              Selecione o Empreendimento & Acesse o Formulário Correspondente:
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Mooca (Aurora) */}
            <div
              className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                selectedTargetDev === "aurora"
                  ? "bg-stone-900 border-amber-500 shadow-2xl shadow-amber-500/20 ring-2 ring-amber-500/40"
                  : "bg-stone-900/60 border-stone-800 hover:border-stone-700"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold uppercase tracking-wider border border-amber-500/30">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>Mooca</span>
                  </span>
                  <span className="text-[10px] text-stone-400 font-medium">Zona Leste</span>
                </div>

                <h3 className="text-2xl font-bold text-white font-serif-luxury">
                  Aurora Residences
                </h3>
                <p className="text-xs text-amber-400/90 font-semibold mt-1">
                  Alto da Mooca · Rua Juventus, 850
                </p>

                <p className="text-xs text-stone-400 mt-3 leading-relaxed">
                  Apartamentos de 128m² a 284m² com 3 e 4 suítes, varanda gourmet e lazer no rooftop em localização tradicional e acolhedora.
                </p>

                <div className="mt-4 pt-3 border-t border-stone-800/80">
                  <span className="text-[10px] uppercase tracking-wider text-stone-500 block mb-1 font-semibold">
                    Link do Formulário Mooca:
                  </span>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-stone-950 text-[11px] text-amber-300/90 font-mono break-all border border-stone-850">
                    <span className="truncate flex-1">https://forms.gle/KZbo9q1tfRPDRHoH8</span>
                    <button
                      type="button"
                      onClick={() => handleCopyLink("https://forms.gle/KZbo9q1tfRPDRHoH8", "aurora")}
                      className="p-1 hover:text-white text-stone-400 transition-colors"
                      title="Copiar link"
                    >
                      {copiedLink === "aurora" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 space-y-2">
                <a
                  href="https://forms.gle/KZbo9q1tfRPDRHoH8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  <span>Tenho Interesse na Mooca</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedTargetDev("aurora");
                    onSelectDev("aurora");
                  }}
                  className="w-full text-center text-[11px] text-stone-400 hover:text-white py-1 transition-colors"
                >
                  {currentDev.id === "aurora" ? "✓ Campanha ativa na página" : "Ver detalhes da Mooca na página"}
                </button>
              </div>
            </div>

            {/* Card 2: Cidade Jardim (Jardins) */}
            <div
              className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                selectedTargetDev === "jardins"
                  ? "bg-stone-900 border-amber-500 shadow-2xl shadow-amber-500/20 ring-2 ring-amber-500/40"
                  : "bg-stone-900/60 border-stone-800 hover:border-stone-700"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold uppercase tracking-wider border border-amber-500/30">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>Cidade Jardim</span>
                  </span>
                  <span className="text-[10px] text-stone-400 font-medium">Zona Sul / Faria Lima</span>
                </div>

                <h3 className="text-2xl font-bold text-white font-serif-luxury">
                  Empreendimento Jardins
                </h3>
                <p className="text-xs text-amber-400/90 font-semibold mt-1">
                  Cidade Jardim · Av. Cidade Jardim, 1150
                </p>

                <p className="text-xs text-stone-400 mt-3 leading-relaxed">
                  Residências de 165m² a 380m² com 3 e 4 suítes, arquitetura biofílica internacional, ao lado do Shopping Cidade Jardim e Parque do Povo.
                </p>

                <div className="mt-4 pt-3 border-t border-stone-800/80">
                  <span className="text-[10px] uppercase tracking-wider text-stone-500 block mb-1 font-semibold">
                    Link do Formulário Cidade Jardim:
                  </span>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-stone-950 text-[11px] text-amber-300/90 font-mono break-all border border-stone-850">
                    <span className="truncate flex-1">https://forms.gle/eNKvdMYwsPYEpvgE9</span>
                    <button
                      type="button"
                      onClick={() => handleCopyLink("https://forms.gle/eNKvdMYwsPYEpvgE9", "jardins")}
                      className="p-1 hover:text-white text-stone-400 transition-colors"
                      title="Copiar link"
                    >
                      {copiedLink === "jardins" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 space-y-2">
                <a
                  href="https://forms.gle/eNKvdMYwsPYEpvgE9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  <span>Tenho Interesse na Cidade Jardim</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedTargetDev("jardins");
                    onSelectDev("jardins");
                  }}
                  className="w-full text-center text-[11px] text-stone-400 hover:text-white py-1 transition-colors"
                >
                  {currentDev.id === "jardins" ? "✓ Campanha ativa na página" : "Ver detalhes da Cidade Jardim na página"}
                </button>
              </div>
            </div>

            {/* Card 3: Tatuapé (Bentivi) */}
            <div
              className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                selectedTargetDev === "bentivi"
                  ? "bg-stone-900 border-amber-500 shadow-2xl shadow-amber-500/20 ring-2 ring-amber-500/40"
                  : "bg-stone-900/60 border-stone-800 hover:border-stone-700"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold uppercase tracking-wider border border-amber-500/30">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>Tatuapé</span>
                  </span>
                  <span className="text-[10px] text-stone-400 font-medium">Anália Franco</span>
                </div>

                <h3 className="text-2xl font-bold text-white font-serif-luxury">
                  Empreendimento Bentivi
                </h3>
                <p className="text-xs text-amber-400/90 font-semibold mt-1">
                  Tatuapé · Rua Emília Marengo, 920
                </p>

                <p className="text-xs text-stone-400 mt-3 leading-relaxed">
                  Apartamentos modernos de 98m² a 218m² com 2 e 3 suítes, quadra de beach tennis, rooftop lounge e polo gastronômico cosmopolita.
                </p>

                <div className="mt-4 pt-3 border-t border-stone-800/80">
                  <span className="text-[10px] uppercase tracking-wider text-stone-500 block mb-1 font-semibold">
                    Link do Formulário Tatuapé:
                  </span>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-stone-950 text-[11px] text-amber-300/90 font-mono break-all border border-stone-850">
                    <span className="truncate flex-1">https://forms.gle/D3ar1Kv3hyGhzs7q6</span>
                    <button
                      type="button"
                      onClick={() => handleCopyLink("https://forms.gle/D3ar1Kv3hyGhzs7q6", "bentivi")}
                      className="p-1 hover:text-white text-stone-400 transition-colors"
                      title="Copiar link"
                    >
                      {copiedLink === "bentivi" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 space-y-2">
                <a
                  href="https://forms.gle/D3ar1Kv3hyGhzs7q6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  <span>Tenho Interesse no Tatuapé</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedTargetDev("bentivi");
                    onSelectDev("bentivi");
                  }}
                  className="w-full text-center text-[11px] text-stone-400 hover:text-white py-1 transition-colors"
                >
                  {currentDev.id === "bentivi" ? "✓ Campanha ativa na página" : "Ver detalhes do Tatuapé na página"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Pre-Registration Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-stone-800">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-luxury leading-tight">
              Atendimento Consultivo e Direto com a Incorporadora
            </h3>

            <p className="text-stone-300 text-sm leading-relaxed">
              Receba material completo, plantas em alta resolução, tabela de fluxo financeiro da obra e agende um horário exclusivo no decorado do empreendimento de sua preferência.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Mooca · Aurora Residences</h4>
                  <p className="text-xs text-stone-400">Rua Juventus, 850 - Alto da Mooca</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Cidade Jardim · Empreendimento Jardins</h4>
                  <p className="text-xs text-stone-400">Av. Cidade Jardim, 1150 - Marginal Pinheiros</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Tatuapé · Empreendimento Bentivi</h4>
                  <p className="text-xs text-stone-400">Rua Emília Marengo, 920 - Anália Franco</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Form with Development Dropdown */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-stone-900 border border-stone-800 p-6 sm:p-10 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-stone-800 pb-5 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-serif-luxury">
                    Formulário Rápido de Interesse
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    Redirecionamento oficial para o Google Forms de cada empreendimento
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-serif-luxury">
                    Redirecionando para o Formulário Oficial!
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 max-w-md mx-auto">
                    Você está sendo direcionado para o formulário oficial do{" "}
                    <strong>{targetDev.fullName}</strong>. Caso não abra automaticamente, clique no botão abaixo:
                  </p>
                  <div className="pt-3">
                    <a
                      href={targetDev.formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider"
                    >
                      <span>Abrir Formulário do {targetDev.shortNeighborhood} Agora</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Select which development */}
                  <div>
                    <label className="text-xs uppercase tracking-wider text-stone-300 font-bold block mb-1.5">
                      Qual empreendimento você deseja? *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {DEVELOPMENTS_LIST.map((dev) => (
                        <button
                          key={dev.id}
                          type="button"
                          onClick={() => {
                            setSelectedTargetDev(dev.id);
                            onSelectDev(dev.id);
                          }}
                          className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                            selectedTargetDev === dev.id
                              ? "bg-amber-500 text-stone-950 border-amber-400 font-bold shadow-md"
                              : "bg-stone-950/80 border-stone-800 text-stone-300 hover:text-white hover:bg-stone-850"
                          }`}
                        >
                          <div className="text-xs font-bold leading-tight">{dev.name}</div>
                          <div className={`text-[10px] mt-0.5 ${selectedTargetDev === dev.id ? "text-stone-900" : "text-amber-400"}`}>
                            {dev.shortNeighborhood}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-stone-300 font-semibold block mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Eduardo de Oliveira"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase tracking-wider text-stone-300 font-semibold block mb-1.5">
                        WhatsApp / Celular com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 98765-4321"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-wider text-stone-300 font-semibold block mb-1.5">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="seuemail@exemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-stone-950 font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-amber-500/20 transition-all duration-300 cursor-pointer"
                    >
                      <span>Tenho Interesse no {targetDev.shortNeighborhood}</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>

                  <p className="text-[11px] text-stone-400 text-center leading-normal">
                    Seus dados estão protegidos pela LGPD. Sem spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
