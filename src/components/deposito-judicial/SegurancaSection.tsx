import TrackedAnchor from "@/components/shared/TrackedAnchor";

interface SegurancaSectionProps {
  portalHref: string;
}

export default function SegurancaSection({ portalHref }: SegurancaSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-[30px] py-14 text-center lg:px-[100px] lg:py-20">
        <h2 className="section-title text-azul">Segurança em todas as etapas</h2>
        <p className="max-w-[802px] text-[16px] leading-[1.4] text-black lg:text-[18px]">
          As transações são realizadas em ambiente seguro, com tecnologias de autenticação e proteção de dados que ajudam a proporcionar uma experiência de pagamento confiável.
        </p>
        <TrackedAnchor
          href={portalHref}
          kind="cta"
          name="Acesse o Portal da CAIXA e faça seu pagamento"
          location="cta-section"
          className="btn-laranja inline-block"
        >
          Acesse o Portal da CAIXA e faça seu pagamento
        </TrackedAnchor>
      </div>
    </section>
  );
}
