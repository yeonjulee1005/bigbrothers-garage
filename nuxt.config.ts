import packageJson from './package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'ko'
      },
      meta: [
        { property: 'Imagetoolbar', content: 'no' }
      ]
    }
  },
  extends: [
    '@nuxt/ui-pro'
  ],
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/devtools',
    '@nuxtjs/device',
    '@nuxtjs/stylelint-module',
    'nuxt-icon',
    'nuxt-time',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  runtimeConfig: {
    public: {
      serviceVersion: JSON.stringify(packageJson.version)
    }
  },
  css: [
    '~/assets/scss/style.scss'
  ],
  ui: {
    prefix: 'BG',
    icons:['maki']
  },
  components: [
    {
      path: '~/components',
      pathPrefix: true
    }
  ],
  imports: {
    dirs: [
      'composables/**',
      'stores/**'
    ]
  },
  pinia: {
    storesDirs: [
      './stores/**'
    ]
  },
  vite: {
    build: {
      sourcemap: true,
      cssMinify: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },
  stylelint: {
    lintOnStart: true
  },
  vueuse: {
    ssrHandlers: false
  },
  typescript: {
    shim: false
  }
})
