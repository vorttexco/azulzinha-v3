"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { acceptCookieConsent, hasCookieConsent } from "@/lib/cookies";

const linkClass = "text-azul underline";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!hasCookieConsent()) setIsVisible(true);
  }, []);

  function handleAccept() {
    acceptCookieConsent();
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies e privacidade"
      className="fixed bottom-0 z-999 flex w-full items-center bg-[#e4e2e2] px-[25px] py-[15px] max-[800px]:mt-0 max-[800px]:mr-[5px] max-[800px]:mb-[5px] max-[800px]:ml-[2.5%] max-[800px]:block max-[800px]:w-[95%] max-[800px]:px-[5px] max-[800px]:py-5"
    >
      <div className="mx-[10px] my-[5px] flex-1">
        <p className="text-[16px] leading-[1.4] text-black mb-3">
          Confira nosso Aviso de Privacidade.{" "}
          <Link href="/politica-de-privacidade" className={linkClass}>
            Clique aqui
          </Link>{" "}
          para consultar e entender como realizamos o tratamento dos seus dados pessoais.
        </p>
        <p className="text-[16px] leading-[1.4] text-black">
          Usamos cookies e outras tecnologias para melhorar sua experiência com nossos serviços e
          ofertar nossos produtos e serviços de acordo com seus interesses.{" "}
          <Link href="/aviso-de-cookies" className={linkClass}>
            Clique aqui
          </Link>{" "}
          para saber mais sobre cookies ou como desabilitá-los nas configurações do seu navegador.
        </p>
      </div>
      <div className="text-center">
        <button
          id="btn-entendi"
          type="button"
          className="cursor-pointer rounded-[6px] border-[1.5px] border-[#ff9400] bg-[#ff9400] px-5 py-[7px] text-center text-white hover:bg-white hover:text-[#ff9400]"
          onClick={handleAccept}
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
