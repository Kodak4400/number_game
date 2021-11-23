<template>
  <div class="nes-field">
    <label for="name_field">{{ label }}</label>
    <input type="text" id="name_field" class="nes-input name-input" placeholder="ニックネーム" :value="name" @input="onInput">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { HTMLEvent } from '@/types/Event'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    }
  },
  emits: ['input:name'],
  setup(props, context) {
    const onInput = (e: HTMLEvent<HTMLButtonElement>) => {
      context.emit('input:name', e.target.value)
    }

    return {
      onInput
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
