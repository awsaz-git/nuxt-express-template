// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/image',
    '@nuxt/fonts',
    '@pinia/nuxt',
    '@nuxtjs/color-mode'
  ]
})