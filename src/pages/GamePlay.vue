<template>
  <div class="game-play">
    <CountDown :count="30" color="success" size="medium" action="go-to-game-play"/>
    <div class="game-play-numbers-view">
      <NumberView :label="number" action="delete-number" v-for="number in actionNumbers" :key="number"/>
    </div>
    <div class="game-play-number-buttons">
      <NumberButton :label="1" action="click-number" @click:number="clickNumber" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, computed } from 'vue';
import CountDown from '@/components/CountDown.vue'
import NumberButton from '@/components/NumberButton.vue';
import NumberView from '@/components/NumberView.vue';

export default defineComponent ({
  components: {
    CountDown,
    NumberButton,
    NumberView
  },
  setup(props, { emit }) {
    const MaxNumbers = 5
    const numbers = reactive<Array<number>>([])
    const keys = reactive<Array<number>>([])

    const actionNumbers = computed(() => {
      return numbers
    })

    watch(numbers, () => {
      if (!numbers.length) {
        addNumber()
      }
    })

    const addNumber = () => {
      for (let i = 0; i < MaxNumbers; i++) {
        numbers.push(Math.floor(Math.random() * 10))
      }
    }
    addNumber()

    const removeNumber = (value: string) => {
      const number = parseInt(value, 10)
      if (numbers.indexOf(number) > -1) {
        numbers.splice(numbers.indexOf(number), 1)
      }
      console.log(numbers)
    }

    const changeKeys = () => {
      keys.splice(0)
      for (let i = 0; i < 9; i++) {
        keys.push(Math.floor(Math.random() * 10))
      }
    }

    const clickNumber = (value: string) => {
      removeNumber(value)
      console.log(`Click number ${value}`);
    }

    return {
      clickNumber,
      actionNumbers
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
  }
  .game-play-numbers-view {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
</style>