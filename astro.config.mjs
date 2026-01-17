import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless'; // Asegúrate de que diga /serverless

export default defineConfig({
  output: 'server', // Esto DEBE estar aquí
  integrations: [tailwind()],
  adapter: vercel(),
});