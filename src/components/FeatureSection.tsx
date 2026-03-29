import Image from "next/image";
import { asset } from "@/lib/assets";

interface FeatureSectionProps {
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  imageClassName?: string;
  imageWidth?: string;
  imageHeight?: string;
  imageWidthMobile?: string;
  imageHeightMobile?: string;
  cardWidth?: string;
  cardHeight?: string;
  listItems?: string[];
  bgColor?: string;
  reverse?: boolean;
  buttonText?: string;
  buttonHref?: string;
}

export default function FeatureSection({
  title,
  paragraphs = [],
  image,
  imageAlt,
  imageClassName = "object-contain",
  imageWidth,
  imageHeight,
  imageWidthMobile,
  imageHeightMobile,
  cardWidth = "605px",
  cardHeight = "334px",
  listItems,
  bgColor = "bg-white",
  reverse = false,
  buttonText,
  buttonHref = "#",
}: FeatureSectionProps) {
  const hasCustomSize = imageWidth && imageHeight;
  const hasCustomSizeMobile = imageWidthMobile && imageHeightMobile;

  return (
    <section className={bgColor}>
      <div className={`max-w-360 mx-auto px-7.5 lg:px-25 py-14 lg:py-27.5 flex flex-col lg:justify-between lg:items-center gap-10 lg:gap-19.5 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
        {/* Text content - always on top (mobile) / left (desktop) */}
        <div className="flex flex-col gap-6 lg:w-134.25 shrink-0">
          <div className="flex flex-col gap-4">
            <h2 className="section-title text-azul text-center lg:text-left">
              {title}
            </h2>
            {paragraphs.map((p, i) => (
              <p key={i} className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center lg:text-left">
                {p}
              </p>
            ))}
            {listItems && (
              <ul className="flex flex-col gap-2">
                {listItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[16px] lg:text-[18px] leading-[1.4] text-black">
                    <span className="size-2 rounded-full bg-black shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Button on desktop only */}
          {buttonText && (
            <a href={buttonHref} className="btn-laranja self-start hidden lg:inline-flex">
              {buttonText}
            </a>
          )}
        </div>

        {/* Image + mobile button wrapper */}
        <div className="flex flex-col gap-6 lg:gap-0 w-full max-w-xl self-center lg:w-auto">
          {/* Image */}
          <div
            className="relative w-full h-67.5 lg:w-(--card-w) lg:h-(--card-h) flex items-center justify-center"
            style={{ '--card-w': cardWidth, '--card-h': cardHeight } as React.CSSProperties}
          >
            <div className="relative w-full h-full bg-white rounded-[20px] shadow-[0px_4px_10px_0px_#00000014]" />

            {/* Mobile image size */}
            {hasCustomSizeMobile ? (
              <div
                className="absolute z-10 lg:hidden"
                style={{ width: imageWidthMobile, height: imageHeightMobile }}
              >
                <Image
                  src={asset(image)}
                  alt={imageAlt}
                  fill
                  className={imageClassName}
                />
              </div>
            ) : (
              <div className="absolute inset-0 z-10 lg:hidden">
                <Image
                  src={asset(image)}
                  alt={imageAlt}
                  fill
                  className={imageClassName}
                />
              </div>
            )}

            {/* Desktop image size */}
            {hasCustomSize ? (
              <div
                className="absolute z-10 hidden lg:block"
                style={{ width: imageWidth, height: imageHeight }}
              >
                <Image
                  src={asset(image)}
                  alt={imageAlt}
                  fill
                  className={imageClassName}
                />
              </div>
            ) : (
              <div className="absolute inset-0 z-10 hidden lg:block">
                <Image
                  src={asset(image)}
                  alt={imageAlt}
                  fill
                  className={imageClassName}
                />
              </div>
            )}
          </div>

          {/* Button on mobile only - below image */}
          {buttonText && (
            <a href={buttonHref} className="btn-laranja self-center lg:hidden">
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
