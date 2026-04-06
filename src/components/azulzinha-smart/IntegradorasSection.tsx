"use client";

import { useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/assets";

const integradoras: { name: string; logo: string; href?: string }[] = [
  { name: "A00s", logo: "a00s-logo-cinza 1.png", href: "https://portal.a00s.com/" },
  { name: "alpino", logo: "alpino-logo-cinza 1.png" },
  { name: "Apliper Pagoo", logo: "apliper-logo-cinza 1.png", href: "https://apliper.com.br/" },
  { name: "Argo Sistemas", logo: "argo-logo-grey 1.png" },
  { name: "Arpag", logo: "app-arpa-grey 1.png", href: "https://arpasistemas.net.br/" },
  { name: "B2 Sistemas", logo: "b2-grey 1.png" },
  { name: "Bar Fácil", logo: "barfacil-grey 1.png" },
  { name: "BitBar", logo: "bitbar-logo-cinza 1.png", href: "https://www.bitbar.com.br/" },
  { name: "Bitbyte", logo: "bitbyte-grey 1.png" },
  { name: "Brajan Sistemas", logo: "brajan-grey 1.png" },
  { name: "Cash Driver", logo: "cashdriver-logo-grey 1.png" },
  { name: "CH Sistemas", logo: "logo-ch-sistemas-grey 1.png" },
  { name: "Chef Mio", logo: "chef-mio-grey 1.png" },
  { name: "CISS", logo: "ciss-cinza 1.png", href: "https://ciss.com.br/" },
  { name: "Closmaq", logo: "closmaq-logo-grey 1.png" },
  { name: "Código UP", logo: "codigoup-cinza 1.png" },
  { name: "COMANDAMOBI", logo: "comandmobi-logo-cinza 1.png", href: "https://www.poscontrole.com.br/" },
  { name: "COMPSIS", logo: "compsis-grey 1.png" },
  { name: "Compu Forte Sistemas", logo: "compuforte-grey 1.png" },
  { name: "Compumate Pay", logo: "app-compumate-grey 1.png", href: "https://www.compumate.com.br/" },
  { name: "Compusoft", logo: "compusoft-grey 1.png" },
  { name: "Connect Posto - POS", logo: "pos-logo-cinza 1.png" },
  { name: "Consfor", logo: "consfor-grey 1.png" },
  { name: "Datamais Garçom", logo: "datamais-grey 1.png", href: "https://datamais.com.br/" },
  { name: "Datanis Sistemas", logo: "datanis-grey 1.png" },
  { name: "DigiSat", logo: "digisat-logo-cinza 1.png" },
  { name: "DribionPay", logo: "dribion-grey 1.png" },
  { name: "EAPOS", logo: "logo-eapos-grey 1.png" },
  { name: "easy", logo: "easy-logo-grey 1.png" },
  { name: "ElPay", logo: "elpay-grey 1.png" },
  { name: "EPOC", logo: "epoc-grey 1.png" },
  { name: "ErgonPDV", logo: "ergon-grey 1.png" },
  { name: "ERP Unypax", logo: "unypax-grey 1.png" },
  { name: "eyemobile", logo: "eye-mobile-grey 1.png" },
  { name: "Fire Sistemas", logo: "app-firesistemas-grey 1.png" },
  { name: "Gdoor Zucchetti", logo: "gdoor-grey 1.png" },
  { name: "Idez", logo: "idez-grey 1.png" },
  { name: "Infinite POS", logo: "infinite-grey 1.png" },
  { name: "Infosoft", logo: "infosof-grey 1.png" },
  { name: "Intelidata", logo: "intelidata-grey 1.png" },
  { name: "JF System", logo: "logo-jf-system-grey 1.png", href: "https://www.jfsystem.com.br/" },
  { name: "Jump Serviços", logo: "jump-grey 1.png" },
  { name: "Lion Pay", logo: "lion-grey 1.png", href: "https://liontecnologia.com.br/" },
  { name: "Maistre", logo: "maistre-grey 1.png" },
  { name: "Master Key", logo: "masterkey_v2 1.png", href: "https://www.officesystem.com.br/" },
  { name: "Master Key", logo: "masterkey 1.png", href: "https://www.officesystem.com.br/" },
  { name: "MC Sistemas", logo: "mc-sistemas 1.png", href: "https://mcsistemas.eti.br/" },
  { name: "Metanet Pay", logo: "metanet-grey 1.png" },
  { name: "Mobility", logo: "mobility-cinza 1.png" },
  { name: "mPm+", logo: "mpm-color-grey 1.png", href: "https://www.bravil.com.br/" },
  { name: "MR PDV", logo: "mr-pdv-grey 1.png", href: "https://www.rpinfo.com.br/" },
  { name: "NCR", logo: "logo-ncr-grey 1.png" },
  { name: "OmniPDV", logo: "omni-grey 1.png", href: "https://www.nexaas.com/" },
  { name: "ONPDV", logo: "onpdv-grey 1.png" },
  { name: "Origam", logo: "origam-grey 1.png" },
  { name: "PagZilla", logo: "logo-pagzilla 1.png", href: "https://web.pagzilla.com.br/" },
  { name: "PDV Legal", logo: "pdv-legal-grey 1.png" },
  { name: "PDV MOBI", logo: "pdvmob-logo-cinza 1.png", href: "https://www.poscontrole.com.br/" },
  { name: "PDV POS", logo: "pdv-pos-grey 1.png" },
  { name: "PDV Team17", logo: "app-pdv-team17-grey 1.png", href: "https://www.team17.com.br/" },
  { name: "Pixei Pagamentos", logo: "pixei-grey 1.png", href: "https://nootech.com.br/" },
  { name: "POS Controle", logo: "pos-logo-cinza 1.png", href: "https://www.poscontrole.com.br/" },
  { name: "Posto Gestor", logo: "app-posto-gestor-grey 1.png", href: "https://www.postogestor.com.br/" },
  { name: "Prátika", logo: "Pratika-logo-cinza 1.png", href: "https://www.pratikapdv.com.br/" },
  { name: "Prioriza", logo: "prioriza-grey 1.png" },
  { name: "PSinf Pay", logo: "info-solucoes-grey 1.png" },
  { name: "Puma Sistemas", logo: "puma-sistemas-grey 1.png" },
  { name: "Queóps Bares & Restaurantes", logo: "lexsis-grey 1.png", href: "https://www.lexsis.com.br/" },
  { name: "Raffinato", logo: "raffinato-grey 1.png" },
  { name: "Relt Informática", logo: "logo-relt-grey 1.png" },
  { name: "Santa Ficha", logo: "santa-ficha-grey 1.png" },
  { name: "Serbet", logo: "serbet-grey 1.png" },
  { name: "SG Pay", logo: "sgbr-grey 1.png" },
  { name: "Sismec", logo: "sismec-grey 1.png" },
  { name: "Sistema Pallas", logo: "pallas-grey 1.png" },
  { name: "Skytef", logo: "skytef-cinza 1.png", href: "https://www.fiserv.com.br/suporte-skytef/" },
  { name: "Smart POS", logo: "smartpos-grey 1.png", href: "https://www.smartpos.net.br/" },
  { name: "Softcom Smart", logo: "softcom-grey 1.png" },
  { name: "Softplus", logo: "softplus-cinza 1.png", href: "https://spi.com.br/" },
  { name: "SOS Soluções", logo: "sos-grey 1.png" },
  { name: "SousaVenda", logo: "app-souza-grey 1.png", href: "https://www.sousaautomacao.com.br/" },
  { name: "Suporte", logo: "suporte-logo-cinza 1.png", href: "https://suporte.rs/site/" },
  { name: "Tacto Sistemas", logo: "tacto-grey 1.png" },
  { name: "Tech Posto", logo: "tech-posto-grey 1.png" },
  { name: "THR Softwares", logo: "thr-grey 1.png", href: "https://www.thrsoftwares.com.br/" },
  { name: "Trade System", logo: "app-trade-system-grey 1.png", href: "https://www.compumate.com.br/" },
  { name: "UNIO", logo: "app-unio-grey 1.png", href: "https://www.uniotecnologia.com/" },
  { name: "Vedas Sistemas", logo: "vedas-grey 1.png" },
  { name: "VucaPOS", logo: "vuca-grey 1.png", href: "https://www.vucasolution.com.br/" },
  { name: "webPosto", logo: "webposto 1.png", href: "https://www.webposto.com.br/" },
  { name: "WebyAPP", logo: "testo-grey 1.png", href: "https://testosistemas.com.br/" },
  { name: "Wesa SmartPDV", logo: "wesa-grey 1.png", href: "https://wesa.com.br/" },
  { name: "Windel POS", logo: "windel-grey 1.png" },
  { name: "Youzoom", logo: "youzoom-grey 1.png", href: "https://www.youzoom.com.br/" },
  { name: "zerofila", logo: "pipeor-grey 1.png", href: "https://zerofila.com.br/" },
  { name: "ZPOS", logo: "zpos-cinza 1.png" },
];

export default function IntegradorasSection() {
  const [expanded, setExpanded] = useState(false);

  // Mobile: 3 rows × 2 cards = 3*130 + 2*16 = 422px
  // Desktop: 4 rows = 4*130 + 3*16 = 568px

  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-16">
        <div className="flex flex-col items-center gap-6 lg:gap-8">
          <h2 className="section-title text-azul">
            Integradoras de Apps
          </h2>

          <div className="relative w-full">
            <div
              className={`flex flex-wrap justify-center gap-4 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                expanded ? "max-h-[5000px]" : "max-h-[422px] lg:max-h-[568px]"
              }`}
            >
              {integradoras.map((item, i) => {
                const cardClass = "w-[157.5px] lg:w-[193px] h-[130px] rounded-[12px] border border-[#F1F1F1] bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center gap-2 p-4 -rotate-[0.32deg]";
                const content = (
                  <>
                    {item.logo && (
                      <div className="relative w-full h-[45px] shrink-0">
                        <Image
                          src={asset(`/images/azulzinha-smart/${item.logo}`)}
                          alt={item.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                    <span className="font-['CAIXA_Std'] text-[14px] leading-[130%] text-center text-[#666666]">
                      {item.name}
                    </span>
                  </>
                );

                return item.href ? (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={i} className={cardClass}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Fade gradient - only when collapsed */}
            {!expanded && (
              <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-[linear-gradient(0deg,rgba(250,250,250,1)_35%,rgba(250,250,250,0)_81%)] pointer-events-none" />
            )}
          </div>

          <button
            className="btn-laranja"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Ver menos" : "Ver todos"}
          </button>
        </div>
      </div>
    </section>
  );
}
