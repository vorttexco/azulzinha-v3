import Image from "next/image";
import { asset } from "@/lib/assets";

const certificados = [
  { icon: "/images/pay/icon-ssl.png", label: "Certificado SSL" },
  { icon: "/images/pay/icon-pci.png", label: "Certificado PCI" },
];

export default function SeguraConfiavelSection() {
  return (
    <section className="bg-cinza-claro">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20 lg:pb-[110px] flex flex-col items-center gap-[30px] lg:gap-[60px]">
        <div className="flex flex-col items-center gap-4 lg:gap-6 max-w-[1032px] text-center">
          <h2 className="section-title text-azul">Segura e confiável</h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black whitespace-pre-line">
            {"A azulzinha pay é uma opção segura e confiável para fazer seus pagamentos,\ngarantindo que seus dados estejam sempre protegidos"}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-[133px]">
          {certificados.map((c) => (
            <div key={c.label} className="flex flex-col items-center gap-6 w-[147px]">
              <Image
                src={asset(c.icon)}
                alt=""
                width={80}
                height={80}
                className="shrink-0"
              />
              <p className="text-[16px] lg:text-[18px] leading-[1.4] text-azul text-center">
                {c.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
