import { computed, Ref } from 'vue'

export const isBtnColorValid = (value: string) =>
  ['primary', 'success', 'warning', 'error', 'disabled'].indexOf(value) !== -1

export const useBtnClasses = (color: Ref<string>) =>
  computed(() => ({
    'nes-btn': true,
    'is-primary': color.value === 'primary' ? true : false,
    'is-success': color.value === 'success' ? true : false,
    'is-warning': color.value === 'warning' ? true : false,
    'is-error': color.value === 'error' ? true : false,
    'is-disabled': color.value === 'disabled' ? true : false,
  }))
