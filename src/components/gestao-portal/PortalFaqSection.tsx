"use client";

import { ReactNode } from "react";
import Accordion from "@/components/shared/Accordion";

const linkClass =
  "text-azul underline decoration-solid underline-offset-auto";

const P = ({ children }: { children: ReactNode }) => (
  <p className="text-[18px] font-normal leading-[1.4] text-black">{children}</p>
);

const answerComoAcessar = (
  <P>
    Acesse{" "}
    <a href="https://portal.azulzinhadacaixa.com.br" className={linkClass}>
      portal.azulzinhadacaixa.com.br
    </a>{" "}
    e digite as informações de acesso solicitadas (CPF ou CNPJ) que você recebeu
    via e-mail de boas-vindas. Caso não tenha recebido o e-mail, acesse o
    portal, inclua os dados de CPF ou CNPJ e clique em &apos;Primeira vez no
    Portal?&apos;. Em seguida, clique em &apos;Registre-se&apos;. Em casos de
    dúvidas, basta entrar em contato com a Central de Relacionamento pelos
    telefones <span className={linkClass}>+55 11 3003-5365</span> (capitais) e{" "}
    <span className={linkClass}>0800 729 5365</span> (demais localidades). De
    Segunda a Domingo: das 8h às 22h, exceto feriados nacionais.
  </P>
);

const multi = (paragraphs: ReactNode[]) => (
  <div className="flex flex-col gap-3">
    {paragraphs.map((p, i) => (
      <P key={i}>{p}</P>
    ))}
  </div>
);

const answerPrimeiroAcesso = multi([
  <>
    Na home não logada, selecione o botão “Primeiro acesso” e digite o CNPJ/CPF
    utilizado no credenciamento e clique em “Continuar”.
  </>,
  <>
    Obs.: Caso você já tenha realizado o primeiro acesso, você receberá
    informações com o direcionamento para que o login seja realizado. Se esse
    for o seu caso, clique em “Acessar a minha conta”.
  </>,
  <>
    Em seguida, selecione a opção por onde deseja receber o código de segurança:
    telefone ou e-mail. Você receberá o código de segurança composto por 6
    dígitos alfanuméricos e deverá digitá-lo na tela seguinte.
  </>,
  <>
    Prontinho, agora é só configurar sua senha e clicar em “Continuar” e você
    será automaticamente direcionado para a home logada do Portal.
  </>,
]);

const answerSenhaCadastro = (
  <P>
    A senha precisa ser composta por no mínimo 12 caracteres (letra maiúscula,
    minúscula e números), ter ao menos um carácter especial e você precisará
    digitá-la nos dois campos para o botão “Continuar” ser habilitado.
  </P>
);

const answerNaoReconheceDados = multi([
  <>
    Na aba “Esqueci minha senha”, clique na opção “Não reconheço os dados
    acima”. Em seguida, informe os dados de seu banco, agência e conta e clique
    em “Confirmar”.
  </>,
  <>
    <strong>Importante!</strong> Caso você tenha mais de um domicílio bancário
    cadastrado, será necessário informar os dados corretos de pelo menos um
    domicílio.
  </>,
  <>
    Após preenchimento dos dados, será apresentado um pop-up de confirmação das
    informações digitadas. Ao inserir os novos dados de e-mail e celular, você
    será direcionado para a tela de seleção para receber o código de segurança,
    já com os novos dados informados.
  </>,
]);

const answerDadosIncorretos = (
  <P>
    Quando os dados informados estiverem incorretos, traremos a mensagem: “Os
    dados informados não coincidem”, e você terá mais uma chance ao clicar no
    botão “Tentar Novamente”. Caso o domicílio bancário esteja errado uma vez
    mais, entre em contato com a Central de Atendimento.
  </P>
);

const answerResumoVendas = (
  <P>
    Ao fazer o login, já na tela inicial, você encontra o resumo de vendas e dos
    pagamentos recebidos. Clique na opção que deseja e explore as informações.
  </P>
);

const answerExportarRelatorios = multi([
  <>
    É possível sim. Acesse o menu “Vendas” e navegue pela aba que desejar: hoje,
    histórico de vendas, não efetivadas, pré-autorizações ou voucher. Selecione
    o período desejado e clique em “Exportar”. Em seguida, escolha a extensão do
    arquivo (CSV ou Excel) e navegue pelo arquivo.
  </>,
  <>
    Já para exportar relatórios dos seus valores recebidos ou dos valores que
    ainda vai receber, basta acessar o menu “Recebimentos”, em seguida selecione
    a aba que deseja navegar: pagos ou futuros e clique em “Exportar”. Agora
    basta escolher a extensão do arquivo (CSV ou Excel) e navegar pelo arquivo.
  </>,
]);

const answerVerificarTransacoes = (
  <P>
    Clique no menu “Vendas” e acesse as abas: hoje, histórico de vendas, não
    efetivadas, pré-autorizações e voucher. Na aba “hoje”, é possível visualizar
    as transações capturadas no dia, já na aba “histórico de vendas”, você
    consulta o histórico de até 6 meses das vendas processadas. Na aba “não
    efetivadas”, é possível identificar o histórico das vendas estornadas e
    recusadas e nas abas “pré autorizações” e “voucher”, você consulta todas as
    vendas que foram capturadas nas respectivas modalidades.
  </P>
);

