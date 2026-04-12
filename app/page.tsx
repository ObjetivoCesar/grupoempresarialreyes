"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Gallery from '@/components/sections/Gallery';
import { getAssetUrl } from '@/lib/assets';
import TourPlayButton from '@/components/ui/TourPlayButton';

export default function DashboardHome() {
  const [showMap, setShowMap] = useState(false);

  // Schema.org JSON-LD for InvestmentOrDeposit
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InvestmentOrDeposit",
    "name": "Inversión en Aroma de Montaña",
    "description": "Oportunidades de inversión en turismo sostenible y glamping en Ecuador. Conviértete en socio o dueño de tu glamping.",
    "amount": {
      "@type": "MonetaryAmount",
      "minAmount": "50000",
      "maxAmount": "330000",
      "currency": "USD"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Loja, Ecuador"
    },
    "provider": {
      "@type": "Organization",
      "name": "Grupo Empresarial Reyes",
      "url": "https://grupoempresarialreyes.vercel.app"
    }
  };

  return (
    <div className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 5-Second Hero: Oportunidad de Pre-Lanzamiento */}
      <section className="relative rounded-[3rem] overflow-hidden bg-verde-oscuro p-12 md:p-20 text-cremita min-h-[650px] flex items-center shadow-2xl">
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

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-naranja/10 border border-naranja/30 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-naranja animate-ping" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-naranja">Oportunidad de Pre-Lanzamiento</span>
            </div>

            <h1 className="text-6xl md:text-[5.5rem] font-florenza leading-[0.95] text-balance">
              Una Sociedad <br />
              <span className="text-naranja italic">50/50 para el Éxito.</span>
            </h1>

            <p className="text-xl md:text-2xl text-cremita/70 leading-relaxed font-light max-w-2xl">
              Conviértete en socio estratégico o adquiere tu propio Glamping de Lujo. Un modelo dual de alta rentabilidad basado en patrimonio real y hospitalidad.
            </p>

            <div className="space-y-3 pt-2">
              <p className="text-sm font-black uppercase tracking-widest text-cremita/50">¿Cuánto quieres invertir?</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/oportunidad" className="bg-white/10 hover:bg-naranja hover:text-white border border-white/20 text-cremita px-5 py-3 rounded-xl transition-all font-bold text-sm backdrop-blur-md">
                  $330k (Socio Estratégico o participación a prorrata)
                </Link>
                <Link href="/oportunidad" className="bg-white/10 hover:bg-naranja hover:text-white border border-white/20 text-cremita px-5 py-3 rounded-xl transition-all font-bold text-sm backdrop-blur-md">
                  $100k-$250k (Dueño Glamping)
                </Link>
                <Link href="/oportunidad" className="bg-white/10 hover:bg-naranja hover:text-white border border-white/20 text-cremita px-5 py-3 rounded-xl transition-all font-bold text-sm backdrop-blur-md">
                  Desde $50k (Visionario)
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <a href={getAssetUrl('/Images/Aroma_de_Montana_Inversion_ES.pdf')} download target="_blank" className="btn-primary px-8 py-5 text-lg font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2">
                  <span>🇪🇸 DESCUBRE EN ESPAÑOL</span>
                </a>
                <a href={getAssetUrl('/Images/Aroma_de_Montana_Investment_EN.pdf')} download target="_blank" className="btn-primary px-8 py-5 text-lg font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2 opacity-90 brightness-90">
                  <span>🇺🇸 EXPLORE IN ENGLISH</span>
                </a>
              </div>
              <div className="relative group">
                <TourPlayButton />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 text-white/50">
              {[
                'Usufructo Garantizado',
                'Permiso de Construcción',
                'Gerencia Hotelera',
                'Alta Plusvalía (Loja)'
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

      {/* Video Section - Added per user request */}
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

      {/* Galería de Impacto */}
      <Gallery />

      {/* Razón de Inversión (Por qué Invertir) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-8">
        <div className="space-y-6">
          <h2 className="text-5xl font-florenza text-verde-oscuro">Tu dinero en el banco <span className="text-naranja italic">se evapora.</span> <br /> Aquí se multiplica.</h2>
          <p className="text-lg text-gris-oscuro/80 leading-relaxed font-light">
            Mientras la inflación devora tus ahorros, la demanda de turismo regenerativo crece al 12% anual.
            <br /><br />
            No compras "tiempo compartido". Compras <strong>infraestructura y participación</strong> en el negocio del futuro: el TURISMO DE BIENESTAR, diseñado para generar rentabilidad y cumplir tu propósito.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 md:p-8 bg-verde-oscuro text-cremita rounded-3xl space-y-2">
            <p className="text-3xl md:text-5xl font-bold text-naranja">50%</p>
            <p className="text-xs font-bold uppercase tracking-widest">Utilidad Neta</p>
            <p className="text-[10px] opacity-50 italic">Para socio estratégico y dueño operativo.</p>
          </div>
          <div className="p-6 md:p-8 bg-white border border-verde-oscuro/5 rounded-3xl space-y-2 shadow-sm">
            <p className="text-3xl md:text-5xl font-bold text-verde-oscuro">7</p>
            <p className="text-xs font-bold uppercase tracking-widest text-gris-oscuro/40">Líneas de Ingreso</p>
            <p className="text-[10px] text-gris-oscuro/40 italic">Hospedaje, retiros, cafetería, eventos y más.</p>
          </div>
          <div className="p-6 md:p-8 bg-white border border-verde-oscuro/5 rounded-3xl space-y-2 shadow-sm flex flex-col justify-center items-center text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-gris-oscuro/40">Opción B: Tu Glamping</p>
            <p className="text-3xl md:text-5xl font-black text-verde-oscuro">$100k</p>
            <p className="text-[10px] text-naranja font-black uppercase tracking-widest mt-2">DUEÑO DEL ACTIVO Y 50% DE UTILIDAD</p>
          </div>
          <div className="p-6 md:p-8 bg-cafe-acento text-white rounded-3xl space-y-2 flex flex-col justify-center items-center text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-white/40">Inversión Societaria</p>
            <p className="text-3xl md:text-5xl font-bold text-naranja">$330k</p>
            <p className="text-[10px] opacity-70 uppercase font-black tracking-widest leading-tight mt-2">Participación 50/50 del Proyecto Completo</p>
          </div>
        </div>
      </div>

      {/* Validaciones Reales (Social Proof) */}
      <section className="space-y-12 py-20 border-t border-verde-oscuro/5">
        <div className="text-center space-y-4">
          <h2 className="text-5xl font-florenza text-verde-oscuro">Validaciones <span className="text-naranja italic">Reales</span></h2>
          <p className="text-gris-oscuro/60 max-w-2xl mx-auto">Respaldo jurídico y ejecución tangible que garantiza tu seguridad física y financiera.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { title: 'USD 230 mil Ejecutados', subtitle: 'Capital Propio', icon: '🏗️' },
            { title: '23.5 Hectáreas', subtitle: 'Escrituradas', icon: '📜' },
            { title: 'Licencia MAATE', subtitle: 'Aprobada', icon: '🌿' },
            { title: 'Marca SENADI', subtitle: '10 Años', icon: '🛡️' },
            { title: 'Taza Dorada', subtitle: 'Alianza Cafetera', icon: '☕' },
            { title: 'Sociedad 50/50', subtitle: 'Copropiedad Directa', icon: '🤝' },
          ].map((v, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-verde-oscuro/5 shadow-xl text-center group hover:bg-verde-oscuro hover:text-white transition-all duration-500">
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{v.icon}</div>
              <h4 className="text-sm font-black uppercase tracking-widest">{v.title}</h4>
              <p className="text-[10px] opacity-40 group-hover:opacity-60">{v.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 pt-8">
          <Link href="/seguridad" className="bg-verde-oscuro text-white px-12 py-5 rounded-full text-xl font-bold shadow-xl hover:scale-105 transition-all">
            💰 Descubre Tu Retorno Estimado
          </Link>
          <button className="text-verde-oscuro font-bold underline decoration-naranja decoration-2 underline-offset-4">
            Agendar llamada para ver documentos de respaldo
          </button>
        </div>
      </section>

      {/* Pilares del Proyecto */}
      <section className="space-y-12 pt-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-florenza text-verde-oscuro">Nuestros <span className="text-naranja italic">Pilares Estratégicos</span></h2>
          <p className="text-cremita/10 font-black uppercase tracking-[0.3em] text-[10px]">Sostenibilidad con Propósito</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Astroturismo 360',
              desc: 'Cielos de Clase Mundial en una zona con bajísima contaminación lumínica. Telescopios privados y tours estelares guiados.',
              icon: '🔭',
            },
            {
              title: 'Monumentos a los Elementos',
              desc: 'Arquitectura viva: Monumentos al Agua, Aire, Fuego y Tierra diseñados para el recorrido contemplativo y la introspección.',
              icon: '🗿',
            },
            {
              title: 'Café de Especialidad',
              desc: 'Variedades tricampeonas de la Taza Dorada estimuladas con música barroca y frecuencias de 432 Hz para un sabor único.',
              icon: '☕',
            }
          ].map((pillar, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] border border-verde-oscuro/5 shadow-xl text-center space-y-6 group transition-all duration-500 hover:shadow-2xl hover:bg-verde-oscuro"
            >
              <div className="w-20 h-20 bg-cremita rounded-full flex items-center justify-center text-4xl mx-auto shadow-inner group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-florenza text-verde-oscuro group-hover:text-cremita transition-colors">{pillar.title}</h3>
                <p className="text-sm text-gris-oscuro/60 leading-relaxed group-hover:text-cremita/70 transition-colors">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
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
                Nuestra hacienda se encuentra estratégicamente posicionada para capturar la demanda de turismo regenerativo y bienestar de alto nivel.
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
