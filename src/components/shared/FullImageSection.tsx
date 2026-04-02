import Image from "next/image";
import { asset } from "@/lib/assets";

interface FullImageSectionProps {
  image?: string;
  imageAlt?: string;
  heightMobile?: string;
  heightDesktop?: string;
}

export default function FullImageSection({
  image = "/images/clover/full-image-5e4c46.png",
  imageAlt = "Clover em uso",
  heightMobile = "h-[250px]",
  heightDesktop = "lg:h-[594px]",
}: FullImageSectionProps) {
  return (
    <section className={`relative w-full ${heightMobile} ${heightDesktop} overflow-hidden`}>
      <Image
        src={asset(image)}
        alt={imageAlt}
        fill
        className="object-cover"
      />
    </section>
  );
}
