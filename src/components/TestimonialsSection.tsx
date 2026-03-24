const testimonials = [
  {
    quote:
      "O suporte da Azulzinha é excelente, sempre fui muito bem atendida. A maquininha é rápida, funciona bem com o sinal e nunca me deixou na mão. Já recomendei para vários clientes porque confio de verdade no serviço.",
    author: "Maria Betânia T Dantas",
    business: "Loja 2 Irmãos",
    opacity: "opacity-20",
  },
  {
    quote:
      "Minha querida azulzinha é a verdadeira heroína do dia a dia! Sempre pronta, ágil e eficiente, facilita o meu trabalho e a vida dos meus clientes.",
    author: "Claudinei Pires",
    business: "Utilar",
    opacity: "opacity-20",
  },
  {
    quote:
      "A azulzinha é prática, rápida e nunca me deu dor de cabeça. O atendimento sempre foi ótimo nas raras vezes que precisei. A bateria dura o dia todo, perfeita para o comércio. Recomendo sem medo!",
    author: "Maria José Rolim Pinheiro",
    business: "Esfiharia Serra da Bragança",
    opacity: "opacity-100",
  },
  {
    quote:
      "A azulzinha é fácil de usar e agiliza os pagamentos, o que é essencial no nosso dia a dia. O atendimento sempre foi rápido e eficiente. Mesmo sem minha presença, a equipe consegue operar com autonomia. Recomendo com confiança!",
    author: "Viviane Aparecida de Oliveira",
    business: "Padaria Okinawa",
    opacity: "opacity-20",
  },
  {
    quote:
      "O suporte da Azulzinha é excelente, sempre fui muito bem atendida. A maquininha é rápida, funciona bem com o sinal e nunca me deixou na mão. Já recomendei para vários clientes porque confio de verdade no serviço.",
    author: "Maria Betânia T Dantas",
    business: "Loja 2 Irmãos",
    opacity: "opacity-20",
  },
];

function ScrollDots() {
  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <span className="w-8 h-1 rounded-full bg-[#FC8F01]" />
      <span className="w-8 h-1 rounded-full bg-[#E1E1E1]" />
      <span className="w-8 h-1 rounded-full bg-[#E1E1E1]" />
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-center text-[38px] leading-[1.3] font-bold text-[#006CAD] px-4">
          <span className="text-[#FC8F01]">Histórias</span> reais de quem já é
          azulzinha
        </h2>

        <div className="mt-[60px] flex items-stretch justify-center gap-6 px-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`w-[350px] shrink-0 bg-white rounded-xl p-8 flex flex-col justify-between shadow-[0_4px_10px_rgba(0,0,0,0.08)] ${testimonial.opacity}`}
            >
              <p className="text-base italic text-black leading-relaxed">
                <span className="text-2xl font-serif leading-none">
                  &ldquo;
                </span>
                {testimonial.quote}
              </p>
              <div className="mt-6">
                <p className="font-bold text-[#006CAD]">
                  {testimonial.author}
                </p>
                <p className="text-black">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>

        <ScrollDots />
      </div>
    </section>
  );
}
