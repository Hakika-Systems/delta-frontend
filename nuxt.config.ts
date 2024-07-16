// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-04",
  css: ["primeflex/primeflex.css"],
  modules: ["@primevue/nuxt-module",'@pinia/nuxt'],
  primevue: {
    /* Configuration */
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
});
