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
  bgColor?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function FeatureSection({
  title,
  paragraphs,
  image,
  imageAlt,
  imageClassName = "object-contain",
  imageWidth,
  imageHeight,
  imageWidthMobile,
  imageHeightMobile,
  bgColor = "bg-white",
  buttonText,
  buttonHref = "#",
}: FeatureSectionProps) {
  const hasCustomSize = imageWidth && imageHeight;
  const hasCustomSizeMobile = imageWidthMobile && imageHeightMobile;

  return (
    <section className={bgColor}>
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-[110px] flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-[78px]">
        {/* Text content - always on top (mobile) / left (desktop) */}
        <div className="flex flex-col gap-6 lg:w-[537px] shrink-0">
          <div className="flex flex-col gap-4">
            <h2 className="section-title text-azul">
              {title}
            </h2>
            {paragraphs.map((p, i) => (
              <p key={i} className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
                {p}
              </p>
            ))}
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
          <div className="relative w-full lg:w-151.25 h-67.5 lg:h-83.5 flex items-center justify-center">
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
