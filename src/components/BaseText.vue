<template>
  <span :class="classes">{{ text }}</span>
</template>

<script lang="ts">
import { reactive, computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      validator: (value: string) => {
        return ['primary', 'success', 'warning', 'error', 'disabled'].indexOf(value) !== -1
      },
    },
    size: {
      type: String,
      validator: (value: string) => {
        // 今のところ、small, mediumは作っていない
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      },
    },
  },
  setup(props, { emit }) {
    props = reactive(props)
    return {
      classes: computed(() => ({
        'nes-text': true,
        'is-primary': props.color === 'primary' ? true : false,
        'is-success': props.color === 'success' ? true : false,
        'is-warning': props.color === 'warning' ? true : false,
        'is-error': props.color === 'error' ? true : false,
        'is-disabled': props.color === 'disabled' ? true : false,
        'large': props.size === 'large' ? true : false,
      })),
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
