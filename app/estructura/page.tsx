'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const units = [
    {
        id: 'hacienda',
        title: '1. Hacienda Aroma de Montaña',
        role: 'Núcleo territorial y base operativa física.',
        assets: '23.5 hectáreas en Paltas (Loja), zona UNESCO "Bosques de Paz".',
        responsibilities: [
            'Mantener infraestructura (18 glampings, 5km senderos).',
            'Producción agrícola regenerativa (Café especialidad, 3000 frutales).',
            'Operar la experiencia base de la marca.'
        ],
        model: 'Canon por uso de infraestructura y venta agrícola.',
        image: '/Images/naturaleza-2.jpg',
        pillars: [
            {
                title: 'Cafetería Aroma de Montaña',
                tag: 'Epicentro Gastronómico',
                desc: 'Mucho más que café. Un espacio diseñado para la degustación de nuestro café de especialidad, almuerzos campestres con productos de la huerta, venta de artesanías locales y el desarrollo de eventos exclusivos.',
                details: [
                    'Café Taza Dorada y variedades Sidra/Borbón.',
                    'Venta de artesanías auténticas de la región.',
                    'Espacio multieventos para hasta 50 personas.',
                    'Almuerzos orgánicos "Farm-to-Table".'
                ],
                image: '/Cafetería/layer-editor-export.png'
            },
            {
                title: 'Ecosistema de Camping',
                tag: 'Conexión Familiar',
                desc: 'Zonas de camping estratégicamente ubicadas en las crestas de la montaña. Un espacio seguro y prístino para que las familias vivan la experiencia de la montaña en sitios escogidos por su vista y pureza.',
                details: [
                    'Sitios exclusivos para tiendas de campaña.',
                    'Zonas seguras con acceso a servicios básicos.',
                    'Experiencia 100% inmersiva en la montaña.',
                    'Ideal para fogatas y observación estelar.'
                ],
                image: '/Images/naturaleza-2.jpg'
            },
            {
                title: 'Glampings de Lujo',
                tag: 'Confort Sustentable',
                desc: 'Unidades prefabricadas de mínimo impacto. Contamos con domos para 6 personas y residencias de lujo para 12 personas, todas equipadas con tecnología solar y vistas 360 grados.',
                details: [
                    'Unidades para 6 y 12 personas.',
                    'Energía 100% solar fotovoltaica.',
                    'Diseño reversible (mínima huella ambiental).',
                    'Equipamiento premium y telescopios.'
                ],
                image: '/250k/exterior.jpg'
            },
            {
                title: 'Gestión Hídrica Ancestral',
                tag: 'Seguridad Vital',
                desc: 'Blindaje hídrico mediante dos reservorios masivos y tres albarradas ancestrales Palta. Garantizamos el suministro de 8,000m³ de agua para riego y consumo anual.',
                details: [
                    '8,000 m³ de almacenamiento total.',
                    'Sistemas de riego por goteo de alta eficiencia.',
                    'Recarga natural de acuíferos mediante albarradas.',
                    'Independencia total de redes externas.'
                ],
                image: '/Images/naturaleza-2.jpg'
            }
        ]
    },
    {
        id: 'operations',
        title: '2. Aroma de Montaña Operations',
        role: 'Motor comercial y gestor de inteligencia de mercado.',
        responsibilities: [
            'Diseñar experiencias (Aventura, Bienestar, Astronomía).',
            'Gestionar canales de venta (OTAs y corporativos).',
            'Ejecutar distribución financiera automatizada.'
        ],
        model: 'Retención del 30% utilidad neta + 100% líneas complementarias.',
        image: '/Images/hacienda-view.jpg',
        highlight: 'El motor que genera el flujo de caja diario.',
        pillars: [
            {
                title: 'Retiros de Alto Rendimiento',
                tag: 'Motor B2B',
                desc: '4 eventos anuales diseñados para equipos corporativos y startups. Ocupación bloqueada que garantiza flujos de caja predecibles y tickets de alto valor.',
                details: [
                    '4 retiros corporativos garantizados/año.',
                    'Infraestructura preparada para 50+ personas.',
                    'Team building y dinámicas de propósito.',
                    'Contratos plurianuales con empresas.'
                ],
                image: '/Images/Amanecer Glamping.png'
            },
            {
                title: 'Turismo Astronómico',
                tag: 'Eventos Globales',
                desc: 'Ubicación privilegiada con cielo Bortle 3-4. 6 noches al año de ocupación 100% durante lluvias de estrellas como Perseidas y Gemínidas.',
                details: [
                    '6 eventos astronómicos masivos al año.',
                    'Ocupación 100% garantizada en fechas clave.',
                    'Guianza especializada y telescopios pro.',
                    'Tarifas premium para entusiastas.'
                ],
                image: '/Images/Astroturismo.png'
            },
            {
                title: 'Wellness Hub',
                tag: 'Lujo Consciente',
                desc: '2 retiros largos de yoga y meditación profunda. Un modelo de negocio con márgenes operativos superiores al 60% gracias a la exclusividad de la oferta.',
                details: [
                    '2 retiros de larga estancia (3-5 días) anuales.',
                    'Alimentación orgánica y terapias holísticas.',
                    'Fidelización de comunidad wellness.',
                    'Alta rentabilidad operativa.'
                ],
                image: '/Images/naturaleza-2.jpg'
            },
            {
                title: 'Inteligencia de Venta',
                tag: 'Margen Máximo',
                desc: 'Reducimos drásticamente la comisión de OTAs mediante un ecosistema de reservas directas y suscripciones experienciales.',
                details: [
                    'Dashboard de reservas en tiempo real.',
                    'Estrategia agresiva de venta directa (0% com).',
                    'Suscripciones para visitantes recurrentes.',
                    'Maximización del margen neto para el inversor.'
                ],
                image: '/Logos/Recurso 33@4x.png'
            }
        ]
    },
    {
        id: 'inversiones',
        title: '3. Inversiones Aroma de Montaña',
        role: 'Vehículo de captación y gobernanza legal.',
        responsibilities: [
            'Estructurar Certificados bajo Fideicomiso Mercantil.',
            'Custodiar activos (Tierra, glampings y marca).',
            'Garantizar transparencia mediante motor de reservas real.'
        ],
        model: 'Seguridad: Impide venta/gravamen de activos sin aprobación.',
        image: '/Logos/Recurso 33@4x.png',
        pillars: [
            {
                title: 'Blindaje Fiduciario',
                tag: 'Seguridad Legal',
                desc: 'Sus activos no son solo promesas; están custodiados en un Fideicomiso Mercantil que incluye la tierra, la infraestructura y la marca.',
                details: [
                    'Patrimonio autónomo protegido por ley.',
                    'Imposibilidad de gravámenes unilaterales.',
                    'Garantía real sobre el activo físico (Tierra).',
                    'Estructura legal de máxima transparencia.'
                ],
                image: '/Logos/Logo Aroma de Montaña.png'
            },
            {
                title: 'Trazabilidad Total',
                tag: 'Transparencia 24/7',
                desc: 'Como inversor, usted no espera un reporte mensual para saber cómo va su negocio. El motor de reservas le permite ver la ocupación en tiempo real.',
                details: [
                    'Acceso a motor de reservas 24/7.',
                    'Visualización de utilidades acumuladas.',
                    'Desglose por canal de venta (Booking, Directo).',
                    'Eliminación total de opacidad administrativa.'
                ],
                image: '/Logos/Recurso 33@4x.png'
            },
            {
                title: 'Garantía Dual',
                tag: 'Plusvalía + Flujo',
                desc: 'Un modelo único que combina la seguridad de la rentabilidad inmobiliaria con el flujo de caja diario de un negocio turístico probado.',
                details: [
                    'Rentabilidad operativa (flujo de caja).',
                    'Valorización del terreno (Plusvalía).',
                    'Respaldo de activos físicos reales.',
                    'Modelo escalable y transferible.'
                ],
                image: '/Images/naturaleza-2.jpg'
            },
            {
                title: 'Modelos de Participación',
                tag: 'ROI Dinámico',
                desc: 'Tres niveles de inversión diseñados para diferentes perfiles, desde el inversor que busca retorno rápido hasta el que desea una segunda residencia.',
                details: [
                    'Básico ($30k): Retorno rápido y alta liquidez.',
                    'Preferente ($100k): Perpetuo con uso personal.',
                    'Residencial ($250k): Propiedad de alto valor.',
                    'Payback proyectado promedio de 3 a 7 años.'
                ],
                image: '/250k/exterior.jpg'
            }
        ]
    }
];

