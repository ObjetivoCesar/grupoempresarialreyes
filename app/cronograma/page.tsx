'use client';

import { motion } from 'framer-motion';
import NextImage from 'next/image';

const phases = [
    {
        phase: 'Mes 1-2',
        title: 'Fase Legal y Estructural',
        status: 'Completado',
        items: ['Estructuración Fideicomiso Mercantil.', 'Escrituración de activos al patrimonio autónomo.', 'Lanzamiento de Certificados de Participación.']
    },
    {
        phase: 'Mes 3-5',
        title: 'Infraestructura Base',
        status: 'En Proceso',
        items: ['Vialidad y plataformas de glamping.', 'Instalación de red eléctrica y agua.', 'Cimentación de casas VIP.']
    },
    {
        phase: 'Mes 6-8',
        title: 'Construcción Modular',
        status: 'Agendado',
        items: ['Ensamblaje de Glampings Alpinos.', 'Acabados de lujo y deck privado.', 'Equipamiento tecnológico (Starlink + Solar).']
    },
    {
        phase: 'Mes 9+',
        title: 'Operación Comercial',
        status: 'Futuro',
        items: ['Inauguración del Complejo Natura.', 'Recepción de los primeros huéspedes.', 'Cierre de primer ciclo de caja diario.']
    }
];

const permits = [
    { name: 'Licencia Ambiental (MAATE)', status: 'APROBADO', color: 'text-green-600', val: 100 },
    { name: 'Permiso Construcción GAD', status: 'EN PROCESO', color: 'text-naranja', val: 50 },
    { name: 'Factibilidad EERSSA', status: 'PENDIENTE', color: 'text-gris-oscuro/30', val: 20 },
];

export default function CronogramaPage() {
    return (
        <div className="space-y-12">
            <section className="bg-verde-oscuro p-12 rounded-3xl text-cremita relative overflow-hidden">
                <h1 className="text-4xl font-florenza">Plan de ejecución por <span className="text-naranja italic">Fases</span></h1>
                <p className="text-cremita/70 mt-4 max-w-3xl">Garantizamos transparencia total. Cada etapa tiene hitos verificables y fechas de entrega claras para tu seguridad patrimonial.</p>
                <div className="absolute top-0 right-0 p-10 opacity-5 text-8xl">🏗️</div>
            </section>

            {/* Timeline Section */}
            <div className="space-y-6 relative pt-4">
                <div className="absolute left-[30px] top-0 bottom-0 w-1 bg-verde-oscuro/5 hidden md:block" />

                {phases.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col md:flex-row gap-8 relative"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-verde-oscuro text-cremita flex items-center justify-center font-bold text-[10px] uppercase shrink-0 z-10 border-4 border-cremita">
                            {p.phase}
                        </div>
                        <div className="flex-1 card-glass p-8 space-y-4 hover:border-naranja/40 transition-all">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-florenza text-verde-oscuro">{p.title}</h2>
                                <span className="text-[10px] font-black uppercase text-naranja tracking-widest">{p.status}</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {p.items.map((item, idx) => (
                                    <div key={idx} className="flex gap-2 items-start opacity-70">
                                        <span className="font-black text-naranja">•</span>
                                        <p className="text-xs leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Seguimiento de Obra en Vivo - Casa Modelo */}
            <div className="card-glass p-12 bg-white/50 border-2 border-verde-oscuro/10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                    <div>
                        <h3 className="text-4xl font-florenza text-verde-oscuro">Seguimiento de Obra: <span className="text-naranja">Casa Modelo</span></h3>
                        <p className="text-xs font-black uppercase tracking-widest text-gris-oscuro/40 mt-2">Estructura de Hormigón Armado | Entrega Obra Gris: Feb 2026</p>
                    </div>
                    <div className="px-6 py-3 bg-verde-oscuro text-cremita rounded-2xl shadow-xl">
                        <span className="text-xs font-bold">Estado General:</span>
                        <span className="ml-2 text-xl font-black text-naranja">42.6%</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        {[
                            { label: 'Planta Baja (120m²)', val: 30.1, date: 'Feb 2026' },
                            { label: 'Planta Alta (60m²)', val: 12.5, date: 'Mayo 2026' },
                            { label: 'Acabados & Cubierta', val: 0, date: 'Agosto 2026' },
                        ].map((item, i) => (
                            <div key={i} className="space-y-3">
                                <div className="flex justify-between items-end">
                                    <p className="text-sm font-bold text-verde-oscuro">{item.label}</p>
                                    <p className="text-lg font-black text-naranja">{item.val}%</p>
                                </div>
                                <div className="h-2 w-full bg-verde-oscuro/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${item.val}%` }}
                                        transition={{ duration: 1.5, delay: i * 0.2 }}
                                        className="h-full bg-verde-oscuro"
                                    />
                                </div>
                                <p className="text-[10px] font-bold text-gris-oscuro/30 uppercase">Entrega Proyectada: {item.date}</p>
                            </div>
                        ))}
                    </div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[300px] border-4 border-white">
                        <NextImage src="/Images/hacienda-view.jpg" alt="Obra en vivo" fill className="object-cover" />
                        <div className="absolute top-4 right-4 px-4 py-2 bg-naranja text-white text-[10px] font-black uppercase rounded-lg shadow-lg">En Vivo</div>
                    </div>
                </div>
            </div>

            {/* Estatus Legal / Permisos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
                <div className="card-glass p-12 bg-white/60">
                    <h3 className="text-3xl font-florenza text-verde-oscuro mb-8">Estatus Legal Vigente</h3>
                    <div className="space-y-6">
                        {permits.map((p, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-between items-end">
                                    <p className="text-xs font-bold text-gris-oscuro">{p.name}</p>
                                    <p className={`text-[10px] font-black ${p.color}`}>{p.status}</p>
                                </div>
                                <div className="h-1.5 w-full bg-gris-oscuro/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${p.val}%` }}
                                        className={`h-full ${p.val === 100 ? 'bg-green-600' : 'bg-naranja'}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 p-6 bg-cafe-acento rounded-2xl flex items-center justify-between gap-4">
                        <p className="text-white text-xs font-bold">Ver Expediente Legal en Google Drive</p>
                        <button className="px-4 py-2 bg-cremita text-cafe-acento rounded-lg text-[10px] font-black uppercase">Abrir Drive</button>
                    </div>
                </div>

                <div className="p-12 bg-verde-oscuro text-cremita rounded-[2.5rem] flex flex-col justify-center space-y-6 relative overflow-hidden">
                    <h4 className="text-4xl font-florenza italic text-naranja">Seguimiento Real</h4>
                    <p className="text-lg font-light leading-relaxed opacity-80">
                        Cada inversor recibe acceso a un **dashboard privado** con actualizaciones semanales de obra, fotografías geolocalizadas y reportes financieros auditados.
                        <br /><br />
                        Aquí no hay sorpresas, solo inversión ejecutada.
                    </p>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-naranja/10 rounded-full blur-3xl" />
                </div>
            </div>
        </div>
    );
}
