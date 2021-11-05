<template>
  <button type="button" :class="classes" @click="onClick">{{ label }}</button>
</template>

<script lang="ts">
import { reactive, ref, toRefs, computed, defineComponent } from 'vue'
import { useChangeMode } from '@/composables/use-change-mode'

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
    const {label, color} = toRefs(reactive({
      label: props.label,
      color: props.color,
    }))

    const classes = computed(() => ({
      'nes-btn': true,
      'is-primary': color.value === 'primary' ? true : false,
      'is-success': color.value === 'success' ? true : false,
      'is-warning': color.value === 'warning' ? true : false,
      'is-error': color.value === 'error' ? true : false,
      'is-disabled': color.value === 'disabled' ? true : false,
    }))

    const onClick = () => {
      const { changeLabel, changeButtonColor } = useChangeMode()
      label.value = changeLabel
      color.value = changeButtonColor
    }

    return {
      label,
      classes,
      onClick
    }
  },
})
</script>
