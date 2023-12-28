// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "nuxt-directus",
  ],
  googleFonts: {
    display: "swap",
    useStylesheet: true,
    inject: true,
    download: true,
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      //"Open Sans": [300, 400, 500, 600, 700],
      //"Roboto Slab": [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  directus: {
    url: "https://directus.ozayozdemir.com/",
    devtools: false,
  },

  devtools: {
    enabled: false,
  },

  ssr: true,
});
