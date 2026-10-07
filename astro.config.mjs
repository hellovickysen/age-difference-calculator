// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
  site: 'https://agedifferencecalculator.xyz',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    resolve: {
      alias: {
        picomatch: fileURLToPath(new URL('./src/lib/picomatch-compat.mjs', import.meta.url)),
      },
    },
  },
});
