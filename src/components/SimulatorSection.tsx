import React, { useState, useEffect } from "react";
import { Calculator, ArrowRight, CheckCircle2, DollarSign, Percent, ShieldCheck, MapPin } from "lucide-react";
import { Development } from "../data/apartmentData";

interface SimulatorSectionProps {
  currentDev: Development;
}

export const SimulatorSection: React.FC<SimulatorSectionProps> = ({ currentDev }) => {
  const [apartmentValue, setApartmentValue] = useState<number>(currentDev.priceValueNum);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(25);

  useEffect(() => {
    setApartmentValue(currentDev.priceValueNum);
  }, [currentDev.id]);

  // Calculations:
  const downPaymentValue = (apartmentValue * downPaymentPercent) / 100;
  const duringConstructionPercent = 15;
  const balloonPercent = 10;
  const finalBalancePercent = 100 - downPaymentPercent - duringConstructionPercent - balloonPercent;

  const monthlyInstallment = (apartmentValue * (duringConstructionPercent / 100)) / 36;
  const semiAnnualInstallment = (apartmentValue * (balloonPercent / 100)) / 6;
  const bankFinancingValue = apartmentValue * (Math.max(0, finalBalancePercent) / 100);

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
            <span>Condições Facilitadas de Obra · {currentDev.name}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-serif-luxury leading-tight">
            Simulador de Pagamento em {currentDev.shortNeighborhood}
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
                  Selecione a Tipologia ou Valor do Imóvel ({currentDev.shortNeighborhood})
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
                  {currentDev.typologies.map((plan, idx) => {
                    // Extract approximate numeric value or fallback
                    const val = idx === 0 ? currentDev.priceValueNum : idx === 1 ? Math.round(currentDev.priceValueNum * 1.48) : Math.round(currentDev.priceValueNum * 2.3);
                    return (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => setApartmentValue(val)}
                        className={`p-2.5 rounded-xl text-left border transition-all text-xs cursor-pointer ${
                          apartmentValue === val
                            ? "bg-amber-500/20 border-amber-400 text-white font-bold"
                            : "bg-stone-950/60 border-stone-800 text-stone-400 hover:text-white"
                        }`}
                      >
                        <span className="block font-semibold">{plan.area}</span>
                        <span className="text-[10px] text-amber-400">{formatCurrency(val)}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Range Slider for Value */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-stone-400">Ajuste Livre do Valor:</span>
                    <span className="text-base font-bold text-amber-400 font-mono">
                      {formatCurrency(apartmentValue)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={Math.round(currentDev.priceValueNum * 0.8)}
                    max={Math.round(currentDev.priceValueNum * 3.5)}
                    step={20000}
                    value={apartmentValue}
                    onChange={(e) => setApartmentValue(Number(e.target.value))}
                    className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>
              </div>

              {/* Down Payment % Slider */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-stone-400">Entrada Facilitada no Ato:</span>
                  <span className="text-sm font-bold text-white font-mono">
                    {downPaymentPercent}% ({formatCurrency(downPaymentValue)})
                  </span>
                </div>
                <input
                  type="range"
                  min={15}
                  max={50}
                  step={5}
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-stone-500">
                  <span>15% (Mínimo no ato)</span>
                  <span>30% (Recomendado)</span>
                  <span>50%</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 text-xs text-stone-400 space-y-1.5">
                <div className="flex items-center gap-2 text-stone-300 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Flexibilidade de Negociação Personalizada</span>
                </div>
                <p>
                  As parcelas podem ser customizadas de acordo com o seu fluxo de recebimento (anuais, semestrais ou mensais).
                </p>
              </div>
            </div>

            {/* Results Output Card */}
            <div className="lg:col-span-6 bg-gradient-to-br from-stone-950 to-stone-900 border border-amber-500/30 p-6 sm:p-8 rounded-2xl relative overflow-hidden shadow-xl">
              <div className="space-y-5">
                <div className="border-b border-stone-800 pb-4">
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block mb-1">
                    Simulação para {currentDev.name}
                  </span>
                  <div className="text-2xl sm:text-3xl font-bold text-white font-serif-luxury">
                    {formatCurrency(apartmentValue)}
                  </div>
                  <div className="text-xs text-stone-400 mt-0.5">
                    Endereço: {currentDev.address}
                  </div>
                </div>

                {/* Breakdown items */}
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-800/60">
                    <span className="text-stone-300">Entrada no Ato ({downPaymentPercent}%):</span>
                    <span className="font-bold text-white font-mono">{formatCurrency(downPaymentValue)}</span>
                  </div>

                  <div className="flex items-center justify-between pb-2 border-b border-stone-800/60">
                    <div>
                      <span className="text-stone-300 block">36 Mensais durante a obra:</span>
                      <span className="text-[10px] text-stone-500">Fluxo suave sem juros de banco</span>
                    </div>
                    <span className="font-bold text-amber-400 font-mono">{formatCurrency(monthlyInstallment)}/mês</span>
                  </div>

                  <div className="flex items-center justify-between pb-2 border-b border-stone-800/60">
                    <div>
                      <span className="text-stone-300 block">6 Intermediárias Semestrais:</span>
                      <span className="text-[10px] text-stone-500">Parcelas reforçadas a cada 6 meses</span>
                    </div>
                    <span className="font-bold text-white font-mono">{formatCurrency(semiAnnualInstallment)}</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <span className="text-stone-300 block font-semibold">Financiamento nas Chaves:</span>
                      <span className="text-[10px] text-stone-400">Banco de sua preferência</span>
                    </div>
                    <span className="font-bold text-emerald-400 font-mono text-base">{formatCurrency(bankFinancingValue)}</span>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={currentDev.formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
                  >
                    <span>Tenho Interesse no {currentDev.name} · Enviar Simulação</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
