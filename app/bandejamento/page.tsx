import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bandejamento e Eletrocalhas em Fibra de Vidro",
  description: "Sistemas de bandejamento, leitos e eletrocalhas em fibra de vidro para plataformas offshore, refinarias, portos e indústrias químicas. Integridade estrutural permanente.",
};

const diferenciais = [
  "Imunidade à corrosão marinha e química",
  "Resistência estrutural elevada",
  "Isolamento elétrico",
  "Baixa manutenção",
  "Leveza e logística facilitada",
];

export default function BandejamentoPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Block 1: Intro — text left, image right */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center px-6 py-16 sm:py-24 lg:w-1/2 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-xl">
              <p className="text-sm font-semibold text-azul-600">Produto</p>
              <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">
                Sistemas de Bandejamento em Fibra de Vidro
              </h1>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Projetados para ambientes onde a corrosão compromete estruturas metálicas, os sistemas de leitos e eletrocalhas em fibra de vidro garantem integridade estrutural permanente em plataformas offshore, refinarias, portos e indústrias químicas.
              </p>
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/leitos-01.png" alt="Sistema de bandejamento em fibra de vidro" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Leitos — image left, text right */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:order-1 lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/leitos-02.png" alt="Leitos de cabos" fill className="object-cover" />
            </div>
          </div>
          <div className="flex items-center px-6 py-16 sm:py-24 lg:order-2 lg:w-1/2 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-xl">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
                Leitos
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Disponíveis nas versões leve e pesada, suportando até 75 kg/m e 150 kg/m respectivamente, com ampla linha de curvas e conexões.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Eletrocalhas — text left, image right */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center px-6 py-16 sm:py-24 lg:w-1/2 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-xl">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
                Eletrocalhas
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Versatilidade dimensional e montagem simplificada, sem necessidade de ferramental complexo.
              </p>
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/eletrocalhas.png" alt="Eletrocalhas em fibra de vidro" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Block 4: Diferenciais — image left, text right */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:order-1 lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/leitos-03.png" alt="Bandejamento e leitos" fill className="object-cover" />
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
