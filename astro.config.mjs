// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. Le declaramos a Astro la URL oficial del host (Cloudflare)
  site: 'https://sanjoseve.com.ar', 

  vite: {
    plugins: [tailwindcss()]
  }
});