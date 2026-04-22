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
  buttonTarget?: string;
  icon?: string;
  iconAlt?: string;
  sectionClassName?: string;
  containerClassName?: string;
  contentClassName?: string;
  featureImage?: string;
  featureImageAlt?: string;
  storeBadges?: StoreBadge[];
  reverseOnMobile?: boolean;
}

export default function BlueCta({
  title,
  description,
  buttonText,
  buttonHref = "#",
  buttonTarget,
  icon,
  iconAlt = "",
  sectionClassName = "",
  containerClassName = "",
  contentClassName = "",
  featureImage,
  featureImageAlt = "",
  storeBadges,
  reverseOnMobile = false,
}: BlueCtaProps) {
  const buttonRel = buttonTarget === "_blank" ? "noopener noreferrer" : undefined;
  const hasFeatureLayout = !!featureImage;
  const isCenteredBadges = !featureImage && !!storeBadges?.length;

  return (
    <section className={`w-full py-14 lg:py-20 ${sectionClassName}`}>
      <div className={`max-w-[1440px] mx-auto px-[28px] lg:px-[100px] ${containerClassName}`}>
        <div className={`w-full bg-[linear-gradient(130deg,rgba(0,108,173,1)_5%,rgba(1,43,113,1)_100%)] rounded-xl lg:rounded-[30px] relative overflow-hidden ${hasFeatureLayout
          ? `flex ${reverseOnMobile ? "flex-col-reverse" : "flex-col"} lg:flex-row items-center lg:items-stretch`
          : isCenteredBadges
            ? "flex flex-col items-center gap-6 p-8 lg:py-14 lg:px-[100px]"
            : "p-8 lg:py-12 flex flex-col items-center gap-6"
          } ${contentClassName}`}>
          {hasFeatureLayout ? (
            <>
              <div className="flex flex-col gap-6 justify-center px-8 pb-8 pt-4 lg:p-12 lg:w-1/2">
                <p className="text-white text-[22px] lg:text-[38px] font-normal leading-[130%]">
                  {title}
                </p>
                {description && (
                  <p className="text-white text-[15px] lg:text-[18px] leading-relaxed">
                    {description}
                  </p>
                )}
                {storeBadges && storeBadges.length > 0 && (
                  <div className="flex flex-wrap items-center gap-4">
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
                  <a href={buttonHref} target={buttonTarget} rel={buttonRel} className="btn-laranja self-start">
                    {buttonText}
                  </a>
                )}
              </div>
              {featureImage && (
                <div className="relative w-full h-[260px] lg:h-auto lg:min-h-[340px] lg:w-1/2 flex items-center justify-center">
                  <div className="absolute w-[270px] h-[209px] lg:w-[90%] lg:h-[72%] bg-azul rounded-[20px] shadow-[0px_4px_10px_0px_#00000014] top-[30px] lg:top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2" />
                  <div className="absolute z-10 w-[203px] h-[209px] lg:w-[75%] lg:h-[95%] top-[30px] lg:top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2">
                    <Image
                      src={asset(featureImage)}
                      alt={featureImageAlt}
                      width={442}
                      height={455}
                      className="object-contain w-full h-full"
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
                <a href={buttonHref} target={buttonTarget} rel={buttonRel} className="btn-laranja">
                  {buttonText}
                </a>
              )}
            </>
          ) : (
            <>
              {icon && (
                <Image src={asset(icon)} alt={iconAlt} width={64} height={64} className="object-contain" />
              )}
              <div className="flex flex-col items-center gap-4 text-center max-w-[1000px]">
                <p className="text-white text-[22px] lg:text-[38px] font-normal leading-[130%] tracking-normal whitespace-pre-line">
                  {title}
                </p>
                {description && (
                  <p className="text-white text-[15px] lg:text-[18px] leading-relaxed">
                    {description}
                  </p>
                )}
              </div>
              {buttonText && (
                <a href={buttonHref} target={buttonTarget} rel={buttonRel} className="btn-laranja">
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
