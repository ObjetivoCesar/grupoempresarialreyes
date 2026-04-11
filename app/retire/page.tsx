'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Gallery from '@/components/sections/Gallery';
import VideoModal from '@/components/ui/VideoModal';

export default function RetirePage() {
  const [modalConfig, setModalConfig] = useState({ isOpen: false, youtubeId: '_zVqx9Re0f0' });

  const openVideo = (id?: string) => setModalConfig({ isOpen: true, youtubeId: id || '_zVqx9Re0f0' });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "TouristAttraction"],
    name: "Reserva Aroma de Montaña",
    description: "Una reserva privada de montaña en el sur de Ecuador donde te esperan 9 meses de sol, café de clase mundial y tu propia casa glamping de lujo.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paltas",
      addressRegion: "Loja",
      addressCountry: "EC"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-4.0108818",
      longitude: "-79.6106874"
    },
    url: "https://grupoempresarialreyes.vercel.app/retire",
    telephone: "+593963410409"
  };

  const experiences = [
    { icon: '☕', title: 'Olmedo', desc: "El Mejor Café de Especialidad del Mundo", distance: '20 min' },
    { icon: '✈️', title: 'Aeropuerto Internacional', desc: "Aeropuerto de Catamayo (LOH)", distance: '40 min' },
    { icon: '🌿', title: 'Parque Nacional Podocarpus', desc: "Más de 550 especies de aves", distance: '1 hr' },
    { icon: '🪨', title: 'Bosque Petrificado Puyango', desc: "Árboles milenarios de hace 10,000 años", distance: 'cerca' },
    { icon: '💧', title: 'Baño del Inca', desc: "Cascada sagrada y piscinas naturales", distance: '1.5 hrs' },
    { icon: '🌬️', title: 'Parque Eólico', desc: "Corredor de energía renovable", distance: 'cerca' },
    { icon: '🏙️', title: 'Ciudad de Loja', desc: "Arquitectura colonial, universidades y hospitales", distance: '40 min' }
  ];

  return (
    <div className="space-y-16 pb-20 bg-cremita/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO SECTION */}
      <section className="relative rounded-b-[4rem] overflow-hidden bg-verde-oscuro p-10 md:p-20 text-cremita min-h-[85vh] flex items-center shadow-2xl">
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80" 
          style={{ backgroundImage: "url('/Images/Aroma de Montaña.webp')" }}
        ></div>
        
        <div className="relative z-20 max-w-4xl mx-auto text-center space-y-8 mt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-florenza text-white leading-tight"
          >
            Despierta sobre las nubes. <br />
            <span className="text-naranja italic">Todos los días.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-cremita/90 font-light max-w-3xl mx-auto"
          >
            Una reserva privada en la montaña al sur de Ecuador donde 9 meses de sol, café de especialidad y una casa de lujo tipo glamping te esperan — y trabajan para ti cuando no estás.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8"
          >
            <button 
              onClick={() => openVideo()}
              className="btn-primary px-8 py-5 text-lg font-bold shadow-xl flex items-center gap-2 group"
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-all">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
              </div>
              Ver video de 2 minutos
            </button>
            <a href="#availability" className="px-8 py-5 rounded-full border-2 border-cremita text-cremita hover:bg-cremita hover:text-verde-oscuro transition-all font-bold text-lg">
              Checkear disponibilidad
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: La vida que te espera */}
      <section className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-florenza text-verde-oscuro">
              Esto no son vacaciones. <br />
              <span className="text-naranja italic">Es tu próximo capítulo.</span>
            </h2>
            <p className="text-lg md:text-xl text-gris-oscuro/80 font-light leading-relaxed">
              Aroma de Montaña se encuentra en 23.5 hectáreas de tierra privada de montaña en Loja, Ecuador — una de las regiones más biodiversas y ricas culturalmente de América del Sur.
            </p>
            <p className="text-lg md:text-xl text-gris-oscuro/80 font-light leading-relaxed">
              Estás a 40 minutos del aeropuerto internacional, por vía pavimentada, con 9 meses de sol al año. ¿Los otros 3? Perfectos para mañanas acogedoras con una taza del mejor café de especialidad del mundo.
            </p>
            <div className="bg-white p-8 rounded-3xl border border-naranja/10 shadow-sm space-y-4">
              <h3 className="font-bold text-verde-oscuro">El Ecosistema de los Sentidos:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gris-oscuro/70">
                <li className="flex gap-2">
                  <span className="text-naranja">🎼</span>
                  <span><strong>Café con música:</strong> Cultivos estimulados con música barroca (432Hz).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-naranja">🗿</span>
                  <span><strong>Monumentos:</strong> Espacios de meditación al Aire, Fuego y Tierra.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-naranja">🧘</span>
                  <span><strong>Sendero de Sanación:</strong> Yoga y terapias holísticas al aire libre.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-naranja">🔭</span>
                  <span><strong>Astroturismo:</strong> Cielos clase mundial para avistamiento galáctico.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-naranja/20 blur-3xl rounded-full"></div>
            <img src="/Images/trazabilidad.png" alt="Vida en las montañas" className="relative z-10 w-full h-[500px] object-cover rounded-[3rem] shadow-2xl" />
          </div>
        </div>
      </section>

      {/* SECTION 3: Lo que está a tu alrededor */}
      <section className="bg-verde-oscuro py-20 text-cremita relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-florenza">Todo lo que necesitas. <br /><span className="text-naranja italic">Nada de lo que no.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl mb-4">{exp.icon}</div>
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <p className="text-cremita/70 font-light mb-4">{exp.desc}</p>
                <div className="inline-block bg-naranja/20 text-naranja px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                  {exp.distance}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de Inmersión */}
      <section className="container mx-auto px-6">
        <Gallery />
      </section>

      {/* SECTION 4: El modelo de propiedad */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-2xl border border-marron-claro/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img src="/Images/Blindaje Fiduciario.webp" alt="Modelo de Propiedad" className="w-full h-auto rounded-[2rem] shadow-xl" />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-florenza text-verde-oscuro">
                Dueño de tu hogar. <br />
                <span className="text-naranja italic">Alquílalo mientras no estás.</span>
              </h2>
              <p className="text-lg text-gris-oscuro/80 font-light leading-relaxed">
                Tu residencia Glamping puede alojar hasta 12 personas. Es tuya — con título de propiedad. Cuando no estás aquí, forma parte de nuestro portafolio de hotelería de lujo y te genera ingresos automáticamente. Recibes el 50% de los ingresos netos. Nosotros nos encargamos de todo lo demás: operaciones, mantenimiento, reservas y huéspedes.
              </p>
              
              <div className="space-y-4">
                {[
                  'Título de propiedad completo sobre tu residencia',
                  '50% de ingresos netos cuando no la uses',
                  'Acceso prioritario siempre que desees volver a casa'
                ].map((bullet, i) => (
                  <div key={i} className="flex items-center gap-4 bg-cremita/50 p-4 rounded-xl border border-marron-claro/10">
                    <div className="w-8 h-8 rounded-full bg-naranja/20 flex flex-shrink-0 items-center justify-center text-naranja">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="font-semibold text-verde-oscuro">{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Payment Schedule */}
              <div className="bg-white border-2 border-verde-oscuro/10 rounded-2xl p-6 mt-6">
                <h4 className="font-bold text-verde-oscuro mb-4 text-lg">Esquema de Pagos (Preventa)</h4>
                <ul className="space-y-3 font-light text-gris-oscuro">
                  <li className="flex justify-between border-b border-gris-oscuro/10 pb-2">
                    <span>30% Al firmar</span>
                    <span className="font-bold text-naranja">$75,000</span>
                  </li>
                  <li className="flex justify-between border-b border-gris-oscuro/10 pb-2">
                    <span>30% A los 6 meses (obra negra entregada)</span>
                    <span className="font-bold text-naranja">$75,000</span>
                  </li>
                  <li className="flex justify-between pt-1">
                    <span>40% Contra entrega final</span>
                    <span className="font-bold text-naranja">$100,000</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4" id="availability">
                <a href="https://wa.me/593963410409" target="_blank" rel="noreferrer" className="inline-block bg-verde-oscuro text-cremita hover:bg-naranja transition-colors px-8 py-5 rounded-full font-bold text-lg shadow-xl">
                  Reserva tu residencia — desde $100,000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Por qué Loja */}
      <section className="container mx-auto px-6 py-12">
        <div className="relative rounded-[3rem] overflow-hidden bg-cafe-acento p-12 md:p-24 text-cremita text-center">
          <div className="absolute inset-0 bg-[url('/Images/Loja_Landscape.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-florenza">
              El secreto mejor guardado de Ecuador. <br />
              <span className="text-white opacity-80 italic">Pero no por mucho tiempo.</span>
            </h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              Loja es la capital cultural del sur de Ecuador. Arquitectura colonial, una próspera ciudad universitaria, excelente atención médica y uno de los aires más limpios del continente. Ha sido considerada el destino más subestimado de Ecuador — y quienes vivimos aquí preferimos que se mantenga así.
            </p>
            <div className="bg-white/10 border border-white/20 p-6 rounded-2xl backdrop-blur-sm inline-block mt-8 text-left">
              <span className="text-2xl mb-2 block text-center">🛸</span>
              <p className="font-light text-sm text-white/90">
                **Dato Curioso:** En esta región los avistamientos de OVNIs están documentados y son frecuentes — es parte de lo que hace que el cielo nocturno aquí sea distinto a cualquier otro lugar del mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA final */}
      <section className="bg-cremita py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-5xl md:text-7xl font-florenza text-verde-oscuro">
            Tu montaña está lista. <br />
            <span className="text-naranja italic">¿Tú lo estás?</span>
          </h2>
          <p className="text-xl text-gris-oscuro/80 font-light">
            Inauguramos en Agosto de 2027. Tenemos un número limitado de residencias disponibles antes de la apertura con precios de preventa. Esta oferta no es pública.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <button 
              onClick={() => openVideo()}
              className="px-8 py-5 rounded-full border-2 border-verde-oscuro text-verde-oscuro hover:bg-verde-oscuro hover:text-cremita transition-all font-bold text-lg flex items-center justify-center gap-2 group"
            >
              <div className="w-6 h-6 bg-verde-oscuro/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[8px] border-l-verde-oscuro group-hover:border-l-cremita border-b-[4px] border-b-transparent ml-0.5" />
              </div>
              Ver video del proyecto
            </button>
            <a href="https://wa.me/593963410409" target="_blank" rel="noreferrer" className="btn-primary px-8 py-5 font-bold text-lg rounded-full shadow-xl">
              Agendar llamada privada con el fundador
            </a>
            <a href="https://wa.me/593963410409" target="_blank" rel="noreferrer" className="px-8 py-5 rounded-full border-2 border-verde-oscuro text-verde-oscuro hover:bg-verde-oscuro hover:text-cremita transition-all font-bold text-lg">
              Visitar la hacienda
            </a>
          </div>
        </div>
      </section>

      <VideoModal 
        isOpen={modalConfig.isOpen} 
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })} 
        youtubeId={modalConfig.youtubeId} 
      />
    </div>
  );
}
