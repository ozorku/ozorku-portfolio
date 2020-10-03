export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "Ozorku",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "author",
        content: "Adavize Ozorku"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Adavize Ozorku is a Software Engineer currently based in Lagos, Nigeria"
      },
      // facebook
      {
        property: "og:site_name",
        content: "Adavize Ozorku"
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ozorku.dev" },
      {
        property: "og:image",
        content: "images/adavize-ozorku-developer-card.png"
      },
      {
        property: "og:description",
        content: "Software Engineer based in Lagos, Nigeria"
      },
      {
        property: "og:title",
        content: "Software Engineer based in Lagos, Nigeria - Adavize Ozorku"
      },
      // twitter
      { name: "twitter:domain", content: "ozorku.dev" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@ozorku" },
      { name: "twitter:creator", content: "@ozorku" },
      { name: "twitter:url", content: "https://ozorku.dev" },
      {
        name: "twitter:title",
        content: "Adavize Ozorku - Software Engineer based in Lagos"
      },
      {
        name: "twitter:description",
        content: "Software Engineer based in Lagos, Nigeria."
      },
      {
        name: "twitter:image",
        content: "https://ozorku.com/images/adavize-ozorku-developer-card.png"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }]
  },

  server: {
    port: 8000, // default: 3000
    host: "0.0.0.0" // default: localhost
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["element-ui/lib/theme-chalk/index.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/element-ui"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
