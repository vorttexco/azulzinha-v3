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
                        answer: (
                            <div className="space-y-2">
                                <p>É uma norma do Banco Central que define regras sobre registro e utilização de recebíveis de cartões em antecipações, empréstimos e outras operações de crédito. As regras definidas nesta resolução vão possibilitar uma maior oferta de produtos e serviços para seu estabelecimento. Você poderá usar a agenda de recebíveis de cartões de crédito e débito para negociar e selecionar as condições mais vantajosas. Essa norma substituiu a Circular 3952.</p>
                                <p>Assista o <a href="https://azulzinhadacaixa.com.br/midias/video01-azulzinha-resolucao264eUR.mp4" target="_blank" rel="noopener noreferrer" className="text-azul underline">vídeo</a> sobre a Resolução 264 e UR.</p>
                            </div>
                        ),
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
                                <p><strong>Exemplo</strong>: Em 04/03/2024, foram realizadas 2 vendas de crédito à vista da Mastercard: a primeira venda foi de R$ 100,00 e a segunda foi de R$ 200,00. Supondo uma taxa de administração de 2%, o valor líquido para pagamento em 04/04/2023 será, respectivamente, de R$ 98,00 e R$ 196,00. Somando-se ambas, teremos a UR no valor de R$ 294,00.</p>
                                <p>Assista o <a href="https://azulzinhadacaixa.com.br/midias/video01-azulzinha-resolucao264eUR.mp4" target="_blank" rel="noopener noreferrer" className="text-azul underline">vídeo</a> sobre a Resolução 264 e UR.</p>
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
                                <p><a href="https://azulzinhadacaixa.com.br/midias/video01-azulzinha-resolucao264eUR.mp4" target="_blank" rel="noopener noreferrer" className="text-azul underline">Assista aqui</a> o vídeo sobre a Resolução 264 e UR e, <a href="https://azulzinhadacaixa.com.br/midias/video04-azulzinha-Compensacaodedebito01.mp4" target="_blank" rel="noopener noreferrer" className="text-azul underline">clicando aqui</a>, tenha acesso ao vídeo azulzinha - Compensação de Débitos - Parte 1</p>
                            </div>
                        ),
                    },
                    {
                        question: "A UR pode alterar de valor depois que é registrada no cartório?",
                        answer: (
                            <div className="space-y-2">
                                <p>Sim, o valor da UR pode ficar menor, em função de deduções realizadas pela credenciadora, ou pode ficar maior, através de novas vendas realizadas pelo estabelecimento que coincidem nas mesmas URs, ou ainda, ajustes a crédito feitos pela credenciadora em comum acordo com o estabelecimento:</p>
                                <p>1º Exemplo:</p>
                                <p>Em 03/03/2024, seu estabelecimento fez vendas que totalizaram R$ 1.000,00 e todas foram pagas com cartão de crédito Mastercard à vista, por diferentes clientes. Descontando uma taxa de administração (MDR) de 2%, teremos uma UR de Mastercard Crédito com vencimento em 03/04/2024 no valor de R$ 980,00. Foi feita cobrança de aluguel do mês de março de R$ 80,00, descontada nessa UR. Com isso, seu valor reduziu para R$ 900,00.</p>
                                <p>2º Exemplo:</p>
                                <p>Uma venda de R$ 900,00 em 03/03/2024 foi paga por seu cliente com cartão Elo em 3x sem juros, o que gerou 3 URs diferentes, em função da data de liquidação ser diferente entre as parcelas. Descontando uma taxa de administração (MDR) de 2%, teremos as seguintes URs:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Elo Crédito com vencimento em 03/04/2024 no valor de R$ 294,00;</li>
                                    <li>Elo Crédito com vencimento em 03/05/2024 no valor de R$ 294,00;</li>
                                    <li>Elo Crédito com vencimento em 03/06/2024 no valor de R$ 294,00;</li>
                                </ul>
                                <p>Em 03/04/2024, seu estabelecimento realizou uma venda de R$ 200,00 paga com cartão de crédito Elo à vista. A UR dessa venda seria uma Elo Crédito com vencimento em 03/05/2024, que já foi registrada. Dessa forma, apenas o valor líquido de R$ 196,00 será adicionado a essa UR e o seu valor será atualizado para R$ 490,00.</p>
                                <p><a href="https://azulzinhadacaixa.com.br/midias/video01-azulzinha-resolucao264eUR.mp4" target="_blank" rel="noopener noreferrer" className="text-azul underline">Assista aqui</a> o vídeo sobre a Resolução 264 e UR e, <a href="https://azulzinhadacaixa.com.br/midias/video04-azulzinha-Compensacaodedebito01.mp4" target="_blank" rel="noopener noreferrer" className="text-azul underline">clicando aqui</a>, tenha acesso ao vídeo Compensação de Débitos - Parte 1</p>
                            </div>
                        ),
                    },
                    {
                        question: "Posso negociar URs que tenham seu valor alterado ou apenas aquelas que tenham o mesmo valor desde o momento em que foram registradas?",
                        answer: (
                            <div className="space-y-2">
                                <p>Seu estabelecimento poderá negociar as URs com valores atualizados, considerando-se as situações abaixo:</p>
                                <p><strong>UR não negociada antes da alteração de valor</strong></p>
                                <p>Exemplo:</p>
                                <p>UR registrada em 23/04/2024 com vencimento em 22/05/2025 no valor de R$ 200,00 foi atualizada para R$ 150,00 em 02/05/2024. Não foi negociada antes dessa atualização e depois foi negociada numa operação de cessão. Portanto, o valor cedido foi de R$ 150,00 e não de R$ 200,00.</p>
                                <p><strong>UR negociada antes da alteração de valor e com valor livre após negociação</strong></p>
                                <p>1º Exemplo:</p>
                                <p>UR registrada em 23/04/2024 com vencimento em 22/05/2025 no valor de R$ 200,00 foi antecipada parcialmente em R$ 120,00. Com isso, foi atualizada para R$ 80,00 no dia útil seguinte à antecipação. Posteriormente, foi feita uma dedução de R$ 20,00, reduzindo o valor da UR para R$ 60,00. O estabelecimento poderá usar esse valor residual em outra negociação.</p>
                                <p>2º Exemplo:</p>
                                <p>UR registrada em 23/04/2024 com vencimento em 22/05/2025 no valor de R$ 200,00 foi depois negociada em 40%. Com isso, o valor de R$ 200,00 será desmembrado entre R$ 80,00 (a ser pago no domicílio indicado pelo financiador) e R$ 120,00 (a ser pago no domicílio preferencial do estabelecimento). Posteriormente, foi feita uma dedução de R$ 10,00, reduzindo o valor da UR para R$ 190,00. Com isso, o valor de R$ 190,00 será desmembrado entre R$ 76,00 (a ser pago no domicílio indicado pelo financiador) e R$ 114,00 (a ser pago no domicílio preferencial do estabelecimento). O estabelecimento poderá usar o valor livre em outra negociação.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Como o financiador fica sabendo se os valores das URs foram alterados?",
                        answer: "Se você autorizou o financiador a consultar sua agenda de recebíveis ou se você fechou alguma negociação com o financiador, então ele receberá os valores das URs atualizados através do ecossistema do Banco Central. A credenciadora, além da obrigação de registrar suas vendas no formato de URs, tem a obrigação de manter suas URs atualizadas, para que possam ser negociadas nos seus valores corretos. A credenciadora envia as URs para uma registradora autorizada pelo Banco Central. Essa registradora, por sua vez, é responsável por compartilhar essas informações com toda a segurança, para que o financiador as receba.",
                    },
                    {
                        question: "Quantas URs é possível ter num ano?",
                        answer: (
                            <div className="space-y-2">
                                <p>Depende de quando e como são pagas as vendas que seu estabelecimento realiza, ou seja, quais bandeiras e produtos. No cenário seguinte, temos:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>6 bandeiras de crédito: Mastercard, Visa, Elo, Amex, Hipercard e Cabal;</li>
                                    <li>4 bandeiras de débito: Mastercard, Visa, Elo e Cabal.</li>
                                </ul>
                                <p>Considerando-se que um ano tem 365 dias e, desses, uma média de 252 dias úteis, temos uma combinação máxima possível de 2.520 URs por ano.</p>
                                <p>Nesse cenário, consideramos que as vendas foram feitas numa única credenciadora por um mesmo CNPJ/CPF.</p>
                                <p>Se seu estabelecimento estiver cadastrado em 2 credenciadoras, então a quantidade de URs é de até 5.040 por ano.</p>
                                <p>Se seu estabelecimento realizar vendas em mais de uma loja com diferentes CNPJs, a quantidade máxima de URs será multiplicada pela quantidade de CNPJs distintos.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Posso negociar apenas uma parte das URs ou sou obrigado a negociar todas as URs de uma só vez?",
                        answer: (
                            <div className="space-y-2">
                                <p>A sua agenda de recebíveis é um conjunto de diversas URs. Você pode negociar uma parte das URs, todas as URs, um pedacinho de cada UR. Você avalia as condições apresentadas pelo financiador e tem a liberdade de escolher o que for melhor para seu estabelecimento. Por isso, é possível negociar, para cada UR, um valor pré-definido ou um percentual (%) sobre o valor da UR.</p>
                                <p>Assista o <a href="https://azulzinhadacaixa.com.br/midias/video01-azulzinha-resolucao264eUR.mp4" target="_blank" rel="noopener noreferrer" className="text-azul underline">vídeo</a> sobre a Resolução 264 e UR.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Posso negociar várias operações numa única UR, tanto em valor pré-definido ou percentual (%)?",
                        answer: (
                            <div className="space-y-2">
                                <p>Para cada contrato firmado com o financiador, será necessário definir se as URs desse contrato serão negociadas em valor pré-definido ou percentual. Porém, é possível negociar diferentes contratos com o mesmo financiador, ou ainda diferentes contratos com diferentes financiadores, em cada uma das URs. O ecossistema do Banco Central permite essa flexibilidade, pois é feita uma ordenação automática dos contratos por ordem de chegada. Com isso, ainda que haja aparente sobreposição de negociações para as mesmas URs, é respeitada essa ordenação no momento de realizar o pagamento das URs.</p>
                                <p>Exemplo:</p>
                                <p>O financiador A registrou 50% do valor da UR, o financiador B registrou R$ 1.000,00 do valor da UR e o financiador C registrou 100% do valor da UR. Supondo que o valor inicial da UR era de R$ 1.500,00 e se manteve até o momento do pagamento. Então, houve um pagamento de R$ 750,00 no domicílio indicado pelo financiador A e outro pagamento de R$ 750,00 no domicílio indicado pelo financiador B. Com isso, o financiador B não recebeu todo o valor que solicitou e o financiador C não recebeu nenhum valor, em função da ordem de chegada deles e do valor disponível da UR.</p>
                            </div>
                        ),
                    },
                    {
                        question: "O que é gravame?",
                        answer: (
                            <div className="space-y-2">
                                <p>Gravame já é um termo conhecido por quem compra um carro. Ele é o registro de contrato de financiamento: o valor financiado fica registrado no sistema do Departamento Estadual de Trânsito e, neste caso, a baixa do gravame só é feita após a quitação do acordo – e só então o Detran autoriza que esse veículo possa ser vendido ou transferido a outra pessoa.</p>
                                <p>Trazendo este conceito para o mundo das vendas efetuadas no cartão de crédito ou débito, o gravame também é um registro, desta vez no Banco Central, de que as URs foram dadas como garantia de um contrato ou negociação de crédito. Ele impede que o mesmo recebível seja usado como garantia em outra operação ou que seja cedido a outra entidade enquanto estiver ativo, ou seja, enquanto esse crédito não tiver sido quitado.</p>
                                <p>Exemplo:</p>
                                <p>se o estabelecimento pede ao banco um empréstimo de 30 mil reais e tem a receber por suas vendas em cartão 40 mil reais, os 30 mil reais passam a ser considerados um “valor gravamado”. Nesse processo, a credenciadora fica responsável por realizar o pagamento dos 30 mil reais na conta informada pela instituição financiadora na data prevista.</p>
                                <p>É importante ressaltar que a instituição financiadora não precisa, necessariamente, ser a mesma cadastrada para depósito dos recebíveis junto à credenciadora (o domicílio bancário). Se o varejista fez um empréstimo com o banco X, mas tem como domicílio bancário o banco Y, a credenciadora deve enviar diretamente os recursos gravamados para o banco X.</p>
                                <p>Assista o <a href="https://azulzinhadacaixa.com.br/midias/video02-azulzinha-Gravame.mp4" target="_blank" rel="noopener noreferrer" className="text-azul underline">vídeo</a> sobre gravame.</p>
                            </div>
                        ),
                    },
                    {
                        question: "O gravame é uma trava de domicílio?",
                        answer: (
                            <div className="space-y-2">
                                <p>Antes da implantação da Circular 3952, em 07/06/2021, era comum os bancos realizarem a trava de domicílio, em que bloqueavam 100% da agenda do estabelecimento como garantia de um empréstimo ou outra operação de crédito. Agora, o estabelecimento tem mais flexibilidade para escolher as condições mais vantajosas. Como a agenda de recebíveis se tornou um conjunto de URs e essas URs podem ser negociadas individualmente, você pode negociar um gravame parcial de sua agenda. Não precisa ser total. Esse gravame parcial pode ser um valor pré-definido em reais (R$) ou um percentual da agenda contemplada na negociação.</p>
                            </div>
                        ),
                    },
                    {
                        question: "O que é cessão?",
                        answer: (
                            <div className="space-y-2">
                                <p>A cessão é um tipo de operação que seu estabelecimento pode contratar e ter um dinheiro rápido em caixa, mediante desconto de alguma taxa. É muito comum que operações de antecipação sejam feitas através de cessão.</p>
                                <p>Na cessão, você vende as URs para um financiador. Com isso, o pagamento dessas URs será feito para o financiador, uma vez que você já recebeu dele o valor antecipado.</p>
                                <p>Exemplo:</p>
                                <p>O estabelecimento possui agenda de R$50.000, que receberia em 19/09/2024. Fez uma cessão de R$30.000 para um financiador em 22/03/2024. Com isso, o estabelecimento recebeu em 22/03/2024 do financiador algum valor menor que R$30.000 (descontada uma taxa negociada entre o estabelecimento e o financiador) e receberá da credenciadora em 19/09/2024 o valor de R$20.000 (= R$50.000 – R$30.000). A credenciadora pagará R$30.000 ao financiador em 19/09/2024.</p>
                                <p>Assista o <a href="https://azulzinhadacaixa.com.br/midias/video03-azulzinha-Cessao.mp4" target="_blank" rel="noopener noreferrer" className="text-azul underline">vídeo</a> sobre cessão.</p>
                            </div>
                        ),
                    },
                    {
                        question: "O que é fumaça?",
                        answer: (
                            <div className="space-y-2">
                                <p>No conceito da Resolução 264, o fumaça está associado a vendas não realizadas pelo estabelecimento e, portanto, não registradas em formato de UR. Por trás desse conceito está uma operação de crédito (empréstimo) em que o estabelecimento utiliza os futuros recebíveis de cartões. O empréstimo é concedido conforme o histórico de faturamento do estabelecimento e a agenda disponível. Do ponto de vista prático, quando um financiador envia um contrato fumaça sobre a agenda de recebíveis do cliente (podendo atingir uma parte ou total), as novas vendas realizadas pelo estabelecimento que foram objeto do contrato serão pagas conforme os dados de domicílio bancário passadas pelo financiador. Dessa forma, o financiador garante a gestão de risco do empréstimo concedido.</p>
                            </div>
                        ),
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
                                <p>Quando você clicar em “Recebimentos” no menu do <a href="https://azulzinhadacaixa.com.br/app" target="_blank" rel="noopener noreferrer" className="text-azul underline">App</a> ou <a href="https://portal.azulzinhadacaixa.com.br/" target="_blank" rel="noopener noreferrer" className="text-azul underline">Portal</a>, aparecerá uma nova tela com 2 opções de consulta:</p>
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
                                <p>Quando você clicar em “Recebimentos” no menu do <a href="https://azulzinhadacaixa.com.br/app" target="_blank" rel="noopener noreferrer" className="text-azul underline">App</a> ou <a href="https://portal.azulzinhadacaixa.com.br/" target="_blank" rel="noopener noreferrer" className="text-azul underline">Portal</a>, aparecerá uma nova tela com 2 opções de consulta:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Resumo de Recebimentos: é o extrato que você já costuma usar e não foi alterado;</li>
                                    <li>Agenda de Recebíveis por UR: é a novidade trazida pela resolução do Banco Central.</li>
                                </ul>
                                <p>Você verá os valores antecipados indicados como “total pago antecipação automática” nessa nova consulta no período que você selecionar e também terá detalhes do valor antecipado em cada UR, ao selecionar a opção “Pagamentos”.</p>
                                <p>O Histórico de Antecipações com todos os detalhes do que foi pago dia a dia, bem como a consulta de Produtos Contratados contendo a taxa de antecipação da automática, a data de contratação e outras informações continuam sendo exibidos. Na página inicial, clicar em “Antecipar” e depois em “Histórico de Antecipações” e “Produtos Contratados”.</p>
                                <p>No <a href="https://azulzinhadacaixa.com.br/app" target="_blank" rel="noopener noreferrer" className="text-azul underline">App</a>, siga o caminho <strong>Antecipação &gt; Histórico para consultar as antecipações e produtos contratados e no <a href="https://portal.azulzinhadacaixa.com.br/" target="_blank" rel="noopener noreferrer" className="text-azul underline">Portal</a>, você pode visitar</strong> Antecipação &gt; Histórico de antecipações e/ou Antecipação &gt; Produtos contratados. Além disso, o Banco Central alterou as regras na forma como a credenciadora faz as deduções de valores de aluguel da maquininha, débitos de chargeback, cancelamento de vendas e outros tipos de ajustes. Mantenha suas vendas e sua antecipação automática na azulzinha para que seu estabelecimento tenha sempre saldo disponível para cobrir os valores necessários para esses ajustes sob as novas regras do Bacen.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Meu estabelecimento faz antecipação de forma eventual na azulzinha. Nesse caso, o que muda no meu dia a dia a partir da Resolução 264?",
                        answer: (
                            <div className="space-y-2">
                                <p>Quando você clicar em “Recebimentos” no menu do <a href="https://azulzinhadacaixa.com.br/app" target="_blank" rel="noopener noreferrer" className="text-azul underline">App</a> ou <a href="https://portal.azulzinhadacaixa.com.br/" target="_blank" rel="noopener noreferrer" className="text-azul underline">Portal</a>, aparecerá uma nova tela com 2 opções de consulta:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Resumo de Recebimentos: é o extrato que você já costuma usar e não foi alterado;</li>
                                    <li>Agenda de Recebíveis por UR: é a novidade trazida pela resolução do Banco Central.</li>
                                </ul>
                                <p>Você verá os valores antecipados indicados como “total pago antecipação eventual” nessa nova consulta no período que você selecionar e também terá detalhes do valor antecipado em cada UR, ao selecionar a opção “Pagamentos”.</p>
                                <p>O Histórico de Antecipações com todos os detalhes do que foi pago e outras informações continuam sendo exibidos. Na página inicial, clicar em “Antecipar” e depois em “Histórico de Antecipações”.</p>
                                <p>Além disso, o Banco Central alterou as regras na forma como a credenciadora faz as deduções de valores de aluguel da maquininha, débitos de chargeback, cancelamento de vendas e outros tipos de ajustes. Mantenha suas vendas e <a href="https://azulzinhadacaixa.com.br/antecipacao-de-vendas" target="_blank" rel="noopener noreferrer" className="text-azul underline">contrate</a> a antecipação automática na azulzinha para que seu estabelecimento tenha sempre saldo disponível para cobrir os valores necessários para esses ajustes sob as novas regras do Bacen.</p>
                                <p>Para contratar a automática, clique em “Antecipar” na página inicial do <a href="https://azulzinhadacaixa.com.br/app" target="_blank" rel="noopener noreferrer" className="text-azul underline">App</a> ou <a href="https://portal.azulzinhadacaixa.com.br/" target="_blank" rel="noopener noreferrer" className="text-azul underline">Portal</a> e depois escolha a opção de antecipação automática mais vantajosa para seu estabelecimento. No <a href="https://azulzinhadacaixa.com.br/app" target="_blank" rel="noopener noreferrer" className="text-azul underline">App</a>, clique em <strong>Antecipação &gt; Nova Antecipação &gt; Automática e, no <a href="https://portal.azulzinhadacaixa.com.br/" target="_blank" rel="noopener noreferrer" className="text-azul underline">Portal</a>, siga o caminho Antecipação &gt; Antecipar automaticamente.</strong></p>
                            </div>
                        ),
                    },
                    {
                        question: "Meu estabelecimento recebe as vendas de crédito em 2 dias. Nesse caso, o que muda no meu dia a dia a partir da Resolução 264?",
                        answer: (
                            <div className="space-y-2">
                                <p>Quando você clicar em “Recebimentos” no menu do <a href="https://azulzinhadacaixa.com.br/app" target="_blank" rel="noopener noreferrer" className="text-azul underline">App</a> ou <a href="https://portal.azulzinhadacaixa.com.br/" target="_blank" rel="noopener noreferrer" className="text-azul underline">Portal</a>, aparecerá uma nova tela com 2 opções de consulta:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Resumo de Recebimentos: é o extrato que você já costuma usar e não foi alterado;</li>
                                    <li>Agenda de Recebíveis por UR: é a novidade trazida pela resolução do Banco Central.</li>
                                </ul>
                                <p>Além disso, o Banco Central alterou as regras na forma como a credenciadora faz as deduções de valores de aluguel da maquininha, débitos de chargeback, cancelamento de vendas e outros tipos de ajustes. Mantenha suas vendas e sua antecipação na azulzinha para que seu estabelecimento tenha sempre saldo disponível para cobrir os valores necessários para esses ajustes sob as novas regras do Bacen.</p>
                                <p>Clique aqui para ver o <a href="https://azulzinhadacaixa.com.br/midias/video04-azulzinha-Compensacaodedebito01.mp4" target="_blank" rel="noopener noreferrer" className="text-azul underline">vídeo</a> Parte 1 e aqui para ver <a href="https://azulzinhadacaixa.com.br/midias/video05-azulzinha-Compensacaodedebito02.mp4" target="_blank" rel="noopener noreferrer" className="text-azul underline">vídeo</a> Parte 2 sobre Compensação de Débitos.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Meu estabelecimento contratou uma operação de crédito usando a agenda de recebíveis de cartões como garantia. Nesse caso, o que muda no meu dia a dia a partir da Resolução 264?",
                        answer: "Depende de quais foram as condições do contrato, das suas vendas e deduções a serem feitas. Para promover uma maior oferta de crédito com menores taxas, o Banco Central colocou 2 restrições à credenciadora (aquela que fornece a maquininha de cartão) na forma como a credenciadora faz as deduções de valores de aluguel da maquininha, débitos de chargeback, cancelamento de vendas e outros tipos de ajustes. Essas restrições reduzem o risco do financiador.",
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
                                <p>Como a UR é a moeda de negociação de seu estabelecimento com o mercado, foi necessário estabelecer uma <strong>consulta de agenda de recebíveis baseada nas URs</strong>, pois as informações demonstradas atualmente pelas credenciadoras são muito importantes e imprescindíveis para conciliação, mas não suficientes para a plena compreensão de como cada UR é tratada quando são feitas negociações e deduções. Dessa forma, você saberá, para cada uma das URs em nome do seu estabelecimento, quais foram as vendas que formaram a UR, o que foi descontado de taxa de administração (MDR), quais as deduções de aluguel, chargeback, cancelamento e outras foram feitas na UR, quais os ajustes a crédito, o quanto cada UR foi utilizada em negociações diversas de antecipação, gravame, cessão e outros ônus, e quais valores foram pagos para o seu estabelecimento ou financiador, conforme as negociações acordadas. Essa nova consulta não substitui as informações que você já acessa sobre vendas e seus recebimentos no <a href="https://azulzinhadacaixa.com.br/app" target="_blank" rel="noopener noreferrer" className="text-azul underline">App</a> e <a href="https://portal.azulzinhadacaixa.com.br/" target="_blank" rel="noopener noreferrer" className="text-azul underline">Portal</a>.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Para que serve a contestação de operações?",
                        answer: (
                            <div className="space-y-2">
                                <p>Houve situações em que o estabelecimento não reconheceu alguma negociação supostamente realizada com determinado financiador. Isso pode ter ocorrido em função de alguns motivos, tais como:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>O estabelecimento realizou a negociação com o financiador, mas as informações apresentadas pela credenciadora dificultavam a identificação da operação realizada. Isso ocorre, porque a credenciadora não recebe do financiador nem da registradora autorizada pelo Banco Central todas as condições contratadas; recebe apenas se foi gravame, cessão ou outros ônus, qual o financiador, as URs envolvidas na negociação e os valores ou percentuais negociados em cada UR;</li>
                                    <li>O estabelecimento realizou a negociação com o financiador considerando-se um único valor para o contrato num período definido, porém, por falha no processo do financiador, o valor, que deveria ter sido distribuído entre os meses, foi multiplicado pelos meses, tornando o valor exorbitante e muito acima da capacidade financeira do estabelecimento;</li>
                                    <li>O estabelecimento fez cotação com o financiador, mas não chegou a assinar o contrato. Porém, por falha no processo do financiador, foram enviadas as informações para a registradora autorizada pelo Banco Central, que, por sua vez, repassou à credenciadora para que realize o pagamento das URs de acordo com as informações do contrato.</li>
                                </ul>
                                <p>Em função dessas e outras situações, foi criado o processo de contestação de operações, em que a reclamação do estabelecimento é encaminhada ao ecossistema do Banco Central e o financiador tem a obrigação de responder satisfatoriamente à contestação recebida ou, então, baixar ou corrigir o contrato indevido. Esse processo já existia e foi aprimorado de modo que, caso o estabelecimento precise fazer uma contestação, não tenha que ligar a uma central de atendimento; que possa fazer de forma eletrônica.</p>
                                <p>Na azulzinha, você pode usar o <a href="https://azulzinhadacaixa.com.br/app" target="_blank" rel="noopener noreferrer" className="text-azul underline">App</a>, <a href="https://portal.azulzinhadacaixa.com.br/" target="_blank" rel="noopener noreferrer" className="text-azul underline">Portal</a> ou <a href="https://wa.me/5511941473336" target="_blank" rel="noopener noreferrer" className="text-azul underline">WhatsApp</a> para fazer sua contestação, se precisar.</p>
                            </div>
                        ),
                    },
                    {
                        question: "O que foi alterado na compensação do valor do aluguel da maquininha e débitos de chargeback, cancelamento de vendas e outros tipos na agenda de recebíveis?",
                        answer: (
                            <div className="space-y-2">
                                <p>Para promover uma maior oferta de crédito com menores taxas, o Banco Central colocou 2 restrições à credenciadora na forma como a credenciadora faz as deduções de valores de aluguel da maquininha, débitos de chargeback, cancelamento de vendas e outros tipos de ajustes. Essas restrições reduzem o risco do financiador.</p>
                                <p>1ª restrição:</p>
                                <p>As URs registradas que tenham sido negociadas sobre um determinado percentual não podem ser usadas para compensação de Débitos, mesmo que o percentual seja inferior a 100%.</p>
                                <p>Exemplo:</p>
                                <p>O aluguel da maquininha é de R$ 100 e o saldo disponível na agenda é de R$ 1.000, composto por 10 URs de igual valor. Porém, 50% do valor dessas URs foi dado como garantia em uma operação de crédito. Então, o aluguel não poderá ser compensado em nenhuma dessas URs. Se o estabelecimento tiver negociado toda a sua agenda nessas condições, o aluguel será compensado apenas quando forem realizadas novas vendas. Do contrário, a dívida ficará pendente.</p>
                                <p>2ª restrição:</p>
                                <p>As URs registradas que tenham sido negociadas sobre um valor pré-definido podem ser usadas para compensação de Débitos, desde que a compensação seja feita apenas nos valores livres das URs.</p>
                                <p>Exemplo:</p>
                                <p>Houve uma cessão de R$ 1.000 sobre uma UR Visa Crédito no valor de R$ 1.500 que vence em 04/12/2024. Nesse caso, o valor máximo do débito a ser compensado nessa UR é de R$ 500, pois os demais R$ 1.000 já estão comprometidos com o financiador. Se ocorrer um chargeback de R$ 800 e o estabelecimento não tiver mais nenhuma UR na sua agenda, apenas R$ 500 serão compensados, enquanto que R$ 300 ficarão pendentes.</p>
                                <p><strong>Pontos muito importantes em função dessas restrições:</strong></p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>É possível que o estabelecimento tenha um saldo de agenda com valor suficiente para cobrir uma dívida, mas este saldo não poder ser utilizado para pagar a dívida;</li>
                                    <li>É possível que uma dívida seja paga muito tempo depois até que novas vendas sejam realizadas ou que o contrato seja quitado.</li>
                                </ul>
                                <p>Clique <a href="https://azulzinhadacaixa.com.br/midias/video04-azulzinha-Compensacaodedebito01.mp4" target="_blank" rel="noopener noreferrer" className="text-azul underline">aqui</a> e assista ao vídeo sobre Compensação de Débitos - Parte 1.</p>
                                <p>Para evitar essas situações citadas anteriormente, concentre suas vendas de crédito e débito na azulzinha.</p>
                                <p>Há uma exceção na aplicação dessas restrições, que é exclusivo para o débito de <strong>chargeback ou cancelamento de venda</strong>.</p>
                                <p>O cancelamento e o chargeback estão vinculados a uma determinada venda. Cada venda, no valor líquido, está agrupada em alguma UR. Dessa forma, podemos pensar num vínculo direto entre o cancelamento ou chargeback de uma venda e sua respectiva UR. Chamamos essa UR de UR original, pois ela é composta pela venda que originou o cancelamento ou chargeback.</p>
                                <p>Exemplo:</p>
                                <p>Temos 3 vendas que formaram uma UR de Mastercard Crédito que vence em 04/04/24. Uma venda de R$ 100, uma de R$ 200 e uma de R$ 300. Descontando uma taxa de administração de 2%, a UR terá o valor de R$ 588. Essa UR foi vendia para o financiador, mas em 30/03/24, ocorreu o cancelamento da venda de R$ 300. Nesse caso, será feita a compensação desse cancelamento na UR. Se a UR original ainda não foi paga, seu valor poderá ser utilizado para compensação desse cancelamento ou chargeback, mesmo que a UR já tenha sido utilizada em operações como gravame e cessão.</p>
                                <p>Para assistir ao vídeo sobre Compensação de Débitos - Parte 2, <a href="https://azulzinhadacaixa.com.br/midias/video05-azulzinha-Compensacaodedebito02.mp4" target="_blank" rel="noopener noreferrer" className="text-azul underline">clique aqui</a>.</p>
                            </div>
                        ),
                    },
                    {
                        question: "E se a UR não tiver sido registrada ainda e houver débitos a serem compensados, o que acontece?",
                        answer: (
                            <div className="space-y-2">
                                <p>Nesse caso, a credenciadora pode realizar a compensação do débito e registrar a UR no valor que sobrar ou nem registrar, se o valor for zero.</p>
                                <p>Exemplo:</p>
                                <p>O estabelecimento realizou vendas com cartão de débito Mastercard em 06/03/24 no valor de R$ 200 e o aluguel da maquininha é de R$ 100. Descontando a taxa de administração de 2%, ao invés da UR ser registrada no valor de R$ 196, o valor do aluguel será compensado e a UR será registrada no valor de R$ 96.</p>
                                <p>Assista aqui o <a href="https://azulzinhadacaixa.com.br/midias/video05-azulzinha-Compensacaodedebito02.mp4" target="_blank" rel="noopener noreferrer" className="text-azul underline">vídeo</a> sobre Compensação de Débitos - Parte 2.</p>
                            </div>
                        ),
                    },
                    {
                        question: "E se a UR não tiver sido negociada e houver débitos a serem compensados, o que acontece?",
                        answer: (
                            <div className="space-y-2">
                                <p>Nesse caso, a credenciadora pode realizar a compensação do débito e atualizar o valor da UR.</p>
                                <p>Assista aqui o <a href="https://azulzinhadacaixa.com.br/midias/video05-azulzinha-Compensacaodedebito02.mp4" target="_blank" rel="noopener noreferrer" className="text-azul underline">vídeo</a> sobre Compensação de Débitos - Parte 2.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Se o cancelamento da venda ocorrer depois que a UR original já foi paga, poderá ser compensado em outra UR?",
                        answer: (
                            <div className="space-y-2">
                                <p>Sim, tanto o cancelamento quanto chargeback podem ser compensados entre outra UR, desde que respeite as regras do Banco Central.</p>
                                <p>Clique aqui e assista o <a href="https://azulzinhadacaixa.com.br/midias/video05-azulzinha-Compensacaodedebito02.mp4" target="_blank" rel="noopener noreferrer" className="text-azul underline">vídeo</a> sobre Compensação de Débitos - Parte 2.</p>
                            </div>
                        ),
                    },
                    {
                        question: "O que foi alterado nas regras sobre cancelamento de vendas?",
                        answer: (
                            <div className="space-y-2">
                                <p>As regras atuais que definem se o cancelamento será ou não autorizado serão mantidas. Porém, da mesma forma como um cancelamento poderá não ser compensado mesmo havendo saldo na agenda, em função das restrições definidas pelo Banco Central, a solicitação de cancelamento poderá não ser atendida mesmo havendo saldo na agenda, pois será necessário verificar se há UR´s que possam ser utilizadas para compensar esse débito.</p>
                                <p>1º Exemplo: Temos uma UR de Elo Crédito no valor de R$ 100,00 com vencimento em 10/03/2024. E uma segunda UR de Visa Crédito no valor de R$ 700,00 com vencimento em 19/03/2024. Ambas foram dadas em garantia em uma operação de crédito em seu valor total. A solicitação de cancelamento foi realizada em 05/03/2024 no valor de R$ 200,00 e a UR original do cancelamento já foi paga em 01/03/2024. Sendo assim, mesmo que a agenda disponível seja de R$ 800,00, o cancelamento não será autorizado, pois ele não poderá ser compensado em nenhuma dessas URs.</p>
                                <p>2º Exemplo: Essas URs não foram negociadas ainda. Nesse caso, o cancelamento será autorizado e compensado nessas URs.</p>
                                <p>Assista aqui o <a href="https://azulzinhadacaixa.com.br/midias/video05-azulzinha-Compensacaodedebito02.mp4" target="_blank" rel="noopener noreferrer" className="text-azul underline">vídeo</a> sobre Compensação de Débitos - Parte 2.</p>
                            </div>
                        ),
                    },
                ],
            },
        ],
    },
];

export default regulatoryFaqData;
