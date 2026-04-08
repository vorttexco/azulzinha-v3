"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const inputClass =
  "w-full border border-[#D9D9D9] rounded-[6px] px-4 py-3 text-[16px] text-black placeholder-[#999] outline-none focus:border-azul";

// Funções de formatação
const formatCNPJ = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .slice(0, 18);
};

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
    .regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, {
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
  faturamento: z
    .string()
    .min(1, "Faturamento é obrigatório"),
});

type FormData = z.infer<typeof formSchema>;

export default function FormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // Criar handlers que formata e registra ao mesmo tempo
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

  const onSubmit = (data: FormData) => {
    console.log("Formulário válido:", data);
    // Aqui você enviaria os dados para o servidor
  };

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-[30px] lg:px-[100px]">
        <div className="w-full max-w-[809px] mx-auto flex flex-col gap-6">
          {/* Header text */}
          <p className="text-[18px] leading-[1.5] text-black text-center">
            Preencha o formulário abaixo com os seus dados e em breve um gerente
            da CAIXA entrará em contato para apresentar taxas personalizadas para
            sua empresa e tirar todas as suas dúvidas.
          </p>

          <form className="flex flex-col gap-6 pt-10" onSubmit={handleSubmit(onSubmit)}>
            {/* CNPJ + CNAE */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full lg:flex-1">
                <input
                  {...createMaskedRegister("cnpj", formatCNPJ)}
                  type="text"
                  placeholder="CNPJ"
                  className={inputClass}
                  maxLength={18}
                />
                {errors.cnpj && (
                  <p className="text-laranja text-[14px] mt-2">{errors.cnpj.message}</p>
                )}
              </div>
              <div className="w-full lg:flex-1">
                <input
                  {...createMaskedRegister("cnae", formatCNAE)}
                  type="text"
                  placeholder="CNAE"
                  className={inputClass}
                  maxLength={7}
                />
                {errors.cnae && (
                  <p className="text-laranja text-[14px] mt-2">{errors.cnae.message}</p>
                )}
              </div>
            </div>

            {/* Nome de contato */}
            <div>
              <input
                {...register("nome")}
                type="text"
                placeholder="Nome de contato"
                className={inputClass}
              />
              {errors.nome && (
                <p className="text-laranja text-[14px] mt-2">{errors.nome.message}</p>
              )}
            </div>

            {/* E-mail */}
            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="E-mail"
                className={inputClass}
              />
              {errors.email && (
                <p className="text-laranja text-[14px] mt-2">{errors.email.message}</p>
              )}
            </div>

            {/* Celular de contato */}
            <div>
              <input
                {...createMaskedRegister("celular", formatCelular)}
                type="tel"
                placeholder="Celular de contato"
                className={inputClass}
                maxLength={15}
              />
              {errors.celular && (
                <p className="text-laranja text-[14px] mt-2">{errors.celular.message}</p>
              )}
            </div>

            {/* CEP */}
            <div>
              <input
                {...createMaskedRegister("cep", formatCEP)}
                type="text"
                placeholder="CEP"
                className={inputClass}
                maxLength={9}
              />
              {errors.cep && (
                <p className="text-laranja text-[14px] mt-2">{errors.cep.message}</p>
              )}
            </div>

            {/* Faturamento mensal em cartão */}
            <div>
              <div className="relative">
                <select
                  {...register("faturamento")}
                  defaultValue=""
                  className="w-full appearance-none border border-[#D9D9D9] rounded-[6px] px-4 py-3 text-[16px] text-[#999] outline-none focus:border-azul bg-white"
                >
                  <option value="" disabled>
                    Faturamento mensal em cartão
                  </option>
                  <option value="ate10k">Até R$10.000</option>
                  <option value="10k-30k">Entre R$10.000 e R$30.000</option>
                  <option value="30k-80k">Entre R$30.000 e R$80.000</option>
                  <option value="80k-250k">Entre R$80.000 e R$250.000</option>
                  <option value="acima250k">Acima de R$250.000</option>
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
                <p className="text-laranja text-[14px] mt-2">{errors.faturamento.message}</p>
              )}
            </div>

            {/* Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer pt-[37px]">
              <input
                type="checkbox"
                required
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

            {/* Privacy links */}
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
              <a
                href="https://azulzinhadacaixa.com.br/politica-de-privacidade"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Política de Privacidade Fiserv
              </a>
              .
            </p>

            {/* Submit */}
            <div className="flex justify-center mt-[26px]">
              <button type="submit" className="btn-laranja px-10">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
