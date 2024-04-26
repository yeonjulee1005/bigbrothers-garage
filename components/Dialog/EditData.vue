<script setup lang="ts">

import { object, string, type InferType } from 'yup'
import { format } from 'date-fns'
import {ko} from 'date-fns/locale'
import type { FormSubmitEvent } from '#ui/types'

const toast = useToast()

const { updateData, deleteStorage } = useFetchComposable()
const { garagePosition } = storeToRefs(useGaragePositionStore())
const { transporter, transportStatus } = storeToRefs(useTransportOptions())

const dialogTrigger = defineModel('dialogTrigger', {
  type: Boolean,
  default: false
})

const props = defineProps<{
  selectData: SerializeObject
}>()

const emits = defineEmits([
  'update:data'
])

const isKeeping = ref(false)
const carImageUploadDialogTrigger = ref(false)
const luggageImageUploadDialogTrigger = ref(false)
const extraImageUploadDialogTrigger = ref(false)

const startDateText = computed(() => {
  return isKeeping.value ? '게러지 입고일' : '운송 시작일'
})

const endDateText = computed(() => {
  return isKeeping.value ? '게러지 출고일' : '운송 종료일'
})

const schema = object({
  garage_position: string()
    .required('주차위치를 선택해요'),
  car_number: string()
    .required('차량번호 입력해야죠?'),
  car_model: string()
    .required('차량 모델을 입력해요!'),
  memo: string()
    .required('메모를 입력해줘요!')
})

type Schema = InferType<typeof schema>

const formData = ref()

const transportationData = () => {
  isKeeping.value = false

  formData.value = {
    garage_position: props.selectData.garagePosition.id,
    car_number: props.selectData.car_number,
    car_model: props.selectData.car_model,
    name: props.selectData.name,
    mobile: props.selectData.mobile,
    start_date: props.selectData.start_date,
    end_date: props.selectData.end_date,
    memo: props.selectData.memo,
    car_photo_name: props.selectData.car_photo_name,
    luggage_photo_name: props.selectData.luggage_photo_name,
    extra_photo_name: props.selectData.extra_photo_name,
    transport_status: props.selectData.transportStatus.id,
    transporter: props.selectData.transporter.id
  }
}

const keepingData = () => {
  isKeeping.value = true

  formData.value = {
    garage_position: props.selectData.garagePosition.id,
    car_number: props.selectData.car_number,
    car_model: props.selectData.car_model,
    name: props.selectData.name,
    mobile: props.selectData.mobile,
    start_date: props.selectData.start_date,
    end_date: props.selectData.end_date,
    memo: props.selectData.memo,
    car_photo_name: props.selectData.car_photo_name,
    extra_photo_name: props.selectData.extra_photo_name,
    transport_status: props.selectData.transportStatus.id,
  }
}

watchEffect(() => {
  if (props.selectData) {
    props.selectData?.transporter
      ? transportationData()
      : keepingData()
  }
})

const submitImage = async (bucketName: string, imageUrl: string) => {
  // 만약 이미지가 있을 경우, 기존 이미지는 삭제하는 로직 필요
  switch (bucketName) {
    case 'car_photo' :
      legacyImageInBucket('car_photo', formData.value.car_photo_name, imageUrl)
      break
    case 'extra_photo' :
      legacyImageInBucket('extra_photo', formData.value.extra_photo_name, imageUrl)
      break
    case 'luggage_photo' :
      legacyImageInBucket('luggage_photo', formData.value.luggage_photo_name, imageUrl)
      break
  }
}

const legacyImageInBucket = (bucketName: string, legacyImageUrl: string, imageUrl: string) => {
  if (legacyImageUrl) {
    deleteStorage(bucketName, legacyImageUrl.split(`${bucketName}/`)[1])
  }

  formData.value[`${bucketName}_name`] = imageUrl
}

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  if (!event.isTrusted) { return }

  if (formData.value.transport_status === '0661badf-9160-4dd3-a286-9cb80d2f767b') {
    formData.value.class = 'line-through dark:bg-red-800 animate-pulse'
    formData.value.deleted = true
  }

  await updateData(formData.value, props.selectData.id, selectDatabaseTable())
  emits('update:data')
  toast.add({ title: '정보수정을 성공하였습니다.', color: 'emerald', timeout: 1500 })
  dialogTrigger.value = false
}

