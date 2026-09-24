import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowUpRight, MapPin } from "lucide-react";
import { Development } from "../data/apartmentData";

interface FAQSectionProps {
  currentDev: Development;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ currentDev }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const generalFAQs = [
    {
      question: "Como funciona o agendamento de visita ao apartamento decorado?",
      answer: `Você pode clicar no botão 'Tenho Interesse' e preencher seus dados no formulário oficial do empreendimento escolhido (${currentDev.shortNeighborhood}). Nossa equipe entrará em contato em menos de 15 minutos para agendar sua visita exclusiva com atendimento privativo e maquete física do empreendimento.`
    },
    {
      question: "Qual é a previsão de entrega e fase atual da obra?",
      answer: `O empreendimento está na fase de pré-lançamento com condições comerciais exclusivas para os primeiros investidores e moradores. A previsão de conclusão é de 36 meses com garantia total da incorporadora e seguro de entrega assegurado pelo agente financeiro.`
    },
    {
      question: "É possível personalizar a planta do apartamento antes da entrega?",
      answer: "Sim! Disponibilizamos o programa de personalização com opções de integração de suítes, abertura de living, escolha de bancadas e kits de acabamentos de alto padrão sem custo extra de reforma posterior."
    },
    {
      question: "Quais são as opções de financiamento e formas de pagamento?",
      answer: "Trabalhamos com fluxo direto com a construtora durante o período de obras (com entrada facilitada, parcelas mensais e semestrais) e opção de financiamento bancário do saldo devedor através de qualquer banco (Itaú, Bradesco, Santander, Caixa, Banco do Brasil) no momento da entrega das chaves."
    },
    ...currentDev.faqs
  ];

  return (
    <section id="duvidas" className="py-20 lg:py-28 bg-stone-900/40 border-t border-stone-850 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes · {currentDev.name}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif-luxury leading-tight">
            Dúvidas Comuns sobre o {currentDev.name} ({currentDev.shortNeighborhood})
          </h2>
          <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
            Transparência e segurança jurídica em todas as fases da sua aquisição imobiliária.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {generalFAQs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-stone-900/80 border border-stone-800 transition-colors overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-850/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white font-serif-luxury">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center shrink-0 text-amber-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-amber-500/20" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-stone-300 text-sm leading-relaxed border-t border-stone-800/60 pt-4">
                    <p>{faq.answer}</p>
                    <div className="mt-4 pt-3 border-t border-stone-850 flex items-center justify-between">
                      <span className="text-xs text-stone-500">Quer agendar uma visita?</span>
                      <a
                        href={currentDev.formUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold hover:underline"
                      >
                        <span>Preencher Formulário de {currentDev.shortNeighborhood}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
