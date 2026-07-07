import type { Metadata } from "next";
import Gallery from "@/components/sections/Gallery";

export const metadata: Metadata = {
  title: "Galería | Aroma de Montaña",
  description:
    "Explora la hacienda Aroma de Montaña a través de nuestras imágenes y videos: paisajes, café de especialidad, agricultura regenerativa y experiencias únicas.",
  openGraph: {
    title: "Galería — Aroma de Montaña",
    description:
      "Imágenes y videos reales de la hacienda: paisajes, café, procesos agrícolas y experiencias de vida.",
    siteName: "Aroma de Montaña",
    locale: "es_EC",
    type: "website",
  },
};

export default function GaleriaPage() {
  return <Gallery />;
}
