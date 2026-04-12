import type { Metadata } from "next";
import { getAssetUrl } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Gobernanza y Transparencia",
  description: "Gestión impecable. Estructura orgánica del Grupo Empresarial Reyes asegurando que cada dólar sea invertido y ejecutado con máxima prolijidad.",
  openGraph: {
    title: "Gobernanza de la Sociedad",
    description: "Las reglas claras y la gestión especializada de la Hacienda, Operaciones y Contabilidad. Directores y Asamblea.",
    url: "https://grupoempresarialreyes.vercel.app/gobernanza",
    images: [getAssetUrl("/Images/trazabilidad.png")]
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
