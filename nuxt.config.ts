// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
      '@nuxtjs/tailwindcss',
      '@pinia/nuxt',
      '@pinia-plugin-persistedstate/nuxt',
      '@formkit/nuxt',
  ],
  // piniaPersistedstate: {
  //   cookieOptions: {
  //     sameSite: 'strict',
  //   },
  //   // storage: 'localStorage'
  // },
  
})
