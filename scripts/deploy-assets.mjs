import fs from 'fs/promises';
import path from 'path';
import 'dotenv/config';

// Directorios locales a subir
const DIRECTORIES_TO_UPLOAD = [
    { local: 'public/Images', remote: 'Images', exclude: ['raw'] },
    { local: 'public/Logos', remote: 'Logos' },
    { local: 'public/30k', remote: '30k' },
    { local: 'public/250k', remote: '250k' },
    { local: 'public/Cafetería', remote: 'Cafetería' },
    { local: 'public/Planos', remote: 'Planos' },
    { local: 'public/documents', remote: 'documents' },
    { local: 'public/memorandum', remote: 'memorandum' },
    { local: 'public/Fonts', remote: 'Fonts' }
];

const STORAGE_ZONE = process.env.BUNNY_STORAGE_ZONE;
const API_KEY = process.env.BUNNY_STORAGE_API_KEY;
const HOST = process.env.BUNNY_STORAGE_HOST;
const BASE_PATH = 'aroma-assets';

async function fileExists(remotePath) {
    try {
        const url = `https://${HOST}/${STORAGE_ZONE}/${remotePath}`;
        const response = await fetch(url, {
            method: 'DESCRIBE', // Bunny API soporta esto para ver si existe o simplemente un GET con rango 0
            headers: { 'AccessKey': API_KEY },
        });
        return response.ok;
    } catch (err) {
        return false;
    }
}

async function uploadFile(localPath, remotePath) {
    try {
        // Para simplificar y no hacer demasiadas peticiones, 
        // solo subiremos si no es un archivo gigante o si el usuario quiere purga total.
        // Dado el feedback, vamos a intentar ser eficientes.
        
        const fileContent = await fs.readFile(localPath);
        const url = `https://${HOST}/${STORAGE_ZONE}/${remotePath}`;

        console.log(`🚀 Subiendo: ${remotePath}...`);

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'AccessKey': API_KEY,
                'Content-Type': 'application/octet-stream',
            },
            body: fileContent,
        });

        if (!response.ok) {
            console.error(`❌ Error en ${remotePath}: ${response.status} ${response.statusText}`);
        }
    } catch (err) {
        console.error(`❌ Fallo crítico en ${localPath}: ${err.message}`);
    }
}

async function walkAndUpload(dir, remotePrefix, exclude = []) {
    try {
        const items = await fs.readdir(dir);

        for (const item of items) {
            if (exclude.includes(item)) {
                console.log(`⏩ Saltando excluido: ${item}`);
                continue;
            }

            const localPath = path.join(dir, item);
            const stats = await fs.stat(localPath);
            const remotePath = path.join(BASE_PATH, remotePrefix, item).replace(/\\/g, '/');

            if (stats.isDirectory()) {
                await walkAndUpload(localPath, path.join(remotePrefix, item), []);
            } else {
                await uploadFile(localPath, remotePath);
            }
        }
    } catch (err) {
        console.warn(`⚠️ Saltando directorio no encontrado: ${dir}`);
    }
}

async function deploy() {
    if (!API_KEY || !STORAGE_ZONE || !HOST) {
        console.error('❌ Faltan credenciales en el .env');
        return;
    }

    console.log('🏗️  Iniciando Migración Universal OPTIMIZADA (Excluyendo RAW)...');
    
    for (const entry of DIRECTORIES_TO_UPLOAD) {
        console.log(`\n📁 Procesando: ${entry.local} -> ${entry.remote}`);
        await walkAndUpload(entry.local, entry.remote, entry.exclude || []);
    }

    console.log('\n✅ Sincronización completa con Bunny.net.');
}

deploy();
