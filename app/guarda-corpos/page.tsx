import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import HeroBanner from "@/components/HeroBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Guarda-Corpos em Fibra de Vidro",
  description: "Guarda-corpos em fibra de vidro para aplicações industriais, marítimas e urbanas. Resistência total à corrosão, durabilidade prolongada e conformidade com normas técnicas.",
};

const diferenciais = [
  "Resistência total à corrosão marinha e química",
  "Durabilidade prolongada",
  "Baixa manutenção",
  "Leveza estrutural",
  "Customização dimensional",
  "Conformidade com normas técnicas",
];

export default function GuardaCorposPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner
        title="Guarda-Corpos em Fibra de Vidro"
        subtitle="Produto"
        description="Sistemas de proteção desenvolvidos para aplicações industriais, marítimas e urbanas sujeitas à corrosão constante."
        overlayClass="bg-azul-900/60"
      />

      {/* Block 1: Intro — text left, image right */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center px-6 py-16 sm:py-24 lg:w-1/2 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-xl">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
                Proteção estrutural durável
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Sistemas de proteção desenvolvidos para aplicações industriais, marítimas e urbanas sujeitas à corrosão constante.
              </p>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                Indicados para plataformas offshore, portos e edificações costeiras, oferecem resistência estrutural elevada e vida útil superior às soluções metálicas.
              </p>
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/foto-02.jpeg" alt="Guarda-corpos em plataforma offshore" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Diferenciais — image left, text right */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:order-1 lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/foto-04.jpg" alt="Guarda-corpos em indústria química" fill className="object-cover" />
            </div>
          </div>
          <div className="flex items-center px-6 py-16 sm:py-24 lg:order-2 lg:w-1/2 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-xl">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
                Diferenciais
              </h2>
              <ul role="list" className="mt-6 space-y-3">
                {diferenciais.map((item) => (
                  <li key={item} className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-5 flex-none text-azul-600" />
                    <span className="text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-500 italic">
                Disponíveis em resinas Poliéster, Estervinílica e Fenólica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
