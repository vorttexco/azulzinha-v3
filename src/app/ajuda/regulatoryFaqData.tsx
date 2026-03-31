import { FaqCategory } from "@/components/help/HelpFaqSection";

const regulatoryFaqData: FaqCategory[] = [
    {
        label: "Resolução BACEN 264",
        subCategories: [
            {
                title: "Noções Gerais",
                items: [
                    {
                        question: "O que é a Resolução 264?",
                        answer: "É uma norma do Banco Central que define regras sobre registro e utilização de recebíveis de cartões em antecipações, empréstimos e outras operações de crédito. As regras definidas nesta resolução vão possibilitar uma maior oferta de produtos e serviços para seu estabelecimento. Você poderá usar a agenda de recebíveis de cartões de crédito e débito para negociar e selecionar as condições mais vantajosas. Essa norma substituiu a Circular 3952.",
                    },
                    {
                        question: "O que é UR?",
                        answer: (
                            <div className="space-y-2">
                                <p>A sigla UR significa Unidade de Recebível. É sua moeda de negociação com o mercado. Você pode negociar várias URs e cada UR tem suas próprias características, assim como existem cédulas de R$ 20, R$ 50, R$ 100 e assim por diante.</p>
                                <p>UR é basicamente a maneira como organizamos o dinheiro que você ganha com cartões. Se um cliente gastar R$ 200,00 em sua loja, descontada a taxa de administração, você tem um recebível de um valor um pouco menor que R$ 200,00.</p>
                                <p>URs são como grupos desses recebíveis. E cada grupo é formado quando possui recebíveis:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Do mesmo estabelecimento (CNPJ completo ou CPF);</li>
                                    <li>Da mesma credenciadora (aquela que te fornece a maquininha de cartão);</li>
                                    <li>Da mesma bandeira (ex.: Mastercard, Visa, Elo, Amex);</li>
                                    <li>Do mesmo produto (crédito ou débito) e;</li>
                                    <li>Que serão pagos numa mesma data.</li>
                                </ul>
                                <p><strong>Exemplo:</strong> Em 04/03/2024, foram realizadas 2 vendas de crédito à vista da Mastercard: a primeira venda foi de R$ 100,00 e a segunda foi de R$ 200,00. Supondo uma taxa de administração de 2%, o valor líquido para pagamento em 04/04/2023 será, respectivamente, de R$ 98,00 e R$ 196,00. Somando-se ambas, teremos a UR no valor de R$ 294,00.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Como eu faço uma negociação usando URs?",
                        answer: (
                            <div className="space-y-2">
                                <p>Todas as credenciadoras são obrigadas, pela Resolução 264, a enviarem as URs ao ecossistema do Banco Central, através de uma registradora autorizada pelo próprio Banco Central. Essa registradora funciona como um cartório, onde as URs são guardadas de forma eletrônica em nome do seu estabelecimento.</p>
                                <p>Cada UR é registrada no dia útil seguinte à data da venda.</p>
                                <p>Para que as URs sejam negociadas com outras instituições que não sejam a credenciadora do seu estabelecimento, você deverá autorizar a divulgação dessas URs para a instituição que você quiser.</p>
                                <p>Cada instituição tem sua própria maneira de obter sua autorização. Depois disso, a instituição passa a ver as suas URs e faz uma proposta para você avaliar. Se for do seu interesse, você aprovará a proposta, a instituição fará o registro da proposta aprovada numa registradora autorizada pelo Banco Central e pagará seu estabelecimento no valor acordado. Na azulzinha, temos diversos canais a sua disposição para você fazer simulações e aprovar a proposta mais vantajosa para seu estabelecimento.</p>
                            </div>
                        ),
                    },
                    {
                        question: "A UR pode alterar de valor depois que é registrada no cartório?",
                        answer: (
                            <div className="space-y-2">
                                <p>Sim, o valor da UR pode ficar menor, em função de deduções realizadas pela credenciadora, ou pode ficar maior, através de novas vendas realizadas pelo estabelecimento que coincidem nas mesmas URs, ou ainda, ajustes a crédito feitos pela credenciadora em comum acordo com o estabelecimento.</p>
                                <p><strong>1º Exemplo:</strong> Em 03/03/2024, seu estabelecimento fez vendas que totalizaram R$ 1.000,00 e todas foram pagas com cartão de crédito Mastercard à vista. Descontando MDR de 2%, teremos uma UR de Mastercard Crédito com vencimento em 03/04/2024 no valor de R$ 980,00. Foi feita cobrança de aluguel de R$ 80,00, descontada nessa UR. Com isso, seu valor reduziu para R$ 900,00.</p>
                                <p><strong>2º Exemplo:</strong> Uma venda de R$ 900,00 em 03/03/2024 foi paga com cartão Elo em 3x sem juros, gerando 3 URs: Elo Crédito R$ 294,00 (venc. 03/04/2024), R$ 294,00 (venc. 03/05/2024) e R$ 294,00 (venc. 03/06/2024). Em 03/04/2024, uma nova venda de R$ 200,00 com cartão Elo à vista adicionou R$ 196,00 à UR de 03/05/2024, atualizando-a para R$ 490,00.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Posso negociar URs que tenham seu valor alterado ou apenas aquelas que tenham o mesmo valor desde o momento em que foram registradas?",
                        answer: (
                            <div className="space-y-2">
                                <p>Seu estabelecimento poderá negociar as URs com valores atualizados, considerando-se as situações abaixo:</p>
                                <p><strong>UR não negociada antes da alteração de valor:</strong> UR registrada em 23/04/2024 com vencimento em 22/05/2025 no valor de R$ 200,00 foi atualizada para R$ 150,00 em 02/05/2024. Não foi negociada antes e depois foi negociada numa operação de cessão. Portanto, o valor cedido foi de R$ 150,00 e não de R$ 200,00.</p>
                                <p><strong>UR negociada antes da alteração e com valor livre — 1º Exemplo:</strong> UR de R$ 200,00 foi antecipada parcialmente em R$ 120,00. Após dedução de R$ 20,00, o valor residual de R$ 60,00 pode ser usado em outra negociação.</p>
                                <p><strong>2º Exemplo:</strong> UR de R$ 200,00 negociada em 40%. Após dedução de R$ 10,00, o valor de R$ 190,00 é desmembrado em R$ 76,00 (financiador) e R$ 114,00 (domicílio do estabelecimento). O valor livre pode ser renegociado.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Como o financiador fica sabendo se os valores das URs foram alterados?",
                        answer: "Se você autorizou o financiador a consultar sua agenda de recebíveis ou se você fechou alguma negociação com o financiador, então ele receberá os valores das URs atualizados através do ecossistema do Banco Central. A credenciadora tem a obrigação de manter suas URs atualizadas e as envia para uma registradora autorizada pelo Banco Central, que por sua vez compartilha essas informações com segurança para que o financiador as receba.",
                    },
                    {
                        question: "Quantas URs é possível ter num ano?",
                        answer: (
                            <div className="space-y-2">
                                <p>Depende de quando e como são pagas as vendas do seu estabelecimento. No cenário com 6 bandeiras de crédito (Mastercard, Visa, Elo, Amex, Hipercard e Cabal) e 4 de débito (Mastercard, Visa, Elo e Cabal), considerando 252 dias úteis por ano, temos uma combinação máxima possível de 2.520 URs por ano por credenciadora e por CNPJ/CPF.</p>
                                <p>Se seu estabelecimento estiver cadastrado em 2 credenciadoras, a quantidade de URs é de até 5.040 por ano. Se realizar vendas em mais de uma loja com diferentes CNPJs, a quantidade máxima de URs será multiplicada pela quantidade de CNPJs distintos.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Posso negociar apenas uma parte das URs ou sou obrigado a negociar todas as URs de uma só vez?",
                        answer: "A sua agenda de recebíveis é um conjunto de diversas URs. Você pode negociar uma parte das URs, todas as URs, um pedacinho de cada UR. Você avalia as condições apresentadas pelo financiador e tem a liberdade de escolher o que for melhor para seu estabelecimento. Por isso, é possível negociar, para cada UR, um valor pré-definido ou um percentual (%) sobre o valor da UR.",
                    },
                    {
                        question: "Posso negociar várias operações numa única UR, tanto em valor pré-definido ou percentual (%)?",
                        answer: (
                            <div className="space-y-2">
                                <p>Para cada contrato firmado com o financiador, será necessário definir se as URs desse contrato serão negociadas em valor pré-definido ou percentual. Porém, é possível negociar diferentes contratos com o mesmo ou diferentes financiadores em cada uma das URs.</p>
                                <p>O ecossistema do Banco Central faz uma ordenação automática dos contratos por ordem de chegada, respeitada no momento de realizar o pagamento das URs.</p>
                                <p><strong>Exemplo:</strong> O financiador A registrou 50% da UR, o B registrou R$ 1.000,00 e o C registrou 100%. Com UR de R$ 1.500,00: o A recebeu R$ 750,00, o B recebeu R$ 750,00 (não o total solicitado) e o C não recebeu nada, em função da ordem de chegada e do valor disponível.</p>
                            </div>
                        ),
                    },
                    {
                        question: "O que é gravame?",
                        answer: (
                            <div className="space-y-2">
                                <p>Gravame já é um termo conhecido por quem compra um carro — é o registro de contrato de financiamento. No mundo das vendas no cartão, o gravame é um registro no Banco Central de que as URs foram dadas como garantia de um contrato ou negociação de crédito. Ele impede que o mesmo recebível seja usado como garantia em outra operação enquanto estiver ativo.</p>
                                <p><strong>Exemplo:</strong> Se o estabelecimento pede um empréstimo de R$ 30 mil e tem a receber R$ 40 mil em cartão, os R$ 30 mil passam a ser &quot;valor gravamado&quot;. A credenciadora fica responsável por realizar o pagamento dos R$ 30 mil na conta informada pela instituição financiadora na data prevista, independentemente do domicílio bancário do estabelecimento.</p>
                            </div>
                        ),
                    },
                    {
                        question: "O gravame é uma trava de domicílio?",
                        answer: "Antes da implantação da Circular 3952, em 07/06/2021, era comum os bancos realizarem a trava de domicílio, bloqueando 100% da agenda do estabelecimento como garantia. Agora, o estabelecimento tem mais flexibilidade. Como as URs podem ser negociadas individualmente, você pode negociar um gravame parcial de sua agenda — seja um valor pré-definido em reais (R$) ou um percentual da agenda contemplada na negociação.",
                    },
                    {
                        question: "O que é cessão?",
                        answer: (
                            <div className="space-y-2">
                                <p>A cessão é um tipo de operação em que você vende as URs para um financiador, recebendo antecipadamente um valor (com desconto de taxa). O pagamento dessas URs na data de vencimento será feito para o financiador.</p>
                                <p><strong>Exemplo:</strong> O estabelecimento possui agenda de R$ 50.000 para receber em 19/09/2024. Fez uma cessão de R$ 30.000 para um financiador em 22/03/2024. O estabelecimento recebeu do financiador um valor menor que R$ 30.000 (descontada a taxa negociada) e receberá da credenciadora em 19/09/2024 o valor de R$ 20.000. A credenciadora pagará R$ 30.000 ao financiador em 19/09/2024.</p>
                            </div>
                        ),
                    },
                    {
                        question: "O que é fumaça?",
                        answer: "No conceito da Resolução 264, o fumaça está associado a vendas não realizadas pelo estabelecimento e, portanto, não registradas em formato de UR. Por trás desse conceito está uma operação de crédito em que o estabelecimento utiliza os futuros recebíveis de cartões. O empréstimo é concedido conforme o histórico de faturamento do estabelecimento e a agenda disponível. Quando um financiador envia um contrato fumaça sobre a agenda, as novas vendas realizadas pelo estabelecimento que foram objeto do contrato serão pagas conforme os dados de domicílio bancário passados pelo financiador.",
                    },
                ],
            },
            {
                title: "Veja qual o seu caso e o que muda com a Resolução 264",
                items: [
                    {
                        question: "Meu estabelecimento não realiza antecipações, empréstimos ou outras operações de crédito. Nesse caso, o que muda no meu dia a dia a partir da Resolução 264?",
                        answer: (
                            <div className="space-y-2">
                                <p>Quando você clicar em &quot;Recebimentos&quot; no menu do App ou Portal, aparecerá uma nova tela com 2 opções de consulta:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Resumo de Recebimentos: é o extrato que você já costuma usar e não foi alterado;</li>
                                    <li>Agenda de Recebíveis por UR: é a novidade trazida pela resolução do Banco Central.</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        question: "Meu estabelecimento está cadastrado em antecipação automática na azulzinha e recebo o pagamento das vendas no dia útil seguinte. Nesse caso, o que muda no meu dia a dia a partir da Resolução 264?",
                        answer: (
                            <div className="space-y-2">
                                <p>Quando você clicar em &quot;Recebimentos&quot; no menu do App ou Portal, aparecerá uma nova tela com 2 opções de consulta:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Resumo de Recebimentos: é o extrato que você já costuma usar e não foi alterado;</li>
                                    <li>Agenda de Recebíveis por UR: é a novidade trazida pela resolução do Banco Central.</li>
                                </ul>
                                <p>Você verá os valores antecipados indicados como &quot;total pago antecipação automática&quot; e também terá detalhes do valor antecipado em cada UR ao selecionar a opção &quot;Pagamentos&quot;.</p>
                                <p>Além disso, o Banco Central alterou as regras de deduções de aluguel, chargeback e cancelamentos. Mantenha suas vendas e sua antecipação automática na azulzinha para que seu estabelecimento tenha sempre saldo disponível.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Meu estabelecimento faz antecipação de forma eventual na azulzinha. Nesse caso, o que muda no meu dia a dia a partir da Resolução 264?",
                        answer: (
                            <div className="space-y-2">
                                <p>Quando você clicar em &quot;Recebimentos&quot; no menu do App ou Portal, aparecerá uma nova tela com 2 opções de consulta:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Resumo de Recebimentos: é o extrato que você já costuma usar e não foi alterado;</li>
                                    <li>Agenda de Recebíveis por UR: é a novidade trazida pela resolução do Banco Central.</li>
                                </ul>
                                <p>Você verá os valores antecipados indicados como &quot;total pago antecipação eventual&quot;. Além disso, o Banco Central alterou as regras de deduções de aluguel, chargeback e cancelamentos. Considere contratar a antecipação automática na azulzinha para sempre ter saldo disponível.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Meu estabelecimento recebe as vendas de crédito em 2 dias. Nesse caso, o que muda no meu dia a dia a partir da Resolução 264?",
                        answer: (
                            <div className="space-y-2">
                                <p>Quando você clicar em &quot;Recebimentos&quot; no menu do App ou Portal, aparecerá uma nova tela com 2 opções de consulta:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Resumo de Recebimentos: é o extrato que você já costuma usar e não foi alterado;</li>
                                    <li>Agenda de Recebíveis por UR: é a novidade trazida pela resolução do Banco Central.</li>
                                </ul>
                                <p>Além disso, o Banco Central alterou as regras de deduções de aluguel, chargeback e cancelamentos. Mantenha suas vendas e sua antecipação na azulzinha para sempre ter saldo disponível.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Meu estabelecimento contratou uma operação de crédito usando a agenda de recebíveis de cartões como garantia. Nesse caso, o que muda no meu dia a dia a partir da Resolução 264?",
                        answer: "Depende de quais foram as condições do contrato, das suas vendas e deduções a serem feitas. Para promover uma maior oferta de crédito com menores taxas, o Banco Central colocou 2 restrições à credenciadora na forma como ela faz as deduções de valores de aluguel da maquininha, débitos de chargeback, cancelamento de vendas e outros tipos de ajustes. Essas restrições reduzem o risco do financiador.",
                    },
                ],
            },
            {
                title: "Mudanças promovidas pelo Banco Central",
                items: [
                    {
                        question: "O que é a Agenda de Recebíveis por UR?",
                        answer: (
                            <div className="space-y-2">
                                <p>Como a UR é a moeda de negociação de seu estabelecimento com o mercado, foi necessário estabelecer uma consulta de agenda de recebíveis baseada nas URs, pois as informações atuais das credenciadoras são importantes para conciliação, mas não suficientes para a plena compreensão de como cada UR é tratada quando são feitas negociações e deduções.</p>
                                <p>Dessa forma, você saberá, para cada UR: quais vendas a formaram, o que foi descontado de MDR, quais deduções foram feitas, os ajustes a crédito, o quanto foi utilizada em negociações de antecipação, gravame e cessão, e quais valores foram pagos para o estabelecimento ou financiador.</p>
                                <p>Essa nova consulta não substitui as informações que você já acessa sobre vendas e recebimentos no App e Portal.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Para que serve a contestação de operações?",
                        answer: (
                            <div className="space-y-2">
                                <p>Houve situações em que o estabelecimento não reconheceu alguma negociação supostamente realizada com determinado financiador. Isso pode ter ocorrido por motivos como:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>O estabelecimento realizou a negociação, mas as informações da credenciadora dificultavam a identificação da operação;</li>
                                    <li>Por falha do financiador, o valor foi multiplicado pelos meses em vez de distribuído, tornando-o exorbitante;</li>
                                    <li>O estabelecimento fez cotação mas não assinou o contrato e, por falha do financiador, as informações foram enviadas à registradora.</li>
                                </ul>
                                <p>Em função dessas situações, foi criado o processo de contestação de operações de forma eletrônica. Na azulzinha, você pode usar o App, Portal ou WhatsApp para fazer sua contestação.</p>
                            </div>
                        ),
                    },
                    {
                        question: "O que foi alterado na compensação do valor do aluguel da maquininha e débitos de chargeback, cancelamento de vendas e outros tipos na agenda de recebíveis?",
                        answer: (
                            <div className="space-y-2">
                                <p>O Banco Central colocou 2 restrições à credenciadora para promover uma maior oferta de crédito com menores taxas:</p>
                                <p><strong>1ª restrição:</strong> As URs negociadas sobre um determinado percentual não podem ser usadas para compensação de débitos, mesmo que o percentual seja inferior a 100%.</p>
                                <p><strong>Exemplo:</strong> O aluguel é de R$ 100 e o saldo da agenda é R$ 1.000, mas 50% das URs foram dadas como garantia. O aluguel não poderá ser compensado em nenhuma dessas URs. Se toda a agenda estiver nessas condições, o aluguel será compensado apenas quando forem realizadas novas vendas.</p>
                                <p><strong>2ª restrição:</strong> As URs negociadas sobre um valor pré-definido podem ser usadas para compensação de débitos, mas apenas nos valores livres.</p>
                                <p><strong>Exemplo:</strong> Cessão de R$ 1.000 sobre uma UR Visa Crédito de R$ 1.500. O valor máximo compensável nessa UR é de R$ 500. Se ocorrer um chargeback de R$ 800 sem outras URs na agenda, apenas R$ 500 serão compensados e R$ 300 ficarão pendentes.</p>
                                <p>Exceção: para chargeback ou cancelamento vinculados a uma venda específica, se a UR original ainda não foi paga, seu valor poderá ser utilizado para compensação, mesmo que a UR já tenha sido usada em gravame ou cessão.</p>
                            </div>
                        ),
                    },
                    {
                        question: "E se a UR não tiver sido registrada ainda e houver débitos a serem compensados, o que acontece?",
                        answer: (
                            <div className="space-y-2">
                                <p>Nesse caso, a credenciadora pode realizar a compensação do débito e registrar a UR no valor que sobrar, ou nem registrar, se o valor for zero.</p>
                                <p><strong>Exemplo:</strong> O estabelecimento realizou vendas com cartão de débito Mastercard em 06/03/24 no valor de R$ 200 e o aluguel da maquininha é de R$ 100. Descontando a taxa de administração de 2%, ao invés da UR ser registrada em R$ 196, o aluguel será compensado e a UR será registrada no valor de R$ 96.</p>
                            </div>
                        ),
                    },
                    {
                        question: "E se a UR não tiver sido negociada e houver débitos a serem compensados, o que acontece?",
                        answer: "Nesse caso, a credenciadora pode realizar a compensação do débito e atualizar o valor da UR.",
                    },
                    {
                        question: "Se o cancelamento da venda ocorrer depois que a UR original já foi paga, poderá ser compensado em outra UR?",
                        answer: "Sim, tanto o cancelamento quanto chargeback podem ser compensados em outra UR, desde que respeitadas as regras do Banco Central.",
                    },
                    {
                        question: "O que foi alterado nas regras sobre cancelamento de vendas?",
                        answer: (
                            <div className="space-y-2">
                                <p>As regras atuais que definem se o cancelamento será ou não autorizado serão mantidas. Porém, a solicitação de cancelamento poderá não ser atendida mesmo havendo saldo na agenda, pois será necessário verificar se há URs que possam ser utilizadas para compensar esse débito.</p>
                                <p><strong>1º Exemplo:</strong> Duas URs (Elo Crédito R$ 100 venc. 10/03/2024 e Visa Crédito R$ 700 venc. 19/03/2024) foram dadas em garantia em seu valor total. A solicitação de cancelamento de R$ 200 foi realizada em 05/03/2024 e a UR original já foi paga. Mesmo com agenda de R$ 800, o cancelamento não será autorizado pois não pode ser compensado em nenhuma dessas URs.</p>
                                <p><strong>2º Exemplo:</strong> Essas URs não foram negociadas. Nesse caso, o cancelamento será autorizado e compensado nessas URs.</p>
                            </div>
                        ),
                    },
                ],
            },
        ],
    },
];

export default regulatoryFaqData;
