import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estrategia de Ocupación",
  description: "Modelos de comercialización garantizados. Alianzas con operadores turísticos internacionales, retiros corporativos y wellness para flujos de caja predecibles.",
  openGraph: {
    title: "Estrategias de Ocupación y Flujo",
    description: "Conoce cómo mantenemos altos niveles de ocupación utilizando acuerdos con operadores B2B y turismo regenerativo.",
    url: "https://grupoempresarialreyes.vercel.app/estrategia",
    images: ["/Images/Astroturismo.png"]
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
