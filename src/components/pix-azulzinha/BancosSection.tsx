import Image from "next/image";
import { asset } from "@/lib/assets";

interface BancoItem {
  logo: string;
  alt: string;
  width: number;
  height: number;
}

const defaultBancos: BancoItem[] = [
  { logo: "/images/pix-azulzinha/logo-caixa.png", alt: "Caixa Econômica Federal", width: 84, height: 19 },
  { logo: "/images/pix-azulzinha/logo-ailos.png", alt: "Ailos", width: 106, height: 36 },
  { logo: "/images/pix-azulzinha/logo-banco-do-brasil.png", alt: "Banco do Brasil", width: 145, height: 20 },
  { logo: "/images/pix-azulzinha/logo-banco-original.png", alt: "Banco Original", width: 111, height: 42 },
  { logo: "/images/pix-azulzinha/logo-bradesco.png", alt: "Bradesco", width: 146, height: 48 },
  { logo: "/images/pix-azulzinha/logo-itau.png", alt: "Itaú Unibanco", width: 55, height: 55 },
  { logo: "/images/pix-azulzinha/logo-mercadopago.png", alt: "Mercado Pago", width: 50, height: 50 },
  { logo: "/images/pix-azulzinha/logo-santander.png", alt: "Santander", width: 125, height: 22 },
  { logo: "/images/pix-azulzinha/logo-senff.png", alt: "Senff", width: 95, height: 52 },
  { logo: "/images/pix-azulzinha/logo-auto-site.png", alt: "Auto Site", width: 110, height: 26 },
];

interface BancosSectionProps {
  title?: string;
  bancos?: BancoItem[];
}

export default function BancosSection({
  title = "Bancos cadastrados",
  bancos = defaultBancos,
}: BancosSectionProps) {
  return (
    <section className="bg-[linear-gradient(180deg,#FFFFFF_8%,#F7F7F7_100%)]">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20 flex flex-col items-center gap-[30px] lg:gap-[60px]">
        <h2 className="section-title text-azul">{title}</h2>

        <div className="w-full flex flex-col gap-10">
          {/* Desktop: 2 rows of 5 */}
          <div className="hidden lg:flex flex-col gap-10">
            <div className="flex gap-10">
              {bancos.slice(0, 5).map((banco, i) => (
                <div
                  key={i}
                  className="flex-1 h-[100px] flex items-center justify-center bg-white border border-[#F1F1F1] rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]"
                >
                  <Image
                    src={asset(banco.logo)}
                    alt={banco.alt}
                    width={banco.width}
                    height={banco.height}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-10">
              {bancos.slice(5, 10).map((banco, i) => (
                <div
                  key={i}
                  className="flex-1 h-[100px] flex items-center justify-center bg-white border border-[#F1F1F1] rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]"
                >
                  <Image
                    src={asset(banco.logo)}
                    alt={banco.alt}
                    width={banco.width}
                    height={banco.height}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: 2 columns grid */}
          <div className="lg:hidden grid grid-cols-2 gap-x-[39px] gap-y-10">
            {bancos.map((banco, i) => (
              <div
                key={i}
                className="h-[80px] flex items-center justify-center bg-white border border-[#F1F1F1] rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)]"
              >
                <Image
                  src={asset(banco.logo)}
                  alt={banco.alt}
                  width={banco.width}
                  height={banco.height}
                  className="object-contain max-w-[80%] max-h-[50px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
