import type { Metadata } from "next";
import "./globals.css";
import "./swiper-custom.css";
import AppSidebar from "@/components/dashboard/Sidebar";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

export const metadata: Metadata = {
  title: {
    default: "Aroma de Montaña | Hub del Inversor",
    template: "%s | Aroma de Montaña"
  },
  description: "Plataforma de alta seguridad para inversores del Grupo Empresarial Reyes. Gestión de activos inmobiliarios, rentabilidad operativa y blindaje fiduciario en Loja, Ecuador.",
  keywords: ["Inversión Inmobiliaria", "Ecuador", "Loja", "Hacienda Aroma de Montaña", "Agroturismo", "Astroturismo", "Fideicomiso Mercantil"],
  authors: [{ name: "Grupo Empresarial Reyes" }],
  openGraph: {
    title: "Aroma de Montaña | Inversión Sustentable de Alto Nivel",
    description: "Únete al ecosistema de rentabilidad de Hacienda Aroma de Montaña. Tierra, Marca y Activos blindados.",
    url: "https://aroma-inversores.com", // Ajustar al dominio final
    siteName: "Aroma de Montaña",
    images: [
      {
        url: "/Images/Nueva portada.webp",
        width: 1200,
        height: 630,
        alt: "Hacienda Aroma de Montaña - Vista Aérea",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased bg-cremita flex min-h-screen">
        {/* Sidebar fixa */}
        <AppSidebar />

        {/* Panel Principal */}
        <main className="flex-1 lg:ml-64 min-h-screen relative">
          <div className="p-4 md:p-8 pt-20 lg:pt-8 pb-24">
            {children}
          </div>
          <WhatsAppFloat />
        </main>
      </body>
    </html>
  );
}
