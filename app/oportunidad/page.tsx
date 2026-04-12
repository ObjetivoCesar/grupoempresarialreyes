"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAssetUrl } from '@/lib/assets';

const investmentOptions = [
    {
        id: 'socio',
        type: 'OPCIÓN A',
        name: 'Socio Estratégico ($330,000 total)',
        price: '$230k cap. + $100k d.llave',
        roi: 'Retornos 12 a 24 meses',
        highlight: true,
        pitch: 'Entra al 50/50 del Grupo Empresarial Reyes.',
        desc: 'Participación societaria total en el Grupo Empresarial Reyes Operations. Copropiedad notariada. Voz y voto.',
        features: [
            'Retorno proyectado sobre utilidad neta en horizonte de 12 a 24 meses',
            'Respaldado por activos físicos valorizados en $460,000+',
            '50% de Utilidad Neta de todas las líneas de ingreso',
            'Participa en la venta de 12 casas Estándar y 6 casas Premium'
        ],
        projection: {
            title: 'El Motor Inmobiliario (Visión 50/50)',
            math: [
                { item: '12 Casas Estándar', sale: '$100k', cost: '$20k', profit: '$80k c/u' },
                { item: '6 Casas Premium', sale: '$250k', cost: '$50k', profit: '$200k c/u' }
            ],
            summary: 'Con solo vender el inventario, el Socio Estratégico ya tiene asegurado un retorno masivo.'
        }
    },
    {
        id: 'dueno',
        type: 'OPCIÓN B',
        name: 'Dueño de Glamping',
        price: '$100,000 - $250,000',
        roi: '50% Utilidad Neta',
        highlight: false,
        pitch: 'Tu activo físico trabajando para ti los 365 días del año.',
        desc: 'Compra una unidad completa. GER la opera. El inversor recibe 50% del ingreso neto de su unidad después de costos operativos.',
        features: [
            '50% del ingreso neto de tu unidad después de costos',
            'GER cubre operación completa con el otro 50%',
            'Gestión hotelera profesional 100% incluida',
            'Plusvalía directa sobre tierra y construcción'
        ],
        projection: {
            title: 'Proyección Dueño (Operativa)',
            math: [
                { item: 'Unidad Estándar', sale: 'Noche $220+', cost: '$0 (GER cubre todo)', profit: '50% Neto' },
                { item: 'Unidad Premium', sale: 'Noche $400+', cost: '$0 (GER cubre todo)', profit: '50% Neto' }
            ],
            summary: 'Recuperación estimada en 8-11 años con flujo perpetuo y activo valorizado.'
        }
    },
    {
        id: 'visionario',
        type: 'OPCIÓN C',
        name: 'Inversor Visionario',
        price: 'desde $50,000',
        roi: 'Rendimiento Proporcional',
        highlight: false,
        pitch: 'Participación proporcional sobre el proyecto total.',
        desc: 'Ideal para quien ve el negocio a 2 años: glampings, cafetería de especialidad, agroturismo, retiros espirituales.',
        features: [
            'Contrato de cuentas en participación (figura legal privada).',
            'Sin gestión operativa de su parte.',
            'Retorno proporcional al capital aportado sobre utilidades de la sociedad.',
            'Entra al ecosistema completo (7 fuentes de ingreso).'
        ],
        projection: {
            title: 'Proyección Visionario',
            math: [
                { item: 'Utilidad 2027 est.', sale: '$212k', cost: 'n/a', profit: 'Proporcional' }
            ],
            summary: 'Gana de las 7 líneas de ingreso sin ser dueño de una unidad específica.'
        }
    }
];

