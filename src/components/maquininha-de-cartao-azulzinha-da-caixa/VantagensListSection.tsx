import Image from "next/image";
import { asset } from "@/lib/assets";

const benefits = [
  "Contratação sem custo de adesão;",
  "Taxas competitivas e personalizadas;",
  "Condições diferenciadas, incluindo aluguel zero;",
  "Entrega com frete grátis e em até 5 dias úteis;",
  "Soluções digitais seguras e ágeis para vendas online;",
  "Recebimento das vendas em até 2 dias úteis;",
  "Gestão completa via App ou Portal da azulzinha;",
  "Envio automático de bobinas a cada 15 dias;",
  "Suporte técnico disponível 24h por dia.",
];

function CheckIcon() {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      className="shrink-0 mt-[2px]"
    >
      <path
        d="M16.5 1L5 15L1 10.5"
        stroke="#FF6600"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function VantagensListSection() {
  return (
    <section id="dobra" className="bg-[#EEEEEE] py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px]">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-[78px]">
          <div className="flex flex-col gap-6 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <h2 className="section-title text-azul text-center lg:text-left">
                Muito mais vantagens para empreender
              </h2>
              <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center lg:text-left">
                Transforme o seu comércio e impulsione as vendas com a agilidade
                e segurança da azulzinha:
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {benefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 text-[16px] leading-[1.4] text-[#333333]"
                >
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-full lg:w-1/2 h-[240px] lg:h-[420px]">
            <Image
              src={asset(
                "/images/maquininha-de-cartao-azulzinha-da-caixa/group-maquinas.png"
              )}
              alt="Maquininhas azulzinha da CAIXA"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="#form"
            className="btn-laranja LP-clicou-maquininha-de-cartao-azulzinha-da-caixa-quero"
          >
            Quero minha azulzinha
          </a>
        </div>
      </div>
    </section>
  );
}
