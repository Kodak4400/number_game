<template>
  <span :class="classes">{{ timer }}</span>
</template>

<script lang="ts">
import { reactive, toRefs, computed, defineComponent } from 'vue'

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
    },
    size: {
      type: String,
      validator: (value: string) => {
        // 今のところ、small, mediumは作っていない
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      },
    },
  },
  setup(props, { emit }) {
    const {count, color, size} = toRefs(reactive({
      count: props.count,
      color: props.color,
      size: props.size
    }))

    const classes = computed(() => ({
      'nes-text': true,
      'is-primary': color.value === 'primary' ? true : false,
      'is-success': color.value === 'success' ? true : false,
      'is-warning': color.value === 'warning' ? true : false,
      'is-error': color.value === 'error' ? true : false,
      'is-disabled': color.value === 'disabled' ? true : false,
      'large': size.value === 'large' ? true : false,
    }))

    const timer = computed(() => {
      if (count.value === 0) {
        return '0'
      }
      return count.value
    })


    const endDate = new Date(new Date().getTime() + count.value * 1000);
    const id = setInterval(() => {
      count.value--
      if (new Date().getTime() >= endDate.getTime()){
        clearInterval(id)
      }
    }, 1000)

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
    font-size: 2rem;
  }
</style>
