import Image from "next/image";
import { asset } from "@/lib/assets";

export default function BandeirasSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-16">
        <div className="flex flex-col items-center gap-6 lg:gap-8">
          <h2 className="section-title text-azul">
            E a mais variada rede de bandeiras e carteiras digitais
          </h2>

          {/* Desktop - 3 rows */}
          <div className="hidden lg:flex flex-col items-center gap-4 w-full">
            <div className="relative w-full max-w-[1046px] h-[236px]">
              <Image
                src={asset("/images/azulzinha-smart/bandeiras-1.png")}
                alt="Bandeiras aceitas - linha 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-full max-w-[1058px] h-[238px]">
              <Image
                src={asset("/images/azulzinha-smart/bandeiras-2.png")}
                alt="Bandeiras aceitas - linha 2"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-full max-w-[1052px] h-[117px]">
              <Image
                src={asset("/images/azulzinha-smart/bandeiras-3.png")}
                alt="Bandeiras aceitas - linha 3"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Mobile - single composite */}
          <div className="lg:hidden relative w-full h-[216px]">
            <Image
              src={asset("/images/azulzinha-smart/bandeiras-1.png")}
              alt="Bandeiras aceitas"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
