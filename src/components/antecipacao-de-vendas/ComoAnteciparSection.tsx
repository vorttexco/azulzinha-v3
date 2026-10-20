import Link from "next/link";

const linkClass = "text-azul underline";

const steps = [
  {
    number: "1",
    title: "Abra o canal",
    text: (
      <>
        <span className="block">
          No{" "}
          <Link href="/app" className={linkClass}>
            App da azulzinha
          </Link>
          , clique em “Antecipar”, abaixo dos recebimentos do dia.
        </span>
        <span className="block">
          No{" "}
          <Link href="/portal" className={linkClass}>
            Portal da azulzinha
          </Link>
          , abra “Minhas Vendas” e selecione a aba “Antecipação”.
        </span>
        <span className="block">
          Na maquininha, na tela inicial, selecione “Menu” e “Antecipação”.
        </span>
      </>
    ),
  },
  {
    number: "2",
    title: "Escolha a modalidade",
    text: "Selecione antecipação automática ou eventual, de acordo com a frequência ou com o saldo que você quer adiantar.",
  },
  {
    number: "3",
    title: "Simule valor e taxa",
    text: "A simulação mostra montantes e taxas para você escolher a melhor opção antes de contratar.",
  },
  {
    number: "4",
    title: "Confirme a contratação",
    text: "Confirme a operação. Os recebíveis são creditados na sua conta.",
  },
];

export default function ComoAnteciparSection() {
  return (
    <section className="w-full bg-[#F4F4F4]">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="section-title text-azul">Como antecipar?</h2>
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black max-w-[802px]">
            Veja como é fácil antecipar seus recebíveis com a azulzinha.
          </p>
        </div>

        <div className="mt-8 lg:mt-[60px] grid grid-cols-1 lg:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex gap-4 lg:gap-6 bg-white rounded-[12px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.08)] p-6 lg:p-10"
            >
              <span className="flex items-center justify-center w-[38px] h-[38px] rounded-full bg-azul text-white text-[18px] leading-none shrink-0">
                {step.number}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[22px] leading-[1.4] text-azul">{step.title}</h3>
                <p className="flex flex-col gap-2 text-[16px] lg:text-[18px] leading-[1.4] text-black">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
