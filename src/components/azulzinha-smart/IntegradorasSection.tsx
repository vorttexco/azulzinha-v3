"use client";

import { useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/assets";

const integradoras: { name: string; logo: string; href?: string }[] = [
  { name: "A00s", logo: "logo-grey/a00s-logo-cinza.png", href: "https://portal.a00s.com/" },
  { name: "alpino", logo: "logo-grey/alpino-logo-grey.png" },
  { name: "Apliper Pagoo", logo: "logo-grey/apliper-logo-cinza.png", href: "https://apliper.com.br/" },
  { name: "Argo Sistemas", logo: "logo-grey/argo-logo-grey.png" },
  { name: "Arpag", logo: "logo-grey/app-arpa-grey.png", href: "https://arpasistemas.net.br/" },
  { name: "B2 Sistemas", logo: "logo-grey/b2-grey.png" },
  { name: "Bar Fácil", logo: "logo-grey/barfacil-grey.png" },
  { name: "BitBar", logo: "logo-grey/bitbar-logo-cinza.png", href: "https://www.bitbar.com.br/" },
  { name: "Bitbyte", logo: "logo-grey/bitbyte-grey.png" },
  { name: "Brajan Sistemas", logo: "logo-grey/brajan-grey.png" },
  { name: "Cash Driver", logo: "logo-grey/cashdriver-logo-grey.png" },
  { name: "CH Sistemas", logo: "logo-grey/logo-ch-sistemas-grey.png" },
  { name: "Chef Mio", logo: "logo-grey/chef-mio-grey.png" },
  { name: "CISS", logo: "logo-grey/ciss-cinza.png", href: "https://ciss.com.br/" },
  { name: "Closmaq", logo: "logo-grey/closmaq-logo-grey.png" },
  { name: "Código UP", logo: "logo-grey/codigoup-cinza.png" },
  { name: "COMANDAMOBI", logo: "logo-grey/comandmobi-logo-cinza.svg", href: "https://www.poscontrole.com.br/" },
  { name: "COMPSIS", logo: "logo-grey/compsis-grey.png" },
  { name: "Compu Forte Sistemas", logo: "logo-grey/compuforte-grey.png" },
  { name: "Compumate Pay", logo: "logo-grey/app-compumate-grey.png", href: "https://www.compumate.com.br/" },
  { name: "Compusoft", logo: "logo-grey/compusoft-grey.png" },
  { name: "Connect Posto - POS", logo: "logo-grey/pos-logo-cinza.png" },
  { name: "Consfor", logo: "logo-grey/consfor-grey.png" },
  { name: "Datamais Garçom", logo: "logo-grey/datamais-grey.png", href: "https://datamais.com.br/" },
  { name: "Datanis Sistemas", logo: "logo-grey/datanis-grey.png" },
  { name: "DigiSat", logo: "logo-grey/digisat-logo-cinza.png" },
  { name: "DribionPay", logo: "logo-grey/dribion-grey.png" },
  { name: "EAPOS", logo: "logo-grey/logo-eapos-grey.png" },
  { name: "easy", logo: "logo-grey/easy-logo-grey.png" },
  { name: "ElPay", logo: "logo-grey/elpay-grey.png" },
  { name: "EPOC", logo: "logo-grey/epoc-grey.png" },
  { name: "ErgonPDV", logo: "logo-grey/ergon-grey.png" },
  { name: "ERP Unypax", logo: "logo-grey/unypax-grey.png" },
  { name: "eyemobile", logo: "logo-grey/eye-mobile-grey.png" },
  { name: "Fire Sistemas", logo: "logo-grey/app-firesistemas-grey.png" },
  { name: "Gdoor Zucchetti", logo: "logo-grey/gdoor-grey.png" },
  { name: "Idez", logo: "logo-grey/idez-grey.png" },
  { name: "Infinite POS", logo: "logo-grey/infinite-grey.png" },
  { name: "Infosoft", logo: "logo-grey/infosof-grey.png" },
  { name: "Intelidata", logo: "logo-grey/intelidata-grey.png" },
  { name: "JF System", logo: "logo-grey/logo-jf-system-grey.png", href: "https://www.jfsystem.com.br/" },
  { name: "Jump Serviços", logo: "logo-grey/jump-grey.png" },
  { name: "Lion Pay", logo: "logo-grey/lion-grey.png", href: "https://liontecnologia.com.br/" },
  { name: "Maistre", logo: "logo-grey/maistre-grey.png" },
  { name: "Master Key", logo: "logo-grey/masterkey_v2.png", href: "https://www.officesystem.com.br/" },
  { name: "Master Key", logo: "logo-grey/masterkey.png", href: "https://www.officesystem.com.br/" },
  { name: "MC Sistemas", logo: "logo-grey/mc-sistemas.png", href: "https://mcsistemas.eti.br/" },
  { name: "Metanet Pay", logo: "logo-grey/metanet-grey.png" },
  { name: "Mobility", logo: "logo-grey/mobility-cinza.png" },
  { name: "mPm+", logo: "logo-grey/mpm-color-grey.png", href: "https://www.bravil.com.br/" },
  { name: "MR PDV", logo: "logo-grey/mr-pdv-grey.png", href: "https://www.rpinfo.com.br/" },
  { name: "NCR", logo: "logo-grey/logo-ncr-grey.png" },
  { name: "OmniPDV", logo: "logo-grey/omni-grey.png", href: "https://www.nexaas.com/" },
  { name: "ONPDV", logo: "logo-grey/onpdv-grey.png" },
  { name: "Origam", logo: "logo-grey/origam-grey.png" },
  { name: "PagZilla", logo: "logo-grey/logo-pagzilla.png", href: "https://web.pagzilla.com.br/" },
  { name: "PDV Legal", logo: "logo-grey/pdv-legal-grey.png" },
  { name: "PDV MOBI", logo: "logo-grey/pdvmob-logo-cinza.png", href: "https://www.poscontrole.com.br/" },
  { name: "PDV POS", logo: "logo-grey/pdv-pos-grey.png" },
  { name: "PDV Team17", logo: "logo-grey/app-pdv-team17-grey.png", href: "https://www.team17.com.br/" },
  { name: "Pixei Pagamentos", logo: "logo-grey/pixei-grey.png", href: "https://nootech.com.br/" },
  { name: "POS Controle", logo: "logo-grey/pos-logo-cinza.png", href: "https://www.poscontrole.com.br/" },
  { name: "Posto Gestor", logo: "logo-grey/app-posto-gestor-grey.png", href: "https://www.postogestor.com.br/" },
  { name: "Prátika", logo: "logo-grey/Pratika-logo-cinza.png", href: "https://www.pratikapdv.com.br/" },
  { name: "Prioriza", logo: "logo-grey/prioriza-grey.png" },
  { name: "PSinf Pay", logo: "logo-grey/info-solucoes-grey.png" },
  { name: "Puma Sistemas", logo: "logo-grey/puma-sistemas-grey.png" },
  { name: "Queóps Bares & Restaurantes", logo: "logo-grey/lexsis-grey.png", href: "https://www.lexsis.com.br/" },
  { name: "Raffinato", logo: "logo-grey/raffinato-grey.png" },
  { name: "Relt Informática", logo: "logo-grey/logo-relt-grey.png" },
  { name: "Santa Ficha", logo: "logo-grey/santa-ficha-grey.png" },
  { name: "Serbet", logo: "logo-grey/serbet-grey.png" },
  { name: "SG Pay", logo: "logo-grey/sgbr-grey.png" },
  { name: "Sismec", logo: "logo-grey/sismec-grey.png" },
  { name: "Sistema Pallas", logo: "logo-grey/pallas-grey.png" },
  { name: "Skytef", logo: "logo-grey/skytef-cinza.png", href: "https://www.fiserv.com.br/suporte-skytef/" },
  { name: "Smart POS", logo: "logo-grey/smartpos-grey.png", href: "https://www.smartpos.net.br/" },
  { name: "Softcom Smart", logo: "logo-grey/softcom-grey.png" },
  { name: "Softplus", logo: "logo-grey/softplus-cinza.png", href: "https://spi.com.br/" },
  { name: "SOS Soluções", logo: "logo-grey/sos-grey.png" },
  { name: "SousaVenda", logo: "logo-grey/app-souza-grey.png", href: "https://www.sousaautomacao.com.br/" },
  { name: "Suporte", logo: "logo-grey/suporte-logo-cinza.png", href: "https://suporte.rs/site/" },
  { name: "Tacto Sistemas", logo: "logo-grey/tacto-grey.png" },
  { name: "Tech Posto", logo: "logo-grey/tech-posto-grey.png" },
  { name: "THR Softwares", logo: "logo-grey/thr-grey.png", href: "https://www.thrsoftwares.com.br/" },
  { name: "Trade System", logo: "logo-grey/app-trade-system-grey.png", href: "https://www.compumate.com.br/" },
  { name: "UNIO", logo: "logo-grey/app-unio-grey.png", href: "https://www.uniotecnologia.com/" },
  { name: "Vedas Sistemas", logo: "logo-grey/vedas-grey.png" },
  { name: "VucaPOS", logo: "logo-grey/vuca-grey.png", href: "https://www.vucasolution.com.br/" },
  { name: "webPosto", logo: "logo-grey/webposto.png", href: "https://www.webposto.com.br/" },
  { name: "WebyAPP", logo: "logo-grey/testo-grey.png", href: "https://testosistemas.com.br/" },
  { name: "Wesa SmartPDV", logo: "logo-grey/wesa-grey.png", href: "https://wesa.com.br/" },
  { name: "Windel POS", logo: "logo-grey/windel-grey.png" },
  { name: "Youzoom", logo: "logo-grey/youzoom-grey.png", href: "https://www.youzoom.com.br/" },
  { name: "zerofila", logo: "logo-grey/pipeor-grey.png", href: "https://zerofila.com.br/" },
  { name: "ZPOS", logo: "logo-grey/zpos-cinza.png" },
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
              className={`flex flex-wrap justify-center gap-4 overflow-hidden transition-[max-height] duration-500 ease-in-out ${expanded ? "max-h-[5000px]" : "max-h-[422px] lg:max-h-[568px]"
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
