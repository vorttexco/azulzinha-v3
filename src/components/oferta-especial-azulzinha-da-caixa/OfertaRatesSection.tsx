import { segmentRates } from "./offerData";

function RatePair({
  debito,
  credito,
  variant,
}: {
  debito: string;
  credito: string;
  variant: "com" | "sem";
}) {
  const isCom = variant === "com";

  return (
    <div
      className={`flex-1 rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] px-4 py-4 flex flex-col items-center text-center gap-2 ${
        isCom ? "bg-azul text-white" : "bg-[#F4F4F4] text-black"
      }`}
    >
      <p className="text-[14px] lg:text-[16px] font-bold leading-[1.4]">
        {isCom ? "COM antecipação" : "SEM antecipação"}
      </p>
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center">
          <span className="text-[22px] lg:text-[28px] leading-[1.2] font-bold">
            {debito}
          </span>
          <span className="text-[12px] lg:text-[14px] leading-[1.4]">
            Débito
          </span>
        </div>
        <span className="text-[18px] leading-none">|</span>
        <div className="flex flex-col items-center">
          <span className="text-[22px] lg:text-[28px] leading-[1.2] font-bold">
            {credito}
          </span>
          <span className="text-[12px] lg:text-[14px] leading-[1.4]">
            Crédito
          </span>
        </div>
      </div>
      <p className="text-[12px] leading-[1.4] opacity-80">a partir de</p>
    </div>
  );
}

export default function OfertaRatesSection() {
  const rows = segmentRates();

  return (
    <section className="bg-cinza-claro w-full py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] flex flex-col gap-8 lg:gap-12">
        <h2 className="section-title text-azul">
          Aproveite nossas taxas exclusivas para os seguintes nichos:
        </h2>

        <div className="flex flex-col gap-4">
          {rows.map((row) => (
            <div
              key={row.segment}
              className="bg-white rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] px-4 py-4 lg:px-6 lg:py-5 flex flex-col lg:flex-row lg:items-center gap-4"
            >
              <p className="lg:w-[240px] shrink-0 text-[16px] lg:text-[18px] leading-[1.4] text-azul font-bold">
                {row.segment}
              </p>
              <div className="flex flex-col lg:flex-row gap-3 flex-1">
                <RatePair
                  variant="com"
                  debito={row.com.debito}
                  credito={row.com.credito}
                />
                <RatePair
                  variant="sem"
                  debito={row.sem.debito}
                  credito={row.sem.credito}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="text-[12px] lg:text-[14px] leading-[1.5] text-[#666666] text-center max-w-[1200px] mx-auto">
          Ofertas válidas para clientes dos ramos listados, credenciados de
          05/08/2025 a 31/07/2026, com faturamento mensal a partir de R$ 10 mil
          (individual) ou R$ 30 mil (grupo comercial) e que contratem a
          antecipação automática.
        </p>
      </div>
    </section>
  );
}
