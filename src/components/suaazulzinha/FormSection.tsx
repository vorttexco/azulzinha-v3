"use client";

import { useState } from "react";

export default function FormSection() {
  const [isMei, setIsMei] = useState<boolean | null>(null);
  const [accepted, setAccepted] = useState(false);

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px]">
        <div className="w-full max-w-[809px] mx-auto flex flex-col gap-6">
          {/* Header text */}
          <p className="text-[14px] lg:text-[16px] leading-[1.5] text-black text-center">
            Preencha o formulário abaixo com os seus dados e em breve um gerente
            da CAIXA entrará em contato para apresentar taxas personalizadas para
            sua empresa e tirar todas as suas dúvidas.
          </p>

          <form className="flex flex-col gap-4">
            {/* Você é MEI? */}
            <div className="flex items-center gap-4">
              <span className="text-[14px] lg:text-[16px] text-black">
                Você é MEI?
              </span>
              <label className="flex items-center gap-1 cursor-pointer text-[14px] lg:text-[16px] text-black">
                <input
                  type="radio"
                  name="mei"
                  value="sim"
                  checked={isMei === true}
                  onChange={() => setIsMei(true)}
                  className="accent-azul"
                />
                Sim
              </label>
              <label className="flex items-center gap-1 cursor-pointer text-[14px] lg:text-[16px] text-black">
                <input
                  type="radio"
                  name="mei"
                  value="nao"
                  checked={isMei === false}
                  onChange={() => setIsMei(false)}
                  className="accent-azul"
                />
                Não
              </label>
            </div>

            {/* CNPJ + CNAE */}
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                placeholder="CNPJ"
                className="flex-1 border border-[#D9D9D9] rounded-[6px] px-4 py-3 text-[14px] lg:text-[16px] text-black placeholder-[#999] outline-none focus:border-azul"
              />
              <input
                type="text"
                placeholder="CNAE"
                className="flex-1 border border-[#D9D9D9] rounded-[6px] px-4 py-3 text-[14px] lg:text-[16px] text-black placeholder-[#999] outline-none focus:border-azul"
              />
            </div>

            {/* Nome de contato */}
            <input
              type="text"
              placeholder="Nome de contato"
              className="w-full border border-[#D9D9D9] rounded-[6px] px-4 py-3 text-[14px] lg:text-[16px] text-black placeholder-[#999] outline-none focus:border-azul"
            />

            {/* E-mail */}
            <input
              type="email"
              placeholder="E-mail"
              className="w-full border border-[#D9D9D9] rounded-[6px] px-4 py-3 text-[14px] lg:text-[16px] text-black placeholder-[#999] outline-none focus:border-azul"
            />

            {/* Celular de contato */}
            <input
              type="tel"
              placeholder="Celular de contato"
              className="w-full border border-[#D9D9D9] rounded-[6px] px-4 py-3 text-[14px] lg:text-[16px] text-black placeholder-[#999] outline-none focus:border-azul"
            />

            {/* CEP */}
            <input
              type="text"
              placeholder="CEP"
              className="w-full border border-[#D9D9D9] rounded-[6px] px-4 py-3 text-[14px] lg:text-[16px] text-black placeholder-[#999] outline-none focus:border-azul"
            />

            {/* Faturamento mensal em cartão */}
            <div className="relative">
              <select
                defaultValue=""
                className="w-full appearance-none border border-[#D9D9D9] rounded-[6px] px-4 py-3 text-[14px] lg:text-[16px] text-[#999] outline-none focus:border-azul bg-white"
              >
                <option value="" disabled>
                  Faturamento mensal em cartão
                </option>
                <option value="ate5k">Até R$ 5.000</option>
                <option value="5k-20k">R$ 5.000 – R$ 20.000</option>
                <option value="20k-50k">R$ 20.000 – R$ 50.000</option>
                <option value="50k-100k">R$ 50.000 – R$ 100.000</option>
                <option value="acima100k">Acima de R$ 100.000</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-[28px] h-[28px] rounded-full bg-azul flex items-center justify-center">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path
                    d="M1 1L6 6L11 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-[2px] accent-azul shrink-0"
              />
              <span className="text-[12px] leading-[1.5] text-black">
                Estou ciente de que, ao preencher o formulário acima e clicar em
                &quot;enviar&quot;, autorizo o compartilhamento dos dados da
                empresa e do representante legal com a Fiserv e seus parceiros,
                bem como o recebimento de contato em razão do meu interesse em
                saber mais sobre a azulzinha
              </span>
            </label>

            {/* Privacy links */}
            <p className="text-[12px] leading-[1.5] text-black">
              Você pode consultar o detalhamento sobre o compartilhamento e
              tratamento dos seus dados no{" "}
              <a href="#" className="underline">
                Aviso de Privacidade CAIXA
              </a>
              ,{" "}
              <a href="#" className="underline">
                Aviso de Privacidade CAIXA Cartões
              </a>{" "}
              e na{" "}
              <a href="#" className="underline">
                Política de Privacidade Fiserv
              </a>
              .
            </p>

            {/* Submit */}
            <div className="flex justify-center mt-2">
              <button type="submit" className="btn-laranja px-10">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
