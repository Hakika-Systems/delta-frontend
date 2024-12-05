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
  modules: ["@primevue/nuxt-module", '@pinia/nuxt','nuxt-purgecss', 'nuxt-swiper', '@nuxt/image', '@nuxtjs/seo'],
  purgecss: {
    safelist: {
        greedy: [/^nuxt-/, /^vue-/, /^p-/, /^swiper-/, /^swal2-/, /^dt-/, /^dataTables/, /^table/, /^sorting/, /^page-item/, /^page-link/, /^pagination/, /^paginate_button/, /^paging/, /^form-control/, /^form-select/, /^dtfc-fixed-/, /^col-/ ]
    }
 },
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