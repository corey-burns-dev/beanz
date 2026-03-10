// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://beanz.coffee',

  image: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});