import { useBtnClasses } from '@/composables/common/use-btn-classes'
import { storeKey } from '@/vueStore'
import { inject, reactive, ref, toRefs, watch } from 'vue'
import { useRouter } from 'vue-router'
import { Render } from './common/use-render'

export function useGameStartButton(props: { label : string, color: string, action: Function }) {
  const { label, color } = toRefs(
    reactive({
      label: props.label,
      color: props.color,
    }),
  )
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
    onClick,
  }
}

// export function useGameStartButton(label: Ref<string>, color: Ref<string>) {
//   const router = useRouter()
//   const classes = useBtnClasses(color)

//   const name = inject(storeKey) ?? ref('')
//   watch(name, () => {
//     color.value = name?.value ? 'primary' : 'disabled'
//   })

//   const onClick = () => {
//     if (name?.value) {
//       router.push(Render.GameStart)
//     }
//   }

//   return {
//     label,
//     classes,
//     onClick,
//   }
// }
