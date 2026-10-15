import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { asset } from "@/lib/assets";
import { VR_CADASTRO_URL, VR_PORTAL_LOGIN_URL } from "@/lib/vr";
import TrackedAnchor from "@/components/shared/TrackedAnchor";

interface StartCard {
  icon: string;
  title: string;
  body: ReactNode;
}

const contactCards: StartCard[] = [
  {
    icon: "/images/bandeiras-vouchers/icone-telefone.png",
    title: "Por telefone",
    body: (
      <div className="flex flex-col gap-4">
        <p>
          Capitais e Regiões Metropolitanas{" "}
          <span className="whitespace-nowrap">4004-4938</span>
        </p>
        <p>
          Demais localidades <span className="whitespace-nowrap">0800-596-3838</span>
        </p>
      </div>
    ),
  },
  {
    icon: "/images/bandeiras-vouchers/icone-note-live.png",
    title: "Pelo site",
    body: (
      <div className="flex flex-col gap-4">
        <p>
          Para habilitar a VR na azulzinha você precisa primeiro realizar o credenciamento no
          <br />
          <a href={VR_CADASTRO_URL} target="_blank" rel="noopener noreferrer" className="text-azul underline">
            Portal VR
          </a>
          .
        </p>
        <p>
          Se você já aceita VR, acesse o{" "}
          <a href={VR_PORTAL_LOGIN_URL} target="_blank" rel="noopener noreferrer" className="text-azul underline">
            Portal
          </a>{" "}
          com o seu login e senha cadastrados junto à VR.
        </p>
      </div>
    ),
  },
  {
    icon: "/images/bandeiras-vouchers/icone-agenda-live.png",
    title: "Prazos",
    body: (
      <div className="flex flex-col gap-4">
        <p>Credenciamento: 5 dias úteis</p>
        <p>Habilitação: 5 dias úteis</p>
      </div>
    ),
  },
];

function Card({ icon, title, body }: StartCard) {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="flex items-center justify-center gap-4">
        <Image src={asset(icon)} alt="" width={40} height={40} className="w-10 h-10 object-contain" />
        <span className="text-[16px] lg:text-[18px] leading-[1.4] text-azul">{title}</span>
      </div>
      <div className="text-[16px] lg:text-[18px] leading-[1.4] text-black">{body}</div>
    </div>
  );
}

export default function QrCodeStartSection() {
  return (
    <section id="ancora" className="bg-[#F2F2F2] scroll-mt-6">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20">
        <header className="text-center max-w-[860px] mx-auto">
          <h2 className="section-title text-azul">
            Para vender com VR benefícios na azulzinha, comece por aqui
          </h2>
          <p className="mt-4 text-[16px] lg:text-[18px] leading-[1.4] text-black">
            Saiba como aceitar VR Benefícios na sua azulzinha e comece a oferecer pagamentos por QR Code, sem cartão e sem contato físico.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mt-12">
          {contactCards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>

        <p className="text-center text-[16px] lg:text-[18px] leading-[1.4] text-black mt-12 lg:mt-16">
          Se você já tem cadastro na VR Benefícios, são duas as opções de habilitação:
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-[980px] mx-auto mt-12">
          <Card
            icon="/images/bandeiras-vouchers/circle-row.png"
            title="Habilitação automática"
            body={
              <div className="flex flex-col gap-4">
                <p>
                  Para quem já possui a bandeira VR na maquininha de outro adquirente, a habilitação na azulzinha agora é automática*.
                </p>
                <p>*Para credenciamentos realizados a partir de 10 de março de 2023</p>
              </div>
            }
          />
          <Card
            icon="/images/bandeiras-vouchers/mobile-app.png"
            title="App da azulzinha*"
            body={
              <div className="flex flex-col gap-4">
                <p>
                  No menu principal, clique em Serviços &gt; Consultar &gt; Bandeiras. A bandeira VR será exibida na tela do{" "}
                  <Link href="/app" className="text-azul underline">
                    aplicativo
                  </Link>
                  ** para você habilitar.
                </p>
                <p>
                  *Disponível para credenciamentos realizados a partir de 15 de abril de 2023 **Opção válida para CNAES específicos.
                </p>
              </div>
            }
          />
        </div>

        <div className="flex justify-center mt-12 lg:mt-16">
          <TrackedAnchor
            href="/bandeiras-vouchers"
            kind="cta"
            name="Mais sobre Bandeiras e Vouchers"
            location="cta-section"
            className="inline-block bg-azul text-white text-center text-[16px] leading-6 px-5 py-[7px] rounded-[4px] border-[1.5px] border-azul"
          >
            Mais sobre Bandeiras e Vouchers
          </TrackedAnchor>
        </div>
      </div>
    </section>
  );
}
