<script setup lang="ts">

const links = [
  {
    label: '게러지 현황',
    icon: 'i-maki-parking-garage',
    to: '/'
  },
  {
    label: '보관 리스트',
    icon: 'i-maki-library',
    to: '/carList'
  }
]

</script>

<template>
  <div class="flex flex-row w-screen justify-between p-4">
    <BGHorizontalNavigation
      :links="links"
      :ui="{ active: 'after:bg-rose-500 dark:after:bg-rose-400' }"
    />
  </div>
</template>
