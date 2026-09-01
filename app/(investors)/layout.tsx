import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aroma de Montaña — Expediente de Inversión",
  description: "Nodo de hospitalidad regenerativa con activo real, caja temprana y colateral físico. 23.5 hectáreas en Reserva de Biosfera UNESCO, Loja, Ecuador.",
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


