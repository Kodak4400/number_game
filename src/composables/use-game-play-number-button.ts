import { HTMLEvent } from '@/types/Event'
import { SetupContext } from 'vue'

export function useGamePlayNumberButton(props: { label: string, action: Function }, context: SetupContext<'click:number'[]>) {
  const onClick = (e: HTMLEvent<HTMLButtonElement>) => {
    context.emit('click:number', e.target.value)
  }

  return {
    onClick,
  }
}
