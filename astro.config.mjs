import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hansel-vlnt.github.io',
  vite: {
    // @tailwindcss/vite targets Vite 7 Plugin types while Astro 5 bundles Vite 6.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
