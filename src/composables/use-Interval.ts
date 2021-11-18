import { onBeforeUnmount } from 'vue'

export const useInterval = (func: () => void, ms: number) => {
  const timer = window.setInterval(func, ms)

  const clear = () => {
    window.clearInterval(timer)
  }

  onBeforeUnmount(clear)

  return { clear }
}
