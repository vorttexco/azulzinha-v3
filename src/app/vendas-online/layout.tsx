import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Vendas online | azulzinha da CAIXA",
  description:
    "Conheça as soluções da azulzinha para vender no seu e-commerce, nas redes sociais e até mesmo em aplicativos de mensagens.",
  path: "/vendas-online",
});

export default function VendasOnlineLayout({ children }: { children: React.ReactNode }) {
  return children;
}
