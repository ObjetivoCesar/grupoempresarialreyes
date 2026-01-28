# 🏔️ Aroma de Montaña - Plataforma de Inversión

> **Hub del Inversor** para el proyecto inmobiliario y turístico Hacienda Aroma de Montaña en Loja, Ecuador.

## 📋 Resumen Ejecutivo

Plataforma web premium desarrollada en **Next.js 16** con **Tailwind CSS 4** que permite a inversores del Grupo Empresarial Reyes visualizar métricas financieras, proyecciones de ROI, estructura de gobernanza y seguimiento de obra en tiempo real.

### Características Principales
- ✅ **Dashboard Interactivo** con métricas clave (ROI 33.9%, Ocupación 25%, $240K ejecutados)
- ✅ **Proyecciones Financieras Dinámicas** para 3 modelos de inversión ($30k, $100k, $250k)
- ✅ **Tabla Comparativa** de Certificados de Participación
- ✅ **Internacionalización** (6 idiomas: ES, EN, IT, FR, DE, ZH)
- ✅ **Validaciones Reales** (Social Proof con hover effects)
- ✅ **Scroll-to-Top** automático en cambios de ruta
- ✅ **SEO Optimizado** con meta tags y Open Graph

---

## 🛠️ Stack Tecnológico

| Categoría | Tecnología | Versión |
|-----------|-----------|---------|
| **Framework** | Next.js | 16.1.5 |
| **Styling** | Tailwind CSS | 4.0 |
| **Animaciones** | Framer Motion | Latest |
| **Carruseles** | Swiper | Latest |
| **Fuentes** | Google Fonts | Poppins, Playfair Display |
| **Traducción** | GTranslate | CDN Widget |
| **Deployment** | Vercel | Production |

---

## 📁 Estructura del Proyecto

```
aroma-inversores/
├── app/
│   ├── layout.tsx              # Root layout con metadata SEO
│   ├── page.tsx                # Dashboard principal
│   ├── estrategia/page.tsx     # Proyecciones financieras
│   ├── producto/page.tsx       # Modelos + Tabla comparativa
│   ├── estructura/page.tsx     # Unidades de negocio
│   ├── gobernanza/page.tsx     # Organigrama + Pilares
│   ├── seguridad/page.tsx      # Blindaje fiduciario
│   ├── cronograma/page.tsx     # Seguimiento de obra
│   ├── hacienda/page.tsx       # Ubicación + Mapa
│   └── globals.css             # Estilos globales + Fuentes
├── components/
│   ├── dashboard/
│   │   └── Sidebar.tsx         # Navegación lateral fija
│   ├── layout/
│   │   └── WhatsAppFloat.tsx   # Botón flotante de contacto
│   └── utils/
│       └── ScrollToTop.tsx     # Auto-scroll en cambios de ruta
├── public/
│   ├── favicon.ico             # Café.ico oficial
│   ├── Images/                 # Activos visuales
│   ├── Logos/                  # Branding (Café.png)
│   ├── 30k/, 100k/, 250k/      # Renders por modelo
│   └── Cafetería/              # Assets de cafetería
└── README.md                   # Este archivo
```

---

## 🎨 Sistema de Diseño

### Paleta de Colores
```css
--color-verde-oscuro: #6C7654;  /* Principal */
--color-naranja: #FCA259;       /* Acento */
--color-marron-claro: #9D8268;  /* Secundario */
--color-cafe-acento: #43281C;   /* Contraste */
--color-cremita: #EAE7DC;       /* Fondo */
--color-gris-oscuro: #333333;   /* Texto */
```

### Tipografía
- **Títulos**: Playfair Display (serif elegante, reemplazo de Florenza)
- **Cuerpo**: Poppins (sans-serif moderna, pesos 300-800)

### Componentes Clave
- **Glassmorphism**: `backdrop-blur-md` + `bg-white/40`
- **Hover Effects**: Escala de íconos, cambio de fondo a verde oscuro
- **Animaciones**: Framer Motion para transiciones suaves

---

## 💰 Modelos de Inversión

| Modelo | Inversión | ROI Anual | Plazo | Payback | Uso Anual | Capacidad |
|--------|-----------|-----------|-------|---------|-----------|-----------|
| **Básico** | $30,000 | 35.4% | 5 años | 2.8 años | No aplica | 6 personas |
| **Preferente** | $100,000 | 14.72% | Perpetuo | 6.8 años | 10 días | 6 personas |
| **Residencia 360** | $250,000 | 8.1% | Perpetuo | 12.3 años | 60 días | 12 personas |

