<script setup lang="ts">

withDefaults(
  defineProps<{
    title?: string,
    titleClass?: string
  }>(),
  {
    title: '',
    titleClass: 'p-4'
  }
)

</script>

<template>
  <div :class="titleClass">
    {{ title }}
  </div>
</template>
