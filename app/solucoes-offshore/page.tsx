import type { Metadata } from "next";
import SkeletonImage from "@/components/SkeletonImage";
import FaleConoscoSection from "@/components/FaleConoscoSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Soluções Offshore em Fibra de Vidro",
  description: "Soluções estruturais em fibra de vidro para plataformas offshore, FPSOs e ambientes marítimos de alta corrosão.",
};

export default function SolucoesOffshorePage() {
  return (
    <main className="min-h-screen">
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center px-6 py-16 sm:py-24 lg:w-1/2 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-md">
              <p className="text-sm sm:text-base font-semibold text-azul-600">Produto</p>
              <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">
                Soluções Offshore
              </h1>
              <p className="mt-4 text-sm sm:text-base lg:text-lg leading-normal text-gray-600">
                Soluções estruturais completas em fibra de vidro para plataformas offshore, FPSOs e ambientes marítimos sujeitos à corrosão extrema por maresia e agentes químicos.
              </p>
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <SkeletonImage src="/images/piso-offshore-2.jpg" alt="Plataforma offshore com soluções em fibra de vidro" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <FaleConoscoSection title="Entre em contato" />
      <Footer />
    </main>
  );
}