### Proyecciones Financieras (60 meses)
- **Modelo $30k**: $62,450 ganancia total
- **Modelo $100k**: Proyección ajustada a escala
- **Modelo $250k**: $27,000 en 4 meses (Y1), corregido según comisiones reales

---

## 🔧 Configuración y Desarrollo

### Variables de Entorno
```env
NEXT_PUBLIC_SITE_URL=https://aroma-inversores.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+593963410409
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Comandos Principales
```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start
```

### Deployment
- **Plataforma**: Vercel
- **Repositorio**: [https://github.com/ObjetivoCesar/grupoempresarialreyes.git](https://github.com/ObjetivoCesar/grupoempresarialreyes.git)
- **Branch**: `main`

---

## 🐛 Problemas Resueltos (Historial)

### Fase 1: Errores de Fuentes (404)
**Problema**: Fuentes locales Poppins y Florenza no existían en `/public/Fonts/`  
**Solución**: Migración a Google Fonts con imports en `globals.css`

### Fase 2: Error de Hidratación de React
**Problema**: Scripts de GTranslate en `<head>` causaban error #418  
**Solución**: Movidos al `<body>` con estrategia `afterInteractive`

### Fase 3: Favicon No Actualizado
**Problema**: `app/favicon.ico` por defecto sobreescribía el oficial  
**Solución**: Eliminado el default, copiado `Café.ico` a `public/` y `app/`

### Fase 4: Proyecciones Incorrectas ($250k)
**Problema**: Modelo mostraba $62k en 4 meses (irreal)  
**Solución**: Ajustado a $27k según cálculo real (70% neto post-comisiones)

---

## 📊 Métricas del Dashboard

### Cards Principales
1. **ROI Promedio**: 33.9% (crecimiento progresivo en 5 años)
2. **Ocupación Promedio**: 25% (meta de equilibrio operacional)
3. **Inversión Inicial**: $30,000 (destacado visualmente)
4. **Ganancia Total**: $62,450 (modelo $30k a 60 meses)

### Validaciones Reales (6 Cards Compactas)
- 🏗️ $240,000 Ejecutados
- 📜 23.5 Hectáreas Escrituradas
- 🌿 Licencia MAATE Aprobada
- 🛡️ Marca SENADI (10 años)
- ☕ Alianza Taza Dorada
- 🏛️ Fideicomiso Mercantil

---

## 🌍 Internacionalización

### Idiomas Soportados
- 🇪🇸 Español (default)
- 🇺🇸 Inglés
- 🇮🇹 Italiano
- 🇫🇷 Francés
- 🇩🇪 Alemán
- 🇨🇳 Chino

### Implementación
- **Widget**: GTranslate CDN (float.js)
- **Detección**: Automática según navegador
- **Selector**: Flotante en `.gtranslate_wrapper`

---

## 🎯 Próximos Pasos (Backlog)

- [ ] Integrar Google Analytics con `NEXT_PUBLIC_GA_ID`
- [ ] Añadir autenticación para inversores (opcional)
- [ ] Dashboard de métricas en tiempo real (API)
- [ ] Sistema de notificaciones por email
- [ ] Panel de administración para actualizar cronograma
- [ ] Integración con CRM para leads

---

## 📞 Contacto y Soporte

- **WhatsApp**: +593 96 341 0409
- **Email**: contacto@aromademontana.com
- **GitHub**: [ObjetivoCesar/grupoempresarialreyes](https://github.com/ObjetivoCesar/grupoempresarialreyes)

---

## 📝 Notas Técnicas Importantes

### Scroll-to-Top
Implementado en `components/utils/ScrollToTop.tsx` como Client Component que escucha cambios en `usePathname()`.

### GTranslate
Scripts cargados con `next/script` y estrategia `afterInteractive` para evitar errores de hidratación. El wrapper `.gtranslate_wrapper` debe estar en el DOM antes de que el script se ejecute.

### Favicon
Next.js prioriza `app/favicon.ico` sobre `public/favicon.ico`. Ambos deben tener el mismo archivo para evitar inconsistencias.

### Fuentes
Google Fonts se importan **antes** de Tailwind en `globals.css` para evitar warnings de CSS. Playfair Display se mapea a la clase `.font-florenza` para mantener compatibilidad.

---

**Última actualización**: 27 de enero de 2026  
**Versión**: 1.0.0 (Production Ready)
