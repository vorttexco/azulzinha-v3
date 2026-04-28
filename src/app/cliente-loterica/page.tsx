import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import Image from "next/image";
import { asset } from "@/lib/assets";
import FeatureSection from "@/components/shared/FeatureSection";
import BlueCta from "@/components/shared/BlueCta";
import Footer from "@/components/shared/Footer";

const bandeiras = [
    { src: "/images/bandeiras-vouchers/elo.png", alt: "Elo", w: "w-23.25", h: "h-7.5" },
    { src: "/images/bandeiras-vouchers/mastercard.png", alt: "Mastercard", w: "w-[61px]", h: "h-[39px]" },
    { src: "/images/bandeiras-vouchers/visa.png", alt: "Visa", w: "w-23.25", h: "h-7.5" },
];

export default function Lotericas() {
    return (
        <main>
            <Navbar />
            <HeroSection
                title="Pague boletos, jogos e contas com seu cartão de crédito ou débito"
                description="Agora as Lotéricas aceitam os cartões Elo, Mastercard e Visa de todos os bancos."
                checkItems={[]}
                buttonText="Saiba mais"
                backgroundImage="/images/hero-backgrounds/lotericas.png"
                mobileBackgroundImage="/images/hero-backgrounds/lotericas.png"
                mobileImageClassName="object-[60%_20%]"
                logoImage="/images/conveniencia/lotericalogo.png"
                logoWidth={196}
                logoHeight={51}
            />
            <section className="bg-white">
                <div className="max-w-360 mx-auto px-7.5 lg:px-25 pt-20 flex justify-center">
                    <div className="flex flex-wrap justify-center gap-20.25">
                        {bandeiras.map((b) => (
                            <div key={b.alt} className={`relative ${b.w} ${b.h} shrink-0`}>
                                <Image src={asset(b.src)} alt={b.alt} fill className="object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <FeatureSection
                title="Experimente o Serviço de Conveniência da azulzinha"
                paragraphs={[
                    "No débito ou no crédito, seja qual for o seu banco, agora você já pode usar seu cartão para apostar nas Loterias CAIXA e resolver todos os compromissos do mês num único lugar.",
                    "Com o novo Serviço de Conveniência*, os cartões das bandeiras Elo, Mastercard e Visa agora são aceitos em toda a rede Lotérica do Brasil.",
                ]}
                image="/images/conveniencia/lotericas-feature.png"
                imageAlt="Serviço de Conveniência Lotéricas"
                cardWidth="605px"
                cardHeight="398px"
                cardBorderRadius="rounded-[20px]"
                hideCard
                bgColor="bg-white"
                paddingClassName="pt-14 lg:pt-27.5 pb-10 lg:pb-10"
            />
            <FeatureSection
                title="Concentre as contas do mês na Lotérica"
                paragraphs={[
                    "Concentre as contas do mês na Lotérica confira os pagamentos que você já pode fazer com cartão em qualquer Lotérica:",
                ]}
                listItems={[
                    "Jogos",
                    "Água",
                    "Luz",
                    "Telefone",
                    "Demais convênios",
                    "Boletos variados*",
                ]}
                image="/images/conveniencia/lotericas-feature2.png"
                imageAlt="Concentre as contas do mês na Lotérica"
                cardWidth="605px"
                cardHeight="398px"
                cardBorderRadius="rounded-[20px]"
                hideCard
                reverse
                paddingClassName="pt-10 lg:pt-10 pb-[55px] lg:pb-[55px]"
            />


            {/* Benefícios */}
            <section className="bg-white">
                <div className="max-w-360 mx-auto px-7.5 lg:px-25 pt-13.75 pb-14 lg:pb-20 flex flex-col items-center gap-10 lg:gap-15">
                    <h2 className="section-title text-azul text-center">Benefícios do Serviço de Conveniência</h2>
                    <div className="flex flex-wrap justify-center gap-7.5">
                        {[
                            { icon: "/images/conveniencia/1.png", title: "Comodidade", desc: "Aproveite que sempre tem uma Lotérica por perto que aceita seu cartão" },
                            { icon: "/images/conveniencia/2.png", title: "Segurança", desc: "Você não precisa mais levar dinheiro em espécie, só o cartão" },
                            { icon: "/images/conveniencia/3.png", title: "Agilidade", desc: "Ganhe tempo pagando tudo que você precisa de uma só vez" },
                            { icon: "/images/conveniencia/4.png", title: "Praticidade", desc: "Simplifique a organização financeira concentrando os pagamentos no crédito" },
                        ].map((card) => (
                            <div key={card.title} className="flex flex-col items-center justify-center gap-4 p-6 border border-[#F1F1F1] rounded-[30px] shadow-[0px_4px_10px_0px_#00000014] w-71.75 h-71.75 shrink-0">
                                <div className="relative w-12 h-12 shrink-0">
                                    <Image src={asset(card.icon)} alt={card.title} fill className="object-contain" />
                                </div>
                                <p className="text-[22px] leading-[1.3] text-azul text-center">{card.title}</p>
                                <p className="text-[14px] leading-[1.4] text-black text-center">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Atendimento */}
            <section className="bg-white">
                <div className="max-w-360 mx-auto px-7.5 lg:px-25  flex flex-col items-center gap-6">
                    <h2 className="section-title text-azul text-center">
                        É cliente da Lotérica e precisa de atendimento?
                    </h2>
                    <a href="#" className="btn-laranja">Ligue para 3003-4655</a>
                </div>
            </section>

            <BlueCta
                title="Encontre uma Lotérica"
                description="Localize o ponto de atendimento mais próximo de você."
                buttonText="Localizar"
            />

            {/* Disclaimer */}
            <section className="bg-white">
                <div className="max-w-360 mx-auto px-7.5 lg:px-25 pb-14 lg:pb-20">
                    <p className="text-[14px] leading-[1.4] text-cinza text-center">
                        *Pagamento com cartões de débito e crédito de contas de água/luz/telefone, boletos, jogos e demais produtos. Débito CAIXA e BNB permanecem por meio da função saque. *Não é permitido o uso do cartão de crédito para o pagamento de faturas de cartão de crédito. Serviço de Conveniência Débito: 1,08%. Serviço de Conveniência Crédito: 2,95%.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
