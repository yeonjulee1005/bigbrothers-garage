<script setup lang="ts">

const { loadKeeping, loadTransportation } = useFetchComposable()
const { keepingData } = storeToRefs(useKeepingStore())
const { transportationData } = storeToRefs(useTransportationStore())

withDefaults(
  defineProps<{
    controllable?: boolean
  }>(),
  {
    controllable: false
  }
)

const selectPosition = ref('')
const selectButtonData = ref<SerializeObject | undefined>(undefined)
const controllerBoxTrigger = ref(false)

const cardUiOption = {
  body: { base: 'w-full' },
  ring: 'ring-2 ring-zinc-800 dark:ring-zinc-200',
  shadow: 'shadow-md shadow-zinc-200/40',
  divide: 'divide-zinc-800 dark:divide-zinc-200',
  rounded: 'rounded-lg',
  background: 'bg-zinc-50/60 dark:bg-zinc-800/60'
}

const clickGaragePosition = (buttonText: string, buttonData: SerializeObject) => {
  selectPosition.value = buttonText
  selectButtonData.value = buttonData
  controllerBoxTrigger.value = true
}

loadKeeping(false)
loadTransportation(false)

</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <BGCard
      class="flex flex-col lg:w-[500px] m-4"
      :ui="cardUiOption"
    >
      <template #header>
        <DisplayLeftSide
          :keeping-data="keepingData"
          :transportation-data="transportationData"
          @click:position="(buttonText: string, buttonData: SerializeObject) => clickGaragePosition(buttonText, buttonData)"
        />
      </template>
      <DisplayRightSide
        :keeping-data="keepingData"
        :transportation-data="transportationData"
        @click:position="(buttonText: string, buttonData: SerializeObject) => clickGaragePosition(buttonText, buttonData)"
      />
      <template #footer>
        <DisplayOutSide
          :keeping-data="keepingData"
          :transportation-data="transportationData"
          @click:position="(buttonText: string, buttonData: SerializeObject) => clickGaragePosition(buttonText, buttonData)"
        />
      </template>
    </BGCard>
    <DialogController
      v-model:dialog-trigger="controllerBoxTrigger"
      :select-position="selectPosition"
      :select-button-data="selectButtonData"
      :controllable="controllable"
      @close-dialog="() => controllerBoxTrigger = false"
    />
  </div>
</template>
