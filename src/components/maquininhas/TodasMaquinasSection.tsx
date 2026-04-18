import Image from "next/image";
import { asset } from "@/lib/assets";

export default function TodasMaquinasSection() {
  return (
    <section id="dobra" className="w-full bg-[#F4F4F4] lg:bg-white">
      <div className="max-w-[1440px] mx-auto px-0 lg:px-[100px] py-14 lg:py-[110px]">
        <div className="relative w-full max-w-[1107px] mx-auto h-[160px] lg:h-[343px] overflow-hidden lg:overflow-visible">
          {/* Decorative shapes */}
          <Image
            src={asset("/images/maquininhas/deco-gray-1.svg")}
            alt=""
            width={289}
            height={206}
            className="absolute top-[8px] left-[-20px] lg:top-[15px] lg:left-0 w-[145px] h-[103px] lg:w-[289px] lg:h-[206px]"
          />
          <Image
            src={asset("/images/maquininhas/deco-gray-2.svg")}
            alt=""
            width={289}
            height={206}
            className="absolute top-[63px] left-[-2px] lg:top-[126px] lg:left-[35px] w-[145px] h-[103px] lg:w-[289px] lg:h-[206px]"
          />
          <Image
            src={asset("/images/maquininhas/deco-blue.svg")}
            alt=""
            width={318}
            height={227}
            className="absolute top-[58px] right-[50px] lg:top-[116px] lg:left-[631px] lg:right-auto w-[159px] h-[114px] lg:w-[318px] lg:h-[227px]"
          />
          <Image
            src={asset("/images/maquininhas/deco-orange.svg")}
            alt=""
            width={382}
            height={273}
            className="absolute top-[1px] right-[-10px] lg:top-[3px] lg:left-[725px] lg:right-auto w-[191px] h-[137px] lg:w-[382px] lg:h-[273px]"
          />
          {/* Product image - all machines */}
          <div className="relative w-[85%] h-full mx-auto lg:absolute lg:top-0 lg:left-[108px] lg:w-[841px] lg:h-[324px] lg:mx-0">
            <Image
              src={asset("/images/maquininhas/todas-maquinas.png")}
              alt="Todas as maquininhas azulzinha"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
