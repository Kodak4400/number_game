<template>
  <div class="game-start">
    <CountDown :count="3" color="primary" size="large" :action="useGameStartCount"/>
  </div>
</template>

<script lang="ts">
import CountDown from '@/components/CountDown.vue';
import { useGameStartCount } from '@/composables/use-game-start-count';
import { defineComponent } from 'vue';

export default defineComponent ({
  components: {
    CountDown
  },
  setup(props, { emit }) {
    return {
      useGameStartCount
    }
  }
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