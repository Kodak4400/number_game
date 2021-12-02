<template>
  <button type="button" :class="classes" @click="onClick">{{ label }}</button>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent } from 'vue'
import { isBtnColorValid } from '@/composables/use-btn-classes'
import { useBtnTest1Type } from '@/composables/use-btn-test'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      validator: isBtnColorValid,
      required: true,
    },
    action: {
      type: Function,
      required: true,
    }
  },
  setup(props, context) {
    const { label, color } = toRefs(
      reactive({
        label: props.label,
        color: props.color,
      }),
    )
    const action: useBtnTest1Type = props.action(label, color) 

    return {
      label: action.label.value,
      classes: action.classes,
      onClick: action.onClick,
    }
  },
})
</script>
