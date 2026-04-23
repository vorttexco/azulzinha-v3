import Image from "next/image";
import { FaqCategory } from "@/components/help/HelpFaqSection";
import { asset } from "@/lib/assets";

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
        subCategories: [
            {
                title: "Alelo",
                items: [
                    {
                        question: "Qual é o processo para a realização do credenciamento e habilitação da Alelo na minha azulzinha?",
                        answer: (
                            <div className="space-y-2">
                                <p>Para habilitar a Alelo na sua azulzinha você deverá:</p>
                                <p>1. Realizar o credenciamento na Alelo. Caso ainda não esteja credenciado <strong>acesse o site da Alelo</strong>{" "}<a href="https://credenciamento.alelo.com.br/" target="_blank" rel="noopener noreferrer" className="text-azul underline">https://credenciamento.alelo.com.br/</a>, clique em &quot;Habilitar Aceitação&quot; no final da página e informe os dados solicitados, ou entre em contato com a Alelo pelos telefones: <a href="tel:40025011" className="text-azul underline">4002 5011</a> (Capitais e Regiões Metropolitanas) e <a href="tel:08005705011" className="text-azul underline">0800 570 5011</a> (Demais Localidades).</p>
                                <p>2. Preencher as informações solicitadas no <strong>site</strong>{" "}<a href="https://alelo.portalfd.com.br/caixa" target="_blank" rel="noopener noreferrer" className="text-azul underline">https://alelo.portalfd.com.br/caixa</a> ou no App da azulzinha.</p>
                                <p>3. Após a solicitação, a Alelo retornará com a aprovação ou rejeição da sua solicitação, e a lista de produtos disponibilizados de acordo com o MCC* do seu estabelecimento.</p>
                                <p>* O MCC é uma sigla usada para classificar o negócio pelos tipos fornecidos de bens ou serviços. Os MCC&apos;s são atribuídos por tipo de comerciante ou por nome de comerciante.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Qual é o prazo para que o processo de credenciamento e habilitação da Alelo seja concluído?",
                        answer: "Em um prazo de 15 dias corridos o processo de credenciamento e habilitação da bandeira Alelo será concluído.",
                    },
                    {
                        question: "E se eu tiver dúvidas sobre o credenciamento e habilitação da Alelo?",
                        answer: (
                            <div className="space-y-1">
                                <p>Caso precise falar com a Alelo, entre em contato pelos telefones:</p>
                                <p><a href="tel:40025011" className="text-azul underline">4002 5011</a> (Capitais e Regiões Metropolitanas) e <a href="tel:08005705011" className="text-azul underline">0800 570 5011</a> (Demais Localidades).</p>
                            </div>
                        ),
                    },
                ],
            },
            {
                title: "pluxee",
                items: [
                    {
                        question: "Qual é o processo para eu realizar o credenciamento e habilitação da pluxee na minha azulzinha?",
                        answer: (
                            <div className="space-y-2">
                                <p>Para realizar o credenciamento na pluxee, você deverá <strong>acessar o site da pluxee</strong>{" "}(<a href="https://sodexocredenciamento.com.br/login" target="_blank" rel="noopener noreferrer" className="text-azul underline">https://sodexocredenciamento.com.br/login</a>) e criar o seu cadastro, ou se preferir, poderá entrar em contato com a Central de Atendimento pelos telefones <a href="tel:30035083" className="text-azul underline">3003 5083</a> (Capitais e Regiões Metropolitanas) ou <a href="tel:08007285083" className="text-azul underline">0800 728 5083</a> (Demais Localidades) ou por mensagens via WhatsApp: <a href="https://api.whatsapp.com/send/?phone=551126620580&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-azul underline">(11) 2662 0580</a>.</p>
                                <p>Caso já esteja credenciado, acesse o site (<a href="https://sodexocredenciamento.com.br/login" target="_blank" rel="noopener noreferrer" className="text-azul underline">https://sodexocredenciamento.com.br/login</a>) com o seu login e senha cadastrado junto à pluxee.</p>
                                <p>Em seguida, a pluxee enviará a solicitação de habilitação e a lista de produtos disponibilizados de acordo com o MCC* do seu estabelecimento.</p>
                                <p>* O MCC é uma sigla usada para classificar o negócio pelos tipos fornecidos de bens ou serviços. Os MCC&apos;s são atribuídos por tipo de comerciante ou por nome de comerciante.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Qual é o prazo para que o processo de credenciamento e habilitação da pluxee seja concluído?",
                        answer: "O prazo de credenciamento é de 7 dias úteis e o prazo de habilitação também é de 7 dias úteis.",
                    },
                    {
                        question: "E se eu tiver dúvidas sobre o credenciamento e habilitação da pluxee?",
                        answer: (
                            <div className="space-y-1">
                                <p>Entre em contato com a pluxee pelos telefones:</p>
                                <p><a href="tel:30035083" className="text-azul underline">3003 5083</a> (Capitais e Regiões Metropolitanas) e</p>
                                <p><a href="tel:08007285083" className="text-azul underline">0800 728 5083</a> (Demais Localidades).</p>
                                <p>Para mensagens via WhatsApp: <a href="https://api.whatsapp.com/send/?phone=551126620580&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-azul underline">(11) 2662 0580</a>.</p>
                                <p><a href="https://www.sodexobeneficios.com.br/" target="_blank" rel="noopener noreferrer" className="text-azul underline">https://www.sodexobeneficios.com.br/</a></p>
                            </div>
                        ),
                    },
                ],
            },
            {
                title: "Ticket",
                items: [
                    {
                        question: "Qual é o processo para eu realizar o credenciamento e habilitação da Ticket na minha azulzinha?",
                        answer: (
                            <div className="space-y-2">
                                <p>Para habilitar a Ticket na azulzinha você precisa primeiro realizar o credenciamento.</p>
                                <p>• Caso ainda não esteja credenciado, <strong>acesse o site da Ticket</strong>{" "}(<a href="https://www.ticket.com.br/portal-estabelecimento/credenciar" target="_blank" rel="noopener noreferrer" className="text-azul underline">https://www.ticket.com.br/portal-estabelecimento/credenciar</a>) e informe o seu CNPJ, clique no botão &quot;Começar&quot; e siga o preenchimento dos dados solicitados.</p>
                                <p>• Caso já esteja credenciado, clique no botão &quot;Já sou credenciado&quot; e em seguida preencha o CNPJ e senha cadastrados junto à bandeira Ticket.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Qual é o prazo para que o processo de credenciamento e habilitação da Ticket seja concluído?",
                        answer: "Para o credenciamento o prazo é de 10 dias úteis, e para a habilitação o prazo é de 2 dias úteis.",
                    },
                    {
                        question: "E se eu tiver dúvidas sobre o credenciamento e habilitação da Ticket?",
                        answer: (
                            <div className="space-y-1">
                                <p>Caso precise falar com a Ticket, entre em contato pelo telefone:</p>
                                <p><a href="tel:40042233" className="text-azul underline">4004 2233</a> (Capitais e Regiões Metropolitanas).</p>
                            </div>
                        ),
                    },
                ],
            },
            {
                title: "VR",
                items: [
                    {
                        question: "Qual é o processo para eu realizar o credenciamento e habilitação da VR na minha azulzinha?",
                        answer: (
                            <div className="space-y-2">
                                <p>Para habilitar a VR na azulzinha você precisa primeiro realizar o credenciamento.</p>
                                <p>Para realizar o credenciamento, <strong>acesse o site da VR</strong>{" "}(<a href="https://portal.vr.com.br/portal/portal-vr/area-publica/credenciamento-contato/" target="_blank" rel="noopener noreferrer" className="text-azul underline">https://portal.vr.com.br/portal/portal-vr/area-publica/credenciamento-contato/</a>) ou entre em contato com a Central de Atendimento pelos telefones <a href="tel:40044938" className="text-azul underline">4004 4938</a> (Capitais e Regiões Metropolitanas) e <a href="tel:08005963838" className="text-azul underline">0800 596 3838</a> (Demais Localidades).</p>
                                <p>Se você já aceita VR, acesse o <strong>site</strong>{" "}(<a href="https://portal.vr.com.br/portal/portal-vr/login/" target="_blank" rel="noopener noreferrer" className="text-azul underline">https://portal.vr.com.br/portal/portal-vr/login/</a>) com o seu login e senha cadastrados junto à VR.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Qual é o prazo para que o processo de credenciamento e habilitação da VR seja concluído?",
                        answer: "O prazo de credenciamento é de 5 dias úteis e o prazo de habilitação também é de 5 dias úteis.",
                    },
                    {
                        question: "E se eu tiver dúvidas sobre o credenciamento e habilitação da VR?",
                        answer: (
                            <div className="space-y-1">
                                <p>Caso precise falar com a VR, entre em contato pelos telefones:</p>
                                <p><a href="tel:40044938" className="text-azul underline">4004 4938</a> (Capitais e Regiões Metropolitanas) e</p>
                                <p><a href="tel:08005963838" className="text-azul underline">0800 596 3838</a> (Demais Localidades).</p>
                            </div>
                        ),
                    },
                    {
                        question: "Como ativar o pagamento com VR por QR Code na minha azulzinha?",
                        answer: "A atualização desta funcionalidade é automática para o modelo Move 5000. Por isso, se a sua azulzinha ainda não aceita pagamentos com a bandeira VR por QR Code, é só deixar sua maquininha conectada a tomada durante a noite. Sua azulzinha irá baixar, instalar e concluir a atualização, tudo automaticamente graças a melhoria trazida pela versão 300K.",
                    },
                    {
                        question: "O que é a funcionalidade QR Code VR?",
                        answer: (
                            <div className="space-y-2">
                                <p>A funcionalidade QR Code VR é uma nova maneira de aceitar pagamentos da bandeira VR – cartões alimentação e refeição.</p>
                                <p>Para portadores do cartão VR, agora não é mais necessário ter cartão físico VR para fazer compras. É a tecnologia como meio para gerar ainda mais praticidade e segurança para trabalhadores e comerciantes.</p>
                            </div>
                        ),
                    },
                    {
                        question: "O que meu estabelecimento precisa fazer para aceitar o QR Code VR?",
                        answer: (
                            <div className="space-y-2">
                                <p>Para Estabelecimentos que já possuem a bandeira VR habilitada, conseguirão aceitar QR Code sem precisar entrar em contato com a bandeira. Não há necessidade de habilitar o QR Code com a VR.</p>
                                <p>A funcionalidade está em piloto e será disponibilizada para estabelecimentos específicos neste momento sendo eles estabelecimentos que possuem a move 5000 na operação.</p>
                                <p>Para estabelecimentos que possuem outros terminais na operação serão disponibilizados posteriormente essa solução e comunicaremos os clientes.</p>
                                <p>Para disponibilizar a funcionalidade na máquina, os terminais terão a atualização do software realizada de maneira automática. É importante que ao receber a comunicação via SMS, e-mail e no visor da máquina, você deixe sua máquina conectada na tomada e conectada a internet.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Quais terminais terão essa funcionalidade?",
                        answer: "Os terminais da linha azulzinha pro – sendo o piloto iniciando neste momento pelo modelo Ingenico Move 5000.",
                    },
                    {
                        question: "Como vender com QR Code VR?",
                        answer: (
                            <div className="space-y-1">
                                <p>Após a atualização de seu terminal, siga o passo a passo para vender com QR Code VR:</p>
                                <p>1 - Na tela inicial da máquina, selecione a opção &quot;Menu&quot;;</p>
                                <p>2 - No menu principal selecione a opção 10. QR Code;</p>
                                <p>3 - Selecione a opção 2 VR Benefícios;</p>
                                <p>4 - Digite o valor da Venda;</p>
                                <p>5 - Solicite para o portador escanear o QR Code que aparecerá na tela da maquininha;</p>
                                <p>6 - Pronto, transação autorizada! Aguarde a impressão do comprovante do cliente.</p>
                            </div>
                        ),
                    },
                ],
            },
        ],
    },
    {
        label: "CAIXA Tem",
        subCategories: [
            {
                title: "Tire suas dúvidas sobre a azulzinha no App CAIXA Tem",
                items: [
                    {
                        question: "O que é a azulzinha no App CAIXA Tem?",
                        answer: (
                            <div className="space-y-2">
                                <p>A azulzinha é uma nova funcionalidade no App CAIXA Tem destinada aos empreendedores MEI.</p>
                                <p>Ela permite que você venda sem a necessidade de uma maquininha, recebendo pagamentos por tecnologia NFC direto na sua conta digital MEI.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Como funciona o pagamento por aproximação (NFC)?",
                        answer: "Com a tecnologia NFC (Near Field Communication), você pode receber pagamentos apenas aproximando o celular do cliente, tornando o processo rápido e facilitado.",
                    },
                    {
                        question: "Ainda não instalei o App CAIXA Tem. Como faço para baixar?",
                        answer: "Você pode baixar o App CAIXA Tem na loja de aplicativos do seu smartphone. Procure por &apos;CAIXA Tem&apos; e siga as instruções de instalação.",
                    },
                    {
                        question: "Como habilitar a azulzinha no App CAIXA Tem?",
                        answer: (
                            <div className="space-y-2">
                                <p>Para habilitar a azulzinha no App CAIXA Tem, siga estes passos:</p>
                                <ol className="list-none space-y-1">
                                    <li>1. Faça seu credenciamento no aplicativo através da opção azulzinha;</li>
                                    <li>2. Após a aprovação do credenciamento, selecione novamente a opção azulzinha no menu do CAIXA Tem para seguir para o ambiente da azulzinha;</li>
                                    <li>3. No primeiro acesso ao webview, será feita a validação de usuário;</li>
                                    <li>4. Faça a gestão do dia a dia através das consultas de vendas, recebimentos e taxas;</li>
                                    <li>5. Realize transações com links de pagamento, QR Code e receba orientações sobre a sua azulzinha.</li>
                                </ol>
                            </div>
                        ),
                    },
                    {
                        question: "Como criar um link de pagamento?",
                        answer: "No App CAIXA Tem, você pode criar links ilimitados de pagamento. Basta acessar a opção de link de pagamento, gerar o link e compartilhar com seus clientes através da internet, redes sociais ou aplicativos de mensagens.",
                    },
                    {
                        question: "O que é o QR Code e como utilizá-lo?",
                        answer: (
                            <div className="space-y-1">
                                <p>O QR Code permite que você receba pagamentos de forma rápida e segura.</p>
                                <p>No App CAIXA Tem, você gera um QR Code que o cliente escaneia com o celular para realizar o pagamento.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Como posso gerenciar minhas vendas e recebimentos?",
                        answer: "O App CAIXA Tem oferece ferramentas para que você controle suas vendas e recebimentos diretamente pelo celular. Através do App, você pode consultar vendas, recebimentos e taxas de forma prática.",
                    },
                    {
                        question: "Existe suporte disponível no App CAIXA Tem?",
                        answer: "Sim, o App CAIXA Tem oferece suporte 100% digital. Você pode utilizar o chat disponível no App para obter informações e tirar dúvidas sempre que precisar.",
                    },
                    {
                        question: "Quais bandeiras de cartões são aceitas pela azulzinha?",
                        answer: "A azulzinha aceita as principais bandeiras de cartões utilizadas pelos clientes. Consulte todas as bandeiras aceitas diretamente no App.",
                    },
                ],
            },
        ],
    },
    {
        label: "Clover",
        subCategories: [
            {
                title: "Sobre a Clover",
                items: [
                    {
                        question: "Qual a diferença da Clover para outras maquininhas?",
                        answer: "A Clover não é apenas uma maquininha de vendas, mas sim um ecossistema completo de soluções que conta com dispositivos modernos, design diferenciado, confiáveis e de alta performance. A Clover oferece uma variedade de funcionalidades e aplicativos próprios que auxiliam na gestão do seu negócio, facilitando o dia a dia e reduzindo custos com outros softwares. Além disso, os dispositivos Clover já vêm com o Sitef, a maior plataforma de pagamentos do Brasil.",
                    },
                    {
                        question: "Quais dispositivos estão disponíveis atualmente?",
                        answer: (
                            <div className="space-y-2">
                                <p>Atualmente, estão disponíveis os dispositivos abaixo:</p>
                                <p><strong>Clover Flex</strong></p>
                                <p>Portátil, completa, de alta performance e design moderno.</p>
                                <p><a href="https://azulzinhadacaixa.com.br/clover" target="_blank" rel="noopener noreferrer" className="text-azul underline">Saiba mais sobre a Flex.</a></p>
                                <p><strong>Clover Mini</strong></p>
                                <p>Semelhante a um tablet, possui uma tela grande, é completa, de alto desempenho e design moderno.</p>
                                <p><a href="https://azulzinhadacaixa.com.br/clover" target="_blank" rel="noopener noreferrer" className="text-azul underline">Saiba mais sobre a Mini.</a></p>
                            </div>
                        ),
                    },
                    {
                        question: "Como faço para pedir a minha Clover?",
                        answer: <p>Peça a sua Clover, da azulzinha, clicando <a href="https://azulzinhadacaixa.com.br/peca-azulzinha" target="_blank" rel="noopener noreferrer" className="text-azul underline">aqui</a>.</p>,
                    },
                    {
                        question: "A Clover já vem com o SiTef?",
                        answer: "Sim! Um dos grandes diferenciais da Clover é ter o SiTef como plataforma de pagamentos, permitindo a aceitação de diversos meios de pagamento disponíveis no mercado, como crédito, débito, Pix, QR Code etc.",
                    },
                    {
                        question: "A Clover aceita Pix? Como ativar para as minhas vendas?",
                        answer: "Sim, os dispositivos Clover aceitam Pix, e o cliente pode pagar com QR Code ou Pix por aproximação. Você pode cadastrar sua chave Pix diretamente pelo aplicativo de gestão da instituição que forneceu a Clover. Após o cadastro, aguarde cerca de 40 minutos para que a chave seja ativada e sua Clover fique pronta para realizar vendas via Pix.",
                    },
                    {
                        question: "A Clover já vem com automações de parceiros?",
                        answer: "Não. As automações devem ser contratadas separadamente pelo aplicativo App Market ou diretamente com a automação parceira.",
                    },
                    {
                        question: "A automação que utilizo no meu negócio está disponível na Clover?",
                        answer: "As principais automações do mercado estão integradas ou em fase de integração com a Clover. Entre em contato com a empresa da sua automação para obter mais informações.",
                    },
                ],
            },
            {
                title: "Taxas e pagamentos",
                items: [
                    {
                        question: "Quais são as taxas para utilizar as soluções da Clover?",
                        answer: (
                            <div className="space-y-2">
                                <p>As taxas são personalizadas para o seu negócio, levando em consideração o seu faturamento atual ou projetado e o valor médio das suas transações. Isso significa que você terá condições sob medida, que se ajustam às suas necessidades.</p>
                                <p><a href="https://azulzinhadacaixa.com.br/peca-azulzinha" target="_blank" rel="noopener noreferrer" className="text-azul underline">Clique aqui</a> para pedir a sua Clover e saber taxas e diferenciais para o seu negócio.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Quando receberei os valores das minhas vendas?",
                        answer: (
                            <div className="space-y-2">
                                <p>Os pagamentos serão liquidados da seguinte forma:</p>
                                <p><strong>Débito:</strong> valor total da venda no próximo dia útil seguinte à efetivação da transação. Vendas aos sábados e domingos são processadas no próximo dia útil.</p>
                                <p><strong>Crédito:</strong> valor total da venda em 30 dias corridos.</p>
                                <p><strong>Parcelamento sem juros:</strong> recebimento da primeira parcela após 31 dias do processamento da venda, e as posteriores, a cada 31 dias subsequentes.</p>
                                <p><strong>Parcelamento com juros:</strong> valor total da venda em 31 dias corridos.</p>
                                <p>Caso você tenha algum plano de antecipação de recebíveis, você poderá receber no mesmo dia ou em até 1 dia útil.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Posso antecipar meus recebíveis?",
                        answer: <p>Sim! Temos planos de antecipação que se adaptam ao seu negócio, permitindo que você receba os valores em até um dia útil. Para conferir os planos disponíveis, acesse o aplicativo <strong>Finanças +</strong> pelo seu dispositivo Clover.</p>,
                    },
                ],
            },
            {
                title: "Dispositivos",
                items: [
                    {
                        question: "Como posso solicitar dispositivos adicionais?",
                        answer: <p>Ajudar seu negócio a crescer é importante para nós. Para solicitar novos dispositivos, entre em contato <a href="https://azulzinhadacaixa.com.br/peca-azulzinha" target="_blank" rel="noopener noreferrer" className="text-azul underline">clicando aqui</a>.</p>,
                    },
                    {
                        question: "A Clover vem com chip para rede móvel?",
                        answer: <p>Sim, os dispositivos Clover vêm com um <strong>chip multioperadora</strong>, que permite a conexão com a operadora que possui o melhor sinal da região. Assim, seu dispositivo estará sempre conectado, evitando problemas nas suas vendas.</p>,
                    },
                    {
                        question: "Onde posso encontrar o número de série do meu dispositivo Clover?",
                        answer: (
                            <div className="space-y-2">
                                <p>O número de série é composto por 14 caracteres, sendo números e letras, e começa com a letra &quot;C&quot;. Ele é a identificação exclusiva do dispositivo.</p>
                                <p>Siga os passos abaixo para encontrar o número de série:</p>
                                <p><strong>No compartimento da bobina</strong></p>
                                <p>Se você não estiver conseguindo acessar o dispositivo, siga os passos abaixo:</p>
                                <p>1. Abra o compartimento da bobina do seu dispositivo;</p>
                                <p>2. Retire a bobina de papel;</p>
                                <p>3. Encontre o número de série (S/N) na etiqueta da Anatel.</p>
                                <p><strong>No aplicativo Configuração</strong></p>
                                <p>1. Acesse o aplicativo Configuração no seu dispositivo Clover;</p>
                                <p>2. Toque na opção &quot;Dispositivos&quot;;</p>
                                <p>3. Nessa tela, você visualizará todos os dispositivos Clover do seu estabelecimento. O número de série está localizado embaixo do modelo do dispositivo.</p>
                                <p><strong>No aplicativo Diagnóstico</strong></p>
                                <p>1. Acesse o aplicativo Diagnóstico no seu dispositivo Clover;</p>
                                <p>2. Toque na opção &quot;Detalhes adicionais&quot;;</p>
                                <p>3. O número de série está entre parênteses em &quot;Este dispositivo&quot;, acima do código de barras.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Como faço para manter meu dispositivo atualizado?",
                        answer: "Assim como um celular, os dispositivos Clover precisam de atualizações automáticas para melhorias e ajustes que otimizam seu desempenho, operação e segurança. Essas atualizações podem ocorrer durante a noite, conforme necessário. Por isso, é importante manter seu dispositivo ligado e conectado, garantindo que ele esteja sempre atualizado.",
                    },
                ],
            },
            {
                title: "Flex",
                items: [
                    {
                        question: "Quais são as principais vantagens da Clover Flex?",
                        answer: (
                            <div className="space-y-2">
                                <p>A Clover Flex é um dispositivo de pagamento portátil que permite aceitar pagamentos em qualquer lugar. Com um design atraente, alta performance e rapidez nas transações, ele possui um chip multioperadora, garantindo conectividade confiável. É ideal para comerciantes que buscam mobilidade e praticidade nas transações.</p>
                                <p><a href="https://azulzinhadacaixa.com.br/clover" target="_blank" rel="noopener noreferrer" className="text-azul underline">Clique aqui</a> para saber mais sobre a Clover Flex.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Como posso recarregar a bateria da Flex?",
                        answer: "A Flex possui uma base de recarregamento por indução, mas também pode ser recarregada via cabo USB tipo C, a entrada está localizada na parte superior do dispositivo, próximo à lente da câmera.",
                    },
                    {
                        question: "Qual é a função da câmera da Flex?",
                        answer: "A câmera pode ser utilizada para ler códigos de barras e QR Codes. Além de tirar fotos dos produtos para catalogação ou bipagem no software da automação de sua preferência. Para ativar a câmera no modo de leitura de código de barras, basta pressionar e segurar o botão com o ícone de código de barras, localizado na lateral esquerda do dispositivo.",
                    },
                ],
            },
            {
                title: "Mini",
                items: [
                    {
                        question: "Quais são as principais vantagens da Clover Mini?",
                        answer: (
                            <div className="space-y-2">
                                <p>A Clover Mini é um ponto de venda completo que substitui diversos equipamentos, oferecendo uma experiência aprimorada para os comerciantes e clientes.</p>
                                <p>Com uma tela sensível ao toque de 8 polegadas e uma base giratória que rotaciona 360°, permite que o operador e o cliente visualizem os detalhes da compra. O dispositivo possui entradas para cartões, leitor contactless e uma impressora integrada para emissão imediata de comprovantes.</p>
                                <p>A Mini facilita a gestão das vendas em um único lugar e pode se conectar a outros dispositivos Clover, permitindo integrações e automações conforme necessário.</p>
                                <p><a href="https://azulzinhadacaixa.com.br/clover" target="_blank" rel="noopener noreferrer" className="text-azul underline">Clique aqui</a> para saber mais sobre a Clover Mini.</p>
                            </div>
                        ),
                    },
                    {
                        question: "A Mini funciona via chip para rede móvel?",
                        answer: <p>Sim, a Mini vem com um <strong>chip multioperadora</strong>, que permite a conexão com a operadora que possui o melhor sinal da região. Além do chip, ela pode ser conectada à internet via Wi-Fi e cabo Ethernet.</p>,
                    },
                ],
            },
            {
                title: "Aplicativos",
                items: [
                    {
                        question: "Quais são os aplicativos que vêm com a Clover?",
                        answer: (
                            <div className="space-y-2">
                                <p>A Clover já vem com os seguintes aplicativos instalados e gratuitos:</p>
                                <ul className="list-none space-y-1">
                                    <li>- Vendas (para realizar vendas).</li>
                                    <li>- Relatórios (para gerenciar as vendas).</li>
                                    <li>- Transações (para consultar o extrato de vendas).</li>
                                    <li>- Finanças + (para antecipação de recebíveis).</li>
                                    <li>- Clientes (para gerenciar clientes).</li>
                                    <li>- Funcionários (para gerenciar e definir permissão dos funcionários).</li>
                                    <li>- Turnos (para controle da entrada e saída dos funcionários).</li>
                                    <li>- Suporte (para assistência e gerenciamento do dispositivo).</li>
                                    <li>- Fluxo de Caixa (para consultar vendas em dinheiro).</li>
                                    <li>- Notas (para exibir avisos na tela dos dispositivos).</li>
                                    <li>- App Market (loja de aplicativos homologados).</li>
                                </ul>
                                <p><a href="https://azulzinhadacaixa.com.br/clover" target="_blank" rel="noopener noreferrer" className="text-azul underline">Clique aqui</a> para saber mais sobre os aplicativos Clover.</p>
                            </div>
                        ),
                    },
                    {
                        question: "O que é o aplicativo Vendas?",
                        answer: "O aplicativo Vendas é onde você vai realizar suas vendas de forma segura e eficiente, aceitando todos os métodos de pagamento. Você pode utilizar cartões, QR code ou pagamento por aproximação. Além disso, o aplicativo permite registrar vendas em dinheiro e dividir contas de um grupo de forma simples e fluida.",
                    },
                    {
                        question: "O que é o aplicativo Funcionários?",
                        answer: (
                            <div className="space-y-2">
                                <p>O App Funcionários oferece a possibilidade de criar senhas de acesso individuais para cada colaborador que utiliza o dispositivo. Com ele, você pode definir permissões específicas para diferentes cargos, restringindo funcionalidades conforme necessário e garantindo maior segurança e rastreabilidade.</p>
                                <p>Além disso, todas as vendas realizadas por cada funcionário são registradas no relatório de vendas, facilitando o acompanhamento e a gestão do desempenho da equipe.</p>
                                <p><a href="https://azulzinhadacaixa.com.br/clover" target="_blank" rel="noopener noreferrer" className="text-azul underline">Clique aqui</a> para saber mais sobre os aplicativos Clover.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Como altero a senha de acesso de um funcionário?",
                        answer: (
                            <div className="space-y-2">
                                <p>Você pode alterar a senha tanto nos dispositivos Clover quanto no Portal Clover. Porém, somente pessoas com perfil de administrador ou proprietário podem alterar a senha.</p>
                                <p><strong>Nos dispositivos Clover:</strong></p>
                                <p>1. Acesse o aplicativo Funcionários</p>
                                <p>2. Selecione o nome do funcionário</p>
                                <p>3. Toque no ícone de edição (lápis)</p>
                                <p>4. Digite a nova senha de 4 dígitos no campo &quot;Código de acesso&quot;</p>
                                <p><strong>No Portal Clover (Web):</strong></p>
                                <p>1. Acesse o portal em <a href="https://la.clover.com/login" target="_blank" rel="noopener noreferrer" className="text-azul underline">la.clover.com/login</a> utilizando seu login e senha.</p>
                                <p>2. No menu esquerdo, clique em &quot;Funcionários&quot;.</p>
                                <p>3. Selecione o nome do funcionário</p>
                                <p>4. Clique em &quot;Editar&quot;</p>
                                <p>5. Digite a nova senha de 4 dígitos no campo &quot;Código de acesso do dispositivo&quot;</p>
                            </div>
                        ),
                    },
                    {
                        question: "O que é o aplicativo Finanças +?",
                        answer: (
                            <div className="space-y-2">
                                <p>Com o Finanças +, você pode contratar e antecipar o recebimento de suas vendas de maneira simples, aproveitando as melhores condições para garantir um fluxo de caixa ideal para o seu negócio.</p>
                                <p><a href="https://azulzinhadacaixa.com.br/clover" target="_blank" rel="noopener noreferrer" className="text-azul underline">Clique aqui</a> para saber mais sobre os aplicativos Clover.</p>
                            </div>
                        ),
                    },
                    {
                        question: "O que é o aplicativo Clientes?",
                        answer: (
                            <div className="space-y-2">
                                <p>O aplicativo Clientes permite que você registre os dados dos seus clientes de forma prática e eficiente. Com ele, você pode realizar pagamentos recorrentes, enviar recibos diretamente para o e-mail ou telefone cadastrado e visualizar o histórico de compras de cada cliente. É ideal para monitorar seus clientes mais frequentes e aqueles que não visitam seu estabelecimento há algum tempo.</p>
                                <p><strong>Como cadastrar um cliente:</strong></p>
                                <p>1. Acesse o aplicativo Clientes e toque no botão &quot;Adicionar cliente&quot;.</p>
                                <p>2. Preencha os dados solicitados e toque em &quot;Salvar&quot;.</p>
                                <p><strong>Como registrar vendas para um cliente:</strong></p>
                                <p>1. Abra o aplicativo Clientes e selecione o cliente cadastrado.</p>
                                <p>2. Toque no botão &quot;Nova Venda&quot; localizado no canto inferior direito.</p>
                                <p>3. Você será redirecionado para o aplicativo Vendas, onde a venda será registrada para o cliente selecionado.</p>
                                <p><a href="https://azulzinhadacaixa.com.br/clover" target="_blank" rel="noopener noreferrer" className="text-azul underline">Clique aqui</a> para saber mais sobre os aplicativos Clover.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Como acessar o relatório de vendas?",
                        answer: "Você pode visualizar o relatório acessando o app Relatórios ou pelo portal Clover. Lá, você terá uma visão geral de todas as suas vendas realizadas com os dispositivos Clover e seus funcionários cadastrados.",
                    },
                    {
                        question: "Por que não consigo visualizar o aplicativo Relatórios?",
                        answer: "Pode ser que você não tenha permissão de acesso ou que tenha acessado o dispositivo pelo Acesso Rápido. Se você for um administrador, acesse o dispositivo com a sua senha para visualizar os relatórios.",
                    },
                    {
                        question: "Como posso visualizar o extrato de vendas?",
                        answer: "Para ter uma visualização venda a venda, basta acessar o app Transações ou o portal Clover. Lá, você encontrará todas as suas vendas realizadas, ordenadas por horário. É possível filtrar as vendas por dispositivos, funcionários e formas de pagamento.",
                    },
                    {
                        question: "Como posso reorganizar os ícones dos aplicativos na tela inicial da minha Clover?",
                        answer: "Assim como em um smartphone, você pode organizar os ícones da maneira que desejar. Para habilitar a configuração, basta tocar e segurar um ícone. Os três primeiros ícones da lista serão fixados e destacados na parte inferior da tela do seu dispositivo, facilitando o acesso.",
                    },
                ],
            },
            {
                title: "Portal Clover (Dashboard)",
                items: [
                    {
                        question: "Consigo acessar o portal Clover pelo celular?",
                        answer: (
                            <div className="space-y-2">
                                <p>Sim! O portal é compatível com celulares e você pode acompanhar suas vendas de forma mais detalhada diretamente do seu aparelho, de qualquer lugar e sem a necessidade de um computador.</p>
                                <p>Para acessar o portal, basta acessar o endereço abaixo: <a href="https://la.clover.com" target="_blank" rel="noopener noreferrer" className="text-azul underline">la.clover.com</a></p>
                            </div>
                        ),
                    },
                    {
                        question: "Como faço meu primeiro acesso ao Portal Clover?",
                        answer: "O primeiro acesso ao Portal Clover é simples. Após solicitar sua Clover, você receberá um e-mail de boas-vindas para confirmar alguns dados, como e-mail e telefone. Depois de validar essas informações, você poderá cadastrar sua senha e acessar o Portal Clover para aproveitar todos os benefícios e gerenciar seu estabelecimento.",
                    },
                    {
                        question: "O Portal Clover traz informações em tempo real?",
                        answer: "Sim, o Portal Clover traz informações em tempo real das vendas para que você tenha visibilidade e possa fazer a gestão do seu negócio e dos seus funcionários.",
                    },
                    {
                        question: "Por que não recebi o link de redefinição de senha que solicitei para acessar o Portal Clover?",
                        answer: (
                            <div className="space-y-2">
                                <p>Confira a pasta de spam ou lixo eletrônico da sua caixa postal.</p>
                                <p>Verifique se você solicitou pelo portal Clover América Latina no endereço <a href="https://la.clover.com" target="_blank" rel="noopener noreferrer" className="text-azul underline">la.clover.com</a>.</p>
                                <p><strong>Atenção</strong>: o seu acesso <strong>não funcionará</strong> no site global (<a href="https://www.clover.com" target="_blank" rel="noopener noreferrer" className="text-azul underline">www.clover.com</a>).</p>
                                <p>Certifique-se de que você digitou o endereço de e-mail correto ao solicitar a redefinição.</p>
                                <p>Aguarde alguns minutos, pois pode haver um pequeno atraso no envio do e-mail.</p>
                                <p>Caso nenhuma dessas ações tenha sucesso, entre em contato pela Central de Atendimento.</p>
                            </div>
                        ),
                    },
                ],
            },
            {
                title: "Configurações",
                items: [
                    {
                        question: "Posso configurar os comprovantes que são impressos automaticamente?",
                        answer: "Sim! Você pode optar por imprimir automaticamente a via do cliente ou do estabelecimento, ou mesmo não imprimir nenhum comprovante após cada venda. Acesse o app Configuração e depois a opção Recibos de pagamento. Em seguida, marque a opção desejada.",
                    },
                    {
                        question: "Minha bobina de impressão de comprovantes acabou. O que devo fazer?",
                        answer: <p>O kit de bobinas é enviado automaticamente com base na quantidade de transações realizadas. Se você ainda não o recebeu, solicite pelo aplicativo ou portal da instituição que forneceu a Clover para você, ou entre em contato com o <a href="https://br.clover.com/fale-conosco/" target="_blank" rel="noopener noreferrer" className="text-azul underline">nosso suporte</a>.</p>,
                    },
                    {
                        question: "A bobina da Mini é compatível com a Flex?",
                        answer: (
                            <div className="space-y-2">
                                <p>As bobinas que acompanham a Mini na embalagem não são compatíveis com a Flex, pois possuem um comprimento maior e não se encaixam nesse modelo.</p>
                                <p>Porém, as bobinas de reposição possuem o mesmo tamanho e servem tanto para Flex quanto para a Mini.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Como altero o tempo da tela de bloqueio?",
                        answer: <p>É possível alterar o tempo que seu dispositivo irá bloquear para um mínimo de 15 segundos e um máximo de 30 minutos. Acesse o app <strong>Ajustes dispositivo</strong> e toque na opção Tela. Lá, você poderá definir o tempo de bloqueio que deseja. Por motivos de segurança, não é possível remover a tela de bloqueio.</p>,
                    },
                    {
                        question: "O que é o Acesso Rápido?",
                        answer: "O Acesso Rápido permite que você desbloqueie seu dispositivo com apenas um toque na tela, sem precisar digitar a senha. Isso facilita o acesso a aplicativos importantes, como o de Vendas, agilizando o fluxo de vendas do seu negócio.",
                    },
                    {
                        question: "Como posso ativar ou desativar o Acesso Rápido?",
                        answer: (
                            <div className="space-y-1">
                                <p>Acesse o app Funcionários e toque no menu de três linhas (≡) no canto superior esquerdo.</p>
                                <p>Vá em ajustes e depois em &quot;Acesso rápido&quot;.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Como configuro os aplicativos que ficam disponíveis pelo Acesso Rápido?",
                        answer: (
                            <div className="space-y-1">
                                <p>Os aplicativos disponíveis no Acesso Rápido seguem as permissões do perfil &quot;Funcionário&quot;.</p>
                                <p>Proprietários e administradores podem configurar essas permissões pelo aplicativo Funcionários, acessando o menu &quot;Permissões&quot;.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Como acesso os dispositivos Clover com o meu usuário?",
                        answer: "Para acessar com o seu nome de usuário, basta digitar a sua senha numérica na tela de bloqueio. Caso a tela não esteja bloqueada, pressione o botão de bloqueio e insira a sua senha.",
                    },
                    {
                        question: "Não lembro da minha senha administrativa, o que eu faço?",
                        answer: (
                            <div className="space-y-2">
                                <p>Se você é proprietário ou administrador da conta, pode visualizar a senha administrativa pelo Portal Clover. Siga os passos abaixo:</p>
                                <p>1. Acesse o portal em <a href="https://la.clover.com" target="_blank" rel="noopener noreferrer" className="text-azul underline">la.clover.com</a> utilizando seu login e senha.</p>
                                <p>2. No menu lateral esquerdo, clique em &quot;Funcionários&quot;.</p>
                                <p>3. Selecione seu usuário proprietário para visualizar a senha administrativa em &quot;Código de acesso&quot;.</p>
                                <p>Caso esteja com problemas para acessar o Portal Clover, entre em contato com um de nossos canais de atendimento:</p>
                                <p><strong>WhatsApp:</strong> 11 94147-3336 — Segunda a domingo, das 8h às 22h (exceto feriados)</p>
                                <p><strong>Telefones:</strong> 3003-5365 / 0800 729 5365 — Disponível todos os dias, 24h por dia.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Meu dispositivo Clover não está conectando à minha rede Wi-Fi. O que posso fazer?",
                        answer: (
                            <div className="space-y-1">
                                <p>Se você não consegue conectar seu dispositivo Clover à internet via Wi-Fi, tente alguns desses passos:</p>
                                <ul className="list-none space-y-1">
                                    <li>- Verifique se outros dispositivos (celulares e computadores) estão conectados e com acesso à internet.</li>
                                    <li>- Reinicie o seu roteador e verifique se ele está conectado à internet.</li>
                                    <li>- Reinicie seu dispositivo Clover.</li>
                                    <li>- Desative e reative o Wi-Fi no Clover.</li>
                                    <li>- Remova e adicione a rede novamente nas configurações da Clover.</li>
                                    <li>- Verifique se a senha Wi-Fi está correta.</li>
                                    <li>- Certifique-se de que a Clover e o roteador estão próximos.</li>
                                    <li>- Tente conectar a uma rede diferente ou use Ethernet, rede móvel ou hotspot pessoal para testar.</li>
                                </ul>
                                <p>Caso nenhuma dessas ações tenha sucesso, entre em contato via Central de Atendimento.</p>
                            </div>
                        ),
                    },
                    {
                        question: "O que posso fazer se meu dispositivo Clover não estiver se conectando à internet via linha telefônica?",
                        answer: (
                            <div className="space-y-1">
                                <p>Se você não consegue conectar seu dispositivo Clover à internet via linha telefônica, tente alguns desses passos:</p>
                                <ul className="list-none space-y-1">
                                    <li>- Conecte um dispositivo diferente à mesma rede e verifique se possui conexão à internet.</li>
                                    <li>- Reinicie o roteador e verifique a conexão.</li>
                                    <li>- Reinicie seu dispositivo Clover.</li>
                                    <li>- Desative e reative a conexão Ethernet no dispositivo Clover.</li>
                                    <li>- Reconecte o cabo Ethernet e reinicie o dispositivo.</li>
                                    <li>- Use uma porta ou cabo Ethernet diferente.</li>
                                    <li>- Remova switches ou extensões de rede entre o dispositivo e o roteador.</li>
                                    <li>- Verifique se há restrições de rede ou firewalls que possam bloquear a conexão.</li>
                                    <li>- Tente conectar via Wi-Fi, rede móvel ou hotspot pessoal.</li>
                                </ul>
                                <p>Caso nenhuma dessas ações tenha sucesso, entre em contato via Central de Atendimento.</p>
                            </div>
                        ),
                    },
                ],
            },
            {
                title: "Suporte e atendimento",
                items: [
                    {
                        question: "Qual é o horário de atendimento do suporte Clover?",
                        answer: (
                            <div className="space-y-2">
                                <p>Confira abaixo os nossos canais de atendimento:</p>
                                <p><strong>WhatsApp:</strong></p>
                                <p>11 94147-3336</p>
                                <p>Segunda a domingo, das 8h às 22h (exceto feriados).</p>
                                <p><strong>Telefones:</strong></p>
                                <p>3003-5365</p>
                                <p>0800 729 5365</p>
                                <p>Disponível todos os dias, 24h por dia.</p>
                            </div>
                        ),
                    },
                ],
            },
        ],
    },
    {
        label: "Crédito e Risco",
        subCategories: [
            {
                title: "Boas Práticas Time Crédito e Risco",
                items: [
                    {
                        question: "O que é uma transação sem a presença do cartão físico?",
                        answer: (
                            <div className="space-y-2">
                                <p>Esse é um tipo de transação disponível na modalidade link de pagamento, que é um recurso do App da azulzinha.</p>
                                <p>Para que a transação sem a presença do cartão físico aconteça, é necessário informar apenas os dados do cartão (nome completo, número do cartão, validade e código de segurança).</p>
                            </div>
                        ),
                    },
                    {
                        question: "Lojista ou cliente: quem é o responsável pelo risco quando uma transação realizada sem a presença do cartão físico não é paga?",
                        answer: "Em toda transação efetuada através de link de pagamento, existe o risco de o lojista não receber no caso da contestação da compra pelo cliente. Assim, o risco é do estabelecimento que efetuar a venda, ou seja, do lojista.",
                    },
                    {
                        question: "Como aumentar a segurança das minhas vendas com link de pagamento e vendas digitadas e diminuir os riscos de fraudes e golpes?",
                        answer: (
                            <div className="space-y-2">
                                <p>Para realizar as suas vendas com mais segurança, é muito importante considerar os seguintes itens de segurança, a cada cliente:</p>
                                <ul className="list-none space-y-2">
                                    <li><strong>Registre e monitore suas vendas:</strong> analise se o cliente possui ou faz muitas compras seguidas em um curto período;</li>
                                    <li><strong>Atenção a pedidos urgentes:</strong> os fraudadores têm pressa em receber os produtos comprados e não se preocupam com o valor que estão pagando;</li>
                                    <li><strong>Observe a forma de pagamento:</strong> analise se o mesmo cliente faz várias compras utilizando cartões de crédito diferentes, sem apresentar preocupação;</li>
                                    <li><strong>Volume de produtos:</strong> fique atento na solicitação de quantidades elevadas do mesmo produto;</li>
                                    <li><strong>Endereço de entrega:</strong> fique de olho em pedidos diferentes e de altos valores para entrega no mesmo endereço e também em vários pedidos efetuados no mesmo dia, pela mesma pessoa, com entregas em diversos endereços;</li>
                                    <li><strong>Crie um controle:</strong> defina, se possível, um encarregado no comércio pela gestão e geração do Link de Pagamento.</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        question: "Como realizar vendas com cartão-presente com chip, tarja ou contactless (sem contato), com mais segurança?",
                        answer: (
                            <div className="space-y-2">
                                <p>Para diminuir os riscos, indicamos as práticas a seguir:</p>
                                <ul className="list-none space-y-1">
                                    <li>- Atente-se se é o portador do cartão quem está realizando a compra;</li>
                                    <li>- Não insista por mais de 3 (três) vezes quando a transação for negada;</li>
                                    <li>- Não tente aprovar a transação de forma desmembrada.</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        question: "Devo armazenar informações e ou comprovantes das transações?",
                        answer: "Sim, pois elas podem ser solicitadas pela área de Crédito e Risco da azulzinha.",
                    },
                    {
                        question: "O proprietário da loja pode passar seu próprio cartão na maquininha ou utilizar o equipamento para vendas diferentes do seu ramo de atividade cadastrado?",
                        answer: "Não. Essas práticas são consideradas indevidas. Confira o seu contrato de azulzinha para saber mais.",
                    },
                    {
                        question: "Como saber se estou utilizando a maquininha do jeito certo?",
                        answer: "Basta seguir as normas do contrato para garantir a boa utilização do equipamento.",
                    },
                    {
                        question: "Por que é importante fazer bom uso do equipamento, conforme o contrato?",
                        answer: "Para evitar bloqueio de agenda financeira ou até mesmo o descredenciamento do estabelecimento.",
                    },
                ],
            },
        ],
    },
    {
        label: "Gestão do seu negócio",
        subCategories: [
            {
                title: "Utilização do App",
                items: [
                    {
                        question: "Como acessar o App da azulzinha?",
                        answer: <p>Para utilizar o App da azulzinha, o cliente deve acessar a loja de Apps do seu celular, procurar por &quot;azulzinha da CAIXA&quot; e baixá-lo de forma totalmente gratuita. Feito isso, o cliente deve clicar em &quot;Primeiro acesso&quot;, informar seu CPF ou CNPJ e configurar sua primeira senha. Pronto, agora é só desfrutar dos benefícios do App da azulzinha.</p>,
                    },
                    {
                        question: "Existe algum custo para utilizar o App?",
                        answer: "Não. O App é gratuito.",
                    },
                    {
                        question: "O que o cliente deve fazer se esquecer a senha do App da azulzinha?",
                        answer: <p>Na tela inicial do App, clique em &quot;Esqueci minha senha&quot; e siga o passo a passo para defini-la novamente. Por motivo de segurança é recomendado que a senha seja alterada a cada 3 meses.</p>,
                    },
                ],
            },
            {
                title: "Como usar o Portal?",
                items: [
                    {
                        question: "Como acessar o Portal da azulzinha da CAIXA?",
                        answer: <p>Pelo site da azulzinha (<a href="https://www.azulzinhadacaixa.com.br/" target="_blank" rel="noopener noreferrer" className="text-azul underline">https://www.azulzinhadacaixa.com.br/</a>) vá no menu e clique em &quot;Portal&quot; (<a href="https://portal.azulzinhadacaixa.com.br" target="_blank" rel="noopener noreferrer" className="text-azul underline">portal.azulzinhadacaixa.com.br</a>). Insira seu usuário e senha cadastrados e comece a ter acesso a diversas informações sobre o seu negócio, de um jeito simples, rápido e seguro!</p>,
                    },
                    {
                        question: "Como fazer o primeiro acesso ao Portal da azulzinha da CAIXA?",
                        answer: (
                            <div className="space-y-2">
                                <p>Na home não logada, selecione o botão &quot;Primeiro acesso&quot; e digite o CNPJ/CPF utilizado no credenciamento e clique em &quot;Continuar&quot;.</p>
                                <p>Obs.: Caso você já tenha realizado o primeiro acesso, você receberá informações com o direcionamento para que o login seja realizado. Se esse for o seu caso, clique em &quot;Acessar a minha conta&quot;.</p>
                                <p>Em seguida, selecione a opção por onde deseja receber o código de segurança: telefone ou e-mail. Você receberá o código de segurança composto por 6 dígitos alfanuméricos e deverá digitá-lo na tela seguinte.</p>
                                <p>Prontinho, agora é só configurar sua senha e clicar em &quot;Continuar&quot; e você será automaticamente direcionado para a home logada do Portal.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Como deve ser a senha para o cadastro no Portal da azulzinha da CAIXA?",
                        answer: "A senha precisa ser composta por no mínimo 9 caracteres (letra maiúscula, minúscula e números), ter ao menos um carácter especial e você precisará digitá-la nos dois campos para o botão \"Continuar\" ser habilitado.",
                    },
                    {
                        question: "O que fazer caso eu não reconheça os dados do cadastro (e-mail e celular)?",
                        answer: (
                            <div className="space-y-2">
                                <p>Na aba &quot;Esqueci minha senha&quot;, clique na opção &quot;Não reconheço os dados acima&quot;. Em seguida, informe os dados de seu banco, agência e conta e clique em &quot;Confirmar&quot;.</p>
                                <p>Importante! Caso você tenha mais de um domicílio bancário cadastrado, será necessário informar os dados corretos de pelo menos um domicílio.</p>
                                <p>Após preenchimento dos dados, será apresentado um pop-up de confirmação das informações digitadas. Ao inserir os novos dados de e-mail e celular, você será direcionado para a tela de seleção para receber o código de segurança, já com os novos dados informados.</p>
                            </div>
                        ),
                    },
                    {
                        question: "E o que fazer caso os dados informados estiverem incorretos?",
                        answer: <p>Quando os dados informados estiverem incorretos, traremos a mensagem: &quot;Os dados informados não coincidem&quot;, e você terá mais uma chance ao clicar no botão &quot;Tentar Novamente&quot;. Caso o domicílio bancário esteja errado uma vez mais, entre em contato com a Central de Atendimento.</p>,
                    },
                    {
                        question: "Como visualizar o resumo dos dados de vendas do meu negócio no Portal da azulzinha da CAIXA?",
                        answer: "Ao fazer o login, já na tela inicial, você encontra o resumo de vendas e dos pagamentos recebidos. Clique na opção que deseja e explore as informações.",
                    },
                    {
                        question: "É possível exportar relatórios das minhas vendas e/ou dos meus recebimentos?",
                        answer: <p>Clique no menu vendas e acesse a aba desejada. Na aba &quot;hoje&quot; é possível visualizar as transações capturadas no dia, já na aba &quot;histórico de vendas&quot; você consulta o histórico das vendas capturadas de D-1 para trás. É possível consultar vendas no débito, crédito, Pix, pré-autorização, voucher, van e as não efetivadas. Use o filtro e explore os dados necessários. Caso necessite, gere relatório a partir do botão &quot;Exportar&quot;.</p>,
                    },
                    {
                        question: "Como faço para verificar as transações realizadas no Portal?",
                        answer: <p>Clique no menu vendas e acesse a aba desejada. Na aba &quot;hoje&quot; é possível visualizar as transações capturadas no dia, já na aba &quot;histórico de vendas&quot; você consulta o histórico das vendas capturadas de D-1 para trás. É possível consultar vendas no débito, crédito, Pix, pré-autorização, voucher, van e as não efetivadas. Use o filtro e explore os dados necessários. Caso necessite, gere relatório a partir do botão &quot;Exportar&quot;.</p>,
                    },
                    {
                        question: "Como fazer a antecipação dos recebimentos via Portal da azulzinha da CAIXA?",
                        answer: <p>No menu &quot;Antecipação&quot; você realiza antecipações automáticas ou eventuais e consulta suas operações realizadas.</p>,
                    },
                    {
                        question: "Como consultar os valores que tenho a receber?",
                        answer: <p>No menu &quot;Recebimentos&quot;, clique na aba &quot;Futuros&quot; e visualize a agenda de lançamentos previstos para controlar seus próximos recebíveis.</p>,
                    },
                    {
                        question: "Como consultar os meus pagamentos recebidos?",
                        answer: <p>Através do menu &quot;Recebimentos&quot;, clicando na aba &quot;Pagos&quot; é possível visualizar os lotes de pagamentos que foram realizados nos seus respectivos domicílios bancários.</p>,
                    },
                    {
                        question: "É possível realizar a abertura de solicitações/chamados via Portal?",
                        answer: <p>É sim. Em &quot;Solicitações&quot; você acessa diversos recursos como solicitar bobinas, alterar informações cadastrais, alterar domicílio bancário, cancelar uma venda, abrir chamados para pagamentos não recebidos, entre outras opções.</p>,
                    },
                    {
                        question: "Como consulto as informações da minha empresa?",
                        answer: <p>Na seção &quot;Negócio&quot;, você encontra todas as informações da sua empresa: dados cadastrais, domicílio bancário, taxas contratadas, equipamentos, entre outros.</p>,
                    },
                    {
                        question: "E se eu precisar de ajuda para entender os serviços que o Portal da azulzinha da CAIXA oferece?",
                        answer: <p>Sempre que precisar, acesse a área &quot;Ajuda&quot;. Lá você encontra diversas informações para esclarecer as suas dúvidas. Você também poderá acessar o Chatbot através do ícone que fica no final da tela.</p>,
                    },
                    {
                        question: "Como proceder para recuperar a minha senha?",
                        answer: (
                            <div className="space-y-2">
                                <p>Na home não logada, clique em &quot;Esqueci minha senha&quot; e digite o CNPJ/CPF utilizado no credenciamento e clique em &quot;Continuar&quot;. Em seguida, selecione a opção por onde deseja receber o código de segurança: telefone ou e-mail.</p>
                                <p>Você receberá o código de segurança composto por 6 dígitos alfanuméricos e deverá digitá-lo na tela seguinte.</p>
                                <p>Prontinho, agora é só configurar sua nova senha e clicar em &quot;Continuar&quot; e você será automaticamente direcionado para a home logada do Portal.</p>
                                <p><strong>Importante:</strong> sua senha precisa ser composta por no mínimo 9 caracteres (letra maiúscula, minúscula e números) e ter ao menos um carácter especial.</p>
                            </div>
                        ),
                    },
                ],
            },
            {
                title: "Ferramentas de gestão: pagamentos, antecipação de recebíveis, taxas e tarifas e manutenção",
                items: [
                    {
                        question: "Qual a melhor maneira de fazer a gestão das minhas vendas?",
                        answer: (
                            <div className="space-y-2">
                                <p>A azulzinha oferece aos seus estabelecimentos comerciais as seguintes vantagens para melhor gestão do fluxo de vendas:</p>
                                <p>- Portal da azulzinha <a href="https://portal.azulzinhadacaixa.com.br" target="_blank" rel="noopener noreferrer" className="text-azul underline">portal.azulzinhadacaixa.com.br</a> e App da azulzinha. Estas ferramentas são gratuitas e permitem a consulta de dados contratuais, cadastrais e agenda financeira.</p>
                                <p>- Extrato Eletrônico: é enviado em formato de arquivo de texto por meio de uma conexão EDI (Electronic Data Interchange ou &quot;troca eletrônica de dados&quot;).</p>
                            </div>
                        ),
                    },
                    {
                        question: "É possível fazer a antecipação dos recebimentos, via Portal da azulzinha?",
                        answer: <p>Sim. Vá em &quot;Minhas Vendas&quot; e acesse a aba &quot;Antecipação&quot;. Lá você pode realizar antecipações automáticas ou eventuais.</p>,
                    },
                    {
                        question: "Tem como controlar os lançamentos futuros via Portal da azulzinha?",
                        answer: <p>Tem sim. Em &quot;Minhas Vendas&quot;, clicando na aba &quot;Pagamentos futuros&quot;, é possível visualizar a agenda de lançamentos para controlar seus próximos recebíveis.</p>,
                    },
                    {
                        question: "É possível visualizar no Portal da azulzinha cada pagamento recebido?",
                        answer: <p>Sim. Em &quot;Minhas Vendas&quot; basta clicar na aba &quot;Detalhe de pagamento&quot; e conferir todos os pagamentos realizados ao estabelecimento e ajustes na conta, de forma transparente.</p>,
                    },
                    {
                        question: "Como acesso todas as informações da minha empresa?",
                        answer: <p>Na seção &quot;Meu negócio&quot;, estão todas as informações da sua empresa: dados cadastrais, domicílio bancário, taxas contratadas, equipamentos, entre outros. E nessa mesma seção, você consegue criar usuários e gerenciar quem pode acessar o Portal.</p>,
                    },
                    {
                        question: "Como alterar meus dados cadastrais?",
                        answer: (
                            <div className="space-y-2">
                                <p>No Portal da azulzinha, acessar o menu &quot;Solicitações&quot; &gt; preencher os dados &gt; clicar em &quot;Criar Caso&quot; &gt; Selecione o Motivo: &quot;Cadastro&quot; &gt; Submotivo: &quot;Manutenção&quot; &gt; Sintoma: &quot;selecione a opção que se adequar a sua necessidade de alteração&quot; &gt; clicar em &quot;Salvar&quot;.</p>
                                <p>Pelo App da azulzinha, acesse o menu &quot;Ajustes&quot;. Para acompanhar o retorno da solicitação de alteração cadastral acessar &quot;Atendimento&quot; &gt; &quot;Histórico&quot;.</p>
                            </div>
                        ),
                    },
                ],
            },
            {
                title: "Usuário Master e Padrão",
                items: [
                    {
                        question: "No Portal da azulzinha, o que é usuário Master? E usuário Padrão?",
                        answer: "Usuário Master é o proprietário do estabelecimento, pois detém o acesso total ao Portal da azulzinha e libera o acesso somente a quem autorizar. Usuários Padrão são as pessoas autorizadas pelo Usuário Master a fazerem o manuseio do serviço.",
                    },
                    {
                        question: "Como autorizar os funcionários do meu estabelecimento a utilizar o Portal da azulzinha?",
                        answer: (
                            <div className="space-y-2">
                                <p>Deve entrar no Portal da azulzinha <a href="https://portal.azulzinhadacaixa.com.br" target="_blank" rel="noopener noreferrer" className="text-azul underline">portal.azulzinhadacaixa.com.br</a> e acessar: &quot;Meu negócio&quot; &gt; &quot;Usuários&quot; &gt; &quot;Criar usuário&quot; &gt; preencher todas as informações solicitadas no formulário &gt; &quot;Adicionar usuário&quot;.</p>
                                <p>É possível cadastrar até 10 usuários. Após a realização do cadastro, os funcionários receberão uma mensagem via SMS contendo a senha de acesso e um e-mail com as orientações para acesso ao Portal. Em caso de dúvidas, entre em contato com a Central de Relacionamento azulzinha da CAIXA pelos telefones: 3003 5365 (capitais) e 0800 729 5365 (demais localidades). De Segunda a Domingo: das 8h às 22h, exceto feriados nacionais.</p>
                            </div>
                        ),
                    },
                ],
            },
            {
                title: "Senha e login",
                items: [
                    {
                        question: "O que o cliente deve fazer se esquecer a senha do Portal da azulzinha?",
                        answer: <p>Deve acessar o Portal da azulzinha <a href="https://portal.azulzinhadacaixa.com.br" target="_blank" rel="noopener noreferrer" className="text-azul underline">portal.azulzinhadacaixa.com.br</a> e clicar em &quot;Esqueceu sua senha?&quot;. Será enviado um guia de redefinição de senha para o endereço de e-mail cadastrado. Basta seguir as orientações para alteração de senha.</p>,
                    },
                    {
                        question: "O que o cliente deve fazer se esquecer o usuário do Portal da azulzinha?",
                        answer: <p>Deve acessar o Portal da azulzinha <a href="https://portal.azulzinhadacaixa.com.br" target="_blank" rel="noopener noreferrer" className="text-azul underline">portal.azulzinhadacaixa.com.br</a> e clicar em &quot;Esqueceu sua senha?&quot;. Será enviado um guia de redefinição de senha para o endereço de e-mail cadastrado. Basta seguir as orientações para alteração de senha.</p>,
                    },
                    {
                        question: "Por que o Portal da azulzinha e o App da azulzinha estão pedindo que eu altere minha senha?",
                        answer: "Para maior segurança, o Portal da azulzinha e o App da azulzinha solicitam alteração da sua senha a cada 3 meses.",
                    },
                    {
                        question: "Caso o cliente seja bloqueado porque excedeu o número de tentativas de acesso ao Portal, o que deve fazer?",
                        answer: <p>O cliente deverá aguardar o tempo solicitado pelo sistema para então seguir com fluxo de redefinição de senha clicando em &quot;Esqueci minha senha&quot;, sendo que neste caso o sistema enviará novo e-mail de ativação e SMS para que a senha seja alterada.</p>,
                    },
                    {
                        question: "Por que o usuário do Portal da azulzinha está bloqueado?",
                        answer: <p>Porque o cliente excedeu o número de tentativas para introduzir o usuário e a senha registrados. Para reativação da senha, o cliente tem duas opções: aguardar 30 minutos para tentar um novo acesso, redefinir a senha clicando em &quot;Esqueceu sua senha?&quot;, ou entrar em contato com a Central de Relacionamento pelos telefones: 3003 5365 (capitais) e 0800 729 5365 (demais localidades) para que o analista faça esse desbloqueio.</p>,
                    },
                    {
                        question: "O cliente solicitou usuário e senha para acesso ao Portal da azulzinha, mas ainda não os recebeu. Como deve proceder?",
                        answer: <p>O usuário do Portal da azulzinha deverá ser sempre o seu CPF ou CNPJ. Para efetivar o cadastro, clique em &quot;Primeira vez no Portal?&quot; &gt; &quot;Registre-se&quot; ou &quot;Esqueceu sua senha?&quot;. Insira o usuário cadastrado (CPF/CNPJ) e siga o passo a passo que será demonstrado nas próximas telas.</p>,
                    },
                ],
            },
        ],
    },
    {
        label: "Lotéricas",
        subCategories: [
            {
                title: "Aceitação",
                items: [
                    {
                        question: "Posso efetuar pagamentos nas Lotéricas utilizando cartões de crédito, débito ou múltiplos?",
                        answer: "Sim, você pode efetuar o pagamento de suas contas, boletos e jogos, entre outros serviços disponíveis na lotérica, com seu cartão de crédito, débito ou múltiplo, seja de bancos convencionais ou de bancos digitais ou novos bancos. Para isso, neste momento, é necessário que o cartão seja de uma das bandeiras a seguir: ELO, VISA, MASTERCARD.",
                    },
                    {
                        question: "Posso utilizar o meu cartão de crédito, débito ou múltiplo em qualquer Lotérica?",
                        answer: "Sim. Você pode realizar o pagamento com o cartão nas mais de 13 mil Lotéricas da CAIXA, espalhadas pelo Brasil, que passam a aceitar pagamento com cartões de crédito, débito ou múltiplo.",
                    },
                    {
                        question: "Apenas cartões físicos são aceitos nas Lotéricas?",
                        answer: "Sim. No momento, apenas cartões físicos são aceitos nas Lotéricas.",
                    },
                    {
                        question: "Posso pagar com o cartão de crédito cadastrado no meu celular?",
                        answer: "Não. No momento, apenas pagamentos com o cartão físico são aceitos nas Lotéricas.",
                    },
                ],
            },
            {
                title: "Bandeiras de Voucher Arranjo Aberto",
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
            {
                title: "Bandeiras de Voucher Arranjo Fechado",
                items: [
                    {
                        question: "Apenas cartões de crédito e débito da CAIXA são aceitos?",
                        answer: "Não. Qualquer cartão de crédito ou de débito das bandeiras Elo, Visa ou MasterCard poderão ser utilizados para o pagamento de suas contas, boletos ou jogos, seja de bancos convencionais ou de bancos digitais ou novos bancos.",
                    },
                    {
                        question: "Quais bandeiras de cartões de crédito e débito são aceitas?",
                        answer: "Qualquer cartão de crédito ou de débito das bandeiras Elo, Visa ou MasterCard poderão ser utilizados para o pagamento de suas contas, boletos ou jogos, seja de bancos convencionais ou de bancos digitais ou novos bancos.",
                    },
                    {
                        question: "Posso usar meu cartão HiperCard, Amex ou Cabal?",
                        answer: "No momento, apenas as bandeiras Elo, Visa e MasterCard são aceitas nas Lotéricas.",
                    },
                    {
                        question: "Posso utilizar o meu Vale-Alimentação ou Vale-Refeição para pagar contas nas Lotéricas?",
                        answer: "Não. Apenas cartões de crédito, de débito, saque em conta CAIXA, espécie (dinheiro) ou modalidade Pix são aceitos para pagamento nas Lotéricas.",
                    },
                ],
            },
            {
                title: "Conveniência",
                items: [
                    {
                        question: "Pago algo a mais por utilizar meu cartão de crédito ou débito?",
                        answer: "Pela comodidade de poder utilizar o seu cartão de crédito ou de débito, será cobrado um percentual pelo serviço de conveniência, que poderá variar de acordo com a função (débito ou crédito) do seu cartão. Não se preocupe, pois o valor do percentual cobrado pelo serviço de Conveniência sempre será apresentado a você antes de concluir a transação.",
                    },
                    {
                        question: "Qual o valor do serviço de Conveniência?",
                        answer: "O valor cobrado pelo serviço de Conveniência é um % do valor total das contas, boletos e jogos que você estiver pagando na lotérica.",
                    },
                    {
                        question: "Onde posso consultar o valor pelo serviço de Conveniência?",
                        answer: "O percentual cobrado pelo serviço de Conveniência é apresentado juntamente com o valor da transação, no visor do pinpad, equipamento no qual você digita a sua senha. Sempre confira o valor da transação e do serviço de Conveniência antes de digitar a sua senha. O valor do serviço de Conveniência também consta de forma detalhada no recibo da operação que você receberá do funcionário da Lotérica.",
                    },
                    {
                        question: "Por que o valor do serviço de Conveniência quando pago com o cartão de crédito é maior do que quando utilizo meu cartão de débito?",
                        answer: "Isso ocorre com qualquer pagamento no cartão de crédito, pois o valor somente será desembolsado efetivamente por você, apenas quando efetuar o pagamento da sua fatura no vencimento. Ou seja, para realizar o pagamento com o cartão de crédito, é necessário ter limite disponível no seu cartão. Para efetuar o pagamento com o cartão de débito, é necessário que haja saldo na sua conta, na qual ocorrerá o débito do valor total da transação.",
                    },
                    {
                        question: "Esse valor cobrado pelo serviço de Conveniência pode ser cobrado?",
                        answer: "O percentual cobrado pelo serviço de Conveniência é realizado pela Fiserv, responsável por fornecer a infraestrutura e tecnologia necessárias para que o valor pago seja corretamente entregue à Lotérica e para permitir essa facilidade para você, cliente. Assim, esse percentual de serviço de conveniência corresponde ao valor da prestação de serviço.",
                    },
                    {
                        question: "O valor do serviço de Conveniência é igual em todas as Lotéricas?",
                        answer: "Sim! O valor do serviço de conveniência é igual em todas as mais de 13 mil Lotéricas espalhadas pelo país.",
                    },
                    {
                        question: "Se eu pagar com meu cartão de débito da CAIXA (saque) haverá cobrança de serviço de Conveniência?",
                        answer: "Não. Ao utilizar o seu cartão de débito da CAIXA, não haverá cobrança de percentual de serviço de Conveniência, pois a função utilizada é o saque em conta da CAIXA.",
                    },
                    {
                        question: "Se eu pagar com meu cartão de crédito da CAIXA haverá cobrança serviço de Conveniência?",
                        answer: "Sim. Ao utilizar o seu cartão de crédito da CAIXA, haverá a cobrança de um percentual pelo serviço de Conveniência, modalidade Crédito.",
                    },
                ],
            },
            {
                title: "Pagamentos",
                items: [
                    {
                        question: "Quais os tipos de serviços podem ser pagos com cartões de crédito, débito ou múltiplo nas Lotéricas?",
                        answer: "Você pode realizar o pagamento da maioria das suas contas e boletos, além de poder efetuar o pagamento dos seus jogos. A fatura de cartão de crédito somente poderá ser paga com o cartão de débito de qualquer banco ou com as demais opções disponíveis na lotérica: em espécie (dinheiro), saque em conta da CAIXA ou Pix na lotérica.",
                    },
                    {
                        question: "Que tipo de contas posso pagar nas Lotéricas com meu cartão de crédito, débito ou múltiplo?",
                        answer: "Todas as contas que a lotérica já recebe hoje, como água, luz, gás, telefone, IPTU, entre outras.",
                    },
                    {
                        question: "Que tipos de boletos posso pagar nas Lotéricas com meu cartão de crédito, débito ou múltiplo?",
                        answer: "Você pode pagar a maioria dos seus boletos como condomínio, carnê, colégio/escolas, compras de internet, entre outros. A exceção, neste caso, é para boletos para o pagamento de faturas de cartões de crédito, que podem ser pagas com o cartão de débito de qualquer banco ou CAIXA ou com as demais opções disponíveis na lotérica: em espécie (dinheiro), saque em conta da CAIXA ou Pix na lotérica.",
                    },
                    {
                        question: "Posso pagar jogos com meu cartão de crédito, débito ou múltiplo?",
                        answer: "Sim. Agora você pode pagar os seus jogos da Mega-Sena, Loto-fácil, Milionária e muitos outros, com o seu cartão de crédito, débito ou múltiplo.",
                    },
                    {
                        question: "Posso parcelar os pagamentos feitos com cartões de crédito nas Lotéricas?",
                        answer: "No momento, são aceitos apenas pagamentos à vista.",
                    },
                    {
                        question: "Após quanto tempo do pagamento com cartão de crédito ou débito, a minha conta aparecerá como paga?",
                        answer: "O prazo é o mesmo se o pagamento ocorresse em dinheiro, variando de conta para conta devido ao tipo. Em média, é de até dois dias úteis o prazo de compensação (confirmação de pagamento).",
                    },
                    {
                        question: "Meu limite do cartão de crédito é menor do que o valor das contas que quero pagar. Posso pagar parte do valor no cartão de crédito e a diferença em dinheiro ou cartão de débito?",
                        answer: "O valor total, como uma única transação, não poderá ser fracionado. Neste caso, caso esteja pagando mais de uma conta ao mesmo tempo, você poderá realizar pagamentos separados, um com o seu cartão, um outro com cartão de débito, outro com opções disponíveis no canal lotérica: em espécie (dinheiro), saque em conta da CAIXA ou Pix na lotérica.",
                    },
                    {
                        question: "Posso usar mais de um cartão no mesmo pagamento?",
                        answer: "Não. Apenas um cartão pode ser utilizado por pagamento. Caso esteja pagando mais de uma conta, você pode pagar cada uma em um cartão, de acordo com seu limite (para crédito) ou saldo em conta (para débito).",
                    },
                    {
                        question: "Há um valor limite de pagamento com cartão de crédito?",
                        answer: "Consulte o atendente da lotérica, que irá orientá-lo, de acordo com o tipo de conta que será paga.",
                    },
                    {
                        question: "Há um valor limite de pagamento com cartão de débito?",
                        answer: "Consulte o atendente da lotérica, que irá orientá-lo, de acordo com o tipo de conta que será paga.",
                    },
                    {
                        question: "Preciso apresentar meu documento de identidade no momento da efetivação da transação presencial na lotérica?",
                        answer: "Sim. Sempre apresente o seu documento de identificação quando for efetuar pagamentos com cartões de crédito, débito.",
                    },
                    {
                        question: "Posso pagar a fatura do cartão de crédito com o mesmo cartão de crédito?",
                        answer: "Não. Você não pode efetuar o pagamento de faturas de cartões de crédito com outro, ou o mesmo, cartão de crédito. Neste caso, utilize a função de débito do cartão, saque em conta da CAIXA, pagamento em espécie (dinheiro) ou a opção Pix na Lotérica.",
                    },
                    {
                        question: "Posso pagar uma conta de outra pessoa com o cartão de crédito ou débito dela?",
                        answer: "Você pode pagar contas em nome de outras pessoas, porém somente o titular do cartão pode utilizar as funções de débito, crédito ou saque em conta da CAIXA, pois é solicitada a identificação do cliente no momento e a digitação de senha para autorizar a transação.",
                    },
                    {
                        question: "Posso pagar boleto de prestação de amortização de empréstimos ou financiamentos CAIXA usando o cartão de crédito?",
                        answer: "Sim, desde que o boleto esteja dentro do prazo de vencimento.",
                    },
                    {
                        question: "A lotérica aceita pagamento com cartão digital CAIXA Tem?",
                        answer: "Não. No momento, apenas pagamentos com o cartão físico são aceitos nas Lotéricas.",
                    },
                    {
                        question: "A lotérica aceita pagamento por aproximação (NFC)?",
                        answer: "Não. No momento, apenas pagamentos com o cartão físico são aceitos nas Lotéricas.",
                    },
                ],
            },
            {
                title: "Representantes de lotéricas",
                items: [
                    {
                        question: "Sou representante da lotérica. Preciso esclarecer dúvidas sobre o terminal TFL e emissão do cupom. Como fazer?",
                        answer: <p>Ligue para a central específica de atendimento ao Estabelecimento Comercial Lotérica, no telefone <a href="tel:30034655" className="text-azul underline">3003 4655</a>.</p>,
                    },
                ],
            },
            {
                title: "Solução de problemas",
                items: [
                    {
                        question: "Meu pagamento foi recusado. O que devo fazer?",
                        answer: "Você pode contatar o banco emissor do seu cartão ou tentar utilizar outro cartão de crédito, débito ou múltiplo. Importante reforçar que é necessário que haja limite disponível no cartão de crédito ou saldo na conta do banco caso esteja utilizando a função de débito, para que o pagamento seja autorizado. Se ainda assim o problema persistir, você conta com a Lotérica para o pagamento de suas contas com as demais opções disponíveis na lotérica: em espécie (dinheiro), saque em conta da CAIXA ou Pix na lotérica.",
                    },
                    {
                        question: "Não consegui efetuar o pagamento por aproximação. O que devo fazer?",
                        answer: "No momento, o pagamento por aproximação não está disponível nas Lotéricas. Será necessário que você insira o cartão físico e digite sua senha, após conferir os valores de pagamento.",
                    },
                    {
                        question: "Efetuei o pagamento com meu cartão de crédito ou débito e a minha conta continua pendente. O que devo fazer?",
                        answer: "Procure a lotérica na qual foi realizado a transação e apresente o comprovante do pagamento para orientações. Lembrete: o prazo de compensação do pagamento varia por tipo de conta. Em média, são dois dias úteis.",
                    },
                    {
                        question: "Como estornar um pagamento feito com cartão de crédito ou débito na Lotérica?",
                        answer: "Alguns pagamentos não permitem estorno. Depende do tipo de conta ou serviço bancário. Caso tenha efetuado alguma transação incorreta, acione a Lotérica que o atendeu, tão logo identificado o pagamento equivocado.",
                    },
                ],
            },
        ],
    },
    {
        label: "Link de pagamentos",
        subCategories: [
            {
                title: "Dúvidas gerais",
                items: [
                    {
                        question: "O Link de pagamento tem custo de adesão?",
                        answer: "Não, a adesão é totalmente gratuita.",
                    },
                    {
                        question: "Existe alguma restrição para oferta de link?",
                        answer: "Para oferta de link, existem alguns ramos / CNAEs que são restritos. Isso quer dizer que o link de pagamento para esses ramos não poderá ser liberado. Para mais informações, deve-se verificar a lista dos CNAEs restritos compartilhada pelo representante de C&R.",
                    },
                    {
                        question: "Caso o lojista já tenha uma solução física (ex. POS), a oferta de link pode ser realizada?",
                        answer: "Sim. Nesse caso, uma nova proposta deve ser criada, seguindo o fluxo de onboarding acordado (Fiserv Online). Importante reforçar que um novo cadastro com novas credenciais de acesso serão geradas, diferente da solução física existente.",
                    },
                    {
                        question: "Posso parcelar as vendas?",
                        answer: "Sim, as parcelas podem ser vistas e aplicadas no App quando você estiver criando o link.",
                    },
                    {
                        question: "Como faço o envio do link para o meu cliente?",
                        answer: "É simples, basta você copiar o link e enviar para seu cliente através das redes sociais de sua preferência como WhatsApp, Instagram, Facebook, e-mail, SMS, etc.",
                    },
                    {
                        question: "Após gerado, em quanto tempo o link expira?",
                        answer: "O link tem um prazo de 48h para expirar, caso ocorra do seu link expirar antes do seu cliente pagar, você poderá gerar outro link sem nenhum custo.",
                    },
                    {
                        question: "Posso cadastrar mais de um produto em um único link de pagamento?",
                        answer: "Sim, mas você deverá colocar o valor total dos produtos no momento da geração do link.",
                    },
                    {
                        question: "Posso gerar mais de um link por vez?",
                        answer: "Não, a geração de link é unitária, mas você pode gerar quantos links desejar.",
                    },
                    {
                        question: "Posso compartilhar o mesmo link para mais de uma pessoa?",
                        answer: "Sim, você só precisa copiar o link já gerado e enviar para outra pessoa.",
                    },
                    {
                        question: "Como diminuo a chance de contestação (chargeback) das minhas transações de link?",
                        answer: "As transações de link de pagamento possuem integração com nosso Antifraude, dessa forma, apenas as transações de baixo risco são autorizadas. Além disso, temos o fator de autenticação 3DS 2.0, o que aumenta ainda mais a segurança das transações.",
                    },
                    {
                        question: "O que é Antifraude?",
                        answer: "É um mecanismo indispensável nas transações online, que tem como objetivo identificar e cancelar possíveis compras fraudulentas, mitigando o risco de contestações por fraude. Na nossa solução o custo é de R$ 0,10 por transação submetida ao antifraude.",
                    },
                    {
                        question: "Posso cancelar a solução de antifraude?",
                        answer: "Não, o antifraude é indispensável para as transações de venda online.",
                    },
                    {
                        question: "O que é 3DS 2.0?",
                        answer: "É um protocolo de autenticação no comércio eletrônico que permite o processamento seguro de transações com cartões e tem como objetivo aumentar a segurança e confiabilidade das transações tanto para o vendedor quanto para o consumidor, minimizando o risco de contestação por fraude.",
                    },
                ],
            },
        ],
    },
    {
        label: "Manual de máquinas",
        subCategories: [
            {
                title: "Manuais disponíveis",
                items: [
                    {
                        question: "App aproxima",
                        answer: (
                            <div className="flex items-center gap-6">
                                <Image src={asset("/images/ajuda/celular-aproxima.png")} alt="App aproxima" width={80} height={80} className="object-contain shrink-0" />
                                <div className="space-y-2">
                                    <p>Disponível na Google Play:</p>
                                    <p><a href="https://play.google.com/store/apps/details?id=com.fiserv.hlscaixa" target="_blank" rel="noopener noreferrer" className="text-azul underline">Baixar na Google Play</a></p>
                                    <p><a href="https://azulzinhadacaixa.com.br/midias/manual_azulzinha_aproxima.pdf" target="_blank" rel="noopener noreferrer" className="text-azul underline">Baixar o manual (PDF)</a></p>
                                </div>
                            </div>
                        ),
                    },
                    {
                        question: "Ingenico Move 5000",
                        answer: (
                            <div className="flex items-center gap-6">
                                <Image src={asset("/images/ajuda/ingenico.png")} alt="Ingenico Move 5000" width={80} height={80} className="object-contain shrink-0" />
                                <p><a href="https://azulzinhadacaixa.com.br/manual?variavel=2" target="_blank" rel="noopener noreferrer" className="text-azul underline">Saiba mais</a></p>
                            </div>
                        ),
                    },
                    {
                        question: "Lane 3000",
                        answer: (
                            <div className="flex items-center gap-6">
                                <Image src={asset("/images/ajuda/lane_frontal.png")} alt="Lane 3000" width={80} height={80} className="object-contain shrink-0" />
                                <p><a href="https://azulzinhadacaixa.com.br/manual?variavel=4" target="_blank" rel="noopener noreferrer" className="text-azul underline">Saiba mais</a></p>
                            </div>
                        ),
                    },
                    {
                        question: "Newland SP 930",
                        answer: (
                            <div className="flex items-center gap-6">
                                <Image src={asset("/images/ajuda/newland.png")} alt="Newland SP 930" width={80} height={80} className="object-contain shrink-0" />
                                <p><a href="https://azulzinhadacaixa.com.br/manual?variavel=3" target="_blank" rel="noopener noreferrer" className="text-azul underline">Saiba mais</a></p>
                            </div>
                        ),
                    },
                    {
                        question: "smart DX8000",
                        answer: (
                            <div className="flex items-center gap-6">
                                <Image src={asset("/images/ajuda/azulzinha-smart.png")} alt="smart DX8000" width={80} height={80} className="object-contain shrink-0" />
                                <p><a href="https://azulzinhadacaixa.com.br/manual?variavel=5" target="_blank" rel="noopener noreferrer" className="text-azul underline">Saiba mais</a></p>
                            </div>
                        ),
                    },
                    {
                        question: "Verifone C680",
                        answer: (
                            <div className="flex items-center gap-6">
                                <Image src={asset("/images/ajuda/verifone.png")} alt="Verifone C680" width={80} height={80} className="object-contain shrink-0" />
                                <p><a href="https://azulzinhadacaixa.com.br/manual?variavel=1" target="_blank" rel="noopener noreferrer" className="text-azul underline">Saiba mais</a></p>
                            </div>
                        ),
                    },
                ],
            },
        ],
    },
    {
        label: "Pix",
        subCategories: [
            {
                title: "Dúvidas gerais",
                items: [
                    {
                        question: "O que é uma chave Pix?",
                        answer: "A chave é como um apelido da sua conta. Podem ser utilizados seu CNPJ/CPF, e-mail, número do celular ou chave aleatória. Pessoas físicas podem ter até 5 chaves cadastradas por conta, e pessoas jurídicas, até 20 chaves.",
                    },
                    {
                        question: "Para que e por que preciso de uma chave Pix?",
                        answer: "A chave Pix é necessária no momento do cadastro, pois é por meio dela que é possível realizar transferências e pagamentos via Pix sem precisar compartilhar informações pessoais.",
                    },
                    {
                        question: "Como consigo a chave e credenciais Pix para cadastro?",
                        answer: "Acesse o app do seu PSP (banco) de preferência. No menu Pix, configure uma chave Pix da CAIXA para utilização.",
                    },
                    {
                        question: "O que são \"Credenciais\"?",
                        answer: "São o \"Client ID\" e o \"Client Secret\" da chave cadastrada junto ao seu PSP de preferência.",
                    },
                    {
                        question: "Por que preciso solicitar o \"Client ID\" e \"Client Secret\" junto ao meu PSP?",
                        answer: "É um método para tornar a usabilidade do Pix muito mais segura. Por isso, quem fornece essas informações é o PSP de preferência do cliente. A credenciadora não tem acesso a esses dados, que são altamente sigilosos.",
                    },
                    {
                        question: "O que preciso fazer para transacionar com Pix na azulzinha?",
                        answer: "Para transacionar com Pix na azulzinha, cadastre sua chave e credenciais na CAIXA e, depois, cadastre a mesma chave no App da azulzinha ou diretamente no POS (maquininha).",
                    },
                    {
                        question: "O \"Client ID\" e \"Client Secret\" são a mesma coisa que \"Usuário\" e \"Senha\"?",
                        answer: "Sim. Na jornada, \"Usuário\" e \"Senha\" correspondem ao \"Client ID\" e \"Client Secret\".",
                    },
                    {
                        question: "A chave aleatória é a mesma coisa que chave única?",
                        answer: "Sim.",
                    },
                    {
                        question: "Posso repetir a mesma chave para PSPs diferentes?",
                        answer: "Não, a chave é única. Caso necessário, solicite a portabilidade da chave para outro PSP ou crie uma nova. Para usar uma chave Pix em um POS concorrente, cadastre outra chave junto ao seu PSP. Não utilize a mesma chave Pix para o POS e para demais transferências de valores. Associe uma chave Pix em seu PSP para utilização exclusiva com a azulzinha. Após a conclusão do cadastro no PSP, utilize um dos canais disponíveis (app ou POS) para cadastrar essa chave.",
                    },
                    {
                        question: "Posso usar uma chave já cadastrada em um POS concorrente?",
                        answer: "Não. A chave é única — consulte a pergunta anterior para mais detalhes.",
                    },
                    {
                        question: "Todos os PSPs funcionam para transacionar Pix na azulzinha?",
                        answer: (
                            <div className="space-y-2">
                                <p>A azulzinha é multi-PSPs. A lista de PSPs disponíveis pode ser consultada no App da azulzinha, no POS ou no site. Confira abaixo:</p>
                                <ul className="list-none space-y-1">
                                    <li>- CAIXA</li>
                                    <li>- Ailos</li>
                                    <li>- Banco do Brasil</li>
                                    <li>- Banco Triângulo</li>
                                    <li>- Banrisul</li>
                                    <li>- Bradesco</li>
                                    <li>- Cresol</li>
                                    <li>- Efí Bank</li>
                                    <li>- Itaú</li>
                                    <li>- PicPay</li>
                                    <li>- Quero-Quero Pag</li>
                                    <li>- Santander</li>
                                    <li>- Senff</li>
                                </ul>
                                <p><em>*Lista sujeita à atualização.</em></p>
                            </div>
                        ),
                    },
                    {
                        question: "O cadastro da chave é instantâneo no App da azulzinha?",
                        answer: "Sim. O cadastro é realizado de forma online, mas os PSPs podem aplicar um período de sincronismo.",
                    },
                    {
                        question: "Por que o cadastro de chave no POS solicita validação em duas etapas?",
                        answer: "Por segurança, é solicitada a confirmação do token enviado para o e-mail ou telefone cadastrados no credenciamento. Se os dados estiverem incorretos, entre em contato conosco pelos nossos canais de atendimento para atualizar seus dados cadastrais.",
                    },
                    {
                        question: "Se houver falha na vinculação do cadastro, quais erros podem ser apresentados?",
                        answer: "Podem ser exibidos erros como: \"Não Autorizado\", \"MA\" (erro de chave Pix), \"ZA\" (erro de credenciais Pix) e \"BL\" (credencial não enviada pelo PSP).",
                    },
                    {
                        question: "Realizei o cadastro corretamente e não consigo transacionar. O que devo fazer?",
                        answer: "Se o erro for MA, ZA, BL ou 03, revise os dados cadastrados da chave e das credenciais Pix.",
                    },
                    {
                        question: "O que fazer se a transação foi confirmada no app do PSP, mas não foi gerado o CV (comprovante de venda) no POS?",
                        answer: "A transação só é efetivada após a geração do CV, assim como ocorre nas transações convencionais de débito e crédito. Caso a confirmação ocorra apenas no app do pagador, sem a geração do CV no POS, a transação será automaticamente desfeita, conforme regra do Banco Central. Nessa situação, o produto ou serviço não deve ser entregue ao pagador.",
                    },
                    {
                        question: "Estou com dúvida se a transação foi efetivada.",
                        answer: "Para garantir a confirmação da transação, antes de entregar o produto ou serviço, acesse o menu de reimpressão e verifique a última transação realizada.",
                    },
                    {
                        question: "Estou com dificuldades para localizar o valor transferido.",
                        answer: "Em caso de dificuldade para localizar um valor transferido, consulte o relatório disponível na azulzinha ou no app para confirmar se a transação foi realizada. Também é possível verificar diretamente no app do PSP recebedor. Caso haja qualquer dificuldade com o valor transferido, entre em contato diretamente com o PSP responsável pela liquidação.",
                    },
                    {
                        question: "A azulzinha cobra pela utilização do Pix?",
                        answer: "Não há cobrança de valor adicional para habilitar o serviço de Pix no seu POS da azulzinha, porém, recomenda-se exercer o acordo comercial diretamente com seu PSP/gerente para fechar o valor da taxa que estará associada à transação de Pix.",
                    },
                    {
                        question: "Como transacionar com Pix Saque e Pix Troco?",
                        answer: "Para utilizar Pix Saque e Pix Troco na azulzinha, contrate o serviço de Agente de Saque e/ou Troco junto ao PSP e confirme se ele está apto a operar com a azulzinha.",
                    },
                    {
                        question: "O que fazer em caso de fraude, roubo, furto ou golpe?",
                        answer: (
                            <div className="space-y-2">
                                <p>Em situações como essa, recomendamos seguir os passos a seguir para garantir a apuração adequada do caso:</p>
                                <p>1. Registre um Boletim de Ocorrência (BO) junto à autoridade policial.</p>
                                <p>2. Registre uma reclamação junto ao seu PSP e à azulzinha, informando todos os dados, comprovantes e documentos relacionados ao caso, incluindo o BO.</p>
                                <p>3. Em caso de indício de crime, o PSP deverá avaliar a situação e realizar a devolução dos valores, conforme a regulamentação aplicável.</p>
                                <p>4. Caso o PSP não caracterize o ocorrido como crime, procure o Procon ou o Poder Judiciário da sua região.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Posso usar a mesma chave Pix das transferências no POS?",
                        answer: "Não. A chave é única — consulte a pergunta sobre repetição de chaves para PSPs diferentes para mais detalhes.",
                    },
                ],
            },
        ],
    },
    {
        label: "Vendas",
        subCategories: [
            {
                title: "Gestão de suas vendas",
                items: [
                    {
                        question: "Qual a melhor maneira de fazer a gestão das minhas vendas?",
                        answer: (
                            <div className="space-y-2">
                                <p>A azulzinha oferece aos seus estabelecimentos comerciais as seguintes vantagens para melhor gestão do fluxo de vendas:</p>
                                <p>- Portal da azulzinha <a href="https://portal.azulzinhadacaixa.com.br" target="_blank" rel="noopener noreferrer" className="text-azul underline">portal.azulzinhadacaixa.com.br</a> e App da azulzinha. Estas ferramentas são gratuitas e permitem a consulta de dados contratuais, cadastrais e agenda financeira.</p>
                                <p>- Extrato Eletrônico: é enviado em formato de arquivo de texto por meio de uma conexão EDI (Electronic Data Interchange ou &quot;troca eletrônica de dados&quot;).</p>
                            </div>
                        ),
                    },
                    {
                        question: "Como consultar os valores que eu tenho a receber?",
                        answer: (
                            <div className="space-y-2">
                                <p>Pelo Portal da azulzinha, no menu &quot;Minhas vendas&quot;, selecione a opção &quot;Pagamentos Futuro&quot; para visualizar as informações sobre valores por período e bandeiras.</p>
                                <p>Pelo App da azulzinha, selecione o menu &quot;Vendas&quot; &gt; &quot;Futuro&quot; e você encontrará as transações conforme seleção de período definido.</p>
                            </div>
                        ),
                    },
                ],
            },
            {
                title: "Liquidação de pagamentos",
                items: [
                    {
                        question: "Qual o prazo para a liquidação dos pagamentos realizados?",
                        answer: (
                            <div className="space-y-2">
                                <p>Os pagamentos serão liquidados da seguinte forma:</p>
                                <p><strong>Débito:</strong> valor total da venda no próximo dia útil seguinte à efetivação da transação. Vendas aos sábados e domingos são processadas às segundas-feiras e os valores disponibilizados até às terças-feiras seguintes.</p>
                                <p><strong>Crédito:</strong> valor total da venda em 30 dias corridos.</p>
                                <p><strong>Parcelamento sem juros:</strong> recebimento da primeira parcela após 30 dias do processamento da venda, e as posteriores, a cada 30 dias subsequentes.</p>
                                <p><strong>Parcelamento com juros:</strong> valor total da venda em 30 dias corridos.</p>
                                <p>Para os casos em que o cliente contratar MDR D+2 (MDR Flex), os prazos de liquidação poderão ser reduzidos para até D+2.</p>
                                <p>No caso de antecipação eventual, se for até 12h, crédito em D+0. Se o cliente faturar acima de R$ 360.000/ano na maquininha, o recebimento é D+1.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Como visualizar o extrato da azulzinha?",
                        answer: (
                            <div className="space-y-2">
                                <p>Você pode ter acesso ao extrato via o Portal da azulzinha <a href="https://portal.azulzinhadacaixa.com.br" target="_blank" rel="noopener noreferrer" className="text-azul underline">portal.azulzinhadacaixa.com.br</a>, no qual é possível consultar as vendas, pagamentos e fluxo de caixa.</p>
                                <p>No menu &quot;Relatórios&quot;, você customiza a visualização das informações e programa os dados que deseja receber. Para receber relatórios de forma automática, vá na aba &quot;Agendamento&quot; e clique em &quot;+Relatório&quot;.</p>
                                <p>Na sequência, escolha o tipo de relatório entre pagamento, autorização ou transações e em seguida escolha a frequência que você deseja receber seus relatórios: diário, semanal ou mensal. Para baixar o arquivo, basta clicar na seta ao lado do relatório que desejar.</p>
                                <p>No App da azulzinha, acesse o menu &quot;Vendas&quot; para visualizar as transações realizadas no dia de hoje, valores pagos e pagamentos futuros.</p>
                            </div>
                        ),
                    },
                ],
            },
            {
                title: "Antecipação",
                items: [
                    {
                        question: "Como posso antecipar os recebíveis do estabelecimento?",
                        answer: (
                            <div className="space-y-2">
                                <p>A operação de Antecipação de Recebíveis (antecipação automática e eventual) pode ser realizada de diversas formas:</p>
                                <p>- No Portal da azulzinha <a href="https://portal.azulzinhadacaixa.com.br" target="_blank" rel="noopener noreferrer" className="text-azul underline">portal.azulzinhadacaixa.com.br</a>, vá em &quot;Minhas Vendas&quot; e acesse a aba &quot;Antecipação&quot;, você pode fazer antecipações automáticas ou eventuais.</p>
                                <p>- Pelo App da azulzinha, acesse o menu &quot;Antecipar&quot;, selecione &quot;automática&quot; ou &quot;eventual&quot;, siga o passo a passo para realizar a simulação e opte pela contratação da antecipação.</p>
                                <p>- Diretamente a partir do terminal (POS), opções &quot;Menu&quot; e &quot;Antecipação&quot;.</p>
                                <p>- Por meio da Central de Relacionamento pelos telefones: <a href="tel:30035365" className="text-azul underline">3003 5365</a> (capitais) e <a href="tel:08007295365" className="text-azul underline">0800 729 5365</a> (demais localidades), de segunda a domingo, das 8h às 22h, exceto feriados nacionais.</p>
                            </div>
                        ),
                    },
                ],
            },
            {
                title: "Taxas de descontos",
                items: [
                    {
                        question: "Como descobrir quais serão as taxas de desconto cobradas pelas vendas realizadas com cartões?",
                        answer: (
                            <div className="space-y-2">
                                <p>Para visualizar as taxas de desconto cobradas pelas vendas, acesse:</p>
                                <p>Portal da azulzinha <a href="https://portal.azulzinhadacaixa.com.br" target="_blank" rel="noopener noreferrer" className="text-azul underline">portal.azulzinhadacaixa.com.br</a>, opção &quot;Meu negócio&quot; &gt; &quot;Meus dados&quot; &gt; &quot;Taxas e tarifas&quot;.</p>
                                <p>App da azulzinha, menu &quot;Atendimento&quot; &gt; Consultar: &quot;Taxas e Tarifas&quot;.</p>
                            </div>
                        ),
                    },
                ],
            },
            {
                title: "Comprovante de venda",
                items: [
                    {
                        question: "O que é uma solicitação de comprovação de venda?",
                        answer: "É a cópia do comprovante de venda de uma transação realizada em seu estabelecimento, caso por algum motivo o banco emissor do cartão e o portador do cartão solicitem à azulzinha da CAIXA a validação da transação. O estabelecimento comercial receberá um e-mail de notificação de envio de comprovante com as instruções de quais documentos deverá encaminhar e o prazo.",
                    },
                    {
                        question: "Por que devo atender uma solicitação de comprovação de venda?",
                        answer: "É importante manter os comprovantes de venda arquivados de acordo com o disposto no contrato de adesão e com as regras da bandeira, e encaminhá-los dentro do prazo estabelecido à azulzinha da CAIXA, quando solicitados para comprovar a transação realizada no estabelecimento e evitar débitos posteriores.",
                    },
                    {
                        question: "Como imprimir o comprovante de uma transação específica novamente?",
                        answer: <p>Não é possível a reimpressão de uma transação específica. Só é possível reimprimir a última transação realizada no terminal (POS)/maquininha. Para consultar todas as vendas realizadas, acesse o Portal da azulzinha e vá em &quot;Minhas Vendas&quot;. Lá você consegue visualizar todas as transações efetivadas e exportar em PDF, caso deseje.</p>,
                    },
                    {
                        question: "Como imprimir o comprovante da última transação novamente?",
                        answer: <p>Selecione a opção &quot;Reimpressão&quot; no menu do terminal (POS)/maquininha, depois escolha se a reimpressão desejada é a via do estabelecimento, do cliente ou ambas, e aguarde a impressão.</p>,
                    },
                ],
            },
            {
                title: "Cancelamentos",
                items: [
                    {
                        question: "Como cancelar uma venda?",
                        answer: (
                            <div className="space-y-3">
                                <p>Caso a venda tenha sido realizada no mesmo dia, o cancelamento pode ser feito no terminal, desde que o portador esteja presente com o cartão em mãos. Se a venda é de uma data anterior, deve ser aberto um chamado para cancelamento de venda no Portal da azulzinha ou pelo App da azulzinha. Este tipo de cancelamento é válido somente para vendas da modalidade crédito (à vista ou parcelado).</p>
                                <p><strong>Cancelamento pelo Portal da azulzinha:</strong></p>
                                <ul className="list-none space-y-1">
                                    <li>- Acesse a página inicial e vá até a seção &quot;Vendas&quot;;</li>
                                    <li>- Utilize a lista disponível para localizar a transação que deseja cancelar;</li>
                                    <li>- Clique sobre a transação para visualizar os detalhes completos;</li>
                                    <li>- No canto superior da tela, selecione a opção &quot;Cancelar venda&quot;;</li>
                                    <li>- Uma janela será exibida para que você preencha as informações do cancelamento;</li>
                                    <li>- Informe o valor a ser cancelado e o motivo da solicitação;</li>
                                    <li>- Verifique se os valores, os dados do cartão e a data da venda estão corretos;</li>
                                    <li>- Com as informações validadas, clique em &quot;Confirmar solicitação de cancelamento&quot;;</li>
                                    <li>- Após o envio, o pedido será analisado pela equipe responsável, com prazo de resposta de até quatro dias úteis;</li>
                                    <li>- Para acompanhar o andamento, acesse a seção &quot;Cancelamentos&quot; no portal, onde também é possível consultar o histórico de solicitações finalizadas.</li>
                                </ul>
                                <p><strong>Cancelamento pelo App da azulzinha:</strong></p>
                                <ul className="list-none space-y-1">
                                    <li>- Acesse a lista de vendas realizadas;</li>
                                    <li>- Selecione a transação desejada;</li>
                                    <li>- Na tela de detalhes da venda, toque na opção &quot;Cancelar venda&quot;;</li>
                                    <li>- Informe o valor a ser cancelado, que pode ser o total da venda ou apenas uma parte;</li>
                                    <li>- Avance para a próxima etapa e escolha o motivo do cancelamento;</li>
                                    <li>- Na tela de resumo, revise cuidadosamente todas as informações apresentadas;</li>
                                    <li>- Após o envio do pedido, uma mensagem de confirmação será exibida.</li>
                                </ul>
                            </div>
                        ),
                    },
                ],
            },
            {
                title: "Chargeback",
                items: [
                    {
                        question: "O que é um Chargeback?",
                        answer: "O Chargeback é a contestação de uma compra pelo portador do cartão. Pode ocorrer quando o portador não reconhece um valor lançado em sua fatura, por insatisfação com um serviço prestado, ou ainda, por uma entrega de produto não realizada (em caso de compras em lojas virtuais). Caso o Chargeback seja confirmado após análise, o valor creditado pela transação será debitado do estabelecimento comercial.",
                    },
                    {
                        question: "Qual o prazo para um Chargeback?",
                        answer: "O prazo máximo para um Chargeback é de 120 dias a partir da data de processamento da venda e a finalização do processo ocorre em até 180 dias. Para situações de desacordo comercial como entrega de mercadoria ou prestação de serviço, o prazo de 120 dias é considerado a partir da data do evento. Exemplos: data que a mercadoria deveria ser entregue; data prevista de prestação do serviço.",
                    },
                    {
                        question: "Como posso acessar os serviços de chargeback?",
                        answer: <p>Para essas informações entre em contato com a Central de Relacionamento azulzinha pelos telefones <a href="tel:30035365" className="text-azul underline">3003 5365</a> (capitais) e <a href="tel:08007295365" className="text-azul underline">0800 729 5365</a> (demais localidades). De Segunda a Domingo: das 8h às 22h, exceto feriados nacionais.</p>,
                    },
                ],
            },
            {
                title: "Liberação para utilização de Cartões Internacionais",
                items: [
                    {
                        question: "A quem se destina?",
                        answer: (
                            <div className="space-y-2">
                                <p>A liberação para utilização de Cartões Internacionais será feita para clientes que atuam nos ramos de hospedagem, locação de automóveis, lojas duty-free, lojas de souvenires, postos de combustível, padarias, farmácias, estacionamentos, bares, restaurantes, academias, parques de diversões, serviços de táxi e casas de show.</p>
                                <p>Com isso, aumenta a aceitação de cartões na sua azulzinha.</p>
                            </div>
                        ),
                    },
                    {
                        question: "Os clientes que atuam nos ramos descritos precisam solicitar a liberação?",
                        answer: "Não. A liberação acontece de forma automática no credenciamento.",
                    },
                    {
                        question: "Para quais tecnologias está disponível?",
                        answer: "A liberação do uso de cartões internacionais está disponível para POS e TEF.",
                    },
                    {
                        question: "Existe alguma cobrança adicional para liberação?",
                        answer: "Não existe cobrança adicional.",
                    },
                    {
                        question: "Cliente que atua em ramo diferente dos descritos, mas que deseja a liberação, como deve proceder?",
                        answer: (
                            <div className="space-y-1">
                                <p>Cliente deve entrar em contato com a nossa central de relacionamento:</p>
                                <p><a href="tel:30035365" className="text-azul underline">3003 5365</a> – Capital e Grande São Paulo</p>
                                <p><a href="tel:08007295365" className="text-azul underline">0800 729 5365</a> – Demais Localidades</p>
                                <p>Segunda a Domingo das 08:00 às 22:00 (exceto feriados).</p>
                                <p>A solicitação será registrada e será submetida para avaliação.</p>
                            </div>
                        ),
                    },
                ],
            },
            {
                title: "Quais são as taxas da azulzinha?",
                items: [
                    {
                        question: "Aluguel mensal",
                        answer: <p>A partir de <strong>R$ 19,90*</strong><br />*Conforme o modelo do equipamento.</p>,
                    },
                    {
                        question: "Débito",
                        answer: <p>A partir de <strong>0,81%</strong></p>,
                    },
                    {
                        question: "Crédito",
                        answer: (
                            <div className="space-y-1">
                                <p>À vista: a partir de <strong>1,27%</strong></p>
                                <p>Parcelado de 2x a 6x: a partir de <strong>1,48%</strong></p>
                                <p>Parcelado de 7x a 12x: a partir de <strong>1,92%</strong></p>
                                <p>Antecipação**: a partir de <strong>1,87%</strong></p>
                                <p><em>**Taxa mensal</em></p>
                                <p className="text-sm text-gray-500">Os valores podem variar de acordo com o perfil do cliente e negociação comercial. Fale com a gente para personalizar a sua oferta!</p>
                            </div>
                        ),
                    },
                ],
            },
            {
                title: "Recebimentos via Pix",
                items: [
                    {
                        question: "O que é uma chave Pix?",
                        answer: "A chave é como um apelido da sua conta. Pode ser utilizado seu CNPJ/CPF, e-mail, número do celular ou chave aleatória. Pessoas Físicas podem ter até 5 chaves cadastradas por conta e a Jurídica até 20 chaves.",
                    },
                    {
                        question: "Para que e por que preciso de uma chave Pix?",
                        answer: "A chave Pix se faz necessária no momento do cadastro, pois é através da chave que é possível realizar transferências e pagamentos via Pix sem precisar compartilhar nenhuma informação pessoal.",
                    },
                    {
                        question: "Como consigo a chave e credenciais Pix para cadastro?",
                        answer: "Acesse o Internet Banking (IB) do seu Banco (PSP) de preferência ou o portal do Desenvolvedor, no menu Pix configure uma chave para utilização com a Parceria da Fiserv.",
                    },
                ],
            },
        ],
    },
];

export default faqData;
