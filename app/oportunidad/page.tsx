'use client';

import { motion } from 'framer-motion';

const investmentOptions = [
    {
        type: 'OPCIÓN A',
        name: 'Socio Estratégico (50/50)',
        price: '$230,000',
        roi: '113% Año 1',
        highlight: true,
        pitch: 'Imagina que en 1 año o máximo 2 dupliques tu inversión.',
        desc: 'Participación societaria total en el Grupo Empresarial Reyes Operations, incluyendo la propiedad del terreno (23.5ha) e infraestructura.',
        features: [
            '50% de Utilidad Neta de todas las líneas de ingreso',
            'Propiedad compartida del terreno e infraestructura',
            'Respaldo Patrimonial Físico Inmediato',
            'Voz y voto en la expansión del proyecto',
            'Recuperación proyectada del 100% en el primer año'
        ]
    },
    {
        type: 'OPCIÓN B',
        name: 'Dueño de tu Glamping',
        price: '$100k - $250k',
        roi: '50% Utilidad x Unidad',
        highlight: false,
        pitch: 'Tu activo físico trabajando para ti los 365 días del año.',
        desc: 'Adquisición directa de una unidad glamping. El Grupo Empresarial Reyes la opera y tú recibes la utilidad líquida.',
        features: [
            '50% de la utilidad bruta de tu unidad (Sin gastos operativos)',
            'Título de propiedad sobre el activo móvil de lujo',
            'Gestión hotelera profesional 100% incluida',
            'Uso y goce personal preferente',
            'Valorización constante del activo'
        ]
    }
];

export default function OportunidadPage() {
    return (
        <div className="space-y-12 pb-20">
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
                        </div>

                        <div className="pt-8 border-t border-gris-oscuro/5">
                            <a 
                                href="https://wa.me/593963410409"
                                target="_blank"
                                className={`w-full py-5 rounded-2xl font-bold transition-all text-center block text-lg ${opt.highlight ? 'bg-naranja text-white shadow-xl hover:scale-[1.02]' : 'bg-verde-oscuro text-cremita hover:bg-opacity-90'}`}
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
                        href="/Images/Aroma_de_Montana_Inversion_ES.pdf" 
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
