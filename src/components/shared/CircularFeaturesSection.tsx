import Image from "next/image";
import { asset } from "@/lib/assets";

export interface CircularFeatureItem {
  icon: string;
  text: string;
}

interface CircularFeaturesSectionProps {
  title: string;
  subtitle?: string;
  features: CircularFeatureItem[];
  disclaimer?: string;
  bgColor?: string;
}

export default function CircularFeaturesSection({
  title,
  subtitle,
  features,
  disclaimer,
  bgColor = "bg-cinza-claro",
}: CircularFeaturesSectionProps) {
  return (
    <section className={`w-full ${bgColor} py-14 lg:py-20`}>
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] flex flex-col items-center gap-8 lg:gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="section-title text-azul max-w-[900px]">{title}</h2>
          {subtitle && (
            <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black max-w-[740px]">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 w-full">
          {features.map((feature) => (
            <div
              key={feature.text}
              className="flex flex-col items-center gap-4 lg:gap-5 text-center"
            >
              <div className="w-[88px] h-[88px] lg:w-[104px] lg:h-[104px] rounded-full bg-white flex items-center justify-center shrink-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]">
                <Image
                  src={asset(feature.icon)}
                  alt=""
                  width={48}
                  height={48}
                  className="w-[44px] h-[44px] lg:w-[52px] lg:h-[52px] object-contain"
                  unoptimized
                />
              </div>
              <p className="text-[16px] lg:text-[18px] leading-[1.4] text-azul max-w-[240px]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {disclaimer && (
          <p className="text-[12px] lg:text-[14px] leading-[1.5] text-[#666666] text-center max-w-[900px]">
            {disclaimer}
          </p>
        )}
      </div>
    </section>
  );
}
