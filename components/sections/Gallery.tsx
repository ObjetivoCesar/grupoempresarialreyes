'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
    { src: '/Images/Aroma de Montaña.webp', title: 'Hacienda Aroma de Montaña', category: 'Entorno' },
    { src: '/Images/Astroturismo.png', title: 'Cielos de Clase Mundial', category: 'Experiencia' },
    { src: '/Images/Retiros-de-Alto-Rendimiento.png', title: 'Wellness & Retiros', category: 'Bienestar' },
    { src: '/Images/hacienda-view.jpg', title: 'Vistas Panorámicas', category: 'Ubicación' },
    { src: '/Images/naturaleza-2.jpg', title: 'Santuario Natural', category: 'Naturaleza' },
    { src: '/Images/Naturaleza.png', title: 'Biodiversidad', category: 'Ecosistema' },
];

export default function Gallery() {
    return (
        <section className="py-20">
            <div className="mb-12">
                <h2 className="text-4xl font-florenza text-verde-oscuro">Una Ventana al <span className="text-naranja italic">Paraíso</span></h2>
                <p className="text-gris-oscuro/60 mt-4 max-w-xl font-medium">Cada rincón de Aroma de Montaña está diseñado para la contemplación, el bienestar y la reconexión total con la tierra.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -10 }}
                        className="group relative h-[400px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl border-4 border-white"
                    >
                        <Image
                            src={img.src}
                            alt={img.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-verde-oscuro/90 via-verde-oscuro/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                            <span className="text-[10px] uppercase font-black text-naranja tracking-widest mb-2 block">{img.category}</span>
                            <h4 className="text-2xl font-florenza text-cremita leading-tight">{img.title}</h4>
                        </div>
                        
                        {/* Overlay sutil constante */}
                        <div className="absolute inset-0 bg-verde-oscuro/5 group-hover:bg-transparent transition-colors" />
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 p-8 bg-cremita rounded-3xl border border-marron-claro/20 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-naranja rounded-full flex items-center justify-center text-white text-xl">📸</div>
                    <div>
                        <p className="font-black text-verde-oscuro">Galería en Alta Definición</p>
                        <p className="text-xs text-gris-oscuro/60 italic font-medium">Fotos y videos adicionales próximamente (vía Bunny.net).</p>
                    </div>
                </div>
                <a 
                    href="https://wa.me/593963410409" 
                    target="_blank"
                    className="px-8 py-4 bg-verde-oscuro text-cremita rounded-2xl font-bold hover:bg-black transition-all"
                >
                    Solicitar más material
                </a>
            </div>
        </section>
    );
}
