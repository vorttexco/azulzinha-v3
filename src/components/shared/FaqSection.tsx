"use client";

import Accordion, { AccordionItem } from "@/components/shared/Accordion";

const defaultFaqItems: AccordionItem[] = [
  {
    title: "Posso instalar azulzinha aproxima em mais de um celular ou tablet?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Sim. Basta solicitar mais um acesso ao aplicativo azulzinha aproxima através da Central de Atendimento.
      </p>
    ),
  },
  {
    title: "O App azulzinha aproxima funciona em quais aparelhos?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        O aplicativo funciona em celulares e tablets com tecnologia NFC e sistema Android versão 9 ou superior.
      </p>
    ),
  },
  {
    title: "O App azulzinha aproxima é seguro?",
    content: (
      <p className="text-[16px] lg:text-[18px] font-normal leading-[1.4] text-black">
        Sim. O aplicativo azulzinha aproxima conta com toda a segurança e confiabilidade da CAIXA e da Fiserv, líder global em tecnologias de pagamentos.
      </p>
    ),
  },
];

interface FaqSectionProps {
  title?: string;
  items?: AccordionItem[];
  buttonText?: string;
  buttonHref?: string;
}

export default function FaqSection({
  title = "Saiba tudo sobre azulzinha aproxima",
  items = defaultFaqItems,
  buttonText,
  buttonHref = "#",
}: FaqSectionProps = {}) {
  return (
    <section className="bg-[#F4F4F4]">
      <div className="max-w-[1440px] mx-auto py-14 lg:py-20 px-[30px] lg:px-[100px]">
        <h2 className="section-title text-azul mb-8 lg:mb-[60px]">
          {title}
        </h2>

        <div className="flex flex-col gap-6 max-w-[1070px] mx-auto">
          {items.map((item, index) => (
            <Accordion
              key={index}
              items={[item]}
              defaultOpenIndex={index === 0 ? 0 : null}
              className="bg-white rounded-[20px] px-8 lg:px-10"
              titleClassName="text-[20px] lg:text-[26px] font-normal leading-[1.4] text-black text-left pr-6"
              showDividers={false}
            />
          ))}
        </div>

        {buttonText && (
          <div className="flex justify-center mt-8 lg:mt-[60px]">
            <a href={buttonHref} className="btn-laranja">
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
