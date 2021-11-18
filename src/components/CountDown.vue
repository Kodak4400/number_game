<template>
  <span :class="classes">{{ timer }}</span>
</template>

<script lang="ts">
import { reactive, ref, toRefs, computed, defineComponent, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useInterval } from '@/composables/use-Interval'
import { useTimerAction } from '@/composables/use-timer-action'
import { Render } from '@/composables/use-render'

export default defineComponent({
  props: {
    count: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      validator: (value: string) => {
        return ['primary', 'success', 'warning', 'error', 'disabled'].indexOf(value) !== -1
      },
      required: true,
    },
    size: {
      type: String,
      validator: (value: string) => {
        // 今のところ、smallは作っていない
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      },
      required: true,
    },
    action: {
      type: String,
      required: true,
    }
  },
  setup(props, { emit }) {
    const router = useRouter()
    const {count, color, size} = toRefs(reactive({
      count: props.count,
      color: props.color,
      size: props.size,
    }))
    const action = 'use' + props.action.split('-').map(n => n.slice(0, 1).toUpperCase() + n.slice(1), 1).join('')

    const classes = computed(() => ({
      'nes-text': true,
      'is-primary': color.value === 'primary' ? true : false,
      'is-success': color.value === 'success' ? true : false,
      'is-warning': color.value === 'warning' ? true : false,
      'is-error': color.value === 'error' ? true : false,
      'is-disabled': color.value === 'disabled' ? true : false,
      'large': size.value === 'large' ? true : false,
      'medium': size.value === 'medium' ? true : false,
    }))

    const timer = useTimerAction(action, color, count)

    watch(count, () => {
      if (count.value === 0) {
        switch (action) {
          case 'useGoToGamePlay':
            router.push(Render.GamePlay)
            break
          case 'useGoToGameEnd':
            router.push(Render.GameEnd)
            break
          default:
            break
        }
      }
    })

    useInterval(() => { count.value-- }, 1000)

    return {
      timer,
      classes,
    }
  }
})
</script>

<style scoped>
  span {
    font-family: "Nu きなこもち";
  }
  .large {
    font-size: 6rem;
  }
  .medium {
    font-size: 3rem;
  }
</style>
