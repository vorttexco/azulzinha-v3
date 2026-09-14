import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Aplicativo da azulzinha | azulzinha da CAIXA",
  description:
    "Quando o assunto é cuidar das suas vendas em tempo real, conte com as facilidades do App da azulzinha da CAIXA. Baixe agora a última versão!",
  path: "/app",
});

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return children;
}
