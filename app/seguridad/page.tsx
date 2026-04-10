'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const certifications = [
    { title: 'Empresa BIC', sub: 'Impacto Colectivo', icon: '🌱' },
    { title: 'Marca Registrada', sub: 'SENADI Ecuador', icon: '®️' },
    { title: 'Licencia Ambiental', sub: 'MAATE Aprobado', icon: '🛡️' },
    { title: 'Permiso GAD', sub: 'En Proceso', icon: '🏗️' },
];

export default function SeguridadPage() {
    return (
        <div className="space-y-12">
            <section className="bg-cafe-acento p-12 rounded-3xl text-cremita shadow-2xl relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="w-32 h-32 bg-naranja rounded-full flex items-center justify-center text-6xl shadow-2xl ring-4 ring-white/10 shrink-0">
                        🔒
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-5xl font-florenza">Blindaje Jurídico y <span className="text-naranja italic">Transparencia</span></h1>
                        <p className="max-w-2xl text-cremita/60 text-lg">Estructuras legales ecuatorianas diseñadas para proteger su capital frente a cualquier eventualidad.</p>
                    </div>
                </div>
                <div className="absolute top-0 right-0 p-12 opacity-5 text-9xl">⚖️</div>
            </section>

            {/* Certifications Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {certifications.map((c, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-8 rounded-3xl border border-verde-oscuro/5 shadow-xl text-center group hover:bg-verde-oscuro hover:text-white transition-all duration-500"
                    >
                        <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{c.icon}</div>
                        <h4 className="text-sm font-black uppercase tracking-widest">{c.title}</h4>
                        <p className="text-[10px] opacity-40 group-hover:opacity-60">{c.sub}</p>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
                <div className="card-glass p-12 space-y-6 bg-white border border-verde-oscuro/5 rounded-[3rem] shadow-xl">
                    <h3 className="text-3xl font-florenza text-verde-oscuro italic underline decoration-naranja underline-offset-8">Garantía Dual</h3>
                    <p className="text-gris-oscuro/70 leading-relaxed font-poppins">
                        Nuestra estructura de seguridad no depende solo de contratos. Se basa en una **Garantía Dual** que combina activos físicos y flujo operativo:
                    </p>
                    <div className="space-y-4 pt-4">
                        {[
                            'Respaldo Físico: El 50% de la tierra (23.5ha) e infraestructura.',
                            'Respaldo Operativo: Utilidades de 7 líneas de negocio diversificadas.',
                            'Blindaje Societario: Participación real en la compañía matriz.'
                        ].map((text, i) => (
                            <div key={i} className="flex gap-4 items-center p-4 bg-cremita/20 rounded-xl">
                                <span className="w-2 h-2 rounded-full bg-naranja" />
                                <span className="text-xs font-bold text-verde-oscuro">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="p-12 space-y-8 bg-verde-oscuro text-cremita rounded-[3rem] shadow-2xl relative overflow-hidden border border-white/10">
                    <h3 className="text-3xl font-florenza">Blindaje de <span className="text-naranja italic">Marca</span></h3>
                    <p className="text-lg text-cremita italic font-light">"Protegemos el valor corporativo para asegurar la escalabilidad infinita del proyecto."</p>
                    
                    <p className="text-sm leading-relaxed text-cremita/90 font-medium">
                        Para garantizar la seguridad del negocio a largo plazo, la sociedad (Socio + César) es dueña de los activos tangibles (Tierra, Glampings, Cafetería), mientras que la **Marca Registrada "Aroma de Montaña"** y su propiedad intelectual permanecen bajo control exclusivo del fundador.
                    </p>

                    <div className="p-8 bg-white/10 rounded-3xl border border-white/20 shadow-inner backdrop-blur-md">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-[10px] font-black uppercase tracking-widest text-naranja italic">Seguridad Jurídica</p>
                            <span className="px-3 py-1 bg-naranja text-cafe-acento rounded-full text-[10px] font-black">Resguardo SENADI</span>
                        </div>
                        <div className="space-y-6">
                            <ul className="text-xs space-y-3 text-cremita font-medium">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-naranja" />
                                    Marca registrada por 10 años renovables.
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-naranja" />
                                    Know-how de operación hotelera protegido.
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-naranja" />
                                    Blindaje contra contingencias externas.
                                </li>
                            </ul>
                            <a
                                href="https://wa.me/593963410409"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-naranja text-cafe-acento px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest text-center block hover:bg-white hover:scale-[1.02] transition-all shadow-lg"
                            >
                                Solicitar Registro de Propiedad
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
