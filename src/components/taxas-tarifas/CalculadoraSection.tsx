"use client";

import { useState } from "react";
import ArrowIcon from "@/components/shared/ArrowIcon";

const tiposPagamento = ["Débito", "Crédito"];
const parcelasOpcoes = ["À vista", "Parcelado em 2x", "Parcelado em 3x", "Parcelado em 4x", "Parcelado em 5x", "Parcelado em 6x", "Parcelado em 7x", "Parcelado em 8x", "Parcelado em 9x", "Parcelado em 10x", "Parcelado em 11x", "Parcelado em 12x"];

const getTaxRate = (tipoPagamento: string, parcela: string): number => {
  const parcelaNum = parseInt(parcela.split(" ")[2]) || 0;

  if (tipoPagamento === "Débito") {
    return 0.81;
  }

  if (parcela === "À vista") {
    return 1.27;
  }

  if (parcelaNum >= 2 && parcelaNum <= 6) {
    return 1.48;
  }

  if (parcelaNum >= 7) {
    return 1.92;
  }

  return 1.27;
};

export default function CalculadoraSection() {
  const [tipoPagamento, setTipoPagamento] = useState(0);
  const [parcela, setParcela] = useState(0);
  const [valorVenda, setValorVenda] = useState("");

  const isDebito = tiposPagamento[tipoPagamento] === "Débito";
  const taxa = getTaxRate(tiposPagamento[tipoPagamento], parcelasOpcoes[parcela]);
  const valor = parseFloat(valorVenda.replace(",", ".")) || 0;
  const valorRecebido = valor > 0 ? valor - (valor * taxa) / 100 : 0;

  const cyclePrev = (current: number, total: number) =>
    current === 0 ? total - 1 : current - 1;
  const cycleNext = (current: number, total: number) =>
    current === total - 1 ? 0 : current + 1;

  // Reset parcela to 0 when switching to Débito
  const handleTipoPagamento = (newIndex: number) => {
    setTipoPagamento(newIndex);
    if (tiposPagamento[newIndex] === "Débito") {
      setParcela(0);
    }
  };

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
                  onClick={() => handleTipoPagamento(cyclePrev(tipoPagamento, tiposPagamento.length))}
                  className="w-[29px] h-[32px] bg-[#D9D9D9]  rounded-lg flex items-center justify-center cursor-pointer"
                >
                  <ArrowIcon width={14} height={10} color="#000" stroke="#000" strokeWidth={1} className="rotate-180" />
                </button>
                <button
                  onClick={() => handleTipoPagamento(cycleNext(tipoPagamento, tiposPagamento.length))}
                  className="w-[29px] h-[32px] bg-[#D9D9D9] rounded-lg flex items-center justify-center cursor-pointer"
                >
                  <ArrowIcon width={14} height={10} color="#000" stroke="#000" strokeWidth={1} />
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

            {/* Parcela */}
            <div className={`bg-white border rounded-lg flex items-center justify-between px-4 h-16 ${isDebito ? "border-[#d9d9d9] opacity-50 pointer-events-none" : "border-[#b8b8b8]"}`}>
              <span className={`text-[16px] ${isDebito ? "text-[#aaa]" : "text-cinza"}`}>
                {parcelasOpcoes[parcela]}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setParcela(cyclePrev(parcela, parcelasOpcoes.length))}
                  disabled={isDebito}
                  className="w-[29px] h-[32px] bg-[#D9D9D9] rounded-lg flex items-center justify-center cursor-pointer"
                >
                  <ArrowIcon width={14} height={10} color={isDebito ? "#999" : "#333"} stroke={isDebito ? "#999" : "#333"} strokeWidth={1} className="rotate-180" />
                </button>
                <button
                  onClick={() => setParcela(cycleNext(parcela, parcelasOpcoes.length))}
                  disabled={isDebito}
                  className="w-[29px] h-[32px] bg-[#D9D9D9] rounded-lg flex items-center justify-center cursor-pointer"
                >
                  <ArrowIcon width={14} height={10} color={isDebito ? "#999" : "#333"} stroke={isDebito ? "#999" : "#333"} strokeWidth={1} />
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
