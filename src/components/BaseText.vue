<template>
  <span :class="classes">{{ text }}</span>
</template>

<script lang="ts">
import { isTextColorValid, isTextSizeValid, useTextClasses } from '@/composables/common/use-text-classes'
import { defineComponent, reactive, toRefs } from 'vue'

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
    const {color, size } = toRefs(reactive({
      color: props.color,
      size: props.size,
    }))
    const classes = useTextClasses(color, size)

    return {
      classes,
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
