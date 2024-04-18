<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    keepingData?: null,
    controllable?: boolean
  }>(),
  {
    keepingData: null,
    controllable: false
  }
)

const emits = defineEmits([
  'click:position'
])

const clickPositionButton = (buttonText: string) => {
  if (!props.controllable) {
    return
  }
  emits('click:position', buttonText)
}

console.log('left side', props.keepingData)

</script>

<template>
  <div>
    <DisplayTitle title="작은 입구" />
    <div class="grid grid-rows-11 grid-flow-col grid-cols-9 gap-2">
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class=""
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'10'"
        @click:button="clickPositionButton('GP010')"
      />
      <!-- <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'10'"
        @click:button="clickPositionButton('GP010')"
      /> -->
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'9'"
        @click:button="clickPositionButton('GP009')"
      />
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'8'"
        @click:button="clickPositionButton('GP008')"
      />
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'7'"
        @click:button="clickPositionButton('GP007')"
      />
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'6'"
        @click:button="clickPositionButton('GP006')"
      />
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'5'"
        @click:button="clickPositionButton('GP005')"
      />
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'4'"
        @click:button="clickPositionButton('GP004')"
      />
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'3'"
        @click:button="clickPositionButton('GP003')"
      />
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'2'"
        @click:button="clickPositionButton('GP002')"
      />
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'1'"
        @click:button="clickPositionButton('GP001')"
      />
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'0'"
        @click:button="clickPositionButton('GP000')"
      />
      <AButton
        class="row-span-2 flex justify-center items-center p-1"
        custom-class="bg-indigo-900"
        button-color="indigo"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'1-1'"
        @click:button="clickPositionButton('TP001')"
      />
      <AButton
        class="row-span-2 flex justify-center items-center p-1"
        custom-class="bg-indigo-900"
        button-color="indigo"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'1-3'"
        @click:button="clickPositionButton('TP003')"
      />
      <AButton
        class="row-span-2 flex justify-center items-center p-1"
        custom-class="bg-indigo-900"
        button-color="indigo"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'1-5'"
        @click:button="clickPositionButton('TP005')"
      />
      <AButton
        class="row-span-2 flex justify-center items-center p-1"
        custom-class="bg-indigo-900"
        button-color="indigo"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'1-7'"
        @click:button="clickPositionButton('TP007')"
      />
      <AButton
        class="row-span-2 flex justify-center items-center p-1"
        custom-class="bg-indigo-900"
        button-color="indigo"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'1-9'"
        @click:button="clickPositionButton('TP009')"
      />
      <AButton
        class="row-span-2 row-end-4 flex justify-center items-center p-1"
        custom-class="bg-indigo-900"
        button-color="indigo"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'1-2'"
        @click:button="clickPositionButton('TP002')"
      />
      <AButton
        class="row-span-2 row-end-6 flex justify-center items-center p-1"
        custom-class="bg-indigo-900"
        button-color="indigo"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'1-4'"
        @click:button="clickPositionButton('TP004')"
      />
      <AButton
        class="row-span-2 row-end-8 flex justify-center items-center p-1"
        custom-class="bg-indigo-900"
        button-color="indigo"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'1-6'"
        @click:button="clickPositionButton('TP006')"
      />
      <AButton
        class="row-span-2 row-end-10 flex justify-center items-center p-1"
        custom-class="bg-indigo-900"
        button-color="indigo"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'1-8'"
        @click:button="clickPositionButton('TP008')"
      />
      <AButton
        class="row-span-2 row-end-12 flex justify-center items-center p-1"
        custom-class="bg-indigo-900"
        button-color="indigo"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'1-10'"
        @click:button="clickPositionButton('TP010')"
      />
      <div class="row-span-12" />
      <AButton
        class="row-span-2 flex justify-center items-center p-1"
        custom-class="bg-indigo-900"
        button-color="indigo"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'2-1'"
        @click:button="clickPositionButton('TP011')"
      />
      <AButton
        class="row-span-2 flex justify-center items-center p-1"
        custom-class="bg-indigo-900"
        button-color="indigo"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'2-3'"
        @click:button="clickPositionButton('TP013')"
      />
      <AButton
        class="row-span-2 flex justify-center items-center p-1"
        custom-class="bg-indigo-900"
        button-color="indigo"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'2-5'"
        @click:button="clickPositionButton('TP015')"
      />
      <AButton
        class="row-span-2 flex justify-center items-center p-1"
        custom-class="bg-indigo-900"
        button-color="indigo"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'2-7'"
        @click:button="clickPositionButton('TP017')"
      />
      <AButton
        class="row-span-2 flex justify-center items-center p-1"
        custom-class="bg-indigo-900"
        button-color="indigo"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'2-9'"
        @click:button="clickPositionButton('TP019')"
      />
      <AButton
        class="row-span-2 row-end-4 flex justify-center items-center p-1"
        custom-class="bg-indigo-900"
        button-color="indigo"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'2-2'"
        @click:button="clickPositionButton('TP012')"
      />
      <AButton
        class="row-span-2 row-end-6 flex justify-center items-center p-1"
        custom-class="bg-indigo-900"
        button-color="indigo"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'2-4'"
        @click:button="clickPositionButton('TP014')"
      />
      <AButton
        class="row-span-2 row-end-8 flex justify-center items-center p-1"
        custom-class="bg-indigo-900"
        button-color="indigo"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'2-6'"
        @click:button="clickPositionButton('TP016')"
      />
      <AButton
        class="row-span-2 row-end-10 flex justify-center items-center p-1"
        custom-class="bg-indigo-900"
        button-color="indigo"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'2-8'"
        @click:button="clickPositionButton('TP018')"
      />
      <AButton
        class="row-span-2 row-end-12 flex justify-center items-center p-1"
        custom-class="bg-indigo-900"
        button-color="indigo"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'2-10'"
        @click:button="clickPositionButton('TP020')"
      />
      <AButton
        class="col-span-2 row-start-1 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'11'"
        @click:button="clickPositionButton('GP011')"
      />
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'12'"
        @click:button="clickPositionButton('GP012')"
      />
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'13'"
        @click:button="clickPositionButton('GP013')"
      />
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'14'"
        @click:button="clickPositionButton('GP014')"
      />
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'15'"
        @click:button="clickPositionButton('GP015')"
      />
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'16'"
        @click:button="clickPositionButton('GP016')"
      />
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'17'"
        @click:button="clickPositionButton('GP017')"
      />
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'18'"
        @click:button="clickPositionButton('GP018')"
      />
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'19'"
        @click:button="clickPositionButton('GP019')"
      />
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'20'"
        @click:button="clickPositionButton('GP020')"
      />
      <AButton
        class="col-span-2 flex justify-center items-center p-1"
        custom-class="bg-orange-800"
        button-color="orange"
        button-text-class="text-zinc-200 text-xs break-all mx-1.5"
        :button-text="'21'"
        @click:button="clickPositionButton('GP021')"
      />
    </div>
  </div>
</template>
