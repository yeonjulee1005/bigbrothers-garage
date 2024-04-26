<script setup lang="ts">

const toast = useToast()

const { updateData, loadKeeping, loadTransportation } = useFetchComposable()

const { transporter } = storeToRefs(useTransportOptions())

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

const selectTransporter = ref('')

watchEffect(() => {
  if (props.selectData) {
    selectTransporter.value = props.selectData?.transporter?.id
  }
})

const submitChange = () => {
  updateData({ transporter: selectTransporter.value }, props.selectData.id, selectDatabaseTable())

  loadData()
  closeDialog(false)
  toast.add({ title: '운송담당자 변경을 성공하였습니다.', color: 'emerald', timeout: 1500 })
}

const loadData = () => {
  loadKeeping(false)
  loadTransportation(false)
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
    prevent-close
    title="운송담당자 변정"
    double-first-text="변경"
    double-second-text="닫기"
    @click-first-button="submitChange"
    @click-second-button="closeDialog(false)"
    @close-dialog="closeDialog(false)"
  >
    <BGSelect
      v-model="selectTransporter"
      :options="transporter"
      color="primary"
      value-attribute="id"
      option-attribute="name"
      placeholder="운송담당자"
    />
  </ADialog>
</template>

