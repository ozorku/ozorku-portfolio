export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "Moses",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "author",
        content: "Moses"
      },
      {
        hid: "description",
        name: "description",
        content: "Moses is a Mobile App Developer"
      },
      // facebook
      {
        property: "og:site_name",
        content: "Moses"
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ozorku.dev" },

      {
        property: "og:title",
        content: "Mobile App Developer - Moses"
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
  css: ["ant-design-vue/dist/antd.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/antd-ui"],
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
