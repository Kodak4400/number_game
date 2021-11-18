<template>
  <button type="button" :class="classes" @click="onClick">{{ label }}</button>
</template>

<script lang="ts">
import { inject, reactive, ref, toRefs, computed, defineComponent, watch} from 'vue'
import { useChangeMode } from '@/composables/use-change-mode'
import { Render } from '@/composables/use-render'
import { useRouter } from 'vue-router'
import { storeKey } from '@/vueStore'
import { useBtnClasses, isBtnColorValid } from '@/composables/use-btn-classes'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      validator: isBtnColorValid,
      required: true,
    },
    action: {
      type: String,
      required: true,
    }
  },
  setup(props, context) {
    const router = useRouter()
    const {label, color } = toRefs(reactive({
      label: props.label,
      color: props.color,
    }))
    const action = 'use' + props.action.split('-').map(n => n.slice(0, 1).toUpperCase() + n.slice(1), 1).join('')

    const name = inject(storeKey) ?? ref('')

    watch(name, () => {
      switch(action) {
        case 'useRenderGameStart':
          color.value = name?.value ? 'primary' : 'disabled'
          break
        default:
          break
      }
    })

    const classes = useBtnClasses(color)

    const onClick = () => {
      switch(action) {
        case 'useChangeMode':
          const { changeLabel, changeButtonColor } = useChangeMode(label.value, color.value)
          label.value = changeLabel
          color.value = changeButtonColor
          break
        case 'useRenderGameStart':
          if (name?.value) {
            router.push(Render.GameStart)
          }
          break
        case 'useRenderMain':
          router.push(Render.Main)
          break
        default:
          break
      }
    }

    return {
      label,
      classes,
      onClick,
    }
  },
})
</script>
