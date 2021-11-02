<template>
  <button type="button" :class="classes" @click="onClick">{{ label }}</button>
</template>

<script lang="ts">
import { reactive, computed } from 'vue'

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      validator: function (value) {
        return ['normal', 'primary', 'success', 'warning', 'error', 'disabled'].indexOf(value) !== -1
      },
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props)
    return {
      classes: computed(() => ({
        'nes-btn': true,
        'is-primary': props.color === 'primary' ? true : false,
        'is-success': props.color === 'success' ? true : false,
        'is-warning': props.color === 'warning' ? true : false,
        'is-error': props.color === 'error' ? true : false,
        'is-disabled': props.color === 'disabled' ? true : false,
      })),
      onClick() {
        emit('click')
      },
    }
  },
}
</script>
