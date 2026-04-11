'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
    {
        id: 'fideicomiso',
        title: 'Asamblea de Socios',
        entity: 'Sociedad 50/50',
        icon: '🤝',
        desc: 'Máximo órgano de decisión conformado por el Socio Estratégico y la Dirección del proyecto, donde se aprueban balances y se dictan líneas de crecimiento ante notaría.',
        responsibilities: [
            'Toma de Decisiones Estratégicas',
            'Aprobación de Balances Financieros',
            'Vigilancia de Ejecución de Capital',
            'Transparencia Societaria Directa'
        ],
        color: 'bg-cafe-acento'
    },
    {
        id: 'ops',
        title: 'Gerencia de Operations',
        entity: 'Motor de Rentabilidad',
        icon: '⚙️',
        desc: 'El cerebro comercial encargado de maximizar la ocupación y generar el flujo de caja diario mediante la gestión estratégica.',
        responsibilities: [
            'Supervisión de Estrategia Comercial',
            'Gestión de Alianzas Corporativas B2B',
            'Optimización de Procesos Operativos',
            'Control de KPIs de Rentabilidad'
        ],
        color: 'bg-naranja'
    },
    {
        id: 'hacienda',
        title: 'Administración Hacienda',
        entity: 'Gestión de Activos',
        icon: '🏡',
        desc: 'Responsable de la preservación física de la Hacienda Aroma de Montaña y el mantenimiento de toda la infraestructura agrícola y turística.',
        responsibilities: [
            'Mantenimiento de Glampings y Áreas Sociales',
            'Gestión hídrica y de reservorios',
            'Seguridad y Vigilancia 24/7',
            'Preservación del Bosque Hidropónico'
        ],
        color: 'bg-verde-oscuro'
    },
    {
        id: 'contabilidad',
        title: 'Contadora',
        entity: 'Control Financiero',
        icon: '📊',
        desc: 'Soporte administrativo que garantiza la transparencia de cuentas y reportes para la Asamblea de Socios e inversores.',
        responsibilities: [
            'Cierre de Caja y Conciliación Flujos',
            'Gestión de Pagos a Terceros',
            'Reportes de Utilidad Mensuales',
            'Cumplimiento Tributario Senior'
        ],
        color: 'bg-[#6B705C]'
    },
    {
        id: 'marketing',
        title: 'Marketing & Digital',
        entity: 'Creadores de Contenido',
        icon: '📱',
        desc: 'Equipo especializado en posicionamiento de marca, generación de leads y visibilidad global del proyecto.',
        responsibilities: [
            'Producción de Contenido Audiovisual',
            'Gestión de Redes Sociales y Ads',
            'Relaciones con Creadores de Contenido',
            'Estrategia de Email Marketing'
        ],
        color: 'bg-[#D4A373]'
    },
    {
        id: 'cafeteria',
        title: 'Equipo Cafetería',
        entity: 'Hospitalidad & Café',
        icon: '☕',
        desc: 'Personal encargado de la experiencia gastronómica y social que atrae flujo diario a la Hacienda.',
        responsibilities: [
            'Baristas Especializados',
            'Servicio de Almuerzos Campestres',
            'Atención al Cliente Premium',
            'Control de Calidad Taza Dorada'
        ],
        color: 'bg-[#8B7355]'
    },
    {
        id: 'almacen',
        title: 'Almacén Artesanal',
        entity: 'Retail & Souvenirs',
        icon: '🛍️',
        desc: 'Punto de venta directo de café premium, artesanías y merchandising del proyecto.',
        responsibilities: [
            'Comercialización de Café Aroma',
            'Gestión de Artesanías Locales',
            'Control de Inventarios Souvenirs',
            'Exhibición de Marca'
        ],
        color: 'bg-[#A39171]'
    },
    {
        id: 'terceros',
        title: 'Empresas Terceristas',
        entity: 'Aliados Técnicos',
        icon: '🤝',
        desc: 'Colaboradores externos especializados que garantizan la operación técnica de alto nivel.',
        responsibilities: [
            'Hacienda La Florida (Taza Dorada)',
            'Mantenimiento de Sistemas Solares',
            'Servicios Gastronómicos Externos',
            'Consultoría en Astroturismo'
        ],
        color: 'bg-[#556B2F]'
    }
];

