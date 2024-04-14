<script setup lang="ts">

const links = [
  {
    label: '게러지 현황보기',
    icon: 'i-maki-historic',
    to: '/control'
  },
  {
    label: '게러지 위치수정',
    icon: 'i-maki-car-rental',
    to: '/control/edit'
  },
  {
    label: '게러지 리스트등록',
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
