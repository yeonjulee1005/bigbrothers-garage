<script setup lang="ts">

const { garagePosition } = storeToRefs(useGaragePositionStore())

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

const currentPosition = ref('')
const selectPosition = ref('')

const submitChange = () => {
  currentPosition.value = props.selectData.garagePosition.id

  // 변경할 위치의 id를 조회해서, 만일 변경할 위치에 차량이 존재할 경우, 과거 위치로 변경해야함
  console.log('변경할 위치', selectPosition.value)
  console.log('과거 위치', currentPosition.value)
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

