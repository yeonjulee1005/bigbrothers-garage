<script setup lang="ts">

const { garagePosition } = storeToRefs(useGaragePositionStore())

const dialogTrigger = defineModel('dialogTrigger', {
  type: Boolean,
  default: false
})

withDefaults(
  defineProps<{
    selectButtonData?: SerializeObject | undefined
    selectPosition: string,
    controllable?: boolean
  }>(),
  {
    selectButtonData: undefined,
    controllable: false
  }
)

const changePositionDialogTrigger = ref(false)
const changeTransportStatusDialogTrigger = ref(false)
const changeTransporterDialogTrigger = ref(false)

const selectPositionName = (selectPosition: string) => {
  const selectPositionData = garagePosition.value.find((position: SerializeObject) => position.code === selectPosition)
  return selectPositionData?.code_name
}

const labelAttach = (label: string, text: string) => {
  return label.concat(': ', text)
}

const openChangePositionDialog = () => {
  dialogTrigger.value = false
  changePositionDialogTrigger.value = true
}

const openChangeTransportStatusDialog = () => {
  dialogTrigger.value = false
  changeTransportStatusDialogTrigger.value = true
}

const openChangeTransporterDialog = () => {
  dialogTrigger.value = false
  changeTransporterDialogTrigger.value = true
}

</script>

<template>
  <div>
    <AModal
      :modal-trigger="dialogTrigger"
      controller
      modal-overlay
      :title="selectPositionName(selectPosition)"
      @close-dialog="() => dialogTrigger = false"
    >
      <div
        v-if="selectButtonData"
        class="flex flex-col justify-center items-center gap-3 p-1"
      >
        <AButton
          v-if="controllable"
          custom-class="w-full"
          button-text="보관위치 변경"
          @click:button="openChangePositionDialog"
        />
        <AButton
          v-if="controllable"
          custom-class="w-full"
          button-text="보관상태 변경"
          @click:button="openChangeTransportStatusDialog"
        />
        <AButton
          v-if="controllable && selectButtonData.transporter"
          custom-class="w-full"
          button-text="운송자 변경"
          @click:button="openChangeTransporterDialog"
        />
        <AButton
          v-if="controllable"
          custom-class="w-full"
          button-text="정보 수정"
          @click:button="() => console.log(selectButtonData)"
        />
        <NuxtImg
          :src="selectButtonData.car_photo_name"
          :width="160"
        />
        <NuxtImg
          v-if="selectButtonData.luggage_photo_name"
          :src="selectButtonData.luggage_photo_name"
          :width="160"
        />
        <BGInput
          v-if="selectButtonData.transporter"
          readonly
          color="red"
          :value="labelAttach('운송자', selectButtonData.transporter.name)"
          :ui="{wrapper: 'w-full'}"
        />
        <BGInput
          v-if="selectButtonData.transporter"
          readonly
          color="red"
          :value="labelAttach('운송자 연락처', selectButtonData.transporter.mobile)"
          :ui="{wrapper: 'w-full'}"
        />
        <BGInput
          readonly
          color="red"
          :value="labelAttach('차종', selectButtonData.car_model)"
          :ui="{wrapper: 'w-full'}"
        />
        <BGInput
          readonly
          color="red"
          :value="labelAttach('번호판', selectButtonData.car_number)"
          :ui="{wrapper: 'w-full'}"
        />
        <BGInput
          readonly
          color="red"
          :value="labelAttach('운송상태', selectButtonData.transportStatus.code_name)"
          :ui="{wrapper: 'w-full'}"
        />
        <BGInput
          v-if="controllable && selectButtonData.mobile"
          readonly
          color="red"
          :value="selectButtonData.mobile"
          :ui="{wrapper: 'w-full'}"
        />
        <BGTextarea
          v-if="controllable"
          readonly
          color="red"
          autoresize
          :value="selectButtonData.memo"
          :ui="{wrapper: 'w-full'}"
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
    <DialogChangeTransportStatus
      v-model:dialog-trigger="changeTransportStatusDialogTrigger"
      :select-data="selectButtonData"
      @close:dialog="(trigger:boolean) => changeTransportStatusDialogTrigger = trigger"
    />
    <DialogChangeTransporter
      v-model:dialog-trigger="changeTransporterDialogTrigger"
      :select-data="selectButtonData"
      @close:dialog="(trigger:boolean) => changeTransporterDialogTrigger = trigger"
    />
  </div>
</template>