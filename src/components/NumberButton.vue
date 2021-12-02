<template>
  <button type="button" class="nes-btn" :value="label" @click="onClick">{{ label }}</button>
</template>

<script lang="ts">
import { defineComponent, reactive, Ref, toRefs } from 'vue'

export type useActionType = {
  label: Ref<string>
  onClick: () => void
}

export default defineComponent({
  props: {
    label: {
      type: Number,
      required: true,
    },
    action: {
      type: Function,
      required: true,
    }
  },
  emits: ['click:number'],
  setup(props, context) {
    const { label } = toRefs(reactive({
      label: props.label,
    }))
    const action: useActionType = props.action(label, context) 

    return {
      label: action.label,
      onClick: action.onClick,
    }
  },
})
</script>

<style scoped>
  .nes-btn {
    width: 10vh;
    height: 10vh;
    margin: 1vh;
  }
</style>