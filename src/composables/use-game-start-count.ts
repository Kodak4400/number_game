import { useInterval } from '@/composables/common/use-Interval'
import { useTextClasses } from '@/composables/common/use-text-classes'
import { Ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { Render } from './common/use-render'

export function useGameStartCount(count: Ref<number>, color: Ref<string>, size: Ref<string>) {
  const router = useRouter()
  const classes = useTextClasses(color, size)

  watch(count, () => {
    if (count.value === 0) {
      router.push(Render.GamePlay)
    }
  })

  useInterval(() => {
    count.value--
  }, 1000)

  return {
    count,
    classes,
  }
}
