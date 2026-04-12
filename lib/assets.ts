/**
 * Utility to manage asset URLs.
 * Maps any local path starting with / to the Bunny.net CDN.
 */

const USE_CDN = true;
const CDN_BASE_URL = 'https://cesarweb.b-cdn.net/aroma-assets'; // Prefijo único aprobado

export function getAssetUrl(localPath: string) {
    if (!localPath) return '';
    
    if (USE_CDN && localPath.startsWith('/')) {
        // Limpiamos el path para evitar dobles slashes
        const cleanPath = localPath.startsWith('/') ? localPath.slice(1) : localPath;
        
        // Si el path ya incluye /optimized/, lo simplificamos si es necesario 
        // o lo dejamos fluir según la estructura del CDN.
        // La estructura en Bunny ahora es idéntica a /public/
        return `${CDN_BASE_URL}/${cleanPath}`;
    }
    
    return localPath;
}
