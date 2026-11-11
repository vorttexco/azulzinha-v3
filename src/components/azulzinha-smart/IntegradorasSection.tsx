"use client";

import { useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/assets";

const integradoras: { name: string; logo: string; href?: string }[] = [
  { name: "A00s", logo: "logo-grey/a00s-logo-cinza.webp", href: "https://portal.a00s.com/" },
  { name: "alpino", logo: "logo-grey/alpino-logo-grey.webp" },
  { name: "Apliper Pagoo", logo: "logo-grey/apliper-logo-cinza.webp", href: "https://apliper.com.br/" },
  { name: "Argo Sistemas", logo: "logo-grey/argo-logo-grey.webp" },
  { name: "Arpag", logo: "logo-grey/app-arpa-grey.webp", href: "https://arpasistemas.net.br/" },
  { name: "B2 Sistemas", logo: "logo-grey/b2-grey.webp" },
  { name: "Bar Fácil", logo: "logo-grey/barfacil-grey.webp" },
  { name: "BitBar", logo: "logo-grey/bitbar-logo-cinza.webp", href: "https://www.bitbar.com.br/" },
  { name: "Bitbyte", logo: "logo-grey/bitbyte-grey.webp" },
  { name: "Brajan Sistemas", logo: "logo-grey/brajan-grey.webp" },
  { name: "Cash Driver", logo: "logo-grey/cashdriver-logo-grey.webp" },
  { name: "CH Sistemas", logo: "logo-grey/logo-ch-sistemas-grey.webp" },
  { name: "Chef Mio", logo: "logo-grey/chef-mio-grey.webp" },
  { name: "CISS", logo: "logo-grey/ciss-cinza.webp", href: "https://ciss.com.br/" },
  { name: "Closmaq", logo: "logo-grey/closmaq-logo-grey.webp" },
  { name: "Código UP", logo: "logo-grey/codigoup-cinza.webp" },
  { name: "COMANDAMOBI", logo: "logo-grey/comandmobi-logo-cinza.svg", href: "https://www.poscontrole.com.br/" },
  { name: "COMPSIS", logo: "logo-grey/compsis-grey.webp" },
  { name: "Compu Forte Sistemas", logo: "logo-grey/compuforte-grey.webp" },
  { name: "Compumate Pay", logo: "logo-grey/app-compumate-grey.webp", href: "https://www.compumate.com.br/" },
  { name: "Compusoft", logo: "logo-grey/compusoft-grey.webp" },
  { name: "Connect Posto - POS", logo: "logo-grey/pos-logo-cinza.webp" },
  { name: "Consfor", logo: "logo-grey/consfor-grey.webp" },
  { name: "Datamais Garçom", logo: "logo-grey/datamais-grey.webp", href: "https://datamais.com.br/" },
  { name: "Datanis Sistemas", logo: "logo-grey/datanis-grey.webp" },
  { name: "DigiSat", logo: "logo-grey/digisat-logo-cinza.webp" },
  { name: "DribionPay", logo: "logo-grey/dribion-grey.webp" },
  { name: "EAPOS", logo: "logo-grey/logo-eapos-grey.webp" },
  { name: "easy", logo: "logo-grey/easy-logo-grey.webp" },
  { name: "ElPay", logo: "logo-grey/elpay-grey.webp" },
  { name: "EPOC", logo: "logo-grey/epoc-grey.webp" },
  { name: "ErgonPDV", logo: "logo-grey/ergon-grey.webp" },
  { name: "ERP Unypax", logo: "logo-grey/unypax-grey.webp" },
  { name: "eyemobile", logo: "logo-grey/eye-mobile-grey.webp" },
  { name: "Fire Sistemas", logo: "logo-grey/app-firesistemas-grey.webp" },
  { name: "Gdoor Zucchetti", logo: "logo-grey/gdoor-grey.webp" },
  { name: "Idez", logo: "logo-grey/idez-grey.webp" },
  { name: "Infinite POS", logo: "logo-grey/infinite-grey.webp" },
  { name: "Infosoft", logo: "logo-grey/infosof-grey.webp" },
  { name: "Intelidata", logo: "logo-grey/intelidata-grey.webp" },
  { name: "JF System", logo: "logo-grey/logo-jf-system-grey.webp", href: "https://www.jfsystem.com.br/" },
  { name: "Jump Serviços", logo: "logo-grey/jump-grey.webp" },
  { name: "Lion Pay", logo: "logo-grey/lion-grey.webp", href: "https://liontecnologia.com.br/" },
  { name: "Maistre", logo: "logo-grey/maistre-grey.webp" },
  { name: "Master Key", logo: "logo-grey/masterkey_v2.webp", href: "https://www.officesystem.com.br/" },
  { name: "Master Key", logo: "logo-grey/masterkey.webp", href: "https://www.officesystem.com.br/" },
  { name: "MC Sistemas", logo: "logo-grey/mc-sistemas.webp", href: "https://mcsistemas.eti.br/" },
  { name: "Metanet Pay", logo: "logo-grey/metanet-grey.webp" },
  { name: "Mobility", logo: "logo-grey/mobility-cinza.webp" },
  { name: "mPm+", logo: "logo-grey/mpm-color-grey.webp", href: "https://www.bravil.com.br/" },
  { name: "MR PDV", logo: "logo-grey/mr-pdv-grey.webp", href: "https://www.rpinfo.com.br/" },
  { name: "NCR", logo: "logo-grey/logo-ncr-grey.webp" },
  { name: "OmniPDV", logo: "logo-grey/omni-grey.webp", href: "https://www.nexaas.com/" },
  { name: "ONPDV", logo: "logo-grey/onpdv-grey.webp" },
  { name: "Origam", logo: "logo-grey/origam-grey.webp" },
  { name: "PagZilla", logo: "logo-grey/logo-pagzilla.webp", href: "https://web.pagzilla.com.br/" },
  { name: "PDV Legal", logo: "logo-grey/pdv-legal-grey.webp" },
  { name: "PDV MOBI", logo: "logo-grey/pdvmob-logo-cinza.webp", href: "https://www.poscontrole.com.br/" },
  { name: "PDV POS", logo: "logo-grey/pdv-pos-grey.webp" },
  { name: "PDV Team17", logo: "logo-grey/app-pdv-team17-grey.webp", href: "https://www.team17.com.br/" },
  { name: "Pixei Pagamentos", logo: "logo-grey/pixei-grey.webp", href: "https://nootech.com.br/" },
  { name: "POS Controle", logo: "logo-grey/pos-logo-cinza.webp", href: "https://www.poscontrole.com.br/" },
  { name: "Posto Gestor", logo: "logo-grey/app-posto-gestor-grey.webp", href: "https://www.postogestor.com.br/" },
  { name: "Prátika", logo: "logo-grey/Pratika-logo-cinza.webp", href: "https://www.pratikapdv.com.br/" },
  { name: "Prioriza", logo: "logo-grey/prioriza-grey.webp" },
  { name: "PSinf Pay", logo: "logo-grey/info-solucoes-grey.webp" },
  { name: "Puma Sistemas", logo: "logo-grey/puma-sistemas-grey.webp" },
  { name: "Queóps Bares & Restaurantes", logo: "logo-grey/lexsis-grey.webp", href: "https://www.lexsis.com.br/" },
  { name: "Raffinato", logo: "logo-grey/raffinato-grey.webp" },
  { name: "Relt Informática", logo: "logo-grey/logo-relt-grey.webp" },
  { name: "Santa Ficha", logo: "logo-grey/santa-ficha-grey.webp" },
  { name: "Serbet", logo: "logo-grey/serbet-grey.webp" },
  { name: "SG Pay", logo: "logo-grey/sgbr-grey.webp" },
  { name: "Sismec", logo: "logo-grey/sismec-grey.webp" },
  { name: "Sistema Pallas", logo: "logo-grey/pallas-grey.webp" },
  { name: "Skytef", logo: "logo-grey/skytef-cinza.webp", href: "https://www.fiserv.com.br/suporte-skytef/" },
  { name: "Smart POS", logo: "logo-grey/smartpos-grey.webp", href: "https://www.smartpos.net.br/" },
  { name: "Softcom Smart", logo: "logo-grey/softcom-grey.webp" },
  { name: "Softplus", logo: "logo-grey/softplus-cinza.webp", href: "https://spi.com.br/" },
  { name: "SOS Soluções", logo: "logo-grey/sos-grey.webp" },
  { name: "SousaVenda", logo: "logo-grey/app-souza-grey.webp", href: "https://www.sousaautomacao.com.br/" },
  { name: "Suporte", logo: "logo-grey/suporte-logo-cinza.webp", href: "https://suporte.rs/site/" },
  { name: "Tacto Sistemas", logo: "logo-grey/tacto-grey.webp" },
  { name: "Tech Posto", logo: "logo-grey/tech-posto-grey.webp" },
  { name: "THR Softwares", logo: "logo-grey/thr-grey.webp", href: "https://www.thrsoftwares.com.br/" },
  { name: "Trade System", logo: "logo-grey/app-trade-system-grey.webp", href: "https://www.compumate.com.br/" },
  { name: "UNIO", logo: "logo-grey/app-unio-grey.webp", href: "https://www.uniotecnologia.com/" },
  { name: "Vedas Sistemas", logo: "logo-grey/vedas-grey.webp" },
  { name: "VucaPOS", logo: "logo-grey/vuca-grey.webp", href: "https://www.vucasolution.com.br/" },
  { name: "webPosto", logo: "logo-grey/webposto.webp", href: "https://www.webposto.com.br/" },
  { name: "WebyAPP", logo: "logo-grey/testo-grey.webp", href: "https://testosistemas.com.br/" },
  { name: "Wesa SmartPDV", logo: "logo-grey/wesa-grey.webp", href: "https://wesa.com.br/" },
  { name: "Windel POS", logo: "logo-grey/windel-grey.webp" },
  { name: "Youzoom", logo: "logo-grey/youzoom-grey.webp", href: "https://www.youzoom.com.br/" },
  { name: "zerofila", logo: "logo-grey/pipeor-grey.webp", href: "https://zerofila.com.br/" },
  { name: "ZPOS", logo: "logo-grey/zpos-cinza.webp" },
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
                const cardClass = "w-[157.5px] lg:w-[193px] h-[130px] rounded-[12px] border border-[#F1F1F1] bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] flex flex-col items-center justify-end gap-4 p-4 -rotate-[0.32deg]";
                const content = (
                  <>
                    {item.logo && (
                      <Image
                        src={asset(`/images/azulzinha-smart/${item.logo}`)}
                        alt={item.name}
                        width={150}
                        height={60}
                        className="w-[120px] h-auto max-h-[45px] px-4 object-contain shrink-0"
                      />
                    )}
                    <span className="text-[14px] pt-2 leading-[130%] text-center text-[#666666]">
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
