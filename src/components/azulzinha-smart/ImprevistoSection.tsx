import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/assets";

export default function ImprevistoSection() {
  return (
    <section className="w-full bg-[#F4F4F4] lg:bg-[linear-gradient(180deg,rgba(255,255,255,1)_8%,rgba(247,247,247,1)_100%)]">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-0 py-14 lg:py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Image */}
          <div className="relative w-full h-[256px] lg:h-[604px] rounded-[12px] lg:rounded-none overflow-hidden">
            <Image
              src={asset("/images/azulzinha-smart/imprevistos-composite.png")}
              alt="Azulzinha smart à prova de imprevistos"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col items-center gap-4 lg:gap-6 px-0 lg:px-[100px]">
            <h2 className="section-title text-azul">
              Inteligente é ser à prova de imprevistos
            </h2>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center max-w-[837px]">
              Sistema fora do ar agora é um problema do passado. A azulzinha
              smart já vem com uma solução de pagamento no próprio terminal para
              casos de imprevistos e indisponibilidade da automação.
            </p>
            <Link href="/peca-azulzinha" className="btn-laranja text-center">
              Peça sua azulzinha
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
