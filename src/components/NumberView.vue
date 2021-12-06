<template>
  <div class="nes-container is-rounded">
    <p>{{ label }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: Number,
      required: true,
    },
  },
})
</script>
