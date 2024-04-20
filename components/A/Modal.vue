<script setup lang="ts">

const props = withDefaults(
  defineProps<{
    modalTrigger?: boolean,
    controller?: boolean,
    modalOverlay?: boolean,
    title?: string
  }>(),
  {
    modalTrigger: false,
    controller: false,
    modalOverlay: false,
    title: ''
  }
)

const emits = defineEmits([
  'close-dialog'
])

const openTrigger = ref(false)

const modalUiOption = computed(() => {
  return props.controller
    ? { width: 'w-[300px]', container: 'items-center', overlay: { background: 'dark:bg-stone-800/60' } }
    : { width: 'w-full', container: 'items-center' }
})

const modalCardUiOption = ref({
  ring: 'ring-1 ring-zinc-800 dark:ring-zinc-200',
  divide: 'divide-zinc-800 dark:divide-zinc-200',
  background: 'bg-zinc-50/60 dark:bg-stone-800/60',
  header: { padding: 'p-2 sm:px-2' }
})

watch(() => props.modalTrigger, (value) => {
  openTrigger.value = value
}, { immediate: true })

watch(() => openTrigger.value, (value) => {
  if (!value) {
    emits('close-dialog')
  }
}, { immediate: true })

</script>

<template>
  <BGModal
    v-model="openTrigger"
    :overlay="modalOverlay"
    :ui="modalUiOption"
  >
    <BGCard :ui="modalCardUiOption">
      <template #header>
        <div class="flex justify-between items-center pl-4">
          <span
            v-if="title"
            class="text-lg font-bold"
          >
            {{ title }}
          </span>
          <div v-else />
          <AButton
            button-variant="ghost"
            use-leading
            :icon-size="20"
            icon-name="maki:cross"
            @click="openTrigger = false"
          />
        </div>
      </template>
      <slot />
    </BGCard>
  </BGModal>
</template>
