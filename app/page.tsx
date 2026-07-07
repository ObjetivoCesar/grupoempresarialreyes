"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getAssetUrl } from '@/lib/assets';
import TourPlayButton from '@/components/ui/TourPlayButton';

export default function DashboardHome() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="space-y-12">
      {/* Hero Section - Venta de Empresa */}
      <section className="relative rounded-[3rem] overflow-hidden bg-verde-oscuro p-12 md:p-20 text-cremita min-h-[600px] flex items-center shadow-2xl">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetUrl('/250k/exterior.jpg')}
            alt="Aroma de Montaña Exterior"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
        </div>

        <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 pointer-events-none select-none z-0">
          <Image src={getAssetUrl('/Logos/Recurso 33@4x.png')} alt="Pattern GER" fill className="object-contain p-20 rotate-12" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-naranja/10 border border-naranja/30 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-naranja animate-ping" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-naranja">Empresa Completa en Venta</span>
            </div>

            <h1 className="text-5xl md:text-[5rem] font-florenza leading-[1.05] text-balance">
              Aroma de Montaña <br />
              <span className="text-naranja italic text-4xl md:text-[4rem]">Una empresa turística en Los Andes del sur, lista para operar. En venta.</span>
            </h1>

            <p className="text-lg md:text-xl text-cremita/80 leading-relaxed font-light max-w-4xl">
              23.5 hectáreas productivas en Paltas, Loja. Activos físicos verificados por avalúo bancario, marca registrada, y un modelo de negocio de tres ejes ya diseñado para retiros espirituales, corporativos y turismo astronómico.
            </p>

            {/* Bajada corta (3 líneas) */}
            <div className="border-l-4 border-naranja pl-6 space-y-2 max-w-3xl my-6">
              <p className="text-sm md:text-base text-cremita/90 font-medium">
                🎯 <strong>Lo que compras:</strong> tierra, construcciones e infraestructura ya construida.
              </p>
              <p className="text-sm md:text-base text-cremita/90 font-medium">
                💼 <strong>Cómo genera ingresos:</strong> alianzas con operadores turísticos internacionales, Booking, y venta directa.
              </p>
              <p className="text-sm md:text-base text-cremita/90 font-medium">
                🛡️ <strong>Lo que necesitas saber antes de decidir:</strong> avance real, cifras, y la oferta completa.
              </p>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/la-oferta" className="btn-primary px-8 py-5 text-lg font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2">
                <span>Ver la oferta completa →</span>
              </Link>
              <Link href="/hacienda" className="bg-white/10 hover:bg-white/20 border border-white/20 text-cremita px-8 py-5 rounded-2xl transition-all font-bold text-lg backdrop-blur-md flex items-center justify-center">
                <span>Conocer el patrimonio</span>
              </Link>
              <div className="relative group">
                <TourPlayButton />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 text-white/50">
              {[
                'Propiedad 100% en Venta',
                'Avalúo Bancario Certificado',
                'Infraestructura Ejecutada',
                'Marca Registrada Incluida'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest">
                  <svg className="w-4 h-4 text-naranja" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  {text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Maestro Section */}
      <section className="relative w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/01eKtss_41Y?si=default"
          title="Video Aroma de Montaña"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>

      {/* Respaldo Institucional Corto */}
      <section className="space-y-6 py-12 border-t border-verde-oscuro/5">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-florenza text-verde-oscuro">Estructura del Proyecto</h2>
          <p className="text-gris-oscuro/60 max-w-2xl mx-auto">Sostenibilidad y patrimonio tangible listo para su traspaso completo.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: 'USD 230 mil Ejecutados', subtitle: 'Infraestructura', icon: '🏗️' },
            { title: '23.5 Hectáreas', subtitle: 'Área del Predio', icon: '📜' },
            { title: 'Licencia Ambiental', subtitle: 'MAATE Aprobada', icon: '🌿' },
            { title: 'Marca SENADI', subtitle: '10 Años de Vigencia', icon: '🛡️' },
          ].map((v, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-verde-oscuro/5 shadow-xl text-center group hover:bg-verde-oscuro hover:text-white transition-all duration-500">
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{v.icon}</div>
              <h4 className="text-sm font-black uppercase tracking-widest">{v.title}</h4>
              <p className="text-[10px] opacity-40 group-hover:opacity-60">{v.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Ubicación */}
      <section className="space-y-8 pt-12">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-florenza text-verde-oscuro">Ubicación Estratégica</h2>
          <p className="text-lg text-gris-oscuro/60 max-w-3xl mx-auto">
            Ubicados en el corazón de la zona UNESCO <span className="text-naranja font-bold">"Bosques de Paz"</span> en Paltas, Loja. Un entorno privilegiado para el bienestar y la rentabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/K1fzDMeVmNg?si=K00IRDX3dfALlsQ-"
              title="Ubicación Aroma de Montaña"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 bg-verde-oscuro text-cremita rounded-[2rem] shadow-xl space-y-4">
              <h3 className="text-2xl font-florenza">Geolocalización</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Nuestra hacienda se encuentra estratégicamente posicionada para capturar la demanda de turismo de bienestar y desconexión de alto nivel.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setShowMap(true)}
                  className="inline-flex items-center gap-2 bg-naranja text-white px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Ver en Google Maps
                </button>
              </div>
            </div>

            <div className="p-8 bg-white border border-verde-oscuro/5 rounded-[2rem] shadow-md space-y-4">
              <h4 className="text-lg font-bold text-verde-oscuro">Puntos de Interés</h4>
              <ul className="space-y-3">
                {[
                  'Corredor UNESCO Bosques de Paz',
                  'Fácil acceso vía aérea por Loja/Catamayo',
                  'Microclima ideal (18-24°C)',
                  'Entorno de agricultura regenerativa'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gris-oscuro/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-naranja shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Mapa */}
      <AnimatePresence>
        {showMap && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMap(false)}
              className="absolute inset-0 bg-verde-oscuro/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl aspect-video bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white"
            >
              <button
                onClick={() => setShowMap(false)}
                className="absolute top-4 right-4 z-20 bg-verde-oscuro text-white p-2 rounded-full hover:bg-naranja transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3980.046393068689!2d-79.61068742502471!3d-4.0108817959628515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMDAnMzkuMiJTIDc5wrAzNicyOS4yIlc!5e0!3m2!1ses-419!2sec!4v1770080392554!5m2!1ses-419!2sec"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
