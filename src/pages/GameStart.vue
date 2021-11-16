<template>
  <div class="game-start">
    <CountDown :count="3" color="primary" size="large" action="go-to-game-play"/>
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
  .game-start {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>