import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Soluções estruturais em fibra de vidro: perfis pultrudados, grades de piso, bandejamento, guarda-corpos, escadas e mais. Imunes à corrosão.",
};

const products = [
  {
    name: "Perfis Pultrudados",
    description: "Projetados para substituir estruturas metálicas em ambientes agressivos, com resistência estrutural equivalente ao aço.",
    href: "/produtos/perfis-pultrudados",
    accentClass: "bg-gold-600",
  },
  {
    name: "Grades de Piso",
    description: "Desenvolvidas para ambientes de alta agressividade química e marinha, substituem grades metálicas com superioridade em durabilidade.",
    href: "/produtos/grades-de-piso",
    accentClass: "bg-apple-600",
  },
  {
    name: "Bandejamento e Eletrocalhas",
    description: "Sistemas de leitos e eletrocalhas que garantem integridade estrutural permanente em plataformas offshore e refinarias.",
    href: "/produtos/bandejamento",
    accentClass: "bg-gold-drop-600",
  },
  {
    name: "Guarda-Corpos",
    description: "Sistemas de proteção para aplicações industriais, marítimas e urbanas sujeitas à corrosão constante.",
    href: "/produtos/guarda-corpos",
    accentClass: "bg-cinnabar-600",
  },
  {
    name: "Escada de Marinheiro",
    description: "Acesso vertical em estruturas expostas à maresia e agentes químicos, com total imunidade à corrosão.",
    href: "/produtos/escada-de-marinheiro",
    accentClass: "bg-cerise-600",
  },
  {
    name: "Urbanismo",
    description: "Estruturas duráveis para espaços urbanos expostos ao tempo, à maresia e ao uso intenso.",
    href: "/produtos/urbanismo",
    accentClass: "bg-apple-600",
  },
  {
    name: "Projetos Especiais",
    description: "Inteligência aplicada em fibra de vidro para soluções técnicas de alta complexidade.",
    href: "/produtos/projetos-especiais",
    accentClass: "bg-gold-600",
  },
];

export default function ProdutosPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner
        title="Nossos Produtos"
        subtitle="Produtos"
        description="Soluções estruturais em fibra de vidro para ambientes de alta corrosão."
      />

      <section className="px-6 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.href}
                className="group block rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className={`w-3 h-3 rounded-full ${product.accentClass} mb-4`} />
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-cinnabar-600 transition-colors">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
