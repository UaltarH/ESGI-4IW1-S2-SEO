// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ['~/assets/main.css'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    configPath: '~/tailwind.config.ts',
  }

})