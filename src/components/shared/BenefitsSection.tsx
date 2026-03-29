import Image from "next/image";
import { asset } from "@/lib/assets";

interface BenefitItem {
  icon: string;
  text: string;
}

interface BenefitsSectionProps {
  title: string;
  items: BenefitItem[];
  textColor?: string;
  bgColor?: string;
}

export default function BenefitsSection({
  title,
  items,
  textColor = "text-black",
  bgColor = "bg-white",
}: BenefitsSectionProps) {
  return (
    <section className={bgColor}>
      <div className="max-w-360 mx-auto py-14 lg:pb-27.5 px-7.5 lg:px-25">
        <h2 className="section-title text-azul text-center lg:text-center mb-6 lg:mb-14">
          {title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.text}
              className="flex flex-col gap-4 bg-white rounded-[10px] p-6 shadow-[0px_4px_10px_0px_#00000014] lg:h-39"
            >
              <Image
                src={asset(item.icon)}
                alt=""
                width={52}
                height={52}
                className="shrink-0"
              />
              <p className={`text-[16px] font-normal leading-[1.4] ${textColor}`}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
