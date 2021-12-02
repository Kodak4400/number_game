<template>
  <button type="button" :class="classes" @click="onClick">{{ label }}</button>
</template>

<script lang="ts">
import { isBtnColorValid, useBtnClasses } from '@/composables/common/use-btn-classes'
import { defineComponent, reactive, Ref, toRefs } from 'vue'

export type useActionType = {
  label: Ref<string>
  classes: typeof useBtnClasses
  onClick: () => void
}

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
    const action: useActionType = props.action(label, color) 

    return {
      label: action.label,
      classes: action.classes,
      onClick: action.onClick,
    }
  },
})
</script>
