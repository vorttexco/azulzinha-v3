import Image from "next/image";
import { asset } from "@/lib/assets";

export default function AutonomiaSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto py-14 lg:py-[110px] px-[30px] lg:px-[100px]">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-[78px]">
          {/* Left: Text content */}
          <div className="flex flex-col gap-4 lg:gap-6 lg:w-[537px] shrink-0">
            <h2 className="section-title text-azul lg:text-left!">
              Mais autonomia para o seu negócio com a azulzinha pro
            </h2>
            <ul className="flex flex-col gap-4 text-[18px] font-normal leading-[1.4] text-black list-disc pl-5">
              <li>
                A azulzinha pro é a famosa maquininha sem fio que é sinônimo de
                praticidade, mobilidade e rapidez nas vendas.
              </li>
              <li>
                Ideal para quem precisa levar a maquininha até o cliente ou mesmo
                para estabelecimentos que prezam por um atendimento mais rápido,
                principalmente em horários de pico de movimento.
              </li>
              <li>
                Uma solução segura da CAIXA, que aceita todas as opções de
                pagamento e que conta ainda com uma interface intuitiva e fácil
                de usar.
              </li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="relative w-full lg:w-[605px] h-[256px] lg:h-[426px] rounded-[12px] lg:rounded-[30px] overflow-hidden">
            <Image
              src={asset("/images/maquininhas-pro/autonomia-photo.png")}
              alt="Autonomia com azulzinha pro"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
