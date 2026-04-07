const tableData = [
  {
    faturamento: "De R$ 20 mil a R$ 30 mil",
    sem: { maquinas: "-", smart: "R$ 109", pro: "R$ 89", tef: "R$ 79" },
    com: { maquinas: "1", smart: "R$ 89", pro: "R$ 59", tef: "R$ 29" },
  },
  {
    faturamento: "Acima de R$ 30 mil até R$ 50 mil",
    sem: { maquinas: "1", smart: "R$ 109", pro: "R$ 69", tef: "R$ 59" },
    com: { maquinas: "até 2", smart: "R$ 89", pro: "R$ 59", tef: "R$ 29" },
  },
  {
    faturamento: "Acima de R$ 50 mil até R$ 85 mil",
    sem: { maquinas: "até 2", smart: "R$ 99", pro: "R$ 59", tef: "R$ 49" },
    com: { maquinas: "até 3", smart: "R$ 79", pro: "R$ 49", tef: "R$ 19" },
  },
  {
    faturamento: "Acima de R$ 85 mil até R$ 125 mil",
    sem: { maquinas: "até 3", smart: "R$ 89", pro: "R$ 49", tef: "R$ 29" },
    com: { maquinas: "até 4", smart: "R$ 69", pro: "R$ 39", tef: "R$ 19" },
  },
  {
    faturamento: "Acima de R$ 125 mil até R$ 250 mil",
    sem: { maquinas: "até 4", smart: "R$ 89", pro: "R$ 29", tef: "R$ 29" },
    com: { maquinas: "até 5", smart: "R$ 69", pro: "R$ 29", tef: "R$ 19" },
  },
  {
    faturamento: "Acima de R$ 250 mil",
    sem: { maquinas: "até 5", smart: "R$ 89", pro: "R$ 29", tef: "R$ 29" },
    com: { maquinas: "até 6", smart: "R$ 69", pro: "R$ 29", tef: "R$ 19" },
  },
];

export default function TabelaIsencaoSection() {
  return (
    <section className="bg-white">
      <div className="max-w-360 mx-auto px-7.5 lg:px-25 py-14 lg:py-20 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <h2 className="section-title text-azul">
            Taxas e condições de isenção de aluguel
          </h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black text-center max-w-[666px]">
            Os valores podem variar conforme o número de maquininhas contratadas
          </p>
        </div>

        <div className="w-full max-w-[1087px] overflow-x-auto">
          <div className="min-w-[800px] flex flex-col gap-3">
            {/* Main header */}
            <div className="grid [grid-template-columns:200px_repeat(8,_minmax(0,1fr))] gap-1">
              <div />
              <div className="col-span-4 border border-[#BFBFBF] rounded-lg py-3 px-4 text-center text-[14px] lg:text-[16px] text-black">
                azulzinha <strong className="font-bold">SEM</strong> antecipação
              </div>
              <div className="col-span-4 bg-laranja rounded-lg py-3 px-4 text-center text-[14px] lg:text-[16px] text-white font-bold">
                azulzinha COM* antecipação
              </div>
            </div>

            {/* Sub header */}
            <div className="grid [grid-template-columns:200px_repeat(8,_minmax(0,1fr))] gap-1">
              <div className="border border-[#BFBFBF] rounded-lg py-3 px-4 text-center text-[13px] lg:text-[14px] text-azul">
                Faturamento / Mês
              </div>
              <div className="bg-laranja rounded-lg py-3 px-2 text-center text-[13px] lg:text-[14px] text-white">
                Número de máquinas
              </div>
              <div className="bg-laranja rounded-lg py-3 px-2 text-center text-[13px] lg:text-[14px] text-white">
                Smart
              </div>
              <div className="bg-laranja rounded-lg py-3 px-2 text-center text-[13px] lg:text-[14px] text-white">
                Pro
              </div>
              <div className="bg-laranja rounded-lg py-3 px-2 text-center text-[13px] lg:text-[14px] text-white">
                TEF
              </div>
              <div className="bg-laranja rounded-lg py-3 px-2 text-center text-[13px] lg:text-[14px] text-white">
                Número de máquinas
              </div>
              <div className="bg-laranja rounded-lg py-3 px-2 text-center text-[13px] lg:text-[14px] text-white">
                Smart
              </div>
              <div className="bg-laranja rounded-lg py-3 px-2 text-center text-[13px] lg:text-[14px] text-white">
                Pro
              </div>
              <div className="bg-laranja rounded-lg py-3 px-2 text-center text-[13px] lg:text-[14px] text-white">
                TEF
              </div>
            </div>

            {/* Data rows */}
            {tableData.map((row, i) => (
              <div key={i} className="grid [grid-template-columns:200px_repeat(8,_minmax(0,1fr))] gap-1">
                <div className="bg-azul rounded-lg py-3 px-4 text-center text-[13px] lg:text-[14px] text-white flex items-center justify-center">
                  {row.faturamento}
                </div>
                <div className="bg-[#E8E8E8] rounded-lg py-3 px-2 text-center text-[13px] lg:text-[14px] text-black flex items-center justify-center">
                  {row.sem.maquinas}
                </div>
                <div className="bg-[#E8E8E8] rounded-lg py-3 px-2 text-center text-[13px] lg:text-[14px] text-black flex items-center justify-center">
                  {row.sem.smart}
                </div>
                <div className="bg-[#E8E8E8] rounded-lg py-3 px-2 text-center text-[13px] lg:text-[14px] text-black flex items-center justify-center">
                  {row.sem.pro}
                </div>
                <div className="bg-[#E8E8E8] rounded-lg py-3 px-2 text-center text-[13px] lg:text-[14px] text-black flex items-center justify-center">
                  {row.sem.tef}
                </div>
                <div className="bg-[#F9F9F9] rounded-lg py-3 px-2 text-center text-[13px] lg:text-[14px] text-black flex items-center justify-center">
                  {row.com.maquinas}
                </div>
                <div className="bg-[#F9F9F9] rounded-lg py-3 px-2 text-center text-[13px] lg:text-[14px] text-black flex items-center justify-center">
                  {row.com.smart}
                </div>
                <div className="bg-[#F9F9F9] rounded-lg py-3 px-2 text-center text-[13px] lg:text-[14px] text-black flex items-center justify-center">
                  {row.com.pro}
                </div>
                <div className="bg-[#F9F9F9] rounded-lg py-3 px-2 text-center text-[13px] lg:text-[14px] text-black flex items-center justify-center">
                  {row.com.tef}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-[14px] leading-[1.4] text-cinza text-center max-w-[784px]">
          <p>*100% de isenção de aluguel</p>
          <p>
            *<span className="underline">azulzinha aproxima</span>: As taxas são
            as mesmas das maquininhas. Sem custo de adesão ou aluguel.
          </p>
        </div>

        <a href="#" className="btn-laranja">
          Peça a sua azulzinha
        </a>
      </div>
    </section>
  );
}