const answerAntecipacao = (
  <P>
    No menu “Antecipação” você realiza antecipações automáticas ou eventuais e
    consulta suas operações realizadas.
  </P>
);

const answerValoresReceber = (
  <P>
    No menu “Recebimentos”, clique na aba “Futuros” e visualize a agenda de
    lançamentos previstos para controlar seus próximos recebíveis.
  </P>
);

const answerPagamentosRecebidos = (
  <P>
    No menu “Recebimentos”, clicando na aba “Pagos” é possível visualizar os
    lotes de pagamentos que foram realizados nos seus respectivos domicílios
    bancários.
  </P>
);

const answerAberturaSolicitacoes = (
  <P>
    É sim. Em “Solicitações” você acessa diversos recursos como solicitar
    bobinas, alterar informações cadastrais, alterar domicílio bancário,
    cancelar uma venda, abrir chamados para pagamentos não recebidos, entre
    outras opções.
  </P>
);

const answerInformacoesEmpresa = (
  <P>
    Na seção “Negócio”, você encontra todas as informações da sua empresa: dados
    cadastrais, domicílio bancário, taxas contratadas, equipamentos, entre
    outros.
  </P>
);

const answerAjudaServicos = (
  <P>
    Sempre que precisar, acesse a área “Ajuda”. Lá você encontra diversas
    informações para esclarecer as suas dúvidas. Você também poderá acessar o
    Chatbot através do ícone que fica no final da tela.
  </P>
);

const answerRecuperarSenha = multi([
  <>
    Na home não logada, clique em “Esqueci minha senha” e digite o CNPJ/CPF
    utilizado no credenciamento e clique em “Continuar”. Em seguida, selecione a
    opção por onde deseja receber o código de segurança: telefone ou e-mail.
  </>,
  <>
    Você receberá o código de segurança composto por 6 dígitos alfanuméricos e
    deverá digitá-lo na tela seguinte. Prontinho, agora é só configurar sua nova
    senha e clicar em “Continuar” e você será automaticamente direcionado para a
    home logada do Portal.
  </>,
  <>
    <strong>Importante:</strong> Sua senha precisa ser composta por no mínimo 9
    caracteres (letra maiúscula, minúscula e números) e ter ao menos um
    carácter especial.
  </>,
]);

interface FaqItem {
  q: string;
  a: ReactNode;
}

interface FaqGroup {
  subtitle: string | null;
  items: FaqItem[];
}

const groups: FaqGroup[] = [
  {
    subtitle: null,
    items: [
      { q: "Como acessar o Portal da azulzinha?", a: answerComoAcessar },
      {
        q: "Como fazer o primeiro acesso no Portal da azulzinha?",
        a: answerPrimeiroAcesso,
      },
      {
        q: "Como deve ser a senha para o cadastro no Portal da azulzinha?",
        a: answerSenhaCadastro,
      },
      {
        q: "O que fazer caso eu não reconheça os dados do cadastro (e-mail e celular)?",
        a: answerNaoReconheceDados,
      },
      {
        q: "E o que fazer caso os dados informados estiverem incorretos?",
        a: answerDadosIncorretos,
      },
    ],
  },
  {
    subtitle: "Relatórios e extratos",
    items: [
      {
        q: "Como visualizar o resumo dos dados de vendas do meu negócio no Portal da azulzinha?",
        a: answerResumoVendas,
      },
      {
        q: "É possível exportar relatórios das minhas vendas e/ou dos meus recebimentos?",
        a: answerExportarRelatorios,
      },
      {
        q: "Como faço para verificar as transações realizadas no Portal da azulzinha?",
        a: answerVerificarTransacoes,
      },
    ],
  },
  {
    subtitle: "Antecipação de recebíveis",
    items: [
      {
        q: "Como fazer a antecipação dos recebimentos via Portal da azulzinha?",
        a: answerAntecipacao,
      },
    ],
  },
  {
    subtitle: "Recebimentos",
    items: [
      {
        q: "Como consultar os valores que tenho a receber?",
        a: answerValoresReceber,
      },
      {
        q: "Como consultar os meus pagamentos recebidos?",
        a: answerPagamentosRecebidos,
      },
    ],
  },
  {
    subtitle: "Suporte",
    items: [
      {
        q: "É possível realizar a abertura de solicitações/chamados via Portal da azulzinha?",
        a: answerAberturaSolicitacoes,
      },
      {
        q: "Como consulto as informações da minha empresa?",
        a: answerInformacoesEmpresa,
      },
      {
        q: "E se eu precisar de ajuda para entender os serviços que o Portal da azulzinha oferece?",
        a: answerAjudaServicos,
      },
    ],
  },
  {
    subtitle: "Esqueci minha senha",
    items: [
      {
        q: "Como proceder para recuperar a minha senha?",
        a: answerRecuperarSenha,
      },
    ],
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
                {group.items.map((item, qIndex) => (
                  <Accordion
                    key={qIndex}
                    items={[{ title: item.q, content: item.a }]}
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
