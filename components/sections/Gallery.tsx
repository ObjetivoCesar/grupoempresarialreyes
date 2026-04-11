'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { getAssetUrl } from '@/lib/assets';
import VideoModal from '@/components/ui/VideoModal';

// Types for Registry
type Registry = Record<string, { path: string; category: string; optimized: string }[]>;

interface VideoItem {
    title: string;
    youtubeId: string;
    category: string;
    thumbnail: string;
    isShort?: boolean;
}

export default function Gallery() {
    const [activeTab, setActiveTab] = useState('Videos'); // Empezamos en Videos por impacto
    const [images, setImages] = useState<any[]>([]);
    const [categories, setCategories] = useState<string[]>(['Videos']);
    const [videos, setVideos] = useState<{ standard: VideoItem[], shorts: VideoItem[] }>({ standard: [], shorts: [] });
    const [loading, setLoading] = useState(true);
    
    // Modal state
    const [modalConfig, setModalConfig] = useState<{ isOpen: boolean, youtubeId: string }>({ 
        isOpen: false, 
        youtubeId: '' 
    });

    useEffect(() => {
        async function loadMedia() {
            try {
                // 1. Cargar Imágenes
                const imgRes = await fetch('/media-registry.json');
                const imgData = await imgRes.json() as Registry;
                
                const allImagesArray: any[] = [];
                const foundCats = new Set(['Videos', 'Todos']);
                
                Object.keys(imgData).forEach(cat => {
                    foundCats.add(cat);
                    imgData[cat].forEach(img => {
                        allImagesArray.push(img);
                    });
                });
                
                setImages(allImagesArray);
                setCategories(Array.from(foundCats));

                // 2. Cargar Videos
                const vidRes = await fetch('/video-registry.json');
                const vidData = await vidRes.json();
                setVideos({
                    standard: vidData.standard,
                    shorts: vidData.shorts
                });

            } catch (err) {
                console.error("Error loading gallery media:", err);
            } finally {
                setLoading(false);
            }
        }
        loadMedia();
    }, []);

    const openVideo = (id: string) => setModalConfig({ isOpen: true, youtubeId: id });

    const [displayLimit, setDisplayLimit] = useState(20);

    const filteredImages = activeTab === 'Todos' 
        ? images : images.filter(img => img.category === activeTab);

    const paginatedImages = filteredImages.slice(0, displayLimit);
    const hasMore = displayLimit < filteredImages.length;

    return (
        <section className="py-20" id="galeria">
            <VideoModal 
                isOpen={modalConfig.isOpen} 
                onClose={() => setModalConfig({ ...modalConfig, isOpen: false })} 
                youtubeId={modalConfig.youtubeId} 
            />

            <div className="mb-12">
                <span className="text-naranja font-black uppercase tracking-[0.3em] text-xs">Experiencia Inmersiva</span>
                <h2 className="text-4xl md:text-6xl font-florenza text-verde-oscuro mt-2">
                    Una Ventana al <span className="text-naranja italic">Paraíso</span>
                </h2>
                <p className="text-gris-oscuro/60 mt-4 max-w-2xl font-medium">
                    Explore la tangibilidad del proyecto. Desde testimonios reales y procesos de agricultura regenerativa hasta los cielos más limpios del mundo.
                </p>
            </div>

            {/* Tabs de Categorías */}
            <div className="flex flex-wrap gap-2 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => {
                            setActiveTab(cat);
                            setDisplayLimit(20); // Reset limit on tab change
                        }}
                        className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                            activeTab === cat 
                            ? 'bg-naranja text-white shadow-lg' 
                            : 'bg-cremita text-verde-oscuro/60 hover:bg-marron-claro/20 border border-marron-claro/10'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Contenido de la Galería */}
            <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* CASO: VIDEOS */}
                        {(activeTab === 'Videos' || activeTab === 'Todos') && (
                            <div className="space-y-20 mb-16">
                                {/* SHORTS - FORMATO HISTORIA */}
                                <div className="space-y-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-naranja/10 rounded-full flex items-center justify-center text-naranja">📱</div>
                                        <h3 className="text-xl font-bold text-verde-oscuro">Historias de la Hacienda</h3>
                                    </div>
                                    <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar snap-x">
                                        {videos.shorts.map((short, i) => (
                                            <motion.div
                                                key={`short-${i}`}
                                                whileHover={{ scale: 1.05, y: -5 }}
                                                onClick={() => openVideo(short.youtubeId)}
                                                className="relative flex-none w-[220px] aspect-[9/16] rounded-[2.5rem] overflow-hidden bg-verde-oscuro cursor-pointer group shadow-xl border-4 border-white"
                                            >
                                                <Image 
                                                    src={short.thumbnail} 
                                                    alt={short.title} 
                                                    fill 
                                                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-110" 
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-6">
                                                    <span className="text-white font-bold text-sm leading-tight mb-1">{short.title}</span>
                                                    <span className="text-naranja text-[10px] font-black uppercase tracking-widest">{short.category}</span>
                                                </div>
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-naranja/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100 shadow-2xl">
                                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* VIDEOS ESTÁNDAR */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {videos.standard.map((vid, i) => (
                                        <motion.div
                                            key={`vid-${i}`}
                                            whileHover={{ y: -5 }}
                                            onClick={() => openVideo(vid.youtubeId)}
                                            className="relative aspect-video rounded-[3rem] overflow-hidden bg-verde-oscuro cursor-pointer group shadow-2xl border-2 border-white/10"
                                        >
                                            <Image 
                                                src={vid.thumbnail} 
                                                alt={vid.title} 
                                                fill 
                                                className="object-cover opacity-70 group-hover:opacity-100 transition-all duration-700" 
                                            />
                                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 bg-black/30 group-hover:bg-black/10 transition-all">
                                                <div className="w-20 h-20 bg-naranja rounded-full flex items-center justify-center mb-6 shadow-2xl transform group-hover:scale-110 transition-transform">
                                                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2" />
                                                </div>
                                                <h4 className="text-cremita text-3xl font-florenza mb-2 drop-shadow-lg">{vid.title}</h4>
                                                <span className="text-naranja font-black uppercase tracking-[0.3em] text-[10px]">{vid.category}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* CASO: IMÁGENES */}
                        {activeTab !== 'Videos' && (
                            <div className="space-y-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {paginatedImages.map((img, idx) => (
                                        <motion.div
                                            key={img.optimized || idx}
                                            layout
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            whileHover={{ y: -5 }}
                                            className="group relative h-[350px] rounded-[2rem] overflow-hidden cursor-pointer shadow-md border-2 border-white/50"
                                        >
                                            <Image
                                                src={getAssetUrl(img.path)}
                                                alt={img.category}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                                                <span className="text-[10px] uppercase font-black text-naranja tracking-widest mb-1">{img.category}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {hasMore && (
                                    <div className="flex justify-center pt-8">
                                        <button
                                            onClick={() => setDisplayLimit(prev => prev + 20)}
                                            className="group flex flex-col items-center gap-3 transition-all"
                                        >
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-verde-oscuro/40 group-hover:text-naranja transition-colors">Ver más imágenes</span>
                                            <div className="w-12 h-12 rounded-full border border-marron-claro/20 flex items-center justify-center group-hover:border-naranja group-hover:bg-naranja group-hover:text-white transition-all">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Footer de Galería */}
            <div className="mt-12 p-8 bg-cremita rounded-3xl border border-marron-claro/20 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-naranja rounded-full flex items-center justify-center text-white text-xl">🚀</div>
                    <div>
                        <p className="font-black text-verde-oscuro">Experiencia Optimizada</p>
                        <p className="text-xs text-gris-oscuro/60 italic font-medium">Cargando material real desde el CDN global para máxima velocidad.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <a 
                        href="https://wa.me/593963410409" 
                        target="_blank"
                        className="px-8 py-4 bg-verde-oscuro text-cremita rounded-2xl font-bold hover:bg-black transition-all"
                    >
                        Solicitar Dossier Completo
                    </a>
                </div>
            </div>
        </section>
    );
}
