import Image from "next/image";
import { asset } from "@/lib/assets";

const vantagens = [
  {
    image: "/images/pay/vantagem-1.png",
    text: "Parcelamento em até 12 vezes\ncom as menores taxas*",
  },
  {
    image: "/images/pay/vantagem-2.png",
    text: "Aceito em todo o Brasil",
  },
  {
    image: "/images/pay/vantagem-3.png",
    text: "Rápido, seguro e sem burocracia",
  },
];

export default function VantagensPaySection() {
  return (
    <section className="bg-cinza-claro">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20 lg:pb-[110px] flex flex-col items-center gap-[30px] lg:gap-[60px]">
        <h2 className="section-title text-azul">Vantagens</h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-[30px] lg:gap-[54px] w-full lg:max-w-[897px]">
          {vantagens.map((v) => (
            <div
              key={v.text}
              className="flex flex-col items-center gap-6 lg:w-[263px]"
            >
              <div className="relative w-[185.5px] h-[128px]">
                <Image
                  src={asset(v.image)}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-[16px] lg:text-[18px] leading-[1.4] text-azul text-center whitespace-pre-line">
                {v.text}
              </p>
            </div>
          ))}
        </div>

        <a href="#" className="btn-laranja">
          Conheça todas as vantagens
        </a>
      </div>
    </section>
  );
}
