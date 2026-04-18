import Link from "next/link";

export default function AjudaCtaSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20">
        <div className="flex flex-col items-center gap-6 text-center max-w-[837px] mx-auto">
          <p className="text-[16px] lg:text-[18px] leading-[1.4] text-black">
            Quer saber mais sobre os modelos, condições de contratação, entrega, meios de pagamento, habilitação e muito mais sobre a azulzinha? Confira as perguntas frequentes e a nossa galeria de vídeos.
          </p>
          <Link href="/ajuda" className="btn-laranja">
            Ir para ajuda
          </Link>
        </div>
      </div>
    </section>
  );
}
