import type { Metadata } from "next";
import { getAssetUrl } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Oportunidades de Inversión",
  description: "Descubre las 3 opciones de participación: Socio Estratégico (50/50), Dueño de Glamping, o Inversor Visionario. Retornos proyectados respaldados por infraestructura física.",
  openGraph: {
    title: "Opciones de Inversión y Modelos 50/50",
    description: "Tres formas de hacer crecer tu patrimonio con el Grupo Empresarial Reyes en Aroma de Montaña.",
    url: "https://grupoempresarialreyes.vercel.app/oportunidad",
    images: [getAssetUrl("/Images/Aroma de Montaña.webp")]
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
