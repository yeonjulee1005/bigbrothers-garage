<script setup lang="ts">

const links = [
  {
    label: '빅브라더스 보관현황',
    icon: 'i-maki-parking-garage',
    to: '/'
  }
]

</script>

<template>
  <div class="flex flex-wrap flex-row w-screen justify-between gap-2 p-4">
    <BGHorizontalNavigation
      :links="links"
      :ui="{ wrapper: 'w-fit', active: 'after:bg-rose-500 dark:after:bg-rose-400' }"
    />
    <AForecast />
  </div>
</template>
