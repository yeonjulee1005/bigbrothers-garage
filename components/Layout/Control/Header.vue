<script setup lang="ts">

const links = [
  {
    label: '주차현황/위치수정',
    icon: 'i-maki-car-rental',
    to: '/control'
  },
  {
    label: '차량등록',
    icon: 'i-maki-construction',
    to: '/control/registration'
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
