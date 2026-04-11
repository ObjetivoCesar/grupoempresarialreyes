import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const RAW_DIR = 'public/Images/raw';
const OPT_DIR = 'public/Images/optimized';
const REGISTRY_PATH = 'public/media-registry.json';

async function processImages() {
    try {
        await fs.mkdir(OPT_DIR, { recursive: true });
        const categories = await fs.readdir(RAW_DIR);
        const registry = {};

        for (const category of categories) {
            const rawCatDir = path.join(RAW_DIR, category);
            const optCatDir = path.join(OPT_DIR, category);
            
            const stats = await fs.stat(rawCatDir);
            if (!stats.isDirectory()) continue;

            console.log(`\n📂 Procesando categoría: ${category}`);
            await fs.mkdir(optCatDir, { recursive: true });
            
            const files = await fs.readdir(rawCatDir);
            registry[category] = [];

            for (const file of files) {
                if (!file.match(/\.(jpg|jpeg|png|webp|MP\.jpg)$/i)) continue;

                const inputPath = path.join(rawCatDir, file);
                const outputName = file.replace(/\.(jpg|jpeg|png|MP\.jpg)$/i, '.webp');
                const outputPath = path.join(optCatDir, outputName);

                console.log(`  📸 Optimizando: ${file} -> ${outputName}`);

                await sharp(inputPath)
                    .resize({ width: 1920, withoutEnlargement: true })
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                registry[category].push({
                    original: file,
                    optimized: outputName,
                    path: `/Images/optimized/${category}/${outputName}`,
                    category
                });
            }
        }

        await fs.writeFile(REGISTRY_PATH, JSON.stringify(registry, null, 2));
        console.log('\n✅ Proceso completado. Registro generado en public/media-registry.json');
    } catch (error) {
        console.error('❌ Error procesando imágenes:', error);
    }
}

processImages();
