import Image from "next/image";
import { asset } from "@/lib/assets";

interface BlueCtaProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonHref?: string;
  icon?: string;
  iconAlt?: string;
}

export default function BlueCta({
  title,
  description,
  buttonText,
  buttonHref = "#",
  icon,
  iconAlt = "",
}: BlueCtaProps) {
  return (
    <section className="w-full py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-[28px] lg:px-[100px]">
        <div className="w-full bg-[linear-gradient(130deg,rgba(0,108,173,1)_5%,rgba(1,43,113,1)_100%)] rounded-xl lg:rounded-[30px] p-8 lg:py-12 flex flex-col items-center gap-6 relative overflow-hidden">
          {icon && (
            <Image src={asset(icon)} alt={iconAlt} width={64} height={64} className="object-contain" />
          )}
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-white text-[22px] font-normal leading-[130%] tracking-normal">
              {title}
            </p>
            {description && (
              <p className="text-white text-[15px] lg:text-[18px] leading-relaxed">
                {description}
              </p>
            )}
          </div>
          <a href={buttonHref} className="btn-laranja">
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
