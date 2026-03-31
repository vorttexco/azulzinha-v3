import { FaqCategory } from "@/components/help/HelpFaqSection";

const faqData: FaqCategory[] = [
    {
        label: "Tudo sobre a azulzinha",
        subCategories: [
            {
                title: "Dúvidas sobre a azulzinha",
                items: [
                    {
                        question: "Existe um limite de maquininhas por pedido?",
                        answer: "Sim. No momento do credenciamento a solicitação é de até 05 terminais, podendo posteriormente ser liberado até 30 equipamentos por estabelecimento. Acima de 30 maquininhas, é necessária uma avaliação.",
                    },
                    {
                        question: "Existe a possibilidade de compra da maquininha ou somente aluguel?",
                        answer: "Neste momento, está disponível a opção aluguel.",
                    },
                    {
                        question: "A maquininha precisa de celular?",
                        answer: "Não, não precisa.",
                    },
                ],
            },
            {
                title: "Entrega da sua maquininha",
                items: [
                    {
                        question: "Como acompanhar a entrega de sua máquina?",
                        answer: "Você poderá fazer o acompanhamento da entrega de sua máquina pelo App da azulzinha ou consultar a Central de Relacionamento via atendimento virtual. Ou ainda pelos telefones: 3003 5365 (capitais) e 0800 729 5365 (demais localidades). De segunda a domingo: das 8h às 22h, exceto feriados nacionais.",
                    },
                    {
                        question: "Qual o prazo de entrega da azulzinha?",
                        answer: (
                            <div className="space-y-1">
                                <p>P.S.: os prazos acordados por região, em todo Brasil, são:</p>
                                <p>Capital - 1 dia útil</p>
                                <p>Região Metropolitana - 3 dias úteis</p>
                                <p>Interior - 5 dias úteis</p>
                                <p>TEF: os prazos acordados para todas as regiões do Brasil é de D+5.</p>
                            </div>
                        ),
                    },
                ],
            },
            {
                title: "Manutenção",
                items: [
                    {
                        question: "Como devo solicitar a manutenção da maquininha do meu estabelecimento?",
                        answer: (
                            <div className="space-y-2">
                                <p>
                                    Para solicitar a manutenção da sua maquininha, acesse o Portal da azulzinha{" "}
                                    <a href="https://portal.azulzinhadacaixa.com.br" target="_blank" rel="noopener noreferrer" className="text-azul underline">
                                        portal.azulzinhadacaixa.com.br
                                    </a>
                                    . Menu Solicitações &gt; Preencher os dados &gt; clicar em &apos;Criar caso&apos; &gt; selecionar Motivo: &apos;Equipamento&apos; &gt; Submotivo &apos;selecionar a opção que o equipamento está apresentado o problema&apos; &gt; Sintoma: &apos;selecionar de acordo com a solicitação que precisa ser atendida&apos; &gt; clicar em &apos;Salvar&apos;.
                                </p>
                                <p>
                                    Pelo App da azulzinha, basta acessar: &quot;Atendimento&quot; &gt; &quot;Solicitar&quot; &gt; &quot;Manutenção&quot;, escolher o produto que deseja manutenção, preencher as informações &gt; selecionar o problema apresentado e o motivo.
                                </p>
                                <p>Após a abertura da solicitação nossa área irá entrar em contato para solucionar o caso.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Se a maquininha para de funcionar, o que faço?",
                        answer: "O primeiro passo é abrir um chamado informando que a máquina está com problemas. Você tem a opção de entrar em contato com a nossa Central de Atendimento/suporte técnico e no mesmo momento o nosso time fará os testes necessários para verificar o que ocorre com a sua máquina e se a substituição será necessária. O chamado também poderá ser aberto pelo App ou Portal da azulzinha e, em ambos os casos, retornaremos à solicitação em até 2 dias úteis.",
                    },
                    {
                        question: "Como funciona a reposição de bobinas?",
                        answer: (
                            <div className="space-y-2">
                                <p>Basta solicitar a reposição pelo Portal da azulzinha, App da azulzinha, Central de Atendimento ou atendimento virtual.</p>
                                <p>A azulzinha conta ainda com o envio automático de bobinas que é realizado de 15 em 15 dias. Novos kits serão enviados com base nos itens abaixo:</p>
                                <ul className="list-none space-y-1">
                                    <li>- Volume de transação do estabelecimento</li>
                                    <li>- Faturamento realizado versus orçado mês a mês realizado pela área comercial no momento da sua afiliação</li>
                                    <li>- Cálculos de redutores: envolve referência para do faturamento do estabelecimento</li>
                                    <li>- Cálculos de deflatores: envolve a referência das transações do estabelecimento</li>
                                    <li>- Provisionamento de falta de bobina para o próximo mês</li>
                                    <li>- Subtração das bobinas solicitadas pelo estabelecimento via Central de Atendimento</li>
                                </ul>
                            </div>
                        ),
                    },
                ],
            },
            {
                title: "Cartões e Bandeiras",
                items: [
                    {
                        question: "Quais bandeiras de cartão são aceitas na azulzinha?",
                        answer: <p>A azulzinha aceita mais de 40 bandeiras nacionais, internacionais, regionais e vouchers.</p>,
                    },
                    {
                        question: "Quais cartões de estabelecimentos do ramo de alimentação a azulzinha aceita?",
                        answer: (
                            <div className="space-y-1">
                                <p>VR Benefícios, Alelo, pluxee e Ticket. Para os demais vouchers é possível solicitar a habilitação pelo App.</p>
                                <p>Para consultar como habilitar outras bandeiras, acesse o menu &quot;Atendimento&quot; &gt; &quot;Bandeiras&quot; no App da azulzinha.</p>
                            </div>
                        ),
                    },
                    {
                        question: "A azulzinha aceita cartão digital CAIXA Tem?",
                        answer: "Sim.",
                    },
                    {
                        question: "A azulzinha aceita cartão com tecnologia NFC/ pagamento por aproximação?",
                        answer: "Sim.",
                    },
                ],
            },
            {
                title: "Métodos de pagamentos aceitos",
                items: [
                    {
                        question: "A azulzinha aceita pagar com carteira digital?",
                        answer: "Sim.",
                    },
                    {
                        question: "A azulzinha aceita pagamentos com Pix?",
                        answer: (
                            <p>
                                Sim. Para mais informações{" "}
                                <a href="/pix-azulzinha" className="text-azul underline">clique aqui</a>.
                            </p>
                        ),
                    },
                    {
                        question: "A azulzinha aceita pagar com QR Code?",
                        answer: "Sim.",
                    },
                ],
            },
        ],
    },
    {
        label: "Bandeiras de Voucher Arranjo Aberto",
        subCategories: [
            {
                title: "Novo trilho de Voucher do Arranjo Aberto",
                items: [
                    {
                        question: "O que é o PAT e qual a relação dele com o meu estabelecimento?",
                        answer: "O Programa de Alimentação do Trabalhador (PAT) é uma iniciativa do governo e foi criado para incentivar empresas a oferecer benefícios de alimentação aos seus trabalhadores. A relação do PAT com o seu estabelecimento é que você tem a possibilidade de vender mais ao ampliar a aceitação de cartões de voucher.",
                    },
                    {
                        question: "O que é o novo trilho de modelo de voucher?",
                        answer: "A partir do dia 03 de novembro de 2025, os cartões das bandeiras Visa, Mastercard e Elo, utilizados para alimentação, refeição e cultura, passarão a ser processados na função voucher.",
                    },
                    {
                        question: "Qual a diferença entre arranjo aberto e fechado?",
                        answer: (
                            <div className="space-y-1">
                                <p><strong>Aberto:</strong> Cartões emitidos por emissores com bandeiras Visa, Mastercard e Elo; captura, processamento e liquidação feitos pela Fiserv.</p>
                                <p><strong>Fechado:</strong> Cartões emitidos por empresas como Alelo, Ticket, VR e Pluxee; processamento e liquidação feitos pelas próprias bandeiras.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Quais documentos são obrigatórios?",
                        answer: "O Alvará da Vigilância Sanitária é obrigatório para estabelecimentos de alimentação e refeição. Já o segmento de Cultura não precisa enviar alvará.",
                    },
                    {
                        question: "Como envio a documentação?",
                        answer: (
                            <div className="space-y-2">
                                <p>Se o seu estabelecimento faz parte dos segmentos de alimentação e refeição, a partir de 03 de novembro de 2025, você terá 60 dias para enviar o Certificado de Vigilância Sanitária pelo App azulzinha, conforme o passo a passo a seguir:</p>
                                <ol className="list-decimal pl-5 space-y-1">
                                    <li>Acesse o App azulzinha</li>
                                    <li>No menu Bandeiras, escolha a opção Voucher</li>
                                    <li>Selecione Bandeiras Disponíveis Elo, Mastercard, Visa</li>
                                </ol>
                            </div>
                        ),
                    },
                    {
                        question: "Posso aceitar o voucher das bandeiras Elo, Mastercard, Visa sem enviar o alvará?",
                        answer: "Não. Somente após o envio e validação do alvará da Vigilância Sanitária, você poderá ativar o novo trilho e aceitar esses cartões.",
                    },
                    {
                        question: "Quanto tempo leva para o certificado ser validado pelo App azulzinha?",
                        answer: "Depois do upload do documento no App azulzinha, leva até 1 dia para você ter a resposta no próprio app.",
                    },
                    {
                        question: "Se eu aceito os cartões emitidos pela Alelo, Ticket, Pluxee, VR e outras bandeiras, preciso fazer alguma coisa?",
                        answer: "Não. Para essas bandeiras, os processos não mudam. As informações sobre taxas e condições devem continuar sendo consultadas diretamente com cada bandeira.",
                    },
                    {
                        question: "Como funcionam as transações no POS?",
                        answer: <p>Na Clover ou azulzinha smart, utilize a opção <strong>Voucher</strong> no menu.</p>,
                    },
                    {
                        question: "Qual o prazo de liquidação dos vouchers?",
                        answer: "O prazo de liquidação será D+30.",
                    },
                ],
            },
        ],
    },
    {
        label: "Bandeiras de Voucher Arranjo Fechado",
        subCategories: [],
    },
    {
        label: "CAIXA Tem",
        subCategories: [],
    },
    {
        label: "Clover",
        subCategories: [],
    },
    {
        label: "Crédito e Risco",
        subCategories: [],
    },
    {
        label: "Gestão do seu negócio",
        subCategories: [],
    },
    {
        label: "Lotéricas",
        subCategories: [],
    },
    {
        label: "Link de pagamentos",
        subCategories: [],
    },
    {
        label: "Manual de máquinas",
        subCategories: [],
    },
    {
        label: "Pix",
        subCategories: [],
    },
    {
        label: "Vendas",
        subCategories: [],
    },
];

export default faqData;
