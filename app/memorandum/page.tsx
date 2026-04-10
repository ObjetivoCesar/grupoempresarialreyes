'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TOTAL_PAGES = 14;
const PAGES = Array.from({ length: TOTAL_PAGES }, (_, i) => `/memorandum/page-${i + 1}.jpg`);

export default function MemorandumPage() {
    const [currentPage, setCurrentPage] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const nextPage = () => setCurrentPage((prev) => (prev + 1) % TOTAL_PAGES);
    const prevPage = () => setCurrentPage((prev) => (prev - 1 + TOTAL_PAGES) % TOTAL_PAGES);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextPage();
            if (e.key === 'ArrowLeft') prevPage();
            if (e.key === 'f') toggleFullscreen();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="space-y-12 pb-20 max-w-7xl mx-auto">
            {/* Header Section */}
            <section className="bg-verde-oscuro p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] text-cremita border-l-8 border-naranja shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-naranja/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="relative z-10 space-y-4">
                    <h1 className="text-3xl md:text-5xl font-florenza">Memorándum de <span className="text-naranja italic">Inversión</span></h1>
                    <p className="text-cremita/70 text-base md:text-lg max-w-3xl font-light">
                        Documento estratégico detallado sobre el modelo de negocio, proyecciones financieras y estructura societaria 50/50 de Aroma de Montaña.
                    </p>
                </div>
            </section>

            {/* Viewer Section */}
            <div 
                ref={containerRef}
                className={`relative flex flex-col items-center group ${isFullscreen ? 'bg-black h-screen p-4' : ''}`}
            >
                {/* Main Image Container */}
                <div className={`relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10 ${isFullscreen ? 'h-[85vh] flex items-center justify-center' : 'aspect-[1/1.4] md:aspect-[1.4/1]'}`}>
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentPage}
                            src={PAGES[currentPage]}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className={`w-full h-full object-contain select-none`}
                            alt={`Página ${currentPage + 1}`}
                        />
                    </AnimatePresence>

                    {/* Navigation Overlays */}
                    <div className="absolute inset-y-0 left-0 w-1/4 cursor-w-resize" onClick={prevPage}></div>
                    <div className="absolute inset-y-0 right-0 w-1/4 cursor-e-resize" onClick={nextPage}></div>

                    {/* Floating Controls (Desktop) */}
                    <div className="absolute inset-x-0 bottom-6 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button 
                            onClick={(e) => { e.stopPropagation(); prevPage(); }}
                            className="bg-verde-oscuro/80 hover:bg-verde-oscuro backdrop-blur-md p-3 rounded-full text-white shadow-xl transition-all"
                            title="Anterior"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        
                        <div className="bg-naranja/90 backdrop-blur-md px-6 py-2 rounded-full text-white font-bold shadow-xl">
                            {currentPage + 1} / {TOTAL_PAGES}
                        </div>

                        <button 
                            onClick={(e) => { e.stopPropagation(); nextPage(); }}
                            className="bg-verde-oscuro/80 hover:bg-verde-oscuro backdrop-blur-md p-3 rounded-full text-white shadow-xl transition-all"
                            title="Siguiente"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>

                        <button 
                            onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
                            className="bg-cafe-acento/80 hover:bg-cafe-acento backdrop-blur-md p-3 rounded-full text-white shadow-xl transition-all"
                            title={isFullscreen ? "Esc" : "Pantalla Completa"}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isFullscreen ? "M6 18L18 6M6 6l12 12" : "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"} />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Thumbnails (Only in non-fullscreen) */}
                {!isFullscreen && (
                    <div className="mt-8 w-full overflow-x-auto pb-4 custom-scrollbar">
                        <div className="flex gap-4 px-4 justify-start md:justify-center">
                            {PAGES.map((page, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPage(index)}
                                    className={`relative flex-shrink-0 w-20 md:w-28 aspect-[1/1.4] rounded-lg overflow-hidden border-2 transition-all ${
                                        currentPage === index ? 'border-naranja scale-110 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'
                                    }`}
                                >
                                    <img src={page} className="w-full h-full object-cover" alt={`Miniatura ${index + 1}`} />
                                    <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white bg-black/40">
                                        {index + 1}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Footer / Actions */}
            <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 p-8 rounded-3xl bg-white shadow-xl border border-verde-oscuro/5">
                <div className="space-y-1">
                    <p className="text-lg font-bold text-verde-oscuro">Versión Original Reciente</p>
                    <p className="text-sm text-gris-oscuro/50 italic">Haga clic en el botón para descargar el archivo PDF original para impresión.</p>
                </div>
                <a 
                    href="/documents/Reyes_Investment_Memorandum.pdf" 
                    download 
                    className="btn-primary flex items-center gap-3 px-8 py-4 shadow-xl text-lg hover:scale-105 active:scale-95 transition-all"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Descargar Memorándum Completo
                </a>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    height: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #6C765433;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #6C765466;
                }
            `}</style>
        </div>
    );
}
