<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    buttonData: SerializeObject,
    buttonGrid?: string
  }>(),
  {
    buttonGrid: ''
  }
)

defineEmits([
  'click:display-button'
])

const buttonBackgroundColor = () => {
  if (!props.buttonData) { return '' }
  return props.buttonData.transportStatus.code === 'TSP005' ? 'bg-orange-800' : 'bg-indigo-900'
}

const buttonColor = () => {
  if (!props.buttonData) { return 'lime' }
  return props.buttonData.transportStatus.code === 'TSP005' ? 'orange' : 'indigo'
}

</script>

<template>
  <AButton
    :class="buttonGrid"
    :custom-class="buttonBackgroundColor()"
    :button-color="buttonColor()"
    button-text-class="text-zinc-200 text-xs break-all mx-1.5"
    :button-text="buttonData ? buttonData.car_model : '빈자리'"
    @click:button="() => $emit('click:display-button')"
  />
</template>

