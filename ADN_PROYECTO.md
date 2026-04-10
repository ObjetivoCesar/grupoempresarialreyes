# ADN del Proyecto: Aroma de Montaña - Portal de Inversores

Este documento sirve como la **Memoria Central** del portal. Debe ser consultado por cualquier IA o desarrollador antes de realizar cambios estructurales o financieros.

## 1. Misión y Modelo de Negocio
El portal tiene como objetivo atraer y gestionar inversores bajo el **Modelo de Sociedad 50/50**.

- **Socio Estratégico:** Inversión de $230,000 para el escalamiento total. Participación del 50% en todo el ecosistema.
- **Dueño de Glamping:** Inversión desde $100,000 por una unidad física. Participación del 50% de la utilidad de esa unidad.
- **7 Motores de Ingreso:** 1) Glampings, 2) Cafetería, 3) Retiros B2B, 4) Turismo Astronómico, 5) Wellness Hub, 6) Pasadía/Eventos, 7) Venta de Activos/Marca.

## 2. Pila Tecnológica (Tech Stack)
- **Framework:** Next.js 16.1.5 (Directorio `app`).
- **Estilos:** Tailwind CSS v4 (configurado en `globals.css`).
- **Animaciones:** Framer Motion 12.
- **Navegación:** Sidebar fijo en `layout.tsx` con componentes en `components/dashboard/Sidebar.tsx`.

## 3. Estructura de Páginas y Componentes Clave
- `/`: Dashboard principal con métricas de impacto rápidas.
- `/memorandum`: Visor de documentos basado en imágenes optimizadas en `/public/memorandum/`.
- `/estrategia`: Gráfico de proyecciones ROI dinámico. **Nota:** Los datos residen en la variable `investmentData` dentro del archivo `page.tsx`.
- `/oportunidad`: Tabla comparativa de los tres modelos de inversión.
- `/estructura`: Detalle técnico de las 3 unidades de negocio (Hacienda, Operations, Inversiones).
- `/gobernanza`: Mapa jerárquico de la Asamblea de Socios.

## 4. Guía de Actualización Financiera
Cuando se requiera actualizar proyecciones basadas en nuevas guías financieras:
1. Localizar `app/estrategia/page.tsx`.
2. Modificar el objeto `investmentData`.
3. Asegurar que las cifras sean **Acumuladas** para reflejar el retorno total del socio ($261k en Año 1).
4. Actualizar la escala global `globalMaxVal` si los montos superan $1M.

## 5. Activos Críticos
- **Imágenes Memorándum:** `public/memorandum/page-[n].jpg`.
- **Renders de Producto:** Carpetas en `/public/250k/` y `/public/Images/`.
- **Logos:** `/public/Logos/` (Usar versiones `brightness-0 invert` para fondos oscuros).

---
**Última Actualización:** Abril 2026 - Reingeniería Sociedad 50/50 Completada.
