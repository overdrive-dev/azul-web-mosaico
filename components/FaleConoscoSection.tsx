"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/20/solid";

interface FormData {
  product: string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

const productOptions = [
  "Perfis Pultrudados",
  "Grades de Piso",
  "Bandejamento e Eletrocalhas",
  "Guarda-Corpos",
  "Escada de Marinheiro",
  "Urbanismo",
  "Projetos Especiais",
];

interface FaleConoscoSectionProps {
  title?: string;
}

export default function FaleConoscoSection({ title = "Fale Conosco" }: FaleConoscoSectionProps) {
  const [formData, setFormData] = useState<FormData>({
    product: productOptions[0],
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateMailtoLink = () => {
    const { product, firstName, lastName, company, email, phone, message } = formData;
    const name = `${firstName} ${lastName}`.trim();
    const emailSubject = product
      ? `Contato via Site — ${product}`
      : "Contato via Site";

    let emailBody = `Olá, meu nome é ${name}.\n\n`;
    if (company) emailBody += `Empresa: ${company}\n`;
    emailBody += `E-mail: ${email}\n`;
    if (phone) emailBody += `Telefone: ${phone}\n`;
    if (product) emailBody += `Produto de interesse: ${product}\n`;
    emailBody += `\nMensagem:\n${message}\n\nAguardo retorno. Obrigado!`;

    return `mailto:vendas@azulcompositos.com.br?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Por favor, preencha os campos obrigatórios (Nome, E-mail e Mensagem).");
      return;
    }
    window.location.href = generateMailtoLink();
  };

  const inputClasses =
    "block w-full rounded-md bg-white px-3.5 py-2 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-azul-400";

  return (
    <section
      className="isolate px-6 py-16 sm:py-24 lg:py-32 lg:px-8 bg-azul-800 bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/bg-pattern-small.jpg)" }}
    >
      {/* Title */}
      <div className="mx-auto max-w-5xl text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">{title}</h2>
      </div>

      {/* Header: Tel / Email / WhatsApp */}
      <div className="mx-auto max-w-5xl text-center mb-12">
        <p className="text-sm sm:text-base text-white">
          <span className="mr-2 font-semibold">Tel:</span>
          <a href="tel:+552138281501" className="font-semibold hover:text-azul-300 transition-colors">
            +55 21 3828-1501
          </a>
          {" / "}
          <a href="tel:+552138281564" className="font-semibold hover:text-azul-300 transition-colors">
            3828-1564
          </a>
        </p>
        <p className="mt-1 text-sm sm:text-base text-white">
          <span className="mr-2 font-semibold">Email:</span>
          <a href="mailto:vendas@azulcompositos.com.br" className="font-semibold hover:text-azul-300 transition-colors">
            vendas@azulcompositos.com.br
          </a>
        </p>
        <div className="mt-4">
          <a
            href="https://wa.me/5521973583171"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-xs hover:bg-[#20BD5A] transition-colors"
          >
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* Two-column: Form + Outros Canais */}
      <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left: Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="product" className="block text-sm font-semibold text-white">
                Produto de interesse
              </label>
              <div className="mt-2.5 grid grid-cols-1">
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3.5 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-azul-400"
                >
                  {productOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-white">
                Nome *
              </label>
              <div className="mt-2.5">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-white">
                Sobrenome
              </label>
              <div className="mt-2.5">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-semibold text-white">
                Empresa
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold text-white">
                E-mail *
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block text-sm font-semibold text-white">
                Telefone
              </label>
              <div className="mt-2.5">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(21) 99999-9999"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold text-white">
                Mensagem *
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva seu projeto ou necessidade..."
                  className={inputClasses}
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="block w-full rounded-md bg-cerise-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-cerise-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cerise-700 transition-colors"
            >
              Enviar E-mail
            </button>
          </div>
        </form>

        {/* Right: Outros Canais */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">Outros Canais</h2>
          <div className="flex flex-col gap-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5521973583171"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 p-5 rounded-lg hover:bg-white/5 transition-colors"
            >
              <div className="flex items-start">
                <div className="inline-flex rounded-lg p-3 bg-[#25D366] text-white mr-4 shrink-0">
                  <ChatBubbleLeftRightIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">WhatsApp</h3>
                  <p className="text-sm text-white/80">
                    +55 21 97358-3171 -{" "}
                    <span className="underline">Clique para conversar</span>
                  </p>
                </div>
              </div>
            </a>

            {/* E-mail */}
            <a
              href="mailto:vendas@azulcompositos.com.br"
              className="border border-white/30 p-5 rounded-lg hover:bg-white/5 transition-colors"
            >
              <div className="flex items-start">
                <div className="inline-flex rounded-lg p-3 bg-azul-600 text-white mr-4 shrink-0">
                  <EnvelopeIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">E-mail</h3>
                  <p className="text-sm text-white/80">vendas@azulcompositos.com.br</p>
                  <p className="text-sm text-white/60 mt-1 underline">Clique para enviar e-mail</p>
                </div>
              </div>
            </a>

            {/* Endereço */}
            <a
              href="https://maps.google.com/?q=Avenida+Brasil%2C+n%C2%BA44.+879+Parte+-+Campo+Grande+-+Rio+de+Janeiro+-+RJ%2C+23078-001"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 p-5 rounded-lg hover:bg-white/5 transition-colors"
            >
              <div className="flex items-start">
                <div className="inline-flex rounded-lg p-3 bg-azul-500 text-white mr-4 shrink-0">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">Endereço</h3>
                  <p className="text-sm text-white/80">Avenida Brasil, nº44. 879 Parte - Campo Grande - Rio de Janeiro - RJ</p>
                  <p className="text-sm text-white/60 mt-1">
                    CEP: 23078-001 · <span className="underline">Ver no Google Maps</span>
                  </p>
                </div>
              </div>
            </a>

            {/* Telefone */}
            <div className="border border-white/30 p-5 rounded-lg">
              <div className="flex items-start">
                <div className="inline-flex rounded-lg p-3 bg-azul-600 text-white mr-4 shrink-0">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">Telefone</h3>
                  <p className="text-sm text-white/80">
                    <a href="tel:+552138281501" className="hover:text-white transition-colors">+55 21 3828-1501</a>
                    {" - "}
                    <a href="tel:+552138281564" className="hover:text-white transition-colors">+55 21 3828-1564</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Horário de Funcionamento */}
            <div className="border border-white/30 p-5 rounded-lg">
              <div className="flex items-start">
                <div className="inline-flex rounded-lg p-3 bg-azul-600 text-white mr-4 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white mb-2">Horário de Funcionamento</h3>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center gap-4">
                      <span className="text-sm text-white/80">Setor administrativo</span>
                      <span className="text-sm text-white font-medium whitespace-nowrap">Seg–Sex 07:30–17:15</span>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                      <span className="text-sm text-white/80">Produção</span>
                      <span className="text-sm text-white font-medium whitespace-nowrap">Seg–Sáb 24 horas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
