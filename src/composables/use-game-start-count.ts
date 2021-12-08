import { useInterval } from '@/composables/common/use-interval'
import { useTextClasses } from '@/composables/common/use-text-classes'
import { reactive, toRefs, watch } from 'vue'
import { useRouter } from 'vue-router'
import { Render } from './common/use-render'

export function useGameStartCount(props: { count: number; color: string; size: string, action: Function }) {
  const router = useRouter()
  const { count, color, size } = toRefs(
    reactive({
      count: props.count,
      color: props.color,
      size: props.size,
    }),
  )
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
