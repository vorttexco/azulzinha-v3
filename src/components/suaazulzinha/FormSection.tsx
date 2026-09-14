"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  isBlockedCnae,
  parseLeadErrorMessage,
  submitLead,
} from "@/lib/leads";
import { formatCnpj, isValidCnpj } from "@/lib/cnpj";

const inputClass =
  "w-full border border-[#D9D9D9] rounded-[6px] px-4 py-3 text-[16px] text-black placeholder-[#999] outline-none focus:border-azul disabled:opacity-60";

const FATURAMENTO_OPTIONS = [
  "Até R$10.000",
  "Entre R$10.000 e R$30.000",
  "Entre R$30.000 e R$80.000",
  "Entre R$80.000 e R$250.000",
  "Acima de R$250.000",
] as const;

const BLOCKED_CNAE_MESSAGE =
  "A azulzinha agradece seu interesse!<br>Fale com seu Gerente PJ Caixa e veja as oportunidades que temos para você!";

const formatCelular = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .slice(0, 15);
};

const formatCEP = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .slice(0, 9);
};

const formatCNAE = (value: string) => {
  return value.replace(/\D/g, "").slice(0, 7);
};

const formSchema = z.object({
  cnpj: z
    .string()
    .refine(isValidCnpj, {
      message: "CNPJ Inválido, verifique as informações inseridas",
    }),
  cnae: z
    .string()
    .regex(/^\d{7}$/, {
      message: "CNAE é obrigatório",
    }),
  nome: z
    .string()
    .min(1, "Dados Inválidos, verifique as informações inseridas"),
  email: z
    .string()
    .email("E-mail Inválido, verifique as informações inseridas"),
  celular: z
    .string()
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, {
      message: "Número de Telefone Inválido, verifique as informações inseridas",
    }),
  cep: z
    .string()
    .regex(/^\d{5}-\d{3}$/, {
      message: "CEP Inválido",
    }),
  faturamento: z.string().min(1, "Faturamento é obrigatório"),
  cbtermo: z.boolean().refine((value) => value === true, {
    message: "É necessário autorizar o compartilhamento dos dados",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function FormSection() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [isErrorOpen, setIsErrorOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      faturamento: "",
      cbtermo: false,
    },
  });

  const createMaskedRegister = (
    fieldName: keyof FormData,
    formatter: (value: string) => string
  ) => {
    const baseRegister = register(fieldName);
    return {
      ...baseRegister,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatter(e.target.value);
        e.target.value = formatted;
        baseRegister.onChange(e);
      },
    };
  };

  const onSubmit = async (data: FormData) => {
    if (isBlockedCnae(data.cnae)) {
      setErrorMessages([BLOCKED_CNAE_MESSAGE]);
      setIsErrorOpen(true);
      return;
    }

    setIsSubmitting(true);
    setErrorMessages([]);

    const result = await submitLead(data);

    setIsSubmitting(false);

    if (result.ok) {
      reset();
      router.push("/obrigado");
      return;
    }

    setErrorMessages(result.messages);
    setIsErrorOpen(true);
  };

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px]">
        <div className="w-full max-w-[809px] mx-auto flex flex-col gap-6">
          <p className="text-[18px] leading-[1.5] text-black text-center">
            Preencha o formulário abaixo com os seus dados e em breve um gerente
            da CAIXA entrará em contato para apresentar taxas personalizadas para
            sua empresa e tirar todas as suas dúvidas.
          </p>

          <form
            className="flex flex-col gap-6 pt-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full lg:flex-1">
                <input
                  {...createMaskedRegister("cnpj", formatCnpj)}
                  type="text"
                  placeholder="CNPJ"
                  className={inputClass}
                  maxLength={18}
                  disabled={isSubmitting}
                />
                {errors.cnpj && (
                  <p className="text-laranja text-[14px] mt-2">
                    {errors.cnpj.message}
                  </p>
                )}
              </div>
              <div className="w-full lg:flex-1">
                <input
                  {...createMaskedRegister("cnae", formatCNAE)}
                  type="text"
                  placeholder="CNAE"
                  className={inputClass}
                  maxLength={7}
                  disabled={isSubmitting}
                />
                {errors.cnae && (
                  <p className="text-laranja text-[14px] mt-2">
                    {errors.cnae.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <input
                {...register("nome")}
                type="text"
                placeholder="Nome de contato"
                className={inputClass}
                disabled={isSubmitting}
              />
              {errors.nome && (
                <p className="text-laranja text-[14px] mt-2">
                  {errors.nome.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="E-mail"
                className={inputClass}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-laranja text-[14px] mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...createMaskedRegister("celular", formatCelular)}
                type="tel"
                placeholder="Celular de contato"
                className={inputClass}
                maxLength={15}
                disabled={isSubmitting}
              />
              {errors.celular && (
                <p className="text-laranja text-[14px] mt-2">
                  {errors.celular.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...createMaskedRegister("cep", formatCEP)}
                type="text"
                placeholder="CEP"
                className={inputClass}
                maxLength={9}
                disabled={isSubmitting}
              />
              {errors.cep && (
                <p className="text-laranja text-[14px] mt-2">
                  {errors.cep.message}
                </p>
              )}
            </div>

            <div>
              <div className="relative">
                <select
                  {...register("faturamento")}
                  defaultValue=""
                  disabled={isSubmitting}
                  className="w-full appearance-none border border-[#D9D9D9] rounded-[6px] px-4 py-3 text-[16px] text-[#999] outline-none focus:border-azul bg-white disabled:opacity-60"
                >
                  <option value="" disabled>
                    Faturamento mensal em cartão
                  </option>
                  {FATURAMENTO_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-[28px] h-[28px] rounded-full bg-azul flex items-center justify-center">
                  <svg width="12" height="8" viewBox="0 0 12 6" fill="none">
                    <path
                      d="M1 1L6 6L11 1"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              {errors.faturamento && (
                <p className="text-laranja text-[14px] mt-2">
                  {errors.faturamento.message}
                </p>
              )}
            </div>

            <label className="flex items-start gap-3 cursor-pointer pt-[37px]">
              <input
                type="checkbox"
                {...register("cbtermo")}
                disabled={isSubmitting}
                className="mt-[2px] accent-azul shrink-0"
              />
              <span className="text-[14px] leading-[1.5] text-black">
                Estou ciente de que, ao preencher o formulário acima e clicar em
                &quot;enviar&quot;, autorizo o compartilhamento dos dados da
                empresa e do representante legal com a Fiserv e seus parceiros,
                bem como o recebimento de contato em razão do meu interesse em
                saber mais sobre a azulzinha
              </span>
            </label>
            {errors.cbtermo && (
              <p className="text-laranja text-[14px] -mt-4 pl-6">
                {errors.cbtermo.message}
              </p>
            )}

            <p className="text-[14px] leading-[1.5] text-cinza pl-6">
              Você pode consultar o detalhamento sobre o compartilhamento e
              tratamento dos seus dados no{" "}
              <a
                href="https://www.caixa.gov.br/privacidade/aviso-de-privacidade/Paginas/default.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Aviso de Privacidade CAIXA
              </a>
              ,{" "}
              <a
                href="https://www.caixacartoes.caixa.gov.br/aviso-de-privacidade/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Aviso de Privacidade CAIXA Cartões
              </a>{" "}
              e na{" "}
              <a href="/politica-de-privacidade" className="underline">
                Política de Privacidade Fiserv
              </a>
              .
            </p>

            <div className="flex justify-center mt-[26px]">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-laranja px-10 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {isSubmitting && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/60 gap-4">
          <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          <p className="text-white text-[16px] lg:text-[18px]">
            Aguarde enquanto enviamos seus dados.
          </p>
        </div>
      )}

      <Dialog open={isErrorOpen} onOpenChange={setIsErrorOpen}>
        <DialogContent className="w-full max-w-[480px] rounded-[12px] p-8 gap-4 flex flex-col">
          <DialogHeader>
            <DialogTitle className="text-[22px] font-normal text-azul leading-[1.3]">
              Não foi possível enviar
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-3 text-[16px] leading-[1.5] text-black">
            {errorMessages.map((message) => (
              <p
                key={message}
                dangerouslySetInnerHTML={{
                  __html: parseLeadErrorMessage(message),
                }}
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
