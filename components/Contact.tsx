"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

type ContactProps = {
  title?: string;
  description?: string;
  submitText?: string;
  hideHeader?: boolean;
  productOptions?: string[];
};

interface FormData {
  product: string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact({
  title = "Entre em contato",
  description = "Estamos à disposição para esclarecer dúvidas, apresentar orçamentos e discutir soluções sob medida para o seu projeto.",
  submitText = "Enviar E-mail",
  hideHeader = false,
  productOptions = [
    "Perfis Pultrudados",
    "Grades de Piso",
    "Bandejamento e Eletrocalhas",
    "Guarda-Corpos",
    "Escada de Marinheiro",
    "Urbanismo",
    "Projetos Especiais",
  ],
}: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    product: productOptions[0] ?? "",
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

  return (
    <section className="isolate bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
      {!hideHeader && (
        <div className="mx-auto max-w-2xl text-left lg:text-center">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
            {title}
          </h2>
          {description && (
            <p className="mt-2 text-sm sm:text-base text-gray-600">{description}</p>
          )}
        </div>
      )}

      <div className={`mx-auto max-w-xl text-left lg:text-center ${!hideHeader ? "mt-8" : ""}`}>
        <p className="text-sm text-gray-700">
          <span className="mr-2 font-semibold text-cinnabar-600">Tel:</span>
          <a href="tel:+552138281501" className="font-semibold text-cinnabar-600 hover:text-cinnabar-500">
            +55 21 3828-1501
          </a>
          {" / "}
          <a href="tel:+552138281564" className="font-semibold text-cinnabar-600 hover:text-cinnabar-500">
            3828-1564
          </a>
        </p>
        <p className="mt-1 text-sm text-gray-700">
          <span className="mr-2 font-semibold text-cinnabar-600">Email:</span>
          <a href="mailto:vendas@azulcompositos.com.br" className="font-semibold text-cinnabar-600 hover:text-cinnabar-500">
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
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="product" className="block text-sm font-semibold text-gray-900">
              Produto de interesse
            </label>
            <div className="mt-2.5 grid grid-cols-1">
              <select
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pr-8 pl-3.5 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-cinnabar-600"
              >
                {productOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900">
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
                className="block w-full rounded-md bg-white px-3.5 py-2 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cinnabar-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900">
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
                className="block w-full rounded-md bg-white px-3.5 py-2 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cinnabar-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
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
                className="block w-full rounded-md bg-white px-3.5 py-2 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cinnabar-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
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
                className="block w-full rounded-md bg-white px-3.5 py-2 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cinnabar-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">
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
                className="block w-full rounded-md bg-white px-3.5 py-2 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cinnabar-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
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
                className="block w-full rounded-md bg-white px-3.5 py-2 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cinnabar-600"
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="block w-full rounded-md bg-cinnabar-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-cinnabar-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cinnabar-600 transition-colors"
          >
            {submitText}
          </button>
        </div>
      </form>
    </section>
  );
}
