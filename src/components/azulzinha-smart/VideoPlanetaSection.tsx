import Image from "next/image";
import { asset } from "@/lib/assets";

function PlayIcon() {
  return (
    <div className="w-[44px] h-[44px] lg:w-[79px] lg:h-[79px] rounded-full bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
      <svg
        width="22"
        height="26"
        viewBox="0 0 22 26"
        fill="none"
        className="ml-1 w-[12px] h-[14px] lg:w-[22px] lg:h-[26px]"
      >
        <path d="M0 0L22 13L0 26V0Z" fill="#006CAD" />
      </svg>
    </div>
  );
}

export default function VideoPlanetaSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-16">
        <div className="flex flex-col items-center gap-6 lg:gap-8">
          <h2 className="section-title text-azul max-w-[880px]">
            Quer ver como o Planeta Café está aproveitando a nova azulzinha
            smart?
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center max-w-[900px]">
            Proprietário do Planeta Café no Shopping Praiamar de Santos, o
            empreendedor Nuno Mendes da Silva conta pra gente como está usando a
            azulzinha smart para gerenciar as vendas com muito mais agilidade e
            até integrar o cardápio da loja à solução. Aperte o play!
          </p>

          {/* Video Thumbnail */}
          <div className="relative w-full max-w-[1070px] h-[202px] lg:h-[547px] rounded-[16px] lg:rounded-[30px] overflow-hidden cursor-pointer group">
            <Image
              src={asset("/images/azulzinha-smart/video-thumbnail-2.png")}
              alt="Planeta Café usando azulzinha smart"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(1,31,59,1)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
