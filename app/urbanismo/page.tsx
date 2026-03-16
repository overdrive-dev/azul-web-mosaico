import type { Metadata } from "next";
import Image from "next/image";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Urbanismo em Fibra de Vidro",
  description: "Estruturas duráveis em fibra de vidro para espaços urbanos expostos ao tempo, à maresia e ao uso intenso.",
};

export default function UrbanismoPage() {
  return (
    <main className="min-h-screen bg-white">
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center px-6 py-16 sm:py-24 lg:w-1/2 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-md">
              <p className="text-sm sm:text-base font-semibold text-azul-600">Produto</p>
              <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">
                Urbanismo
              </h1>
              <p className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600">
                Estruturas duráveis para espaços urbanos expostos ao tempo, à maresia e ao uso intenso.
              </p>
              <p className="mt-6 text-sm text-gray-500 italic">
                Conteúdo em breve — entre em contato para mais informações.
              </p>
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/urbanismo-capa.jpg" alt="Urbanismo em fibra de vidro" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
