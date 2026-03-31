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
  cardBorderRadius?: string;
  imageBorderRadius?: string;
  hideCard?: boolean;
  paddingClassName?: string;
}

export default function FeatureSection({
  title,
  paragraphs = [],
  image,
  imageAlt,
  imageClassName = "object-cover",
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
  cardBorderRadius = "rounded-[20px]",
  imageBorderRadius = "",
  hideCard = false,
  paddingClassName = "py-14 lg:py-27.5",
}: FeatureSectionProps) {
  const hasCustomSize = imageWidth && imageHeight;
  const hasCustomSizeMobile = imageWidthMobile && imageHeightMobile;
  const roundedClass = imageBorderRadius || cardBorderRadius;

  return (
    <section className={bgColor}>
      <div className={`max-w-360 mx-auto px-7.5 lg:px-25 ${paddingClassName} flex flex-col lg:justify-between lg:items-center gap-10 lg:gap-19.5 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
        {/* Text content */}
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

          {buttonText && (
            <a href={buttonHref} className="btn-laranja self-start hidden lg:inline-flex">
              {buttonText}
            </a>
          )}
        </div>

        {/* Image + mobile button wrapper */}
        <div className="flex flex-col gap-6 lg:gap-0 w-full max-w-xl self-center lg:w-auto">
          <div
            className="relative w-full lg:w-(--card-w) lg:h-(--card-h) flex items-center justify-center"
            style={{ '--card-w': cardWidth, '--card-h': cardHeight } as React.CSSProperties}
          >
            {hideCard ? (
              /* No card — image fills container with border radius */
              <div className={`relative w-full aspect-3/2 lg:aspect-auto lg:w-(--card-w) lg:h-(--card-h) overflow-hidden ${roundedClass}`}
                style={{ '--card-w': cardWidth, '--card-h': cardHeight } as React.CSSProperties}
              >
                <Image
                  src={asset(image)}
                  alt={imageAlt}
                  fill
                  className={imageClassName}
                />
              </div>
            ) : (
              <>
                {/* White card with shadow */}
                <div className={`relative w-full h-67.5 lg:w-full lg:h-full bg-white ${cardBorderRadius} shadow-[0px_4px_10px_0px_#00000014]`} />

                {/* Mobile image */}
                {hasCustomSizeMobile ? (
                  <div
                    className={`absolute z-10 lg:hidden overflow-hidden ${imageBorderRadius}`}
                    style={{ width: imageWidthMobile, height: imageHeightMobile }}
                  >
                    <Image src={asset(image)} alt={imageAlt} fill className={imageClassName} />
                  </div>
                ) : (
                  <div className={`absolute inset-0 z-10 lg:hidden overflow-hidden ${imageBorderRadius}`}>
                    <Image src={asset(image)} alt={imageAlt} fill className={imageClassName} />
                  </div>
                )}

                {/* Desktop image */}
                {hasCustomSize ? (
                  <div
                    className={`absolute z-10 hidden lg:block overflow-hidden ${imageBorderRadius}`}
                    style={{ width: imageWidth, height: imageHeight }}
                  >
                    <Image src={asset(image)} alt={imageAlt} fill className={imageClassName} />
                  </div>
                ) : (
                  <div className={`absolute inset-0 z-10 hidden lg:block overflow-hidden ${imageBorderRadius}`}>
                    <Image src={asset(image)} alt={imageAlt} fill className={imageClassName} />
                  </div>
                )}
              </>
            )}
          </div>

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
