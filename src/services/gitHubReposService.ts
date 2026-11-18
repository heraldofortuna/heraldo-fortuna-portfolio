import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';

const CACHE_TTL = 1000 * 60 * 60 * 2;

async function gitHubReposService(username: string): Promise<any> {
  // Asegurar que la ruta de cache sea correcta
  const cacheDir = path.join(process.cwd(), '.cache');
  const cachePath = path.join(cacheDir, `github-${username}.json`);
  
  // Crear directorio .cache si no existe
  if (!existsSync(cacheDir)) {
    mkdirSync(cacheDir, { recursive: true }); // recursive crea todos los directorios necesarios
  }

  // Verificar cache
  if (existsSync(cachePath)) {
    try {
      const { timestamp, data } = JSON.parse(readFileSync(cachePath, 'utf-8'));
      if (Date.now() - timestamp < CACHE_TTL) {
        return data;
      }
    } catch (err) {
      console.error('Error leyendo cache, procediendo con nueva petición:', err);
    }
  }

  // Hacer nueva petición
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await response.json();

  if (!Array.isArray(data)) {
    if (existsSync(cachePath)) {
      try {
        const cached = JSON.parse(readFileSync(cachePath, 'utf-8'));
        if (Array.isArray(cached.data)) {
          console.warn('GitHub API no devolvió repos; usando caché anterior.');
          return cached.data;
        }
      } catch {
        // ignore
      }
    }
    console.warn('GitHub API no devolvió repos; se usará lista vacía.');
    return [];
  }

  // Guardar en cache
  try {
    writeFileSync(cachePath, JSON.stringify({
      timestamp: Date.now(),
      data
    }), 'utf-8');
  } catch (err) {
    console.error('Error escribiendo cache:', err);
  }

  return data;
}

export default gitHubReposService;