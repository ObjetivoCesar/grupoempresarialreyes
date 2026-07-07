"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ElNegocioPage() {
  const units = [
    {
      title: "Hacienda Aroma de Montaña",
      role: "Núcleo Territorial",
      desc: "Alquila la tierra y contrata al personal operativo. Es dueña de la tierra física y de los cultivos de café especialidad."
    },
    {
      title: "Aroma de Montaña Operations",
      role: "Motor Comercial",
      desc: "Diseña, promociona y comisiona los eventos, retiros y la experiencia hotelera base de la marca."
    },
    {
      title: "Aroma de Montaña Inversions",
      role: "Estructura Patrimonial",
      desc: "Dueña legal del terreno, las licencias y las futuras unidades de glamping que se alquilan a la operadora."
    }
  ];

  const pillars = [
    {
      title: "Retiros Espirituales",
      desc: "Dirigidos a público general buscando desconexión. Activación constante mediante campañas de marketing digital y redes sociales.",
      icon: "🧘"
    },
    {
      title: "Retiros Corporativos",
      desc: "Empresas corporativas que buscan mindfulness, yoga y meditación profunda para sus equipos como beneficio de productividad.",
      icon: "🏢"
    },
    {
      title: "Turismo Astronómico",
      desc: "Experiencia diferenciada de observación estelar, aprovechando que la zona posee uno de los cielos más limpios del planeta.",
      icon: "✨"
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Header */}
      <section className="bg-verde-oscuro p-12 rounded-[3rem] text-cremita border-l-8 border-naranja shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-naranja/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-florenza mb-4">El Negocio: <span className="text-naranja italic">cómo opera y cómo se paga sola</span></h1>
          <p className="text-cremita/70 text-lg max-w-3xl font-light leading-relaxed">
            Una estructura empresarial robusta y dividida en tres unidades clave, con canales de captación internacionales y posicionamiento de precio premium.
          </p>
        </div>
      </section>

      {/* Bloque 1 - Estructura Societaria */}
      <div className="space-y-8">
        <h2 className="text-3xl font-florenza text-verde-oscuro text-center md:text-left">Estructura Societaria</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {units.map((unit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-marron-claro/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <span className="text-[10px] font-black uppercase text-naranja bg-naranja/5 px-3 py-1 rounded-full tracking-wider">{unit.role}</span>
                <h3 className="text-xl font-bold text-verde-oscuro mt-4 mb-2">{unit.title}</h3>
                <p className="text-sm text-gris-oscuro/70 leading-relaxed font-poppins">{unit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bloque 2 - Tres Ejes Comerciales */}
      <div className="space-y-8">
        <h2 className="text-3xl font-florenza text-verde-oscuro text-center md:text-left">Los Tres Ejes Comerciales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-white/60 shadow-sm hover:bg-white/60 transition-all text-center space-y-4"
            >
              <div className="w-16 h-16 bg-cremita rounded-full flex items-center justify-center text-3xl mx-auto shadow-inner">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-verde-oscuro">{pillar.title}</h3>
              <p className="text-sm text-gris-oscuro/70 leading-relaxed font-poppins">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bloque 3 - Canal de Clientes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-naranja/10 border-l-8 border-naranja p-10 rounded-[3rem] shadow-sm space-y-6"
      >
        <h2 className="text-3xl font-florenza text-verde-oscuro">Canal de Clientes: <span className="text-naranja italic">Captación Asegurada</span></h2>
        <p className="text-lg text-gris-oscuro/85 leading-relaxed font-light font-poppins">
          El modelo no depende de publicidad fría. Los <strong>operadores turísticos internacionales</strong> que ya traen turistas al Ecuador son el canal principal de llegada de huéspedes. Ellos envían el flujo y la propiedad ofrece la experiencia diferenciada de desconexión total.
        </p>
        <p className="text-lg text-gris-oscuro/85 leading-relaxed font-light font-poppins">
          Convenios con plataformas globales como <strong>Booking</strong> complementan la ocupación del día a día, complementado con venta directa a quienes buscan específicamente retiros.
        </p>
        <div className="pt-4 border-t border-naranja/20 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-verde-oscuro">Meta de Ocupación Mínima Anual</p>
            <p className="text-4xl font-black text-verde-oscuro">12%</p>
          </div>
          <p className="text-sm text-gris-oscuro/60 italic font-poppins max-w-lg">
            *Una cifra sumamente conservadora y no optimista para garantizar la sostenibilidad y el punto de equilibrio financiero desde el primer año.
          </p>
        </div>
      </motion.div>

      {/* Bloque 4 - Posicionamiento de Precio */}
      <div className="bg-verde-oscuro text-cremita p-10 md:p-14 rounded-[3rem] shadow-xl space-y-8">
        <div className="space-y-4">
          <span className="text-naranja font-black uppercase tracking-[0.2em] text-xs">Propuesta de Valor Exclusiva</span>
          <h2 className="text-4xl font-florenza">Posicionamiento de Precio Premium</h2>
          <p className="text-cremita/70 font-light max-w-3xl leading-relaxed">
            Nuestra política de <strong>cero alcohol, cero fiesta</strong> no es una limitación, es el filtro que nos permite cobrar tarifas premium. El visitante paga por la garantía de una desconexión real y de paz absoluta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl space-y-4">
            <h3 className="text-2xl font-bold text-naranja">Glampings Alpinos</h3>
            <p className="text-sm text-cremita/80 leading-relaxed font-poppins">Capacidad para 6 personas, equipados con la máxima tecnología solar y decks con vistas privilegiadas.</p>
            <div className="pt-2 flex justify-between items-baseline">
              <span className="text-xs text-cremita/50 uppercase tracking-wider">Tarifas por noche:</span>
              <span className="text-2xl font-black text-white">$240 <span className="text-xs font-light text-cremita/60">Baja</span> / $450 <span className="text-xs font-light text-cremita/60">Alta</span></span>
            </div>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl space-y-4">
            <h3 className="text-2xl font-bold text-naranja">Casas Grandes</h3>
            <p className="text-sm text-cremita/80 leading-relaxed font-poppins">Residencias de gran formato para grupos de hasta 12 personas, ideales para retiros íntimos corporativos y de bienestar.</p>
            <div className="pt-2 flex justify-between items-baseline">
              <span className="text-xs text-cremita/50 uppercase tracking-wider">Tarifas por noche:</span>
              <span className="text-2xl font-black text-white">$600 <span className="text-xs font-light text-cremita/60">Baja</span> / $1,000 <span className="text-xs font-light text-cremita/60">Alta</span></span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <Link href="/la-oferta" className="btn-primary px-12 py-5 text-xl font-bold shadow-2xl hover:scale-105 transition-all">
          💼 Ver la Oferta de Venta →
        </Link>
      </div>
    </div>
  );
}
