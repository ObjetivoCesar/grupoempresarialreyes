'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
    const scrollToOportunidad = () => {
        const element = document.getElementById('oportunidad');
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Images/Nueva portada.webp"
                    alt="Glamping Aroma de Montaña en la niebla"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-overlay"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container-custom text-center px-4 py-32 md:py-40">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full mb-8"
                    >
                        <span className="w-2 h-2 bg-naranja rounded-full animate-pulse"></span>
                        <span className="text-white font-medium text-sm md:text-base">
                            Apertura Operativa: 15 de Agosto 2025
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-florenza text-white mb-6 leading-tight"
                    >
                        Donde la tierra regenerativa<br />
                        <span className="text-naranja">encuentra la rentabilidad</span><br />
                        inmobiliaria
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-lg md:text-2xl text-cremita max-w-4xl mx-auto mb-12 leading-relaxed"
                    >
                        Inversión en glamping de lujo respaldada por 23.5 hectáreas de tierra productiva,
                        agricultura regenerativa y un modelo financiero transparente con ROI de hasta 35.4% anual
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <button
                            onClick={scrollToOportunidad}
                            className="btn-primary group"
                        >
                            Descargar Dossier de Inversión
                            <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </button>

                        <button
                            onClick={scrollToOportunidad}
                            className="btn-secondary"
                        >
                            Ver Oportunidades
                        </button>
                    </motion.div>

                    {/* Key Metrics */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
                    >
                        <div className="glass-strong rounded-2xl p-6">
                            <div className="text-3xl md:text-4xl font-bold text-naranja mb-2">35.4%</div>
                            <div className="text-white text-sm md:text-base">ROI Anual Proyectado</div>
                        </div>
                        <div className="glass-strong rounded-2xl p-6">
                            <div className="text-3xl md:text-4xl font-bold text-naranja mb-2">$30K</div>
                            <div className="text-white text-sm md:text-base">Inversión Mínima</div>
                        </div>
                        <div className="glass-strong rounded-2xl p-6">
                            <div className="text-3xl md:text-4xl font-bold text-naranja mb-2">70%</div>
                            <div className="text-white text-sm md:text-base">Utilidad para Inversor</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <div className="flex flex-col items-center gap-2 text-white">
                        <span className="text-sm font-medium">Descubre más</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
