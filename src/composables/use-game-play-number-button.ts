import { HTMLEvent } from '@/types/Event'
import { Ref, SetupContext } from 'vue'

export function useGamePlayNumberButton(label: Ref<string>, context: SetupContext<"click:number"[]>) {
  const onClick = (e: HTMLEvent<HTMLButtonElement>) => {
    context.emit('click:number', e.target.value)
  }

  return {
    label,
    onClick,
  }
}
