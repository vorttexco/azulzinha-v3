import Image from "next/image";
import { asset } from "@/lib/assets";

function PlayIcon() {
  return (
    <div className="w-[44px] h-[44px] lg:w-[79px] lg:h-[79px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
      <svg width="18" height="22" viewBox="0 0 22 26" fill="none" className="ml-0.5 lg:ml-1 w-[14px] lg:w-[18px]">
        <path d="M0 0L22 13L0 26V0Z" fill="#006CAD" />
      </svg>
    </div>
  );
}

export default function HabilitarSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto pb-14 lg:pb-20 px-[30px] lg:px-[100px]">
        <div className="flex flex-col items-center gap-8 lg:gap-[60px]">
          {/* Header */}
          <div className="text-center max-w-[696px]">
            <h2 className="section-title text-azul mb-4">
              Como habilitar azulzinha aproxima
            </h2>
            <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
              Assista ao vídeo que preparamos com o passo a passo para você habilitar e começar a vender com azulzinha aproxima hoje mesmo:
            </p>
          </div>

          {/* Video thumbnail */}
          <div className="relative w-full max-w-[1070px] h-[202px] lg:h-[547px] rounded-[16px] lg:rounded-[30px] overflow-hidden cursor-pointer group">
            <div className="absolute inset-0 z-0">
              <Image
                src={asset("/images/azulzinha-aproxima/video-habilitar.png")}
                alt="Como habilitar azulzinha aproxima"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-[#01367B]/20 z-10" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <PlayIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
