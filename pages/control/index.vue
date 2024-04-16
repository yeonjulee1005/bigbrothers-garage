<script setup lang="ts">

useHead({
  title: '게러지 현황보기'
})

definePageMeta({
  layout: 'control'
})

const isOpen = ref(false)
const selectPosition = ref('')

const clickGaragePosition = (buttonText: string) => {
  selectPosition.value = buttonText
  isOpen.value = true
}

</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <BGCard
      class="flex flex-col lg:w-[500px] m-4"
      :ui="{ body: { base: 'w-full' }, ring: 'ring-2 ring-zinc-800 dark:ring-zinc-200', shadow: 'shadow-md shadow-zinc-200/40', divide: 'divide-zinc-800 dark:divide-zinc-200', rounded: 'rounded-lg', background: 'bg-zinc-50/60 dark:bg-zinc-800/60' }"
    >
      <template #header>
        클릭하면 위치 이동 또는 상태변경 모달 표시
        <DisplayLeftSide
          controllable
          @click:position="(buttonText: string) => clickGaragePosition(buttonText)"
        />
      </template>
      <DisplayTitle title="화장실 측" />
      <div class="grid grid-rows-11 grid-flow-col grid-cols-9 gap-2">
        <AButton
          class="row-span-2 row-start-4 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'3-8'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-orange-800"
          button-color="orange"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'27'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-orange-800"
          button-color="orange"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'28'"
        />
        <div class="row-span-11" />
        <AButton
          class="row-span-2 row-start-3 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'4-1'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'4-2'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'4-3'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'4-4'"
        />
        <AButton
          class="row-span-2 row-start-4 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'4-5'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'4-6'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'4-7'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'4-8'"
        />
        <AButton
          class="row-span-2 row-start-3 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'4-9'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'4-10'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'4-11'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'4-12'"
        />
        <AButton
          class="row-span-2 row-start-4 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'4-13'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'4-14'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'4-15'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'4-16'"
        />
        <AButton
          class="col-span-2 col-end-10 flex justify-center items-center p-1"
          custom-class="bg-orange-800"
          button-color="orange"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'22'"
        />
        <AButton
          class="col-span-2 col-end-10 flex justify-center items-center p-1"
          custom-class="bg-orange-800"
          button-color="orange"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'23'"
        />
        <AButton
          class="col-span-2 col-end-10 flex justify-center items-center p-1"
          custom-class="bg-orange-800"
          button-color="orange"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'24'"
        />
        <AButton
          class="col-span-2 col-end-10 flex justify-center items-center p-1"
          custom-class="bg-orange-800"
          button-color="orange"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'25'"
        />
        <AButton
          class="col-span-2 col-end-10 flex justify-center items-center p-1"
          custom-class="bg-orange-800"
          button-color="orange"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'26'"
        />
        <AButton
          class="col-span-2 col-end-10 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'3-1'"
        />
        <AButton
          class="col-span-2 col-end-10 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'3-2'"
        />
        <AButton
          class="col-span-2 col-end-10 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'3-3'"
        />
        <AButton
          class="col-span-2 col-end-10 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'3-4'"
        />
        <AButton
          class="row-span-2 row-end-12 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'3-5'"
        />
        <AButton
          class="row-span-2 row-end-12 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'3-6'"
        />
        <AButton
          class="row-span-2 row-end-12 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'3-7'"
        />
      </div>
      <template #footer>
        <DisplayTitle title="야외" />
        <div class="grid grid-rows-13 grid-flow-col grid-cols-2 gap-2">
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-1'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-2'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-3'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-4'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-5'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-6'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-7'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-8'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-9'"
          />
          <div class="row-span-1 col-start-1" />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-10'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-11'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5-12'"
          />
          <DisplayTitle
            title="게러지 건물"
            title-class="flex justify-center items-center row-span-12 row-start-2 col-start-2 border-2 rounded-md mx-2"
          />
        </div>
      </template>
    </BGCard>
    <AModal
      :modal-trigger="isOpen"
      controller
      modal-overlay
      @close-dialog="() => isOpen = false"
    >
      <div class="p-3">
        {{ selectPosition }}<br>
        위치이동<br>
        차량 상세 수정
      </div>
    </AModal>
  </div>
</template>
