import Link from "next/link";

export default function EMaisSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-[16px] lg:text-[22px] leading-[1.4] text-black max-w-[837px]">
            <span className="text-azul font-semibold">E mais:</span> serviços exclusivos da azulzinha que o varejo já conhece e confia.
          </p>
          <Link href="/antecipacao-de-vendas" className="btn-laranja">
            Saiba mais
          </Link>
        </div>
      </div>
    </section>
  );
}
