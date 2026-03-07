import HeroCarousel from "@/components/HeroCarousel";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const products = [
  {
    name: "Perfis Pultrudados",
    description: "Estruturas imunes à corrosão para edificações costeiras, offshore e ambientes industriais agressivos.",
    href: "/produtos/perfis-pultrudados",
  },
  {
    name: "Grades de Piso",
    description: "Segurança estrutural permanente para plataformas, portos e indústrias químicas.",
    href: "/produtos/grades-de-piso",
  },
  {
    name: "Bandejamento e Eletrocalhas",
    description: "Organização de cabos com resistência total à corrosão marinha e química.",
    href: "/produtos/bandejamento",
  },
  {
    name: "Guarda-Corpos",
    description: "Proteção estrutural durável para áreas industriais e litorâneas.",
    href: "/produtos/guarda-corpos",
  },
  {
    name: "Escada de Marinheiro",
    description: "Acesso vertical definitivo para ambientes expostos à maresia e agentes químicos.",
    href: "/produtos/escada-de-marinheiro",
  },
  {
    name: "Urbanismo",
    description: "Estruturas duráveis para espaços urbanos expostos ao tempo, à maresia e ao uso intenso.",
    href: "/produtos/urbanismo",
  },
  {
    name: "Projetos Especiais",
    description: "Inteligência aplicada em fibra de vidro para soluções técnicas de alta complexidade.",
    href: "/produtos/projetos-especiais",
  },
];

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

      {/* Product CTA Grid */}
      <section className="px-6 pb-16 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.href}
                className="group relative flex flex-col justify-end overflow-hidden rounded-lg aspect-[4/3]"
              >
                <div className="absolute inset-0 bg-gray-700 group-hover:bg-gray-600 transition-colors" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="relative z-10 p-6">
                  <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                  <p className="mt-1 text-sm text-white/80">{product.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
