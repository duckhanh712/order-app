// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Smart Order',
      meta: [{ name: 'description', content: 'Smart Order' }],
    },
  },
  css: ['@/assets/scss/main.scss'],
  vue: {
    defineModel: true,
    propsDestructure: true,
  },
  devtools: { enabled: true },
})
