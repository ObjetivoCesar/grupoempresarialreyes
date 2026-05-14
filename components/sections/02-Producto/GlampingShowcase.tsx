"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { getAssetUrl } from '@/lib/assets';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Lightbox from '@/components/ui/Lightbox';

const glampingTypes = [
    {
        id: 'basico',
        name: 'Glamping Básico',
        price: '$30,000',
        capacity: '6 personas',
        images: [
            '/30k/exterior.png',
            '/30k/interior.jpeg',
            '/30k/interior_1.jpg',
            '/30k/interior_2.jpg',
            '/30k/plano.jpg',
        ],
        features: [
            'Cama king/queen premium',
            'Baño completo privado',
            'Telescopio refractor 70mm',
            'Vista panorámica 360°',
            'Calefacción solar',
            'Chimenea interior',
        ],
    },
    {
        id: 'residencia',
        name: 'Residencia 360',
        price: '$250,000',
        capacity: '12 personas',
        images: [
            '/250k/exterior.jpg',
            '/250k/interior_1.jpg',
            '/250k/interior_2.jpg',
            '/250k/plano.jpg',
        ],
        features: [
            '3 habitaciones independientes',
            'Cocina equipada completa',
            'Sala común amplia',
            '2 baños completos',
            'Zona barbacoa techada',
            'Telescopio reflector 200mm',
            'Jacuzzi exterior',
            'Uso personal 60 días/año',
        ],
    },
];

const cafeteriaImages = ['/Cafetería/interior.jpg'];

