'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardHome() {
  return (
    <div className="space-y-12">
      {/* 5-Second Hero: Oportunidad de Pre-Lanzamiento */}
      <section className="relative rounded-[3rem] overflow-hidden bg-verde-oscuro p-12 md:p-20 text-cremita min-h-[650px] flex items-center shadow-2xl">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/250k/exterior.jpg"
            alt="Aroma de Montaña Exterior"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
        </div>

        <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 pointer-events-none select-none z-0">
          <Image src="/Logos/Recurso 33@4x.png" alt="Pattern GER" fill className="object-contain p-20 rotate-12" />
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
              Invierte $30k. <br />
              Genera Retornos <span className="text-naranja italic">{'>'}33% Anuales.</span>
            </h1>

            <p className="text-xl md:text-2xl text-cremita/70 leading-relaxed font-light max-w-2xl">
              Házte dueño de un Glamping de Lujo en propiedad real. Con flujo de caja diario y pagos automáticos garantizados por expertos.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/producto" className="btn-primary px-10 py-5 text-xl font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all">
                🌄 ASEGURA TU PARTICIPACIÓN - AGENDA LLAMADA
              </Link>
              <div className="relative group">
                <Link href="https://wa.me/593963410409" target="_blank" className="px-10 py-5 rounded-full border-2 border-cremita/10 hover:border-naranja/50 hover:bg-white/5 transition-all font-bold text-lg flex items-center justify-center">
                  Ver Modelos Completos →
                </Link>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gris-oscuro text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
                  📞 Hablar con un Asesor Ahora
                </div>
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
          <div className="p-8 bg-verde-oscuro text-cremita rounded-3xl space-y-2">
            <p className="text-4xl font-bold text-naranja">33.9%</p>
            <p className="text-xs font-bold uppercase tracking-widest">ROI Promedio</p>
            <p className="text-[10px] opacity-50 italic">Crecimiento progresivo en 5 años.</p>
          </div>
          <div className="p-8 bg-white border border-verde-oscuro/5 rounded-3xl space-y-2 shadow-sm">
            <p className="text-4xl font-bold text-verde-oscuro">25%</p>
            <p className="text-xs font-bold uppercase tracking-widest text-gris-oscuro/40">Ocupación Promedio</p>
            <p className="text-[10px] text-gris-oscuro/40 italic">Meta proyectada de equilibrio operacional.</p>
          </div>
          <div className="p-8 bg-white border border-verde-oscuro/5 rounded-3xl space-y-2 shadow-sm flex flex-col justify-center items-center text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-gris-oscuro/40">Inversión Inicial</p>
            <p className="text-6xl font-black text-verde-oscuro">$30,000</p>
            <p className="text-[10px] text-naranja font-black uppercase tracking-widest mt-2">ASEGURA TU PARTICIPACIÓN</p>
          </div>
          <div className="p-8 bg-cafe-acento text-white rounded-3xl space-y-2">
            <p className="text-4xl font-bold text-naranja">$62,450</p>
            <p className="text-[10px] opacity-70 uppercase font-black tracking-widest leading-tight">Ganancia Total 60 Meses (Modelo $30k)</p>
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
            { title: '$240,000 Ejecutados', subtitle: 'Infraestructura Real', icon: '🏗️' },
            { title: '23.5 Hectáreas', subtitle: 'Escrituradas', icon: '📜' },
            { title: 'Licencia MAATE', subtitle: 'Aprobada', icon: '🌿' },
            { title: 'Marca SENADI', subtitle: '10 Años', icon: '🛡️' },
            { title: 'Taza Dorada', subtitle: 'Alianza Cafetera', icon: '☕' },
            { title: 'Fideicomiso', subtitle: 'Blindaje Total', icon: '🏛️' },
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
              title: 'Agricultura Regenerativa',
              desc: 'Restauramos la biodiversidad local mediante policultivos y técnicas que sanan la tierra mientras producen valor.',
              icon: '🌱',
            },
            {
              title: 'Turismo Sostenible',
              desc: 'Infraestructura de bajo impacto diseñada para coexistir con el entorno virgen, generando empleo local digno.',
              icon: '🌍',
            },
            {
              title: 'Café Orgánico',
              desc: 'Producción de café de especialidad (Taza Dorada) que integra al inversor en la cadena de valor agrícola.',
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
                <a
                  href="https://maps.app.goo.gl/YourMapLinkHere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-naranja text-white px-6 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Ver en Google Maps
                </a>
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
    </div>
  );
}
