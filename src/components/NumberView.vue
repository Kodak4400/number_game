<template>
  <div class="nes-container is-rounded">
    <p>{{ label }}</p>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent } from 'vue'
import { HTMLEvent } from '@/types/Event'

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
  setup(props, context) {
    const { label } = toRefs(reactive({
      label: props.label,
    }))
    const action = 'use' + props.action.split('-').map(n => n.slice(0, 1).toUpperCase() + n.slice(1), 1).join('')

    return {
      label,
    }
  },
})
</script>
