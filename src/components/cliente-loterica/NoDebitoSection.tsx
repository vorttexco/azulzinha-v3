import Image from "next/image";
import { asset } from "@/lib/assets";

const bandeiras = [
  { src: "/images/cliente-loterica/bandeira-elo.png", alt: "Elo", width: 96, height: 30 },
  { src: "/images/cliente-loterica/bandeira-visa-229e0a.png", alt: "Visa", width: 61, height: 39 },
  { src: "/images/cliente-loterica/bandeira-mastercard.png", alt: "Mastercard", width: 93, height: 30 },
];

const cards = [
  { icon: "/images/cliente-loterica/icon-jogos.png", label: "Jogos" },
  { icon: "/images/cliente-loterica/icon-agua.png", label: "Água" },
  { icon: "/images/cliente-loterica/icon-luz-351133.png", label: "Luz" },
  { icon: "/images/cliente-loterica/icon-telefone.png", label: "Telefone" },
];

export default function NoDebitoSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20 lg:pb-[110px] flex flex-col items-center gap-[30px] lg:gap-[60px]">
        {/* Bandeiras logos */}
        <div className="flex flex-row flex-wrap justify-center items-center gap-x-10 gap-y-6 lg:gap-[77px]">
          {bandeiras.map((b) => (
            <Image
              key={b.alt}
              src={asset(b.src)}
              alt={b.alt}
              width={b.width}
              height={b.height}
              className="object-contain"
            />
          ))}
        </div>

        {/* Title + body */}
        <div className="flex flex-col items-center gap-4 max-w-[770px] text-center">
          <h2 className="section-title text-azul">
            No débito ou no crédito, ofereça pagamentos com cartão na sua Lotérica
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black whitespace-pre-line">
            {`A azulzinha já veio preparada para aceitar cartões de débito e crédito* de todos os bancos, nas bandeiras Elo, Mastercard e Visa. Com azulzinha na sua Lotérica, você oferece mais comodidade aos seus clientes.\nSeja qual for o banco, ele pode usar o cartão de débito ou de crédito para pagar boletos, contas de consumo e convênios, inclusive para fazer aquele jogo na Lotérica!`}
          </p>
        </div>

        {/* Main image with play overlay */}
        <div className="relative w-full max-w-[1070px] aspect-[1070/547] rounded-[20px] lg:rounded-[30px] overflow-hidden">
          <Image
            src={asset("/images/cliente-loterica/no-debito-main.png")}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#01367B]/40" />
          <button
            type="button"
            aria-label="Reproduzir vídeo"
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
          >
            <div className="w-[60px] h-[60px] lg:w-[79px] lg:h-[79px] rounded-full bg-white flex items-center justify-center shadow-md">
              <svg
                width="22"
                height="26"
                viewBox="0 0 22 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                <path d="M21 11.268a2 2 0 0 1 0 3.464L3 25.124A2 2 0 0 1 0 23.392V2.608A2 2 0 0 1 3 .876z" fill="#006CAD" />
              </svg>
            </div>
          </button>
        </div>

        {/* 4 pill cards */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 w-full">
          {cards.map((card) => (
            <div
              key={card.label}
              className="flex-1 bg-white border border-[#F1F1F1] rounded-[30px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center gap-6 py-[60px] px-2"
            >
              <Image
                src={asset(card.icon)}
                alt=""
                width={59}
                height={59}
                className="object-contain"
              />
              <p className="text-[22px] leading-[1.3] text-azul text-center">
                {card.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom small text */}
        <div className="text-[14px] leading-[1.4] text-cinza text-center max-w-[738px] flex flex-col gap-2">
          <p>
            *Pagamento com cartões de débito e crédito de contas de
            água/luz/telefone, boletos, jogos e demais produtos. Débito CAIXA e
            BNB permanecem por meio da função saque.
          </p>
          <p>
            *Não é permitido o uso do cartão de crédito para o pagamento de
            faturas de cartão de crédito.
          </p>
          <p>Serviço de Conveniência Débito: 1,08%</p>
          <p>Serviço de Conveniência Crédito: 2,95%</p>
          <p>
            As taxas são vigentes mediante adesão da Lotérica via canal Conexão
            Parceiros.
          </p>
        </div>
      </div>
    </section>
  );
}
