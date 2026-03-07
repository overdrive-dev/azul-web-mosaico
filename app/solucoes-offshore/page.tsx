import type { Metadata } from "next";
import Image from "next/image";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Soluções Offshore em Fibra de Vidro",
  description: "Soluções estruturais em fibra de vidro para plataformas offshore, FPSOs e ambientes marítimos de alta corrosão.",
};

export default function SolucoesOffshorePage() {
  return (
    <main className="min-h-screen bg-white">
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center px-6 py-16 sm:py-24 lg:w-1/2 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-xl">
              <p className="text-sm font-semibold text-azul-600">Produto</p>
              <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">
                Soluções Offshore
              </h1>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Soluções estruturais completas em fibra de vidro para plataformas offshore, FPSOs e ambientes marítimos sujeitos à corrosão extrema por maresia e agentes químicos.
              </p>
              <p className="mt-6 text-sm text-gray-500 italic">
                Conteúdo em breve — entre em contato para mais informações.
              </p>
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/foto-01.jpeg" alt="Plataforma offshore com soluções em fibra de vidro" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
