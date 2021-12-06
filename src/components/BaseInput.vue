<template>
  <div class="nes-field">
    <label for="name_field">{{ label }}</label>
    <input type="text" id="name_field" class="nes-input name-input" :placeholder="placeholder" :value="name" @input="inputEvent">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export type useActionType = {
  onInput: () => void
}

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    action: {
      type: Function,
      required: true,
    }
  },
  emits: ['input:name'],
  setup(props, context) {
    const action: useActionType = props.action(props, context)

    return {
      inputEvent: action.onInput,
    }
  }
})
</script>

<style scoped>
  input {
    font-family: "Nu きなこもち";
  }
  .name-input {
    width: calc(100% - 8px);
  }
</style>
