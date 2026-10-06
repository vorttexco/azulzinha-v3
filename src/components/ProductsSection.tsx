"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { asset } from "@/lib/assets";
import { pushProductGtm } from "@/lib/analytics";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import ArrowIcon from "@/components/shared/ArrowIcon";

const products = [
  {
    name: "Clover Flex",
    description: "Para atender no balcão, na mesa ou em qualquer lugar",
    image: asset("/images/product-clover-flex.png"),
    href: "/clover",
  },
  {
    name: "Clover Mini",
    description: "Para ter um PDV perfeito para qualquer espaço",
    image: asset("/images/product-clover-mini.png"),
    href: "/clover",
  },
  {
    name: "azulzinha smart",
    description: "Para centralizar e simplificar a gestão financeira",
    image: asset("/images/product-smart.png"),
    href: "/azulzinhasmart",
    manualHref: "https://azulzinhadacaixa.com.br/midias/azulzinhasmart.pdf",
  },
  {
    name: "azulzinha pro",
    description: "Para levar a maquininha até o cliente",
    image: asset("/images/product-pro.png"),
    href: "/maquininhas/pro",
    manualHref: "/maquininhas/pro#manual-section",
  },
  {
    name: "azulzinha TEF",
    description: "Para negócios com grande volume de transações",
    image: asset("/images/product-tef.png"),
    href: "/maquininhas/tef",
    manualHref: "https://azulzinhadacaixa.com.br/midias/LO_Manual_Azulzinha_Tef_Lane_3000_23_MARC_23_v1.pdf",
  },
  {
    name: "azulzinha aproxima",
    description: "Para transformar um celular ou tablet em maquininha",
    image: asset("/images/product-aproxima.png"),
    href: "/azulzinha-aproxima",
    manualHref: "https://azulzinhadacaixa.com.br/midias/manual_azulzinha_aproxima.pdf",
  },
];

export default function ProductsSection() {
  const pageName = usePathname();
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true }));
  const [emblaRef] = useEmblaCarousel(
    { align: "center", containScroll: "trimSnaps", dragFree: true },
    [autoplay.current, WheelGesturesPlugin()]
  );

  return (
    <section className="w-full bg-white py-14 lg:py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] text-center">
        <h2 className="section-title text-azul">
          Escolha a azulzinha ideal para o seu <span className="text-[#FC8F01]">negócio</span>
        </h2>
        <Link
          href="/maquininhas"
          className="mt-4 inline-flex items-center gap-2 rounded-[6px] px-[17px] py-[10px] text-[16px] text-[#006CAD] cursor-pointer hover:bg-[#006CAD]/5 transition-colors"
          onClick={() =>
            pushProductGtm({
              name: "Peça a sua azulzinha",
              location: "home-products",
              href: "/maquininhas",
              pageName,
            })
          }
        >
          Peça a sua azulzinha
          <ArrowIcon />
        </Link>
      </div>

      <div className="max-w-[1440px] mx-auto w-full overflow-hidden mt-10 select-none" ref={emblaRef}>
        <div className="flex pl-[30px] lg:pl-[100px] pb-4 gap-6 items-end">
          {products.map((product) => (
            <div key={product.name} className="shrink-0 w-[294px] flex flex-col last:mr-7.5 lg:last:mr-25">


              <div className="relative h-[280px] w-full flex items-end justify-center z-10 mb-[-120px]">
                <Image src={product.image} alt={product.name} fill className="object-contain object-bottom" />
              </div>

              <div className="bg-white rounded-[12px] px-5 pt-[140px] pb-5 flex flex-col h-[321px] shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
                <div>
                  <h3 className="card-title text-[#006CAD]">{product.name}</h3>
                  <p className="card-text text-black mt-2">{product.description}</p>
                </div>

                <div className="mt-auto flex flex-col gap-2">
                  {product.manualHref &&
                    (product.manualHref.startsWith("http") ? (
                      <a
                        href={product.manualHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-link inline-flex items-center gap-2 text-azul cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() =>
                          pushProductGtm({
                            name: `${product.name} — manual`,
                            location: "home-products",
                            href: product.manualHref ?? "",
                            pageName,
                          })
                        }
                      >
                        Baixe o manual
                        <ArrowIcon />
                      </a>
                    ) : (
                      <Link
                        href={product.manualHref}
                        className="card-link inline-flex items-center gap-2 text-azul cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() =>
                          pushProductGtm({
                            name: `${product.name} — manual`,
                            location: "home-products",
                            href: product.manualHref ?? "",
                            pageName,
                          })
                        }
                      >
                        Baixe o manual
                        <ArrowIcon />
                      </Link>
                    ))}
                  <Link
                    href={product.href}
                    className="card-link inline-flex items-center gap-2 text-azul cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() =>
                      pushProductGtm({
                        name: product.name,
                        location: "home-products",
                        href: product.href,
                        pageName,
                      })
                    }
                  >
                    Saiba mais
                    <ArrowIcon />
                  </Link>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section >
  );
}