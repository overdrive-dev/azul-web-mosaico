import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import HeroBanner from "@/components/HeroBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Grades de Piso em Fibra de Vidro",
  description: "Grades de piso em fibra de vidro para ambientes de alta agressividade química e marinha. Grades montadas e injetadas para plataformas offshore, portos e indústrias.",
};

const diferenciais = [
  "Resistência total à corrosão química e marinha",
  "Resistência dielétrica",
  "Alta durabilidade",
  "Baixa manutenção",
  "Instalação simplificada",
  "Ausência de valor de revenda",
];

export default function GradesDePisoPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner
        title="Grades de Piso em Fibra de Vidro"
        subtitle="Produto"
        description="Desenvolvidas para ambientes de alta agressividade química e marinha, substituem as grades metálicas com ampla superioridade em durabilidade."
        overlayClass="bg-azul-900/60"
      />

      {/* Block 1: Intro — text left, image right */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center px-6 py-16 sm:py-24 lg:w-1/2 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-xl">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
                Segurança estrutural permanente
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Desenvolvidas para ambientes de alta agressividade química e marinha, as grades em fibra de vidro substituem as metálicas com ampla superioridade em durabilidade.
              </p>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                Indicadas para plataformas offshore, portos, indústrias químicas e áreas industriais expostas à umidade constante, oferecem resistência estrutural elevada sem risco de corrosão.
              </p>
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/foto-09.jpg" alt="Grades de piso em ambiente industrial" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Grades Montadas — image left, text right */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:order-1 lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/foto-10.JPG" alt="Grades montadas de fibra de vidro" fill className="object-cover" />
            </div>
          </div>
          <div className="flex items-center px-6 py-16 sm:py-24 lg:order-2 lg:w-1/2 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-xl">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
                Grades Montadas
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Com vigas portantes pultrudadas no formato I, apresentam desempenho estrutural superior e alta capacidade de carga.
              </p>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                Podem atender ABNT NBR 15708 e classificadoras ABS, BV e DNV, inclusive com nível L2 de resistência ao fogo quando produzidas em resina fenólica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Grades Injetadas — text left, image right */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center px-6 py-16 sm:py-24 lg:w-1/2 lg:px-12 lg:py-32">
            <div className="mx-auto max-w-xl">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
                Grades Injetadas
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Modelos com malha simétrica e resistência bidirecional, leves e de rápida instalação, ideais para áreas técnicas e industriais.
              </p>
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/foto-03.jpeg" alt="Passarela com grades de piso" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Block 4: Diferenciais — image left, text right */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:order-1 lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/foto-08.jpeg" alt="Grades em plataforma industrial" fill className="object-cover" />
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
