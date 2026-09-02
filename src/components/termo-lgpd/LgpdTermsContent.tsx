import Link from "next/link";

const boxClass =
  "bg-[#FAFAFA] text-[#7C7C7C] text-[16px] lg:text-[18px] leading-normal p-8";
const numeralClass = "text-azul";

export default function LgpdTermsContent() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20">
        <article className="flex flex-col gap-5">
          <h2 className="section-title text-azul text-center mb-2">
            Declaração de aceite aos termos e condições para uso de informações e
            dados pessoais e outras avenças
          </h2>

          <h3 className="text-[#7C7C7C] text-[19px] font-medium leading-[19px] pl-8 mb-2">
            O CLIENTE declara, sob as penas da lei, que:
          </h3>

          <div className={boxClass}>
            <span className={numeralClass}>(i)</span> As informações prestadas e
            conferidas por mim estão corretas e condizem com a verdade.
          </div>

          <div className={`${boxClass} flex flex-col gap-4`}>
            <div>
              <span className={numeralClass}>(ii)</span> Consinto expressa e
              inequivocamente que as informações prestadas implicam em tratamentos
              de Dados Pessoais, incluindo informações financeiras e dados pessoais
              de sócios e representantes legais, e que o tratamento dessas
              informações tem a finalidade e propósitos na execução do contrato de
              credenciamento e ainda está sujeito à legislação brasileira
              aplicável, em especial, a Constituição Federal Brasileira, o Código
              Civil (Lei nº 10.406/2002), o Marco Civil da Internet (Lei nº
              12.965/2014), a LC 105/2001 (Lei Sigilo Bancário), a Lei Geral de
              Proteção de Dados Pessoais (Lei nº 13.709/2018 ou “LGPD”) ou qualquer
              regulação emanada pelo Banco Central do Brasil ou autoridade
              governamental:
            </div>
            <div>
              a) As informações e Dados Pessoais contidos no formulário poderão ser
              utilizados, acessados ou transferidos por empregados e empresas do
              conglomerado CAIXA, bem como por funcionários e áreas da Fiserv e suas
              subsidiárias e afiliadas no Brasil e no exterior e/ou a terceiros
              autorizados pela Fiserv para fins de avaliações financeiras,
              reputacional, consultas a bases e bureaus de crédito e dados públicos
              e para oferecimento de produtos e serviços, de acordo com meu perfil,
              dentre outros.
            </div>
            <div>
              b) As informações e Dados Pessoais serão mantidos, divulgados ou
              transferidos apenas na medida e enquanto forem necessários para
              cumprimento correto dos requisitos relacionados aos propósitos
              específicos, execução de contrato ou cumprimento de obrigação conforme
              previsto na LGPD.
            </div>
          </div>

          <div className={boxClass}>
            <span className={numeralClass}>(iii)</span> Autorizo a Fiserv a debitar
            a conta informada neste documento, no campo “Conta Domicílio Bancário”,
            os valores específicos e decorrentes da operação de credenciamento com
            instrumentos de pagamento, pelo prazo de duração da prestação do
            serviço.
          </div>

          <div className={boxClass}>
            <span className={numeralClass}>(iv)</span> As condições comerciais
            tratadas no item 3 desse formulário estão de acordo com o
            plano/faturamento informado para o ramo de atividade do cliente, os
            quais estão sujeitos a aprovação da credenciadora.
          </div>

          <div className={boxClass}>
            <p className="mb-3">
              Deste modo, minha assinatura neste formulário corresponde à
              confirmação e autorização para efetivação do credenciamento bem como
              utilização das informações e dados conforme acima.
            </p>
            <p>
              Neste ato também tomo ciência que o Contrato de Adesão e
              Credenciamento de Estabelecimento à Operação com Instrumento de
              Pagamento (“Contrato”) está disponível no site{" "}
              <a
                className="text-laranja underline"
                href="https://www.azulzinhadacaixa.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.azulzinhadacaixa.com.br/
              </a>
              , ao qual me submeto e aceito integralmente, em conjunto com a
              aprovação da presente solicitação de credenciamento, sendo que fico
              ciente e concordo que o valor do aluguel será devido desde o dia do
              recebimento do Equipamento pelo Estabelecimento conforme previsto no
              Contrato.
            </p>
          </div>

          <div className="text-center mt-2">
            <Link href="/" className="btn-laranja inline-block">
              Voltar ao site principal
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
