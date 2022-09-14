import i18n from './config/i18n'
const axios = require('@nuxtjs/axios')
require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  extend(config, ctx) {
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: "pre",
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        exclude: /(node_modules)/
      });
    }
  },
  head: {
    title: 'Ing. Michal Šmiga - realitní makléř',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description',
        name: 'description',
        content: 'Certifikovaný realitní makléř spadající pod největší realitní kancelář na světě Keller Williams. Vaší nemovitost umím prodat/pronajmout rychle a za maximální cenu.' },
      { name: 'format-detection', content: '725 747 519' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'wwww.msmiga.cz'},
      { hid: 'og:title', name: 'og:title', content: 'Ing. Michal Šmiga - realitní makléř'},
      { hid: 'og:type', name: 'og:type', content: 'personal portfolio'},
      { hid: 'keywords', name: 'keywords', content: 'Ing Michal Smiga, realitni makler, prodej bytu, pronajem bytu, tepelne hospodarstvi, sprava nemovitosti, marketing, financovani, pravni servis' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap'}
    ]
  },

  env: {
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID
  },

  generate: {
    fallback: '404.html',
    routes: function () {
      axios.get('https://api.storybolok.com/v1/cdn/stories?version=published&token=CLgiCKTz3143Rpqafb89Wgtt&cv=' + Math.floor(Date.now() / 1e3))
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/vue-cookie-law.js', ssr: false },
    {src: '~/plugins/vuelidate.js', ssr: false},
    { src: "~/plugins/aos", mode: "client" },
  ],
  purgeCSS: {
    whitelist: ['aos-init', 'aos-animate', 'data-aos-delay', 'data-aos-duration', 'fade-up', 'zoom-in'],
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_except_default',
        vueI18nLoader: true,
        defaultLocale: 'cz',
        locales: [
          {
            code: 'cz',
            name: 'Czech'
          },
          {
            code: 'sk',
            name: 'Slovak'
          },
          {
            code: 'en',
            name: 'English'
          },
        ],
        vueI18n: i18n
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    ['storyblok-nuxt', {accessToken: process.env.NODE_ENV === 'production' ? 'IKp18IHewACh8EVGXIie2wtt' : 'BupKvuztqQ5QBISuIn0bkAtt', cacheProvider: 'memory'}],
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  }
}


