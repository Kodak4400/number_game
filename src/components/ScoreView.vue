<template>
  <div :class="classes">
    <span>Name: {{ name }}</span>
    <span>{{ viewScore }} Point</span>
  </div>
</template>

<script lang="ts">
import { isTextColorValid, isTextSizeValid, useTextClasses } from '@/composables/common/use-text-classes'
import { ComputedRef, defineComponent } from 'vue'

export type useActionType = {
  name: string,
  classes: typeof useTextClasses,
  viewScore: ComputedRef<number>,
}

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
      type: Function,
      required: true,
    }
  },
  emits: ['total:score'],
  setup(props, context) {
    const action: useActionType = props.action(props, context) 

    return {
      name: action.name,
      classes: action.classes,
      viewScore: action.viewScore,
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
