<template>
  <button type="button" class="nes-btn" @click="clickEvent" :value="label">{{ label }}</button>
</template>

<script lang="ts">
import { defineComponent, Ref } from 'vue'

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
    },
  },
  emits: ['click:number'],
  setup(props, context) {
    const action: useActionType = props.action(props, context)

    return {
      clickEvent: action.onClick,
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
