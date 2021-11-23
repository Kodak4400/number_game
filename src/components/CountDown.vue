<template>
  <span :class="classes">{{ timer }}</span>
</template>

<script lang="ts">
import { reactive, ref, toRefs, computed, defineComponent, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useInterval } from '@/composables/use-Interval'
import { useTimerAction } from '@/composables/use-timer-action'
import { Render } from '@/composables/use-render'
import { useTextClasses, isTextColorValid, isTextSizeValid } from '@/composables/use-text-classes'

export default defineComponent({
  props: {
    count: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      validator: isTextColorValid,
      required: true,
    },
    size: {
      type: String,
      validator: isTextSizeValid,
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

    const classes = useTextClasses(color, size)

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
