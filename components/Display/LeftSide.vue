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
    <div class="grid grid-rows-12 grid-flow-col grid-cols-9 gap-2">
      <DisplayIcon
        grid-class="row-span-1 col-span-2"
        display-icon-name="maki:tunnel"
        :display-icon-size="computedIconSize"
      />
      <DisplayButton
        :button-data="filtteredData('GP010')"
        button-grid="col-span-2 row-start-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP010', filtteredData('GP010'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP009')"
        button-grid="col-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP009', filtteredData('GP009'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP008')"
        button-grid="col-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP008', filtteredData('GP008'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP007')"
        button-grid="col-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP007', filtteredData('GP007'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP006')"
        button-grid="col-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP006', filtteredData('GP006'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP005')"
        button-grid="col-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP005', filtteredData('GP005'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP004')"
        button-grid="col-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP004', filtteredData('GP004'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP003')"
        button-grid="col-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP003', filtteredData('GP003'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP002')"
        button-grid="col-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP002', filtteredData('GP002'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP001')"
        button-grid="col-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP001', filtteredData('GP001'))"
      />
      <div class="col-span-2" />
      <DisplayButton
        :button-data="filtteredData('TP001')"
        button-grid="row-span-2 row-start-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP001', filtteredData('TP001'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP003')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP003', filtteredData('TP003'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP005')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP005', filtteredData('TP005'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP007')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP007', filtteredData('TP007'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP009')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP009', filtteredData('TP009'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP002')"
        button-grid="row-span-2 row-start-3 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP002', filtteredData('TP002'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP004')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP004', filtteredData('TP004'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP006')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP006', filtteredData('TP006'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP008')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP008', filtteredData('TP008'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP010')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP010', filtteredData('TP010'))"
      />
      <DisplayIcon
        grid-class="row-span-1 row-start-5"
        display-icon-name="maki:barrier"
        :display-icon-size="computedIconSize"
      />
      <DisplayIcon
        grid-class="row-span-1 row-start-8"
        display-icon-name="maki:barrier"
        :display-icon-size="computedIconSize"
      />
      <div class="row-span-1 row-end-12" />
      <DisplayButton
        :button-data="filtteredData('TP011')"
        button-grid="row-span-2 row-start-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP011', filtteredData('TP011'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP013')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP013', filtteredData('TP013'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP015')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP015', filtteredData('TP015'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP017')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP017', filtteredData('TP017'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP019')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP019', filtteredData('TP019'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP012')"
        button-grid="row-span-2 row-start-3 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP012', filtteredData('TP012'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP014')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP014', filtteredData('TP014'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP016')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP016', filtteredData('TP016'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP018')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP018', filtteredData('TP018'))"
      />
      <DisplayButton
        :button-data="filtteredData('TP020')"
        button-grid="row-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('TP020', filtteredData('TP020'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP011')"
        button-grid="col-span-2 row-start-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP011', filtteredData('GP011'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP012')"
        button-grid="col-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP012', filtteredData('GP012'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP013')"
        button-grid="col-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP013', filtteredData('GP013'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP014')"
        button-grid="col-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP014', filtteredData('GP014'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP015')"
        button-grid="col-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP015', filtteredData('GP015'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP016')"
        button-grid="col-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP016', filtteredData('GP016'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP017')"
        button-grid="col-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP017', filtteredData('GP017'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP018')"
        button-grid="col-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP018', filtteredData('GP018'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP019')"
        button-grid="col-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP019', filtteredData('GP019'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP020')"
        button-grid="col-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP020', filtteredData('GP020'))"
      />
      <DisplayButton
        :button-data="filtteredData('GP021')"
        button-grid="col-span-2 flex justify-center items-center p-1"
        @click:display-button="() => clickPositionButton('GP021', filtteredData('GP021'))"
      />
    </div>
  </div>
</template>
