import { useBtnClasses } from '@/composables/common/use-btn-classes'
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { Render } from './common/use-render'

export function useGameMainBackButton(props: { label : string, color: string, action: Function }) {
  const { label, color } = toRefs(
    reactive({
      label: props.label,
      color: props.color,
    }),
  )
  const router = useRouter()
  const classes = useBtnClasses(color)

  const onClick = () => {
    router.push(Render.Main)
  }

  return {
    label,
    classes,
    onClick,
  }
}
