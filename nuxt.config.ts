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
  modules: ["@primevue/nuxt-module", '@pinia/nuxt','nuxt-purgecss','nuxt-security', 'nuxt-swiper', '@nuxt/image', '@nuxtjs/seo'],
  purgecss: {
    safelist: {
        greedy: [/^nuxt-/, /^vue-/, /^p-/, /^swiper-/, /^swal2-/, /^dt-/, /^dataTables/, /^table/, /^sorting/, /^page-item/, /^page-link/, /^pagination/, /^paginate_button/, /^paging/, /^form-control/, /^form-select/, /^dtfc-fixed-/, /^col-/ ]
    }
 },
 security: {
  headers: {
      contentSecurityPolicy: {
          'script-src': [
              "'self'",
              "'unsafe-inline'",
              "https://*.google.com",
              "https://www.gstatic.com",
              "https://storage.googleapis.com",
              "https://*.paypal.com",
              "https://www.googletagmanager.com",
              "https://www.google-analytics.com",
              "https://www.pagespeed-mod.com",
              "https://*.sentry.io"
          ],
          'script-src-attr': [
              "'self'",
              "'strict-dynamic'"
          ],
          'worker-src': [
              "'self'",
              "blob:",
              "https://storage.googleapis.com"
          ],
          'img-src': [
              "'self'",
              "data:",
              "https://googleads.g.doubleclick.net",
              "https://www.google.com",
              "https://www.google.co.zw",
              "https://*.googleapis.com",
              "https://*.googleusercontent.com",
              "https://api.hakikasystems.co.zw",
              "https://back-uat.okshopeasy.com",
              "https://api.okshopeasy.com",
          ],
          'connect-src': [
              "'self'",
              "https://api.hakikasystems.co.zw",
              "https://api.okshopeasy.com",
              "https://back-uat.okshopeasy.com",
              "https://*.google.com",
              "https://www.googletagmanager.com",
              "https://www.google-analytics.com",
              "https://*.paypal.com",
              "https://*.sentry.io"
          ]
      },
      crossOriginEmbedderPolicy: 'unsafe-none',
      crossOriginOpenerPolicy: 'same-origin-allow-popups',
      xFrameOptions: 'SAMEORIGIN'
  },
  rateLimiter: false
},
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