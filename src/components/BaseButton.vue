<template>
  <button type="button" :class="classes" @click="onClick">{{ label }}</button>
</template>

<script lang="ts">
import { inject, reactive, toRefs, computed, defineComponent } from 'vue'
import { useChangeMode } from '@/composables/use-change-mode'
// import { useAction } from '@/composables/use-action'
import { useRouter } from 'vue-router'
import { StateDataInterface, storeKey } from '@/vueStore'
import { useStore } from '@/store'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      validator: (value: string) => {
        return ['normal', 'primary', 'success', 'warning', 'error', 'disabled'].indexOf(value) !== -1
      },
      required: true,
    },
    action: {
      type: String,
      required: true,
    }
  },
  setup(props, context) {
    const router = useRouter()
    const store = useStore()
    const {label, color } = toRefs(reactive({
      label: props.label,
      color: props.color,
    }))
    const action = 'use' + props.action.split('-').map(n => n.slice(0, 1).toUpperCase() + n.slice(1), 1).join('')

    const classes = computed(() => ({
      'nes-btn': true,
      'is-primary': color.value === 'primary' ? true : false,
      'is-success': color.value === 'success' ? true : false,
      'is-warning': color.value === 'warning' ? true : false,
      'is-error': color.value === 'error' ? true : false,
      'is-disabled': color.value === 'disabled' ? true : false,
    }))

    const onClick = () => {
      switch(action) {
        case 'useChangeMode':
          // const { changeLabel, changeButtonColor } = useAction(action.value, [label.value, color.value])
          const { changeLabel, changeButtonColor } = useChangeMode(label.value, color.value)
          label.value = changeLabel
          color.value = changeButtonColor
          break
        case 'useGoToGameStart':
          // const val = inject<StateDataInterface>(storeKey)
          // console.log(val)
          if (store.state.User.name.length) {
            // ボタンを押せなくするかは考える
          }
          router.push('/start')
          break
        default:
          break
      }
    }

    return {
      label,
      classes,
      onClick
    }
  },
})
</script>
