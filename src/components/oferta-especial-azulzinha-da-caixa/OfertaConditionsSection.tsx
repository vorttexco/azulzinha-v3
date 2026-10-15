import {
  equipmentTiers,
  type EquipmentTier,
} from "./offerData";

function AluguelZeroCard() {
  return (
    <div className="flex-1 rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] bg-[linear-gradient(0deg,#006CAD_8%,#038DE1_97%)] px-8 py-10 flex flex-col items-center justify-center text-center text-white gap-3">
      <p className="text-[32px] leading-[1.2] font-bold">Aluguel ZERO*</p>
      <p className="text-[14px] leading-[1.4]">
        Sem antecipação para até 04 equipamentos
      </p>
      <div className="w-10 h-px bg-white/50" />
      <p className="text-[14px] leading-[1.4]">
        Com antecipação para até 05 equipamentos
      </p>
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
    <div className="flex-1 rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] bg-[linear-gradient(0deg,#006CAD_8%,#038DE1_97%)] px-8 py-8 flex flex-col items-center text-center text-white gap-3">
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

function EquipmentTable({
  title,
  rows,
}: {
  title: string;
  rows: EquipmentTier[];
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h2 className="section-title text-azul mb-2">{title}</h2>
      <div className="hidden lg:grid grid-cols-[1.2fr_0.8fr_1.6fr] items-center gap-4 bg-white rounded-full px-10 py-4 border border-[#E1E1E1]">
        <span className="text-[18px] leading-[1.4] text-azul font-bold">
          Faturamento mês
        </span>
        <span className="text-[18px] leading-[1.4] text-azul font-bold text-center">
          # Máquinas
        </span>
        <span className="text-[18px] leading-[1.4] text-azul font-bold text-right">
          Tipo
        </span>
      </div>
      {rows.map((row) => (
        <div
          key={row.faturamento}
          className="flex flex-col lg:grid lg:grid-cols-[1.2fr_0.8fr_1.6fr] lg:items-center gap-1 lg:gap-4 bg-[#F4F4F4] rounded-[12px] lg:rounded-full px-6 py-3 lg:px-10 lg:py-4"
        >
          <span className="text-[16px] lg:text-[18px] leading-[1.4] text-cinza">
            {row.faturamento}
          </span>
          <span className="text-[16px] lg:text-[18px] leading-[1.4] text-[#003D91] lg:text-center font-bold">
            {row.quantity}
          </span>
          <span className="text-[16px] lg:text-[18px] leading-[1.4] text-[#003D91] lg:text-right">
            {row.types}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function OfertaConditionsSection() {
  return (
    <section id="highlights" className="bg-white w-full py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] flex flex-col gap-8 lg:gap-12">
        <div className="flex flex-col lg:flex-row gap-6">
          <AluguelZeroCard />
          <TaxasCard
            title="Sem antecipação"
            rate1={{ value: "1,09%*", label: "débito" }}
            rate2={{ value: "1,99%*", label: "crédito à vista" }}
          />
          <TaxasCard
            title="Com antecipação"
            rate1={{ value: "0,89%*", label: "débito" }}
            rate2={{ value: "3,48%*", label: "crédito à vista" }}
          />
        </div>

        <p className="text-[12px] lg:text-[14px] leading-[1.5] text-[#666666] text-center max-w-[1200px] mx-auto">
          *Somente para clientes que contratarem a antecipação automática. A
          taxa de crédito varia conforme o faturamento. Consulte as condições
          com seu gerente.
        </p>

        <EquipmentTable
          title="Condições COM antecipação automática"
          rows={equipmentTiers("com")}
        />
        <EquipmentTable
          title="Condições SEM antecipação automática"
          rows={equipmentTiers("sem")}
        />
      </div>
    </section>
  );
}
