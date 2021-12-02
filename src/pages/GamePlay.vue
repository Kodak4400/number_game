<template>
  <div class="game-play">
    <ScoreView :name="userName" :score="score" color="success" size="small" :action="useCalculateScore" @total:score="totalScore"/>
    <div>
      <CountDown :count="30" color="primary" size="medium" :action="useGameStartCount"/>
    </div>
    <div class="game-play-numbers-view">
      <NumberView :label="number" v-for="number in viewNumbers" :key="number"/>
    </div>
    <div class="game-play-number-buttons">
      <NumberButton :label="key" :action="useGamePlayNumberButton" @click:number="clickNumber" v-for="key in keys" :key="key"/>
    </div>
  </div>
</template>

<script lang="ts">
import CountDown from '@/components/CountDown.vue';
import NumberButton from '@/components/NumberButton.vue';
import NumberView from '@/components/NumberView.vue';
import ScoreView from '@/components/ScoreView.vue';
import { useCalculateScore } from '@/composables/use-calculate-score';
import { useGameStartCount } from '@/composables/use-game-play-count';
import { useGamePlayNumberButton } from '@/composables/use-game-play-number-button';
import { RandomNumber } from '@/composables/use-random-number';
import { useStore } from '@/store';
import { computed, defineComponent, reactive, ref } from 'vue';

export default defineComponent ({
  components: {
    CountDown,
    NumberButton,
    NumberView,
    ScoreView
  },
  setup(props, { emit }) {
    const store = useStore()
    const useRandomNumber = new RandomNumber(5)
    const useRandomKeys = new RandomNumber(10)

    const numbers = reactive<Array<number>>(useRandomNumber.get())
    const keys = reactive<Array<number>>(useRandomKeys.get())
    const score = ref<number>(99) // 初期値 99 = scoreを0を表示する

    const viewNumbers = computed(() => {
      if (!numbers.length) {
        // NumberViewに表示する数字を再生成する
        useRandomNumber.init()
        useRandomNumber.get().map(n => numbers.push(n))
        // NumberButtonに表示する数字を再生成する
        useRandomKeys.init()
        keys.splice(0)
        useRandomKeys.get().map(n => keys.push(n))
        return numbers
      }
      return numbers
    })

    const removeNumber = (value: number) => {
      const index = numbers.indexOf(value)
      if (index > -1) {
        score.value = numbers[index]
        numbers.splice(index, 1)
      }
    }

    const clickNumber = (value: string) => {
      removeNumber(parseInt(value, 10))
    }

    const userName = store.state.User.name.length ? store.state.User.name : 'No Name'

    const totalScore = (totalScore: Array<number>) => {
      store.commit('setUser', { name: userName, scores: totalScore })
    }

    return {
      clickNumber,
      viewNumbers,
      keys,
      score,
      totalScore,
      userName,
      useGameStartCount,
      useGamePlayNumberButton,
      useCalculateScore
    }
  }
})
</script>

<style scoped>
  .game-play {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .game-play-numbers-view {
    display: flex;
    flex-direction: row;
  }
  .game-play-number-buttons {
    margin-top: 1rem;
    width: 40vmin;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>