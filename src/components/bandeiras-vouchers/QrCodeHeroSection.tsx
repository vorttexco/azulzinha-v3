import Image from "next/image";
import { asset } from "@/lib/assets";
import TrackedAnchor from "@/components/shared/TrackedAnchor";

export default function QrCodeHeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-8 lg:gap-6">
          <div className="flex flex-col gap-6 lg:flex-1">
            <p className="text-[16px] lg:text-[18px] font-bold leading-[1.4] text-azul">
              Sem cartão e sem contato físico:
            </p>
            <div className="flex items-center gap-4 border border-azul rounded-[4px] px-4 py-2.5">
              <Image
                src={asset("/images/bandeiras-vouchers/logo-vr-qr.png")}
                alt="VR"
                width={155}
                height={120}
                className="w-[100px] h-auto shrink-0"
                priority
              />
              <h2 className="section-title text-azul text-left">
                azulzinha da CAIXA agora aceita pagamento com VR por QR Code
              </h2>
            </div>
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
              O pagamento por QR Code já está disponível na sua azulzinha.
            </p>
            <TrackedAnchor
              href="#ancora"
              kind="cta"
              name="Comece Agora"
              location="hero"
              className="btn-laranja w-fit"
            >
              Comece Agora
            </TrackedAnchor>
          </div>
          <div className="flex justify-center lg:justify-end lg:w-[180px] shrink-0">
            <Image
              src={asset("/images/bandeiras-vouchers/maquina-qrcode.png")}
              alt="Maquininha azulzinha exibindo o QR Code da VR"
              width={274}
              height={620}
              className="w-[150px] lg:w-[165px] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
