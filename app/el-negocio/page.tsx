"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';

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
      desc: "Dirigidos a público general buscando desconexión. Activación constante mediante campañas de Facebook Ads y marketing digital.",
      icon: "🧘"
    },
    {
      title: "Retiros Corporativos",
      desc: "Empresas corporativas que buscan mindfulness, yoga y meditación profunda para sus equipos como beneficio de productividad.",
      icon: "🏢"
    },
    {
      title: "Retiros de Pareja",
      desc: "Experiencias de reconexión para parejas en crisis o que buscan fortalecer su relación. Ticket alto, demanda validada directamente por un operador turístico del sector.",
      icon: "💑"
    },
    {
      title: "Turismo Astronómico",
      desc: "Experiencia diferenciada de observación estelar, aprovechando que la zona posee uno de los cielos más limpios del planeta.",
      icon: "✨"
    }
  ];

  return (
    <div className="space-y-16 pb-20">

      <PageHero
        badge="Cómo genera ingresos"
        title="El Negocio:"
        titleAccent="no es una finca que se alquila, es una empresa que vende experiencias"
        subtitle="Una máquina comercial de generación de demanda con un activo físico único detrás."
        imagePath="/250k/interior_1.jpg"
        stats={[
          { label: 'Ejes Comerciales', value: '4' },
          { label: 'Glamping / noche', value: '$240–$450' },
          { label: 'Ocupación Mínima', value: '12% anual' },
          { label: 'Mercado', value: 'Nacional + Inter.' },
        ]}
      />

      {/* BLOQUE 0 — Reencuadre (va primero, es el más importante) */}
      <div className="bg-cremita/40 border-2 border-verde-oscuro/20 rounded-[3rem] p-10 md:p-14 space-y-4">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-verde-oscuro/50">Por qué esto no es turismo espontáneo</p>
        <p className="text-lg md:text-xl text-gris-oscuro/90 leading-relaxed font-poppins font-light">
          Este no es un negocio de alquilar casas en una montaña esperando que alguien llegue. Es una empresa que <strong>diseña y vende, a nivel nacional e internacional, paquetes de experiencias de alto valor</strong>: retiros corporativos para empresas que buscan potenciar a su personal, retiros espirituales y de bienestar, retiros de pareja, y turismo astronómico — todo con un precio de ticket alto, porque el cliente paga por una desconexión real, no por una habitación.
        </p>
        <p className="text-lg md:text-xl text-gris-oscuro/90 leading-relaxed font-poppins font-light">
          La demanda no se genera esperando turismo espontáneo: llega por <strong>operadores turísticos internacionales</strong> que ya movilizan viajeros hacia Ecuador, por convenios corporativos B2B, y por la cercanía estratégica con Perú (a una hora y media), que amplía el mercado de captación más allá de las fronteras nacionales.
        </p>
        <div className="pt-4 border-t border-verde-oscuro/10">
          <p className="text-base font-bold text-verde-oscuro font-poppins">
            En resumen: se vende una <strong>máquina comercial de generación de demanda</strong> con un activo físico único detrás — no al revés.
          </p>
        </div>
      </div>

      {/* Bloque 1 - Estructura Societaria */}
      <div className="space-y-8">
        <h2 className="text-3xl font-florenza text-verde-oscuro">Estructura Societaria</h2>
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

      {/* Bloque 2 - Cuatro Ejes Comerciales */}
      <div className="space-y-8">
        <h2 className="text-3xl font-florenza text-verde-oscuro">Los Cuatro Ejes Comerciales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-white/60 shadow-sm hover:bg-white/60 transition-all text-center space-y-4"
            >
              <div className="w-14 h-14 bg-cremita rounded-full flex items-center justify-center text-2xl mx-auto shadow-inner">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-verde-oscuro">{pillar.title}</h3>
              <p className="text-xs text-gris-oscuro/70 leading-relaxed font-poppins">{pillar.desc}</p>
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
          Convenios con plataformas globales como <strong>Booking</strong> complementan la ocupación del día a día, junto con venta directa a quienes buscan específicamente retiros de desconexión.
        </p>
        <div className="pt-4 border-t border-naranja/20 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-verde-oscuro font-poppins">Meta de Ocupación Mínima Anual</p>
            <p className="text-4xl font-black text-verde-oscuro">12%</p>
          </div>
          <p className="text-sm text-gris-oscuro/60 italic font-poppins max-w-lg">
            *Cifra conservadora y no optimista para garantizar la sostenibilidad y el punto de equilibrio financiero desde el primer año.
          </p>
        </div>
      </motion.div>

      {/* Bloque 4 - Tarifas de Hospedaje */}
      <div className="bg-verde-oscuro text-cremita p-10 md:p-14 rounded-[3rem] shadow-xl space-y-8">
        <div className="space-y-4">
          <span className="text-naranja font-black uppercase tracking-[0.2em] text-xs">Ingreso Operativo — No es el precio de venta de la empresa</span>
          <h2 className="text-4xl font-florenza">Tarifas de Hospedaje</h2>
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

      {/* BLOQUE 5 — Potencial de Desarrollo (PROYECTADO — visualmente diferenciado) */}
      <div className="relative border-2 border-dashed border-gris-oscuro/20 rounded-[3rem] p-10 md:p-12 bg-gris-oscuro/3 space-y-6">
        {/* Etiqueta de proyección */}
        <div className="absolute -top-4 left-8 bg-gris-oscuro text-white text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-full">
          Proyección Futura — No Parte del Patrimonio Verificado
        </div>

        <div className="pt-4 space-y-4">
          <h2 className="text-2xl md:text-3xl font-florenza text-gris-oscuro/80">Potencial de Desarrollo del Terreno</h2>
          <p className="text-gris-oscuro/60 text-sm font-poppins italic">
            Lo que sigue no es activo verificado ni forma parte del precio de venta. Es el camino de crecimiento que el comprador puede ejecutar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/50 p-6 rounded-2xl border border-gris-oscuro/10 space-y-3">
            <h4 className="font-bold text-gris-oscuro/80 text-lg">Glampings Estándar</h4>
            <p className="text-sm text-gris-oscuro/60 font-poppins leading-relaxed">12 unidades proyectadas. Costo estimado de construcción USD 25,000 c/u. Valor de venta proyectado USD 100,000 c/u.</p>
            <p className="text-xs text-gris-oscuro/40 font-poppins italic">*Estimado, no ejecutado</p>
          </div>
          <div className="bg-white/50 p-6 rounded-2xl border border-gris-oscuro/10 space-y-3">
            <h4 className="font-bold text-gris-oscuro/80 text-lg">Unidades Premium en Cúspide</h4>
            <p className="text-sm text-gris-oscuro/60 font-poppins leading-relaxed">Posición privilegiada sin obstáculos visuales, diseñadas para amanecer, atardecer y observación astronómica. Valor de venta proyectado USD 250,000 c/u.</p>
            <p className="text-xs text-gris-oscuro/40 font-poppins italic">*Estimado, no ejecutado</p>
          </div>
        </div>

        <div className="pt-4 border-t border-gris-oscuro/10 text-center">
          <p className="text-gris-oscuro/50 text-sm font-poppins">Potencial de desarrollo estimado total: <span className="font-black text-gris-oscuro/70 text-base">+USD 1.200.000</span></p>
          <p className="text-xs text-gris-oscuro/40 italic font-poppins mt-1">Sujeto a construcción y comercialización futuras. No incluido en la oferta de venta actual.</p>
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
