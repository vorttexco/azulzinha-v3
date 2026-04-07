import Image from "next/image";
import { asset } from "@/lib/assets";

export default function TabelaIsencaoSection() {
  return (
    <section className="bg-white">
      <div className="max-w-360 mx-auto px-7.5 lg:px-25 py-14 lg:py-20 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <h2 className="section-title text-azul">
            Taxas e condições de isenção de aluguel
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center max-w-[666px]">
            Os valores podem variar conforme o número de maquininhas contratadas
          </p>
        </div>

        <div className="w-full max-w-[1087px]">
          <Image
            src={asset("/images/taxas-tarifas/tabela-isencao.png")}
            alt="Tabela de taxas e condições de isenção de aluguel"
            width={1087}
            height={539}
            className="w-full h-auto"
          />
        </div>

        <div className="text-[14px] leading-[1.4] text-cinza text-center max-w-[784px]">
          <p>*100% de isenção de aluguel</p>
          <p>
            *<span className="underline">azulzinha aproxima</span>: As taxas são
            as mesmas das maquininhas. Sem custo de adesão ou aluguel.
          </p>
        </div>

        <a href="#" className="btn-laranja">
          Peça a sua azulzinha
        </a>
      </div>
    </section>
  );
}
