<script setup lang="ts">

const links = [
  {
    label: '주차현황/위치수정',
    icon: 'i-maki-car-rental',
    to: '/control'
  },
  {
    label: '차량 리스트',
    icon: 'i-maki-library',
    to: '/control/carList'
  },
  {
    label: '차량등록',
    icon: 'i-maki-construction',
    to: '/control/registration'
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
