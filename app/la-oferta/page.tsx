"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAssetUrl } from '@/lib/assets';
import PageHero from '@/components/ui/PageHero';

export default function LaOfertaPage() {
  const assetsIncluded = [
    { title: "Predio Sambinuma (23.5 Hectáreas)", desc: "Terreno productivo con infraestructura vial, hídrica y construcciones en curso.", icon: "🏞️" },
    { title: 'Marca Registrada "Aroma de Montaña"', desc: "10 años de vigencia intelectual, logotipo, y presencia de marca ya posicionada.", icon: "🛡️" },
    { title: "Propiedad Intelectual", desc: "Metodologías de producción de café de especialidad y concepto de retiros/astroturismo.", icon: "🧠" },
    { title: "Modelo de Negocio e Infraestructura", desc: "Diseño operativo de tres unidades ya en fase final de implementación física y comercial.", icon: "💼" }
  ];

  return (
    <div className="space-y-16 pb-20">
      <PageHero
        badge="Venta Total de la Empresa"
        title="La Oferta:"
        titleAccent="venta total de la empresa"
        subtitle="100% de Grupo Empresarial Reyes S.A.S. B.I.C. — predio, marca, propiedad intelectual y modelo de negocio."
        imagePath="/30k/Crear_perspectiva_casa_desde_afuera_202606160910.jpeg"
        stats={[
          { label: 'Precio de Venta', value: 'USD 230,000' },
          { label: 'Patrimonio Registrado', value: '$211,266' },
          { label: 'Entrada Mínima', value: '35%' },
          { label: 'Incluye Marca', value: '10 años' },
        ]}
      />

      {/* Main Pitch Card */}
      <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-marron-claro/10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-3xl font-florenza text-verde-oscuro">Traspaso Completo y Operativo</h2>
          <p className="text-base text-gris-oscuro/80 leading-relaxed font-poppins">
            Se vende el <strong>100% de Grupo Empresarial Reyes S.A.S. B.I.C.</strong>, incluyendo el predio de 23.5 hectáreas con toda su infraestructura, la marca registrada "Aroma de Montaña", la propiedad intelectual del concepto y metodología, y el modelo de negocio de cuatro ejes ya diseñado y en fase de implementación.
          </p>
          <p className="text-base text-gris-oscuro/80 leading-relaxed font-poppins">
            Esta es una venta de empresa completa, no una fragmentación en unidades individuales. Si su capacidad de inversión no cubre la operación completa, puede presentar una propuesta de participación proporcional — las condiciones de una adquisición parcial se conversan de forma privada y no se detallan en este sitio.
          </p>
        </div>
        <div className="lg:col-span-4 bg-verde-oscuro text-cremita p-8 rounded-3xl text-center space-y-6 shadow-xl">
          <div>
            <p className="text-xs uppercase tracking-widest font-bold opacity-60 font-poppins mb-1">Patrimonio Registrado</p>
            <p className="text-2xl font-black text-cremita/80">$211,266.00</p>
            <p className="text-xs opacity-50 font-poppins mt-1">Avalúo BanEcuador B.P.</p>
          </div>
          <div className="border-t border-white/10 pt-4">
            <p className="text-xs uppercase tracking-widest font-bold opacity-75 font-poppins mb-1">Precio de Venta</p>
            <p className="text-4xl font-black text-naranja">$230,000</p>
            <p className="text-xs opacity-60 font-poppins mt-1">100% de la empresa, marca incluida</p>
          </div>
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

      {/* Condiciones de Adquisición */}
      <div className="bg-verde-oscuro text-cremita p-10 md:p-12 rounded-[3rem] shadow-xl space-y-6">
        <h3 className="text-3xl font-florenza">Condiciones de <span className="text-naranja italic">Adquisición</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6 space-y-2">
            <p className="text-xs font-black uppercase tracking-widest text-naranja font-poppins">Entrada al firmar</p>
            <p className="text-4xl font-black text-white">35%</p>
            <p className="text-xs text-cremita/60 font-poppins">del valor de venta al momento de la firma del contrato de promesa.</p>
          </div>
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6 space-y-2">
            <p className="text-xs font-black uppercase tracking-widest text-naranja font-poppins">Saldo restante</p>
            <p className="text-4xl font-black text-white">65%</p>
            <p className="text-xs text-cremita/60 font-poppins">pagadero según cronograma acordado post-firma.</p>
          </div>
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6 space-y-2">
            <p className="text-xs font-black uppercase tracking-widest text-naranja font-poppins">Financiamiento Directo</p>
            <p className="text-2xl font-black text-white">Disponible</p>
            <p className="text-xs text-cremita/60 font-poppins">Para compradores que no cuenten con el capital completo — condiciones a conversar de forma privada según perfil del comprador.</p>
          </div>
        </div>
        <p className="text-xs text-cremita/40 font-poppins italic pt-2">* Las condiciones de pago fraccionado requieren instrumento legal que proteja la transferencia de acciones/dominio hasta completar el pago total. A resolver con el asesor legal del comprador.</p>
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
