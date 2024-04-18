<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import { format } from 'date-fns'
import {ko} from 'date-fns/locale'
import type { FormSubmitEvent } from '#ui/types'

const toast = useToast()

const { insertData } = useFetchComposable()
const { garagePosition } = storeToRefs(useGaragePositionStore())
const { transporter, transportStatus } = storeToRefs(useTransportOptions())

useHead({
  title: '게러지 리스트등록'
})

definePageMeta({
  layout: 'control'
})

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
  endDate: undefined,
  carPhotoName: '',
  extraPhotoName: '',
  luggagePhotoName: ''
})

const isKeeping = ref(false)
const carImageUploadDialogTrigger = ref(false)
const luggageImageUploadDialogTrigger = ref(false)
const extraImageUploadDialogTrigger = ref(false)

const submitImage = (bucketName: string, imageUrl: string) => {
  switch (bucketName) {
    case 'car_photo' :
      formData.carPhotoName = imageUrl
      break
    case 'extra_photo' :
      formData.extraPhotoName = imageUrl
      break
    case 'luggage_photo' :
      formData.luggagePhotoName = imageUrl
      break
  }
}

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  if (!event.isTrusted) { return }

  isKeeping.value
    ? await createKeepingData()
    : await createTransportationData()
}

const createKeepingData = async () => {

  const data = {
    garage_position: formData.garagePosition,
    car_number: formData.carNumber,
    car_model: formData.carModel,
    name: formData.name,
    mobile: formData.mobile,
    start_date: formData.startDate,
    end_date: formData.endDate,
    memo: formData.memo,
    car_photo_name: formData.carPhotoName,
    extra_photo_name: formData.extraPhotoName,
    transport_status: formData.transportStatus
  }

  const error = await insertData(data, 'keeping')

  if (!error) {
    navigateTo('/control')
    toast.add({ title: '보관차량 등록에 성공하였습니다.', color: 'emerald', timeout: 3000 })
  }
}

const createTransportationData = async () => {

  const data = {
    garage_position: formData.garagePosition,
    car_number: formData.carNumber,
    car_model: formData.carModel,
    name: formData.name,
    mobile: formData.mobile,
    start_date: formData.startDate,
    end_date: formData.endDate,
    memo: formData.memo,
    car_photo_name: formData.carPhotoName,
    luggage_photo_name: formData.luggagePhotoName,
    extra_photo_name: formData.extraPhotoName,
    transport_status: formData.transportStatus,
    transporter: formData.transporter
  }

  const error = await insertData(data, 'transportation')

  if (!error) {
    navigateTo('/control')
    toast.add({ title: '운송차량 등록에 성공하였습니다.', color: 'emerald', timeout: 3000 })
  }
}

</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <BGCard
      class="flex flex-col md:w-[600px] w-[90%] m-4"
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
            label="보관차량"
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
          :label="'운송상태'"
          name="transportStatus"
          size="lg"
        >
          <BGSelect
            v-model="formData.transportStatus"
            :options="transportStatus"
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
          <BGTextarea
            v-model="formData.memo"
            color="red"
            autoresize
            :rows="4"
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
            v-if="!formData.carPhotoName"
            :button-text="'이미지 업로드'"
            @click:button="() => carImageUploadDialogTrigger = true"
          />
          <BGInput
            v-else
            v-model="formData.carPhotoName.split('car_photo/')[1]"
            color="red"
            readonly
          />
          <DialogImageUpload
            v-model:dialog-trigger="carImageUploadDialogTrigger"
            bucket-name="car_photo"
            @submit:image="(imageUrl: string) => submitImage('car_photo', imageUrl)"
            @close:dialog="(trigger:boolean) => carImageUploadDialogTrigger = trigger"
          />
        </BGFormGroup>
        <BGFormGroup
          v-if="!isKeeping"
          :label="'짐 이미지'"
          name="luggagePhotoName"
          size="lg"
        >
          <AButton
            v-if="!formData.luggagePhotoName"
            :button-text="'이미지 업로드'"
            @click:button="() => luggageImageUploadDialogTrigger = true"
          />
          <BGInput
            v-else
            v-model="formData.luggagePhotoName.split('luggage_photo/')[1]"
            color="red"
            readonly
          />
          <DialogImageUpload
            v-model:dialog-trigger="luggageImageUploadDialogTrigger"
            bucket-name="luggage_photo"
            @submit:image="(imageUrl: string) => submitImage('luggage_photo', imageUrl)"
            @close:dialog="(trigger:boolean) => luggageImageUploadDialogTrigger = trigger"
          />
        </BGFormGroup>
        <BGFormGroup
          :label="'옵션 이미지'"
          name="extraPhotoName"
          size="lg"
        >
          <AButton
            v-if="!formData.extraPhotoName"
            :button-text="'이미지 업로드'"
            @click:button="() => extraImageUploadDialogTrigger = true"
          />
          <BGInput
            v-else
            v-model="formData.extraPhotoName.split('extra_photo/')[1]"
            color="red"
            readonly
          />
          <DialogImageUpload
            v-model:dialog-trigger="extraImageUploadDialogTrigger"
            bucket-name="extra_photo"
            @submit:image="(imageUrl: string) => submitImage('extra_photo', imageUrl)"
            @close:dialog="(trigger:boolean) => extraImageUploadDialogTrigger = trigger"
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
