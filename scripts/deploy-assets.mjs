import fs from 'fs/promises';
import path from 'path';
import 'dotenv/config';

const LOCAL_DIR = 'public/Images/optimized';
const STORAGE_ZONE = process.env.BUNNY_STORAGE_ZONE;
const API_KEY = process.env.BUNNY_STORAGE_API_KEY;
const HOST = process.env.BUNNY_STORAGE_HOST;
const BASE_PATH = 'aroma-assets'; // Folder approved by César

async function uploadFile(localPath, remotePath) {
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
        throw new Error(`Error subiendo ${remotePath}: ${response.statusText}`);
    }
}

async function walkAndUpload(dir, remotePrefix = '') {
    const items = await fs.readdir(dir);

    for (const item of items) {
        const localPath = path.join(dir, item);
        const stats = await fs.stat(localPath);
        const remotePath = path.join(BASE_PATH, remotePrefix, item).replace(/\\/g, '/');

        if (stats.isDirectory()) {
            await walkAndUpload(localPath, path.join(remotePrefix, item));
        } else {
            await uploadFile(localPath, remotePath);
        }
    }
}

async function deploy() {
    if (!API_KEY || !STORAGE_ZONE || !HOST) {
        console.error('❌ Faltan credenciales en el .env');
        return;
    }

    try {
        console.log('🏗️ Iniciando despliegue de activos a Bunny.net...');
        await walkAndUpload(LOCAL_DIR);
        console.log('\n✅ Despliegue completado con éxito.');
    } catch (error) {
        console.error('\n❌ Error durante el despliegue:', error.message);
    }
}

deploy();
