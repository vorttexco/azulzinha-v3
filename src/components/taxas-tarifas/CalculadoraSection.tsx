"use client";

import { useState } from "react";

const tiposPagamento = ["Débito", "Crédito à vista", "Crédito 2x a 6x", "Crédito 7x a 12x"];
const tiposRecebimento = ["À vista", "Em 1 dia útil", "Em 30 dias"];

const taxas: Record<string, Record<string, number>> = {
  "Débito": { "À vista": 0.81, "Em 1 dia útil": 0.95, "Em 30 dias": 0.81 },
  "Crédito à vista": { "À vista": 1.27, "Em 1 dia útil": 1.45, "Em 30 dias": 1.27 },
  "Crédito 2x a 6x": { "À vista": 1.48, "Em 1 dia útil": 1.65, "Em 30 dias": 1.48 },
  "Crédito 7x a 12x": { "À vista": 1.92, "Em 1 dia útil": 2.10, "Em 30 dias": 1.92 },
};

export default function CalculadoraSection() {
  const [tipoPagamento, setTipoPagamento] = useState(0);
  const [tipoRecebimento, setTipoRecebimento] = useState(0);
  const [valorVenda, setValorVenda] = useState("");

  const taxa = taxas[tiposPagamento[tipoPagamento]][tiposRecebimento[tipoRecebimento]];
  const valor = parseFloat(valorVenda.replace(",", ".")) || 0;
  const valorRecebido = valor > 0 ? valor - (valor * taxa) / 100 : 0;

  const cyclePrev = (current: number, total: number) =>
    current === 0 ? total - 1 : current - 1;
  const cycleNext = (current: number, total: number) =>
    current === total - 1 ? 0 : current + 1;

  return (
    <section className="bg-[#F7F7F7]">
      <div className="max-w-360 mx-auto px-7.5 lg:px-25 py-14 lg:py-20 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <h2 className="section-title text-azul">
            Simule suas vendas com a calculadora da azulzinha
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center max-w-[666px]">
            Se você já é cliente, experimente o simulador de vendas do{" "}
            <span className="underline">App da azulzinha!</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 w-full max-w-[732px]">
          {/* Left: inputs */}
          <div className="flex flex-col gap-3 w-full lg:w-[346px] shrink-0">
            {/* Tipo de pagamento */}
            <div className="bg-white border border-[#b8b8b8] rounded-lg flex items-center justify-between px-4 h-16">
              <span className="text-[16px] text-cinza">
                {tiposPagamento[tipoPagamento]}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setTipoPagamento(cyclePrev(tipoPagamento, tiposPagamento.length))}
                  className="bg-[#d9d9d9] rounded-lg w-[29px] h-8 flex items-center justify-center cursor-pointer"
                >
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M9 5L5 1L1 5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button
                  onClick={() => setTipoPagamento(cycleNext(tipoPagamento, tiposPagamento.length))}
                  className="bg-[#d9d9d9] rounded-lg w-[29px] h-8 flex items-center justify-center cursor-pointer"
                >
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>

            {/* Valor da venda */}
            <div className="bg-white border border-[#b8b8b8] rounded-lg flex items-center justify-between px-4 h-[60px]">
              <span className="text-[16px] text-[#aaa]">Valor da venda</span>
              <input
                type="text"
                value={valorVenda}
                onChange={(e) => setValorVenda(e.target.value)}
                placeholder="R$ 0,00"
                className="bg-white border border-[rgba(184,184,184,0.87)] rounded-lg w-[159px] h-9 px-3 text-[16px] text-right outline-none"
              />
            </div>

            {/* Tipo de recebimento */}
            <div className="bg-white border border-[#b8b8b8] rounded-lg flex items-center justify-between px-4 h-16">
              <span className="text-[16px] text-[#aaa]">
                {tiposRecebimento[tipoRecebimento]}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setTipoRecebimento(cyclePrev(tipoRecebimento, tiposRecebimento.length))}
                  className="bg-[#d9d9d9] rounded-lg w-[29px] h-8 flex items-center justify-center cursor-pointer"
                >
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M9 5L5 1L1 5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <button
                  onClick={() => setTipoRecebimento(cycleNext(tipoRecebimento, tiposRecebimento.length))}
                  className="bg-[#d9d9d9] rounded-lg w-[29px] h-8 flex items-center justify-center cursor-pointer"
                >
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>

            {/* Taxa */}
            <div className="bg-white border border-[#b8b8b8] rounded-lg flex items-center px-4 h-[54px]">
              <span className="text-[16px] text-cinza">Com taxa de </span>
              <span className="text-[16px] text-[#aaa] ml-1">{taxa.toFixed(2).replace(".", ",")}%</span>
            </div>
          </div>

          {/* Right: result */}
          <div className="flex flex-col justify-between bg-[linear-gradient(106deg,#006CAD_7%,#012B71_99%)] rounded-2xl p-[30px] w-full lg:flex-1">
            <div>
              <p className="text-[18px] text-white leading-normal">
                O valor que você receberá é de:
              </p>
              <p className="text-[28px] text-white font-normal mt-4">
                R$ {valorRecebido.toFixed(2).replace(".", ",")}
              </p>
            </div>
            <a href="#" className="btn-laranja self-start mt-6">
              Negocie suas taxas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
