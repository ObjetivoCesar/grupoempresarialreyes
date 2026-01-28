'use client';

import { motion } from 'framer-motion';

const revenueStreams = [
    {
        name: 'Alquiler de Glampings',
        percentage: '50-60%',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    },
    {
        name: 'Retiros Corporativos',
        percentage: '20-25%',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        name: 'Cafetería y Alimentación',
        percentage: '8-12%',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
        ),
    },
    {
        name: 'Pasadía y Turismo',
        percentage: '5-10%',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
    },
    {
        name: 'Eventos Temáticos',
        percentage: '3-5%',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        ),
    },
    {
        name: 'Suscripciones',
        percentage: '2-3%',
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
    },
];

export default function RevenueStreams() {
    return (
        <section id="negocio" className="section-light">
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
                        El Negocio
                    </h2>
                    <p className="text-lg md:text-xl text-gris-oscuro max-w-3xl mx-auto">
                        Ingeniería financiera y diversificación de riesgo
                    </p>
                </motion.div>

                {/* Revenue Streams Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {revenueStreams.map((stream, index) => (
                        <motion.div
                            key={stream.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card-glass hover-lift"
                        >
                            <div className="text-naranja mb-4">{stream.icon}</div>
                            <h4 className="text-xl font-semibold text-verde-oscuro mb-2">
                                {stream.name}
                            </h4>
                            <div className="text-3xl font-bold text-gradient mb-1">
                                {stream.percentage}
                            </div>
                            <p className="text-sm text-gris-oscuro/70">del ingreso total</p>
                        </motion.div>
                    ))}
                </div>

                {/* 70/30 Model Explanation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-earth text-white rounded-3xl p-8 md:p-12 mb-16"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-florenza mb-6">
                                Modelo de Distribución 70/30
                            </h3>
                            <p className="text-lg text-cremita/90 leading-relaxed mb-6">
                                Transparencia total en la distribución de utilidades. El 70% va directo al inversionista,
                                el 30% cubre operación y mantenimiento.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Distribución automática vía Fideicomiso',
                                    'Sin discrecionalidad humana',
                                    'Dashboard en tiempo real',
                                    'Reportes mensuales detallados',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <svg className="w-5 h-5 text-naranja flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
                                <div className="text-5xl md:text-6xl font-bold text-naranja mb-2">70%</div>
                                <div className="text-cremita">Para el Inversionista</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
                                <div className="text-5xl md:text-6xl font-bold text-cremita mb-2">30%</div>
                                <div className="text-cremita/80">Para Operations</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Occupancy Scenarios */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-3xl md:text-4xl font-florenza text-verde-oscuro text-center mb-8">
                        Escenarios de Ocupación
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: 'Pesimista', occupancy: '14%', roi: '22%+', color: 'bg-gris-oscuro' },
                            { name: 'Base', occupancy: '20%', roi: '35.4%', color: 'bg-naranja', highlighted: true },
                            { name: 'Optimista', occupancy: '25%', roi: '44%+', color: 'bg-verde-olivo' },
                        ].map((scenario, index) => (
                            <motion.div
                                key={scenario.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: scenario.highlighted ? 1.05 : 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`${scenario.color} text-white rounded-2xl p-8 text-center ${scenario.highlighted ? 'shadow-xl' : 'shadow-lg'
                                    }`}
                            >
                                <h4 className="text-2xl font-florenza mb-4">{scenario.name}</h4>
                                <div className="mb-4">
                                    <div className="text-4xl font-bold mb-1">{scenario.occupancy}</div>
                                    <div className="text-sm opacity-80">Ocupación</div>
                                </div>
                                <div className="border-t border-white/20 pt-4">
                                    <div className="text-3xl font-bold mb-1">{scenario.roi}</div>
                                    <div className="text-sm opacity-80">ROI Anual</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-center text-gris-oscuro mt-8">
                        <strong className="text-naranja">Punto de equilibrio: 19%</strong> de ocupación
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
