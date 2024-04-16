<template>
  <ADialog
    :dialog-trigger="createArticleTrigger"
    :title="'등록'"
    hide-double-button
    @close-dialog="emits('close:dialog')"
  >
    <BGForm
      :schema="schema"
      :state="formData"
      class="space-y-2"
      @submit="onSubmit"
    >
      <BGFormGroup
        :label="'제목'"
        name="title"
        size="xl"
        required
      >
        <BGInput
          v-model="formData.title"
          color="violet"
          :placeholder="'제목을 입력해랴'"
          aria-label="title"
        />
      </BGFormGroup>
      <BgFormGroup
        :label="'다른거임'"
        name="desc"
        size="xl"
        required
      >
        <BgInput
          v-model="formData.desc"
          color="violet"
          :placeholder="'다른거 입력해라'"
          aria-label="desc"
        />
      </BgFormGroup>
      <BgFormGroup
        :label="'이미지'"
        name="image"
        size="xl"
      >
        <AButton
          :button-text="'이미지 업로드'"
          @click:button="() => imageUploadDialogTrigger = true"
        />
        <DialogImageUpload
          v-model:dialog-trigger="imageUploadDialogTrigger"
          @submit:image="submitImage"
          @close:dialog="(trigger:boolean) => imageUploadDialogTrigger = trigger"
        />
      </BgFormGroup>
      <AButton
        custom-class="submit-button"
        button-variant="soft"
        button-size="lg"
        :button-text="'등록'"
        type="submit"
      />
    </BGForm>
  </ADialog>
</template>

<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const createArticleTrigger = defineModel('dialogTrigger', {
  type: Boolean,
  default: false
})

const emits = defineEmits([
  'create:article',
  'close:dialog'
])

const schema = object({
  title: string()
    .required('제목이 필요해'),
  desc: string()
    .required('다른게 필요해')
})

type Schema = InferType<typeof schema>

const formData = reactive({
  title: '',
  desc: ''
})

const imageUploadDialogTrigger = ref(false)

const submitImage = (imageUrl:string) => {
  console.log(imageUrl)
}

const onSubmit = (event: FormSubmitEvent<Schema>) => {
  if (!event.isTrusted) { return }
  emits('create:article', formData)
}

</script>
