import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Perfis Pultrudados em Fibra de Vidro",
  description: "Perfis pultrudados em fibra de vidro para substituir estruturas metálicas em ambientes agressivos. Resistência estrutural equivalente ao aço, totalmente imunes à corrosão.",
};

const aplicacoes = [
  "Plataformas de petróleo e gás",
  "Estruturas marítimas e portuárias",
  "Construções em regiões costeiras",
  "Indústrias químicas",
  "Saneamento e tratamento de efluentes",
  "Infraestrutura urbana litorânea",
];

const vantagens = [
  "Resistência mecânica comparável ao aço",
  "Total imunidade à corrosão marinha e química",
  "Vida útil extremamente elevada",
  "Ausência de oxidação",
  "Manutenção praticamente inexistente",
  "Isolamento elétrico",
  "Leveza estrutural e facilidade de instalação",
];

export default function PerfisPultrudadosPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Block 1: Intro — text left, image right */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center px-6 py-16 sm:py-24 lg:w-1/2 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-md">
              <p className="text-sm sm:text-base font-semibold text-azul-600">Produto</p>
              <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">
                Perfis Pultrudados em Fibra de Vidro
              </h1>
              <p className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600">
                Projetados para substituir estruturas metálicas em ambientes agressivos, os perfis pultrudados em fibra de vidro oferecem resistência estrutural equivalente ao aço, com a vantagem decisiva de serem totalmente imunes à corrosão.
              </p>
              <p className="mt-3 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600">
                São especialmente indicados para edificações costeiras, plataformas offshore, portos e indústrias químicas, onde o aço sofre deterioração constante devido à maresia e à ação química.
              </p>
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/perfis-multiplos.jpg" alt="Perfis pultrudados em ambiente industrial" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Aplicações — image left, text right */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:order-1 lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/perfis-pultrudados-plataforma-offshore.JPG" alt="Plataforma offshore com perfis pultrudados" fill className="object-cover" />
            </div>
          </div>
          <div className="flex items-center px-6 py-16 sm:py-24 lg:order-2 lg:w-1/2 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-md">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">
                Aplicações Estratégicas
              </h2>
              <ul role="list" className="mt-6 space-y-3">
                {aplicacoes.map((item) => (
                  <li key={item} className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-5 flex-none text-azul-600" />
                    <span className="text-base sm:text-lg lg:text-xl text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Vantagens — text left, image right */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center px-6 py-16 sm:py-24 lg:w-1/2 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-md">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">
                Vantagens Estruturais
              </h2>
              <ul role="list" className="mt-6 space-y-3">
                {vantagens.map((item) => (
                  <li key={item} className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="mt-0.5 size-5 flex-none text-azul-600" />
                    <span className="text-base sm:text-lg lg:text-xl text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/perfis-pultrudados-torre-estrutural.jpeg" alt="Estrutura torre com perfis pultrudados" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
