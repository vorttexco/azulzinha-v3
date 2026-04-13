import Image from "next/image";
import { asset } from "@/lib/assets";

interface StoreBadge {
  image: string;
  href: string;
  alt: string;
  width?: number;
  height?: number;
}

interface BlueCtaProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  icon?: string;
  iconAlt?: string;
  sectionClassName?: string;
  containerClassName?: string;
  contentClassName?: string;
  featureImage?: string;
  featureImageAlt?: string;
  storeBadges?: StoreBadge[];
}

export default function BlueCta({
  title,
  description,
  buttonText,
  buttonHref = "#",
  icon,
  iconAlt = "",
  sectionClassName = "",
  containerClassName = "",
  contentClassName = "",
  featureImage,
  featureImageAlt = "",
  storeBadges,
}: BlueCtaProps) {
  const hasFeatureLayout = !!featureImage;
  const isCenteredBadges = !featureImage && !!storeBadges?.length;

  return (
    <section className={`w-full py-14 lg:py-20 ${sectionClassName}`}>
      <div className={`max-w-[1440px] mx-auto px-[28px] lg:px-[100px] ${containerClassName}`}>
        <div className={`w-full bg-[linear-gradient(130deg,rgba(0,108,173,1)_5%,rgba(1,43,113,1)_100%)] rounded-xl lg:rounded-[30px] relative overflow-hidden ${
          hasFeatureLayout
            ? "flex flex-col lg:flex-row items-center lg:items-stretch"
            : isCenteredBadges
              ? "flex flex-col items-center gap-6 p-8 lg:py-14 lg:px-[100px]"
              : "p-8 lg:py-12 flex flex-col items-center gap-6"
        } ${contentClassName}`}>
          {hasFeatureLayout ? (
            <>
              <div className="flex flex-col gap-6 justify-center p-8 lg:p-12 lg:w-1/2">
                <p className="text-white text-[22px] lg:text-[38px] font-normal leading-[130%]">
                  {title}
                </p>
                {description && (
                  <p className="text-white text-[15px] lg:text-[18px] leading-relaxed">
                    {description}
                  </p>
                )}
                {storeBadges && storeBadges.length > 0 && (
                  <div className="flex items-center gap-4">
                    {storeBadges.map((badge, i) => (
                      <a key={i} href={badge.href} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={asset(badge.image)}
                          alt={badge.alt}
                          width={188}
                          height={56}
                          className="h-14 w-auto"
                        />
                      </a>
                    ))}
                  </div>
                )}
                {buttonText && (
                  <a href={buttonHref} className="btn-laranja self-start">
                    {buttonText}
                  </a>
                )}
              </div>
              {featureImage && (
                <div className="relative lg:w-1/2 h-[250px] lg:h-auto flex items-end justify-center">
                  <div className="absolute bottom-0 right-8 lg:right-12 w-[80%] h-[85%] bg-azul rounded-t-[20px] shadow-[0px_4px_10px_0px_#00000014]" />
                  <div className="relative z-10 w-[60%] lg:w-[55%] h-full">
                    <Image
                      src={asset(featureImage)}
                      alt={featureImageAlt}
                      fill
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>
              )}
            </>
          ) : isCenteredBadges ? (
            <>
              <div className="flex flex-col items-center gap-4 text-center max-w-[704px]">
                <h2 className="section-title text-white">
                  {title}
                </h2>
                {description && (
                  <p className="text-white text-[16px] lg:text-[22px] leading-[1.4] max-w-[540px] whitespace-pre-line">
                    {description}
                  </p>
                )}
              </div>
              <div className="flex flex-row items-center gap-4">
                {storeBadges!.map((badge, i) => (
                  <a key={i} href={badge.href} target="_blank" rel="noopener noreferrer" className="block">
                    <Image
                      src={asset(badge.image)}
                      alt={badge.alt}
                      width={badge.width ?? 235}
                      height={badge.height ?? 70}
                      className="w-[188px] h-auto"
                    />
                  </a>
                ))}
              </div>
              {buttonText && (
                <a href={buttonHref} className="btn-laranja">
                  {buttonText}
                </a>
              )}
            </>
          ) : (
            <>
              {icon && (
                <Image src={asset(icon)} alt={iconAlt} width={64} height={64} className="object-contain" />
              )}
              <div className="flex flex-col items-center gap-2 text-center">
                <p className="text-white text-[22px] font-normal leading-[130%] tracking-normal whitespace-pre-line">
                  {title}
                </p>
                {description && (
                  <p className="text-white text-[15px] lg:text-[18px] leading-relaxed">
                    {description}
                  </p>
                )}
              </div>
              {buttonText && (
                <a href={buttonHref} className="btn-laranja">
                  {buttonText}
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
