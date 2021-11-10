<template>
  <button type="button" class="nes-btn" :value="label" @click="onClick">{{ label }}</button>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent } from 'vue'

interface HTMLEvent<T extends EventTarget> extends Event {
  target: T;
}

export default defineComponent({
  props: {
    label: {
      type: Number,
      required: true,
    },
    action: {
      type: String,
      required: true,
    }
  },
  emits: ['click:number'],
  setup(props, context) {
    const { label } = toRefs(reactive({
      label: props.label,
    }))
    const action = 'use' + props.action.split('-').map(n => n.slice(0, 1).toUpperCase() + n.slice(1), 1).join('')

    const onClick = (e: HTMLEvent<HTMLButtonElement>) => {
      switch(action) {
        case 'useClickNumber':
          context.emit('click:number', e.target.value)
          break
        default:
          break
      }
    }

    return {
      label,
      onClick
    }
  },
})
</script>
