<script setup lang="ts">

const { width } = useWindowSize()

const props =  defineProps<{
  keepingData: SerializeObject[],
  transportationData: SerializeObject[],
}>()

const emits = defineEmits([
  'click:position'
])

const computedIconSize = computed(() => {
  return width.value < 500 ? 40 : 60
})

const clickPositionButton = (buttonText: string, buttonData: SerializeObject) => {
  emits('click:position', buttonText, buttonData)
}

const filtteredData = (code: string) => {
  return code.includes('TP')
    ? selectTransportaionData(code)
    : selectKeepingData(code)
}

const selectKeepingData = (code: string) => {
  if (!props.keepingData) { return undefined }

  return props.keepingData.filter((item: SerializeObject) => item.garagePosition.code === code)[0] ?? props.transportationData.filter((item: SerializeObject) => item.garagePosition.code === code)[0] ?? undefined
}

const selectTransportaionData = (code: string) => {
  if (!props.transportationData) { return undefined }

  return props.transportationData.filter((item: SerializeObject) => item.garagePosition.code === code)[0] ?? props.keepingData.filter((item: SerializeObject) => item.garagePosition.code === code)[0] ?? undefined
}

</script>

<template>
  <div class="grid grid-rows-13 grid-flow-col grid-cols-2 gap-2">
    <DisplayButton
      :button-data="filtteredData('TP046')"
      button-grid="row-span-1 col-start-1 flex justify-center items-center p-1"
      @click:display-button="() => clickPositionButton('TP046', filtteredData('TP046'))"
    />
    <DisplayButton
      :button-data="filtteredData('TP047')"
      button-grid="row-span-1 col-start-1 flex justify-center items-center p-1"
      @click:display-button="() => clickPositionButton('TP047', filtteredData('TP047'))"
    />
    <DisplayButton
      :button-data="filtteredData('TP048')"
      button-grid="row-span-1 col-start-1 flex justify-center items-center p-1"
      @click:display-button="() => clickPositionButton('TP048', filtteredData('TP048'))"
    />
    <DisplayButton
      :button-data="filtteredData('TP049')"
      button-grid="row-span-1 col-start-1 flex justify-center items-center p-1"
      @click:display-button="() => clickPositionButton('TP049', filtteredData('TP049'))"
    />
    <DisplayButton
      :button-data="filtteredData('TP050')"
      button-grid="row-span-1 col-start-1 flex justify-center items-center p-1"
      @click:display-button="() => clickPositionButton('TP050', filtteredData('TP050'))"
    />
    <DisplayButton
      :button-data="filtteredData('TP051')"
      button-grid="row-span-1 col-start-1 flex justify-center items-center p-1"
      @click:display-button="() => clickPositionButton('TP051', filtteredData('TP051'))"
    />
    <DisplayButton
      :button-data="filtteredData('TP052')"
      button-grid="row-span-1 col-start-1 flex justify-center items-center p-1"
      @click:display-button="() => clickPositionButton('TP052', filtteredData('TP052'))"
    />
    <DisplayButton
      :button-data="filtteredData('TP053')"
      button-grid="row-span-1 col-start-1 flex justify-center items-center p-1"
      @click:display-button="() => clickPositionButton('TP053', filtteredData('TP053'))"
    />
    <DisplayButton
      :button-data="filtteredData('TP054')"
      button-grid="row-span-1 col-start-1 flex justify-center items-center p-1"
      @click:display-button="() => clickPositionButton('TP054', filtteredData('TP054'))"
    />
    <div class="row-span-1 col-start-1" />
    <DisplayButton
      :button-data="filtteredData('TP055')"
      button-grid="row-span-1 col-start-1 flex justify-center items-center p-1"
      @click:display-button="() => clickPositionButton('TP055', filtteredData('TP055'))"
    />
    <DisplayButton
      :button-data="filtteredData('TP056')"
      button-grid="row-span-1 col-start-1 flex justify-center items-center p-1"
      @click:display-button="() => clickPositionButton('TP056', filtteredData('TP056'))"
    />
    <DisplayButton
      :button-data="filtteredData('TP057')"
      button-grid="row-span-1 col-start-1 flex justify-center items-center p-1"
      @click:display-button="() => clickPositionButton('TP057', filtteredData('TP057'))"
    />
    <DisplayIcon
      grid-class="row-span-6 row-start-3 col-start-2"
      display-icon-name="maki:parking-garage"
      :display-icon-size="computedIconSize"
    />
    <AIconText
      custom-class="row-span-1 row-start-7 col-start-2 flex items-center justify-center"
      :use-icon="false"
      text="게러지"
    />
  </div>
</template>