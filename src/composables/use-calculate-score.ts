import { useTextClasses } from '@/composables/common/use-text-classes'
import { computed, reactive, Ref, SetupContext } from 'vue'

const scoreHistory = reactive<Array<number>>([])
export function useCalculateScore(
  name: string,
  score: Ref<number>,
  color: Ref<string>,
  size: Ref<string>,
  context: SetupContext<'total:score'[]>,
) {
  const classes = useTextClasses(color, size)

  const viewScore = computed(() => {
    console.log(score.value)
    if (score.value === 99) return 0
    // 0なら1万点!!! 他は数字 * 1000倍にする!!!（この仕様良いのか!?）
    scoreHistory.push(score.value === 0 ? 10000 : score.value * 1000)
    context.emit('total:score', scoreHistory)
    const total = scoreHistory.reduce((acc, cur) => acc + cur, 0)
    return total
  })

  return {
    name,
    classes,
    viewScore,
  }
}