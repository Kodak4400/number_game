<template>
  <div :class="classes">
    <span>Name: {{ name }}</span>
    <span>{{ viewScore }} Point</span>
  </div>
</template>

<script lang="ts">
import { reactive, computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      validator: (value: string) => {
        return ['primary', 'success', 'warning', 'error', 'disabled'].indexOf(value) !== -1
      },
    },
    size: {
      type: String,
      validator: (value: string) => {
        // 今のところ、small, mediumは作っていない
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      },
    },
    action: {
      type: String
    }
  },
  emits: ['total:score'],
  setup(props, { emit }) {
    const classes = computed(() => ({
      'nes-text': true,
      'is-primary': props.color === 'primary' ? true : false,
      'is-success': props.color === 'success' ? true : false,
      'is-warning': props.color === 'warning' ? true : false,
      'is-error': props.color === 'error' ? true : false,
      'is-disabled': props.color === 'disabled' ? true : false,
      'small': props.size === 'small' ? true : false,
    }))

    const scoreHistory = reactive<Array<number>>([])
    const viewScore = computed(() => {
      if (props.score === 99) return 0
      // 0なら1万点!!! 他は数字 * 1000倍にする!!!（この仕様良いのか!?）
      scoreHistory.push(props.score === 0 ? 10000 : props.score * 1000)
      const total = scoreHistory.reduce((acc, cur) => acc + cur, 0)
      emit('total:score', scoreHistory)
      return total
    })

    return {
      classes,
      viewScore,
      name: props.name,
    }
  }
})
</script>

<style scoped>
  span {
    font-family: "Nu きなこもち";
  }
  .small {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70vmin;
    font-size: 0.8rem;
  }
</style>
