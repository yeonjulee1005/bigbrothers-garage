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
    '@nuxtjs/supabase',
    'nuxt-icon',
    'nuxt-time',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'dayjs-nuxt'
  ],
  runtimeConfig: {
    public: {
      serviceVersion: JSON.stringify(packageJson.version),
      dataPortalApiKey: process.env.DATA_PORTAL_API_KEY
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
  supabase: {
    redirect: false,
    // redirectOptions: {
    //   login: '/login',
    //   callback: '/confirm',
    //   exclude: [
    //     '/',
    //     '/tech',
    //     '/tech/*',
    //     '/blog',
    //     '/blog/*',
    //     '/projects',
    //     '/projects/*',
    //     '/archives',
    //     '/archives/*'
    //   ]
    // },
    clientOptions: {
      auth: {
        flowType: 'pkce',
        detectSessionInUrl: true,
        persistSession: true,
        autoRefreshToken: true
      }
    }
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
