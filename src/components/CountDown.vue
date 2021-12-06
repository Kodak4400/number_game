<template>
  <span :class="classes">{{ count }}</span>
</template>

<script lang="ts">
import { isTextColorValid, isTextSizeValid, useTextClasses } from '@/composables/common/use-text-classes'
import { defineComponent, Ref } from 'vue'

export type useActionType = {
  count: Ref<number>
  classes: typeof useTextClasses
}

export default defineComponent({
  props: {
    count: {
      type: Number,
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
    action: {
      type: Function,
      required: true,
    }
  },
  setup(props) {
    const action: useActionType = props.action(props)

    return {
      count: action.count,
      classes: action.classes,
    }
  }
})
</script>

<style scoped>
  span {
    font-family: "Nu きなこもち";
  }
  .large {
    font-size: 6rem;
  }
  .medium {
    font-size: 3rem;
  }
</style>
