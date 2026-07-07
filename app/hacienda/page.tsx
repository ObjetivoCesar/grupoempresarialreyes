"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import VideoModal from '@/components/ui/VideoModal';
import PageHero from '@/components/ui/PageHero';
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
        <div className="space-y-8 md:space-y-12">
            <PageHero
                badge="Activos Verificados · Avalúo BanEcuador"
                title="El Patrimonio:"
                titleAccent="lo que existe hoy, verificado"
                subtitle="El respaldo físico y los activos fijos de la empresa Aroma de Montaña, valorados y listos para su due diligence."
                imagePath="/Images/optimized/Paisajes/PXL_20230924_192806858.webp"
                stats={[
                    { label: 'Área Total', value: '23.5 Ha' },
                    { label: 'Altitud', value: '1,850–2,100 msnm' },
                    { label: 'Patrimonio Registrado', value: '$211,266' },
                    { label: 'Reserva Hídrica', value: '8,000 m³' },
                ]}
            />


            {/* Grid de Métricas del Activo */}
            <div className="flex md:grid overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 gap-4 md:gap-6 no-scrollbar snap-x snap-mandatory md:grid-cols-2 lg:grid-cols-3">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex-none w-[75vw] md:w-auto bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-marron-claro/10 flex items-center gap-4 snap-center"
                    >
                        <div className="w-12 h-12 rounded-xl bg-cremita flex shrink-0 items-center justify-center text-2xl">
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-[10px] md:text-xs uppercase font-bold text-gris-oscuro/40 tracking-wider font-poppins">{stat.label}</p>
                            <p className="text-base md:text-lg font-bold text-verde-oscuro font-poppins leading-tight">{stat.val}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Narrative / Active blocks section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
                {/* Left Side: Blocks 1, 2 and 3 */}
                <div className="lg:col-span-8 space-y-8">
                    {/* Bloque 1 — El predio */}
                    <div className="bg-white p-8 rounded-3xl border border-marron-claro/10 shadow-sm space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">🏡</span>
                            <h3 className="text-xl font-bold text-verde-oscuro">1. El Predio (Sambinuma)</h3>
                        </div>
                        <p className="text-sm md:text-base text-gris-oscuro/80 leading-relaxed font-poppins">
                            Predio rural productivo <strong>"Sambinuma"</strong>, Sector Naranjo, Parroquia Lourdes, Cantón Paltas, Provincia de Loja. <strong>23.5 hectáreas</strong>.
                            <br />
                            <span className="block mt-2"><strong>Incluye:</strong> casa antigua, casa modelo en construcción, dos reservorios con capacidad superior a 8,000 m³, tres kilómetros de vía vehicular interna y cinco hectáreas desmontadas para cultivo de café.</span>
                        </p>
                    </div>

                    {/* Bloque 2 — Infraestructura operativa */}
                    <div className="bg-white p-8 rounded-3xl border border-marron-claro/10 shadow-sm space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">⚡</span>
                            <h3 className="text-xl font-bold text-verde-oscuro">2. Infraestructura Operativa</h3>
                        </div>
                        <p className="text-sm md:text-base text-gris-oscuro/80 leading-relaxed font-poppins">
                            Tres albarradas ancestrales para captura pluvial, seis kilómetros de senderos interpretativos señalizados, pozo de agua propio, sistema de riego automatizado y parqueadero de 600 m².
                        </p>
                    </div>

                    {/* Bloque 3 — Producción y conservación */}
                    <div className="bg-white p-8 rounded-3xl border border-marron-claro/10 shadow-sm space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">☕</span>
                            <h3 className="text-xl font-bold text-verde-oscuro">3. Producción y Conservación</h3>
                        </div>
                        <p className="text-sm md:text-base text-gris-oscuro/80 leading-relaxed font-poppins">
                            Aproximadamente <strong>5.000 plantas de café</strong> de variedades Sidra, Borbón y Típica Mejorada, de madre certificada. Huerto protegido tipo vivero, producción de abono orgánico Bocashi, reforestación activa, y plantación de frutales (aguacate, granadilla, zapote, cítricos, tomate de árbol).
                        </p>
                    </div>
                </div>

                {/* Right Side: Blocks 4, 5 and general facts */}
                <div className="lg:col-span-4 space-y-8">
                    {/* Bloque 4 — Respaldo técnico */}
                    <div className="bg-naranja/5 p-8 rounded-3xl border-l-4 border-naranja space-y-4">
                        <h3 className="text-lg font-bold text-verde-oscuro flex items-center gap-2">
                            <span>📊</span> Respaldo Técnico (Avalúo)
                        </h3>
                        <p className="text-xs md:text-sm text-gris-oscuro/80 leading-relaxed font-poppins">
                            Avalúo rural elaborado para <strong>BanEcuador B.P.</strong> por el Arq. Juan Andrés Salinas Sagbay, Calificación SBS PVC-2018-1936.
                        </p>
                        <div className="space-y-2 pt-2 border-t border-naranja/10">
                            <p className="text-xs text-gris-oscuro/60 font-mono">VALOR DE MERCADO: <strong className="text-verde-oscuro text-sm">USD 152.473,54</strong></p>
                            <p className="text-xs text-gris-oscuro/60 font-mono">VALOR DE REALIZACIÓN: <strong className="text-verde-oscuro text-sm">USD 128.077,77</strong></p>
                            <p className="text-xs text-gris-oscuro/60 font-mono">VALOR DE REPOSICIÓN: <strong className="text-verde-oscuro text-sm">USD 174.226,68</strong></p>
                            <p className="text-xs text-gris-oscuro/80 font-mono pt-1"><strong>PATRIMONIO TOTAL REGISTRADO:</strong> <br /><strong className="text-naranja text-base font-bold">USD 211.266,00</strong> (activos fijos + intangibles)</p>
                        </div>
                    </div>

                    {/* Bloque 5 — Marca */}
                    <div className="bg-verde-oscuro/5 p-8 rounded-3xl border-l-4 border-verde-oscuro space-y-4">
                        <h3 className="text-lg font-bold text-verde-oscuro flex items-center gap-2">
                            <span>🛡️</span> Marca Registrada
                        </h3>
                        <p className="text-xs md:text-sm text-gris-oscuro/80 leading-relaxed font-poppins">
                            <strong>"Aroma de Montaña"</strong>, marca registrada con vigencia de 10 años, propiedad intelectual de metodologías y concepto productivo. <strong>Incluida al 100% en la venta de la empresa.</strong>
                        </p>
                    </div>
                </div>
            </div>

            {/* Ramiro & Coffee Section */}
            <section className="bg-verde-oscuro rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 md:p-16 space-y-6 md:space-y-8 flex flex-col justify-center">
                        <div className="space-y-2 md:space-y-4">
                            <span className="text-naranja font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs">El Patrimonio Humano</span>
                            <h2 className="text-3xl md:text-5xl font-florenza text-cremita">Ramiro: El Maestro de la <span className="text-naranja italic">Taza Dorada</span></h2>
                        </div>
                        
                        <p className="text-cremita/80 leading-relaxed text-sm md:text-lg font-poppins">
                            La tierra por sí sola es solo tierra. El valor real viene del conocimiento. <strong>Ramiro</strong>, nuestro experto caficultor, es la leyenda viviente detrás de cada grano en Aroma de Montaña. 
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl border border-white/10">
                                <div className="text-2xl md:text-3xl">🏆</div>
                                <div>
                                    <p className="text-cremita font-bold text-sm md:text-base">Multiganador Taza Dorada</p>
                                    <p className="text-cremita/60 text-xs md:text-sm">El reconocimiento más alto al café de especialidad en Ecuador.</p>
                                </div>
                            </div>
                            <p className="text-cremita/70 text-xs md:text-sm italic font-poppins">
                                "No solo cultivamos café; cultivamos una herencia de sabor que solo estas montañas pueden ofrecer a esa altitud."
                            </p>
                        </div>
                    </div>
                    
                    <div className="relative h-[300px] md:h-[400px] lg:h-auto group">
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
            <div className="flex md:grid overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 gap-4 no-scrollbar snap-x snap-mandatory md:grid-cols-4">
                {[
                    '/Images/optimized/Café - Especialidad/PXL_20240629_141006374.webp',
                    '/Images/optimized/Café - Especialidad/PXL_20240629_144935774.webp',
                    '/Images/optimized/Café - Especialidad/PXL_20240704_192739937.webp',
                    '/Images/optimized/Café - Especialidad/PXL_20240316_214122874.webp'
                ].map((src, i) => (
                    <div key={i} className="flex-none w-[60vw] md:w-auto h-48 relative rounded-3xl overflow-hidden shadow-lg snap-center">
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
