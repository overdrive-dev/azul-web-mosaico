import HeroCarousel from "@/components/HeroCarousel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroCarousel />

      {/* Positioning Text */}
      <section className="px-6 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
            Engenharia aplicada à durabilidade
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600">
            A Azul Compósitos desenvolve soluções estruturais em fibra de vidro para enfrentar ambientes de alta corrosão, como regiões costeiras, plataformas offshore e indústrias químicas. Oferece resistência comparável ao aço, com durabilidade praticamente ilimitada e necessidade mínima de manutenção.
          </p>
        </div>
      </section>

      {/* Perfis Pultrudados — imagem à direita */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center px-6 py-16 sm:py-24 lg:w-1/2 lg:px-12 lg:py-16 xl:py-32">
            <div className="mx-auto max-w-xl">
              <p className="text-sm font-semibold text-cinnabar-600">Produto</p>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
                Perfis Pultrudados
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Estruturas imunes à corrosão para edificações costeiras, offshore e ambientes industriais agressivos.
              </p>
              <div className="mt-8">
                <a
                  href="/produtos/perfis-pultrudados"
                  className="inline-flex items-center rounded-md bg-cinnabar-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-cinnabar-500 transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200" />
          </div>
        </div>
      </section>

      {/* Grades de Piso — imagem à esquerda */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:order-1 lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-300" />
          </div>
          <div className="flex items-center px-6 py-16 sm:py-24 lg:order-2 lg:w-1/2 lg:px-12 lg:py-16 xl:py-32">
            <div className="mx-auto max-w-xl">
              <p className="text-sm font-semibold text-cinnabar-600">Produto</p>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
                Grades de Piso
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Segurança estrutural permanente para plataformas, portos e indústrias químicas.
              </p>
              <div className="mt-8">
                <a
                  href="/produtos/grades-de-piso"
                  className="inline-flex items-center rounded-md bg-cinnabar-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-cinnabar-500 transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bandejamento e Eletrocalhas — imagem à direita */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center px-6 py-16 sm:py-24 lg:w-1/2 lg:px-12 lg:py-16 xl:py-32">
            <div className="mx-auto max-w-xl">
              <p className="text-sm font-semibold text-cinnabar-600">Produto</p>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
                Bandejamento e Eletrocalhas
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Organização de cabos com resistência total à corrosão marinha e química.
              </p>
              <div className="mt-8">
                <a
                  href="/produtos/bandejamento"
                  className="inline-flex items-center rounded-md bg-cinnabar-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-cinnabar-500 transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200" />
          </div>
        </div>
      </section>

      {/* Guarda-Corpos — imagem à esquerda */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:order-1 lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-300" />
          </div>
          <div className="flex items-center px-6 py-16 sm:py-24 lg:order-2 lg:w-1/2 lg:px-12 lg:py-16 xl:py-32">
            <div className="mx-auto max-w-xl">
              <p className="text-sm font-semibold text-cinnabar-600">Produto</p>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
                Guarda-Corpos
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Proteção estrutural durável para áreas industriais e litorâneas.
              </p>
              <div className="mt-8">
                <a
                  href="/produtos/guarda-corpos"
                  className="inline-flex items-center rounded-md bg-cinnabar-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-cinnabar-500 transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Escada de Marinheiro — imagem à direita */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center px-6 py-16 sm:py-24 lg:w-1/2 lg:px-12 lg:py-16 xl:py-32">
            <div className="mx-auto max-w-xl">
              <p className="text-sm font-semibold text-cinnabar-600">Produto</p>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
                Escada de Marinheiro
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Acesso vertical definitivo para ambientes expostos à maresia e agentes químicos.
              </p>
              <div className="mt-8">
                <a
                  href="/produtos/escada-de-marinheiro"
                  className="inline-flex items-center rounded-md bg-cinnabar-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-cinnabar-500 transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200" />
          </div>
        </div>
      </section>

      {/* Urbanismo — imagem à esquerda */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:order-1 lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-300" />
          </div>
          <div className="flex items-center px-6 py-16 sm:py-24 lg:order-2 lg:w-1/2 lg:px-12 lg:py-16 xl:py-32">
            <div className="mx-auto max-w-xl">
              <p className="text-sm font-semibold text-cinnabar-600">Produto</p>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
                Urbanismo
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Estruturas duráveis para espaços urbanos expostos ao tempo, à maresia e ao uso intenso.
              </p>
              <div className="mt-8">
                <a
                  href="/produtos/urbanismo"
                  className="inline-flex items-center rounded-md bg-cinnabar-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-cinnabar-500 transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Especiais — imagem à direita */}
      <section>
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center px-6 py-16 sm:py-24 lg:w-1/2 lg:px-12 lg:py-16 xl:py-32">
            <div className="mx-auto max-w-xl">
              <p className="text-sm font-semibold text-cinnabar-600">Produto</p>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
                Projetos Especiais
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Inteligência aplicada em fibra de vidro para soluções técnicas de alta complexidade, onde o convencional não atende.
              </p>
              <div className="mt-8">
                <a
                  href="/produtos/projetos-especiais"
                  className="inline-flex items-center rounded-md bg-cinnabar-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-cinnabar-500 transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200" />
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
