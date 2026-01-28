'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HaciendaPage() {
    const stats = [
        { label: 'Título Property', val: 'Hacienda Aroma de Montaña', icon: '📍' },
        { label: 'Área Total', val: '23.5 Hectáreas', icon: '📏' },
        { label: 'Altitud', val: '1,850 - 2,100 msnm', icon: '⛰️' },
        { label: 'Ubicación', val: 'UNESCO Bosques de Paz', icon: '🌍' },
        { label: 'Reserva Hídrica', val: '8,000 m³ (Albarradas)', icon: '💧' },
        { label: 'Biodiversidad', val: '3,000+ Árboles Reforestados', icon: '🌿' },
    ];

    return (
        <div className="space-y-12">
            {/* Header with Background */}
            <section className="relative h-[250px] rounded-3xl overflow-hidden flex items-center px-12">
                <Image
                    src="/Images/Naturaleza.png"
                    alt="Hacienda Nature"
                    fill
                    className="object-cover brightness-50"
                />
                <div className="relative z-10 space-y-2">
                    <h1 className="text-4xl md:text-5xl font-florenza text-cremita">El Activo: <span className="text-naranja">La Tierra</span></h1>
                    <p className="text-cremita/70 max-w-xl">El respaldo físico de su inversión. Una hacienda productiva con certificación de sostenibilidad y alto valor patrimonial.</p>
                </div>
            </section>

            {/* Grid de Métricas del Activo */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-marron-claro/10 flex items-center gap-4"
                    >
                        <div className="w-12 h-12 rounded-xl bg-cremita flex items-center justify-center text-2xl">
                            {stat.icon}
                        </div>
                        <div>
                            <p className="text-[10px] uppercase font-bold text-gris-oscuro/40 tracking-wider font-poppins">{stat.label}</p>
                            <p className="text-lg font-bold text-verde-oscuro font-poppins">{stat.val}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Narrative Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
                <div className="space-y-6">
                    <h2 className="text-3xl font-florenza text-verde-oscuro">Patrimonio que respira</h2>
                    <p className="text-gris-oscuro/80 leading-relaxed font-poppins">
                        Aroma de Montaña no es un terreno más. Es una pieza fundamental del corredor biológico <strong>Bosques de Paz de la UNESCO</strong>. Aquí, el valor inmobiliario crece de la mano con la restauración ecológica.
                    </p>
                    <div className="p-6 bg-verde-olivo/5 rounded-2xl border-l-4 border-verde-olivo">
                        <p className="text-sm font-medium italic text-verde-olivo font-poppins">
                            "Protegemos el 40% del área total para conservación pura, asegurando que el lujo de hoy no destruya el recurso del mañana."
                        </p>
                    </div>
                </div>
                <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-xl">
                    <Image
                        src="/Images/hacienda-view.jpg"
                        alt="Hacienda View"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
