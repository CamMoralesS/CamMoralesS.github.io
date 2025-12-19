// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), mdx()],

  image: {
    service: { entrypoint: 'astro/assets/services/noop' }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});