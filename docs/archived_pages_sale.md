# ARCHIVO DE PÁGINAS DE VENTA DE EMPRESA (Aroma de Montaña)

> **Nota de Archivo:** Este documento conserva el código completo y los textos de las páginas `/venta-empresa` y `/la-oferta` que estaban orientadas a la venta total de la empresa por USD 230.000. Fueron retiradas de la navegación pública para enfocar el sitio web en la presentación del concurso y el expediente del proyecto (S.A.S. B.I.C.).

---

## 1. PÁGINA: `/venta-empresa/page.tsx`

```tsx
"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getAssetUrl } from '@/lib/assets';


export default function DashboardHome() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="space-y-12">
      {/* Hero Section - Venta de Empresa */}
      <section className="relative rounded-[3rem] overflow-hidden bg-verde-oscuro p-12 md:p-20 text-cremita min-h-[600px] flex items-center shadow-2xl">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetUrl('/250k/exterior.jpg')}
            alt="Aroma de Montaña Exterior"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
        </div>

        <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 pointer-events-none select-none z-0">
          <Image src={getAssetUrl('/Logos/Recurso 33@4x.png')} alt="Pattern GER" fill className="object-contain p-20 rotate-12" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-naranja/10 border border-naranja/30 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-naranja animate-ping" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-naranja">Empresa en Venta — Desarrollo Activo</span>
            </div>

            <h1 className="text-5xl md:text-[5rem] font-florenza leading-[1.05] text-balance">
              Aroma de Montaña <br />
              <span className="text-naranja italic text-4xl md:text-[4rem]">Una empresa Agroturística en construcción en el sur de Ecuador. En venta.</span>
            </h1>

            <p className="text-lg md:text-xl text-cremita/80 leading-relaxed font-light max-w-4xl">
              23.5 hectáreas productivas en Paltas, Loja. Una oportunidad de inversión llave en mano con activos físicos verificados por avalúo bancario, marca registrada y viabilidad comercial probada en una ubicación privilegiada.
            </p>

            {/* Bajada con los puntos fuertes y atractivos para inversionistas */}
            <div className="border-l-4 border-naranja pl-6 space-y-3 max-w-3xl my-6">
              <p className="text-sm md:text-base text-cremita/90 font-medium">
                🏗️ <strong>Tierra, construcciones e infraestructura:</strong> Con un avance real de obra del 50%, listo para continuar y operar a corto plazo.
              </p>
              <p className="text-sm md:text-base text-cremita/90 font-medium">
                📜 <strong>Certeza jurídica y comercial:</strong> Empresa legalmente constituida, libre de gravámenes, con marca registrada y licencias ambientales vigentes.
              </p>
              <p className="text-sm md:text-base text-cremita/90 font-medium">
                📍 <strong>Ubicación estratégica inigualable:</strong> En la Reserva de Biosfera UNESCO "Bosques de Paz", a solo 40 minutos del aeropuerto de Catamayo y al filo de la carretera principal (sin accesos complejos por vías de segundo u tercer orden).
              </p>
              <p className="text-sm md:text-base text-cremita/90 font-medium">
                💧 <strong>Sostenibilidad e insumos hídricos:</strong> Reservorios y albarradas con casi 8,000 m³ de capacidad hídrica propia, ideales para el cultivo tecnificado de café de especialidad.
              </p>
              <p className="text-sm md:text-base text-cremita/90 font-medium">
                💼 <strong>Facilidades de adquisición:</strong> Financiamiento directo disponible. Ingresa con un 35% en efectivo y el saldo financiado directamente con el grupo empresarial.
              </p>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/la-oferta" className="btn-primary px-8 py-5 text-lg font-bold shadow-2xl hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-2">
                <span>Ver la oferta completa →</span>
              </Link>
              <Link href="/hacienda" className="bg-white/10 hover:bg-white/20 border border-white/20 text-cremita px-8 py-5 rounded-2xl transition-all font-bold text-lg backdrop-blur-md flex items-center justify-center">
                <span>Conocer el patrimonio</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 text-white/50">
              {[
                'Propiedad 100% en Venta',
                'Avalúo Bancario Certificado',
                'Infraestructura Ejecutada',
                'Marca Registrada Incluida'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest">
                  <svg className="w-4 h-4 text-naranja" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  {text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
```

---

## 2. PÁGINA: `/la-oferta/page.tsx`

```tsx
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import HeroPage from '@/components/dashboard/HeroPage';
import MetricCard from '@/components/dashboard/MetricCard';
import SectionHeader from '@/components/dashboard/SectionHeader';
import FactCard from '@/components/dashboard/FactCard';
import CalloutBox from '@/components/dashboard/CalloutBox';
import { getAssetUrl } from '@/lib/assets';

export default function OfertaPage() {
  return (
    <div className="space-y-12">
      <HeroPage
        badge="Venta Total de la Empresa"
        title="La Oferta de Adquisición"
        titleAccent="venta total de la empresa"
        description="Estructura de venta de Aroma de Montaña por USD 230.000. Una adquisición integral de activos físicos, propiedad intelectual y derechos comerciales."
        metrics={[
          { label: 'Precio de Venta', value: 'USD 230,000' },
          { label: 'Entrada Mínima (35%)', value: 'USD 80,500' },
          { label: 'Saldo Financiado', value: 'USD 149,500' },
          { label: 'Avalúo Bancario SBS', value: 'USD 152,473' },
        ]}
      />

      <CalloutBox title="Acerca de la Estructura de Venta">
        Esta es una venta de empresa completa, no una fragmentación en unidades individuales.
      </CalloutBox>
    </div>
  );
}
```
