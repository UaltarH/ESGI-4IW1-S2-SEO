// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/sitemap", "@nuxtjs/google-fonts"],
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
      'Poppins': '200..700',
    }
  }
})