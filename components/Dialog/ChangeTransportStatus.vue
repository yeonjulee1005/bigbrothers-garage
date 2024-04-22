<script setup lang="ts">

const { go } = useRouter()
const toast = useToast()

const { updateData } = useFetchComposable()

const { transportStatus } = storeToRefs(useTransportOptions())

const dialogTrigger = defineModel('dialogTrigger', {
  type: Boolean,
  default: false
})

const props = defineProps<{
  selectData: SerializeObject
}>()

const emits = defineEmits([
  'close:dialog',
])

const selectStatus = ref('')

watchEffect(() => {
  if (props.selectData) {
    selectStatus.value = props.selectData.transportStatus.id
  }
})

const submitChange = () => {
  updateData({ transport_status: selectStatus.value }, props.selectData.id, selectDatabaseTable())
  if (selectStatus.value === '0661badf-9160-4dd3-a286-9cb80d2f767b') {
    updateData({ garage_position: null, deleted: true }, props.selectData.id, selectDatabaseTable())
  }
  toast.add({ title: '상태변경을 성공하였습니다.', color: 'emerald', timeout: 1500 })
  go(0)
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
    title="운송상태 변정"
    double-first-text="변경"
    double-second-text="닫기"
    @click-first-button="submitChange"
    @click-second-button="closeDialog(false)"
    @close-dialog="closeDialog(false)"
  >
    <BGSelect
      v-model="selectStatus"
      :options="transportStatus"
      color="primary"
      value-attribute="id"
      option-attribute="code_name"
      placeholder="운송상태"
    />

  </ADialog>
</template>

