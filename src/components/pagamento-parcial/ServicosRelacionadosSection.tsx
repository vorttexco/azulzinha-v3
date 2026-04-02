import Image from "next/image";
import { asset } from "@/lib/assets";

const servicos = [
  {
    icon: "/images/pagamento-parcial/icon-bandeiras.png",
    title: "Bandeiras e Vouchers",
    href: "/bandeiras-vouchers",
  },
  {
    icon: "/images/pagamento-parcial/icon-antecipacao.png",
    title: "Antecipação de vendas",
    href: "/antecipacao-de-vendas",
  },
  {
    icon: "/images/pagamento-parcial/icon-recargas.png",
    title: "Recargas",
    href: "/recarga-telefone",
  },
];

export default function ServicosRelacionadosSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_8%,#F7F7F7_100%)]">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] pb-14 lg:pb-[110px]">
        <h2 className="section-title text-azul mb-8 lg:mb-10">
          Como habilitar o serviço
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {servicos.map((s) => (
            <div
              key={s.title}
              className="flex flex-col items-center justify-center gap-6 bg-white border border-[#F1F1F1] rounded-[30px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] px-[60px] py-[52px] lg:py-[89px]"
            >
              <div className="w-[72px] h-[72px] relative">
                <Image
                  src={asset(s.icon)}
                  alt=""
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>

              <h3 className="text-[22px] leading-[1.3] text-azul text-center">{s.title}</h3>

              <a
                href={s.href}
                className="btn-laranja text-center"
              >
                Saiba mais
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
