import React, { useState } from "react";
import { Calculator, ArrowRight, CheckCircle2, DollarSign, Percent, ShieldCheck } from "lucide-react";
import { INTEREST_FORM_URL } from "../data/apartmentData";

export const SimulatorSection: React.FC = () => {
  const [apartmentValue, setApartmentValue] = useState<number>(1480000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(25);

  const presets = [
    { label: "128 m² · 3 Suítes", value: 1480000 },
    { label: "186 m² · 4 Suítes", value: 2190000 },
    { label: "284 m² · Cobertura VIP", value: 3850000 },
  ];

  // Calculations:
  // Down payment (Entrada): e.g. 25%
  // During construction (36 months): 15% split in 36 installments
  // Intermediary semi-annual balloons (6x): 10%
  // Final financing at key delivery: 50%
  const downPaymentValue = (apartmentValue * downPaymentPercent) / 100;
  const duringConstructionPercent = 15;
  const balloonPercent = 10;
  const finalBalancePercent = 100 - downPaymentPercent - duringConstructionPercent - balloonPercent;

  const monthlyInstallment = (apartmentValue * (duringConstructionPercent / 100)) / 36;
  const semiAnnualInstallment = (apartmentValue * (balloonPercent / 100)) / 6;
  const bankFinancingValue = (apartmentValue * (Math.max(0, finalBalancePercent) / 100));

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="simulador" className="py-20 lg:py-28 bg-stone-900/60 border-t border-stone-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Condições Facilitadas de Obra</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif-luxury leading-tight">
            Simulador de Investimento & Pagamento
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            Monte o plano financeiro ideal para sua família. Fluxo direto com a incorporadora durante a obra e saldo financiado pelo banco de sua preferência.
          </p>
        </div>

        {/* Simulator Container */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-stone-900/90 border border-stone-800 p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls Side */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <label className="text-xs uppercase tracking-wider text-stone-400 font-semibold block mb-2">
                  1. Escolha a Tipologia ou Valor do Imóvel:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
                  {presets.map((preset, idx) => (
                    <button
                      key={idx}
                      onClick={() => setApartmentValue(preset.value)}
                      className={`p-2.5 rounded-lg text-xs font-bold transition-all border cursor-pointer text-left sm:text-center ${
                        apartmentValue === preset.value
                          ? "bg-amber-500 text-stone-950 border-amber-400 shadow-md"
                          : "bg-stone-950 text-stone-300 border-stone-800 hover:border-stone-700"
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>

                {/* Range Slider for Value */}
                <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
                  <span>R$ 1.200.000</span>
                  <span className="text-amber-400 font-bold text-sm">
                    {formatCurrency(apartmentValue)}
                  </span>
                  <span>R$ 4.500.000</span>
                </div>
                <input
                  type="range"
                  min="1200000"
                  max="4500000"
                  step="50000"
                  value={apartmentValue}
                  onChange={(e) => setApartmentValue(Number(e.target.value))}
                  className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              {/* Slider for Down Payment */}
              <div>
                <div className="flex items-center justify-between text-xs text-stone-400 mb-1">
                  <span className="uppercase tracking-wider font-semibold">2. Entrada Sugerida (%):</span>
                  <span className="text-amber-400 font-bold text-sm">{downPaymentPercent}% ({formatCurrency(downPaymentValue)})</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="40"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <span className="text-[11px] text-stone-400 block mt-1">
                  * A entrada pode ser dividida em ato + 30 e 60 dias.
                </span>
              </div>

              {/* Safe investment badge */}
              <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-stone-400 leading-relaxed">
                  Patrimônio de Afetação registrado em cartório: garantia de segregação total dos recursos e entrega rigorosamente no prazo.
                </p>
              </div>
            </div>

            {/* Results Card Side */}
            <div className="lg:col-span-6 bg-stone-950 p-6 sm:p-8 rounded-2xl border border-amber-500/20 shadow-xl">
              <div className="flex items-center justify-between border-b border-stone-800 pb-4 mb-5">
                <div>
                  <span className="text-[11px] uppercase text-stone-400 font-semibold tracking-wider block">
                    Resumo do Fluxo Estimado
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-white font-serif-luxury">
                    {formatCurrency(apartmentValue)}
                  </span>
                </div>
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                  36 meses de obra
                </span>
              </div>

              {/* Breakdown Rows */}
              <div className="space-y-3.5 mb-6">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-stone-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    Entrada ({downPaymentPercent}%):
                  </span>
                  <span className="font-bold text-white">{formatCurrency(downPaymentValue)}</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-stone-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    36 Parcelas Mensais na Obra:
                  </span>
                  <span className="font-bold text-amber-300">{formatCurrency(monthlyInstallment)} / mês</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-stone-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    6 Balões Semestrais:
                  </span>
                  <span className="font-bold text-white">{formatCurrency(semiAnnualInstallment)} / sem</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm pt-2 border-t border-stone-850">
                  <span className="text-stone-300 font-medium flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-amber-400" />
                    Saldo no Financiamento Bancário:
                  </span>
                  <span className="font-bold text-emerald-400">{formatCurrency(bankFinancingValue)}</span>
                </div>
              </div>

              {/* Direct CTA */}
              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl hover:shadow-amber-500/25"
              >
                <span>Tenho Interesse nesta Condição</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-stone-500 text-center mt-3">
                * Valores orientativos sujeitos a aprovação de crédito e tabela de vendas vigente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
