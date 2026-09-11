// @ts-check
import { defineConfig } from 'astro/config';

// Detección automática para GitHub Pages en GitHub Actions
const ghRepo = process.env.GITHUB_REPOSITORY; // formato: 'usuario/nombre-repo'
const ghOwner = ghRepo ? ghRepo.split('/')[0] : '';
const ghProject = ghRepo ? ghRepo.split('/')[1] : '';

const site = process.env.ASTRO_SITE || (ghOwner ? `https://${ghOwner}.github.io` : 'https://jorale0505.github.io');
const base = process.env.BASE_PATH || (ghProject && !ghProject.endsWith('.github.io') ? `/${ghProject}/` : '/angela-ramirez-web/');

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site,
  base,
  build: {
    format: 'directory'
  }
});