export default function OportunidadPage() {
    const [openProjection, setOpenProjection] = useState<string | null>(null);
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Offer",
        "name": "Opciones de Inversión Aroma de Montaña",
        "description": "Participa como Socio Estratégico, Dueño de Glamping o Inversor Visionario en nuestro ecosistema en Ecuador.",
        "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "50000",
            "maxPrice": "330000",
            "priceCurrency": "USD"
        },
        "itemOffered": {
            "@type": "InvestmentOrDeposit",
            "name": "Inversión en Glamping y Turismo Sostenible",
            "areaServed": {
                "@type": "Place",
                "name": "Loja, Ecuador"
            }
        },
        "offeredBy": {
            "@type": "Organization",
            "name": "Grupo Empresarial Reyes",
            "url": "https://grupoempresarialreyes.vercel.app"
        }
    };

    return (
        <div className="space-y-12 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <section className="bg-cremita border border-marron-claro/20 p-12 rounded-3xl relative overflow-hidden">
                <div className="relative z-10">
                    <h1 className="text-4xl font-florenza text-verde-oscuro">La Oportunidad: <span className="text-naranja italic">Sociedad y Activos</span></h1>
                    <p className="text-gris-oscuro/70 mt-4 max-w-2xl text-lg">Invierta en un ecosistema tangible y regenerativo diseñado para la máxima protección y crecimiento de su capital.</p>
                </div>
                <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl grayscale">💰</div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {investmentOptions.map((opt, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.15 }}
                        className={`card-glass p-8 md:p-12 relative flex flex-col h-full bg-white border border-verde-oscuro/5 rounded-[3rem] shadow-xl ${opt.highlight ? 'ring-4 ring-naranja shadow-2xl' : ''}`}
                    >
                        <div className="mb-8">
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-naranja border-b-2 border-naranja pb-1">{opt.type}</span>
                            <h3 className="text-3xl font-florenza text-verde-oscuro mt-6">{opt.name}</h3>
                            <p className="text-lg font-black text-naranja italic mt-2">"{opt.pitch}"</p>
                        </div>

                        <div className="mb-10 p-6 bg-verde-oscuro rounded-2xl text-cremita">
                            <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">Inversión Requerida</p>
                            <p className="text-4xl font-bold">{opt.price}</p>
                            <div className="mt-2 text-sm font-bold text-naranja uppercase tracking-widest">
                                {opt.roi}
                            </div>
                        </div>

                        <div className="flex-1 space-y-4 mb-10">
                            <p className="text-sm text-gris-oscuro/60 leading-relaxed italic border-l-2 border-naranja pl-4 mb-6">{opt.desc}</p>
                            {opt.features.map((f, i) => (
                                <div key={i} className="flex gap-4 text-sm leading-tight items-start">
                                    <span className="text-naranja font-bold text-lg leading-none">•</span>
                                    <span className="text-gris-oscuro/80">{f}</span>
                                </div>
                            ))}
                            
                            {/* Proyección Financiera Interactiva */}
                            <div className="mt-8">
                                <button 
                                    onClick={() => setOpenProjection(openProjection === opt.id ? null : opt.id)}
                                    className="flex items-center gap-2 text-naranja font-black text-xs uppercase tracking-widest hover:text-verde-oscuro transition-colors group"
                                >
                                    <span className="bg-naranja/10 p-2 rounded-full group-hover:bg-naranja transition-all">
                                        <svg className={`w-3 h-3 transition-transform ${openProjection === opt.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                                    </span>
                                    {openProjection === opt.id ? 'Ocultar Números' : 'Abrir los Ojos: Revelar Modelo'}
                                </button>

                                {openProjection === opt.id && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        className="mt-6 bg-cremita/50 border-2 border-naranja/20 p-6 rounded-3xl overflow-hidden shadow-inner"
                                    >
                                        <h4 className="font-black text-verde-oscuro mb-4 text-xs uppercase tracking-[0.2em]">
                                            {opt.projection.title}
                                        </h4>
                                        <ul className="space-y-4 mb-4">
                                            {opt.projection.math.map((m, mi) => (
                                                <li key={mi} className="bg-white/80 p-4 rounded-2xl border border-naranja/10 shadow-sm">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="font-black text-verde-oscuro text-sm">{m.item}</span>
                                                        <span className="text-[10px] uppercase font-black bg-naranja text-white px-2 py-0.5 rounded-full">PV: {m.sale}</span>
                                                    </div>
                                                    <div className="flex justify-between text-xs text-gris-oscuro/70 font-bold">
                                                        <span>Costo: {m.cost}</span>
                                                        <span className="text-verde-oscuro underline decoration-naranja/30 underline-offset-4">Utilidad: {m.profit}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-[10px] text-gris-oscuro/60 font-medium italic text-right">
                                            * {opt.projection.summary}
                                        </p>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gris-oscuro/10">
                            <a 
                                href="https://wa.me/593963410409"
                                target="_blank"
                                className={`w-full py-5 rounded-2xl font-black transition-all text-center block text-lg ${opt.highlight ? 'bg-naranja text-white shadow-xl hover:shadow-naranja/30 hover:scale-[1.02]' : 'bg-verde-oscuro text-cremita hover:bg-black hover:text-white'}`}
                            >
                                Solicitar Dossier Confidencial
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Final Conversion Section */}
            <div className="bg-verde-oscuro p-10 md:p-16 rounded-[3rem] text-cremita flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
                <div className="relative z-10 max-w-2xl space-y-6">
                    <h4 className="text-3xl md:text-4xl font-florenza leading-tight">¿Prefiere una reunión <span className="text-naranja italic">uno a uno?</span></h4>
                    <p className="text-cremita/60 text-lg">Podemos coordinar una visita a la Hacienda o una llamada técnica para revisar el respaldo legal de la sociedad y los activos.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto relative z-10">
                    <a 
                        href="https://wa.me/593963410409"
                        target="_blank"
                        className="px-10 py-5 bg-cremita text-verde-oscuro rounded-2xl font-bold text-lg hover:bg-naranja hover:text-white transition-all text-center"
                    >
                        Agendar Cita
                    </a>
                    <a 
                        href={getAssetUrl('/Images/Aroma_de_Montana_Inversion_ES.pdf')} 
                        download
                        className="px-10 py-5 border-2 border-cremita text-cremita rounded-2xl font-bold text-lg hover:border-naranja hover:text-naranja transition-all text-center"
                    >
                        Descargar Guía Financiera
                    </a>
                </div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-naranja/10 rounded-full blur-[100px]" />
            </div>
        </div>
    );
}
