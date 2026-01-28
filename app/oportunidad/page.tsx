'use client';

import { motion } from 'framer-motion';

const certificates = [
    {
        name: 'Certificado Básico',
        price: '$30,000',
        roi: '35.4%',
        payback: '2.8 años',
        highlight: true,
        features: [
            'Única oportunidad para inversores minoritarios',
            'Propiedad fraccionada del 70% de utilidad',
            'Uso personal: 7 días al año',
            'Retorno mensual vía Fideicomiso',
            'Transferible y Heredable'
        ]
    },
    {
        name: 'Certificado Preferente',
        price: '$100,000',
        roi: '14.72%',
        payback: '6.8 años',
        highlight: false,
        features: [
            'Preferencia en pagos mensuales',
            'Veto en decisiones de reinversión',
            'Uso personal: 21 días al año',
            'Acceso a Eventos Corporativos GER',
            'Liquidación garantizada al año 5'
        ]
    },
    {
        name: 'Residencia 360',
        price: '$250,000',
        roi: '8.1%',
        payback: '12.3 años',
        highlight: false,
        features: [
            'Unidad Privada de Lujo Exclusivo',
            'Retorno patrimonial por plusvalía',
            'Uso personal: Ilimitado (Bloqueado x Admin)',
            'Máxima seguridad de capital',
            'Respaldo hipotecario directo'
        ]
    }
];

export default function OportunidadPage() {
    return (
        <div className="space-y-12">
            <section className="bg-cremita border border-marron-claro/20 p-12 rounded-3xl">
                <h1 className="text-4xl font-florenza text-verde-oscuro">La Oportunidad: <span className="text-naranja italic">Vehículos de Inversión</span></h1>
                <p className="text-gris-oscuro/70 mt-4 max-w-2xl">Elija el vehículo que mejor se adapte a su perfil de riesgo y objetivos de rentabilidad.</p>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {certificates.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`card relative overflow-hidden flex flex-col ${cert.highlight ? 'ring-4 ring-naranja border-transparent shadow-2xl' : 'border border-gris-oscuro/5'
                            }`}
                    >
                        {cert.highlight && (
                            <div className="absolute top-0 right-0 bg-naranja text-white text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-widest">
                                Más Popular
                            </div>
                        )}

                        <div className="space-y-4 mb-8">
                            <h3 className="text-xl font-florenza text-verde-oscuro">{cert.name}</h3>
                            <div className="space-y-1">
                                <p className="text-4xl font-bold text-verde-oscuro">{cert.price}</p>
                                <p className="text-sm font-bold text-naranja uppercase tracking-widest">{cert.roi} ROI Anual Esperado</p>
                            </div>
                        </div>

                        <div className="flex-1 space-y-4 mb-8">
                            {cert.features.map((f, i) => (
                                <div key={i} className="flex gap-3 text-xs leading-tight">
                                    <span className="text-naranja font-bold">•</span>
                                    <span className="text-gris-oscuro/70">{f}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-gris-oscuro/5">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Retorno de Capital</span>
                                <span className="text-sm font-bold text-verde-oscuro">{cert.payback}</span>
                            </div>
                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${cert.highlight ? 'bg-naranja text-white hover:bg-opacity-90' : 'bg-verde-oscuro text-cremita hover:bg-opacity-90'
                                }`}>
                                Solicitar Dossier
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ROI Calculator Section Placeholder */}
            <div className="bg-verde-oscuro p-10 rounded-3xl text-cremita flex flex-col md:flex-row items-center justify-between gap-8 translate-y-6">
                <div className="space-y-2">
                    <h4 className="text-2xl font-florenza">¿Desea una proyección personalizada?</h4>
                    <p className="text-cremita/50 text-sm">Nuestros asesores pueden enviarle un simulador financiero de acuerdo a su capital.</p>
                </div>
                <button className="btn-secondary whitespace-nowrap !border-cremita !text-cremita hover:!bg-cremita hover:!text-verde-oscuro">
                    Hablar con un Especialista
                </button>
            </div>
        </div>
    );
}
