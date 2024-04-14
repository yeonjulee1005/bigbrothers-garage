<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()
</script>

<template>
  <div class="w-full h-screen flex flex-col items-center justify-center gap-6">
    <BGPageHero
      :title="error.statusCode.toString()"
      :description="error.message"
      align="center"
      :ui="{ description: 'text-7xl'}"
    />
    <p class="text-lg text-sky700 dark:text-zinc-300">
      오류임
    </p>
    <AButton
      :button-text="'Main'"
      use-leading
      button-padding
      icon-name="line-md:home-simple-filled"
      button-text-class="text-xl"
      @click:button="navigateTo('/')"
    />
  </div>
</template>
