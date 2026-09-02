import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";

export default function NotFoundContent() {
  return (
    <section className="relative w-full bg-white">
      <div className="relative w-full">
        <Image
          src={asset("/images/not-found/tomada.png")}
          alt=""
          width={1920}
          height={1002}
          className="w-full h-auto"
          priority
        />
        <div className="relative z-10 -mt-10 flex flex-col items-center px-[30px] pb-8 text-center lg:absolute lg:inset-x-0 lg:top-[58%] lg:mt-0 lg:pb-0">
          <h1 className="mb-2 text-[24px] font-semibold leading-[1.2] text-[#7C7C7C] lg:leading-[53px]">
            Sentimos muito
          </h1>
          <p className="mb-4 text-[20px] leading-[1.4] text-[#7C7C7C]">
            A página que tentou acessar
            <br />
            não está disponível
          </p>
          <Link href="/" className="btn-laranja inline-block min-w-[200px]">
            Ir para a Home
          </Link>
        </div>
      </div>

      <div className="pointer-events-none -mb-[75px] flex justify-center px-[30px] lg:px-0">
        <Image
          src={asset("/images/not-found/404.png")}
          alt=""
          width={1168}
          height={389}
          className="h-auto w-full max-w-[720px]"
        />
      </div>
    </section>
  );
}
