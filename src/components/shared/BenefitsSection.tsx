import Image from "next/image";
import { asset } from "@/lib/assets";

interface BenefitItem {
  icon: string;
  text: string;
}

interface BenefitsSectionProps {
  title: string | React.ReactNode;
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.text}
              className="flex flex-col gap-[10px] bg-white rounded-[12px] pt-[32px] pr-[40px] pb-[32px] pl-[32px] shadow-[0px_4px_10px_0px_#00000014]"
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
