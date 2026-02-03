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
                <div className="card-glass p-12 space-y-6">
                    <h3 className="text-3xl font-florenza text-verde-oscuro italic underline decoration-naranja underline-offset-8">Fideicomiso Mercantil</h3>
                    <p className="text-gris-oscuro/70 leading-relaxed font-poppins">
                        Nuestro modelo se aleja de la discrecionalidad administrativa. Al utilizar un **patrimonio autónomo**, el capital de los inversores está legalmente separado de la administración de la empresa principal.
                    </p>
                    <div className="space-y-4 pt-4">
                        {[
                            'Elimina el riesgo de embargo de activos.',
                            'Garantiza que la utilidad se reparta automáticamente.',
                            'Auditoría total del patrimonio por una entidad fiduciaria.'
                        ].map((text, i) => (
                            <div key={i} className="flex gap-4 items-center p-4 bg-cremita/20 rounded-xl">
                                <span className="w-2 h-2 rounded-full bg-naranja" />
                                <span className="text-xs font-bold text-verde-oscuro">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card-glass p-12 space-y-8 bg-verde-oscuro/5">
                    <h3 className="text-3xl font-florenza text-verde-oscuro">Vigilancia en Tiempo Real</h3>
                    <p className="text-lg text-gris-oscuro/70 italic font-light">"Cada etapa tiene un responsable y cada firma un registro. Su inversión es ejecutable y verificable."</p>

                    <div className="p-8 bg-white rounded-3xl border border-verde-oscuro/5 shadow-inner scale-105">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-[10px] font-black uppercase tracking-widest text-naranja italic">Avance Legal / Permisos</p>
                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold">Vigente</span>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center justify-between text-xs">
                                <span className="font-bold text-gris-oscuro">Validado por:</span>
                                <span className="text-verde-oscuro font-black">Arq. Juan Salinas</span>
                            </div>
                            <Link
                                href="https://wa.me/593963410409?text=Hola%2C%20me%20gustar%C3%ADa%20ver%20el%20peritaje%20de%20la%20documentaci%C3%B3n%20en%20SENADI%20para%20el%20proyecto%20Aroma%20de%20Monta%C3%B1a."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full py-4 text-xs font-black uppercase tracking-widest text-center block"
                            >
                                Validar Documentación en SENADI
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
