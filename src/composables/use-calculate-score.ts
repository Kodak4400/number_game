import { reactive, SetupContext } from 'vue'

const scoreHistory = reactive<Array<number>>([])
export const useCalculateScore = (score: number, context: SetupContext<'total:score'[]>) => {
  console.log(score)
  if (score === 99) return 0
  // 0なら1万点!!! 他は数字 * 1000倍にする!!!（この仕様良いのか!?）
  scoreHistory.push(score === 0 ? 10000 : score * 1000)
  context.emit('total:score', scoreHistory)
  const total = scoreHistory.reduce((acc, cur) => acc + cur, 0)
  return total
}

