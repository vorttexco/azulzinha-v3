import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = pageMetadata({
  title: "Obrigado | azulzinha da CAIXA",
  description:
    "Obrigado por entrar em contato com a azulzinha, a maquininha da CAIXA.",
  path: "/obrigado",
});

export default function ObrigadoPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-[linear-gradient(180deg,#005FAF_0%,#003D73_100%)] py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px]">
          <div className="max-w-[640px] flex flex-col gap-6 text-white">
            <h1 className="text-[38px] lg:text-[48px] font-bold leading-[1.2]">
              Obrigada!
            </h1>
            <p className="text-[18px] lg:text-[22px] leading-[1.4]">
              Recebemos seus dados e, em breve, te retornaremos.
            </p>
            <div className="pt-4">
              <Link href="/" className="btn-laranja inline-flex px-10">
                Voltar para a Home
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
