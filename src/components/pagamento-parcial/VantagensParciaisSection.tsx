import Image from "next/image";
import { asset } from "@/lib/assets";

const vantagens = [
  {
    icon: "/images/pagamento-parcial/icon-experiencia.png",
    title: "Experiência de compra",
    items: [
      "Filas menores com menos retentativas",
      "Menos negativas, mais aprovações",
      "Opção de cashout para pré-pagos",
    ],
  },
  {
    icon: "/images/pagamento-parcial/icon-receitas.png",
    title: "Incremente as receitas",
    items: [
      "Reduzindo as negativas, você tem mais vendas aprovadas",
      "Tenha sempre uma oferta que atenda as necessidades do seu cliente",
    ],
  },
];

export default function VantagensParciaisSection() {
  return (
    <section id="vantagens-parciais" className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20">
        <h2 className="section-title text-azul text-left mb-8 lg:mb-[60px]">
          Vantagens do Pagamento Parcial para sua loja
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {vantagens.map((v) => (
            <div
              key={v.title}
              className="flex flex-col gap-6 bg-white rounded-[12px] p-8 lg:p-14 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]"
            >
              <div className="w-[91px] h-[91px] relative">
                <div className="w-full h-full rounded-[10px] border border-[#F1F1F1] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] overflow-hidden flex items-center justify-center">
                  <Image
                    src={asset(v.icon)}
                    alt=""
                    width={41}
                    height={41}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-[18px] lg:text-[22px] leading-[1.3] text-azul">{v.title}</h3>
                <ul className="flex flex-col gap-2">
                  {v.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[16px] lg:text-[18px] leading-[1.4] text-black">
                      <span className="size-2 rounded-full bg-black shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
