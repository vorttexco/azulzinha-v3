import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import FeatureSection from "@/components/shared/FeatureSection";
import VideoSection from "@/components/shared/VideoSection";
import Footer from "@/components/shared/Footer";
import HelpFaqSection from "@/components/help/HelpFaqSection";
import faqData from "@/app/ajuda/faqData";
import regulatoryFaqData from "@/app/ajuda/regulatoryFaqData";

export default function AjudaPage() {
    return (
        <main>
            <Navbar />
            <HeroSection
                title="Ajuda"
                description="Vídeos tutoriais e respostas às principais dúvidas."
                checkItems={[]}
                buttonText=""
                backgroundImage="/images/hero-backgrounds/ajuda-hero.png"
            />
            <FeatureSection
                title="Quer saber mais sobre a azulzinha?"
                paragraphs={[
                    "Aqui você poderá sanar suas principais dúvidas. Reunimos as perguntas mais frequentes para facilitar o seu entendimento sobre o que a azulzinha da CAIXA tem a oferecer.",
                    "Vamos juntos?",
                ]}
                cardWidth="605px"
                cardHeight="398px"
                image="/images/aplicativo_da_caixa.png"
                imageAlt="Aplicativo da CAIXA"
                imageBorderRadius="rounded-[30px]"
                hideCard
            />
            <VideoSection />
            <HelpFaqSection faqData={faqData} />
            <HelpFaqSection faqData={regulatoryFaqData} title="Assuntos regulatórios" />
            <Footer />
        </main>
    );
}
