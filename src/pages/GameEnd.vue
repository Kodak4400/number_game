<template>
  <div class="game-end">
    {{ name }} got {{ score }} points!
    <BaseButton label="Back" color="normal" action="render-main" />
  </div>
</template>

<script lang="ts">
import BaseContainer from '@/components/BaseContainer.vue';
import BaseButton from '@/components/BaseButton.vue';
import { defineComponent } from 'vue';
import { useStore } from '@/store'

export default defineComponent ({
  components: {
    BaseButton,
    BaseContainer
  },
  setup(props, { emit }) {
    const store = useStore()
    const name = store.state.User.name
    const score = store.state.User.scores?.reduce((acc, cur) => acc + cur, 0) ?? 0

    return {
      name,
      score
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
</style>