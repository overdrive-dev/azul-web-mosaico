import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projetos Especiais em Fibra de Vidro",
  description: "Inteligência aplicada em fibra de vidro para soluções técnicas de alta complexidade, onde o convencional não atende.",
};

export default function ProjetosEspeciaisPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner
        title="Projetos Especiais"
        subtitle="Produto"
        description="Inteligência aplicada em fibra de vidro para soluções técnicas de alta complexidade, onde o convencional não atende."
        overlayClass="bg-gold-900/60"
      />

      <section className="px-6 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base sm:text-lg text-gray-600">
            Conteúdo em breve — entre em contato para mais informações.
          </p>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
