'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

export default function GlampingShowcase() {
    const [activeType, setActiveType] = useState(0);

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
                        "No vendemos m²; vendemos noches de reconexión y días de café de especialidad"
                    </p>
                </motion.div>

                {/* Type Selector */}
                <div className="flex justify-center gap-4 mb-12">
                    {glampingTypes.map((type, index) => (
                        <button
                            key={type.id}
                            onClick={() => setActiveType(index)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeType === index
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
                    {/* Image Carousel */}
                    <motion.div
                        key={activeType}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 4000 }}
                            loop
                            className="rounded-2xl overflow-hidden shadow-lg-custom"
                        >
                            {glampingTypes[activeType].images.map((image, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="relative aspect-[4/3]">
                                        <Image
                                            src={image}
                                            alt={`${glampingTypes[activeType].name} - Vista ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
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
                                <span className="text-lg text-gris-oscuro">
                                    Inversión
                                </span>
                            </div>
                            <p className="text-lg text-gris-oscuro flex items-center gap-2">
                                <svg className="w-5 h-5 text-naranja" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Capacidad: {glampingTypes[activeType].capacity}
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-xl font-semibold text-verde-oscuro">
                                Equipamiento Premium
                            </h4>
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

                {/* Cafetería Section */}
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
                                Integración del café <strong className="text-naranja">"Taza Dorada"</strong> producido
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
                        <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg-custom">
                            <Image
                                src="/Cafetería/interior.jpg"
                                alt="Cafetería Aroma de Montaña"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
