import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import particles from 'astro-particles'  // ← cambio aquí

export default defineConfig({
  integrations: [react(), tailwind(), sitemap(), particles()],
  site: 'https://fabrica-envases-flexibles.netlify.app',
  output: 'static',
})
