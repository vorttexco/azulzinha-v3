import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import NotFoundContent from "@/components/not-found/NotFoundContent";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Not Found | azulzinha da CAIXA",
  description: "A página que tentou acessar não está disponível.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <NotFoundContent />
      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
}
