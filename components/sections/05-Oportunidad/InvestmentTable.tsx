'use client';

import { motion } from 'framer-motion';

const investmentOptions = [
    {
        name: 'Socio Estratégico',
        investment: '$230,000',
        roi: '113%',
        payback: '1 año',
        term: 'Perpetuo',
        personalUse: 'Ilimitado (Gobernanza)',
        profile: 'Copresidencia 50/50',
        features: [
            '50% de TODO el ecosistema (7 motores)',
            'Derecho a voto en Asamblea de Socios',
            'Copropiedad notariada de 23.5ha',
            'Recuperación total en el Año 1',
            'Acceso a utilidades por venta de activos',
            'Blindaje jurídico total',
        ],
        highlighted: true,
    },
    {
        name: 'Glamping Estándar',
        investment: '$100,000',
        roi: '5.5% - 11.5%',
        payback: '8-9 años',
        term: 'Perpetuo',
        personalUse: '10 días/año',
        profile: 'Inversor Pasivo',
        features: [
            'Participación en unidad individual',
            '50% de utilidad operativa líquida',
            'Mantenimiento y marketing cubiertos',
            'Activo patrimonial heredable',
            'Escritura pública de copropiedad',
            'Gestión hotelera profesional 100%',
        ],
        highlighted: false,
    },
    {
        name: 'Residencia 360',
        investment: '$250,000',
        roi: '4.4% - 9.2%',
        payback: '10-11 años',
        term: 'Perpetuo',
        personalUse: '60 días/año',
        profile: 'Segunda Residencia + ROI',
        features: [
            'Glamping de ultra-lujo (12 personas)',
            '60 días de uso personal al año',
            '3 habitaciones independientes',
            'Ubicación con vistas 360°',
            'Alta plusvalía por exclusividad',
            'Incluido en pool operativo hotelero',
        ],
        highlighted: false,
    },
];

export default function InvestmentTable() {
    return (
        <section id="oportunidad" className="section-dark">
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-florenza text-cremita mb-4">
                        La Oportunidad
                    </h2>
                    <p className="text-lg md:text-xl text-cremita/80 max-w-3xl mx-auto">
                        Vehículos de inversión diseñados para diferentes perfiles
                    </p>
                </motion.div>

                {/* Investment Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                    {investmentOptions.map((option, index) => (
                        <motion.div
                            key={option.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative rounded-2xl p-8 ${option.highlighted
                                    ? 'bg-naranja text-white shadow-xl scale-105 lg:scale-110'
                                    : 'bg-cremita text-gris-oscuro shadow-lg'
                                }`}
                        >
                            {option.highlighted && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-verde-oscuro text-cremita px-4 py-1 rounded-full text-sm font-semibold">
                                        Más Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className="text-2xl md:text-3xl font-florenza mb-2">
                                    {option.name}
                                </h3>
                                <div className="text-4xl md:text-5xl font-bold mb-1">
                                    {option.investment}
                                </div>
                                <p className={`text-sm ${option.highlighted ? 'text-white/80' : 'text-gris-oscuro/70'}`}>
                                    Inversión inicial
                                </p>
                            </div>

                            {/* Key Metrics */}
                            <div className="space-y-4 mb-6">
                                <div className={`flex justify-between items-center pb-3 border-b ${option.highlighted ? 'border-white/20' : 'border-gris-oscuro/20'
                                    }`}>
                                    <span className="font-medium">ROI Anual</span>
                                    <span className="text-2xl font-bold">
                                        {option.roi}
                                    </span>
                                </div>
                                <div className={`flex justify-between items-center pb-3 border-b ${option.highlighted ? 'border-white/20' : 'border-gris-oscuro/20'
                                    }`}>
                                    <span className="font-medium">Payback</span>
                                    <span className="text-xl font-semibold">{option.payback}</span>
                                </div>
                                <div className={`flex justify-between items-center pb-3 border-b ${option.highlighted ? 'border-white/20' : 'border-gris-oscuro/20'
                                    }`}>
                                    <span className="font-medium">Plazo</span>
                                    <span className="text-xl font-semibold">{option.term}</span>
                                </div>
                                <div className={`flex justify-between items-center pb-3 border-b ${option.highlighted ? 'border-white/20' : 'border-gris-oscuro/20'
                                    }`}>
                                    <span className="font-medium">Uso Personal</span>
                                    <span className="text-lg font-semibold">{option.personalUse}</span>
                                </div>
                            </div>

                            {/* Profile */}
                            <div className={`text-center py-3 rounded-lg mb-6 ${option.highlighted ? 'bg-white/10' : 'bg-naranja/10'
                                }`}>
                                <span className="font-semibold">Perfil: {option.profile}</span>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {option.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <svg
                                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${option.highlighted ? 'text-white' : 'text-naranja'
                                                }`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 ${option.highlighted
                                    ? 'bg-white text-naranja hover:bg-cremita hover:scale-105'
                                    : 'bg-naranja text-white hover:bg-opacity-90 hover:scale-105'
                                }`}>
                                Solicitar información
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="glass-strong rounded-2xl p-8 max-w-4xl mx-auto">
                        <h4 className="text-2xl font-florenza text-cremita mb-4">
                            ¿Qué recibe el inversor?
                        </h4>
                        <p className="text-cremita/90 leading-relaxed mb-6">
                            No adquiere acciones de la S.A.S., sino el derecho al <strong className="text-naranja">50% de la utilidad operativa líquida</strong> generada
                            por su unidad de alojamiento o por todo el ecosistema (Socio), respaldada por escritura pública de copropiedad tangible.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-verde-oscuro/50 rounded-lg p-4">
                                <div className="text-naranja text-3xl font-bold mb-2">113%</div>
                                <div className="text-cremita text-sm">Punto de Equilibrio (Socio)</div>
                            </div>
                            <div className="bg-verde-oscuro/50 rounded-lg p-4">
                                <div className="text-naranja text-3xl font-bold mb-2">7</div>
                                <div className="text-cremita text-sm">Motores de Ingreso</div>
                            </div>
                            <div className="bg-verde-oscuro/50 rounded-lg p-4">
                                <div className="text-naranja text-3xl font-bold mb-2">100%</div>
                                <div className="text-cremita text-sm">Transparencia Notariada</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
