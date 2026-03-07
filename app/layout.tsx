import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Azul Compósitos — Soluções em Fibra de Vidro",
    template: "%s — Azul Compósitos",
  },
  description:
    "Soluções estruturais em fibra de vidro imunes à corrosão para plataformas offshore, indústrias químicas e edificações costeiras. Perfis pultrudados, grades, guarda-corpos e mais.",
  openGraph: {
    title: "Azul Compósitos — Soluções em Fibra de Vidro",
    description:
      "Estruturas em fibra de vidro com resistência comparável ao aço e durabilidade praticamente ilimitada.",
    siteName: "Azul Compósitos",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
