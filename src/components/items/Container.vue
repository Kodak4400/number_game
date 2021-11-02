<template>
  <div class="nes-container is-rounded">
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { reactive, computed } from 'vue'

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },

  setup(props, { emit }) {
    props = reactive(props)
    return {
    }
  }

}
</script>

<style scoped>
  p {
    font-family: "Nu きなこもち";
  }
</style>
