<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import { format } from 'date-fns'
import {ko} from 'date-fns/locale'
import type { FormSubmitEvent } from '#ui/types'

const { garagePosition } = storeToRefs(useGaragePositionStore())
const { transporter, transportStatus } = storeToRefs(useTransportOptions())

useHead({
  title: '게러지 리스트등록'
})

definePageMeta({
  layout: 'control'
})

const emits = defineEmits([
  'create:article',
  'close:dialog'
])

const schema = object({
  garagePosition: string()
    .required('주차위치 선택해야해'),
  carNumber: string()
    .required('차량번호좀!'),
  carModel: string()
    .required('차량 모델을 입력해!'),
  memo: string()
    .required('메모를 입력해줘요'),
  startDate: string()
    .required('게러지 입고일 입력해'),
  endDate: string()
    .required('게러지 출고일 입력해')
})

type Schema = InferType<typeof schema>

const formData = reactive({
  transporter: undefined,
  transportStatus: undefined,
  garagePosition: undefined,
  carNumber: undefined,
  carModel: undefined,
  name: undefined,
  mobile: undefined,
  memo: undefined,
  startDate: undefined,
  endDate: undefined
})

const isKeeping = ref(false)
const imageUploadDialogTrigger = ref(false)

console.log(garagePosition.value)
console.log(transporter.value)
console.log(transportStatus.value)

const submitImage = (bucketName: string, imageUrl:string) => {
  console.log(bucketName)
  console.log(imageUrl)
}

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  console.log(event.data)
  if (!event.isTrusted) { return }
  emits('create:article', event.data)
}

</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <BGCard
      class="flex flex-col w-[90%] m-4"
      :ui="{ body: { base: 'w-full' }, ring: 'ring-2 ring-zinc-800 dark:ring-zinc-200', shadow: 'shadow-md shadow-zinc-200/40', divide: 'divide-zinc-800 dark:divide-zinc-200', rounded: 'rounded-lg', background: 'bg-zinc-50/60 dark:bg-zinc-800/60' }"
    >
      <BGForm
        :schema="schema"
        :state="formData"
        class="space-y-3"
        @submit="onSubmit"
      >
        <BGFormGroup
          :label="'보관여부'"
          name="isKeeping"
          size="lg"
          required
        >
          <BGCheckbox
            v-model="isKeeping"
            color="primary"
            label="보관여부"
            help="보관여부에 따른 등록항목 구분을 위해 먼저 선택해줘야 해요!"
            :ui="{ background: 'dark:bg-zinc-800/60' }"
          />
        </BGFormGroup>
        <BGFormGroup
          v-if="!isKeeping"
          :label="'운송자'"
          name="transporter"
          size="lg"
        >
          <BGSelect
            v-model="formData.transporter"
            :options="transporter"
            color="primary"
            value-attribute="id"
            option-attribute="name"
            placeholder="운송자 선택"
          />
        </BGFormGroup>
        <BGFormGroup
          v-if="!isKeeping"
          :label="'운송상태'"
          name="transportStatus"
          size="lg"
        >
          <BGSelect
            v-model="formData.transportStatus"
            :options="garagePosition"
            color="primary"
            value-attribute="id"
            option-attribute="code_name"
            placeholder="운송상태"
          />
        </BGFormGroup>
        <BGFormGroup
          :label="'주차위치'"
          name="garagePosition"
          size="lg"
          required
        >
          <BGSelect
            v-model="formData.garagePosition"
            :options="garagePosition"
            color="primary"
            value-attribute="id"
            option-attribute="code_name"
            placeholder="주차위치"
          />
        </BGFormGroup>
        <BGFormGroup
          :label="'차량번호'"
          name="carNumber"
          size="lg"
          required
        >
          <BGInput
            v-model="formData.carNumber"
            color="red"
            :placeholder="'차량번호 입력해라'"
            aria-label="carNumber"
          />
        </BGFormGroup>
        <BGFormGroup
          :label="'차량모델'"
          name="carModel"
          size="lg"
          required
        >
          <BGInput
            v-model="formData.carModel"
            color="red"
            :placeholder="'차량모델 입력해라'"
            aria-label="carModel"
          />
        </BGFormGroup>
        <BGFormGroup
          :label="'메모'"
          name="memo"
          size="lg"
          required
        >
          <BGInput
            v-model="formData.memo"
            color="red"
            :placeholder="'메모를 입력해라'"
            aria-label="memo"
          />
        </BGFormGroup>
        <BGFormGroup
          :label="'게러지 입고일'"
          name="startDate"
          size="lg"
          required
        >
          <BGPopover
            :popper="{ placement: 'bottom-start' }"
            :ui="{ trigger: 'w-fit' }"
          >
            <AButton
              use-leading
              icon-name="i-heroicons-calendar-days-20-solid"
              :button-text="formData.startDate ? format(formData.startDate, 'MMM do, yyyy', { locale: ko }) : '선택해줘'"
            />

            <template #panel="{ close }">
              <ADatePicker
                v-model="formData.startDate"
                is-required
                @close="close"
              />
            </template>
          </BGPopover>
        </BGFormGroup>
        <BGFormGroup
          :label="'게러지 출고일'"
          name="endDate"
          size="lg"
          required
        >
          <BGPopover
            :popper="{ placement: 'bottom-start' }"
            :ui="{ trigger: 'w-fit' }"
          >
            <AButton
              use-leading
              icon-name="i-heroicons-calendar-days-20-solid"
              :button-text="formData.endDate ? format(formData.endDate, 'MMM do, yyyy', { locale: ko }) : '선택해줘'"
            />

            <template #panel="{ close }">
              <ADatePicker
                v-model="formData.endDate"
                is-required
                @close="close"
              />
            </template>
          </BGPopover>
        </BGFormGroup>
        <BGFormGroup
          :label="'성함'"
          name="name"
          size="lg"
        >
          <BGInput
            v-model="formData.name"
            color="red"
            :placeholder="'성함을 입력해라'"
            aria-label="name"
          />
        </BGFormGroup>
        <BGFormGroup
          :label="'연락처'"
          name="mobile"
          size="lg"
        >
          <BGInput
            v-model="formData.mobile"
            color="red"
            :placeholder="'연락처를 입력해라'"
            aria-label="mobile"
          />
        </BGFormGroup>
        <BGFormGroup
          :label="'차량 이미지'"
          name="carPhotoName"
          size="lg"
        >
          <AButton
            :button-text="'이미지 업로드'"
            @click:button="() => imageUploadDialogTrigger = true"
          />
          <DialogImageUpload
            v-model:dialog-trigger="imageUploadDialogTrigger"
            bucket-name="car_photo"
            @submit:image="(imageUrl: string) => submitImage('car_photo', imageUrl)"
            @close:dialog="(trigger:boolean) => imageUploadDialogTrigger = trigger"
          />
        </BGFormGroup>
        <div class="flex justify-end">
          <AButton
            button-size="lg"
            :button-text="'등록'"
            type="submit"
          />
        </div>
      </BGForm>
    </BGCard>
  </div>
</template>
