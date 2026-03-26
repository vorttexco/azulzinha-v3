import Image from "next/image";
import { asset } from "@/lib/assets";

export default function CloverFullImageSection() {
  return (
    <section className="relative w-full h-[250px] lg:h-[594px] overflow-hidden">
      <Image
        src={asset("/images/clover/full-image-5e4c46.png")}
        alt="Clover em uso"
        fill
        className="object-cover"
      />
    </section>
  );
}
