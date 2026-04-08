import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "azulzinha - Maquininha de Cartão da CAIXA",
  description:
    "Gestão simplificada, segurança, mais vendas e pagamentos rápidos com a azulzinha. Maquininha de cartão CAIXA com as melhores taxas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
