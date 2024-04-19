<script setup lang="ts">

const { loadKeeping } = useFetchComposable()
const { keepingData } = storeToRefs(useKeepingStore())
const { transportationData } = storeToRefs(useTransportationStore())

useHead({
  title: '게러지 현황보기'
})

definePageMeta({
  layout: 'control'
})

const isOpen = ref(false)
const selectPosition = ref('')
const selectButtonData = ref<SerializeObject | undefined>(undefined)

const clickGaragePosition = (buttonText: string, buttonData: SerializeObject) => {
  selectPosition.value = buttonText
  selectButtonData.value = buttonData
  isOpen.value = true
}

loadKeeping()

</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <BGCard
      class="flex flex-col lg:w-[500px] m-4"
      :ui="{ body: { base: 'w-full' }, ring: 'ring-2 ring-zinc-800 dark:ring-zinc-200', shadow: 'shadow-md shadow-zinc-200/40', divide: 'divide-zinc-800 dark:divide-zinc-200', rounded: 'rounded-lg', background: 'bg-zinc-50/60 dark:bg-zinc-800/60' }"
    >
      <template #header>
        <DisplayLeftSide
          :keeping-data="keepingData"
          :transportation-data="transportationData"
          controllable
          @click:position="(buttonText: string, buttonData: SerializeObject) => clickGaragePosition(buttonText, buttonData)"
        />
      </template>
      <DisplayRightSide
        :keeping-data="keepingData"
        :transportation-data="transportationData"
        controllable
        @click:position="(buttonText: string, buttonData: SerializeObject) => clickGaragePosition(buttonText, buttonData)"
      />
      <template #footer>
        <DisplayOutSide
          :keeping-data="keepingData"
          :transportation-data="transportationData"
          controllable
          @click:position="(buttonText: string, buttonData: SerializeObject) => clickGaragePosition(buttonText, buttonData)"
        />
      </template>
    </BGCard>
    <AModal
      :modal-trigger="isOpen"
      controller
      modal-overlay
      @close-dialog="() => isOpen = false"
    >
      <div class="p-3">
        {{ selectPosition }}<br>
        {{ selectButtonData }}<br>
        위치이동<br>
        차량 상세 수정
      </div>
    </AModal>
  </div>
</template>