export default function GobernanzaPage() {
    const [selectedRole, setSelectedRole] = useState(roles[0]);

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Grupo Empresarial Reyes",
                "url": "https://grupoempresarialreyes.vercel.app",
                "description": "Desarrolladores del ecosistema de turismo sostenible Aroma de Montaña"
            },
            {
                "@type": "Person",
                "name": "César Reyes",
                "jobTitle": "Fundador y Socio Estratégico",
                "worksFor": {
                    "@type": "Organization",
                    "name": "Grupo Empresarial Reyes"
                }
            }
        ]
    };

    return (
        <div className="space-y-12 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Header Section */}
            <section className="bg-verde-oscuro p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] text-cremita border-l-8 border-naranja shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-naranja/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="relative z-10 space-y-4">
                    <h1 className="text-3xl md:text-5xl font-florenza">Gobernanza & <span className="text-naranja italic">Transparencia</span></h1>
                    <p className="text-cremita/70 text-base md:text-lg max-w-3xl font-light">
                        Su inversión está respaldada por una estructura profesional de mando. Cada área opera de forma independiente bajo la supervisión directa de la Asamblea de Socios.
                    </p>
                </div>
            </section>

            <div className="flex flex-col gap-12">
                {/* 1. Interactive Org Chart (ALWAYS ON TOP AND FULL WIDTH) */}
                <div className="w-full">
                    <div className="bg-white/40 backdrop-blur-xl p-4 md:p-8 lg:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/60 shadow-sm relative min-h-[500px] lg:min-h-[600px] overflow-hidden">

                        {/* Schema Container */}
                        <div className="w-full flex flex-col items-center py-6 md:py-10">

                            {/* Level 1: Asamblea de Socios */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-8 md:mb-16 relative z-10"
                            >
                                <RoleNode
                                    role={roles.find(r => r.id === 'fideicomiso')!}
                                    isSelected={selectedRole.id === 'fideicomiso'}
                                    onClick={() => setSelectedRole(roles.find(r => r.id === 'fideicomiso')!)}
                                />
                                <div className="absolute left-1/2 -bottom-8 md:-bottom-16 w-px h-8 md:h-16 bg-verde-oscuro/20 hidden md:block"></div>
                            </motion.div>

                            {/* Level 2: Operations & Hacienda */}
                            <div className="flex flex-row gap-4 md:gap-40 relative mb-8 md:mb-16 w-full justify-center px-4">
                                {/* Horizontal connection */}
                                <div className="absolute top-0 left-[25%] right-[25%] h-px bg-verde-oscuro/20 hidden md:block"></div>

                                {/* Operations Branch */}
                                <div className="flex flex-col items-center pt-0 md:pt-8 relative">
                                    <div className="absolute top-0 left-1/2 w-px h-8 bg-verde-oscuro/20 hidden md:block"></div>
                                    <RoleNode
                                        role={roles.find(r => r.id === 'ops')!}
                                        isSelected={selectedRole.id === 'ops'}
                                        onClick={() => setSelectedRole(roles.find(r => r.id === 'ops')!)}
                                    />
                                    <div className="w-px h-4 md:h-12 bg-verde-oscuro/20 hidden md:block"></div>

                                    {/* Sub-level (Ops) */}
                                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 relative mt-4 md:mt-0">
                                        <div className="absolute top-0 left-[25%] right-[25%] h-px bg-verde-oscuro/20 hidden md:block"></div>
                                        <div className="flex flex-col items-center pt-0 md:pt-4">
                                            <div className="w-px h-4 bg-verde-oscuro/20 hidden md:block"></div>
                                            <RoleNode
                                                role={roles.find(r => r.id === 'contabilidad')!}
                                                isSelected={selectedRole.id === 'contabilidad'}
                                                onClick={() => setSelectedRole(roles.find(r => r.id === 'contabilidad')!)}
                                                small
                                            />
                                        </div>
                                        <div className="flex flex-col items-center pt-0 md:pt-4">
                                            <div className="w-px h-4 bg-verde-oscuro/20 hidden md:block"></div>
                                            <RoleNode
                                                role={roles.find(r => r.id === 'marketing')!}
                                                isSelected={selectedRole.id === 'marketing'}
                                                onClick={() => setSelectedRole(roles.find(r => r.id === 'marketing')!)}
                                                small
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Hacienda Branch */}
                                <div className="flex flex-col items-center pt-0 md:pt-8 relative">
                                    <div className="absolute top-0 left-1/2 w-px h-8 bg-verde-oscuro/20 hidden md:block"></div>
                                    <RoleNode
                                        role={roles.find(r => r.id === 'hacienda')!}
                                        isSelected={selectedRole.id === 'hacienda'}
                                        onClick={() => setSelectedRole(roles.find(r => r.id === 'hacienda')!)}
                                    />
                                    <div className="w-px h-4 md:h-12 bg-verde-oscuro/20 hidden md:block"></div>

                                    {/* Sub-level (Hacienda) */}
                                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 relative mt-4 md:mt-0">
                                        <div className="absolute top-0 left-[20%] right-[20%] h-px bg-verde-oscuro/20 hidden md:block"></div>

                                        <div className="flex flex-col items-center pt-0 md:pt-4">
                                            <div className="w-px h-4 bg-verde-oscuro/20 hidden md:block"></div>
                                            <RoleNode
                                                role={roles.find(r => r.id === 'cafeteria')!}
                                                isSelected={selectedRole.id === 'cafeteria'}
                                                onClick={() => setSelectedRole(roles.find(r => r.id === 'cafeteria')!)}
                                                small
                                            />
                                        </div>
                                        <div className="flex flex-col items-center pt-0 md:pt-4">
                                            <div className="w-px h-4 bg-verde-oscuro/20 hidden md:block"></div>
                                            <RoleNode
                                                role={roles.find(r => r.id === 'almacen')!}
                                                isSelected={selectedRole.id === 'almacen'}
                                                onClick={() => setSelectedRole(roles.find(r => r.id === 'almacen')!)}
                                                small
                                            />
                                        </div>
                                        <div className="flex flex-col items-center pt-0 md:pt-4">
                                            <div className="w-px h-4 bg-verde-oscuro/20 hidden md:block"></div>
                                            <RoleNode
                                                role={roles.find(r => r.id === 'terceros')!}
                                                isSelected={selectedRole.id === 'terceros'}
                                                onClick={() => setSelectedRole(roles.find(r => r.id === 'terceros')!)}
                                                small
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Detail Panel (NOW BELOW AND FULL WIDTH) */}
                <div className="w-full max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedRole.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 lg:p-12 shadow-2xl border border-verde-oscuro/5"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${selectedRole.color} flex items-center justify-center text-2xl md:text-3xl shadow-lg`}>
                                            {selectedRole.icon}
                                        </div>
                                        <div className="pt-4">
                                            <p className="text-[9px] md:text-[10px] font-black uppercase text-naranja tracking-[0.2em]">{selectedRole.entity}</p>
                                            <h3 className="text-2xl md:text-3xl font-florenza text-verde-oscuro">{selectedRole.title}</h3>
                                        </div>
                                    </div>

                                    <p className="text-base md:text-lg text-gris-oscuro/60 font-light leading-relaxed">
                                        {selectedRole.desc}
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-verde-oscuro">Responsabilidades Clave:</h4>
                                    <div className="grid grid-cols-1 gap-2 md:gap-3">
                                        {selectedRole.responsibilities.map((res, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 md:p-4 bg-cremita rounded-xl md:rounded-2xl border border-verde-oscuro/5 hover:border-naranja/20 transition-colors">
                                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-naranja shrink-0" />
                                                <span className="text-xs md:text-sm font-medium text-verde-oscuro/80">{res}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

function RoleNode({ role, isSelected, onClick, small = false }: { role: any, isSelected: boolean, onClick: () => void, small?: boolean }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={`
                cursor-pointer transition-all duration-300 rounded-[1.2rem] md:rounded-[2.5rem] flex flex-col items-center justify-center text-center
                ${small ? 'p-2 w-24 h-24 md:w-36 md:h-36' : 'p-4 w-36 h-36 md:w-56 md:h-56'}
                ${isSelected
                    ? `shadow-2xl ring-2 md:ring-4 ring-naranja/20 scale-105 ${role.color} text-cremita`
                    : 'bg-white shadow-lg border border-verde-oscuro/5 text-verde-oscuro hover:shadow-2xl'
                }
            `}
        >
            <span className={`${small ? 'text-xl md:text-3xl' : 'text-3xl md:text-6xl'} mb-1 md:mb-3`}>{role.icon}</span>
            <p className={`${small ? 'text-[6px]' : 'text-[8px]'} font-black uppercase opacity-60 tracking-widest mb-0.5`}>{role.entity}</p>
            <h4 className={`${small ? 'text-[10px] md:text-sm' : 'text-sm md:text-xl'} font-florenza leading-tight px-1`}>{role.title}</h4>
        </motion.div>
    );
}
