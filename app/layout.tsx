import type { Metadata } from "next";
import "./globals.css";
import "./swiper-custom.css";
import AppSidebar from "@/components/dashboard/Sidebar";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import ScrollToTop from "@/components/utils/ScrollToTop";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://grupoempresarialreyes.vercel.app"),
  title: {
    default: "Aroma de Montaña | Hub del Inversor",
    template: "%s | Aroma de Montaña"
  },
  description: "Plataforma de alta seguridad para inversores del Grupo Empresarial Reyes. Gestión de activos inmobiliarios, rentabilidad operativa y blindaje fiduciario en Loja, Ecuador.",
  keywords: ["Inversión Inmobiliaria", "Ecuador", "Loja", "Hacienda Aroma de Montaña", "Agroturismo", "Astroturismo", "Fideicomiso Mercantil"],
  authors: [{ name: "Grupo Empresarial Reyes" }],
  openGraph: {
    title: "Aroma de Montaña | Inversión Sustentable de Alto Nivel",
    description: "Únete al ecosistema de rentabilidad de Hacienda Aroma de Montaña. Tierra, Marca y Activos blindados con ROI proyectado del 14.72% al 35.4%.",
    url: "https://grupoempresarialreyes.vercel.app",
    siteName: "Aroma de Montaña",
    images: [
      {
        url: "/Logos/featured-share.png",
        width: 1200,
        height: 630,
        alt: "Hacienda Aroma de Montaña",
      },
    ],
    locale: "es_EC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aroma de Montaña | Hub del Inversor",
    description: "Plataforma de alta seguridad para inversores del Grupo Empresarial Reyes.",
    images: ["/Logos/featured-share.png"],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico?v=2', sizes: 'any' }
    ],
    shortcut: '/favicon.ico?v=2',
    apple: '/favicon.ico?v=2',
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
      <head>
      </head>
      <body className="antialiased bg-cremita flex min-h-screen">
        <ScrollToTop />

        {/* GTranslate Scripts - Moved to body to avoid hydration errors */}
        <Script
          id="gtranslate-settings"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.gtranslateSettings = {
                "default_language": "es",
                "detect_browser_language": true,
                "languages": ["es", "en", "it", "fr", "de", "zh-CN"],
                "wrapper_selector": ".gtranslate_wrapper",
                "flag_size": 24,
                "alt_flags": {"en": "usa"}
              };
            `,
          }}
        />
        <Script
          src="https://cdn.gtranslate.net/widgets/latest/float.js"
          strategy="afterInteractive"
        />
        <div className="gtranslate_wrapper"></div>

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
