const faturamentoRows: { label: string; value: string }[] = [
  { label: "De R$ 10 mil a R$ 20 mil", value: "1 Máquina" },
  { label: "De R$ 20 mil a R$ 50 mil", value: "1 Máquina" },
  { label: "De R$ 50 mil a R$ 100 mil", value: "Até 2 Máquinas" },
  { label: "De R$ 100 mil a R$ 250 mil", value: "Até 3 Máquinas" },
  { label: "De R$ 250 mil a R$ 400 mil", value: "Até 4 Máquinas" },
  { label: "Acima de R$ 400 mil", value: "Até 5 Máquinas" },
];

function AluguelZeroCard() {
  return (
    <div className="flex-1 rounded-[12px] bg-[linear-gradient(0deg,#006CAD_8%,#038DE1_97%)] px-8 py-10 flex flex-col items-center justify-center text-center text-white gap-3">
      <p className="text-[32px] leading-[1.2] font-bold">Aluguel ZERO*</p>
      <p className="text-[14px] leading-[1.4]">para até 05 equipamentos</p>
    </div>
  );
}

function TaxasCard({
  title,
  rate1,
  rate2,
}: {
  title: string;
  rate1: { value: string; label: string };
  rate2: { value: string; label: string };
}) {
  return (
    <div className="flex-1 rounded-[12px] bg-[linear-gradient(0deg,#006CAD_8%,#038DE1_97%)] px-8 py-8 flex flex-col items-center text-center text-white gap-3">
      <p className="text-[16px] font-bold leading-[1.4]">{title}</p>
      <p className="text-[16px] leading-[1.4]">A partir de</p>
      <div className="flex flex-col items-center">
        <p className="text-[32px] leading-[1.2] font-bold">{rate1.value}</p>
        <p className="text-[16px] leading-[1.4]">{rate1.label}</p>
      </div>
      <div className="w-10 h-px bg-white/50" />
      <div className="flex flex-col items-center">
        <p className="text-[32px] leading-[1.2] font-bold">{rate2.value}</p>
        <p className="text-[16px] leading-[1.4]">{rate2.label}</p>
      </div>
    </div>
  );
}

export default function HighlightsSection() {
  return (
    <section id="highlights" className="bg-white w-full py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] flex flex-col gap-8 lg:gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="section-title text-azul">
            O Gás do Povo garante gás gratuito para milhões de famílias brasileiras.
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black max-w-[900px]">
            Com a azulzinha, a maquininha oficial do programa, sua revenda pode aceitar o benefício e participar dessa iniciativa com taxas especiais.
          </p>
        </div>

        {/* Three big cards */}
        <div className="flex flex-col lg:flex-row gap-6">
          <AluguelZeroCard />
          <TaxasCard
            title="Sem antecipação"
            rate1={{ value: "1,09%", label: "débito" }}
            rate2={{ value: "2,09%", label: "crédito à vista" }}
          />
          <TaxasCard
            title="Com antecipação"
            rate1={{ value: "0,89%*", label: "débito" }}
            rate2={{ value: "3,48%**", label: "crédito à vista" }}
          />
        </div>

        {/* Disclaimer longo */}
        <p className="text-[12px] lg:text-[14px] leading-[1.5] text-[#666666] text-center max-w-[1200px] mx-auto">
          * Condições de isenção de aluguel para clientes credenciados na campanha Gás do Povo no período de 22/10/25 a 30/06/26: Para CNAEs Principal de Revenda de Gás com Antecipação: 1 máquina Smart ou POS com 2 meses de aluguel R$0, faturamento mínimo maior ou igual a R$1.000 e Antecipação Automática. Para CNAEs Principal de Revenda de Gás Sem Antecipação: 1 máquina Smart ou POS com 2 meses de aluguel R$0, faturamento mínimo maior ou igual a R$10.000. Após os 2 meses de isenção de aluguel, será aplicada a campanha vigente para cada público/política. ** A taxa de débito e de crédito variam conforme o faturamento. Consulte as condições com seu gerente PJ Caixa.
        </p>

        {/* Tabela de pílulas */}
        <div className="flex flex-col gap-2 max-w-[900px] mx-auto w-full">
          {/* Header */}
          <div className="flex items-center justify-between gap-4 bg-white rounded-full px-6 py-3 lg:px-10 lg:py-4 border border-[#E1E1E1]">
            <span className="text-[14px] lg:text-[18px] leading-[1.4] text-azul font-bold">
              Faturamento mensal (R$)
            </span>
            <span className="text-[14px] lg:text-[18px] leading-[1.4] text-azul font-bold text-right">
              Quantidade de terminais
            </span>
          </div>
          {/* Rows */}
          {faturamentoRows.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between gap-4 bg-[#F4F4F4] rounded-full px-6 py-3 lg:px-10 lg:py-4"
            >
              <span className="text-[14px] lg:text-[18px] leading-[1.4] text-cinza">
                {row.label}
              </span>
              <span className="text-[14px] lg:text-[18px] leading-[1.4] text-[#003D91] text-right">
                {row.value}
              </span>
            </div>
          ))}
        </div>

        {/* Disclaimer curto */}
        <p className="text-[12px] lg:text-[14px] leading-[1.5] text-[#666666] text-center max-w-[1200px] mx-auto">
          * Isenção de aluguel válida para os equipamentos azulzinha pro e azulzinha smart para clientes com antecipação contratada.
        </p>
      </div>
    </section>
  );
}
