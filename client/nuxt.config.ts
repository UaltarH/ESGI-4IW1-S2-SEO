// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/sitemap", "@nuxtjs/google-fonts", 'nuxt-jsonld'],
  css: ['~/assets/main.css'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    configPath: '~/tailwind.config.ts',
  },
  site: {
    url: 'https://terrainconfus.fr',
  },
  googleFonts: {
    families: {
      'Poppins': true,
    }
  }
})