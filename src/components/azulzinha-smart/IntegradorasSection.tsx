import Image from "next/image";
import { asset } from "@/lib/assets";

const integradoras = [
  { src: "/images/azulzinha-smart/integradoras-1.png", alt: "Integradoras grupo 1" },
  { src: "/images/azulzinha-smart/integradoras-2.png", alt: "Integradoras grupo 2" },
  { src: "/images/azulzinha-smart/integradoras-3.png", alt: "Integradoras grupo 3" },
];

export default function IntegradorasSection() {
  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-16">
        <div className="flex flex-col items-center gap-6 lg:gap-8">
          <h2 className="section-title text-azul">
            Integradoras de Apps
          </h2>

          {/* Desktop grid */}
          <div className="relative w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              {integradoras.map((img, i) => (
                <div key={i} className="relative w-full h-[238px] lg:h-[293px]">
                  <Image
                    src={asset(img.src)}
                    alt={img.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
              {integradoras.map((img, i) => (
                <div key={`row2-${i}`} className="relative w-full h-[238px] lg:h-[305px] hidden lg:block">
                  <Image
                    src={asset(img.src)}
                    alt={img.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Fade gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-[linear-gradient(0deg,rgba(250,250,250,1)_35%,rgba(250,250,250,0)_81%)] pointer-events-none" />
          </div>

          <button className="btn-laranja">
            Ver todos
          </button>
        </div>
      </div>
    </section>
  );
}
