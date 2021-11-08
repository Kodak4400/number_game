<template>
  <div class="nes-field">
    <label for="name_field">{{ label }}</label>
    <input type="text" id="name_field" class="nes-input name-input" placeholder="ニックネーム" v-model="name" @input="onInput">
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    props = reactive(props)
    const name = ref<String>('')
    const onInput = () => {
      console.log(name.value)
    }

    return {
      name,
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
