import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroCarousel />

      {/* Positioning Text */}
      <section className="bg-azul-800 px-6 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
            Engenharia aplicada à durabilidade
          </h2>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-azul-200">
            A Azul Compósitos desenvolve soluções estruturais em fibra de vidro para enfrentar ambientes de alta corrosão, como regiões costeiras, plataformas offshore e indústrias químicas. Oferece resistência comparável ao aço, com durabilidade praticamente ilimitada e necessidade mínima de manutenção.
          </p>
        </div>
      </section>

      {/* Perfis Pultrudados — imagem à direita */}
      <section className="mb-10 lg:mb-0">
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center px-6 py-8 sm:py-16 lg:w-1/2 lg:px-12 lg:py-16 xl:py-32">
            <div className="mx-auto max-w-xl">
              <p className="text-sm font-semibold text-azul-600">Produto</p>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
                Perfis Pultrudados
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Estruturas imunes à corrosão para edificações costeiras, offshore e ambientes industriais agressivos.
              </p>
              <div className="mt-8">
                <a
                  href="/perfis-pultrudados"
                  className="inline-flex items-center rounded-md bg-azul-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-azul-500 transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/foto-07.jpeg" alt="Perfis Pultrudados" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Grades de Piso — imagem à esquerda */}
      <section className="mb-10 lg:mb-0">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:order-1 lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-300">
              <Image src="/images/foto-08.jpeg" alt="Grades de Piso" fill className="object-cover" />
            </div>
          </div>
          <div className="flex items-center px-6 py-8 sm:py-16 lg:order-2 lg:w-1/2 lg:px-12 lg:py-16 xl:py-32">
            <div className="mx-auto max-w-xl">
              <p className="text-sm font-semibold text-azul-600">Produto</p>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
                Grades de Piso
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Segurança estrutural permanente para plataformas, portos e indústrias químicas.
              </p>
              <div className="mt-8">
                <a
                  href="/grades-de-piso"
                  className="inline-flex items-center rounded-md bg-azul-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-azul-500 transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bandejamento e Eletrocalhas — imagem à direita */}
      <section className="mb-10 lg:mb-0">
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center px-6 py-8 sm:py-16 lg:w-1/2 lg:px-12 lg:py-16 xl:py-32">
            <div className="mx-auto max-w-xl">
              <p className="text-sm font-semibold text-azul-600">Produto</p>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
                Bandejamento e Eletrocalhas
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Organização de cabos com resistência total à corrosão marinha e química.
              </p>
              <div className="mt-8">
                <a
                  href="/bandejamento"
                  className="inline-flex items-center rounded-md bg-azul-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-azul-500 transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/foto-11.jpeg" alt="Bandejamento e Eletrocalhas" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Guarda-Corpos — imagem à esquerda */}
      <section className="mb-10 lg:mb-0">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:order-1 lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-300">
              <Image src="/images/foto-04.jpg" alt="Guarda-Corpos" fill className="object-cover" />
            </div>
          </div>
          <div className="flex items-center px-6 py-8 sm:py-16 lg:order-2 lg:w-1/2 lg:px-12 lg:py-16 xl:py-32">
            <div className="mx-auto max-w-xl">
              <p className="text-sm font-semibold text-azul-600">Produto</p>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
                Guarda-Corpos
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Proteção estrutural durável para áreas industriais e litorâneas.
              </p>
              <div className="mt-8">
                <a
                  href="/guarda-corpos"
                  className="inline-flex items-center rounded-md bg-azul-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-azul-500 transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Escada de Marinheiro — imagem à direita */}
      <section className="mb-10 lg:mb-0">
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center px-6 py-8 sm:py-16 lg:w-1/2 lg:px-12 lg:py-16 xl:py-32">
            <div className="mx-auto max-w-xl">
              <p className="text-sm font-semibold text-azul-600">Produto</p>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
                Escada de Marinheiro
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Acesso vertical definitivo para ambientes expostos à maresia e agentes químicos.
              </p>
              <div className="mt-8">
                <a
                  href="/escada-de-marinheiro"
                  className="inline-flex items-center rounded-md bg-azul-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-azul-500 transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/foto-13.JPG" alt="Escada de Marinheiro" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Especiais — imagem à esquerda */}
      <section className="mb-10 lg:mb-0">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:order-1 lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-300">
              <Image src="/images/foto-17.jpg" alt="Projetos Especiais" fill className="object-cover" />
            </div>
          </div>
          <div className="flex items-center px-6 py-8 sm:py-16 lg:order-2 lg:w-1/2 lg:px-12 lg:py-16 xl:py-32">
            <div className="mx-auto max-w-xl">
              <p className="text-sm font-semibold text-azul-600">Produto</p>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
                Projetos Especiais
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Inteligência aplicada em fibra de vidro para soluções técnicas de alta complexidade, onde o convencional não atende.
              </p>
              <div className="mt-8">
                <a
                  href="/projetos-especiais"
                  className="inline-flex items-center rounded-md bg-azul-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-azul-500 transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soluções Offshore — imagem à direita */}
      <section className="mb-10 lg:mb-0">
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center px-6 py-8 sm:py-16 lg:w-1/2 lg:px-12 lg:py-16 xl:py-32">
            <div className="mx-auto max-w-xl">
              <p className="text-sm font-semibold text-azul-600">Produto</p>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
                Soluções Offshore
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Soluções estruturais completas em fibra de vidro para plataformas offshore, FPSOs e ambientes marítimos sujeitos à corrosão extrema.
              </p>
              <div className="mt-8">
                <a
                  href="/solucoes-offshore"
                  className="inline-flex items-center rounded-md bg-azul-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-azul-500 transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
          <div className="order-first lg:order-none lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-200">
              <Image src="/images/foto-06.JPG" alt="Soluções Offshore" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Urbanismo — imagem à esquerda */}
      <section className="mb-10 lg:mb-0">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:order-1 lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[50vw] w-full bg-gray-300">
              <Image src="/images/foto-16.jpg" alt="Urbanismo" fill className="object-cover" />
            </div>
          </div>
          <div className="flex items-center px-6 py-8 sm:py-16 lg:order-2 lg:w-1/2 lg:px-12 lg:py-16 xl:py-32">
            <div className="mx-auto max-w-xl">
              <p className="text-sm font-semibold text-azul-600">Produto</p>
              <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-gray-900">
                Urbanismo
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Estruturas duráveis para espaços urbanos expostos ao tempo, à maresia e ao uso intenso.
              </p>
              <div className="mt-8">
                <a
                  href="/urbanismo"
                  className="inline-flex items-center rounded-md bg-azul-600 px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-azul-500 transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens dos Compósitos */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl lg:leading-tight font-bold mb-16 text-azul-800 uppercase text-center leading-tight">
            Vantagens dos compósitos de alto desempenho
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            <div className="aspect-square bg-[#f2352c] flex items-center justify-center p-4 rounded-full">
              <p className="text-center text-xs sm:text-sm uppercase text-white font-bold">Resistência à corrosão química</p>
            </div>
            <div className="aspect-square bg-[#ffd712] flex items-center justify-center p-4">
              <p className="text-center text-xs sm:text-sm uppercase text-gray-900 font-bold">Resistência à corrosão por intempérie</p>
            </div>
            <div className="aspect-square bg-[#0eaf22] flex items-center justify-center p-4 rounded-full">
              <p className="text-center text-xs sm:text-sm uppercase text-white font-bold">Fácil montagem e instalação</p>
            </div>
            <div className="aspect-square bg-azul-600 flex items-center justify-center p-4 rounded-full"></div>
            <div className="aspect-square bg-[#e6007e] flex items-center justify-center p-4">
              <p className="text-center text-xs sm:text-sm uppercase text-white font-bold">Até 70% mais leve que o aço</p>
            </div>
            <div className="aspect-square bg-[#f28522] flex items-center justify-center p-4 rounded-full">
              <p className="text-center text-xs sm:text-sm uppercase text-white font-bold">Transparência eletromagnética</p>
            </div>
            <div className="aspect-square bg-[#ffd712] flex items-center justify-center p-4 rounded-full">
              <p className="text-center text-xs sm:text-sm uppercase text-gray-900 font-bold">Resistência ao fogo em níveis variados</p>
            </div>
            <div className="aspect-square bg-[#f2352c] flex items-center justify-center p-4"></div>
            <div className="aspect-square bg-[#0eaf22] flex items-center justify-center p-4">
              <p className="text-center text-xs sm:text-sm uppercase text-white font-bold">Zero custo de manutenção estrutural</p>
            </div>
            <div className="aspect-square bg-[#e6007e] flex items-center justify-center p-4 rounded-full">
              <p className="text-center text-xs sm:text-sm uppercase text-white font-bold">Sem valor de revenda</p>
            </div>
            <div className="aspect-square bg-azul-600 flex items-center justify-center p-4"></div>
            <div className="aspect-square bg-[#f28522] flex items-center justify-center p-4">
              <p className="text-center text-xs sm:text-sm uppercase text-white font-bold">Vida útil indeterminada</p>
            </div>
            <div className="aspect-square bg-azul-600 flex items-center justify-center p-4 rounded-full"></div>
            <div className="aspect-square bg-[#ffd712] flex items-center justify-center p-4 rounded-full">
              <p className="text-center text-xs sm:text-sm uppercase text-gray-900 font-bold">Material eletricamente isolante</p>
            </div>
            <div className="aspect-square bg-[#f2352c] flex items-center justify-center p-4 rounded-full">
              <p className="text-center text-xs sm:text-sm uppercase text-white font-bold">Material termicamente isolante</p>
            </div>
            <div className="aspect-square bg-[#0eaf22] flex items-center justify-center p-4">
              <p className="text-center text-xs sm:text-sm uppercase text-white font-bold">Excelente adesão a colas e resinas</p>
            </div>
            <div className="aspect-square bg-[#e6007e] flex items-center justify-center p-4">
              <p className="text-center text-xs sm:text-sm uppercase text-white font-bold">Soluções customizadas</p>
            </div>
            <div className="aspect-square bg-transparent"></div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
