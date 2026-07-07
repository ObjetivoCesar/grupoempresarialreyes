"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Enviar WhatsApp con la info
    const text = `Hola, mi nombre es ${formData.name}. Estoy interesado en la adquisición de la Hacienda/Empresa Aroma de Montaña. Mi correo es ${formData.email}. Mensaje: ${formData.message}`;
    const url = `https://wa.me/593963410409?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Header */}
      <section className="bg-verde-oscuro p-12 rounded-[3rem] text-cremita border-l-8 border-naranja shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-naranja/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-florenza mb-4">Contacto: <span className="text-naranja italic">Conversar directamente</span></h1>
          <p className="text-cremita/70 text-lg max-w-3xl font-light leading-relaxed">
            Inicie una conversación directa para resolver dudas, coordinar visitas técnicas al predio Sambinuma, o solicitar expedientes legales y contables.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Contact Channels */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
          <div className="bg-white p-8 rounded-3xl border border-marron-claro/10 shadow-sm space-y-4">
            <h3 className="text-2xl font-florenza text-verde-oscuro">Vía Directa</h3>
            <p className="text-sm text-gris-oscuro/70 leading-relaxed font-poppins">
              Le atenderemos de forma personalizada para coordinar cualquier propuesta o intercambio de información.
            </p>
            <div className="pt-4 space-y-4">
              <a
                href="https://wa.me/593963410409?text=Hola%2C%20estoy%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20venta%20de%20la%20empresa%20Aroma%20de%20Monta%C3%B1a."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 text-green-700 rounded-2xl font-bold transition-all text-sm"
              >
                <span className="text-2xl">💬</span>
                <div>
                  <p className="font-bold text-base leading-none">Chatear por WhatsApp</p>
                  <p className="text-[11px] font-normal opacity-70 font-poppins mt-1">Respuesta inmediata</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-cremita/50 border border-marron-claro/10 text-verde-oscuro rounded-2xl text-sm">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-bold text-base leading-none">+593 96 341 0409</p>
                  <p className="text-[11px] font-normal opacity-70 font-poppins mt-1">Llamadas corporativas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7 bg-white p-10 md:p-12 rounded-[3rem] border border-marron-claro/10 shadow-sm">
          <h3 className="text-3xl font-florenza text-verde-oscuro mb-8">Enviar un Mensaje</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gris-oscuro/60 font-poppins">Nombre Completo</label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl border border-marron-claro/20 focus:outline-none focus:ring-2 focus:ring-verde-oscuro bg-cremita/10 font-poppins text-sm"
                placeholder="Ej. Juan Pérez"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gris-oscuro/60 font-poppins">Correo Electrónico</label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl border border-marron-claro/20 focus:outline-none focus:ring-2 focus:ring-verde-oscuro bg-cremita/10 font-poppins text-sm"
                placeholder="Ej. juan@correo.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gris-oscuro/60 font-poppins">Mensaje o Propuesta</label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-4 rounded-2xl border border-marron-claro/20 focus:outline-none focus:ring-2 focus:ring-verde-oscuro bg-cremita/10 font-poppins text-sm"
                placeholder="Describa brevemente su consulta o propuesta..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-naranja hover:bg-naranja-oscuro text-white rounded-2xl font-bold tracking-wider text-base shadow-lg transition-all hover:scale-[1.01]"
            >
              Enviar a WhatsApp y Abrir Canal →
            </button>

            {submitted && (
              <p className="text-center text-xs text-green-600 font-bold font-poppins pt-2">
                ¡Gracias! Redirigiendo a WhatsApp...
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
