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
        클릭하면 위치 이동 또는 상태변경 모달 표시
        <DisplayLeftSide
          :keeping-data="keepingData"
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
        <DisplayTitle title="야외" />
        <div class="grid grid-rows-13 grid-flow-col grid-cols-2 gap-2">
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-1'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-2'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-3'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-4'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-5'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-6'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-7'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-8'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-9'"
          />
          <div class="row-span-1 col-start-1" />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-10'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-11'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-12'"
          />
          <DisplayTitle
            title="게러지 건물"
            title-class="flex justify-center items-center row-span-12 row-start-2 col-start-2 border-2 rounded-md mx-2"
          />
        </div>
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
