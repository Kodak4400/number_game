<template>
  <button type="button" :class="classes" @click="onClick">{{ text }}</button>
</template>

<script lang="ts">
import { reactive, ref, toRefs, computed, defineComponent } from 'vue'
import { getHeavyText } from '@/composables/use-sample'
import { useChangeMode } from '@/composables/use-change-mode'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      validator: (value: string) => {
        return ['normal', 'primary', 'success', 'warning', 'error', 'disabled'].indexOf(value) !== -1
      },
    },
    action: {
      type: String
    }
  },
  setup(props, context) {
    props = reactive(props)

    const text = ref(props.label)
    const classes = computed(() => ({
      'nes-btn': true,
      'is-primary': props.color === 'primary' ? true : false,
      'is-success': props.color === 'success' ? true : false,
      'is-warning': props.color === 'warning' ? true : false,
      'is-error': props.color === 'error' ? true : false,
      'is-disabled': props.color === 'disabled' ? true : false,
    }))

    const onClick = () => {
      const { ChangeLabel, ChangeButton } = useChangeMode()
      text.value = ChangeLabel
  
    }

    return {
      text,
      classes,
      onClick
    }
  },
})
</script>
