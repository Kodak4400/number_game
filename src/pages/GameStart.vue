<template>
  <div>
    Screen Game Start 
    <CountDown :count="3" color="primary" size="large" />
  </div>
</template>

<script lang="ts">
import CountDown from '@/components/CountDown.vue';
import { defineComponent } from 'vue';

export default defineComponent ({
  components: {
    CountDown
  },
})
</script>
