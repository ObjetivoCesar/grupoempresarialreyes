'use client';

import { motion } from 'framer-motion';

const projections = [
    { label: 'Apertura', income: 5000 },
    { label: 'Q2', income: 25000 },
    { label: 'Q4', income: 58000 },
    { label: 'Año 2', income: 110000 },
    { label: 'Año 3', income: 185000 },
    { label: 'Año 5', income: 320000 },
];

export default function ModeloNegocioPage() {
    const maxIncome = Math.max(...projections.map(p => p.income));

    return (
        <div className="space-y-12">
            <section className="bg-verde-oscuro p-12 rounded-3xl text-cremita shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                    <h1 className="text-5xl font-florenza">Ingeniería <span className="text-naranja italic">Financiera</span></h1>
                    <p className="text-cremita/70 max-w-2xl mt-4 text-lg">Visualice la escalabilidad de su capital a través de un modelo de alta rotación y bajos costos fijos.</p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-naranja/20 rounded-full blur-3xl opacity-50" />
            </section>

            {/* Main Income Chart - X (Time) vs Y (Income) */}
            <div className="card-glass p-8 md:p-16 space-y-12 bg-white/40 border border-verde-oscuro/5">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div>
                        <h2 className="text-3xl font-florenza text-verde-oscuro">Curva de Crecimiento de Ingresos</h2>
                        <p className="text-sm text-gris-oscuro/50 mt-1">Ingresos brutos proyectados por unidad operativa (USD)</p>
                    </div>
                    <div className="bg-verde-oscuro text-cremita px-6 py-4 rounded-2xl shadow-lg border border-naranja/20">
                        <p className="text-[10px] uppercase font-black tracking-widest text-naranja">Target Año 5</p>
                        <p className="text-3xl font-bold">$320,000</p>
                    </div>
                </div>

                {/* The Chart Area */}
                <div className="relative h-[400px] mt-8 flex items-end gap-1 md:gap-4 group">
                    {/* Y-Axis labels */}
                    <div className="absolute -left-4 h-full flex flex-col justify-between text-[10px] font-bold text-gris-oscuro/30 py-2 items-end">
                        <span>$320k</span>
                        <span>$240k</span>
                        <span>$160k</span>
                        <span>$80k</span>
                        <span>$0</span>
                    </div>

                    {/* Horizontal Line Grid */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                        {[0, 1, 2, 3, 4].map(i => (
                            <div key={i} className="w-full border-t border-dashed border-gris-oscuro/40" />
                        ))}
                    </div>

                    {projections.map((p, i) => {
                        const height = (p.income / maxIncome) * 100;
                        return (
                            <div key={i} className="flex-1 relative flex flex-col items-center group/bar h-full justify-end">
                                {/* Tooltip on hover */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                    className="absolute top-[-30px] bg-cafe-acento text-white text-[10px] px-3 py-1.5 rounded-full shadow-xl z-20 whitespace-nowrap hidden group-hover/bar:block"
                                >
                                    $ {p.income.toLocaleString()} USD
                                </motion.div>

                                {/* Bar with gradient and growth */}
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${height}%` }}
                                    transition={{ delay: i * 0.1, duration: 1.2, ease: "circOut" }}
                                    className="w-full max-w-[60px] bg-gradient-to-t from-verde-oscuro to-naranja rounded-t-2xl shadow-lg group-hover/bar:scale-105 transition-transform"
                                >
                                    {/* Animated overlay to simulate growth flow */}
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/bar:opacity-30 transition-opacity" />
                                </motion.div>

                                {/* X-Axis (Time Labels) */}
                                <p className="absolute -bottom-10 text-[11px] font-black text-verde-oscuro/50 uppercase tracking-tighter">
                                    {p.label}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="pt-12 flex justify-center">
                    <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gris-oscuro/30">
                        <div className="flex items-center gap-2 underline decoration-naranja underline-offset-4">Eje X: Tiempo</div>
                        <div className="flex items-center gap-2 underline decoration-verde-oscuro underline-offset-4">Eje Y: Ingresos USD</div>
                    </div>
                </div>
            </div>

            {/* Model Strategy Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-cafe-acento p-12 rounded-[2.5rem] text-cremita shadow-xl overflow-hidden relative">
                    <h3 className="text-3xl font-florenza mb-6">Eficiencia <span className="text-naranja italic">Operativa</span></h3>
                    <p className="text-lg font-light leading-relaxed opacity-80">
                        Nuestro modelo se aleja de la estructura de "Hotel masivo". Al fraccionar la propiedad y automatizar procesos con ingeniería de software (Dashboard GER), logramos que cada dólar invertido trabaje un 30% más rápido que en activos inmobiliarios tradicionales.
                    </p>
                    <div className="mt-8 flex gap-3 flex-wrap">
                        {['0 Deuda Bancaria', 'Eficiencia Solar', 'Retorno Trimestral'].map((t, i) => (
                            <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest">{t}</span>
                        ))}
                    </div>
                    <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl">⚙️</div>
                </div>

                <div className="bg-white p-12 rounded-[2.5rem] shadow-md border border-verde-oscuro/5 flex flex-col justify-between">
                    <div className="space-y-4">
                        <h4 className="text-2xl font-florenza text-verde-oscuro">Regla 70 / 30</h4>
                        <p className="text-gris-oscuro/70 leading-relaxed font-poppins">
                            El inversor es el socio principal. El 70% de las rentas netas van directo a su portafolio, mientras GER asume la responsabilidad de mantener el estándar de lujo y la ocupación global.
                        </p>
                    </div>
                    <div className="pt-8">
                        <button className="btn-primary w-full">Descargar Plan de Negocios PDF</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
