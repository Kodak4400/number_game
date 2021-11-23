<template>
  <div :class="classes">
    <span>Name: {{ name }}</span>
    <span>{{ viewScore }} Point</span>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, computed, defineComponent } from 'vue'
import { useTextClasses, isTextColorValid, isTextSizeValid } from '@/composables/use-text-classes'
import { useCalculateScore } from '@/composables/use-calculate-score'

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
  emits: ['total:score'],
  setup(props, context) {
    const {color, size} = toRefs(reactive({
      color: props.color,
      size: props.size,
    }))
    const action = 'use' + props.action.split('-').map(n => n.slice(0, 1).toUpperCase() + n.slice(1), 1).join('')

    const classes = useTextClasses(color, size)

    const viewScore = computed(() => {
      return useCalculateScore(props.score, context)
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
