import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aroma de Montaña — Expediente de Inversión",
  description: "Inversión en glampings Alpinos con modelo de doble propósito. Activo real en Reserva de Biosfera UNESCO, Loja, Ecuador.",
  openGraph: {
    title: "Aroma de Montaña — Expediente de Inversión",
    description: "Inversión en glampings Alpinos con modelo de doble propósito. Activo real en Reserva de Biosfera UNESCO.",
    url: "https://grupoempresarialreyes.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://cesarweb.b-cdn.net/aroma-assets/250k/exterior.jpg",
        width: 1200,
        height: 630,
        alt: "Aroma de Montaña - Glampings Alpinos",
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function InvestorsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#1E221B", // Verde muy oscuro oficial basado en #6C7654 de globals.css
        overflowY: "auto",
        overflowX: "hidden",
      }}
      id="investors-root"
    >
      {children}
    </div>
  );
}