export default function GlampingShowcase() {
    const [activeType, setActiveType] = useState(0);
    const [slideIndex, setSlideIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [cafeteriaLightboxOpen, setCafeteriaLightboxOpen] = useState(false);

    const currentImages = glampingTypes[activeType].images;

    const handleTypeChange = (index: number) => {
        setActiveType(index);
        setSlideIndex(0);
    };

    const prevSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSlideIndex((p) => (p - 1 + currentImages.length) % currentImages.length);
    };

    const nextSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSlideIndex((p) => (p + 1) % currentImages.length);
    };

    const openLightbox = () => {
        setLightboxIndex(slideIndex);
        setLightboxOpen(true);
    };

    return (
        <section id="producto" className="section-light">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-florenza text-verde-oscuro mb-4">
                        El Producto
                    </h2>
                    <p className="text-lg md:text-xl text-gris-oscuro max-w-3xl mx-auto mb-6">
                        Diseño consciente y experiencia premium
                    </p>
                    <p className="text-base md:text-lg text-gris-oscuro/80 max-w-4xl mx-auto italic">
                        &ldquo;No vendemos m²; vendemos noches de reconexión y días de café de especialidad&rdquo;
                    </p>
                </motion.div>

                {/* Type Selector */}
                <div className="flex justify-center gap-4 mb-12">
                    {glampingTypes.map((type, index) => (
                        <button
                            key={type.id}
                            onClick={() => handleTypeChange(index)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                activeType === index
                                    ? 'bg-naranja text-white shadow-lg scale-105'
                                    : 'bg-white text-gris-oscuro hover:bg-naranja/10'
                            }`}
                        >
                            {type.name}
                        </button>
                    ))}
                </div>

                {/* Glamping Display */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Carousel */}
                    <motion.div
                        key={activeType}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        {/* Hint */}
                        <div className="absolute -top-7 right-0 flex items-center gap-1.5 text-xs text-gris-oscuro/50 z-10 pointer-events-none select-none">
                            <ZoomIn className="w-3.5 h-3.5" />
                            Clic en la imagen para ampliar
                        </div>

                        {/* Image wrapper — usar height fija para garantizar área de clic */}
                        <div className="rounded-2xl overflow-hidden shadow-lg relative" style={{ height: '360px' }}>
                            {/* Clickable overlay — capa superior para capturar el clic */}
                            <div
                                className="absolute inset-0 z-20 cursor-zoom-in group"
                                role="button"
                                tabIndex={0}
                                aria-label="Ampliar imagen"
                                onClick={openLightbox}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(); }}
                            >
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                    <span className="text-white bg-black/60 px-5 py-2.5 rounded-full text-sm backdrop-blur-sm font-semibold tracking-wide shadow-xl">
                                        🔍 Ampliar Foto
                                    </span>
                                </div>
                            </div>

                            {/* Image itself */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${activeType}-${slideIndex}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={getAssetUrl(currentImages[slideIndex])}
                                        alt={`${glampingTypes[activeType].name} - Vista ${slideIndex + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation arrows — z-30 to be above the clickable overlay */}
                            {currentImages.length > 1 && (
                                <>
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/40 hover:bg-naranja text-white rounded-full backdrop-blur-sm transition-all"
                                        aria-label="Anterior"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/40 hover:bg-naranja text-white rounded-full backdrop-blur-sm transition-all"
                                        aria-label="Siguiente"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>

                                    {/* Dots — z-30 */}
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
                                        {currentImages.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={(e) => { e.stopPropagation(); setSlideIndex(i); }}
                                                className={`w-2 h-2 rounded-full transition-all ${i === slideIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                                                aria-label={`Ir a imagen ${i + 1}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </motion.div>

                    {/* Details */}
                    <motion.div
                        key={`details-${activeType}`}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-3xl md:text-4xl font-florenza text-verde-oscuro mb-2">
                                {glampingTypes[activeType].name}
                            </h3>
                            <div className="flex items-baseline gap-4 mb-4">
                                <span className="text-4xl md:text-5xl font-bold text-naranja">
                                    {glampingTypes[activeType].price}
                                </span>
                                <span className="text-lg text-gris-oscuro">Inversión</span>
                            </div>
                            <p className="text-lg text-gris-oscuro flex items-center gap-2">
                                <svg className="w-5 h-5 text-naranja" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Capacidad: {glampingTypes[activeType].capacity}
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-xl font-semibold text-verde-oscuro">Equipamiento Premium</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {glampingTypes[activeType].features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-naranja flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gris-oscuro">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-4">
                            <button className="btn-primary w-full sm:w-auto">
                                Conocer más detalles
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* ── Cafetería Section ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 md:mt-32"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div className="order-2 lg:order-1 space-y-6">
                            <h3 className="text-3xl md:text-4xl font-florenza text-verde-oscuro">
                                Organic Coffee Bar
                            </h3>
                            <p className="text-lg text-gris-oscuro leading-relaxed">
                                Integración del café <strong className="text-naranja">&ldquo;Taza Dorada&rdquo;</strong> producido
                                en la propia hacienda. Alianza estratégica con Hacienda La Florida, ganadora del
                                premio Taza Dorada 2020.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Café de especialidad 100% orgánico',
                                    'Variedades Sidra Borbón y Típica Mejorada',
                                    'Puntaje SCA proyectado: 84-87 puntos',
                                    'Trazabilidad desde la planta hasta la taza',
                                    'Experiencia de catación incluida',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-naranja flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gris-oscuro">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cafetería clickable image */}
                        <div
                            className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-lg cursor-zoom-in group"
                            style={{ height: '360px' }}
                            role="button"
                            tabIndex={0}
                            aria-label="Ampliar foto de la Cafetería"
                            onClick={() => setCafeteriaLightboxOpen(true)}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setCafeteriaLightboxOpen(true); }}
                        >
                            <Image
                                src={getAssetUrl('/Cafetería/interior.jpg')}
                                alt="Cafetería Aroma de Montaña"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 pointer-events-none">
                                <span className="text-white bg-black/60 px-5 py-2.5 rounded-full text-sm backdrop-blur-sm font-semibold tracking-wide shadow-xl">
                                    🔍 Ampliar Foto
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ── Lightbox: glamping gallery ── */}
                <Lightbox
                    images={currentImages}
                    currentIndex={lightboxIndex}
                    isOpen={lightboxOpen}
                    onClose={() => setLightboxOpen(false)}
                    onNext={() => setLightboxIndex((p) => (p + 1) % currentImages.length)}
                    onPrev={() => setLightboxIndex((p) => (p - 1 + currentImages.length) % currentImages.length)}
                />

                {/* ── Lightbox: cafetería ── */}
                <Lightbox
                    images={cafeteriaImages}
                    currentIndex={0}
                    isOpen={cafeteriaLightboxOpen}
                    onClose={() => setCafeteriaLightboxOpen(false)}
                    onNext={() => {}}
                    onPrev={() => {}}
                />
            </div>
        </section>
    );
}
