<script setup lang="ts">

const { loadKeeping, loadTransportation } = useFetchComposable()
const { keepingAllData } = storeToRefs(useKeepingStore())
const { transportationAllData } = storeToRefs(useTransportationStore())

useHead({
  title: '보관차량 리스트'
})

definePageMeta({
  layout: 'control'
})

const transportationPage = ref(1)
const transportationPageCount = ref(10)
const keepingPage = ref(1)
const keepingPageCount = ref(10)

const transportationColumns = computed(() => [
  {
    key: 'transportStatus.code_name',
    label: '운송 상태',
    sortable: true
  },
  {
    key: 'car_number',
    label: '차량 번호',
    sortable: true
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
    label: '손님',
    sortable: true
  },
  {
    key: 'mobile',
    label: '손님핸드폰',
    sortable: true
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
    label: '차량 번호',
    sortable: true
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
    label: '손님',
    sortable: true
  },
  {
    key: 'mobile',
    label: '손님핸드폰',
    sortable: true
  },
  {
    key: 'actions',
    label: '설정'
  }
])

const items = (row: unknown) => [
  [{
    label: '수정',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => console.log('클릭', row)
  }, {
    label: '삭제',
    icon: 'i-heroicons-trash',
    click: () => console.log('클릭')
  }]
]

console.log(keepingAllData.value, transportationAllData.value)

loadKeeping(true)
loadTransportation(true)

</script>

<template>
  <section>
    <BGTable
      :columns="transportationColumns"
      :rows="transportationAllData"
      :ui="{ default: { sortButton: { class: 'break-keep' } }}"
    >
      <template #actions-data="{ row }">
        <BGDropdown :items="items(row)">
          <AButton
            button-variant="ghost"
            use-leading
            icon-name="i-heroicons-ellipsis-horizontal-20-solid"
          />
        </BGDropdown>
      </template>
    </BGTable>
    <div class="flex justify-end px-3 py-3.5 border-t border-zinc-200 dark:border-zinc-700">
      <BGPagination
        v-model="transportationPage"
        color="teal"
        size="md"
        :max="5"
        show-first
        show-last
        :active-button="{ variant: 'outline' }"
        :inactive-button="{ color: 'gray' }"
        :page-count="transportationPageCount"
        :total="transportationAllData.length ?? 0"
        :ui="{ default: { activeButton: { color: 'teal' } } }"
      />
    </div>
    <BGTable
      :columns="keepingColumns"
      :rows="keepingAllData"
      :ui="{ default: { sortButton: { class: 'break-keep' } }}"
    >
      <template #actions-data="{ row }">
        <BGDropdown :items="items(row)">
          <AButton
            button-variant="ghost"
            use-leading
            icon-name="i-heroicons-ellipsis-horizontal-20-solid"
          />
        </BGDropdown>
      </template>
    </BGTable>
    <div class="flex justify-end px-3 py-3.5 border-t border-zinc-200 dark:border-zinc-700">
      <BGPagination
        v-model="keepingPage"
        color="teal"
        size="md"
        :max="5"
        show-first
        show-last
        :active-button="{ variant: 'outline' }"
        :inactive-button="{ color: 'gray' }"
        :page-count="keepingPageCount"
        :total="keepingAllData.length ?? 0"
        :ui="{ default: { activeButton: { color: 'teal' } } }"
      />
    </div>
  </section>
</template>
