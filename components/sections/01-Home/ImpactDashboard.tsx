'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

interface StatCardProps {
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    delay?: number;
}

function StatCard({ value, suffix = '', prefix = '', label, delay = 0 }: StatCardProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            className="card-glass text-center p-8 hover-lift"
        >
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-3">
                {isInView && (
                    <>
                        {prefix}
                        <CountUp
                            end={value}
                            duration={2.5}
                            separator=","
                            decimals={value % 1 !== 0 ? 1 : 0}
                        />
                        {suffix}
                    </>
                )}
            </div>
            <p className="text-gris-oscuro font-medium text-sm md:text-base">{label}</p>
        </motion.div>
    );
}

export default function ImpactDashboard() {
    return (
        <section className="py-16 md:py-24 bg-cremita relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-naranja rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-verde-olivo rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-florenza text-verde-oscuro mb-4">
                        Dashboard de Impacto
                    </h2>
                    <p className="text-lg md:text-xl text-gris-oscuro max-w-3xl mx-auto">
                        Números reales que respaldan tu inversión
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    <StatCard
                        prefix="$"
                        value={600000}
                        suffix="+"
                        label="Patrimonio Total"
                        delay={0.1}
                    />
                    <StatCard
                        value={23.5}
                        label="Hectáreas Protegidas"
                        delay={0.2}
                    />
                    <StatCard
                        value={3000}
                        label="Árboles Reforestados"
                        delay={0.3}
                    />
                    <StatCard
                        value={19}
                        suffix="%"
                        label="Punto de Equilibrio"
                        delay={0.4}
                    />
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-12 md:mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 bg-verde-oscuro text-cremita px-6 py-3 rounded-full">
                        <svg className="w-5 h-5 text-naranja" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">
                            Reserva de Biosfera UNESCO "Bosques de Paz"
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
