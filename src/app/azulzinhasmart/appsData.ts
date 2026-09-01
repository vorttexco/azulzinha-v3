import { CardItem } from "@/components/shared/CategorizedCardsSection";

const appsData: CardItem[] = [
  {
    title: "POS Controle, POS Comanda, PDV Mobi e Comanda Mobi",
    logo: "app-icon-pos-contole.png",
    description:
      "Emissão de NFC-e;\nEmissão de pedido/senha, fichas e ingressos;\nRelatórios de vendas;\nControle de estoque;\nVenda balcão, mesa ou comanda;\nCashback.",
    category: ["Varejo em Geral"],
  },
  {
    title: "PDV POS e Connect TEF",
    logo: "app-icon-maqplan.png",
    description:
      "Emissão de NFC-e, NF-e, NFS-e;\nEmissão de pedido/senha, fichas e ingressos;\nRelatórios de vendas;\nControle de estoque;\nVenda balcão, mesa ou comanda;\nDashboard;\nIntegração com marketplace.",
    category: ["Varejo em Geral"],
  },
  {
    title: "Droid PDV",
    logo: "app-icon-mobility.png",
    description:
      "Turno de usuários;\nLançamento de produtos via grupos ou digitação por código;\nIntegração com leitor de código de barras;\nCadastro de produtos, usuários, alíquotas e grupos;\nEmissão de NFC-e;\nIntegração com software de retaguarda;\nEmissão de relatórios;\nControle de sangrias e suprimentos.",
    category: ["Supermercados", "Varejo em Geral"],
  },
  {
    title: "Veloce Smart",
    logo: "app-icon-veloce.png",
    description:
      "Controle de caixa;\nCatálogo de produtos e serviços;\nDelivery;\nVale/voucher com QR Code para eventos;\nSolução com e-commerce (consulte condições);\nApp para totem Android (consulte condições);\nEmissão de NFC-e e NFS-e.",
    category: ["Varejo em Geral"],
  },
  {
    title: "THR PDV",
    logo: "app-icon-thr.png",
    description:
      "PDV intuitivo;\nPDV flexível itinerante;\nAutoatendimento;\nGestão de pedidos/estoques/produção;\nBilheteria/controle de acesso/catracas;\nGestão financeira.",
    category: ["Varejo em Geral"],
  },
  {
    title: "CISSFly",
    logo: "app-icon-ciss.png",
    description:
      "Emissão de NFC-e e NFS-e;\nEmissão de pedido, senha e fichas;\nRelatórios de vendas;\nGeração de comandas.",
    category: ["Varejo em Geral"],
  },
  {
    title: "SW Totem",
    logo: "app-icon-sw.png",
    description:
      "Integração Omnichannel: Plataforma de delivery completa, incluindo website e aplicativo personalizado, com integração aos principais players de delivery e operadores logísticos;\nCardápio digital, terminais de autoatendimento e painel de senhas;\nControle de estoque;\nRelatórios dinâmicos personalizados;\nEmissão de NFC-e.",
    category: [],
  },
  {
    title: "Arius PDV Mobile",
    logo: "app-icon-aurius.png",
    description:
      "Catálogo de produtos;\nControle de estoque;\nRelatórios de vendas;\nEmissão de NFC-e.",
    category: ["Supermercados", "Varejo em Geral"],
  },
  {
    title: "PDV Legal",
    logo: "app-icon-pdvlegal.png",
    description:
      "Gestão de Vendas: Emissão de NFC-e e integração com meios de pagamento;\nControle de Estoque: Cadastro de produtos, controle de entrada/saída, alertas de estoque mínimo e inventário manual ou por XML;\nGestão Financeira: Consulta de lançamentos em tempo real, gestão de contas a pagar e receber, e movimentação bancária integrada;\nRelatórios: Produtos mais vendidos, análise de vendas por horário, gráficos, relatórios visuais e painel de monitoramento em tempo real;\nGestão de Delivery: Administração de entregas e integração com iFood Service;\nMultilojas: Suporte para múltiplas filiais, redes de lojas/franquias e relatórios detalhados por operação.",
    category: ["Varejo em Geral"],
  },
  {
    title: "Odhen POS",
    logo: "app-icon-odhen.png",
    description:
      "O OdhenPOS é utilizado por garçons, atendentes e operadores, sendo um ponto de venda para agilizar e sofisticar o atendimento de seus clientes;\nAtravés do dispositivo, os garçons realizam todos os pedidos dos clientes, incluindo observações de cada pedido e transmitindo para a cozinha, reduzindo o tráfego dentro do restaurante;\nPossui funcionalidades tais quais: modos mesa, comanda e balcão, possibilidade de emissão de fichas, posição de mesa, cobranças parciais, envio de mensagem para produção, integração com programas de fidelidade, entre outras.",
    category: [],
  },
  {
    title: "Pagzilla",
    logo: "app-icon-pagzilla.png",
    description:
      "Emissão de NFC-e e NF-e;\nCadastro de produtos;\nControle de estoque em tempo real.",
    category: ["Varejo em Geral"],
  },
  {
    title: "Droid PDV",
    logo: "logo-droidpdv.png",
    description:
      "Droid PDV é uma solução de frente de caixa, para lojistas que precisam de uma ferramenta rápida e simples para registrar as suas vendas.\nO Droid PDV possui menus, botões e telas intuitivas para o fluxo de venda.\nConectado a um SAT Fiscal ou configurado para cupom NFCe, o Droid PDV emite cupons fiscais de acordo com a legislação vigente, capturando CPF do cliente e, gerando automaticamente os arquivos da Nota Fiscal Paulista.\n\nTelefone: (11) 97655-1650",
    category: ["Varejo em Geral", "Eventos, Feiras e Shows", "Bar", "Lanchonetes e Restaurantes"],
  },
  {
    title: "VucaPOS",
    logo: "logo-vuca.png",
    description:
      "VucaPOS é uma solução de ponto de venda (PDV) integrada ao ERP Vuca Solution, projetada para simplificar e agilizar as operações de frente de caixa, garantindo uma experiência eficiente para os clientes e uma gestão otimizada para os negócios.\n\nTelefone: (62) 98119-1635\n\nEmail: devs.vucasolution@gmail.com\nEmail: lucas.graciano@vucasolution.com.br",
    category: ["Food Service e Food Truck"],
  },
  {
    title: "Queóps Bares & Restaurantes",
    logo: "logo-queops.png",
    description:
      "Bares & Restaurantes tenha mais controle, mais automação, mais pedidos, mais eficiência e mais integração.\nO sistema Queóps Bares & Restaurantes é desenvolvido para aprimorar a gestão do seu negócio com soluções personalizadas, criadas especialmente para atender às necessidades do seu negócio.\n\nTelefone: (51) 3378-5300\n\nEmail: mpaulo@lexsis.com.br\nEmail: rudi@lexsis.com.br",
    category: ["Food Service e Food Truck", "Postos de Combustível", "Hotéis"],
  },
  {
    title: "zerofila",
    logo: "logo-pipeor.png",
    description:
      "Controle total e pagamentos simplificados: A POS Multiloja com Split de Pagamento que facilita suas vendas e garante a divisão automática de receitas entre as lojas.\n\nTelefone: (54) 99615-0606\n\nEmail: matheus@zerofila.com.br\nEmail: samuel@zerofila.com.br",
    category: ["Food Service e Food Truck", "Eventos, Feiras e Shows"],
  },
  {
    title: "Youzoom",
    logo: "logo-youzoom.png",
    description:
      "App de PDV para venda de ingressos e produtos com emissão de voucher com QR Code! Entre os principais recursos, destacam-se:\n\n- Venda de ingressos físicos e digitais;\n- Venda de fichas de produtos- Venda de produtos com senha para retirada;\n- Venda de créditos cashless;\n- Controle para cobrança de taxa de serviço;\n- Controle de fluxo de caixa;\n- Relatórios de vendas;\n- Histórico de vendas- Cancelamento de vendas com devolução do pagamento.\n\nTelefone: (67) 99142-2440\nTelefone: (67) 98412-8311\n\nEmail: comercial@youzoom.com.br\nEmail: desenvolvimento@youzoom.com.br\nEmail: fabio@youzoom.com.br",
    category: ["Bar", "Eventos, Feiras e Shows", "Food Service e Food Truck"],
  },
  {
    title: "Datamais Garçom",
    logo: "logo-datamais.png",
    description:
      "O App Datamais Garçom é destinado à automação da força de vendas em eventos, bares, restaurantes, cafeterias, pizzarias e similares.\nO App é parte de uma solução para gestão de estabelecimentos comerciais do segmento de refeição fora de casa e entretenimento.\nO App é capaz de imprimir ticket´s ou comandar pedidos para preparação, bem como efetuar a cobrança em cartões e Pix.\n\nTelefone: (47) 99176-2109\n\nEmail: marcelo@datamais.com.br\nEmail: hugoeyng@datamais.com.br",
    category: ["Eventos, Feiras e Shows", "Food Service e Food Truck", "Varejo em Geral"],
  },
  {
    title: "Pixei Pagamentos",
    logo: "logo-pixei.png",
    description:
      "Realize vendas e pedidos, finalize e reserve comandas, integrado ao NooChef - Alimentação, desenvolvido pela Nootech Sistemas.\n\nTelefone: (46) 9918-6986\n\nEmail: flares@nootech.com.br",
    category: ["Bar", "Food Service e Food Truck"],
  },
  {
    title: "Eyemobile",
    logo: "logo-eyemobile.png",
    description:
      "Sistema PDV direcionado para a jornada de venda em estabelecimentos, além do controle de estoque e de caixa. Todas as funcionalidades estão inclusas em um App compatível com as principais POS Digitais do mercado.\nO software é aderente à estabelecimentos que desejam ter agilidade nos atendimentos, reduzir suas filas, ter mobilidade e otimizar a experiência de venda, como, por exemplo, restaurantes, bares, casas noturnas e show e festivais de modo geral.\n\nTelefone: (48) 99698-2609\n\nEmail: fabiano.alvarenga@eyemobile.com.br",
    category: ["Food Service e Food Truck", "Varejo em Geral"],
  },
  {
    title: "Origam",
    logo: "logo-origam.png",
    description:
      "Controle de mesas e comandas para clientes que utilizam o Godino.​\n\nTelefone: (11) 94136-2315\nTelefone: (11) 4712-3935\n\nEmail: je@origam.com.br\nEmail: marco@origam.com.br",
    category: ["Food Service e Food Truck"],
  },
  {
    title: "Vedas Sistemas",
    logo: "logo-vedas.png",
    description:
      "App de com integração com nosso App de garçom, pagamentos avulsos, recebimentos na mesa e pagamento PDV integrado.\n\nTelefone: (66) 98415-7380\n\nEmail: gabrielkothe@gmail.com",
    category: ["Varejo em Geral", "Food Service e Food Truck"],
  },
  {
    title: "Sistema Pallas",
    logo: "logo-pallas.png",
    description:
      "Controle as vendas, estoque e as finanças.\n\nTelefone: (12) 98141-7823\n\nEmail: hugofialho@sistemapallas.com.br",
    category: ["Bar", "Food Service e Food Truck", "Varejo em Geral"],
  },
  {
    title: "EPOC",
    logo: "logo-epoc.png",
    description:
      "O EPOC é um PDV completo para restaurantes, com frente de caixa, gestão de pedidos e controle de vendas e estoque.\nSuporta operações por mesas, comanda, autoatendimento e PDV móvel.\nIntegração com NFC-e, SAT, impressoras e KDS, garantindo eficiência no atendimento.\nFunciona offline para mais segurança e confiabilidade.\n\nTelefone: (11) 3892-8272\nTelefone: tel:+5511996920577\n\nEmail: elisson.osorio@epoc.tech",
    category: ["Bar", "Food Service e Food Truck", "Eventos, Feiras e Shows"],
  },
  {
    title: "Softcom Smart",
    logo: "logo-softcom.png",
    description:
      "O Softcom Smart é a solução ideal para empresas que buscam modernizar e otimizar suas operações.\nCom o Softcom Smart, você pode vender mais, aceitar cartões de crédito e emitir cupons fiscais (NFC-e) com facilidade.\nÉ perfeito para foodtrucks, lanchonetes, cafeterias, quiosques, lojas em shoppings populares, vendas externas e para quem está iniciando na automação. Se é completo, fácil e moderno, então é Softcom.\n\nTelefone: (83) 3133-3600\n\nEmail: pesquisa@softcomtecnologia.com.br\nEmail: lab@softcomtecnologia.com.br",
    category: ["Food Service e Food Truck", "Varejo em Geral"],
  },
  {
    title: "Closmaq",
    logo: "logo-losmaq.png",
    description:
      "Software para gestão de mesa, balcão, entrega, ingressos, fichas e vendas no geral.\n\nTelefone: (32) 98852-5146\n\nEmail: david@closmaq.com.br",
    category: ["Food Service e Food Truck", "Varejo em Geral", "Bar"],
  },
  {
    title: "ONPDV",
    logo: "logo-onpdv.png",
    description:
      "O ONPDV é um sistema de gestão para varejo e food service. Controle estoques, vendas e finanças em tempo real, otimize pedidos e personalize promoções.\nIntegração com PDVs, relatórios detalhados e suporte especializado. Segurança garantida e atualizações constantes para manter seu negócio competitivo.\n\nTelefone: (12) 3152-9360\nTelefone: (12) 99739-5144\n\nEmail: jonathan@mbd.com.br\nEmail: mbd@mbd.com.br",
    category: ["Food Service e Food Truck", "Varejo em Geral"],
  },
  {
    title: "PDV POS",
    logo: "logo-pdvpos.png",
    description:
      "Faça vendas, emita notas fiscais e controle toda a sua empresa, do estoque ao financeiro, tudo online e muito fácil de usar.\n*Vendas | Frente de Caixa (PDV)*\nCom um caixa móvel em sua mão, faça e controle vendas, cadastre clientes, operadores ou vendedores para controle de comissão.\nEmita nota fiscal eletrônica (NFC-e) e nota fiscal de serviços eletrônica (NFS-e) pela própria maquininha, ou seja, tudo em um único lugar.\n\nTelefone: (61) 99271-3302\n\nEmail: ricardo@pdvpos.com.br",
    category: ["Food Service e Food Truck", "Varejo em Geral", "Serviços"],
  },
  {
    title: "EAPOS",
    logo: "logo-easyassist.png",
    description:
      "O EAPOS é um App para dispositivos móveis que veio para revolucionar o atendimento e o controle no segmento de food service, oferecendo funcionalidades como:\n\n- Comandas;\n- Mapa de contas;\n- Pagamentos;\n- Comprovante de venda;\n- Cupom fiscal.\n\nEmail: claudio@easyassist.com.br",
    category: ["Food Service e Food Truck"],
  },
  {
    title: "NCR",
    logo: "logo-ncr.png",
    description:
      "- Sistema para gerenciamento de pedidos e vendas no seu restaurante;\n- Gerenciamento de mesas, fichas, comandas individuais e Fast Food;\n- Lançamento de produtos;\n- Recebimento de contas e emissão de documento fiscal;\n- Função papa-fila;\n- Impressão de pedidos e muito mais.\n\nTelefone: (11) 2167-6755\n\nEmail: flavio.silva@ncrvoyix.com",
    category: ["Food Service e Food Truck", "Bar"],
  },
  {
    title: "Compu Forte Sistemas",
    logo: "logo-compuforte.png",
    description:
      "App para venda de fichas em eventos, bares e restaurantes.\n*Lembrando que para rodar o App precisa do retaguarda da Compu Forte Sistemas.\n\nTelefone: (31) 99201-1599\nTelefone: (31) 2555-6970\n\nEmail: gustavohpr@gmail.com",
    category: ["Food Service e Food Truck", "Eventos, Feiras e Shows", "Bar"],
  },
  {
    title: "Brajan Sistemas",
    logo: "logo-brajan.png",
    description:
      "App para atendimento de restaurante com controle de mesa e loja em geral.\n\nTelefone: (27) 3383-7100\n\nEmail: rodrigozr@brajan.com.br",
    category: ["Food Service e Food Truck", "Varejo em Geral"],
  },
  {
    title: "Bitbyte",
    logo: "logo-bitbyte.png",
    description:
      "A receita para o crescimento do seu negócio! Agilize o atendimento de seus clientes, reduza custos, evite desperdícios, melhore a lucratividade do seu negócio e automatize a apuração de informações estratégicas.\n\nTelefone: (11) 94177-4424\n\nEmail: seliu@bitbyte.com.br",
    category: ["Food Service e Food Truck", "Eventos, Feiras e Shows"],
  },
  {
    title: "Prioriza",
    logo: "logo-prioriza.png",
    description:
      "App de restaurantes / evento, para auxiliar na venda de itens e impressão de ticket, contando com um meio de pagamento direto.\n\nTelefone: (51) 3500-7287\nTelefone: (51) 99318-1184\n\nEmail: erp@priorizatec.com.br",
    category: ["Bar", "Varejo em Geral", "Lanchonetes e Restaurantes"],
  },
  {
    title: "Tacto Sistemas",
    logo: "logo-tacto.png",
    description:
      "Módulo de venda mais completo do mercado, utilizado para atender bares, restaurantes, sorveterias, lanchonetes e até boates.\nExistem várias maneiras de trabalhar a venda neste módulo, Venda Balcão, Mesa, Cartão de consumação e tele-entrega. As telas são intuitivas de modo que qualquer um possa operar:\n\n- Relatórios Gerenciais;\n- Controle de comissão;\n- Lucratividade, Auditoria, etc.\n\nLembrando que este módulo é totalmente integrado com o financeiro e estoque. Controle de convênio para restaurantes.\nOutras vantagens:\n\n- Lançamento através de tela Touch e Tablets.\n\nTelefone: (65) 98113-1905\n\nEmail: evandro@tacto.com.br",
    category: ["Food Service e Food Truck", "Bar", "Eventos, Feiras e Shows"],
  },
  {
    title: "PSinf Pay",
    logo: "logo-infosolucoes.png",
    description:
      "O PSinf Pay é uma solução que visa a integração dos meios de pagamento TEF com o sistema ERP da PSInf, proporcionando a automação dos processos de pagamento, com vinculação aos documentos fiscais.\nEssa integração é especialmente relevante para atender às novas normativas governamentais, que tornam obrigatório o vínculo do comprovante de pagamento na NFC-e (Nota Fiscal de Consumidor Eletrônica).\n\nTelefone: (51) 99995-7147\n\nEmail: paulo@psinf.com.br",
    category: ["Indústrias", "Varejo em Geral", "Lanchonetes e Restaurantes"],
  },
  {
    title: "Idez",
    logo: "logo-idez.png",
    description:
      "Somos uma plataforma de soluções financeiras B2B para você plugar ao seu negócio e gerar novas fontes de receita.\n\n- Integração com PDV;\n- Emissão e impressão de NFC-e;\n- Fluxo de venda e pagamento.\n\nTelefone: (51) 98414-1318\n\nEmail: analise@idezsistemas.com.br",
    category: ["Lanchonetes e Restaurantes", "Varejo em Geral", "Bar", "Comércio", "Serviços"],
  },
  {
    title: "MobPay",
    logo: "logo-raffinato.png",
    description:
      "O App MobPay permite efetuar o pagamento de contas geradas no Raffinato, tanto pedidos realizados no App Raffinato Mobile (Garçom), como no PDV desktop.\nEste App funciona de forma integrada ao Raffinato Gestor e depende da contratação do Gestor para o seu funcionamento.\nAlém do pagamento é possível realizar a emissão do documento fiscal (CF-e ou NFC-e) e imprimir o comprovante (DANFE).\n\nTelefone: (49) 98429-1148\n\nEmail: analise@raffinato.inf.br",
    category: ["Lanchonetes e Restaurantes", "Bar", "Padarias"],
  },
  {
    title: "Chef Mio",
    logo: "logo-chefmio.png",
    description:
      "Atendimento presencial rápido e eficiente com App de garçom, cardápio digital para mesas através de QR Code, sistema de caixa rápido, mesas e comandas individuais.\nAutomatize o atendimento de delivery e potencialize suas vendas: Pedidos delivery por telefone, cardápio digital sem taxas de comissão e integração com WhatsApp.\nGestão completa: Controle de caixa, financeiro e estoque além de módulo fiscal.\n\nTelefone: (28) 99992-1882\n\nEmail: renan@chefmio.com.br",
    category: ["Food Service e Food Truck"],
  },
  {
    title: "Uniplus",
    logo: "logo-uniplus.png",
    description:
      "O sistema Uniplus possui funcionalidades e integrações específicas para o segmento Food Service, feitas especialmente para agilizar o dia a dia do seu cliente.\nCom o Uniplus é possível atender de forma completa todos os tamanhos de negócios, desde pequenas lanchonetes a grandes restaurantes.\n\nTelefone: (47) 99612-6905\n\nEmail: whillian.pereira@intelidata.inf.br",
    category: ["Varejo em Geral", "Food Service e Food Truck"],
  },
  {
    title: "Bar Fácil",
    logo: "logo-barfacil.png",
    description:
      "O Bar Fácil é um App voltado para bares e eventos que atua como uma solução de ponto de venda (POS) Android, facilitando o gerenciamento de transações e operações de vendas.\n\nTelefone: (48) 99813-0006\n\nEmail: luan.correa@agpsolucoes.com.br",
    category: ["Bar", "Eventos, Feiras e Shows"],
  },
  {
    title: "Puma Sistemas",
    logo: "logo-puma.webp",
    description:
      "O Módulo PDV é recomendado para lojas e diversos tipos de comércio que costumam lidar com um grande fluxo diário de clientes e precisam, necessariamente, realizar uma venda rápida e ágil. Em instantes você registra quais foram os produtos e/ou serviços vendidos e a forma de pagamento que o cliente deseja utilizar.\nTodas as operações realizadas no Módulo PDV são integradas com outras áreas de sua empresa, desta forma, a gestão do seu negócio será otimizada e você poderá ter um controle completo das atividades de sua empresa.\nAlém disso, você poderá instalar em quantos computadores quiser, lembrando que o Módulo PDV também funciona em modo offline, ou seja, não depende de internet durante o uso, você poderá continuar vendendo normalmente, deixando os documentos fiscais para serem transmitidos após o restabelecimento da internet.\nO Módulo PDV é uma ferramenta completa para a automação da rotina de vendas do comércio e de prestadores de serviços. Permite integração com PAF-ECF, TEF, SAT, balanças eletrônicas, impressoras fiscais, terminal de consulta de preço, emissão de carnê, cupom fiscal, NF-e e NFC-e, controle de orçamentos, comissões, estatísticas de venda e rentabilidade, relatórios e gráficos.\n\nTelefone: (65) 99981-1334\n\nEmail: temi@pumasistemas.com.br",
    category: ["Bar", "Serviços", "Comércio", "Lanchonetes e Restaurantes"],
  },
  {
    title: "Smart POS",
    logo: "logo-netpos.png",
    description:
      "O Smart POS da NetPOS é um App para varejo geral que permite uma gestão integrada dos PDVs com controle de estoque e vendas.\n\nTelefone: (11) 2391-7028\n\nEmail: comercial@smartpos.net.br",
    category: ["Varejo em Geral", "Bar", "Food Service e Food Truck", "Lanchonetes e Restaurantes"],
  },
  {
    title: "Apliper Pagoo",
    logo: "logo-apliper.png",
    description:
      "O Apliper Pagoo é um App para capturar o pagamento emitido pela automação desktop.\nAo emitir uma NFC-e, o PDV gera uma requisição de pagamento e o App recebe esta requisição, processa o pagamento e retorna para o PDV (aprovada ou negada).\nAssim, o foco do App é atender as empresas que necessitam se adequar à legislação (obrigatoriedade de vincular o pagamento via cartão à NFC-e), além de novos clientes prospectados.\n\nTelefone: (54) 98129-1616",
    category: [
      "Lojas de Confecção, Calçados e Vestuário",
      "Materiais de Construção",
      "Ferragem",
      "Lanchonetes e Restaurantes",
      "Auto Elétricas, Auto Peças e Mecânicas",
    ],
  },
  {
    title: "BitBar Android",
    logo: "logo-bitbar.png",
    description:
      "O BitBar é focado no ramo de bares e restaurantes desde sua origem. Todo desenvolvimento, esforços e pensamentos são exclusivamente voltados para soluções dentro do setor. Como resultado, temos um software extremamente específico, fácil de utilizar, rápido e que entrega exatamente o que o nosso cliente precisa.\n\nTelefone: (51) 99400-7054\n\nEmail: felipe@bitbar.com.br",
    category: ["Varejo em Geral", "Lanchonetes e Restaurantes"],
  },
  {
    title: "CISS",
    logo: "logo-ciss.png",
    description:
      "Com o App CISS é possível consultar informações sobre os produtos, emitir pedidos, gerar comandas, finalizar a venda e imprimir o documento fiscal de qualquer lugar da loja, ou até mesmo fora dela.\n\nTelefone: (46) 99127-4596",
    category: [
      "Food Service e Food Truck",
      "Materiais de Construção",
      "Supermercados",
      "Varejo em Geral",
    ],
  },
  {
    title: "DigiSat",
    logo: "logo-digisat.png",
    description:
      "O App PDV Mobile 2.0 permite registrar vendas de produtos para consumidor final, com emissão de NFC-e, CF-e SAT ou Registro de Venda para empresas MEI.\n\nTelefone: (49) 99922-7119",
    category: [
      "Lanchonetes e Restaurantes",
      "Postos de Combustível",
      "Hotéis",
      "Lojas de Conveniência",
    ],
  },
  {
    title: "Fire Sistemas",
    logo: "logo-firesistemas.png",
    description:
      "O App Fire Vendas proporciona agilidade e eficiência para Restaurantes. Os garçons podem abrir mesas, lançar pedidos, solicitar contas e emitir cupons fiscais diretamente de seus dispositivos móveis.\n\nTelefone: (65) 3223-2000\nTelefone: (65) 99989-1555",
    category: ["Lanchonetes e Restaurantes", "Bar"],
  },
  {
    title: "Master Key Smart PDV",
    logo: "logo-masterkeyfull.png",
    description:
      "A solução Smart PDV Master Key transforma seu terminal em um PDV móvel.\nO Smart PDV Master Key facilita a operação e reduz custos operacionais pois substitui o PDV convencional.\nEmite NFC-e, e possui um sistema de retaguarda em nuvem para gestão de vendas e controle em diversos dispositivos.\nPrincipais recursos:\n\n- Cadastro de produtos;\n- Controle de vendas;\n- NFC-e;\n- Fichas;\n- Senhas e dashboards para gestão de vendas.\n\nTelefone: (27) 3062-5275",
    category: [
      "Food Service e Food Truck",
      "Lanchonetes e Restaurantes",
      "Sorveterias",
      "Distribuidores de Produtos",
      "Eventos, Feiras e Shows",
    ],
  },
  {
    title: "Mobility",
    logo: "logo-mobility.jpg",
    description:
      "A solução da Mobility é para a frente de caixa. Ideal para lojistas que precisam de uma ferramenta rápida e simples para registrar as suas vendas.\nO software da Mobility, conhecido como &#34;Droid PDV&#34; possui menus, botões e telas intuitivas para o fluxo de venda.\nCom o App da Mobility, o eu negócio estará conectado a um SAT Fiscal (Sistema Autenticador e Transmissor de Cupons Fiscais Eletrônicos) podendo emitir cupons fiscais de acordo com a legislação vigente.\n\nTelefone: (11) 97655-1650",
    category: ["Lanchonetes e Restaurantes", "Bar", "Varejo em Geral", "Eventos, Feiras e Shows"],
  },
  {
    title: "Mobi PDV e Mobi Comanda",
    logo: "logo-pdvmobi-comandamobi.png",
    description:
      "Mobi PDV e Mobi Comanda, são pontos de venda móvel que facilita sua operação e reduz custos.\nDispensa todos os equipamentos do seu ponto de venda, emite Fichas, Pedidos ou NFC-e. Gera relatórios e gráficos online das suas vendas. A solução ideal para sua loja.\n\nTelefone: (11) 4858-9558\nTelefone: (71) 3599-0958",
    category: ["Lanchonetes e Restaurantes", "Bar", "Varejo em Geral", "Eventos, Feiras e Shows"],
  },
  {
    title: "mPm+",
    logo: "logo-mpm.png",
    description:
      "O App mPm+ é uma ferramenta de vendas móveis que permite:\n\n- Gerenciar vendas;\n- Emitir NFC-e (Nota Fiscal do Consumidor Eletrônica);\n- Gerar Pix (sistema de pagamento instantâneo);\n- Fazer transações com cartões de débito e crédito, além de oferecer uma variedade de outras funcionalidades para facilitar o processo de vendas.\n\nTelefone: (87) 99988-2627\n\nEmail: adriano@bravilsistemas.com",
    category: ["Varejo em Geral", "Food Service e Food Truck"],
  },
  {
    title: "MR PDV",
    logo: "logo-rpinfo.png",
    description:
      "O App MR PDV, da RP Info, é um sistema robusto e confiável, para registro de vendas no seu PDV.\nCom ele, é possível gerenciar de forma centralizada todos os caixas e ECFs de lojas individuais ou redes, além de integrar promoções, pack virtual e módulo “atacarejo”.\n\nTelefone: (46) 3226-8000\nTelefone: (41) 99781-9422",
    category: ["Food Service e Food Truck", "Varejo em Geral", "Postos de Combustível"],
  },
  {
    title: "PagZilla",
    logo: "logo-pagzilla.png",
    description:
      "Com o Pagzilla você passa o cartão e imediatamente emite sua NFC-e. Integre o pagamento com o cartão de débito ou crédito com seu dispositivo junto ao SAT (Sistema Autenticador e Transmissor de Cupons Fiscais Eletrônicos).\nTenha o controle da entrada e saída de produtos do seu estabelecimento em tempo real. A experiência de compra de seus clientes torna-se mais fluída, gerando satisfação e maior fluxo no seu estabelecimento.\n\nTelefone: (51) 99533-6398",
    category: ["Lanchonetes e Restaurantes", "Bar", "Varejo em Geral"],
  },
  {
    title: "PDV Legal",
    logo: "logo-pdvlegal.png",
    description:
      "O PDV Legal é o sistema de vendas ideal para você que busca agilidade e facilidade no seu processo de vendas.\nCom telas de fácil navegação você pode emitir documentos fiscais, controlar seu estoque e gerenciar todas as suas vendas utilizando apenas a sua maquininha.\nEssa é a solução ideal para acelerar as vendas do seu negócio, seja um restaurante, lanchonete, food truck, sorveteria, quiosque ou uma loja de conveniência.\nCom tudo centralizado na sua maquininha, sua equipe ganha mais agilidade no atendimento e seu comércio se torna mais lucrativo.\nAlém da aplicação que irá rodar na sua maquininha, o PDV Legal também possui uma retaguarda, este será o portal onde você irá consultar todos os relatórios de vendas, produtos mais vendidos, vendas por horário, controlar comissão de garçom e muito mais!\n\nTelefone: (19) 99131- 6371\n\nEmail: luis.garbelini@tabletcloud.com.br\nEmail: rogerio@tabletcloud.com.br",
    category: ["Varejo em Geral", "Food Service e Food Truck"],
  },
  {
    title: "PDV Team17",
    logo: "logo-team17.png",
    description:
      "O App PDV Team17 possui um sistema completo com as seguintes funcionalidades: ERP, PDV Frente de caixa, emissor de tickets, cashless, caixa móvel, emissor NFCe.\n\nTelefone: (41) 99185-5876",
    category: ["Lanchonetes e Restaurantes", "Bar", "Varejo em Geral", "Eventos, Feiras e Shows"],
  },
  {
    title: "POS Controle",
    logo: "logo-poscontrole.png",
    description:
      "O POS Controle é um PDV móvel que facilita a sua operação e reduz custos. Dispensa todos os equipamentos do seu ponto de venda, emite fichas, pedidos ou NFC-e.\nAlém disso, gera relatórios e gráficos online das suas vendas, sendo a solução ideal para seu estabelecimento.\n\nTelefone: (11) 4858-9558\nTelefone: (71) 3599-0958\n\nEmail: comercial@poscontrole.com.br",
    category: [
      "Bar",
      "Varejo em Geral",
      "Eventos, Feiras e Shows",
      "Food Service e Food Truck",
      "Lanchonetes e Restaurantes",
    ],
  },
  {
    title: "PrátikaPDV",
    logo: "logo-pratika.png",
    description:
      "O PrátikaPDV é um App/Aplicação de gerenciamento de vendas que funciona diretamente no smartphone, SmartPOS ou computador (PC), permitindo que vários ramos possam utilizar a aplicação.\nPrincipais funcionalidades:\n\n- Emissão de Notas Fiscais e Cupons Fiscais;\n- Cadastro de clientes e produtos;\n- Contas a pagar e receber;\n- Gerenciamento de vendas;\n- Fechamento de Caixa;\n- Versão para Auto Atendimento com TEF;\n- Versão para Evento com emissão de Fichas ou Vouchers;\n- Comandas;\n- Delivery.\n\nTelefone: (49) 99922-7119",
    category: [
      "Eventos, Feiras e Shows",
      "Sorveterias",
      "Varejo em Geral",
      "Bar",
      "Food Service e Food Truck",
      "Lanchonetes e Restaurantes",
      "Distribuidores de Produtos",
    ],
  },
  {
    title: "Softplus",
    logo: "logo-softplus.png",
    description:
      "O App Softplus é um Ponto de Venda para Postos de combustível, Atende a venda (abastecimentos) por meio de uma solução completa com pagamento em dinheiro, cartão, Pix e venda a prazo:\n\n- O App é integrado com os sistemas da Softplus;\n- Emite NFC-e na impressora da SmarPOS;\n- Possui seleção e controle de caixa, clientes veículos;\n- Envio de e-mail com os dados da nota;\n- Descontos nos itens e muito mais.\n\nTelefone: (51) 3041-2131\nTelefone: (51) 3041-0115",
    category: [
      "Postos de Combustível",
      "Lojas de Conveniência",
      "Comércio",
      "Lanchonetes e Restaurantes",
      "Bar",
    ],
  },
  {
    title: "SISMOV2B",
    description:
      "- Vendas de produtos e serviços em Feiras e Eventos, da bilheteria à gastronomia;\n- Realização do cadastro on-line dos produtos e serviços por atividades e segmentos;\n- Gestão financeira e estoque em tempo real;\n- Relatório de prestação de contas;\n- Suporte;\n- Aplicação imediata\n- Contate-nos para agendamento e maiores informações.\n\nTelefone: (55) 99622-4681\n\nEmail: eltonjosespohr@gmail.com",
    category: ["Eventos, Feiras e Shows"],
  },
  {
    title: "SOS Soluções",
    logo: "logo-sos.png",
    description:
      "O NextMobile é o App complementar aos ERP Next360 que contemplas no App as funcões integradas com TEF:\n\n- FastFicha - Emissão de Fichas Pré-Pagas para consumo em eventos;\n- Força de Vendas - Vendas de produtos;\n- Controle de Mesas - Módulo de Lançamento e Fechamento de Comandas;\n- PapaFila - Baixa de Abastecimento diretamente pelo aplicativo com recebimentos em TEF.\n\nTelefone: (43) 99112-8068\n\nEmail: anderson@sossolucoes.com.br",
    category: [
      "Eventos, Feiras e Shows",
      "Postos de Combustível",
      "Lanchonetes e Restaurantes",
      "Bar",
      "Materiais de Construção",
    ],
  },
  {
    title: "WebyAPP",
    logo: "logo-webyapp.png",
    description:
      "O WebyAPP é a solução para pontos de venda com emissão de NFC-e, faz emissão e controle de acesso de ingressos com QR Code e emissão de tickets para eventos.\n\nTelefone: (47) 99756-1501\n\nEmail: maicon@testosistemas.com.br",
    category: ["Ingressos", "Varejo em Geral"],
  },
  {
    title: "Santa Ficha",
    logo: "logo-santaficha.png",
    description:
      "Sistema de gestão para emissão de fichas e cartão de consumo para eventos.\n\nTelefone: (19) 97168-9943\n\nEmail: rafael@santaficha.com.br\nEmail: rafaellima@abcsinformatica.com.br",
    category: ["Eventos, Feiras e Shows"],
  },
  {
    title: "SG Pay",
    logo: "logo-sgbr.png",
    description:
      "O SG Pay é uma solução de pagamentos que possibilita a realização do processo de pagamento de forma integrada com sistema SG Master.\n\nTelefone: (49) 98890-9021\n\nEmail: matteo_vanzo@hotmail.com",
    category: ["Eventos, Feiras e Shows"],
  },
  {
    title: "APOS Skytef",
    logo: "logo-skytef.png",
    description:
      "O APOS Skytef é um navegador Web para POS que realiza vendas por meio de diversas formas de pagamento.\nCom o APOS Skytef você pode customizar sua solução de pagamento (logomarca, cores, mensagens, etc.).\nA solução possui uma versão Multi PV (múltiplos pontos de venda) para clientes que necessitam cobrar valores em vários estabelecimentos (MultiEC), creditando suas vendas para cada um dos estabelecimentos cadastrados, cada qual em sua conta. Tudo isso em uma única maquininha!\n\nTelefone: (11) 2175-9500\nTelefone: (11) 4550-1450",
    category: [
      "Transporte",
      "Estacionamentos",
      "Gestão de Pedidos",
      "Pedágio",
      "Postos de Combustível",
      "Fidelidade e Convênios",
      "Eventos, Feiras e Shows",
      "Venda de Seguros",
      "Ingressos",
    ],
  },
  {
    title: "Lion Pay",
    logo: "logo-lion.png",
    description:
      "O Lion Pay é uma solução de automação comercial desenvolvida para atender às necessidades do comércio no estado de Mato Grosso.\nCom ele, você pode gerenciar vendas e operações de forma integrada, otimizando processos e garantindo eficiência no atendimento, tudo adaptado às demandas locais e às particularidades do mercado regional.\n\nTelefone: (66) 99639-8290\n\nEmail: joabe@liontecnologia.com.br",
    category: ["Varejo em Geral"],
  },
  {
    title: "Gdoor Zucchetti",
    logo: "logo-gdoor.png",
    description:
      "O PDV Móvel é um App que visa mobilidade e permite a emissão de NFC-e através do seu dispositivo mobile.\nEle se conecta diretamente ao sistema retaguarda (necessário para funcionamento) e sincroniza as vendas emitidas instantaneamente.\nCom esse sistema você consegue:\n\n- Emitir NFC-e;\n- Pagar via integração com o ZPOS;\n- Selecionar e cadastrar clientes;\n- Visualizar a listagem das vendas feitas pelo dispositivo;\n- Aplicar descontos nos itens e no total;\n- Ler de código de barras do produto pela câmera do dispositivo;\n- Trabalhar com produto pesado.\n\nObs: É necessário o uso de um sistema retaguarda da Gdoor Zucchetti para o funcionamento do App.\n\nTelefone: (49) 99992-2766\n\nEmail: luis.lima@gdoor.com.br",
    category: ["Varejo em Geral"],
  },
  {
    title: "ErgonPDV",
    logo: "logo-ergon.png",
    description:
      "App desenvolvido para auxiliar as equipes de vendas de um comércio ou distribuidora melhorar a sua eficiência e aumentar a produtividade, permite aos vendedores realizar orçamentos, pedidos e recebimento diretamente da SmartPOS.\n\nTelefone: (11) 93297-9032\n\nEmail: elbes@ergontech.com.br\nEmail: william@ergontech.com.br\nEmail: adevaldo@ergontech.com.br",
    category: ["Varejo em Geral"],
  },
  {
    title: "THR Softwares",
    logo: "logo-thr.png",
    description:
      "App voltado para vendas de produtos e ingressos em parques aquáticos.\n\nTelefone: (15) 99846-7209\n\nEmail: joaoshinkai@thrsolucoes.com.br",
    category: ["Varejo em Geral"],
  },
  {
    title: "DribionPay",
    logo: "logo-dribion.png",
    description:
      "App totalmente integrado com nosso sistema para impulsionar vendas.\n\nTelefone: (43) 99126-9471\nTelefone: (43) 3524-3344\n\nEmail: bruno@dribion.com\nEmail: marco.antonio@dribion.com",
    category: ["Varejo em Geral", "Atacado"],
  },
  {
    title: "Relt Informática",
    logo: "logo-relt.png",
    description:
      "App de força de vendas e emissor de notas fiscais do ERP SiG.\n\nTelefone: (51) 98448-9100\n\nEmail: relt@relt.com.br",
    category: ["Varejo em Geral", "Atacado"],
  },
  {
    title: "Infosoft",
    logo: "logo-infosoft.png",
    description:
      "O infosoft - ipay é um App que permite o recebimento de valores via cartão de crédito, débito ou Pix.\nClientes que utilizam os produtos infosoft como imedic, ijury, ilife ou icommerce podem usufruir desta facilidade o que deixa o processo de vendas integrado e mais seguro.\n\nTelefone: (51) 98182-4661",
    category: ["Varejo em Geral", "Indústrias", "Saúde", "Direito"],
  },
  {
    title: "Datanis Sistemas",
    logo: "logo-datanis.png",
    description:
      "Apps para gerenciamento de vendas externas, controle de estoque, Smart POS (Terminal TEF integrado ao sistema).\n\nTelefone: (49) 99960-6336",
    category: ["Varejo em Geral"],
  },
  {
    title: "Windel POS",
    logo: "logo-windel.png",
    description:
      "O Windel POS é um App integrado ao sistema Windel que facilita o processamento de pagamentos de vendas em estabelecimentos comerciais.\nResponsável pela comunicação direta entre a Windel e a Fiserv.\n\nTelefone: (54) 3025-2540\n\nEmail: adilson@windel.com.br",
    category: ["Varejo em Geral"],
  },
  {
    title: "easy",
    logo: "logo-easy.png",
    description:
      "Facilite suas transações comerciais com o EASY, o App de integração de TEF que garante segurança, agilidade e eficiência nas suas operações de pagamento eletrônico.\nCom ele você terá integração com os módulos de venda dos sistemas Easy Cloud e Easy 3.\n\nTelefone: (51) 99186-9950\n\nEmail: rafael@3rsistemas.com.br",
    category: ["Comércio"],
  },
  {
    title: "Sismec",
    logo: "logo-sismec.jpg",
    description:
      "App para automação de cobranças realizadas através do Sismec Mobile.\nTenha total controle das receitas e despesas de sua empresa, além de muitas outras ferramentas desenvolvidas para organizar e descomplicar o seu dia-a-dia.\n\nTelefone: (54) 99112-3844\n\nEmail: marcus@sismec.com.br",
    category: ["Comércio"],
  },
  {
    title: "ElPay",
    logo: "logo-elpay.png",
    description:
      "Projetado para tornar o processo de receber pagamentos uma experiência sem complicações, o App ELPay oferece uma interface intuitiva e fácil de usar.\nDesenvolvido para máquinas de cartões Android, você pode aceitar pagamentos com cartões de crédito, débito e Pix de forma rápida e segura.\nCom uma integração rápida e simples, o ELPay garante uma experiência de transação fluida, com menor custo.\nTransforme sua operação de caixa com o ELPay. Simplifique o processo de pagamentos para você e seus clientes.\nNão deixe de experimentar a conveniência e economia que o ELPay oferece. Baixe agora e simplifique suas transações no caixa!\n\nTelefone: (54) 99971-2433\nTelefone: (54) 3364-1588\n\nEmail: vendas@elinfo.com.br",
    category: ["Varejo em Geral"],
  },
  {
    title: "Alpino",
    logo: "logo-alpino.png",
    description:
      "O Alpino Smart é uma solução completa oferecida pela Alpino Comércio de Hardware e Serviços LTDA para auxiliar pequenas e médias empresas na emissão de NFC-e (Nota Fiscal de Consumidor Eletrônica).\nCom total conformidade com as normativas vigentes, o Alpino Smart já realiza a vinculação obrigatória do comprovante de pagamento à NFC-e.\nAlém disso, oferecemos uma solução pronta para uso, com todos os produtos já cadastrados, e proporcionamos suporte multi-canais 24 horas, todos os dias da semana.\nVocê também terá acesso a um ambiente web completo, onde poderá visualizar todas as notas emitidas.\n\nTelefone: (54) 98116-5431\n\nEmail: fabio@alpinotecnologia.com.br",
    category: ["Varejo em Geral"],
  },
  {
    title: "Arpag",
    logo: "logo-arpag.png",
    description:
      "Você sofre com erros de digitação na hora da venda e acabaperdendo dinheiro? Precisa de mais agilidade nos pagamentos recebidos via Pix? E o seu TEF, está ficando pesado no bolso?\nA Arpa já tem uma solução para essas e outras situações do seu negócio - conheça o App Arpag, o integrador de PDV e SMART POS que facilita sua rotina, garante cobranças corretas e te deixa dentro das normas fiscais!\n\nTelefone: (49) 99960-6336",
    category: ["Varejo em Geral"],
  },
  {
    title: "CH Sistemas",
    logo: "logo-chsistemas.png",
    description:
      "Simplifique as suas operações de vendas:\n\n- Emissão de documentos fiscais;\n- TEF (Transferência Eletrônica de Fundos);\n- Controle de abertura e fechamento de caixa;\n- Pix (QR Code): receba pagamentos diretamente no App, eliminando a necessidade de conferir o extrato bancário para confirmar as transações.\n\nSimples, prático e ágil, com uma interface amigável!\n\nTelefone: (49) 98847-0587\nTelefone: (49) 99975-3863\n\nEmail: desenvolvimento@chsistemas.com.br\nEmail: comercial@chsistemas.com.br",
    category: ["Varejo em Geral"],
  },
  {
    title: "Código UP",
    logo: "logo-codigoup.png",
    description:
      "O Código UP é uma ferramenta completa com vários módulos, sendo eles:\n\n- Cadastro Completo de Produtos;\n- Controle Completo de Estoque;\n- Emissão de NF-e, NFC-e, MDF-e, CT-e;\n- Controle de Ordens de Serviço com emissão\nde NF-e dos produtos e NFS-e dos serviços;\n- Controle financeiro completo;\n- Controle de Boletos;\n- E muito mais.\n\nTelefone: (32) 98803-0537",
    category: ["Varejo em Geral"],
  },
  {
    title: "Compumate Pay",
    logo: "logo-compumate.png",
    description:
      "O sistema Compumate Pay é uma ferramenta que ajuda na realização das vendas com simplicidade e agilidade, tendo tudo na máquina de cartão.\nA POS Smart é uma maquininha que realizará a transação eletrônica com os cartões e no mesmo equipamento sairá a impressão do Cupom Fiscal (NFC-e) junto com o comprovante de pagamento.\nEssa tecnologia que avançou dentro do conceito de ponto de venda contribui para o seu negócio de diversas maneiras.\n\nTelefone: (51) 98608-0294\n\nEmail: fernando@compumate.com.br\nEmail: ricardo@compumate.com.br",
    category: ["Varejo em Geral"],
  },
  {
    title: "JF System",
    logo: "logo-jfsystem.png",
    description:
      "App de integração com softwares do Grupo JF System.\n\nTelefone: (53) 99995-4466\n\nEmail: juliana@jfsystem.com.br",
    category: ["Varejo em Geral", "Supermercados"],
  },
  {
    title: "Master Key",
    logo: "logo-masterkeyfull.png",
    description:
      "Master Key Smart TEF é uma solução que trabalha de forma Integrada ao Master Key, sistema de gestão e automação comercial. Foi desenvolvido para potencializar a gestão e o resultado das empresas de forma simples e segura.\nO Master Key é um sistema completo que permite realizar vendas, controlar estoque, financeiro, lucratividade, fazer a emissão de boletos, Notas Fiscais, NECe/SAT e etc. Principais Recursos: Controle de Vendas, Emissão de Notas Fiscais, NFC-e/SAT se adequando a legislação do TEF. Homologado em todos os estados do Brasil.\n\nTelefone: (51) 3748-1792\nTelefone: (51) 98281-5151",
    category: [
      "Supermercados",
      "Lojas de Confecção, Calçados e Vestuário",
      "Materiais de Construção",
      "Auto Elétricas, Auto Peças e Mecânicas",
      "Varejo em Geral",
    ],
  },
  {
    title: "MC SISTEMAS",
    logo: "logo-mcsistemas.png",
    description:
      "O MC Pag é um App que integra de forma rápida e fácil o PDV com seu SmartPOS.\nUma solução que integra as vendas do PDV com o SmartPOS gerando maior segurança para o operador de caixa e garantindo o cumprimento da instrução normativa 108/2022 do estado do Rio Grande do Sul e em conformidade com a decreto 56.670.\nUma solução completa para estabelecimentos menores.\nPrincipais recursos:\n\n- Pagamentos via crédito, débito e Pix;\n- Vinculação dos meios de pagamentos com a NFC-e.\n\nTelefone: (51) 3671-6121",
    category: ["Varejo em Geral", "Supermercados", "Auto Elétricas, Auto Peças e Mecânicas"],
  },
  {
    title: "SousaVenda",
    logo: "logo-sousavendas.png",
    description:
      "O App SousaVenda é desenvolvido para as diferentes empresas do ramo do comércio com faturamento até R$ 50 mil reais por mês.\n\nTelefone: (18) 99148-8082",
    category: ["Varejo em Geral"],
  },
  {
    title: "Trade System",
    logo: "logo-tradesystem.png",
    description:
      "O App Trade System tem os seguintes objetivos:\n\n- Gerir lojas de diferentes setores, dentro das especificidades de cada segmento;\n- Aumentar a competitividade empresarial com foco no aumento na rentabilidade do seu negócio;\n- Auxiliar por meio de ferramentas na melhor utilização dos recursos financeiros;\n- Identificar necessidades e inovações no varejo e propor soluções objetivando a prosperidade do negócio;\n- Administrar recursos visando à continuidade financeira saudável do seu negócio;\n- Criar e aplicar estratégias com o objetivo de realizar maior venda e de conquistar a fidelização junto aos seus clientes;\n- Dar a segurança fiscal e contábil em face aos novos desafios dessas áreas mantendo sempre informados as novas legislações;\n- Gerenciar a equipe de modo a gerar satisfação dos colaboradores e clientes.\n\nTelefone: (53) 99971-4418\n\nEmail: tradesystem@tradesystem.com.br",
    category: ["Varejo em Geral"],
  },
  {
    title: "WebPosto",
    logo: "logo-webposto.png",
    description:
      "O webPosto Pay é um App focado no setor de postos de combustível. Integrado às bombas de abastecimento, permite ao frentista realizar a venda, receber nas diversas formas de pagamento (cartão, QR Code, Pix, etc.) e emitir o cupom de venda diretamente no POS - tudo sem a necessidade do cliente sair do veículo.\nTambém é possível integrá-lo em sua loja de conveniência e realizar a abertura de mesas, controle de comandas, lançamentos de itens e fazer disparos de pedidos diretamente para a cozinha.\n\nTelefone: (27) 3062-5275",
    category: ["Postos de Combustível", "Lojas de Conveniência"],
  },
  {
    title: "OmniPDV",
    logo: "logo-omni.png",
    description:
      "Com a plataforma Nexaas.Omni você terá gestão e controle do seu negócio com facilidade e mobilidade.\nApp para sistema de PDV e caixa de loja 100% móvel, funciona de qualquer lugar, levando seu negócio onde você estiver.\nOs vendedores podem ser os próprios caixas com o Nexaas.Omni, é possível fazer gestão de seus clientes, vendas com diversas formas de pagamento, inclusão de descontos e gestão das vendas.\nAjuste na tela do colaborador.\n\nTelefone: (11) 98283-3210\n\nEmail: rodrigo.santos@nexaas.com\nEmail: roberto.leite@nexaas.com",
    category: ["Salão de Beleza"],
  },
  {
    title: "Wesa SmartPDV",
    logo: "logo-wesa.png",
    description:
      "O App SmartPDV possibilita muito mais do que passar cartão no seu ponto de venda móvel, ele é um sistema de vendas completo para postos de combustíveis.\nO App centraliza toda operação de venda em uma única máquina, somando muitas vantagens:\n\n- Registro de vendas;\n- Passa cartão de crédito e débito;\n- Leitura de código de barras de produtos;\n- Impressão de NFC-e direto no SmartPDV;\n- Uso de cartão NFC para identificação de clientes e frentistas.\n\nTelefone: (51) 4040-4191\n\nEmail: suporte@wesa.com.br",
    category: ["Postos de Combustível"],
  },
  {
    title: "Jump Serviços",
    logo: "logo-jump.png",
    description:
      "Gerencie a distância, opere pelo App e tenha seu estacionamento ou lava-rápido na palma da mão! Atendemos perfeitamente tanto estacionamento, valet quanto lava-rápido ou estéticas automotivas.\nUma ferramenta completa para controlar a entrada e saída dos seus clientes do estacionamento e lava-rápido sem necessidade de Internet!\nO App operacional foi desenvolvido para smartphone ou tablet (Android), trabalha com cartões QR Code, impressora portátil bluetooth, além de ter outros recursos que possibilitam maior eficiência e agilidade no controle dos clientes.\nO sistema permite que você controle as faturas dos mensalistas em dia e atrasados ou da gestão de convênios pós-pago tanto do seu estacionamento ou lava-rápido.\nPodendo automatizar o bloqueio e cobrá-los como rotativo caso estejam atrasados.\n\nEmail: rafael.haeusler@jumptecnologia.com\nEmail: gustavo.cabral@jumptecnologia.com",
    category: ["Estacionamentos", "Serviços"],
  },
  {
    title: "Posto Gestor",
    logo: "logo-postogestor.png",
    description:
      "O Posto Gestor é um sistema de gestão completo e especializado para o varejo de combustíveis, conveniências, troca de óleo e serviços.\nAlém disso, o Posto Gestor inclui um módulo especialmente desenvolvido para empresas TRR (Transportador-Revendedor-Retalhista), garantindo uma gestão integrada e eficaz de todas as operações.\n\nTelefone: (48) 3198-0982\nTelefone: (48) 3521-5390",
    category: ["Auto Elétricas, Auto Peças e Mecânicas", "Postos de Combustível"],
  },
  {
    title: "Suporte PDV Mobile",
    logo: "logo-suporte.png",
    description:
      "O Suporte PDV Mobile é um App de Ponto de Venda móvel para postos de combustível.\n\nTelefone: (53) 3026-6000\nTelefone: (53) 99981-1275",
    category: ["Postos de Combustível"],
  },
  {
    title: "UNIO",
    logo: "logo-unio.png",
    description:
      "O UNIO PDV Mobile é um sistema que contempla Pré Venda, Controle de Fabricação, Baixa rápida de cupom, alteração de preços de bomba, carta frete, vale motorista, cheques recebidos e cheques troco.\n\nTelefone: (14) 3432-1963\nTelefone: (14) 99810-6121",
    category: ["Postos de Combustível"],
  },
  {
    title: "Metanet Pay",
    logo: "logo-metanet.png",
    description:
      "O Metanet Pay proporciona mobilidade dentro da sua empresa, facilitando o recebimento dos clientes com dinheiro, cartão e a prazo.\n\nTelefone: (81) 98203-6450\nTelefone: (43) 9184-8004\n\nEmail: adson.nasser@metanetsistemas.com.br",
    category: ["Postos de Combustível"],
  },
  {
    title: "Argo Sistemas",
    logo: "logo-argo.png",
    description:
      "A solução Argo cobre todas as áreas vitais na operação de postos de gasolina.\nOs módulos do sistema foram pensados de forma inteligente, com a finalidade de integrar os dados, otimizando tempo e gerando informações essenciais para tomadas de decisão assertivas.\n\nTelefone: (54) 3771-3300\n\nEmail: tef@argosistemas.com",
    category: ["Postos de Combustível"],
  },
  {
    title: "Tech Posto",
    logo: "logo-techposto.png",
    description:
      "Tech Posto - PDV em suas mãos, com o App permite-se:\n\n- Dar baixa nos abastecimentos realizados na pista;\n- Baixa com negociações como:\n\n- Cartões (Débito, Crédito, Crédito parcelado, etc);\n- Pix (Direto da adquirente, ou pelo TECH PAY);\n- Requisição;\n- Dinheiro;\n\n- Chamada ADM para adquirente, para operações como:\n\n- Cancelamento;\n- Reimpressão;\n\n- Documentos fiscais, como:\n\n- Impressão e Reimpressão;\n- NFe (identificado) e NFC-e;\n\n- Relatórios rápidos de funcionários.\n\nTelefone: (64) 99279-4668\n\nEmail: f.jaime@tsi.inf.br",
    category: ["Postos de Combustível"],
  },
  {
    title: "Cash Driver",
    logo: "logo-linkedby.png",
    description:
      "O Cash Driver é uma ferramenta que utiliza a tecnologia móvel (smartphoneou tablet) para acompanhar e otimizar o processo logístico de entrega.\nSeu ciclo tem início pela conferência dos produtos carregados (saída), prestação de contas “ponto a ponto” e conferência de entrada, tornando o processo mais ágil, prático e seguro.\nAlém disso, o sistema memoriza a rota feita pelo motorista e também alerta para paradas extras programadas (almoço, depósitos bancários e descanso obrigatório) e não programadas (abastecimento, troca de pneu, acidentes e outros).\n\nTelefone: (11) 99981-2505\nTelefone: (11) 2959-5011\n\nEmail: douglas@linkedby.com.br\nEmail: marcelo.zorub@linkedby.com.br",
    category: ["Delivery"],
  },
  {
    title: "Consfor",
    logo: "logo-consfor.png",
    description:
      "App para venda de tickets de estacionamento em eventos.\n\nTelefone: (14) 99152-7385\n\nEmail: consforsistemas2@gmail.com\nEmail: aroldo@consfor.com.br",
    category: ["Estacionamentos"],
  },
  {
    title: "Infinite POS",
    logo: "logo-infinite.png",
    description:
      "O Infinite POS é um PDV (Ponto de venda) móvel que traz uma nova forma de vendas para postos de combustíveis.\nCom o Infinite POS você será capaz de efetuar a venda de abastecimentos, produtos e emitir NFC-e diretamente da máquina de cartão, isso entre muitas outras funcionalidades já disponíveis que trará grande agilidade e comodidade para seus clientes.\n\nTelefone: (38) 99977-2886\n\nEmail: matheus@infinitetecnologia.com.br\nEmail: patrick@infinitetecnologia.com.br",
    category: ["Postos de Combustível"],
  },
  {
    title: "COMPSIS",
    logo: "logo-compsis.png",
    description:
      "App que faz o controle operacional e de cobranças em praças de pedágio.\n\nTelefone: (12) 99789-4721\n\nEmail: jessilin.rodrigues@compsisnet.com.br\nEmail: carlos.doria@compsis.com.br",
    category: ["Pedágio"],
  },
  {
    title: "Serbet",
    logo: "logo-serbet.png",
    description:
      "Sistema de fiscalização e vendas de estacionamento rotativo (zona azul) das cidades operadas pelo Estacionamento Digital.\nEmissão de ticket de estacionamento, venda de créditos de estacionamento e regularização de avisos de irregularidade.\nOperado pelos Postos de Vendas e agentes de fiscalização.\n\nTelefone: (47) 99961-9670\n\nEmail: fabricio@serbet.com.br\nEmail: luan.meneghelli@serbet.com.br",
    category: ["Estacionamentos"],
  },
  {
    title: "B2 Sistemas",
    logo: "logo-b2.png",
    description:
      "Integração com sistema Queen para recebimento integrado na maquininha.\n\nTelefone: (65) 3326-2299\nTelefone: (65) 99983-6549\n\nEmail: suporte@b2sistemas.com.br\nEmail: desenvolvimento@b2sistemas.com.br\nEmail: heli@b2sistemas.com.br",
    category: ["Gestão Empresarial"],
  },
  {
    title: "Connect Posto - POS",
    logo: "logo-opcaovirtual.png",
    description:
      "O “Connect Posto - POS” é um App de vendas de combustíveis do Connect Posto.\n\nTelefone: (66) 3439-5931\n\nEmail: marcosdi@opcaovirtual.com.br\nEmail: luciangela@opcaovirtual.com.br",
    category: ["Postos de Combustível"],
  },
  {
    title: "Unypax",
    logo: "logo-unypax.png",
    description:
      "App de recebimento integrado com o ERP Unypax​.\n\nTelefone: (62) 99981-6939\nTelefone: (62) 98148-6032\n\nEmail: felipe@unymos.com",
    category: ["Serviços"],
  },
  {
    title: "Compusoft",
    logo: "logo-compusoft.png",
    description:
      "App integrado ao sistema de gestão de postos de combustíveis Posto Forte, o App permite que seja faturado os abastecimentos realizados nas bombas do posto, além de venda de produtos e controle da loja de conveniência.\n\nTelefone: (18) 3271-1057\n\nEmail: yudi@pratikapdv.com",
    category: ["Postos de Combustível"],
  },
  {
    title: "Maistre",
    logo: "logo-maistre.png",
    description:
      "App para recebimento de doações via cartão.\n\nTelefone: (51) 99226-8522\nTelefone: (51) 3029-6747\n\nEmail: domingos@maistre.com.br\nEmail: vinycio@maistre.com.br",
    category: ["Religioso"],
  },
  {
    title: "Xmenu",
    logo: "logo-netcontroll.png",
    description:
      "Aplicativo completo para gestão de PDV para restaurantes, com controle de mesa, balcão e delivery.\n\nTelefone: (16) 3514-0550\n\nEmail: developer@netcontroll.com.br\nEmail: adm@netcontroll.com.br",
    category: ["Bar", "Lanchonetes e Restaurantes"],
  },
  {
    title: "Anota Ai Smart PDV",
    logo: "logo-new-choice.png",
    description:
      "A gestão de frente de loja ficará mais simples e rápida. Utilizando o dinamismo e praticidade de um POS DIGITAL será possível ter acesso às principais funções de um estabelecimento como compra, venda, controle de estoque, relatórios, identificação dos clientes e funcionários, impressão por setor, e muito mais! Além de todas as operações disponíveis, o SMART PDV conta com um sistema de retaguarda próprio, 100% na nuvem, que tornará possível acompanhar o dia a dia do estabelecimento, em tempo real, a partir de qualquer equipamento conectado à internet.\n\nTelefone: (21) 2430-3005\n\nEmail: hilario@newchoice.com.br\nEmail: rodrigo@newchoice.com.br",
    category: ["Varejo em Geral"],
  },
  {
    title: "eVogar",
    logo: "logo-vogar.png",
    description:
      "Emitir notas fiscais, cupons e gerenciamento financeiro.\n\nTelefone: (51) 3051-1015\nTelefone: (51) 99514-8906\n\nEmail: suporte2@vogar.com.br",
    category: ["Varejo em Geral"],
  },
  {
    title: "Veloce Smart",
    logo: "logo-velocetech.png",
    description:
      "Automação comercial integrada à máquina de pagamentos, ideal para todos os segmentos. Desenvolvida para otimizar suas vendas e oferecer uma gestão completa do negócio, com controle de caixa, estoque, emissão de cupons fiscais e notas de serviço. Com o Veloce Smart, sua marca une os canais físicos e digitais, transformando a experiência de compra dos clientes e garantindo que seu negócio esteja sempre presente.Saiba mais em: https://veloce.tech\n\nTelefone: (51) 99382-5981\n\nEmail: projetos@veloce.techn\nEmail: proenca@veloce.tech",
    category: ["Varejo em Geral"],
  },
  {
    title: "JR Restaurante",
    logo: "logo-jrsistemas.png",
    description:
      "Aplicativo para uso do garçom: Permite fazer lançamentos de produtos em mesas, Efetuar pagamento e fechamento da mesa, Transferência de produtos entre mesas e etc.\n\nTelefone: (47) 99944-2415\n\nEmail: anderson@jrpdv.com.br\nEmail: nathan@jrpdv.com.br",
    category: ["Lanchonetes e Restaurantes", "Bar"],
  },
  {
    title: "Yolo PDV",
    logo: "logo-yolo.png",
    description:
      "A Yolo Pass é a solução completa de cashless para organizadores de eventos, oferecendo uma plataforma que integra controle de acesso, venda e validação de ingressos digitais, recarga de saldo, consumo via pulseiras ou cartões RFID, e relatórios em tempo real sobre vendas e movimentações financeiras. Com ele, você elimina filas, reduz fraudes, centraliza a gestão do evento e melhora significativamente a experiência do público.\n\nTelefone: (16) 99254-5889\n\nEmail: kentaro@yolopass.com.br",
    category: ["Eventos, Feiras e Shows"],
  },
  {
    title: "RMS Mobile",
    logo: "logo-resultmais.png",
    description:
      "Aplicativo desenvolvido para terminais POS, voltado ao processamento de transações de pagamento via cartão (crédito/débito) e Pix. Com interface simples e intuitiva, permite a realização rápida e segura de vendas, integrando-se diretamente ao sistema de frente de caixa. Ideal para estabelecimentos que buscam agilidade no atendimento e confiabilidade nas transações financeiras.\n\nTelefone: (51) 3902-1525\n\nEmail: adriano@resultmais.com\nEmail: willian@resultmais.com",
    category: ["Serviços"],
  },
  {
    title: "PlinPag",
    logo: "logo-plimpag.png",
    description:
      "Consulta, impressão e pagamento de faturas de água de concessionárias parceiras e tributos municipais.\n\nTelefone: (67) 9294-4372\n\nEmail: arthur@plimpag.com.br",
    category: ["Varejo em Geral"],
  },
  {
    title: "EQuatro Pay",
    logo: "logo-e4quattropay.png",
    description:
      "APP para gestão empresarial, com Consulta de produtos, faturamento, recebimento, dashboard e acompanhamento de vendas.\n\nTelefone: (11) 98492-5057\n\nEmail: ribeiro@e4sistemas.com.br",
    category: ["Serviços"],
  },
  {
    title: "Suit POS",
    logo: "logo-suitpos.png",
    description:
      "O SuitPOS é de uso exclusivo de clientes Suitable. Sua função é servir como integração de pagamentos de pedidos de forma automatizada, gerando comprovante e Nota Fiscal.\n\nTelefone: (51) 9913-2606\n\nEmail: financeiro@suitable.com.br\nEmail: lucasrodrigues2606@gmail.com\nEmail: kaiov@mx2.unisc.br",
    category: ["Lanchonetes e Restaurantes", "Bar"],
  },
  {
    title: "Zetta Pay",
    logo: "logo-zetta.png",
    description:
      "Ajudar empresas com alto volume de cobranças mensais a automatizar e agilizar seus recebimentos através de um sistema de gestão de cobranças.\n\nTelefone: (49) 3366-1011\n\nEmail: cleiton@zettabrasil.com.br\nEmail: darlei@zettabrasil.com.br",
    category: ["Varejo em Geral"],
  },
  {
    title: "RANFCe",
    logo: "logo-RANFCe.png",
    description:
      "NFC-e Nota de Consumidor em Tablet, Smartphone, Terminal G800, Cielo LIO e REDE com GPOS700 e L400. Pré-Atendimento/Orçamento para Tablet e Smartphone; Restaurante: Cardápio, pedido e fechamento em Smartphone.\n\nTelefone: (82) 3142-8224\n\nEmail: diretoria@rasistemas.com.br",
    category: ["Varejo em Geral"],
  },
  {
    title: "Super PDV",
    logo: "logo-superpdv.png",
    description:
      "Aplicativo PDV Mobile da BM Informática para realização de pedidos, comandas e vendas.\n\nTelefone: (81) 3126-2050\n\nEmail: bm@bminformatica.com.br",
    category: ["Varejo em Geral"],
  },
  {
    title: "MToll",
    logo: "logo-mtoll.png",
    description:
      "O MTOLL é um aplicativo de arrecadação e operação móvel para praças de pedágio, desenvolvido pela COMPSIS Computadores e Sistemas Indústria e Comércio LTDA.A solução permite que operadores realizem cobrança de pedágio de forma móvel, diretamente em Smart POS, eliminando a necessidade de estruturas fixas adicionais nas pistas. O MTOLL é totalmente integrado aos sistemas centrais de controle (CCA) das concessionárias, atuando como um “papa‑fila digital”, agilizando o atendimento aos usuários, reduzindo filas e melhorando o fluxo de tráfego, especialmente em horários de pico.\n\nTelefone: (35) 99185‑9475\n\nEmail: heloan.marinho@compsis.com.br",
    category: ["Pedágio"],
  },
  {
    title: "Comanda Alterdata",
    logo: "logo-comanda-alterdata.png",
    description:
      "O Comanda Alterdata é um aplicativo de lançamento de pedidos e vendas desenvolvido pela ALTERDATA Tecnologia em Informática LTDA. Ele é um aplicativo complementar e dependente do Alterdata SPICE, suíte completa de gestão voltada para restaurantes, bares, lanchonetes, cafeterias e estabelecimentos de food service. O app permite que garçons e atendentes registrem pedidos diretamente pelo dispositivo móvel, com integração em tempo real ao sistema SPICE, trazendo mais agilidade no atendimento e maior controle operacional.\n\nTelefone: (21) 99253‑1415\n\nEmail: adm@alterdata.com.br",
    category: ["Bar", "Lanchonetes e Restaurantes"],
  },
  {
    title: "VucaPOS",
    logo: "logo-vucapos.png",
    description:
      "O VucaPOS é um aplicativo de ponto de venda (PDV) desenvolvido pela VUCA Solution Tecnologia LTDA, integrante do ecossistema VUCA, um ERP completo e integrado para restaurantes e bares. O aplicativo atua como o frente de loja da plataforma, permitindo o registro de vendas e pedidos diretamente no ponto de atendimento, com integração em tempo real aos módulos de financeiro, estoque, produção, delivery e relatórios da retaguarda VUCA.\n\nTelefone: (62) 98119‑1635\n\nEmail: lucas.graciano@vucasolution.com.br",
    category: ["Bar", "Lanchonetes e Restaurantes"],
  },
  {
    title: "A2D Ticket",
    logo: "logo-a2d-ticket.png",
    description:
      "O A2D Ticket é um aplicativo de venda e gestão de ingressos digitais, desenvolvido pela A2D Soluções LTDA.A solução oferece uma plataforma completa para eventos, permitindo a criação, venda, acompanhamento e validação de ingressos de forma digital, com controle em tempo real das vendas e dos repasses financeiros. O aplicativo faz parte do ecossistema A2D Ticket, focado em modernizar e simplificar a bilheteria de eventos, oferecendo autonomia ao organizador e uma experiência fluida ao público.\n\nTelefone: (35) 99251‑2002",
    category: ["Eventos, Feiras e Shows"],
  },
  {
    title: "Rei das Fichas",
    logo: "logo-reidasfichas.png",
    description:
      "Sistema e serviço para gestão de vendas em eventos, tais como emissão de fichas/tickets e controle de consumo em eventos, festas, bares, shows e operações que usam vendas rápidas.\n\nTelefone: (19) 99851-0157\n\nEmail: rudineilasta@reidasfichas.com.br",
    category: ["Eventos, Feiras e Shows"],
  },
  {
    title: "SUIT EXPRESS POS",
    logo: "logo-suitablev3.png",
    description:
      "O Suit Express POS é um aplicativo operacional de delivery e pagamento na entrega, integrante do ecossistema Suitable (plataforma brasileira focada em food service).​ Ele foi desenvolvido para motoboys e entregadores, permitindo gerenciar rotas, acompanhar pedidos em tempo real e receber pagamentos via POS ou smartphone, com emissão automática de NFC‑e no momento da entrega.​ Principais recursos:\n- App do motoboy integrado ao sistema do restaurante;​\n- Roteirização e mapa em tempo real;​\n- Rastreamento do entregador;​\n- Pagamento na entrega (Pix e cartão) via app ou maquininha POS;​\n- Emissão automática de NFC-e;​\n- Uso em smartphone Android/iOS ou maquininha POS;​\n- Notificações automáticas ao cliente (WhatsApp);​\n- Integração com iFood, 99Food e delivery próprio;​\n- Suporte a múltiplas lojas por entregador.\n\nTelefone: (51) 9913-2606",
    category: [],
  },
  {
    title: "SUIT WAITER POS",
    logo: "logo-suitablev4.png",
    description:
      "O Suit Waiter POS é o aplicativo de garçom (salão) do ecossistema Suitable, criado para lançamento de pedidos, gestão de mesas e pagamento direto no atendimento, sem uso de comandas de papel. Ele funciona em smartphones, tablets ou maquininhas POS Android, permitindo que o garçom faça todo o fluxo do pedido à cobrança diretamente na mesa do cliente, com integração total ao sistema do restaurante. Principais recursos:\n- Gestão de mesas e comandas;\n- Lançamento de pedidos no salão;\n- Envio automático para a cozinha (KDS / impressão por setor);\n- Pagamento direto na mesa (POS: cartão e PIX);\n- Impressão de recibo/nota;\n- Status do pedido em tempo real;\n- Elimina comandas impressas;\n- Uso em celular, tablet ou maquininha POS;\n- Totalmente integrado ao Suitable (salão, delivery e financeiro).\n\nTelefone: (51) 9913-2606",
    category: [],
  },
  {
    title: "Ticket PDV",
    logo: "logo-ticketpdv.png",
    description:
      "Sistema simples e rápido de PDV para eventos, festas e bares, permitindo emissão de tickets, controle básico de estoque, fechamento de caixa e vendas à vista (dinheiro, cartão e PIX).\n\nTelefone: (48) 99617‑1542",
    category: ["Eventos, Feiras e Shows"],
  },
  {
    title: "Zenitech",
    logo: "logo-zenitech.png",
    description:
      "O Zenitech é um conjunto de sistemas e aplicativos corporativos desenvolvidos pela Zenitech Informática LTDA, empresa brasileira especializada em soluções de gestão para revendas de gás (GLP).\nO app faz parte de um ecossistema de gestão, integrado a sistemas como:\n\n- SIAC (gestão comercial, financeira e operacional);\n- Emissor Web (emissão fiscal);\n- Zcall (gestão de entregas e logística de gás).\n\nEle é utilizado por equipes internas (vendas, atendimento, entregadores e gestão), não sendo um app de uso genérico para o consumidor final.\n\nTelefone: (84) 99611‑6068",
    category: ["Varejo em Geral", "Distribuidora de Gás de Cozinha"],
  },
  {
    title: "SEUPOS Food",
    logo: "logo-seupos.png",
    description:
      "Aplicativo de ponto de venda (POS) para bares, restaurantes, pizzarias e cafés, permitindo gestão de pedidos, mesas, cardápio digital, vendas e controle financeiro em tempo real.\n\nEmail: contato@avantejuntos.com.br",
    category: ["Food Service e Food Truck"],
  },
  {
    title: "Menu Integrado",
    logo: "logo-menuintegrado.png",
    description:
      "Plataforma completa para restaurantes e negócios de delivery, centralizando pedidos, oferecendo cardápio digital, gestão de motoboys, integrações com marketplaces e ferramentas de controle e automação.\n\nTelefone: (11) 97348‑1235\nTelefone: (41) 99837‑5356​\n\nEmail: contato@menuintegrado.com.br",
    category: ["Food Service e Food Truck"],
  },
  {
    title: "GFood",
    logo: "logo-gfood.png",
    description:
      "Sistema de gestão para bares e restaurantes que integra atendimento presencial, delivery, comandas, mesas, cardápio digital, autoatendimento e gestão operacional completa.\n\nTelefone: (49) 3441‑3105",
    category: ["Food Service e Food Truck"],
  },
  {
    title: "SmartPay",
    logo: "logo-smartpay.png",
    description:
      "O SmartPay é um aplicativo de meios de pagamento que funciona em conjunto com as maquininhas SmartPay e o Portal do Cliente, permitindo aceitar pagamentos, acompanhar vendas, gerenciar usuários, antecipar recebíveis e controlar o fluxo de caixa em tempo real. O ecossistema SmartPay oferece:\n- Pagamentos por crédito, débito, parcelado, Pix e link de pagamento;\n- Maquininha POS com Wi-Fi e chip;\n- Gestão multiusuário (até 10 usuários por máquina);\n- Divisão de vendas, repasse de taxas ao portador e conciliação;\n- Integrações via Webservice para sistemas de gestão.\n\nTelefone: (14) 98214-1275",
    category: ["Varejo em Geral"],
  },
  {
    title: "Linx Smart POS",
    logo: "logo-linxsmartpos.png",
    description:
      "O Linx Smart POS é o PDV móvel que transforma a experiência de compra no seu posto, loja de conveniência ou restaurante, desenhado para trazer mobilidade e integração no ponto de venda:\n\n- Venda Integrada do Começo ao Fim: venda finalizada, estoque atualizado e nota fiscal emitida em uma única operação, garantindo 100% de segurança no pagamento.\n- Gestão de Vendas e Turnos: controle total da operação, incluindo gestão de turnos e identificação do consumidor.\n- Emissão Fiscal Simplificada: emissão de notas fiscais modelo NF-e 55 resumido, CF-e 59 e NFC-e 65.\n- Multi Adquirente: centralização de todos os pagamentos em uma única máquina, transacionando com múltiplos adquirentes e aceitando diversas formas de pagamento (dinheiro, débito, crédito, vouchers, cartões frota como Ticket Log, Sodexo, Alelo Auto, etc.).\n- Precificação Dinâmica: suporte à precificação dinâmica, garantindo que o preço correto seja aplicado na hora da venda.\n\nEle é utilizado por equipes internas (vendas, atendimento, entregadores e gestão), não sendo um app de uso genérico para o consumidor final.\n\nTelefone: (47) 98829-1545",
    category: [
      "Varejo em Geral",
      "Postos de Combustível",
      "Auto Elétricas, Auto Peças e Mecânicas",
      "Serviços",
      "Lojas de Conveniência",
    ],
  },
  {
    title: "ComandaX Self-checkout",
    logo: "logo-comandax.png",
    description:
      "ComandaX Self-Checkout Gestor é o app ideal para quem quer acompanhar e controlar as vendas do seu negócio em tempo real. Com ele, o gestor pode consultar dados de vendas, visualizar maquininhas de pagamento registradas, acompanhar as vendas de cada dispositivo, cadastrar produtos e alterar preços de forma simples e rápida. Tudo para facilitar a gestão e dar mais controle ao seu negócio, direto no celular.\n\nTelefone: (44) 99813-1290",
    category: ["Varejo em Geral"],
  },
  {
    title: "GetCard Pay",
    logo: "logo-getcardpay.png",
    description:
      "O GetCard Pay é um aplicativo Android de pagamentos da GetCard Pagamentos Digitais, que funciona como um hub de pagamentos / TEF móvel, permitindo realizar transações de cartão, Pix e voucher diretamente no dispositivo POS ou integradas a outros sistemas PDV/ERP via Intent ou API.​ Ele pode atuar tanto como App de pagamento standalone, quanto mecanismo de pagamento embarcado, acionado por um PDV externo (caixa, totem, app próprio).​ Principais funcionalidades:​\n- Pagamentos e estornos (cartão de crédito (à vista e parcelado), cartão de débito, PIX e Voucher​\n- Integração via Intent (Android) para PDVs e apps terceiros;​\n- Pagamentos iniciados remotamente via API;​\n- Consulta de transações (pendentes e finalizadas);​\n- Criptografia e segurança padrão TEF;​\n- Conciliação de vendas integrada ao ecossistema GetCard.\n\nTelefone: (44) 99991-6603",
    category: ["Varejo em Geral"],
  },
  {
    title: "Jump Park",
    logo: "logo-jumppark.png",
    description:
      "O Jump Park é um sistema completo de gestão para estacionamentos, desenvolvido pela Jump Tecnologia, que combina aplicativo operacional, site administrativo e integração com POS/PDV.​ O app permite operar o estacionamento pelo celular, tablet ou máquina POS, enquanto a gestão financeira e administrativa é feita via painel web.​ Principais recursos:\n- Controle de entrada e saída de veículos;​\n- Leitura de placa por foto (LPR);​\n- Checklist de avarias com fotos;​\n- Recebimento integrado (POS, Pix, cartões);​\n- Emissão de nota fiscal;​\n- Relatórios operacionais e financeiros;​\n- Operação offline;​\n- Gestão de rotativo, mensalistas e convênios;​\n- Inclusão de serviços extras (ex.: lava‑rápido, estética automotiva).\n\nTelefone: (21) 99153-2806",
    category: ["Estacionamentos"],
  },
  {
    title: "NXZ Go",
    logo: "logo-nxzgo.png",
    description:
      "O NXZ Go é um aplicativo de autoatendimento e gestão operacional desenvolvido pela NXZ Sistemas Inteligentes LTDA (Nexuz). A solução combina self-checkout, PDV, gestão financeira, estoque e integração com meios de pagamento, permitindo vendas rápidas (principalmente to-go) e controle do negócio em tempo real. Principais características:\n- Aplicação de autoatendimento (self-service) - “sem filas”;\n- Vendas to-go integradas ao sistema;\n- Controle de estoque (itens completos, kits, matéria-prima e fracionados);\n- Gestão financeira e contábil;\n- Emissão de notas fiscais (SEFAZ / SAT);\n- Dashboards e BI nativo;\n- Integração nativa com meios de pagamento e POS;\n- Gestão de múltiplas lojas, filiais e franquias.\n\nTelefone: (41) 99899-6477",
    category: ["Varejo em Geral"],
  },
  {
    title: "MSForce",
    logo: "logo-msforce.png",
    description:
      "O MSForce é um aplicativo de força de vendas móvel, desenvolvido por empresa brasileira, voltado para emissão de pedidos, boletos e notas fiscais diretamente pelo smartphone. O app funciona integrado ao sistema de gestão (ERP) do cliente e permite que vendedores e representantes comerciais realizem vendas em campo, com praticidade e controle. O MSForce é utilizado para:\n- Registro de Pedidos de venda;\n- Emissão de boletos;\n- Emissão de nota fiscal;\n- Sincronização de dados com o sistema central.\n\nTelefone: (54) 98110-6828",
    category: ["Varejo em Geral", "Atacado", "Distribuidores de Produtos"],
  },
  {
    title: "A00s",
    logo: "logo-a00s.png",
    description:
      "O A00s é um sistema completo de gestão empresarial (ERP + PDV), com aplicativo móvel (A00s Mobile) que funciona como extensão operacional do sistema principal.\nO app permite realizar vendas, pedidos, controle de estoque e emissão fiscal diretamente no celular ou maquininha POS, funcionando integrado ao ERP da empresa.\n\nPrincipais características:\n\n- Operação em POS e dispositivos móveis (Android);\n- Integração total com o sistema de gestão A00s;\n- Funcionamento online e offline (com sincronização posterior).\n\nNa prática, o A00s é:\nUm ERP completo, com app móvel para vendas e operação em campo ou balcão.\n\nTelefone: (54) 9949-6038",
    category: ["Varejo em Geral"],
  },
  {
    title: "RetailPOS",
    logo: "logo-retailpos.png",
    description:
      "O RetailPOS é o módulo de ponto de venda (PDV) do ecossistema Teknisa Retail, uma plataforma completa de gestão e automação comercial voltada principalmente ao setor de alimentação (food service).\nEle é utilizado na frente de caixa, permitindo registrar vendas, comandas e pagamentos, totalmente integrado ao ERP e demais módulos da Teknisa (estoque, financeiro, produção e BI).\nO RetailPOS pode operar em:\n- Computadores (caixa tradicional);\n- Tablets e dispositivos móveis;\n- Maquininhas POS (SmartPOS).\n\nFaz parte de uma solução maior que inclui: Comanda eletrônica, Autoatendimento (totem), KDS (cozinha), Delivery e cardápio digital.\n\nTelefone: (31) 2122-2300",
    category: ["Bar", "Food Service e Food Truck", "Lanchonetes e Restaurantes"],
  },
  {
    title: "Xpert Pay",
    logo: "logo-xpertpay.png",
    description:
      "O Xpert Pay (também conhecido como Xpert Smart Pay) é um aplicativo/PDV móvel de pagamentos e vendas, integrante do ecossistema de soluções da Xpert, empresa brasileira especializada em automação para postos de combustíveis e lojas de conveniência.\nEle permite que as vendas e pagamentos sejam realizados diretamente na pista de abastecimento ou no local de atendimento, sem necessidade de o cliente ir até o caixa.\nNa prática, o Xpert Pay é:\n\n- Um PDV móvel integrado ao sistema Xpert;\n- Um módulo para recebimento de pagamentos e registro de vendas;\n- Uma solução voltada para operações em tempo real no posto.\n\nCom ele é possível: Vender produtos da conveniência; Receber pagamentos no local (PIX, cartão etc.); Integrar automaticamente as vendas ao sistema do posto.\n\nTelefone: (46) 2101-0101",
    category: ["Postos de Combustível"],
  },
  {
    title: "Raj PDV",
    logo: "logo-raj.png",
    description:
      "O Raj PDV é um sistema completo de ponto de venda (PDV) e gestão comercial, desenvolvido pela Almeida Braga Tecnologia LTDA (Raj Tecnologia).\nEle funciona como uma plataforma de frente de caixa integrada, permitindo realizar vendas, emissão fiscal, controle operacional e gestão do negócio, com suporte a dispositivos como smartphones, tablets e maquininhas POS Android.\nO sistema inclui módulos como:\n- PDV (frente de caixa);\n- Gestão de comandas e mesas;\n- Autoatendimento;\n- E-commerce integrado.\n\nTambém possui app complementar (Raj PDV Gestor) com dashboards de vendas e indicadores em tempo real.\n\nTelefone: (81) 99680-1299",
    category: ["Varejo em Geral"],
  },
  {
    title: "ZPOS",
    logo: "logo-zpos.png",
    description:
      "O ZPOS é um aplicativo de integração de pagamentos (TEF/POS) da Zucchetti, utilizado como ponte entre sistemas de gestão (ERP/PDV) e maquininhas de cartão (SmartPOS).\nEle permite que o sistema de vendas envie automaticamente os dados da transação para a maquininha, realizando o pagamento de forma integrada, sem necessidade de digitação manual.\nAlém disso, o ZPOS:\n- Funciona como módulo de pagamento integrado;\n- Elimina o uso de cabos (comunicação via rede);\n- Automatiza conciliação e registro das transações;\n- Garante conformidade fiscal e operacional.\n\nNa prática, é um componente de pagamento dentro do ecossistema Zucchetti, não um PDV completo.\n\nTelefone: (49) 98877-6598",
    category: ["Varejo em Geral"],
  },
  {
    title: "AppsCloud",
    logo: "logo-appscloud.png",
    description:
      "O AppsCloud é um aplicativo de vendas e emissão fiscal móvel, desenvolvido pela Zucchetti Software e Sistemas LTDA, que funciona integrado aos sistemas ClippFácil, Clipp360 e Zweb.\nEle permite realizar vendas completas diretamente na maquininha POS ou dispositivo Android, incluindo:\n- Emissão de NFC-e (Nota Fiscal do Consumidor Eletrônica);\n- Registro de vendas;\n- Processamento de pagamentos.\n\nO app combina a mobilidade de um dispositivo portátil com a robustez de um sistema de gestão web, funcionando como uma extensão do ERP da empresa.\n\nTelefone: (49) 98877-6598",
    category: ["Varejo em Geral"],
  },
  {
    title: "AtonPOS",
    logo: "logo-atonpos.png",
    description:
      "O AtonPOS é um aplicativo complementar de pagamento e operação de vendas, desenvolvido pela Atonsystems, que funciona como uma extensão do sistema AtonPDV.\nEle permite controlar vendas e realizar pagamentos via smartphone ou POS, integrando diretamente com o sistema principal utilizado no estabelecimento.\nNa prática, o AtonPOS:\n- Atua como interface móvel do PDV;\n- Permite aceitar pagamentos (ex.: QR Code);\n- Faz a baixa automática de operações no sistema (ex.: abastecimento).\n\nNa prática, funciona como uma plataforma de gestão e apoio à execução de eventos, podendo ser usada tanto internamente quanto como interface para usuários/participantes.\n\nTelefone: (19) 2518-1814",
    category: ["Postos de Combustível"],
  },
  {
    title: "Org Eventos",
    logo: "logo-orgeventos.png",
    description:
      "O Org Eventos é um sistema/aplicativo de gestão de eventos, desenvolvido pela Release Informática LTDA, empresa brasileira especializada em desenvolvimento de software sob medida.\nA solução faz parte do ecossistema de sistemas da empresa (ligado ao “OrgSystem”) e é utilizada para organizar, controlar e operacionalizar eventos, centralizando processos como:\n- Cadastro de eventos;\n- Gestão de participantes / inscrições;\n- Controle operacional;\n- Organização de atividades e serviços ligados ao evento.\n\nNa prática, funciona como uma plataforma de gestão e apoio à execução de eventos, podendo ser usada tanto internamente quanto como interface para usuários/participantes.\n\nTelefone: (16) 99353-5938",
    category: ["Varejo em Geral"],
  },
  {
    title: "CGMobile",
    logo: "logo-cgmobile.png",
    description:
      "O CGMobile é um aplicativo móvel de gestão e operação comercial, integrado ao sistema ERP ControlGás, voltado para revendas de gás (GLP) e água.\nEle permite que equipes operem vendas, entregas e faturamento diretamente pelo celular ou tablet, inclusive com funcionamento offline e sincronização posterior.\nPrincipais funcionalidades:\n- Registro de pedidos e vendas;\n- Operação de entregas;\n- Emissão de NF-e e NFC-e;\n- Cobranças e boletos;\n- Cadastro de clientes;\n- Controle operacional e financeiro;\n- Uso no campo (veículo de entrega).\n\nTelefone: (46) 3225-0639",
    category: ["Varejo em Geral"],
  },
  {
    title: "Smartpag",
    logo: "logo-smartpag.png",
    description:
      "O Smartpag é um sistema de gestão + PDV (ERP embarcado em maquininhas) desenvolvido pela Smartpag Brasil LTDA, voltado principalmente para operações de alimentação (food service).\nA proposta da Smartpag é transformar a maquininha de cartão (SmartPOS) em uma central completa de vendas, eliminando a necessidade de computador no caixa. O ecossistema inclui: Smartpag POS: PDV e operação de vendas; Smartpag Manager (SmartManagement): gestão do negócio em tempo real; SmartKDS: controle de pedidos para cozinha; SmartMenu: cardápio digital e pedidos online.\nPrincipais funcionalidades:\n- Recebimento integrado (cartão e pagamentos digitais);\n- PDV completo direto na maquininha;\n- Gestão de mesas e pedidos;\n- Comanda digital;\n- KDS (cozinha digital);\n- Relatórios em tempo real (cloud);\n- Cardápio digital + pedidos online;\n- Integração com WhatsApp;\n- Emissão fiscal;\n- Delivery e controle de pedidos.\n\nTelefone: (27) 99828-8721",
    category: ["Varejo em Geral"],
  },
  {
    title: "TurisApp",
    logo: "logo-turisapp.png",
    description:
      "O TurisApp (app da Turistur) é um aplicativo de turismo e receptivo que permite ao viajante acessar passeios, transfers, programação e suporte durante a viagem, especialmente na região da Serra Gaúcha.\nO app funciona como uma extensão digital dos serviços da Turistur, oferecendo:\n- Consulta e compra de passeios turísticos;\n- Informações sobre roteiros e programação;\n- Acesso a comunicados e suporte em tempo real;\n- Integração com o sistema da empresa (operações e reservas)\n\nA Turistur é uma empresa com décadas de experiência em turismo receptivo, com estrutura de guias, transporte e atendimento 24h.\n\nTelefone: (54) 99181-4191",
    category: ["Varejo em Geral"],
  },
];

export default appsData;
