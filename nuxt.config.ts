// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
export default defineNuxtConfig({
  runtimeConfig: {
   
  },
  devtools: { enabled: true },
  compatibilityDate: "2024-07-04",
  css: ["primeflex/primeflex.css"],
  modules: ["@primevue/nuxt-module",'@pinia/nuxt','nuxt-swiper'],
  plugins: [
    { src: '~/plugins/tawk-messenger.client.js', mode: 'client' }
  ],
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    styleLang: 'css',
    // modules: ['navigation', 'pagination','SwiperAutoplay'], // all modules are imported by default
  },
  primevue: {
    /* Configuration */
    options: {
      theme: {
        preset: Aura,
      }
    }
  }
});
