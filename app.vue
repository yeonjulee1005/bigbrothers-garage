<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue'

const { meta, fullPath } = useRoute()

if (import.meta.server) {
  useHead({
    title: (meta.title as string) ?? '빅브라더스 게러지',
    meta: () => [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
      { name: 'author', content: 'Dewdew' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'keywords', content: '빅브라더스게러지,bigbrothers' },
      // { name: 'naver-site-verification', content: 'c404ea94563dae0ee16a595e8f5edb659f1792f5' },
      { name: 'description', content: (meta.description as string) ?? '빅브라더스 게러지 현황' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://monitors.dewdew.world' },
      { property: 'og:image', content: '/bigbro_garage.webp', key: 'og:image' },
      { property: 'og:image:width', content: '410' },
      { property: 'og:image:height', content: '200' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:title', content: (meta.title as string) ?? '빅브라더스 게러지' },
      { property: 'og:description', content: (meta.description as string) ?? '빅브라더스 게러지 현황' }
    ],
    link: [
      { rel: 'canonical', href: fullPath },
      { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }
    ]
  })
}

</script>

<template>
  <div>
    <NuxtLayout>
      <div>
        <NuxtPage />
        <BGNotifications />
      </div>
    </NuxtLayout>
    <SpeedInsights />
  </div>
</template>
