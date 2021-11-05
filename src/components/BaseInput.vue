<template>
  <div class="nes-field">
    <label for="name_field">{{ label }}</label>
    <input type="text" id="name_field" class="nes-input name-input" placeholder="ニックネーム">
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    props = reactive(props)
    return {
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
