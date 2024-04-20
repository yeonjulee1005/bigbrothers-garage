<script setup lang="ts">

const modalTrigger = ref(false)

const props = withDefaults(
  defineProps<{
    dialogTrigger?: boolean,
    fullScreen?: boolean,
    preventClose?: boolean,
    dialogTitleClass?: string,
    title?: string,
    doubleFirstText?: string,
    doubleSecondText?: string,
    hideDoubleButton?: boolean,
    hideFirstButton?: boolean,
    hideSecondButton?: boolean,
    disableFirstButton?: boolean
  }>(),
  {
    dialogTrigger: false,
    fullScreen: false,
    preventClose: false,
    dialogTitleClass: '',
    title: '',
    doubleFirstText: '',
    doubleSecondText: '',
    hideDoubleButton: false,
    hideFirstButton: false,
    hideSecondButton: false,
    disableFirstButton: false
  }
)

const emits = defineEmits([
  'close-dialog',
  'click-first-button',
  'click-second-button'
])

const modalCardUiOption = ref({
  ring: 'ring-1 ring-zinc-800 dark:ring-zinc-200',
  divide: 'divide-zinc-800 dark:divide-zinc-200',
  background: 'bg-zinc-50/60 dark:bg-stone-800/60',
  header: { padding: 'p-2 sm:px-2' }
})


watch(() => props.dialogTrigger, (value) => {
  modalTrigger.value = value
}, { immediate: true })

watch(() => modalTrigger.value, (value) => {
  if (!value) {
    emits('close-dialog')
  }
}, { immediate: true })

</script>

<template>
  <BGModal
    v-model="modalTrigger"
    :fullscreen="fullScreen"
    overlay
    :prevent-close="preventClose"
    :ui="{width: 'w-[300px]'}"
  >
    <BGCard :ui="modalCardUiOption">
      <template #header>
        <div
          v-if="title"
          class="flex items-center justify-between"
        >
          <span :class="dialogTitleClass">
            {{ title }}
          </span>
          <AButton
            button-variant="ghost"
            use-leading
            icon-name="line-md:menu-to-close-alt-transition"
            @click="modalTrigger = false"
          />
        </div>
      </template>
      <slot />
      <template
        v-if="!hideDoubleButton"
        #footer
      >
        <div class="flex justify-end gap-4">
          <AButton
            v-if="!hideFirstButton"
            :button-disabled="disableFirstButton"
            button-size="lg"
            :button-text="doubleFirstText"
            @click:button="emits('click-first-button')"
          />
          <AButton
            v-if="!hideSecondButton"
            button-size="lg"
            :button-text="doubleSecondText"
            @click:button="emits('click-second-button')"
          />
        </div>
      </template>
    </BGCard>
  </BGModal>
</template>