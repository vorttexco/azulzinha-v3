"use client";

import { useState } from "react";

interface FaqItem {
    question: string;
    answer: React.ReactNode;
}

interface FaqSubCategory {
    title: string;
    items: FaqItem[];
}

interface FaqCategory {
    label: string;
    subCategories: FaqSubCategory[];
}

const faqData: FaqCategory[] = [
    {
        label: "Tudo sobre a azulzinha",
        subCategories: [
            {
                title: "Dúvidas sobre a azulzinha",
                items: [
                    {
                        question: "Existe um limite de maquininhas por pedido?",
                        answer:
                            "Sim. No momento do credenciamento a solicitação é de até 05 terminais, podendo posteriormente ser liberado até 30 equipamentos por estabelecimento. Acima de 30 maquininhas, é necessária uma avaliação.",
                    },
                    {
                        question:
                            "Existe a possibilidade de compra da maquininha ou somente aluguel?",
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
                        answer:
                            "Você poderá fazer o acompanhamento da entrega de sua máquina pelo App da azulzinha ou consultar a Central de Relacionamento via atendimento virtual. Ou ainda pelos telefones: 3003 5365 (capitais) e 0800 729 5365 (demais localidades). De segunda a domingo: das 8h às 22h, exceto feriados nacionais.",
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
                        question:
                            "Como devo solicitar a manutenção da maquininha do meu estabelecimento?",
                        answer: (
                            <div className="space-y-2">
                                <p>
                                    Para solicitar a manutenção da sua maquininha, acesse o Portal da azulzinha{" "}
                                    <a
                                        href="https://portal.azulzinhadacaixa.com.br"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-azul underline"
                                    >
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
                        answer:
                            "O primeiro passo é abrir um chamado informando que a máquina está com problemas. Você tem a opção de entrar em contato com a nossa Central de Atendimento/suporte técnico e no mesmo momento o nosso time fará os testes necessários para verificar o que ocorre com a sua máquina e se a substituição será necessária. O chamado também poderá ser aberto pelo App ou Portal da azulzinha e, em ambos os casos, retornaremos à solicitação em até 2 dias úteis.",
                    },
                    {
                        question: "Como funciona a reposição de bobinas?",
                        answer: (
                            <div className="space-y-2">
                                <p>
                                    Basta solicitar a reposição pelo Portal da azulzinha, App da azulzinha, Central de Atendimento ou atendimento virtual.
                                </p>
                                <p>
                                    A azulzinha conta ainda com o envio automático de bobinas que é realizado de 15 em 15 dias. Novos kits serão enviados com base nos itens abaixo:
                                </p>
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
                        answer: (
                            <p>A azulzinha aceita mais de 40 bandeiras nacionais, internacionais, regionais e vouchers.</p>
                        ),
                    },
                    {
                        question:
                            "Quais cartões de estabelecimentos do ramo de alimentação a azulzinha aceita?",
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
                        question:
                            "A azulzinha aceita cartão com tecnologia NFC/ pagamento por aproximação?",
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
                                <a href="/pix-azulzinha" className="text-azul underline">
                                    clique aqui
                                </a>
                                .
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
        subCategories: [],
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

function FaqItemAccordion({ item }: { item: FaqItem }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="rounded-xl overflow-hidden border border-[#F1F1F1] shadow-[0px_4px_10px_0px_#00000014]">
            <button
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(!open)}
            >
                <span className="text-gray-800 text-[18px] font-normal leading-[130%] tracking-normal pr-4">
                    {item.question}
                </span>
                <span
                    className="shrink-0 w-6 h-6 min-w-6 min-h-6 rounded-full flex items-center justify-center bg-azul"
                >
                    {open ? (
                        <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
                            <rect x="0" y="0" width="12" height="2" rx="1" fill="white" />
                        </svg>
                    ) : (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <rect x="0" y="5" width="12" height="2" rx="1" fill="white" />
                            <rect x="5" y="0" width="2" height="12" rx="1" fill="white" />
                        </svg>
                    )}
                </span>
            </button>
            {open && (
                <div className="px-6 pb-4 pt-1 bg-white text-gray-600 text-[14px] font-normal leading-[140%] tracking-normal">
                    {item.answer}
                </div>
            )}
        </div>
    );
}

function SubCategoryAccordion({ sub, defaultOpen = false }: { sub: FaqSubCategory; defaultOpen?: boolean }) {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div>
            <button
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors border border-[#D3D3D3] rounded-xl"
                onClick={() => setOpen(!open)}
            >
                <span className="text-gray-800 text-[18px] font-normal leading-[130%] tracking-normal">
                    {sub.title}
                </span>
                <span
                    className="shrink-0 w-6 h-6 min-w-6 min-h-6 rounded-full flex items-center justify-center bg-azul"
                >
                    {open ? (
                        <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
                            <rect x="0" y="0" width="12" height="2" rx="1" fill="white" />
                        </svg>
                    ) : (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <rect x="0" y="5" width="12" height="2" rx="1" fill="white" />
                            <rect x="5" y="0" width="2" height="12" rx="1" fill="white" />
                        </svg>
                    )}
                </span>
            </button>
            {open && (
                <div className="space-y-3 pt-3 pl-12.5">
                    {sub.items.map((item, i) => (
                        <FaqItemAccordion key={i} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function HelpFaqSection() {
    const [activeCategory, setActiveCategory] = useState(0);
    const [search, setSearch] = useState("");

    const current = faqData[activeCategory];

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h2 className="section-title text-azul text-center mb-8">
                    Dúvidas frequentes
                </h2>

                {/* Search */}
                <div className="flex justify-center mb-10">
                    <div className="flex items-center gap-4 w-full max-w-125">
                        <input
                            type="text"
                            placeholder="O que você procura?"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="flex-1 px-4 py-3 text-gray-600 text-[14px] outline-none bg-white border border-gray-200 rounded-lg shadow-sm"
                        />
                        <button className="shrink-0 text-white font-semibold px-6 py-3 text-[14px] rounded-lg bg-[linear-gradient(177.34deg,#EDAC39_2.43%,#FC8F01_98%)]">
                            Pesquisar
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="md:w-72 shrink-0">
                        <p className="text-gray-700 text-[18px] font-normal leading-[140%] tracking-normal mb-3">Categorias:</p>
                        <ul className="space-y-2">
                            {faqData.map((cat, i) => (
                                <li key={i}>
                                    <button
                                        onClick={() => setActiveCategory(i)}
                                        className={`w-full text-left px-4 py-3 rounded-lg text-[14px] font-normal leading-[140%] tracking-normal transition-colors shadow-[0px_4px_10px_0px_#00000014] ${activeCategory === i
                                            ? "bg-azul text-white"
                                            : "bg-white text-gray-700 hover:bg-gray-50"
                                            }`}
                                    >
                                        {cat.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-azul text-[28px] font-normal leading-[140%] tracking-normal mb-5">
                            {current.label}
                        </h3>

                        {current.subCategories.length > 0 ? (
                            <div className="space-y-3">
                                {current.subCategories.map((sub, i) => (
                                    <SubCategoryAccordion key={i} sub={sub} defaultOpen={i === 0} />
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500 text-[14px]">
                                Conteúdo em breve.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
