import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aroma-inversores.com';

    const routes = [
        '',
        '/hacienda',
        '/estructura',
        '/estrategia',
        '/modelo-negocio',
        '/oportunidad',
        '/producto',
        '/seguridad',
        '/cronograma',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));
}
