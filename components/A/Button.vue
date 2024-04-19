<script setup lang="ts">
import type { ButtonSize, ButtonVariant } from '#ui/types'

withDefaults(
  defineProps<{
    customClass?: string,
    roundButton?: boolean,
    buttonDisabled?: boolean,
    buttonPadding?: boolean,
    buttonBlock?: boolean,
    buttonColor?: string,
    buttonSize?: ButtonSize | undefined,
    buttonVariant?: ButtonVariant | undefined,
    buttonLabel?: string,
    useLeading?: boolean,
    iconName?: string,
    imageSrc?: string,
    iconSize?: number,
    imageSize?: number,
    buttonTextClass?: string,
    buttonText?: string
  }>(),
  {
    customClass: '',
    roundButton: false,
    buttonDisabled: false,
    buttonPadding: true,
    buttonBlock: false,
    buttonColor: 'red',
    buttonSize: 'lg',
    buttonVariant: 'outline',
    buttonLabel: 'button',
    useLeading: false,
    iconName: '',
    imageSrc: '',
    iconSize: 24,
    imageSize: 36,
    buttonTextClass: '',
    buttonText: ''
  }
)

defineEmits([
  'click:button',
  'mouseenter:button',
  'mouseleave:button'
])

</script>
<template>
  <BGButton
    :class="customClass"
    :ui="roundButton ? { rounded: 'rounded-full', variant: { outline: 'ring-2' } } : { variant: { outline: 'ring-2' } }"
    :disabled="buttonDisabled"
    :padding="buttonPadding"
    :block="buttonBlock"
    :color="buttonColor"
    :size="buttonSize"
    :variant="buttonVariant"
    :aria-label="buttonLabel"
    @click="$emit('click:button')"
    @mouseenter="$emit('mouseenter:button')"
    @mouseleave="$emit('mouseleave:button')"
  >
    <template
      v-if="useLeading"
      #leading
    >
      <Icon
        v-if="iconName"
        :name="iconName"
        :width="iconSize"
        :height="iconSize"
      />
      <nuxt-img
        v-if="imageSrc"
        :src="imageSrc"
        format="webp"
        loading="lazy"
        :width="imageSize"
        :height="imageSize"
        alt="image"
        :draggable="false"
        @contextmenu.prevent
      />
    </template>
    <span
      v-if="buttonText"
      :class="buttonTextClass"
    >
      {{ buttonText }}
    </span>
  </BGButton>
</template>
