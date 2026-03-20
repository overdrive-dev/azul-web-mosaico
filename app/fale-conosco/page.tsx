import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import FaleConoscoSection from "@/components/FaleConoscoSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fale Conosco",
  description: "Entre em contato com a Azul Compósitos. Solicite orçamentos, tire dúvidas técnicas e conheça nossas soluções em fibra de vidro.",
};

export default function FaleConoscoPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner
        title="Fale Conosco"
        subtitle="Contato"
        description="Estamos à disposição para esclarecer dúvidas, apresentar orçamentos e discutir soluções sob medida para o seu projeto."
        backgroundImage="/images/fale-conosco-capa.jpg"
        backgroundImageMobile="/images/fale-conosco-capa-mobile.jpg"
      />

      <FaleConoscoSection title="" />

      <Footer />
    </main>
  );
}
