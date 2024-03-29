export default {

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Brent Nequin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type:"image/png",  href: '/icons8-quarter-rest-32.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/postcss8',
    '@nuxtjs/fontawesome',
    // 'vue-notion/nuxt',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/markdownit',
    // '@nuxt/content'
  ],

  // markdownit: {
  //   preset: 'default',
  //   linkify: true,
  //   breaks: true,
  //   use: [
  //     'markdown-it-prism',
  //   ]
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
    // proxyHeaders: false,
    // credentials: false,
    // proxy: true
  },

  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      // brands: true,
      // regular: true
    }
  },

  googleFonts: {
    display: "swap",
    families: {
      'M PLUS Rounded 1c': [400],
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.resolve.alias["vue$"] = "vue/dist/vue.esm.js"
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },

  publicRuntimeConfig: {
    NOTION_API_DATABASE_ID_DOCS: process.env.NOTION_API_DATABASE_ID_DOCS
  },

  privateRuntimeConfig: {
    NOTION_API_SECRET: process.env.NOTION_API_SECRET
  },

  storybook: {
    // Options
  }
  
}
