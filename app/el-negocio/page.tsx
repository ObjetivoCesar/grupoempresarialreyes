"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import { getAssetUrl } from '@/lib/assets';

const units = [
  {
    id: 'hacienda',
    title: '1. Hacienda Aroma de Montaña',
    role: 'Núcleo Territorial',
    desc: 'El activo físico y productivo. Dueña legal de las 23.5 hectáreas sobre la Panamericana, reservorios de agua (8,000 m³), senderos, casa modelo y plantaciones de café especialidad (variedades Sidra/Borbón).',
    details: [
      'Respaldo tangible de copropiedad notariada.',
      'Cafetería de especialidad y centro de catas.',
      'Seguridad hídrica y energía renovable 100% solar.'
    ]
  },
  {
    id: 'operations',
    title: '2. Aroma de Montaña Operations',
    role: 'Motor Comercial',
    desc: 'La empresa comercializadora. Gestiona las reservas, la logística del complejo de glamping, la organización de retiros B2B, los eventos de astroturismo y la cafetería.',
    details: [
      'Distribución automatizada 50/50 de utilidades.',
      'Convenios de comercialización internacionales.',
      'Administración centralizada libre de preocupaciones.'
    ]
  },
  {
    id: 'inversions',
    title: '3. Aroma de Montaña Inversions',
    role: 'Estructura Patrimonial',
    desc: 'El vehículo legal de participación societaria. Blindaje legal y administración de activos que conecta al socio inversor con las utilidades de toda la marca y los activos físicos.',
    details: [
      'Gobernanza clara por escritura pública.',
      'Trazabilidad total mediante motor de reservas.',
      'Plusvalía respaldada en el crecimiento del predio.'
    ]
  }
];

const incomeMotors = [
  { id: 1, title: 'Venta de Glampings', desc: 'Utilidad neta de $80,000 a $150,000 por la venta de unidades individuales a terceros.', icon: '🛖' },
  { id: 2, title: 'Alquiler Hotelero', desc: 'Ingresos diarios por ocupación B2C de cabañas alpinas y residencias de lujo.', icon: '🛌' },
  { id: 3, title: 'Cafetería de Lujo', desc: 'Epicentro social de alta degustación con márgenes operativos superiores al 60%.', icon: '☕' },
  { id: 4, title: 'Retiros y Grupos', desc: 'Contratos corporativos B2B de mindfulness, yoga y alto rendimiento humano.', icon: '🧘' },
  { id: 5, title: 'Pasadía y Tours', desc: 'Ingresos por cobro de entradas y day-pass para acceso controlado de turistas.', icon: '🎟️' },
  { id: 6, title: 'Eventos Privados', desc: 'Alquiler exclusivo del predio para bodas, celebraciones y eventos astronómicos.', icon: '✨' },
  { id: 7, title: 'Membresías VIP', desc: 'Acceso prioritario anticipado para socios y huéspedes recurrentes de alto perfil.', icon: '💳' },
];

import Script from 'next/script';

