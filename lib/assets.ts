/**
 * Utility to manage asset URLs.
 * In development, we use local paths (/Images/optimized/...)
 * In production, we can switch to Bunny.net CDN.
 */

const USE_CDN = true; // Activado tras confirmar subida a Bunny.net
const CDN_BASE_URL = 'https://cesarweb.b-cdn.net/aroma-assets'; // Ruta final aprobada

export function getAssetUrl(localPath: string) {
    if (USE_CDN) {
        // Redirigir imágenes optimizadas por categoría
        if (localPath.includes('/Images/optimized/')) {
            const cleanPath = localPath.replace('/Images/optimized/', '');
            return `${CDN_BASE_URL}/${cleanPath}`;
        }
        
        // Redirigir imágenes estáticas generales (Hero, diagramas)
        if (localPath.startsWith('/Images/')) {
            const fileName = localPath.replace('/Images/', '');
            return `${CDN_BASE_URL}/Static/${fileName}`;
        }
    }
    return localPath;
}
