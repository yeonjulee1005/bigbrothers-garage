<script setup lang="ts">

useHead({
  title: '게러지 현황보기'
})

definePageMeta({
  layout: 'control'
})

</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <BGCard
      class="flex flex-col lg:w-[500px] m-4"
      :ui="{ body: { base: 'w-full' }, ring: 'ring-2 ring-zinc-800 dark:ring-zinc-200', shadow: 'shadow-md shadow-zinc-200/40', divide: 'divide-zinc-800 dark:divide-zinc-200', rounded: 'rounded-lg', background: 'bg-zinc-50/60 dark:bg-zinc-800/60' }"
    >
      <template #header>
        클릭하면 위치 이동 또는 상태변경 툴팁 표시
        <div class="p-3">
          작은 입구쪽
        </div>
        <div class="grid grid-rows-11 grid-flow-col grid-cols-9 gap-2">
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'10'"
          />
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'9'"
          />
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'8'"
          />
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'7'"
          />
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'6'"
          />
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5'"
          />
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'4'"
          />
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'3'"
          />
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'2'"
          />
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'1'"
          />
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'0'"
          />
          <AButton
            class="row-span-2 flex justify-center items-center p-1"
            custom-class="bg-indigo-900"
            button-color="indigo"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'브아1'"
          />
          <AButton
            class="row-span-2 flex justify-center items-center p-1"
            custom-class="bg-indigo-900"
            button-color="indigo"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'브아2'"
          />
          <AButton
            class="row-span-2 flex justify-center items-center p-1"
            custom-class="bg-indigo-900"
            button-color="indigo"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'브아3'"
          />
          <AButton
            class="row-span-2 flex justify-center items-center p-1"
            custom-class="bg-indigo-900"
            button-color="indigo"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'브아4'"
          />
          <AButton
            class="row-span-2 flex justify-center items-center p-1"
            custom-class="bg-indigo-900"
            button-color="indigo"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'브아5'"
          />
          <AButton
            class="row-span-2 row-end-4 flex justify-center items-center p-1"
            custom-class="bg-indigo-900"
            button-color="indigo"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'RS'"
          />
          <AButton
            class="row-span-2 row-end-6 flex justify-center items-center p-1"
            custom-class="bg-indigo-900"
            button-color="indigo"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'RS2'"
          />
          <AButton
            class="row-span-2 row-end-8 flex justify-center items-center p-1"
            custom-class="bg-indigo-900"
            button-color="indigo"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'RS3'"
          />
          <AButton
            class="row-span-2 row-end-10 flex justify-center items-center p-1"
            custom-class="bg-indigo-900"
            button-color="indigo"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'RS4'"
          />
          <AButton
            class="row-span-2 row-end-12 flex justify-center items-center p-1"
            custom-class="bg-indigo-900"
            button-color="indigo"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'RS5'"
          />
          <div class="row-span-12" />
          <AButton
            class="row-span-2 flex justify-center items-center p-1"
            custom-class="bg-indigo-900"
            button-color="indigo"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'브아1'"
          />
          <AButton
            class="row-span-2 flex justify-center items-center p-1"
            custom-class="bg-indigo-900"
            button-color="indigo"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'브아2'"
          />
          <AButton
            class="row-span-2 flex justify-center items-center p-1"
            custom-class="bg-indigo-900"
            button-color="indigo"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'브아3'"
          />
          <AButton
            class="row-span-2 flex justify-center items-center p-1"
            custom-class="bg-indigo-900"
            button-color="indigo"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'브아4'"
          />
          <AButton
            class="row-span-2 flex justify-center items-center p-1"
            custom-class="bg-indigo-900"
            button-color="indigo"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'브아5'"
          />
          <AButton
            class="row-span-2 row-end-4 flex justify-center items-center p-1"
            custom-class="bg-indigo-900"
            button-color="indigo"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'RS'"
          />
          <AButton
            class="row-span-2 row-end-6 flex justify-center items-center p-1"
            custom-class="bg-indigo-900"
            button-color="indigo"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'RS2'"
          />
          <AButton
            class="row-span-2 row-end-8 flex justify-center items-center p-1"
            custom-class="bg-indigo-900"
            button-color="indigo"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'RS3'"
          />
          <AButton
            class="row-span-2 row-end-10 flex justify-center items-center p-1"
            custom-class="bg-indigo-900"
            button-color="indigo"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'RS4'"
          />
          <AButton
            class="row-span-2 row-end-12 flex justify-center items-center p-1"
            custom-class="bg-indigo-900"
            button-color="indigo"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'RS5'"
          />
          <AButton
            class="col-span-2 row-start-1 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'11'"
          />
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'12'"
          />
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'13'"
          />
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'14'"
          />
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'15'"
          />
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'16'"
          />
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'17'"
          />
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'18'"
          />
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'19'"
          />
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'20'"
          />
          <AButton
            class="col-span-2 flex justify-center items-center p-1"
            custom-class="bg-orange-800"
            button-color="orange"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'21'"
          />
        </div>
      </template>
      <div class="p-3">
        화장실쪽
      </div>
      <div class="grid grid-rows-11 grid-flow-col grid-cols-10 gap-2">
        <AButton
          class="row-span-2 row-start-4 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'a'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-orange-800"
          button-color="orange"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'28'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-orange-800"
          button-color="orange"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'27'"
        />
        <div class="row-span-11" />
        <AButton
          class="row-span-2 row-start-3 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'d'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'e'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'f'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'g'"
        />
        <AButton
          class="row-span-2 row-start-4 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'d'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'e'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'f'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'g'"
        />
        <AButton
          class="row-span-2 row-start-3 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'d'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'e'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'f'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'g'"
        />
        <AButton
          class="row-span-2 row-start-4 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'d'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'e'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'f'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'g'"
        />
        <div class="row-span-11" />
        <AButton
          class="col-span-2 col-end-11 flex justify-center items-center p-1"
          custom-class="bg-orange-800"
          button-color="orange"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'22'"
        />
        <AButton
          class="col-span-2 col-end-11 flex justify-center items-center p-1"
          custom-class="bg-orange-800"
          button-color="orange"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'23'"
        />
        <AButton
          class="col-span-2 col-end-11 flex justify-center items-center p-1"
          custom-class="bg-orange-800"
          button-color="orange"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'24'"
        />
        <AButton
          class="col-span-2 col-end-11 flex justify-center items-center p-1"
          custom-class="bg-orange-800"
          button-color="orange"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'25'"
        />
        <AButton
          class="col-span-2 col-end-11 flex justify-center items-center p-1"
          custom-class="bg-orange-800"
          button-color="orange"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'26'"
        />
        <AButton
          class="col-span-2 col-end-11 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'a'"
        />
        <AButton
          class="col-span-2 col-end-11 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'7'"
        />
        <AButton
          class="col-span-2 col-end-11 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'8'"
        />
        <AButton
          class="col-span-2 col-end-11 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'9'"
        />
        <AButton
          class="row-span-2 row-end-12 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'21'"
        />
        <AButton
          class="row-span-2 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'21'"
        />
        <AButton
          class="row-span-2 row-end-12 flex justify-center items-center p-1"
          custom-class="bg-indigo-900"
          button-color="indigo"
          button-text-class="text-zinc-200 text-xs break-all mx-1.5"
          :button-text="'21'"
        />
      </div>
      <template #footer>
        <div class="p-3">
          야외
        </div>
        <div class="grid grid-rows-13 grid-flow-col grid-cols-2 gap-2">
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'1'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'2'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'3'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'4'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'5'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'6'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'6'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'6'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'6'"
          />
          <div class="row-span-1 col-start-1" />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'6'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'6'"
          />
          <AButton
            class="row-span-1 col-start-1 flex justify-center items-center p-1"
            custom-class="bg-red-700"
            button-color="red"
            button-text-class="text-zinc-200 text-xs break-all mx-1.5"
            :button-text="'6'"
          />
          <div class="flex justify-center items-center row-span-12 row-start-2 col-start-2 border-2 rounded-md mx-2">
            게러지 건물
          </div>
        </div>
      </template>
    </BGCard>
  </div>
</template>
