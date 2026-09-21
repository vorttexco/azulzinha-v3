import Image from "next/image";
import { asset } from "@/lib/assets";

const anchors = [
  {
    href: "#manuais",
    label: "Manuais",
    icon: "/images/bem-vindo-a-clover/icon-manuais.svg",
  },
  {
    href: "#portal",
    label: "Portal Clover",
    icon: "/images/bem-vindo-a-clover/icon-portal.svg",
  },
  {
    href: "#apps",
    label: "Guia de automações",
    icon: "/images/bem-vindo-a-clover/icon-automacoes.svg",
  },
  {
    href: "#suporte",
    label: "Suporte",
    icon: "/images/bem-vindo-a-clover/icon-suporte.svg",
  },
];

export default function WelcomeHeroSection() {
  return (
    <section className="relative w-full min-h-[560px] lg:min-h-[650px] overflow-hidden">
      <Image
        src={asset("/images/bem-vindo-a-clover/hero-bg.jpg")}
        alt=""
        fill
        className="object-cover object-center hidden lg:block"
        priority
      />
      <Image
        src={asset("/images/bem-vindo-a-clover/hero-bg-mobile.png")}
        alt=""
        fill
        className="object-cover object-top lg:hidden"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#FFFFFF_18%,rgba(255,255,255,0)_55%)] hidden lg:block" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFFFF_32%,rgba(255,255,255,0.72)_48%,rgba(255,255,255,0)_70%)] lg:hidden" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-10 lg:py-[80px]">
        <div className="max-w-[520px] flex flex-col gap-4">
          <p className="text-[16px] leading-[1.4] text-[#3C3C3C]">
            A azulzinha tem o prazer de apresentar a Clover
          </p>
          <h1 className="text-[26px] lg:text-[38px] font-bold italic leading-[1.3] text-azul">
            Tudo pronto para começar?
          </h1>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
            A azulzinha apresenta Clover e inúmeros benefícios para você
            simplificar seu dia a dia, melhorar sua operação e encantar seus
            clientes. Conheça tudo o que a azulzinha com a Clover tem a
            oferecer:
          </p>

          <div className="grid grid-cols-2 gap-3 mt-2">
            {anchors.map((anchor) => (
              <a
                key={anchor.href}
                href={anchor.href}
                className="flex items-center gap-3 border border-azul text-azul rounded-[8px] px-4 py-3 text-[14px] lg:text-[16px] hover:bg-azul hover:text-white group transition-colors"
              >
                <Image
                  src={asset(anchor.icon)}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain group-hover:brightness-0 group-hover:invert"
                />
                {anchor.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