const selectDatabaseTable = () => {
  return formData.value.transporter === undefined
    ? 'keeping'
    : 'transportation'
}

</script>

<template>
  <AModal
    :modal-trigger="dialogTrigger"
    modal-overlay
    modal-prevent-close
    title="정보 수정"
    @close-dialog="() => dialogTrigger = false"
  >
    <BGForm
      :schema="schema"
      :state="formData"
      class="space-y-3"
      @submit="onSubmit"
    >
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
          v-model="formData.transport_status"
          :options="transportStatus"
          color="primary"
          value-attribute="id"
          option-attribute="code_name"
          placeholder="운송상태"
        />
      </BGFormGroup>
      <BGFormGroup
        :label="'주차위치'"
        name="garage_position"
        size="lg"
        required
      >
        <BGSelect
          v-model="formData.garage_position"
          :options="garagePosition"
          color="primary"
          value-attribute="id"
          option-attribute="code_name"
          placeholder="주차위치"
        />
      </BGFormGroup>
      <BGFormGroup
        :label="'차량번호'"
        name="car_number"
        size="lg"
        required
      >
        <BGInput
          v-model="formData.car_number"
          color="red"
          :placeholder="'차량번호를 입력해요'"
          aria-label="carNumber"
        />
      </BGFormGroup>
      <BGFormGroup
        :label="'차량모델'"
        name="car_model"
        size="lg"
        required
      >
        <BGInput
          v-model="formData.car_model"
          color="red"
          :placeholder="'차량모델을 입력해요'"
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
          :placeholder="'메모를 입력해요'"
          aria-label="memo"
        />
      </BGFormGroup>
      <BGFormGroup
        :label="startDateText"
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
            :button-text="formData.start_date ? format(formData.start_date, 'MMM do, yyyy', { locale: ko }) : `${startDateText}을 선택해줘요`"
          />
          <template #panel="{ close }">
            <ADatePicker
              v-model="formData.start_date"
              is-required
              @close="close"
            />
          </template>
        </BGPopover>
      </BGFormGroup>
      <BGFormGroup
        :label="endDateText"
        name="endDate"
        size="lg"
      >
        <BGPopover
          :popper="{ placement: 'bottom-start' }"
          :ui="{ trigger: 'w-fit' }"
        >
          <AButton
            use-leading
            icon-name="i-heroicons-calendar-days-20-solid"
            :button-text="formData.end_date ? format(formData.end_date, 'MMM do, yyyy', { locale: ko }) : `${endDateText}을 선택해줘요`"
          />
          <template #panel="{ close }">
            <ADatePicker
              v-model="formData.end_date"
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
          :placeholder="'성함을 입력해줘요'"
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
          :placeholder="'연락처를 입력해줘요'"
          aria-label="mobile"
        />
      </BGFormGroup>
      <BGFormGroup
        :label="'차량 이미지'"
        name="carPhotoName"
        size="lg"
      >
        <AButton
          use-leading
          icon-name="maki:scooter"
          :icon-size="24"
          :button-text="formData.car_photo_name ? formData.car_photo_name.split('car_photo/')[1] : '이미지 업로드'"
          @click:button="() => carImageUploadDialogTrigger = true"
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
          use-leading
          icon-name="maki:suitcase"
          :icon-size="24"
          :button-text="formData.luggage_photo_name ? formData.luggage_photo_name.split('luggage_photo/')[1] : '이미지 업로드'"
          @click:button="() => luggageImageUploadDialogTrigger = true"
        />
        <DialogImageUpload
          v-model:dialog-trigger="luggageImageUploadDialogTrigger"
          bucket-name="luggage_photo"
          @submit:image="(imageUrl: string) => submitImage('luggage_photo', imageUrl)"
          @close:dialog="(trigger:boolean) => luggageImageUploadDialogTrigger = trigger"
        />
      </BGFormGroup>
      <BGFormGroup
        :label="'추가적인 이미지'"
        name="extraPhotoName"
        size="lg"
      >
        <AButton
          use-leading
          icon-name="maki:police"
          :icon-size="24"
          :button-text="formData.extra_photo_name ? formData.extra_photo_name.split('extra_photo/')[1] : '이미지 업로드'"
          @click:button="() => extraImageUploadDialogTrigger = true"
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
          :button-text="'변경'"
          type="submit"
        />
      </div>
    </BGForm>
  </AModal>
</template>