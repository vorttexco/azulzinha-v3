import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import FormSection from "@/components/suaazulzinha/FormSection";
import Footer from "@/components/shared/Footer";

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
