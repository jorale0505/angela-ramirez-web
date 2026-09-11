// @ts-check
import { defineConfig } from 'astro/config';

// Dominio propio oficial en producción
const site = process.env.ASTRO_SITE || 'https://angelaramirezcontadora.com';
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site,
  base,
  build: {
    format: 'directory'
  }
});
