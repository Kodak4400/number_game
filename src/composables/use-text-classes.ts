import { computed, Ref } from 'vue'

export const isTextColorValid = (value: string) =>
  ['primary', 'success', 'warning', 'error', 'disabled'].indexOf(value) !== -1

export const isTextSizeValid = (value: string) => ['small', 'medium', 'large'].indexOf(value) !== -1

export const useTextClasses = (color: Ref<string>, size: Ref<string>) =>
  computed(() => ({
    'nes-text': true,
    'is-primary': color.value === 'primary' ? true : false,
    'is-success': color.value === 'success' ? true : false,
    'is-warning': color.value === 'warning' ? true : false,
    'is-error': color.value === 'error' ? true : false,
    'is-disabled': color.value === 'disabled' ? true : false,
    large: size.value === 'large' ? true : false,
  }))
