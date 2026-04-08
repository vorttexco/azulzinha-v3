import Image from "next/image";
import { asset } from "@/lib/assets";

export default function HelpCtaSection() {
    return (
        <section className="bg-linear-to-b from-white to-[#f7f7f7] py-14 lg:py-20">
            <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px]">
                <h2 className="section-title text-azul text-center mb-10">
                    Ainda precisa de ajuda?
                </h2>

                <div className="bg-[linear-gradient(119deg,#006CAD_7%,#012B71_99%)] rounded-[30px] p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-0 items-start relative overflow-hidden">
                    {/* Zuli Image */}
                    <div className="w-[160px] lg:w-[246px] shrink-0 self-end lg:-mb-12 mx-auto lg:mx-0">
                        <Image
                            src={asset("/images/ajuda/zuli.png")}
                            alt="Zuli assistente virtual"
                            width={246}
                            height={445}
                            className="object-contain"
                        />
                    </div>

                    {/* WhatsApp Column */}
                    <div className="flex-1 lg:pl-4">
                        <h3 className="text-laranja text-[22px] leading-[1.3] mb-4">
                            Fale com a Zuli pelo WhatsApp
                        </h3>
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src={asset("/images/icon-whatsapp.svg")}
                                alt="WhatsApp"
                                width={20}
                                height={20}
                            />
                            <span className="text-white text-[18px] leading-[1.3]">
                                (11) 94147-3336
                            </span>
                        </div>
                        <p className="text-laranja text-[18px] leading-[1.3] mb-2">
                            Horário de atendimento:
                        </p>
                        <p className="text-white text-[18px] leading-[1.3]">
                            Segunda-feira a sábado,
                            <br />
                            das 8h às 20h
                            <br />
                            (exceto feriados)
                        </p>
                    </div>

                    {/* Central Telefônica Column */}
                    <div className="flex-1">
                        <h3 className="text-laranja text-[22px] leading-[1.3] mb-4">
                            Fale com a nossa Central Telefônica
                        </h3>
                        <p className="text-[#f4f4f4] text-[16px] leading-[1.3]">
                            Capital e Grande São Paulo
                        </p>
                        <p className="text-white text-[18px] leading-[1.3] mb-4">
                            3003 5365
                        </p>
                        <p className="text-[#f4f4f4] text-[16px] leading-[1.3]">
                            Demais localidades
                        </p>
                        <p className="text-white text-[18px] leading-[1.3] mb-4">
                            0800 729 5365
                        </p>
                        <p className="text-laranja text-[18px] leading-[1.3] mb-2">
                            Horário de atendimento:
                        </p>
                        <p className="text-white text-[18px] leading-[1.3]">
                            Segunda-feira a domingo,
                            <br />
                            das 8h às 22h
                            <br />
                            (exceto feriados)
                        </p>
                    </div>

                    {/* CAIXA Tem Column */}
                    <div className="flex-1">
                        <h3 className="text-laranja text-[22px] leading-[1.3] mb-4">
                            Cliente App CAIXA Tem
                        </h3>
                        <p className="text-white text-[18px] leading-[1.3] mb-6">
                            Tire suas dúvidas direto no chatbot do aplicativo.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-[17px] py-[10px] rounded-[6px] bg-[linear-gradient(179deg,#EDAC39_2%,#FC8F01_98%)] text-white text-[15.8px] leading-[24px] text-center"
                        >
                            Baixe aqui
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
