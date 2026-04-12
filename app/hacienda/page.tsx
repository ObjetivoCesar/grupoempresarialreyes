"use client";
import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import VideoModal from '@/components/ui/VideoModal';
import { getAssetUrl } from '@/lib/assets';

interface VideoItem {
    title: string;
    youtubeId: string;
    category: string;
    thumbnail: string;
}

export default function HaciendaPage() {
    const [modalConfig, setModalConfig] = useState({ isOpen: false, youtubeId: '' });
    const [shorts, setShorts] = useState<VideoItem[]>([]);

    useEffect(() => {
        fetch('/video-registry.json')
            .then(res => res.json())
            .then(data => {
                // Filtrar solo shorts relevantes para Hacienda (Café y Agricultura)
                const relevant = data.shorts.filter((s: VideoItem) => 
                    s.category === 'Café' || s.category === 'Agricultura'
                );
                setShorts(relevant);
            });
    }, []);

    const openVideo = (id: string) => setModalConfig({ isOpen: true, youtubeId: id });

    const stats = [
        { label: 'Título Property', val: 'Hacienda Aroma de Montaña', icon: '📍' },
        { label: 'Área Total', val: '23.5 Hectáreas', icon: '📏' },
        { label: 'Altitud', val: '1,850 - 2,100 msnm', icon: '⛰️' },
        { label: 'Ubicación', val: 'UNESCO Bosques de Paz', icon: '🌍' },
        { label: 'Reserva Hídrica', val: '8,000 m³ (Albarradas)', icon: '💧' },
        { label: 'Biodiversidad', val: '3,000+ Árboles Reforestados', icon: '🌿' },
    ];

    return (
        <div className="space-y-12">
            {/* Header with Background */}
            <section className="relative h-[250px] rounded-3xl overflow-hidden flex items-center px-12">
                <Image
                    src={getAssetUrl("/Images/Naturaleza.png")}
                    alt="Hacienda Nature"
                    fill
                    className="object-cover brightness-50"
                />
                <div className="relative z-10 space-y-2">
                    <h1 className="text-4xl md:text-5xl font-florenza text-cremita">El Activo: <span className="text-naranja">La Tierra</span></h1>
                    <p className="text-cremita/70 max-w-xl">El respaldo físico de su inversión. Una hacienda productiva con certificación de sostenibilidad y alto valor patrimonial.</p>
                </div>
            </section>

            {/* Grid de Métricas del Activo */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-marron-claro/10 flex items-center gap-4"
                    >
                        <div className="w-12 h-12 rounded-xl bg-cremita flex items-center justify-center text-2xl">
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-[10px] uppercase font-bold text-gris-oscuro/40 tracking-wider font-poppins">{stat.label}</p>
                            <p className="text-lg font-bold text-verde-oscuro font-poppins">{stat.val}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Narrative Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
                <div className="space-y-6">
                    <h2 className="text-3xl font-florenza text-verde-oscuro">Patrimonio que respira</h2>
                    <p className="text-gris-oscuro/80 leading-relaxed font-poppins">
                        Aroma de Montaña no es un terreno más. Es una pieza fundamental del corredor biológico <strong>Bosques de Paz de la UNESCO</strong>. Aquí, el valor inmobiliario crece de la mano con la restauración ecológica.
                    </p>
                    <div className="p-6 bg-verde-olivo/5 rounded-2xl border-l-4 border-verde-olivo">
                        <p className="text-sm font-medium italic text-verde-olivo font-poppins">
                            "Protegemos el 40% del área total para conservación pura, asegurando que el lujo de hoy no destruya el recurso del mañana."
                        </p>
                    </div>
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-florenza text-verde-oscuro">Estructura <span className="text-naranja italic">Patrimonial</span></h2>
                    <p className="text-gris-oscuro/80 leading-relaxed font-poppins">
                        Al ingresar como Socio Estratégico, tu capital de $230,000 USD adquiere el 50% de la sociedad empresarial, la cual <strong>incluye como activo todo el terreno rural productivo (23.5 hectáreas) y su infraestructura base</strong>.
                    </p>
                    <div className="p-6 bg-naranja/5 rounded-2xl border-l-4 border-naranja">
                        <p className="text-sm font-medium italic text-naranja font-poppins">
                            Blindaje Inteligente: La sociedad es dueña compartida de la propiedad física (50/50), pero la <strong>Marca "Aroma de Montaña" y su propiedad intelectual</strong> permanecen exclusivamente bajo César Reyes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Ramiro & Coffee Section */}
            <section className="bg-verde-oscuro rounded-[3rem] overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-12 md:p-16 space-y-8 flex flex-col justify-center">
                        <div className="space-y-4">
                            <span className="text-naranja font-black uppercase tracking-[0.3em] text-xs">El Patrimonio Humano</span>
                            <h2 className="text-4xl md:text-5xl font-florenza text-cremita">Ramiro: El Maestro de la <span className="text-naranja italic">Taza Dorada</span></h2>
                        </div>
                        
                        <p className="text-cremita/80 leading-relaxed text-lg font-poppins">
                            La tierra por sí sola es solo tierra. El valor real viene del conocimiento. <strong>Ramiro</strong>, nuestro experto caficultor, es la leyenda viviente detrás de cada grano en Aroma de Montaña. 
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl border border-white/10">
                                <div className="text-3xl">🏆</div>
                                <div>
                                    <p className="text-cremita font-bold">Multiganador Taza Dorada</p>
                                    <p className="text-cremita/60 text-sm">El reconocimiento más alto al café de especialidad en Ecuador.</p>
                                </div>
                            </div>
                            <p className="text-cremita/70 text-sm italic font-poppins">
                                "No solo cultivamos café; cultivamos una herencia de sabor que solo estas montañas pueden ofrecer a esa altitud."
                            </p>
                        </div>
                    </div>
                    
                    <div className="relative h-[400px] lg:h-auto group">
                        <Image
                            src={getAssetUrl("/Images/optimized/Café - Especialidad/PXL_20240704_192559674.webp")}
                            alt="Ramiro Trabajando el Café"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-verde-oscuro via-transparent to-transparent lg:hidden" />
                    </div>
                </div>
            </section>

            {/* Coffee Grid Detail */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    '/Images/optimized/Café - Especialidad/PXL_20240629_141006374.webp',
                    '/Images/optimized/Café - Especialidad/PXL_20240629_144935774.webp',
                    '/Images/optimized/Café - Especialidad/PXL_20240704_192739937.webp',
                    '/Images/optimized/Café - Especialidad/PXL_20240316_214122874.webp'
                ].map((src, i) => (
                    <div key={i} className="h-48 relative rounded-3xl overflow-hidden shadow-lg">
                        <Image src={getAssetUrl(src)} alt="Detalle Café" fill className="object-cover" />
                    </div>
                ))}
            </div>

            {/* LIVE PROCESSES: STORY FEED */}
            {shorts.length > 0 && (
                <section className="py-12 space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-naranja/20 rounded-full flex items-center justify-center text-naranja text-2xl">📱</div>
                        <div>
                            <h2 className="text-3xl font-florenza text-verde-oscuro leading-none">Procesos en Vivo</h2>
                            <p className="text-sm text-gris-oscuro/50 font-poppins mt-1">Vea la autenticidad de nuestra agricultura regenerativa.</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar snap-x">
                        {shorts.map((short, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05, y: -5 }}
                                onClick={() => openVideo(short.youtubeId)}
                                className="relative flex-none w-[180px] aspect-[9/16] rounded-3xl overflow-hidden bg-verde-oscuro cursor-pointer group shadow-lg border-2 border-white/50 snap-center"
                            >
                                <Image 
                                    src={short.thumbnail} 
                                    alt={short.title} 
                                    fill 
                                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-4">
                                    <p className="text-white font-bold text-xs leading-tight">{short.title}</p>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-naranja/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            <VideoModal 
                isOpen={modalConfig.isOpen} 
                onClose={() => setModalConfig({ ...modalConfig, isOpen: false })} 
                youtubeId={modalConfig.youtubeId} 
            />
        </div>
    );
}
