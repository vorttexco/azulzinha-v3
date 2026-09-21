import Image from "next/image";
import { asset } from "@/lib/assets";

const manuals = [
  {
    name: "Clover Flex",
    description:
      "A sua Clover Flex possibilita a venda com mais eficiência e em qualquer lugar – no balcão, na mesa ou na rua. Clover Flex é uma solução móvel e completa.",
    image: "/images/bem-vindo-a-clover/clover-flex.jpg",
    href: "https://azulzinhadacaixa.com.br/midias/azulzinha-Clover-Flex.pdf",
    buttonText: "Baixe o manual da Clover Flex",
  },
  {
    name: "Clover Mini",
    description:
      "Inove e transforme seu balcão com o mini PDV. Todas as suas necessidades em um único equipamento.",
    image: "/images/bem-vindo-a-clover/clover-mini.jpg",
    href: "https://azulzinhadacaixa.com.br/midias/azulzinha-Clover-Mini.pdf",
    buttonText: "Baixe o manual da Clover Mini",
  },
];

export default function ManuaisSection() {
  return (
    <section id="manuais" className="bg-white py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px]">
        <h2 className="section-title text-azul mb-8 lg:mb-[60px]">
          Faça muito mais com a sua Clover
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[60px] max-w-[1100px] mx-auto">
          {manuals.map((item) => (
            <div
              key={item.name}
              className="border border-[#D9D9D9] rounded-[12px] p-6 lg:p-[50px] flex flex-col justify-between gap-8"
            >
              <div className="flex flex-col gap-6">
                <div className="relative w-full h-[220px] lg:h-[340px]">
                  <Image
                    src={asset(item.image)}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-[22px] lg:text-[26px] leading-[1.3] text-azul">
                  {item.name}
                </h3>
                <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
                  {item.description}
                </p>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-laranja self-start"
              >
                {item.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
