// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
export default defineNuxtConfig({
  site: {
    url: 'https://okshopeasy.com/',
    name: 'OK ShopEasy',
    description: 'Number One Online Store in Zimbabwe',
    defaultLocale: 'en',
    redirectToCanonicalSiteUrl: true
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  devtools: { enabled: true },
  compatibilityDate: "2024-07-04",
  css: ["primeflex/primeflex.css"],
  modules: ["@primevue/nuxt-module", '@pinia/nuxt', 'nuxt-swiper', '@nuxt/image', '@nuxtjs/seo'],


  plugins: [
    { src: '~/plugins/tawk-messenger.client.js', mode: 'client' }
  ],
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern'
            }
        }
    }
},
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