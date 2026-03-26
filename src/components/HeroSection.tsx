import Image from "next/image";
import { asset } from "@/lib/assets";
import ArrowIcon from "@/components/icons/ArrowIcon";

const checkItems = [
  "Receba suas vendas no crédito em 1 dia útil",
  "Aceite as principais bandeiras e carteiras digitais",
  "Acompanhe seus recebimentos em tempo real",
];

// using shared ArrowIcon component

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[491px] lg:h-[581px] overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-[linear-gradient(-44deg,#006CAD_5%,#012B71_100%)]"
      />

      {/* Background image */}
      <Image
        src={asset("/images/hero-bg.png")}
        alt=""
        fill
        className="object-cover"
        priority
      />

      {/* Left overlay */}
      <div
        className="absolute opacity-90"
        style={{
          width: 1200,
          height: 628,
          top: -14,
          left: -38,
          background: "linear-gradient(90.48deg, #00275E 44.2%, rgba(1, 61, 145, 0) 96.01%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pl-[30px] pr-[60px] py-[56px] lg:px-[100px] lg:py-0 max-w-[1440px] mx-auto">
        <div className="max-w-[463px] flex flex-col gap-8 lg:gap-0">
          {/* Title + Description + Check items */}
          <div className="flex flex-col gap-4 lg:gap-0">
            {/* Title + Description */}
            <div className="flex flex-col gap-3 lg:gap-0">
              <h1 className="text-[26px] lg:text-[38px] font-bold leading-[1.3] text-white">
                Com azulzinha você pode muito mais.
              </h1>

              <p className="text-[16px] lg:text-[18px] leading-[1.4] text-white lg:mt-4">
                Gestão simplificada, segurança, mais vendas e pagamentos rápidos com
                a azulzinha.
              </p>
            </div>

            <ul className="flex flex-col gap-2 pr-[70px] lg:pr-0 lg:mt-6">
              {checkItems.map((item) => (
                <li key={item} className="flex items-start gap-2 lg:items-center lg:gap-4">
                  <ArrowIcon width={20} height={20} />
                  <span className="text-[15px] lg:text-[16px] leading-[1.4] text-white">
                    {item.includes("1 dia útil") ? (
                      <>
                        {item.replace("1 dia útil", "").trim()} {" "}
                        <span className="text-laranja">1 dia útil</span>
                      </>
                    ) : (
                      item
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#"
            className="self-start rounded-[6px] px-[17px] py-[10px] text-[15.8px] lg:text-[16px] text-white text-center cursor-pointer bg-linear-to-b from-laranja-claro to-laranja lg:mt-12"
          >
            Peça sua azulzinha
          </a>
        </div>
      </div>
    </section>
  );
}
