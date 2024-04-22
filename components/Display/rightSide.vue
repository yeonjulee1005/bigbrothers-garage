<script setup lang="ts">

const { width } = useWindowSize()

const props = defineProps<{
  keepingData: SerializeObject[],
  transportationData: SerializeObject[]
}>()

const emits = defineEmits([
  'click:position'
])

const computedIconSize = computed(() => {
  return width.value < 500 ? 22 : 34
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
  <div>
    <div class="grid grid-rows-11 grid-flow-col grid-cols-8 gap-2">
      <DisplayButton
        :button-data="filtteredData('TP028')"
        button-grid="row-span-2 row-start-4 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP028', filtteredData('TP028'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP027')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP027', filtteredData('GP027'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP028')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP028', filtteredData('GP028'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP029')"
        button-grid="row-span-2 row-start-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP029', filtteredData('TP029'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP030')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP030', filtteredData('TP030'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP031')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP031', filtteredData('TP031'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP032')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP032', filtteredData('TP032'))"
      />
      <DisplayIcon
        grid-class="row-span-2 row-end-12"
        display-icon-name="maki:toilet"
        :display-icon-size="computedIconSize"
      />
      <DisplayButton
        :button-data="filtteredData('TP033')"
        button-grid="row-span-2 row-start-3 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP033', filtteredData('TP033'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP034')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP034', filtteredData('TP034'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP035')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP035', filtteredData('TP035'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP036')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP036', filtteredData('TP036'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP037')"
        button-grid="row-span-2 row-start-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP037', filtteredData('TP037'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP038')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP038', filtteredData('TP038'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP039')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP039', filtteredData('TP039'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP040')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP040', filtteredData('TP040'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP041')"
        button-grid="row-span-2 row-start-3 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP041', filtteredData('TP041'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP042')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP042', filtteredData('TP042'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP043')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP043', filtteredData('TP043'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP044')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP044', filtteredData('TP044'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP022')"
        button-grid="col-span-2 col-end-9 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP022', filtteredData('GP022'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP023')"
        button-grid="col-span-2 col-end-9 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP023', filtteredData('GP023'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP024')"
        button-grid="col-span-2 col-end-9 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP024', filtteredData('GP024'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP025')"
        button-grid="col-span-2 col-end-9 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP025', filtteredData('GP025'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP026')"
        button-grid="col-span-2 col-end-9 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP026', filtteredData('GP026'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP021')"
        button-grid="col-span-2 col-end-9 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP021', filtteredData('TP021'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP022')"
        button-grid="col-span-2 col-end-9 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP022', filtteredData('TP022'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP023')"
        button-grid="col-span-2 col-end-9 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP023', filtteredData('TP023'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP024')"
        button-grid="col-span-2 col-end-9 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP024', filtteredData('TP024'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP025')"
        button-grid="row-span-2 row-end-12 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP025', filtteredData('TP025'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP026')"
        button-grid="row-span-2 row-end-12 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP026', filtteredData('TP026'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP027')"
        button-grid="row-span-2 row-end-12 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP027', filtteredData('TP027'))"
      />
    </div>
  </div>
</template>
