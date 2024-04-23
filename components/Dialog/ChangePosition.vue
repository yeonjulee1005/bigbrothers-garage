<script setup lang="ts">

const toast = useToast()

const { updateData, loadKeeping, loadTransportation } = useFetchComposable()

const { keepingData } = storeToRefs(useKeepingStore())
const { transportationData } = storeToRefs(useTransportationStore())
const { garagePosition } = storeToRefs(useGaragePositionStore())

const dialogTrigger = defineModel('dialogTrigger', {
  type: Boolean,
  default: false
})

const props = defineProps<{
  selectData: SerializeObject
}>()

const emits = defineEmits([
  'close:dialog'
])

const selectPosition = ref('')
const currentPosition = ref('')
const legacyPositionDataId = ref('')

watchEffect(() => {
  if (props.selectData) {
    selectPosition.value = props.selectData.garagePosition.id
  }
})

const submitChange = () => {
  const isKeepingData = garagePositionCode(selectPosition.value).includes('GP')

  currentPosition.value = props.selectData.garagePosition.id

  switch (isKeepingData) {
    case true:
      legacyPositionDataId.value = keepingDataFilter()
      break
    case false:
      legacyPositionDataId.value = transportationDataFilter()
      break
  }

  if (legacyPositionDataId.value) {
    updateData({ garage_position: currentPosition.value }, legacyPositionDataId.value, selectDatabaseTable())
    updateData({ garage_position: selectPosition.value }, props.selectData.id, selectDatabaseTable())
  } else {
    updateData({ garage_position: selectPosition.value }, props.selectData.id, selectDatabaseTable())
  }

  loadData()
  closeDialog(false)
  toast.add({ title: '위치변경을 성공하였습니다.', color: 'emerald', timeout: 1500 })
}

const loadData = () => {
  loadKeeping(false)
  loadTransportation(false)
}

const garagePositionCode = (garagePositionId: string) => {
  const findPosition = garagePosition.value.find((position: SerializeObject) => position.id === garagePositionId)
  return findPosition?.code
}

const keepingDataFilter = () => {
  const filterData = keepingData.value.filter((data: SerializeObject) => data.garagePosition.id === selectPosition.value)

  return filterData.length
    ? filterData[0].id
    : ''
}

const transportationDataFilter = () => {
  const filterData = transportationData.value.filter((data: SerializeObject) => data.garagePosition.id === selectPosition.value)

  return filterData.length
    ? filterData[0].id
    : ''
}

const selectDatabaseTable = () => {
  return props.selectData.transporter === undefined
    ? 'keeping'
    : 'transportation'
}

const closeDialog = (trigger:boolean) => {
  emits('close:dialog', trigger)
}

</script>

<template>
  <ADialog
    :dialog-trigger="dialogTrigger"
    title="보관위치 변정"
    double-first-text="변경"
    double-second-text="닫기"
    @click-first-button="submitChange"
    @click-second-button="closeDialog(false)"
    @close-dialog="closeDialog(false)"
  >
    <BGSelect
      v-model="selectPosition"
      :options="garagePosition"
      color="primary"
      value-attribute="id"
      option-attribute="code_name"
      placeholder="주차위치"
    />

  </ADialog>
</template>

