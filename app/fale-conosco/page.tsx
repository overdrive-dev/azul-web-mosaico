import type { Metadata } from "next";
import HeroBanner from "@/components/HeroBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";

export const metadata: Metadata = {
  title: "Fale Conosco",
  description: "Entre em contato com a Azul Compósitos. Solicite orçamentos, tire dúvidas técnicas e conheça nossas soluções em fibra de vidro.",
};

export default function FaleConoscoPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner
        title="Fale Conosco"
        subtitle="Contato"
        description="Estamos à disposição para esclarecer dúvidas, apresentar orçamentos e discutir soluções sob medida para o seu projeto."
      />

      <Contact hideHeader={true} submitText="Enviar E-mail" />

      {/* Info Cards */}
      <section className="px-6 py-16 sm:py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8">Outros Canais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://wa.me/5521973583171"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start">
                <div className="inline-flex rounded-lg p-3 ring-4 ring-white bg-green-50 text-green-600 mr-4">
                  <ChatBubbleLeftRightIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">WhatsApp</h3>
                  <p className="text-gray-600">+55 21 97358-3171</p>
                  <p className="text-sm text-gray-500 mt-1">Clique para conversar</p>
                </div>
              </div>
            </a>

            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="inline-flex rounded-lg p-3 ring-4 ring-white bg-cinnabar-50 text-cinnabar-600 mr-4">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Telefone</h3>
                  <a href="tel:+552138281501" className="text-gray-600 hover:underline block">+55 21 3828-1501</a>
                  <a href="tel:+552138281564" className="text-gray-600 hover:underline block">+55 21 3828-1564</a>
                </div>
              </div>
            </div>

            <a
              href="mailto:vendas@azulcompositos.com.br"
              className="border border-gray-200 p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start">
                <div className="inline-flex rounded-lg p-3 ring-4 ring-white bg-cinnabar-50 text-cinnabar-600 mr-4">
                  <EnvelopeIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">E-mail</h3>
                  <p className="text-gray-600">vendas@azulcompositos.com.br</p>
                  <p className="text-sm text-gray-500 mt-1">Clique para enviar e-mail</p>
                </div>
              </div>
            </a>

            <a
              href="https://maps.google.com/?q=Avenida+Brasil%2C+n%C2%BA44.+879+Parte+-+Campo+Grande+-+Rio+de+Janeiro+-+RJ%2C+23078-001"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start">
                <div className="inline-flex rounded-lg p-3 ring-4 ring-white bg-cinnabar-50 text-cinnabar-600 mr-4">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Endereço</h3>
                  <p className="text-gray-600">Avenida Brasil, nº44. 879 Parte - Campo Grande - Rio de Janeiro - RJ</p>
                  <p className="text-sm text-gray-500 mt-1">CEP: 23078-001 · Ver no Google Maps</p>
                </div>
              </div>
            </a>
          </div>

          {/* Business Hours */}
          <div className="mt-8 border border-gray-200 p-6 rounded-lg">
            <div className="flex items-start">
              <div className="inline-flex rounded-lg p-3 ring-4 ring-white bg-gray-100 text-gray-600 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Horário de Funcionamento</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Setor administrativo</span>
                    <span className="text-gray-900 font-medium">Seg–Sex 07:30–17:15</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Produção</span>
                    <span className="text-gray-900 font-medium">Seg–Sáb 24 horas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
