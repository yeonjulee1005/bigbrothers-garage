<script setup lang="ts">

const { loadStorage, uploadStorage } = useFetchComposable()

const toast = useToast()

const dialogTrigger = defineModel('dialogTrigger', {
  type: Boolean,
  default: false
})

const props = withDefaults(
  defineProps<{
    bucketName?: string
  }>(),
  {
    bucketName: ''
  }
)

const emits = defineEmits([
  'close:dialog',
  'submit:image'
])

const exportUrl = ref('')
const limitType = ['image/jpeg', 'image/jpg', 'image/webp', 'image/png', 'image/svg+xml']

const genUid = () => {
  return (new Date().getTime() + Math.random().toString(36).substring(2, 16))
}

const uploadFile = (event: FileList) => {
  const [_file] = event as FileList

  if (!limitType.includes(_file.type)) {
    toast.add({ title: '이미지 업로드 포멧을 확인하세요!', color: 'violet', timeout: 1500 })
  } else if (_file.size / 1024 / 1024 > 5) {
    toast.add({ title: '이미지 업로드 사이즈가 너무 커요!', color: 'violet', timeout: 1500 })
  } else {
    uploadImage(_file)
  }
}

const uploadImage = async (file:File) => {
  const fileExt = file.name.split('.').pop()
  const filePath = `${genUid()}.${fileExt}`

  const uploadError = await uploadStorage(props.bucketName, filePath, file)

  if (uploadError) {
    toast.add({ title: String(uploadError), color: 'orange', timeout: 1500 })
  }
  toast.add({ title: '이미지 업로드 성공', color: 'emerald', timeout: 1500 })
  await downloadImage(filePath)
}

const downloadImage = async (imageName:string) => {
  if (!imageName) { return }

  exportUrl.value = await loadStorage(props.bucketName, imageName)
}

const submitImage = () => {
  if (!exportUrl.value) {
    toast.add({ title: '이미지를 추가하세요', color: 'orange', timeout: 1500 })
    return
  }
  emits('submit:image', exportUrl.value)
  toast.add({ title: '이미지 등록 완료', color: 'emerald', timeout: 1500 })
  closeDialog(false)
}

const closeDialog = (trigger:boolean) => {
  emits('close:dialog', trigger)
}

</script>

<template>
  <ADialog
    :dialog-trigger="dialogTrigger"
    prevent-close
    title="이미지 업로드"
    double-first-text="저장"
    double-second-text="닫기"
    @click-first-button="submitImage"
    @click-second-button="closeDialog(false)"
    @close-dialog="closeDialog(false)"
  >
    <div class="flex flex-col gap-4">
      <BGFormGroup :label="'업로드'">
        <BGInput
          type="file"
          :ui="{ file: { base: 'dark:file:bg-zinc-800/60 dark:hover:file:bg-zinc-700/50' }}"
          @change="uploadFile"
        >
          <template #trailing>
            <Icon name="line-md:cloud-upload-outline-loop" />
          </template>
        </BGInput>
      </BGFormGroup>
      <NuxtImg
        v-if="exportUrl"
        class="image-preview"
        :src="exportUrl"
        width="300"
        height="200"
        fit="cover"
        alt="image-prev"
        :draggable="false"
        @contextmenu.prevent
      />
    </div>
  </ADialog>
</template>