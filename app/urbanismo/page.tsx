import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Urbanismo em Fibra de Vidro",
  description: "Estruturas duráveis em fibra de vidro para espaços urbanos expostos ao tempo, à maresia e ao uso intenso.",
};

export default function UrbanismoPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner
        title="Urbanismo"
        subtitle="Produto"
        description="Estruturas duráveis para espaços urbanos expostos ao tempo, à maresia e ao uso intenso."
        overlayClass="bg-azul-900/60"
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
