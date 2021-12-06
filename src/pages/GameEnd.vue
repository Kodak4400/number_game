<template>
  <div class="game-end">
    {{ name }} got {{ score }} points!
    <div class="game-end-main-back">
      <BaseButton label="Back" color="normal" :action="useGameMainBackButton" />
    </div>
  </div>
</template>

<script lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import { useGameMainBackButton } from '@/composables/use-game-main-back-button';
import { useStore } from '@/store';
import { defineComponent } from 'vue';

export default defineComponent ({
  components: {
    BaseButton,
    BaseContainer,
  },
  setup(props, { emit }) {
    const store = useStore()
    const name = store.state.User.name
    const score = store.state.User.scores?.reduce((acc, cur) => acc + cur, 0) ?? 0

    return {
      name,
      score,
      useGameMainBackButton
    }
  }
})
</script>

<style scoped>
  .game-end {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .game-end-main-back {
    margin-top: 1rem;
  }
</style>