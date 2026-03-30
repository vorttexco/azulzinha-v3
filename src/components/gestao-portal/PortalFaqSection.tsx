"use client";

import Accordion from "@/components/shared/Accordion";

const faqAnswerContent = (
  <p className="text-[18px] font-normal leading-[1.4] text-black">
    Acesse{" "}
    <a
      href="https://portal.azulzinhadacaixa.com.br"
      className="underline decoration-solid underline-offset-auto"
    >
      portal.azulzinhadacaixa.com.br
    </a>{" "}
    e digite as informações de acesso solicitadas (CPF ou CNPJ) que você recebeu
    via e-mail de boas-vindas. Caso não tenha recebido o e-mail, acesse o
    portal, inclua os dados de CPF ou CNPJ e clique em &apos;Primeira vez no
    Portal?&apos;. Em seguida, clique em &apos;Registre-se&apos;. Em casos de
    dúvidas, basta entrar em contato com a Central de Relacionamento pelos
    telefones{" "}
    <span className="underline decoration-solid underline-offset-auto">
      +55 11 3003-5365
    </span>{" "}
    (capitais) e{" "}
    <span className="underline decoration-solid underline-offset-auto">
      0800 729 5365
    </span>{" "}
    (demais localidades). De Segunda a Domingo: das 8h às 22h, exceto feriados
    nacionais.
  </p>
);

const groups = [
  {
    subtitle: null,
    questions: [
      "Como acessar o Portal da azulzinha?",
      "Como fazer o primeiro acesso no Portal da azulzinha?",
      "Como deve ser a senha para o cadastro no Portal da azulzinha?",
      "O que fazer caso eu não reconheça os dados do cadastro (e-mail e celular)?",
      "E o que fazer caso os dados informados estiverem incorretos?",
    ],
  },
  {
    subtitle: "Nova atualização",
    questions: [
      "Como visualizar o resumo dos dados de vendas do meu negócio no Portal da azulzinha?",
      "É possível exportar relatórios das minhas vendas e/ou dos meus recebimentos?",
      "Como faço para verificar as transações realizadas no Portal da azulzinha?",
    ],
  },
  {
    subtitle: "Antecipação de recebíveis",
    questions: [
      "Como fazer a antecipação dos recebimentos via Portal da azulzinha?",
    ],
  },
  {
    subtitle: "Recebimentos",
    questions: [
      "Como consultar os valores que tenho a receber?",
      "Como consultar os meus pagamentos recebidos?",
    ],
  },
  {
    subtitle: "Suporte",
    questions: [
      "É possível realizar a abertura de solicitações/chamados via Portal da azulzinha?",
      "Como consulto as informações da minha empresa?",
      "E se eu precisar de ajuda para entender os serviços que o Portal da azulzinha oferece?",
    ],
  },
  {
    subtitle: "Esqueci minha senha",
    questions: ["Como proceder para recuperar a minha senha?"],
  },
];

export default function PortalFaqSection() {
  return (
    <section className="bg-[#F7F7F7]">
      <div className="max-w-[1440px] mx-auto py-14 lg:py-20 px-[30px] lg:px-[100px]">
        <h2 className="section-title text-azul mb-10 lg:mb-[60px]">
          Perguntas frequentes sobre o Portal da azulzinha
        </h2>

        <div className="flex flex-col gap-10 lg:gap-14 max-w-[1070px] mx-auto">
          {groups.map((group, groupIndex) => (
            <div key={groupIndex}>
              {group.subtitle && (
                <h3 className="text-[26px] lg:text-[32px] font-normal leading-[1.3] text-azul mb-4 lg:mb-6">
                  {group.subtitle}
                </h3>
              )}
              <div className="flex flex-col gap-3">
                {group.questions.map((question, qIndex) => (
                  <Accordion
                    key={qIndex}
                    items={[{ title: question, content: faqAnswerContent }]}
                    defaultOpenIndex={null}
                    className="bg-white rounded-[20px] px-6 lg:px-10"
                    titleClassName="text-[18px] lg:text-[22px] font-normal leading-[1.3] text-black text-left"
                    showDividers={false}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
