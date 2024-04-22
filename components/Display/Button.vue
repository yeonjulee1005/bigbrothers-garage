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

  switch (props.buttonData.transportStatus.code) {
    case 'TPS002' :
    case 'TPS003' :
      return 'bg-sky-700'
    case 'TPS005' :
      return 'bg-red-900'
    case 'TPS006' :
      return 'bg-yellow-800'
    case 'TPS007' :
      return 'bg-violet-900'
    case 'TPS008' :
      return 'bg-gray-400'
    default:
      return 'bg-sky-400'
  }
}

const buttonColor = () => {
  if (!props.buttonData) { return 'gray' }
  return props.buttonData.garagePosition.code.includes('TP') ? 'sky' : 'red'
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

