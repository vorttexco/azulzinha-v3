import Image from "next/image";
import { asset } from "@/lib/assets";

const steps = [
  "Seu cliente deve acessar o App VR e VOCÊ e clicar em “Pagar QR Code\";",
  "Após as instruções iniciais ele deve clicar em “Permitir” para que o aplicativo acesse a câmera do seu aparelho;",
  "Depois, basta posicionar a câmera do celular para realizar a leitura do QR Code;",
  "Por fim, é só conferir os dados da compra, digitar a senha e clicar em “Confirmar”;",
  "Pronto! O cliente receberá a confirmação da transação na tela!",
];

export default function QrCodeStepsSection() {
  return (
    <section className="bg-[#F2F2F2]">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px] py-14 lg:py-20">
        <header className="text-center max-w-[860px] mx-auto">
          <h2 className="section-title text-azul">Ajude o seu cliente a fazer o primeiro pagamento</h2>
          <p className="mt-4 text-[16px] lg:text-[18px] leading-[1.4] text-black">
            Passo a passo para ativar o pagamento por QR Code no App VR:
          </p>
        </header>

        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-12 mt-12">
          <Image
            src={asset("/images/bandeiras-vouchers/celular-vr.png")}
            alt="Celular com o aplicativo VR aberto para pagar por QR Code"
            width={572}
            height={793}
            className="w-full max-w-[306px] h-auto mx-auto lg:mx-0 shrink-0"
          />
          <ul className="flex flex-col gap-3">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;
              return (
                <li key={step} className="flex items-center gap-3">
                  <Image
                    src={asset(
                      isLast
                        ? "/images/bandeiras-vouchers/check.png"
                        : "/images/bandeiras-vouchers/seta-direita.png",
                    )}
                    alt=""
                    width={33}
                    height={33}
                    className="w-[33px] h-[33px] object-contain shrink-0"
                  />
                  <span className="text-[16px] lg:text-[18px] leading-[1.4] text-black">{step}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
