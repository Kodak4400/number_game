import { useBtnClasses } from '@/composables/common/use-btn-classes'
import { reactive, toRefs } from 'vue'

class Store {
  constructor(private label: string, private color: string) {}
  get() {
    return {
      label: this.label,
      color: this.color,
    }
  }
}

let store: Store
export function useChangeModeButton(props: { label: string; color: string; action: Function }) {
  const { label, color } = toRefs(
    reactive({
      label: props.label,
      color: props.color,
    }),
  )
  const classes = useBtnClasses(color)

  const onClick = () => {
    if (!store) {
      store = new Store(label.value, color.value)
    }
    label.value = store.get().label !== label.value ? store.get().label : 'KIDS MODE'
    color.value = store.get().color !== color.value ? store.get().color : 'success'
  }

  return {
    label,
    classes,
    onClick,
  }
}

// export function useChangeModeButton(label: Ref<string>, color: Ref<string>) {
//   const classes = useBtnClasses(color)

//   const onClick = () => {
//     console.log(label.value)
//     if (!store) {
//       store = new Store(label.value, color.value)
//     }
//     label.value = store.get().label !== label.value ? store.get().label : 'KIDS MODE'
//     color.value = store.get().color !== color.value ? store.get().color : 'success'
//   }

//   return {
//     label,
//     classes,
//     onClick,
//   }
// }
