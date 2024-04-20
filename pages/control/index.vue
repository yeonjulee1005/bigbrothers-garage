<script setup lang="ts">

const { loadKeeping, loadTransportation } = useFetchComposable()
const { keepingData } = storeToRefs(useKeepingStore())
const { transportationData } = storeToRefs(useTransportationStore())

useHead({
  title: '게러지 현황보기'
})

definePageMeta({
  layout: 'control'
})

const selectPosition = ref('')
const selectButtonData = ref<SerializeObject | undefined>(undefined)
const controllerBoxTrigger = ref(false)
const changePositionDialogTrigger = ref(false)

const clickGaragePosition = (buttonText: string, buttonData: SerializeObject) => {
  selectPosition.value = buttonText
  selectButtonData.value = buttonData
  controllerBoxTrigger.value = true
}

const openChangePositionDialog = () => {
  controllerBoxTrigger.value = false
  changePositionDialogTrigger.value = true
}

loadKeeping()
loadTransportation()

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
      :modal-trigger="controllerBoxTrigger"
      controller
      modal-overlay
      :title="selectPosition"
      @close-dialog="() => controllerBoxTrigger = false"
    >
      <div
        v-if="selectButtonData"
        class="flex flex-col justify-center items-center gap-3 p-1"
      >
        <NuxtImg :src="selectButtonData.car_photo_name"/>
        <BGInput
          readonly
          color="red"
          :value="selectButtonData.car_model"
        />
        <BGInput
          readonly
          color="red"
          :value="selectButtonData.car_number"
        />
        <BGInput
          readonly
          color="red"
          :value="selectButtonData.transportStatus.code_name"
        />
        <BGInput
          v-if="selectButtonData.mobile"
          readonly
          color="red"
          :value="selectButtonData.mobile"
        />
        <BGTextarea
          readonly
          color="red"
          autoresize
          :value="selectButtonData.memo"
        />
        <AButton
          custom-class="w-full"
          button-text="보관위치 변경"
          @click:button="openChangePositionDialog"
        />
        <AButton
          custom-class="w-full"
          button-text="정보 수정"
          @click:button="() => console.log(selectButtonData)"
        />
      </div>
      <span v-else>
        빈자리 입니다!
      </span>
    </AModal>
    <DialogChangePosition
      v-model:dialog-trigger="changePositionDialogTrigger"
      :select-data="selectButtonData"
      @close:dialog="(trigger:boolean) => changePositionDialogTrigger = trigger"
    />
  </div>
</template>
