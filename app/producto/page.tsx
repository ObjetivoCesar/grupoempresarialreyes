'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const mainProducts = [
    {
        id: 'cafeteria',
        name: 'Cafetería Ecológica / Taza Dorada',
        badge: 'Experiencia Base',
        investment: 'Operado por Hacienda',
        roi: 'Flujo Diario',
        desc: 'Punto social y epicentro de la experiencia de café de especialidad. Un espacio bajo impacto con techos de paja y arquitectura abierta.',
        images: [
            '/Images/hacienda-view.jpg',
            '/Images/naturaleza-2.jpg',
        ],
        specs: {
            capacidad: '50 Personas',
            certificacion: 'Taza Dorada Loja',
            area: '120m²',
            servicios: 'Wi-Fi Starlink / Paneles Solares'
        }
    },
    {
        id: 'alpino',
        name: 'Glamping Alpino (Modelo 6P)',
        badge: 'Oportunidad Estrella',
        investment: '$30,000',
        roi: '33.9%',
        desc: 'Unidad modular prefabricada diseñada para montaje rápido y bajo impacto. El equilibrio perfecto entre costo y rentabilidad.',
        images: [
            '/30k/exterior.png',
            '/30k/interior.jpeg',
            '/30k/interior_1.jpg',
            '/30k/interior_2.jpg',
            '/30k/plano.jpg',
        ],
        specs: {
            estructura: 'Hierro Negro 7x7',
            aislamiento: 'Poliuretano Inyectado',
            capacidad: '6 Personas (2+4)',
            area: '24m² + Altillo'
        }
    },
    {
        id: 'vip',
        name: 'Residencia VIP / Casa Modelo',
        badge: 'Máximo Lujo',
        investment: '$250,000',
        roi: 'Patrimonial',
        desc: 'Gran arquitectura Alpina de 12 personas con doble altura. Un activo inmobiliario de lujo perenne.',
        images: [
            '/250k/exterior.jpg',
            '/250k/interior_1.jpg',
            '/250k/interior_2.jpg',
            '/250k/plano.jpg',
        ],
        specs: {
            estructura: 'Hormigón Armado',
            acabados: 'Lujo Premium',
            capacidad: '12 Personas',
            area: '180m² (Planta Baja + Alta)'
        }
    }
];

const infraSections = [
    {
        id: 'topografia',
        name: 'Levantamiento Topográfico',
        badge: 'Ingeniería Civil',
        investment: 'Escala 1:500',
        roi: 'Precisión',
        desc: 'Levantamiento topográfico completo de las 23.5 hectáreas, identificando curvas de nivel, escorrentías naturales y ubicaciones óptimas para cada glamping.',
        images: [
            '/250k/plano.jpg', // Placeholder for topo plans
            '/Images/naturaleza-2.jpg',
        ],
        specs: {
            archivo: 'AutoCAD / PDF Digital',
            puntos: '3,500 puntos GPS',
            exactitud: 'Milimétrica',
            soporte: 'Ingeniero Geodesta'
        }
    },
    {
        id: 'senderos',
        name: 'Senderos y Zonas de Camping',
        badge: 'Infraestructura Base',
        investment: 'Ejecutado al 100%',
        roi: 'Valorización',
        desc: '5 km de senderos de interpretación ya ejecutados, conectando los 18 glampings con monumentos naturales y miradores astronómicos.',
        images: [
            '/Images/naturaleza-2.jpg',
            '/Images/hacienda-view.jpg',
        ],
        specs: {
            distancia: '5,200 metros lineales',
            miradores: '3 miradores 360°',
            estado: 'Terminado / Operativo',
            amenities: 'Fogateros / Mirador Estelar'
        }
    }
];

