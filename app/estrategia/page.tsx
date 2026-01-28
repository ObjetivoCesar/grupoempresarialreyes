'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const strategies = [
    {
        id: 1,
        title: 'Astroturismo & Noches Bajo las Estrellas',
        desc: 'Experiencias de cielo oscuro probadas mundialmente. Ocupación 100% vendida por adelantado en lluvias de meteoros.',
        stats: ['Sin Clima Diurno', 'Público Recurrente'],
        icon: '✨'
    },
    {
        id: 2,
        title: 'Retiros de Alto Rendimiento Humano',
        desc: 'Mindfulness estratégico y conexión grupal para empresas. Ticket Alto Corporativo garantizado trimestralmente.',
        stats: ['Mercado B2B', 'Contratos Anuales'],
        icon: '🏢'
    },
    {
        id: 3,
        title: 'Wellness & Conexión Natural',
        desc: 'Forest bathing, yoga y meditación en un entorno virgen. Turismo Regenerativo en su máxima expresión.',
        stats: ['Tendencia Wellness', 'Day-Pass Revenue'],
        icon: '🧘'
    }
];

const investmentData = {
    '30k': {
        label: 'Modelo Básico ($30k)',
        projections: [
            { year: 'Y1 (4m)', value: 6800 },
            { year: 'Año 2', value: 9850 },
            { year: 'Año 3', value: 11753 },
            { year: 'Año 4', value: 11200 },
            { year: 'Año 5', value: 11500 },
            { year: 'Y6 (8m)', value: 11347 },
        ],
        mix: [
            { label: 'Hospedaje Glamping', pct: 55, color: '#6C7654' },
            { label: 'Retiros Longevidad', pct: 25, color: '#43281C' },
            { label: 'Café & Otros', pct: 20, color: '#FCA259' },
        ]
    },
    '100k': {
        label: 'Modelo Preferente ($100k)',
        projections: [
            { year: 'Y1 (4m)', value: 24500 },
            { year: 'Año 2', value: 36800 },
            { year: 'Año 3', value: 43200 },
            { year: 'Año 4', value: 42100 },
            { year: 'Año 5', value: 44500 },
            { year: 'Y6 (8m)', value: 29666 },
        ],
        mix: [
            { label: 'Hospedaje Glamping', pct: 60, color: '#6C7654' },
            { label: 'Retiros Longevidad', pct: 25, color: '#43281C' },
            { label: 'Café & Otros', pct: 15, color: '#FCA259' },
        ]
    },
    '250k': {
        label: 'Residencial 360 ($250k)',
        projections: [
            { year: 'Y1 (4m)', value: 62000 },
            { year: 'Año 2', value: 94000 },
            { year: 'Año 3', value: 112500 },
            { year: 'Año 4', value: 110000 },
            { year: 'Año 5', value: 118000 },
            { year: 'Y6 (8m)', value: 78666 },
        ],
        mix: [
            { label: 'Hospedaje Glamping', pct: 70, color: '#6C7654' },
            { label: 'Retiros Longevidad', pct: 20, color: '#43281C' },
            { label: 'Café & Otros', pct: 10, color: '#FCA259' },
        ]
    }
};

