import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import FaleConoscoSection from "@/components/FaleConoscoSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Quem Somos",
  description: "Conheça a Azul Compósitos: mais de quatro décadas de experiência em soluções estruturais em fibra de vidro por pultrusão para ambientes de alta corrosão.",
};

export default function QuemSomosPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner
        title="Engenharia aplicada à durabilidade"
        subtitle="Quem Somos"
        description="Mais de quatro décadas de experiência em soluções estruturais em fibra de vidro."
        backgroundImage="/images/quem-somos-capa.jpg"
        backgroundImageMobile="/images/quem-somos-capa-mobile.jpg"
      />

      <section className="px-6 py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#fff', backgroundImage: "url('/assets/bg-pattern-cinza.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="mx-auto max-w-4xl space-y-8">
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700">
            A Azul Compósitos é especializada na fabricação de soluções estruturais em fibra de vidro por meio do processo de pultrusão. Sua equipe técnica reúne mais de quatro décadas de experiência e participou ativamente da consolidação da fibra de vidro estrutural no Brasil.
          </p>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600">
            São profissionais que atuaram em projetos emblemáticos, desde as primeiras aplicações industriais até soluções em construção civil, saneamento, infraestrutura urbana e ambientes extremos como plataformas offshore e regiões de alta salinidade.
          </p>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-600">
            Essa trajetória, aliada a uma estrutura moderna e foco técnico rigoroso, garante o equilíbrio entre experiência, inovação e compromisso com desempenho.
          </p>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700 font-medium">
            Mais do que fabricar componentes, a Azul entrega inteligência aplicada em compósitos, com precisão, resistência e confiabilidade para cada projeto.
          </p>
        </div>
      </section>

      <FaleConoscoSection title="Entre em contato" />
      <Footer />
    </main>
  );
}
