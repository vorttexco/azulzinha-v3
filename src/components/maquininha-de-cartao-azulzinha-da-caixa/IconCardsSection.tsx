import Image from "next/image";
import { asset } from "@/lib/assets";

interface IconCard {
  icon: string;
  label: string;
}

interface IconCardsSectionProps {
  title: string;
  description: string;
  cards: IconCard[];
  columns?: 3 | 4;
}

export default function IconCardsSection({
  title,
  description,
  cards,
  columns = 3,
}: IconCardsSectionProps) {
  const gridClass =
    columns === 4
      ? "grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-3";

  return (
    <section className="bg-[#EEEEEE] py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] flex flex-col items-center gap-8 lg:gap-[60px]">
        <div className="flex flex-col items-center gap-4">
          <h2 className="section-title text-azul">{title}</h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center max-w-[720px]">
            {description}
          </p>
        </div>
        <div className={`grid ${gridClass} gap-8 lg:gap-10 w-full`}>
          {cards.map((card) => (
            <div
              key={card.label}
              className="flex flex-col items-center text-center gap-4"
            >
              <Image
                src={asset(card.icon)}
                alt=""
                width={72}
                height={72}
                className="w-[64px] h-[64px] object-contain"
              />
              <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
                {card.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