export default function EstrategiaPage() {
    const [tier, setTier] = useState<'30k' | '100k' | '250k'>('30k');
    const activeData = investmentData[tier];

    // Global scale to show magnitude difference between tiers
    const globalMaxVal = 130000;

    const points = activeData.projections.map((p, i) => {
        const x = (i / (activeData.projections.length - 1)) * 100;
        const y = 100 - (p.value / globalMaxVal) * 100;
        return `${x},${y}`;
    }).join(' ');

    return (
        <div className="space-y-16 pb-20">
            <section className="bg-verde-oscuro p-12 rounded-[3rem] text-cremita border-l-8 border-naranja shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-naranja/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl font-florenza mb-4">Estrategias de <span className="text-naranja italic">Ocupación Garantizada</span></h1>
                    <p className="text-cremita/70 text-lg max-w-3xl font-light">
                        No dependemos de la suerte. Nuestras 3 líneas estratégicas aseguran un flujo de caja diversificado y resiliente ante cualquier mercado.
                    </p>
                </div>
            </section>

            <div className="grid grid-cols-1 gap-12">
                {strategies.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/40 backdrop-blur-xl p-12 rounded-[3rem] flex flex-col md:flex-row gap-12 items-center hover:bg-white/60 transition-all border border-white/60 shadow-sm"
                    >
                        <div className="text-7xl bg-cremita flex items-center justify-center w-32 h-32 rounded-[2.5rem] border border-verde-oscuro/5 shadow-inner shrink-0 leading-none">
                            <span className="translate-y-1">{s.icon}</span>
                        </div>
                        <div className="flex-1 space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-black uppercase text-naranja bg-naranja/5 px-4 py-1.5 rounded-full tracking-[0.2em]">Estrategia #0{s.id}</span>
                                <div className="h-px bg-gris-oscuro/5 flex-1" />
                            </div>
                            <h2 className="text-4xl font-florenza text-verde-oscuro">{s.title}</h2>
                            <p className="text-xl text-gris-oscuro/60 leading-relaxed font-light">{s.desc}</p>
                            <div className="flex flex-wrap gap-6 pt-2">
                                {s.stats.map((st, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-verde-oscuro/40">
                                        <span className="w-2 h-2 rounded-full bg-naranja" />
                                        {st}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Financial Projections Section */}
            <div className="space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div className="space-y-2">
                        <h3 className="text-4xl font-florenza text-verde-oscuro">Proyección de Ingresos Netos <span className="text-naranja">(Inversor)</span></h3>
                        <p className="text-gris-oscuro/40 text-xs font-black uppercase tracking-widest">Comparativa de escala real a 5 años</p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-md p-1.5 rounded-2xl flex border border-white/60 shadow-sm">
                        {(Object.keys(investmentData) as Array<keyof typeof investmentData>).map((t) => (
                            <button
                                key={t}
                                onClick={() => setTier(t)}
                                className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${tier === t ? 'bg-verde-oscuro text-white shadow-lg' : 'text-gris-oscuro/30 hover:bg-cremita/50'}`}
                            >
                                {t === '30k' ? '$30k' : t === '100k' ? '$100k' : '$250k'}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Chart Card */}
                    <div className="lg:col-span-2 bg-white rounded-[3rem] p-10 lg:p-12 shadow-xl border border-verde-oscuro/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <h4 className="text-9xl font-black text-verde-oscuro leading-none select-none">ROI</h4>
                        </div>

                        <div className="relative h-[350px] w-full mt-4">
                            {/* Grid Lines */}
                            <div className="absolute inset-0 flex flex-col justify-between">
                                {[0, 1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-full h-px bg-gris-oscuro/5 relative">
                                        <span className="absolute -left-12 -top-2 text-[10px] font-bold text-gris-oscuro/20 tracking-tighter">
                                            ${Math.round((globalMaxVal * (4 - i) / 4) / 1000)}k
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Chart Line */}
                            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <motion.path
                                    key={tier}
                                    d={`M ${points}`}
                                    fill="none"
                                    stroke="#6C7654"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                />
                                {/* Area shadow */}
                                <motion.path
                                    key={`${tier}-area`}
                                    d={`M 0,100 L ${points} L 100,100 Z`}
                                    fill="url(#chartGradient)"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.1 }}
                                    transition={{ duration: 2 }}
                                />
                                <defs>
                                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#6C7654" />
                                        <stop offset="100%" stopColor="#6C7654" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Data Points */}
                            <div className="absolute inset-0 flex justify-between">
                                {activeData.projections.map((p, i) => (
                                    <div key={i} className="relative flex flex-col items-center group/point">
                                        <div
                                            className="absolute"
                                            style={{
                                                left: `${(i / (activeData.projections.length - 1)) * 100}%`,
                                                top: `${100 - (p.value / globalMaxVal) * 100}%`,
                                                transform: 'translate(-50%, -50%)'
                                            }}
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 1 + (i * 0.1) }}
                                                className="w-4 h-4 rounded-full bg-white border-4 border-verde-oscuro shadow-lg cursor-pointer hover:scale-125 transition-transform"
                                            />
                                            {/* Tooltip */}
                                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-gris-oscuro text-white px-4 py-2 rounded-xl text-xs font-bold opacity-0 group-hover/point:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-2xl z-20">
                                                <p className="text-[10px] opacity-60 uppercase mb-0.5">{p.year}</p>
                                                <p className="text-lg">${p.value.toLocaleString()}</p>
                                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gris-oscuro rotate-45"></div>
                                            </div>
                                        </div>
                                        {/* Year Label */}
                                        <div className="absolute bottom-[-40px] whitespace-nowrap text-[10px] font-black uppercase text-gris-oscuro/30 tracking-widest translate-x-1/2 right-full">
                                            {p.year}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mix Card */}
                    <div className="bg-cremita/30 rounded-[3rem] p-10 border border-verde-oscuro/5 flex flex-col justify-between">
                        <div className="space-y-8">
                            <h4 className="text-2xl font-florenza text-verde-oscuro">Mix de Ingresos</h4>
                            <div className="space-y-6">
                                {activeData.mix.map((item, i) => (
                                    <div key={i} className="space-y-2 group">
                                        <div className="flex justify-between items-end">
                                            <span className="text-[10px] font-black uppercase text-gris-oscuro/40 tracking-widest">{item.label}</span>
                                            <span className="text-xl font-black text-verde-oscuro">{item.pct}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/50 rounded-full overflow-hidden">
                                            <motion.div
                                                key={`${tier}-${i}`}
                                                initial={{ width: 0 }}
                                                animate={{ width: `${item.pct}%` }}
                                                className="h-full rounded-full ring-2 ring-white/20"
                                                style={{ backgroundColor: item.color }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-10 flex justify-center">
                            <div className="relative w-48 h-48">
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                    {activeData.mix.map((item, i) => {
                                        const offset = activeData.mix.slice(0, i).reduce((acc, curr) => acc + curr.pct, 0);
                                        return (
                                            <motion.circle
                                                key={`${tier}-svg-${i}`}
                                                cx="50"
                                                cy="50"
                                                r="40"
                                                fill="transparent"
                                                stroke={item.color}
                                                strokeWidth="15"
                                                strokeDasharray={`${item.pct} ${100 - item.pct}`}
                                                strokeDashoffset={-offset}
                                                initial={{ strokeDasharray: "0 100" }}
                                                animate={{ strokeDasharray: `${item.pct} ${100 - item.pct}` }}
                                                transition={{ duration: 1.5, delay: 0.5 }}
                                            />
                                        );
                                    })}
                                    <circle cx="50" cy="50" r="32" fill="#EAE7DC" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                    <p className="text-[8px] font-black uppercase text-gris-oscuro/40">Payout</p>
                                    <p className="text-lg font-black text-verde-oscuro">Mix</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
