import type { Metadata } from "next";
import { getAssetUrl } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Retírate en Ecuador | Residencia tipo Glamping en la Montaña",
  description: "Sé dueño de una casa de montaña de lujo en Loja, Ecuador. 9 meses de sol, el mejor café del mundo cerca, y 50% de ingresos cuando no estés. Cupos limitados de preventa.",
  openGraph: {
    title: "Retírate en Ecuador | Residencia en la Montaña",
    description: "Sé dueño de una casa de montaña de lujo en Loja, Ecuador. 9 meses de sol, el mejor café del mundo cerca, y 50% de las ganancias al rentarlo.",
    url: "https://grupoempresarialreyes.vercel.app/retire",
    images: [getAssetUrl("/Images/Aroma de Montaña.webp")]
  }
};

export default function RetireLayout({ children }: { children: React.ReactNode }) {
  return children;
}
