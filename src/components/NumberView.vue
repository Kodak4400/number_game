<template>
  <div class="nes-container is-rounded">
    <p>{{ label }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: Number,
      required: true,
    },
  },
  setup(props, context) {
    const { label } = toRefs(reactive({
      label: props.label,
    }))

    return {
      label,
    }
  },
})
</script>
