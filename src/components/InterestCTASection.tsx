import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Clock, ExternalLink, Sparkles } from "lucide-react";
import { INTEREST_FORM_URL } from "../data/apartmentData";

export const InterestCTASection: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [typology, setTypology] = useState("128m² (3 Suítes)");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Open the Google Forms link in a new window/tab
    setTimeout(() => {
      window.open(INTEREST_FORM_URL, "_blank", "noopener,noreferrer");
    }, 700);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-stone-950 border-t border-stone-850 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Reasons & Benefits */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Plantão de Vendas Oficial</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif-luxury leading-tight">
              Garanta sua Unidade nas Melhores Condições de Pré-Lançamento.
            </h2>

            <p className="text-stone-300 text-base leading-relaxed">
              O Aurora Residences conta com um número restrito de unidades para preservar a exclusividade dos moradores. Registre seu interesse para receber atendimento privativo com nossa diretoria comercial.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Tabela de Preço Zero (1º Lote)</h4>
                  <p className="text-xs text-stone-400">Valores com maior margem de valorização para os primeiros compradores.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Prioridade na Escolha de Andar e Vista</h4>
                  <p className="text-xs text-stone-400">Escolha a melhor vista para o pôr do sol ou para a copa das árvores do parque.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Atendimento Rápido e Consultivo</h4>
                  <p className="text-xs text-stone-400">Sem pressão: consultores prontos para tirar dúvidas técnicas e financeiras.</p>
                </div>
              </div>
            </div>

            {/* Direct Link Banner */}
            <div className="pt-4">
              <span className="text-xs text-stone-400 block mb-2">
                Prefere preencher diretamente o formulário oficial no Google Forms?
              </span>
              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors"
              >
                <span>Acessar Google Forms: https://forms.gle/KZbo9q1tfRPDRHoH8</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: High Converting Form Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-stone-900 border border-stone-800 p-6 sm:p-10 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-stone-800 pb-5 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-serif-luxury">
                    Manifeste Seu Interesse
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    Preencha abaixo ou clique no botão para ser direcionado ao formulário oficial.
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Plantão Online</span>
                </div>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-serif-luxury">
                    Obrigado pelo seu interesse!
                  </h4>
                  <p className="text-stone-300 text-sm max-w-sm mx-auto">
                    Você está sendo direcionado para o formulário oficial. Caso a janela não abra automaticamente, clique no botão abaixo:
                  </p>
                  <a
                    href={INTEREST_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 text-stone-950 font-bold text-sm uppercase tracking-wider"
                  >
                    <span>Abrir Formulário Oficial</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Eduardo Silveira"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                        WhatsApp / Celular
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                        E-mail
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 focus:outline-none focus:border-amber-500 text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 uppercase tracking-wider mb-1.5">
                      Tipologia Desejada
                    </label>
                    <select
                      value={typology}
                      onChange={(e) => setTypology(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white focus:outline-none focus:border-amber-500 text-sm transition-colors cursor-pointer"
                    >
                      <option value="128m² (3 Suítes)">128 m² · 3 Suítes (2 Vagas)</option>
                      <option value="186m² (4 Suítes)">186 m² · 4 Suítes (3 Vagas)</option>
                      <option value="284m² (Cobertura Duplex)">284 m² · Cobertura Duplex (4 Vagas)</option>
                      <option value="Investimento Geral">Investimento Geral / Quero Informações</option>
                    </select>
                  </div>

                  {/* Primary CTA Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full group inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-stone-950 font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                    >
                      <span>TENHO INTERESSE</span>
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </button>
                  </div>

                  {/* Direct Link Alternative */}
                  <div className="text-center pt-2">
                    <a
                      href={INTEREST_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-amber-400 transition-colors"
                    >
                      <span>Ou clique aqui para ir direto ao formulário Google Forms</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="pt-3 border-t border-stone-850 flex items-center justify-center gap-2 text-[11px] text-stone-500 text-center">
                    <ShieldCheck className="w-4 h-4 text-amber-500/70" />
                    <span>Seus dados são 100% confidenciais e protegidos sob a LGPD. Sem spam.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
