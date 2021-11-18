import { computed, Ref } from 'vue'

export const useTimerAction = (action: string, color: Ref<string>, count: Ref<number>) => computed(() => {
  switch (action) {
    case 'useGoToGamePlay':
      break
    case 'useGoToGameEnd':
      if (count.value < 10) {
        color.value = 'warning'
      }
      if (count.value < 5) {
        color.value = 'error'
      }
      break
    default:
      break
  }

  return count.value
})