export default function EstructuraPage() {
    const [activeTab, setActiveTab] = useState('hacienda');
    const activeUnit = units.find(u => u.id === activeTab) || units[0];

    return (
        <div className="space-y-16 pb-20">
            {/* Cabecera de Sección */}
            <section className="bg-verde-oscuro p-12 rounded-[3rem] text-cremita shadow-2xl overflow-hidden relative border border-white/10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-naranja/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="relative z-10 max-w-4xl">
                    <h1 className="text-5xl font-florenza mb-6">Estructura de Tres <span className="text-naranja italic">Unidades de Negocio</span></h1>
                    <p className="text-cremita/70 text-lg font-light leading-relaxed">
                        Nuestro ecosistema está blindado mediante una separación estratégica de unidades. Esto garantiza que el patrimonio del inversor (la tierra y los activos) esté protegido de los riesgos operativos comerciales.
                    </p>
                </div>
            </section>

            {/* Tabs Selector con Efecto Glass */}
            <div className="sticky top-4 z-40 bg-white/40 backdrop-blur-xl p-2 rounded-3xl shadow-xl border border-white/40 flex flex-wrap md:flex-nowrap gap-2 max-w-4xl mx-auto">
                {units.map(u => (
                    <button
                        key={u.id}
                        onClick={() => setActiveTab(u.id)}
                        className={`flex-1 px-6 py-4 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all min-h-[70px] flex items-center justify-center text-center ${activeTab === u.id
                            ? 'bg-verde-oscuro text-white shadow-lg ring-4 ring-verde-oscuro/5'
                            : 'hover:bg-cremita/50 text-gris-oscuro/50 transition-all hover:scale-[0.98]'
                            }`}
                    >
                        {u.title.split('. ')[1]}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    className="space-y-20"
                >
                    {/* Resumen de Unidad - Estilo Glass Splitted */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/30 backdrop-blur-sm rounded-[3rem] p-4 lg:p-8 border border-white/50 shadow-sm">
                        <div className="p-8 lg:p-12 flex flex-col justify-center space-y-8">
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-florenza text-verde-oscuro">{activeUnit.title}</h2>
                                <div className="h-1 w-24 bg-naranja mt-4"></div>
                                <p className="text-naranja font-black text-xs mt-6 uppercase tracking-widest">Misión: {activeUnit.role}</p>
                            </div>

                            <p className="text-gris-oscuro/70 text-lg font-light leading-relaxed italic border-l-4 border-cremita pl-6">
                                {activeUnit.assets}
                            </p>

                            <div className="bg-verde-oscuro/5 p-8 rounded-3xl border border-verde-oscuro/10 space-y-4">
                                <p className="text-[10px] font-black uppercase text-verde-oscuro/40 tracking-[0.2em]">Acuerdo Inversionista / Seguridad</p>
                                <p className="text-xl font-medium text-verde-oscuro leading-relaxed underline decoration-naranja/30 underline-offset-8">
                                    {activeUnit.model}
                                </p>
                            </div>
                        </div>

                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[400px] lg:h-auto group">
                            <Image src={activeUnit.image} alt={activeUnit.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-verde-oscuro/60 to-transparent"></div>
                            {activeUnit.highlight && (
                                <div className="absolute bottom-10 left-10 p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 max-w-sm">
                                    <p className="text-white text-lg font-medium italic">"{activeUnit.highlight}"</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Pilares Visuales - Glass Cards with Image Split */}
                    <div className="space-y-12">
                        <div className="text-center space-y-4">
                            <h3 className="text-5xl font-florenza text-verde-oscuro">Propósitos <span className="text-naranja italic">Operativos</span></h3>
                            <p className="text-gris-oscuro/30 font-black uppercase tracking-[0.4em] text-[10px]">Detalle técnico y comercial de {activeUnit.title.split('. ')[1]}</p>
                        </div>

                        <div className="space-y-12 max-w-6xl mx-auto">
                            {activeUnit.pillars.map((p, i) => (
                                <div
                                    key={i}
                                    className={`flex flex-col lg:flex-row items-stretch gap-0 rounded-[3rem] overflow-hidden shadow-xl border border-white/60 bg-white/40 backdrop-blur-xl group hover:shadow-2xl transition-all duration-500 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                                >
                                    {/* Texto descriptivo */}
                                    <div className="flex-1 p-10 lg:p-14 space-y-8 flex flex-col justify-center">
                                        <div className="space-y-4 text-center lg:text-left">
                                            <span className="bg-naranja text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ">
                                                {p.tag}
                                            </span>
                                            <h4 className="text-3xl lg:text-4xl font-florenza text-verde-oscuro leading-tight">{p.title}</h4>
                                            <div className="h-0.5 w-16 bg-cremita mx-auto lg:mx-0"></div>
                                        </div>

                                        <p className="text-sm lg:text-base text-gris-oscuro/70 leading-relaxed font-light">
                                            {p.desc}
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {p.details.map((detail, di) => (
                                                <div key={di} className="flex items-start gap-3">
                                                    <span className="w-5 h-5 bg-cremita rounded-full flex items-center justify-center text-[10px] font-black text-verde-oscuro mt-0.5 shrink-0">✓</span>
                                                    <span className="text-xs text-gris-oscuro font-semibold leading-relaxed">{detail}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Imagen / Slider */}
                                    <div className="flex-1 min-h-[400px] relative overflow-hidden">
                                        <Image
                                            src={p.image}
                                            alt={p.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-verde-oscuro/5 mix-blend-multiply"></div>

                                        {/* Slider Controls Placeholder - Estilo Glass */}
                                        <div className="absolute bottom-8 right-8 flex gap-3">
                                            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white cursor-pointer hover:bg-white/40 transition-all">
                                                ←
                                            </div>
                                            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white cursor-pointer hover:bg-white/40 transition-all">
                                                →
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

