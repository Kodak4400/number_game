import { computed } from 'vue'

export function useChangeMode() {
  const ChangeLabel = 'KIDS MODE'
  const ChangeButton = computed(() => ({
    'nes-btn': true,
    'is-success': true,
  }))

  return {
    ChangeLabel,
    ChangeButton,
  }
}
