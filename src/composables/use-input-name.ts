import { HTMLEvent } from '@/types/Event'
import { SetupContext } from 'vue'

export function useInputName(props: { label: string; placeholder: string; name: string, action: Function }, context:SetupContext<"input:name"[]>) {
  const onInput = (e: HTMLEvent<HTMLButtonElement>) => {
    context.emit('input:name', e.target.value)
  }

  return {
    onInput,
  }
}
