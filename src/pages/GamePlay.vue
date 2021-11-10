<template>
  <div class="game-play">
    Screen Game Play
    <CountDown :count="30" color="success" size="medium" action="go-to-game-play"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CountDown from '@/components/CountDown.vue'

export default defineComponent ({
  components: {
    CountDown,
  },
})
</script>

<style scoped>
</style>