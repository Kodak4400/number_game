import { useBtnClasses } from '@/composables/use-btn-classes'
import { storeKey } from '@/vueStore'
import { inject, ref, Ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { Render } from './use-render'

export type useBtnTest1Type = {
  label: Ref<string>
  classes: typeof useBtnClasses
  onClick: () => void
}

export function useBtnTest1(label: Ref<string>, color: Ref<string>) {
  const router = useRouter()
  const classes = useBtnClasses(color)

  const name = inject(storeKey) ?? ref('')
  watch(name, () => {
    color.value = name?.value ? 'primary' : 'disabled'
  })

  const onClick = () => {
    if (name?.value) {
      router.push(Render.GameStart)
    }
  }

  return {
    label,
    classes,
    onClick
  }
}
