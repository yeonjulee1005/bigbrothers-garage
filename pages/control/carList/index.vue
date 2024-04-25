<script setup lang="ts">

const toast = useToast()

const { updateData, deleteStorage, loadKeeping, loadTransportation } = useFetchComposable()
const { keepingAllData } = storeToRefs(useKeepingStore())
const { transportationAllData } = storeToRefs(useTransportationStore())

useHead({
  title: '보관차량 리스트'
})

definePageMeta({
  layout: 'control'
})

const selectButtonData = ref<SerializeObject | undefined>(undefined)
const transportationPage = ref(1)
const transportationPageCount = 10
const keepingPage = ref(1)
const keepingPageCount = 10
const editDataDialogTrigger = ref(false)

const transportationColumns = computed(() => [
  {
    key: 'transportStatus.code_name',
    label: '운송 상태',
    sortable: true
  },
  {
    key: 'car_number',
    label: '차량 번호'
  },
  {
    key: 'car_model',
    label: '기종',
    sortable: true
  },
  {
    key: 'garagePosition.code_name',
    label: '보관 위치',
    sortable: true
  },
  {
    key: 'transporter.name',
    label: '담당자',
    sortable: true
  },
  {
    key: 'transporter.car_number',
    label: '차량',
    sortable: true
  },
  {
    key: 'start_date',
    label: '운송 시작일',
    sortable: true
  },
  {
    key: 'end_date',
    label: '운송 종료일',
    sortable: true
  },
  {
    key: 'name',
    label: '손님'
  },
  {
    key: 'mobile',
    label: '손님핸드폰'
  },
  {
    key: 'actions',
    label: '설정'
  }
])

const keepingColumns = computed(() => [
  {
    key: 'transportStatus.code_name',
    label: '운송 상태',
    sortable: true
  },
  {
    key: 'car_number',
    label: '차량 번호'
  },
  {
    key: 'car_model',
    label: '기종',
    sortable: true
  },
  {
    key: 'garagePosition.code_name',
    label: '보관 위치',
    sortable: true
  },
  {
    key: 'start_date',
    label: '보관 시작일',
    sortable: true
  },
  {
    key: 'end_date',
    label: '보관 종료일',
    sortable: true
  },
  {
    key: 'name',
    label: '손님'
  },
  {
    key: 'mobile',
    label: '손님핸드폰'
  },
  {
    key: 'actions',
    label: '설정'
  }
])

const transportationRows = computed(() => {
  return transportationAllData.value.slice((transportationPage.value - 1) * transportationPageCount, transportationPage.value * transportationPageCount)
})

const keepingRows = computed(() => {
  return keepingAllData.value.slice((keepingPage.value - 1) * keepingPageCount, keepingPage.value * keepingPageCount)
})

const controller = (row: unknown) => [
  [{
    label: '수정',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => openEditDialog(row)
  }, {
    label: '삭제',
    icon: 'i-heroicons-trash',
    click: () => deleteData(row)
  }]
]

const tableUiOption = {
  wrapper: 'ring-2 dark:ring-zinc-200 rounded-lg m-4',
  divide: 'dark:divide-zinc-200',
  thead: 'break-keep',
  tbody: 'dark:divide-zinc-700'
}

const sortButtonStyleOption = {
  icon: 'i-heroicons-sparkles-20-solid',
  color: 'primary',
  variant: 'outline',
  size: 'xs',
  square: false,
  ui: { rounded: 'rounded-full' }
}

const openEditDialog = (row: unknown) => {
  selectButtonData.value = row
  editDataDialogTrigger.value = true
}

const deleteData = (row: SerializeObject) => {
  if (row.transporter) {
    deleteStorage('car_photo', row.car_photo_name.split('car_photo/')[1])
    deleteStorage('extra_photo_name', row.extra_photo_name.split('extra_photo/')[1])
    deleteStorage('luggage_photo', row.luggage_photo_name.split('luggage_photo/')[1])
    updateData(
      {
        car_photo_name: '',
        extra_photo_name: '',
        luggage_photo_name: '',
        garage_position: '6e478ca3-de02-47c9-a320-423ae8d03a67',
        transport_status: '0661badf-9160-4dd3-a286-9cb80d2f767b',
        class: 'line-through dark:bg-red-800 animate-pulse',
        deleted: true
      },
      row.id,
      selectDatabaseTable(row)
    )
  } else {
    deleteStorage('car_photo', row.car_photo_name.split('car_photo/')[1])
    deleteStorage('extra_photo_name', row.extra_photo_name.split('extra_photo/')[1])
    updateData(
      {
        car_photo_name: '',
        extra_photo_name: '',
        garage_position: '6e478ca3-de02-47c9-a320-423ae8d03a67',
        transport_status: '0661badf-9160-4dd3-a286-9cb80d2f767b',
        class: 'line-through dark:bg-red-800 animate-pulse',
        deleted: true
      },
      row.id,
      selectDatabaseTable(row)
    )
  }

  toast.add({ title: '삭제 했습니다.', color: 'emerald', timeout: 1500 })
}

const selectDatabaseTable = (row: SerializeObject) => {
  return row.transporter === undefined
    ? 'keeping'
    : 'transportation'
}

const loadData = () => {
  loadKeeping(true)
  loadTransportation(true)
}

loadData()

</script>

<template>
  <section>
    <BGTable
      :columns="transportationColumns"
      :rows="transportationRows"
      :sort-button="sortButtonStyleOption"
      :ui="tableUiOption"
    >
      <template #actions-data="{ row }">
        <BGDropdown
          :items="controller(row)"
          :ui="{ container: 'w-fit', padding: 'px-3', background: 'dark:bg-zinc-800' }"
        >
          <AButton
            custom-class="p-0"
            button-variant="ghost"
            use-leading
            icon-name="i-heroicons-ellipsis-horizontal-20-solid"
          />
        </BGDropdown>
      </template>
    </BGTable>
    <div class="flex justify-end mx-3 px-3 py-3.5 border-t dark:border-red-400">
      <BGPagination
        v-model="transportationPage"
        size="md"
        :max="5"
        show-first
        show-last
        :active-button="{ variant: 'outline' }"
        :inactive-button="{ color: 'gray' }"
        :page-count="transportationPageCount"
        :total="transportationAllData.length ?? 0"
        :ui="{ default: { activeButton: { color: 'red' } } }"
      />
    </div>
    <BGTable
      :columns="keepingColumns"
      :rows="keepingRows"
      :sort-button="sortButtonStyleOption"
      :ui="tableUiOption"
    >
      <template #actions-data="{ row }">
        <BGDropdown
          :items="controller(row)"
          :ui="{ container: 'w-fit', padding: 'px-3', background: 'dark:bg-zinc-800' }"
        >
          <AButton
            custom-class="p-0"
            button-variant="ghost"
            use-leading
            icon-name="i-heroicons-ellipsis-horizontal-20-solid"
          />
        </BGDropdown>
      </template>
    </BGTable>
    <div class="flex justify-end mx-3 px-3 py-3.5 border-t dark:border-red-400">
      <BGPagination
        v-model="keepingPage"
        size="md"
        :max="5"
        show-first
        show-last
        :active-button="{ variant: 'outline' }"
        :inactive-button="{ color: 'gray' }"
        :page-count="keepingPageCount"
        :total="keepingAllData.length ?? 0"
        :ui="{ default: { activeButton: { color: 'red' } } }"
      />
    </div>
    <DialogEditData
      v-model:dialog-trigger="editDataDialogTrigger"
      :select-data="selectButtonData"
      @update:data="loadData"
    />
  </section>
</template>
