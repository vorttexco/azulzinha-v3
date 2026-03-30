import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import FeatureSection from "@/components/shared/FeatureSection";
import BenefitsSection from "@/components/shared/BenefitsSection";
import Footer from "@/components/shared/Footer";
import BlueCta from "@/components/shared/BlueCta";

export default function GestaoVendasPage() {
    return (
        <main>
            <Navbar />
            <HeroSection
                title="Gestão de Vendas"
                description="No App ou no Portal, gerencie seu negócio e solicite mais serviços com apenas um clique."
                checkItems={[]}
                buttonText="Conheça"
                backgroundImage="/images/hero-backgrounds/portal-azulzinha.png"
            />
            <FeatureSection
                title="Portal da azulzinha: gestão completa do seu negócio"
                paragraphs={[]}
                listItems={[
                    "Tenha uma visão clara das suas vendas e pagamentos",
                    "Receba suas vendas de forma antecipada",
                    "Gerencie o seu negócio com um simples acesso",
                ]}
                image="/images/portal-azulzinha/bg-portal.png"
                imageAlt="Aplicativo da Azulzinha"
                imageWidth="911px"
                imageHeight="471px"
                buttonText="Assista ao vídeo"
                buttonHref="#" />
            <FeatureSection
                title="Cuide das suas vendas no Portal da azulzinha em tempo real"
                paragraphs={[
                    "No nosso novo Portal você encontra diversas informações, ferramentas e serviços para o gerenciamento e controle do seu estabelecimento.",
                ]}
                image="/images/portal-azulzinha/mockup-desktop.png"
                imageAlt="Portal da Azulzinha"
                imageWidth="736px"
                imageHeight="532px"
                cardWidth="605px"
                cardHeight="334px"
                bgColor="bg-cinza-claro"
                reverse
            />

            <BenefitsSection
                title="Vantagens de usar o Portal da azulzinha"
                textColor="text-azul"
                items={[
                    { icon: "/images/portal-azulzinha/portal1.png", text: "Administre todas as suas vendas" },
                    { icon: "/images/portal-azulzinha/portal2.png", text: "Consulte taxas e tarifas" },
                    { icon: "/images/portal-azulzinha/portal3.png", text: "Antecipe recebíveis" },
                    { icon: "/images/portal-azulzinha/portal4.png", text: "Consulte seus recebimentos futuros" },
                    { icon: "/images/portal-azulzinha/portal5.png", text: "Abra e acompanhe solicitações" },
                ]}
            />
            <BlueCta
                title="Sua azulzinha smart acabou de chegar?"
                buttonText="Leia o manual"
                icon="/images/azulzinha-smart/book-icon.png"
                iconAlt="Manual"
            />
            <Footer />
        </main>
    );
}
