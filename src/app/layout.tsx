import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const caixaFont = localFont({
  src: [
    { path: "./fonts/CAIXAStd-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/CAIXAStd-Bold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/CAIXAStd-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-caixa",
  display: "swap",
});

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
    <html lang="pt-BR" className={`scroll-smooth ${caixaFont.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
