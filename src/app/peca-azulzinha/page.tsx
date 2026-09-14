import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import FormSection from "@/components/suaazulzinha/FormSection";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = pageMetadata({
  title: "Peça azulzinha | azulzinha da CAIXA",
  description:
    "Quer solicitar sua maquininha? Preencha o formulário e receba o contato de um gerente da CAIXA para te apresentar taxas personalizadas e tirar todas as suas dúvidas.",
  path: "/peca-azulzinha",
});

export default function SuaAzulzinhaPage() {
    return (
        <main>
            <Navbar />
            <HeroSection
                title="Peça Já!"
                description="Com azulzinha você pode mais!"
                checkItems={[]}
                buttonText=""
                backgroundImage="/images/hero-backgrounds/sua-azulzinha.png"
                mobileBackgroundImage="/images/hero-backgrounds/sua-azulzinha.png"
                mobileImageClassName="object-[70%_25%]"
                productImage="/images/produtos.png"
            />
            <FormSection />
            <Footer />
        </main>
    );
}
