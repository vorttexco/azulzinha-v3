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

const categories = [
  { icon: "/images/azulzinha-aproxima/icon-alimentacao.svg", label: "Alimentação" },
  { icon: "/images/azulzinha-aproxima/icon-homeoffice.svg", label: "Home office" },
  { icon: "/images/azulzinha-aproxima/icon-refeicao.svg", label: "Refeição" },
  { icon: "/images/azulzinha-aproxima/icon-mobilidade.svg", label: "Mobilidade" },
];

export default function VrBenefitsSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_50%,#F7F7F7_100%)]">
      <div className="max-w-[1440px] mx-auto pb-14 lg:pb-20 px-[30px] lg:px-[100px]">
        <div className="flex flex-col items-center gap-8 lg:gap-[60px]">
          {/* Header */}
          <div className="text-center max-w-[696px]">
            <h2 className="section-title text-azul mb-4">
              Aceite os pagamentos de benefícios da VR via QR code
            </h2>
            <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
              azulzinha aproxima também aceita pagamentos de alimentação, refeição, home office e mobilidade com a bandeira VR
            </p>
          </div>

          {/* Video thumbnail */}
          <div className="relative w-full max-w-[1070px] h-[202px] lg:h-[547px] rounded-[16px] lg:rounded-[30px] overflow-hidden cursor-pointer group">
            <div className="absolute inset-0 z-0">
              <Image
                src={asset("/images/azulzinha-aproxima/vr-video.png")}
                alt="Vídeo VR"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-[#01367B]/20 z-10" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <PlayIcon />
            </div>
          </div>

          {/* Category icons */}
          <div className="grid grid-cols-2 lg:flex lg:flex-row gap-6 lg:gap-8">
            {categories.map((cat) => (
              <div key={cat.label} className="flex flex-col items-center gap-2">
                <Image src={asset(cat.icon)} alt="" width={42} height={35} className="w-[42px] h-[35px] object-contain" unoptimized />
                <span className="text-[18px] font-normal leading-[1.4] text-black text-center">{cat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a href="/peca-azulzinha" className="btn-laranja">
            Peça a sua
          </a>
        </div>
      </div>
    </section>
  );
}
