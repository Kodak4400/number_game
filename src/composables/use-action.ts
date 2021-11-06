import { useChangeMode } from '@/composables/use-change-mode'
import { useGoToGameStart } from '@/composables/use-go-to-game-start'

const actions: Array<Function> = [
  useChangeMode,
  useGoToGameStart,
]

export function useAction(actionName: string, args: Array<unknown> = []) {
  const action = actions.find(e => e.name === actionName)
  if (action) {
    return action(...args)
  }
  return undefined
}