export default function ProductoPage() {
    const [activeMain, setActiveMain] = useState('cafeteria');
    const [activeInfra, setActiveInfra] = useState('topografia');

    const currentMain = mainProducts.find(p => p.id === activeMain) || mainProducts[0];
    const currentInfra = infraSections.find(s => s.id === activeInfra) || infraSections[0];

    return (
        <div className="space-y-16 pb-20">
            {/* Section 1: Modelos e Infraestructura */}
            <section className="space-y-10">
                <section className="bg-verde-oscuro p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] text-cremita flex flex-col lg:flex-row justify-between items-center gap-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-naranja/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="max-w-xl relative z-10 text-center lg:text-left">
                        <h1 className="text-3xl md:text-5xl font-florenza leading-tight">Modelos e <span className="text-naranja italic">Infraestructura</span></h1>
                        <p className="text-cremita/60 mt-4 text-sm md:text-lg">Nuestras unidades están diseñadas para generar el máximo retorno por metro cuadrado, respetando el entorno virgen de Loja.</p>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-4 relative z-10 w-full lg:w-auto justify-center">
                        {mainProducts.map(p => (
                            <button
                                key={p.id}
                                onClick={() => setActiveMain(p.id)}
                                className={`px-4 py-2 md:px-8 md:py-4 rounded-xl md:rounded-2xl text-[9px] md:text-xs font-black uppercase tracking-widest transition-all border-2 ${activeMain === p.id
                                    ? 'bg-naranja border-naranja text-white shadow-xl scale-105'
                                    : 'border-white/10 hover:bg-white/5 text-cremita/50'}`}
                            >
                                {p.name.split(' (')[0].split(' / ')[0]}
                            </button>
                        ))}
                    </div>
                </section>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeMain}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12"
                    >
                        <ProductDetailPanel product={currentMain} />
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* Section 2: Planos y Levantamiento Topográfico */}
            <section className="space-y-10 pt-10">
                <section className="bg-verde-oscuro p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-naranja/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
                    <div className="max-w-xl relative z-10 text-center lg:text-left">
                        <h2 className="text-3xl md:text-5xl font-florenza leading-tight">Planos y <span className="text-naranja italic">Levantamiento</span></h2>
                        <p className="text-cremita/60 mt-4 text-sm md:text-lg">Acceso técnico al respaldo físico y legal de la topografía del proyecto. Seguridad e ingeniería de precisión.</p>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-4 relative z-10 w-full lg:w-auto justify-center">
                        {infraSections.map(s => (
                            <button
                                key={s.id}
                                onClick={() => setActiveInfra(s.id)}
                                className={`px-4 py-2 md:px-8 md:py-4 rounded-xl md:rounded-2xl text-[9px] md:text-xs font-black uppercase tracking-widest transition-all border-2 ${activeInfra === s.id
                                    ? 'bg-naranja border-naranja text-white shadow-xl scale-105'
                                    : 'border-white/10 hover:bg-white/5 text-cremita/50'}`}
                            >
                                {s.id === 'topografia' ? 'Levantamiento Topográfico' : 'Senderos y Zonas Camping'}
                            </button>
                        ))}
                    </div>
                </section>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeInfra}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12"
                    >
                        <ProductDetailPanel product={currentInfra} />
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* New Section: Modelos de Participación */}
            <section className="space-y-12 pt-20 border-t border-verde-oscuro/5">
                <div className="text-center space-y-4">
                    <h2 className="text-5xl font-florenza text-verde-oscuro">Elige Tu Modelo de <span className="text-naranja italic">Participación</span></h2>
                    <p className="text-gris-oscuro/60 max-w-2xl mx-auto">Compara los beneficios de cada certificado y asegura tu lugar en el ecosistema.</p>
                </div>

                <div className="overflow-x-auto pb-4 -mx-4 px-4">
                    <table className="w-full min-w-[600px] border-collapse bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm border border-verde-oscuro/5">
                        <thead>
                            <tr className="bg-verde-oscuro text-cremita">
                                <th className="p-4 md:p-8 text-left font-florenza text-lg md:text-xl">Características</th>
                                <th className="p-4 md:p-8 text-center text-naranja">
                                    <span className="block text-xl md:text-2xl font-florenza">BÁSICO</span>
                                    <span className="text-[10px] md:text-xs font-black tracking-widest">$30K</span>
                                </th>
                                <th className="p-4 md:p-8 text-center text-naranja">
                                    <span className="block text-xl md:text-2xl font-florenza">PREFERENTE</span>
                                    <span className="text-[10px] md:text-xs font-black tracking-widest">$100K</span>
                                </th>
                                <th className="p-4 md:p-8 text-center text-naranja">
                                    <span className="block text-xl md:text-2xl font-florenza">RESIDENCIA</span>
                                    <span className="text-[10px] md:text-xs font-black tracking-widest">$250K</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-gris-oscuro">
                            {[
                                { label: 'ROI Anual Estimado', values: ['35.4%', '14.72%', '8.1%'] },
                                { label: 'Plazo del Usufructo', values: ['5 Años', 'Perpetuo', 'Perpetuo'] },
                                { label: 'Payback (Recuperación)', values: ['2.8 Años', '6.8 Años', '12.3 Años'] },
                                { label: 'Uso y Goce Anual', values: ['No Aplica', '10 Días/Año', '60 Días/Año'] },
                                { label: 'Capacidad Unidad', values: ['6 Personas', '6 Personas', '12 Personas'] },
                                { label: 'Trazabilidad Dashboard', values: ['✅ Incluido', '✅ Incluido', '✅ Incluido'] },
                            ].map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-cremita/20' : ''}>
                                    <td className="p-6 pl-8 font-bold text-sm border-b border-gris-oscuro/5">{row.label}</td>
                                    {row.values.map((val, idx) => (
                                        <td key={idx} className="p-4 md:p-6 text-center text-xs md:text-sm border-b border-gris-oscuro/5">{val}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-center pt-8">
                    <button className="bg-naranja text-white px-6 py-4 md:px-12 md:py-5 rounded-full text-base md:text-xl font-bold shadow-2xl hover:scale-105 transition-all flex items-center gap-3 text-center">
                        🌄 AGENDAR LLAMADA PARA ASESORÍA PERSONALIZADA
                    </button>
                </div>
            </section>
        </div>
    );
}

function ProductDetailPanel({ product }: { product: any }) {
    return (
        <>
            {/* Visual Showcase */}
            <div className="lg:col-span-12 xl:col-span-7 space-y-6">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white aspect-[16/10]">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                        className="h-full w-full"
                    >
                        {product.images.map((img: string, idx: number) => (
                            <SwiperSlide key={idx}>
                                <Image src={img} alt={product.name} fill className="object-cover" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="absolute top-8 left-8 z-10 p-3 bg-white/10 backdrop-blur-md rounded-xl text-[10px] text-white font-bold uppercase tracking-widest border border-white/20">
                        {product.badge}
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {product.images.slice(0, 3).map((img: string, i: number) => (
                        <div key={i} className="aspect-video relative rounded-2xl overflow-hidden border border-verde-oscuro/5">
                            <Image src={img} alt="Thumb" fill className="object-cover grayscale hover:grayscale-0 transition-all cursor-pointer" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Sales & Tech Panel */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-8 flex flex-col justify-center bg-white/40 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-white/60 shadow-sm">
                <div>
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-naranja border-b-2 border-naranja pb-1">{product.badge}</span>
                    <h2 className="text-3xl md:text-4xl font-florenza text-verde-oscuro mt-4 md:mt-6">{product.name}</h2>
                    <div className="flex items-baseline gap-4 mt-2">
                        <p className="text-3xl md:text-4xl font-black text-verde-oscuro">{product.investment}</p>
                        {product.roi && (
                            <p className="text-lg font-bold text-naranja">ROI {product.roi}</p>
                        )}
                    </div>
                </div>

                <p className="text-base md:text-lg text-gris-oscuro/70 leading-relaxed italic">{product.desc}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specs).map(([key, val], i) => (
                        <div key={i} className="p-5 bg-white rounded-2xl border border-verde-oscuro/5 shadow-sm">
                            <p className="text-[9px] font-black uppercase text-gris-oscuro/30 mb-1">{key}</p>
                            <p className="text-sm font-bold text-verde-oscuro">{val as string}</p>
                        </div>
                    ))}
                </div>

                <div className="pt-6 space-y-4">
                    <button className="btn-primary w-full py-5 text-lg font-bold shadow-xl shadow-naranja/20">Solicitar Información Técnica</button>
                    <p className="text-[10px] text-center text-gris-oscuro/30 uppercase font-black tracking-widest">Respaldo legal y técnico garantizado</p>
                </div>
            </div>
        </>
    );
}
