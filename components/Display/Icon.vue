<script setup lang="ts">

const { width } = useWindowSize()

withDefaults(
  defineProps<{
    gridClass?: string,
    displayIconName?: string,
    displayIconSize?: number
  }>(),
  {
    gridClass: '',
    displayIconName: 'maki:racetrack-cycling',
    displayIconSize: 60
  }
)

</script>

<template>
  <div
    class="flex justify-center items-center"
    :class="gridClass"
  >
    <Icon
      class="p-1"
      :class="width < 500 ? 'border rounded-md' : 'border-2 rounded-lg'"
      :name="displayIconName"
      :width="displayIconSize"
      :height="displayIconSize"
    />
  </div>
</template>
