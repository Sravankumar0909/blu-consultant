// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE || 'http://www.bluconsultantservices.in',
  base: process.env.BASE || (process.env.CI ? '/blu-consultant' : '/'),
  integrations: [tailwind(), sitemap()],
  output: 'static',
});
