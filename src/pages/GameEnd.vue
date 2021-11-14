<template>
  <div class="game-end">
    Game End Screen
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

<style scoped>
  .game-end {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>