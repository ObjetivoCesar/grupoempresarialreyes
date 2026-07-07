"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAssetUrl } from '@/lib/assets';

export default function LaOfertaPage() {
  const assetsIncluded = [
    { title: "Predio Sambinuma (23.5 Hectáreas)", desc: "Terreno productivo con infraestructura vial, hídrica y construcciones en curso.", icon: "🏞️" },
    { title: 'Marca Registrada "Aroma de Montaña"', desc: "10 años de vigencia intelectual, logotipo, y presencia de marca ya posicionada.", icon: "🛡️" },
    { title: "Propiedad Intelectual", desc: "Metodologías de producción de café de especialidad y concepto de retiros/astroturismo.", icon: "🧠" },
    { title: "Modelo de Negocio e Infraestructura", desc: "Diseño operativo de tres unidades ya en fase final de implementación física y comercial.", icon: "💼" }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Header */}
      <section className="bg-verde-oscuro p-12 rounded-[3rem] text-cremita border-l-8 border-naranja shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-naranja/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-florenza mb-4">La Oferta: <span className="text-naranja italic">venta total de la empresa</span></h1>
          <p className="text-cremita/70 text-lg max-w-3xl font-light leading-relaxed">
            Adquisición del 100% de Grupo Empresarial Reyes S.A.S. B.I.C. y todo su patrimonio fáctico e intangible.
          </p>
        </div>
      </section>

      {/* Main Pitch Card */}
      <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-marron-claro/10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-3xl font-florenza text-verde-oscuro">Traspaso Completo y Operativo</h2>
          <p className="text-base text-gris-oscuro/80 leading-relaxed font-poppins">
            Se vende el <strong>100% de Grupo Empresarial Reyes S.A.S. B.I.C.</strong>, incluyendo el predio de 23.5 hectáreas con toda su infraestructura, la marca registrada "Aroma de Montaña", la propiedad intelectual del concepto y metodología, y el modelo de negocio de tres unidades ya diseñado y en fase de implementación.
          </p>
          <p className="text-base text-gris-oscuro/80 leading-relaxed font-poppins">
            Esta es una venta de empresa completa, no una fragmentación en unidades individuales. Si su capacidad de inversión no cubre la operación completa, puede presentar una propuesta directamente; las condiciones de una adquisición parcial se conversan de forma privada y no se detallan en este sitio.
          </p>
        </div>
        <div className="lg:col-span-4 bg-verde-oscuro text-cremita p-8 rounded-3xl text-center space-y-4 shadow-xl">
          <p className="text-xs uppercase tracking-widest font-bold opacity-75 font-poppins">Patrimonio Registrado Valorizado</p>
          <p className="text-4xl font-black text-naranja">$211,266.00</p>
          <p className="text-xs opacity-60 font-poppins">Respaldado por activos fijos e intangibles bajo avalúo bancario independiente para BanEcuador B.P.</p>
        </div>
      </div>

      {/* What's included grid */}
      <div className="space-y-8">
        <h3 className="text-2xl font-florenza text-verde-oscuro text-center md:text-left">¿Qué incluye la adquisición exactamente?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {assetsIncluded.map((asset, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/40 p-8 rounded-2xl border border-white/60 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-cremita flex shrink-0 items-center justify-center text-2xl shadow-inner">
                {asset.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-verde-oscuro text-lg leading-tight">{asset.title}</h4>
                <p className="text-sm text-gris-oscuro/70 leading-relaxed font-poppins">{asset.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-cremita/30 border border-marron-claro/20 rounded-[3rem] p-10 md:p-14 text-center space-y-8">
        <h3 className="text-3xl font-florenza text-verde-oscuro">¿Listo para revisar los detalles legales y técnicos?</h3>
        <p className="text-base text-gris-oscuro/70 max-w-2xl mx-auto font-poppins">
          Descargue el memorándum descriptivo completo en formato PDF, o póngase en contacto directo con nuestro equipo para agendar una reunión privada de negocios.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href={getAssetUrl('/Images/Aroma_de_Montana_Inversion_ES.pdf')}
            download
            className="w-full sm:w-auto px-8 py-4 bg-cafe-acento hover:bg-black text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2"
          >
            <span>📄 Descargar Memorándum Completo (PDF)</span>
          </a>
          <Link
            href="/contacto"
            className="w-full sm:w-auto px-8 py-4 bg-naranja hover:bg-naranja-oscuro text-white rounded-2xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
          >
            <span>🤝 Conversar Directamente</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
