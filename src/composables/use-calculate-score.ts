import { useTextClasses } from '@/composables/common/use-text-classes'
import { computed, reactive, SetupContext, toRefs } from 'vue'

const scoreHistory = reactive<Array<number>>([])
export function useCalculateScore(
  props: {
    name: string,
    score: number,
    color: string,
    size: string,
    action: Function
  },
  context: SetupContext<'total:score'[]>,
) {
  const {color, size} = toRefs(reactive({
    color: props.color,
    size: props.size,
  }))
  const classes = useTextClasses(color, size)

  const viewScore = computed(() => {
    if (props.score === 99) return 0
    // 0なら1万点!!! 他は数字 * 1000倍にする!!!（この仕様良いのか!?）
    scoreHistory.push(props.score === 0 ? 10000 : props.score * 1000)
    const total = scoreHistory.reduce((acc, cur) => acc + cur, 0)
    context.emit('total:score', scoreHistory)
    return total
  })

  return {
    name: props.name,
    classes,
    viewScore,
  }
}