export default function ElNegocioPage() {
  const [activeTab, setActiveTab] = useState('hacienda');

  const activeUnit = units.find((u) => u.id === activeTab) || units[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BusinessOpportunity",
    "name": "Ecosistema Comercial Aroma de Montaña - 7 Motores de Ingreso",
    "description": "Modelo de negocio y viabilidad comercial del proyecto turístico Aroma de Montaña en Paltas, Loja. Incluye glamping, cafetería de especialidad, astroturismo y retiros corporativos.",
    "url": "https://grupoempresarialreyes.vercel.app/el-negocio",
    "provider": {
      "@type": "Organization",
      "name": "Grupo Empresarial Reyes S.A.S. B.I.C."
    }
  };

  return (
    <div className="space-y-16 pb-20">
      <Script
        id="el-negocio-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        badge="Modelo Operativo y Viabilidad Comercial"
        title="El Negocio:"
        titleAccent="7 motores de generación de valor"
        subtitle="Un ecosistema diversificado de flujos de caja diseñado para maximizar el ROI sobre activos inmobiliarios."
        imagePath="/Trabajos/PXL_20240712_202824222.webp"
        stats={[
          { label: 'Motores de Ingreso', value: '7' },
          { label: 'Glamping / noche', value: '$240–$450' },
          { label: 'Ocupación Mínima', value: '12% anual' },
          { label: 'Mercado', value: 'Nacional + Inter.' },
        ]}
      />

      {/* BLOQUE 0 — Reencuadre */}
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

      {/* Bloque 1 - Los 7 Motores de Ingreso */}
      <div className="space-y-8">
        <div className="text-center md:text-left space-y-2">
          <span className="text-naranja font-black uppercase tracking-widest text-xs">Diversificación Máxima</span>
          <h2 className="text-3xl md:text-4xl font-florenza text-verde-oscuro">Los 7 Motores de Ingreso</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {incomeMotors.map((motor) => (
            <div
              key={motor.id}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-3xl border border-marron-claro/10 hover:shadow-md transition-all space-y-4"
            >
              <div className="w-12 h-12 bg-cremita rounded-2xl flex items-center justify-center text-xl shadow-inner">
                {motor.icon}
              </div>
              <div>
                <span className="text-[10px] font-black uppercase text-naranja bg-naranja/5 px-2 py-0.5 rounded-full tracking-wider">Motor #0{motor.id}</span>
                <h3 className="text-lg font-bold text-verde-oscuro mt-2 mb-1">{motor.title}</h3>
                <p className="text-xs text-gris-oscuro/70 leading-relaxed font-poppins">{motor.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bloque 2 - Estructura del Ecosistema (Tabs) */}
      <div className="space-y-8 pt-6">
        <div className="text-center md:text-left space-y-2">
          <span className="text-naranja font-black uppercase tracking-widest text-xs">Organización Corporativa</span>
          <h2 className="text-3xl md:text-4xl font-florenza text-verde-oscuro">Estructura del Ecosistema</h2>
          <p className="text-sm text-gris-oscuro/60 max-w-xl">
            La separación en tres unidades garantiza la protección del activo de tierra frente a los riesgos operativos comerciales.
          </p>
        </div>

        {/* Selector de Pestañas (Tabs) */}
        <div className="bg-white/40 backdrop-blur-md p-2 rounded-3xl border border-white/60 flex flex-wrap md:flex-nowrap gap-2 max-w-2xl">
          {units.map((unit) => (
            <button
              key={unit.id}
              onClick={() => setActiveTab(unit.id)}
              className={`flex-1 px-4 py-3 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all text-center ${activeTab === unit.id
                ? 'bg-verde-oscuro text-white shadow-lg'
                : 'hover:bg-cremita/50 text-gris-oscuro/50'
                }`}
            >
              {unit.title.split('. ')[1]}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          >
            {/* Info Panel */}
            <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-[2.5rem] border border-marron-claro/10 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase text-naranja bg-naranja/5 px-3 py-1 rounded-full tracking-wider">{activeUnit.role}</span>
                <h3 className="text-2xl font-bold text-verde-oscuro">{activeUnit.title}</h3>
                <p className="text-sm text-gris-oscuro/80 leading-relaxed font-poppins">{activeUnit.desc}</p>
              </div>

              <div className="border-t border-verde-oscuro/5 pt-4 space-y-3">
                {activeUnit.details.map((detail, di) => (
                  <div key={di} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-cremita rounded-full flex items-center justify-center text-[10px] font-black text-verde-oscuro mt-0.5 shrink-0">✓</span>
                    <span className="text-xs text-gris-oscuro font-semibold leading-relaxed font-poppins">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Panel */}
            <div className="lg:col-span-5 relative rounded-[2.5rem] overflow-hidden min-h-[250px] shadow-lg">
              <Image
                src={activeTab === 'hacienda' ? getAssetUrl('/Images/naturaleza-2.jpg') : activeTab === 'operations' ? getAssetUrl('/Images/hacienda-view.jpg') : getAssetUrl('/Images/Aroma de Montaña.webp')}
                alt={activeUnit.title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bloque 3 - Enlaces Contextuales (Estrategia y Cronograma) */}
      <div className="bg-verde-oscuro text-cremita p-10 md:p-14 rounded-[3rem] shadow-xl space-y-8">
        <div className="space-y-4 text-center md:text-left">
          <span className="text-naranja font-black uppercase tracking-[0.2em] text-xs">Respaldo y Planificación</span>
          <h2 className="text-3xl md:text-4xl font-florenza">Planificación y Estrategia Detallada</h2>
          <p className="text-cremita/70 font-light max-w-3xl leading-relaxed">
            Ofrecemos total transparencia a quienes deseen auditar el modelo de negocio. Puedes inspeccionar las proyecciones financieras y las fases de implementación de hasta 18 meses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs text-naranja font-bold uppercase tracking-widest">Fases de Ejecución</span>
              <h3 className="text-xl font-bold text-white mt-2">Cronograma del Proyecto</h3>
              <p className="text-xs text-cremita/60 mt-1 leading-relaxed">
                Revisa los hitos legales, de infraestructura y construcción planificados en fases de hasta 18 meses para la habilitación de activos.
              </p>
            </div>
            <Link href="/el-negocio/cronograma" className="px-6 py-3.5 bg-naranja text-white font-bold rounded-xl text-center hover:bg-naranja/80 transition-colors text-xs uppercase tracking-wider">
              Ver Cronograma de Ejecución →
            </Link>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs text-naranja font-bold uppercase tracking-widest">Retorno Financiero</span>
              <h3 className="text-xl font-bold text-white mt-2">Estrategia de Proyecciones</h3>
              <p className="text-xs text-cremita/60 mt-1 leading-relaxed">
                Analiza las líneas de captación garantizada mediante convenios europeos, los ingresos por cafetería y day-pass, y el desglose de ROI.
              </p>
            </div>
            <Link href="/el-negocio/estrategia" className="px-6 py-3.5 bg-cremita text-verde-oscuro font-bold rounded-xl text-center hover:bg-cremita/80 transition-colors text-xs uppercase tracking-wider">
              Ver Estrategia de Proyecciones →
            </Link>
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
