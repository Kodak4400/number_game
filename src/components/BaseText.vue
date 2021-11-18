<template>
  <span :class="classes">{{ text }}</span>
</template>

<script lang="ts">
import { reactive, toRefs, computed, defineComponent } from 'vue'
import { useTextClasses, isTextColorValid, isTextSizeValid } from '@/composables/use-text-classes'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      validator: isTextColorValid,
      required: true,
    },
    size: {
      type: String,
      validator: isTextSizeValid,
      required: true,
    },
  },
  setup(props, { emit }) {
    const {text, color, size } = toRefs(reactive({
      text: props.text,
      color: props.color,
      size: props.size,
    }))

    const classes = useTextClasses(color, size)

    return {
      classes,
      text
    }
  }
})
</script>

<style scoped>
  span {
    font-family: "Nu きなこもち";
  }
  .large {
    font-size: 2rem;
  }
</style>
