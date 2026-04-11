import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estructura del Ecosistema",
  description: "Conoce el blindaje jurídico y estructural mediante tres unidades de negocio: Hacienda, Operaciones e Inversiones. Seguridad y transparencia total.",
  openGraph: {
    title: "Estructura Operativa y Jurídica",
    description: "El patrimonio tangibilizado del proyecto Aroma de Montaña. 23.5ha, glampings de lujo y motor de utilidades.",
    url: "https://grupoempresarialreyes.vercel.app/estructura",
    images: ["/Images/Blindaje Fiduciario.webp"]
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
