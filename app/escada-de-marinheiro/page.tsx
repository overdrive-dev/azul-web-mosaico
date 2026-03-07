import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Escadas de Marinheiro em Fibra de Vidro",
  description: "Escadas de marinheiro em fibra de vidro para acesso vertical em estruturas expostas à maresia e agentes químicos. Imunidade total à corrosão e segurança permanente.",
};

const aplicacoes = [
  "Plataformas de petróleo",
  "Torres industriais",
  "Reservatórios",
  "Portos e estruturas marítimas",
  "Indústrias químicas",
];

const diferenciais = [
  "Imunidade à corrosão",
  "Resistência estrutural elevada",
  "Isolamento elétrico",
  "Leveza e facilidade de instalação",
  "Vida útil extremamente elevada",
];

export default function EscadaDeMarinheiroPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Block 1: Intro — text left, image right */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center px-6 py-16 sm:py-24 lg:w-1/2 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-xl">
              <p className="text-sm font-semibold text-azul-600">Produto</p>
              <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">
                Escadas de Marinheiro em Fibra de Vidro
              </h1>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Desenvolvidas para acesso vertical em estruturas expostas à maresia e agentes químicos, as escadas de marinheiro em fibra de vidro substituem definitivamente as metálicas em plataformas offshore, indústrias químicas e edificações costeiras.
              </p>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                Com resistência estrutural comparável ao aço e total imunidade à corrosão, oferecem segurança permanente e custo de manutenção praticamente inexistente ao longo do tempo.
              </p>
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/escada-marinheiro-capa.png" alt="Escada de marinheiro" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Aplicações — image left, text right */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:order-1 lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/escada-marinheiro-capa.png" alt="Escada de marinheiro em indústria" fill className="object-cover" />
            </div>
          </div>
          <div className="flex items-center px-6 py-16 sm:py-24 lg:order-2 lg:w-1/2 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-xl">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
                Aplicações
              </h2>
              <ul role="list" className="mt-6 space-y-3">
                {aplicacoes.map((item) => (
                  <li key={item} className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-5 flex-none text-azul-600" />
                    <span className="text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Diferenciais — text left, image right */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center px-6 py-16 sm:py-24 lg:w-1/2 lg:px-12 lg:py-32">
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
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/escada-marinheiro-reservatorio.JPG" alt="Escada de marinheiro em reservatório" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
