import Image from "next/image";
import { asset } from "@/lib/assets";

export default function QrCodeUpdateSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          <div className="flex flex-col gap-6 lg:flex-1">
            <h2 className="section-title text-azul text-center lg:text-left">
              Se você já vende com azulzinha e aceita VR, basta atualizar sua maquininha
            </h2>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center lg:text-left">
              Para quem já aceita cartão VR Benefícios com azulzinha, a nova funcionalidade de pagamento sem contato físico já está disponível*.
            </p>
            <p className="text-[14px] leading-[1.4] text-[#999999] text-center lg:text-left">
              *Na versão 300K a atualização é realizada de forma automática, sendo necessário somente estar conectada ao Wi-Fi.
            </p>
          </div>
          <Image
            src={asset("/images/bandeiras-vouchers/maquina-pq.png")}
            alt="Duas maquininhas azulzinha"
            width={2200}
            height={1238}
            className="w-full max-w-[526px] h-auto mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
