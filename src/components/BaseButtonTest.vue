<template>
  <button type="button" :class="classes" @click="onClick">{{ label }}</button>
</template>

<script lang="ts">
import { inject, reactive, ref, toRefs, computed, defineComponent, watch} from 'vue'
import { useChangeMode } from '@/composables/use-change-mode'
import { Render } from '@/composables/use-render'
import { useRouter } from 'vue-router'
import { storeKey } from '@/vueStore'
import { useBtnClasses, isBtnColorValid } from '@/composables/use-btn-classes'
import { useBtnTest1, UseBtnTestClass } from '@/composables/use-btn-test'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      validator: isBtnColorValid,
      required: true,
    },
    action: {
      type: UseBtnTestClass,
      required: true,
    }
  },
  setup(props, context) {
    const router = useRouter()
    const { label, color } = toRefs(reactive({
      label: props.label,
      color: props.color,
    }))

    const testClass = props.action
    testClass.watch(color)

    // const name = inject(storeKey) ?? ref('')

    // watch(name, () => {
    //   switch(action) {
    //     case 'useRenderGameStart':
    //       color.value = name?.value ? 'primary' : 'disabled'
    //       break
    //     default:
    //       break
    //   }
    // })

    const classes = useBtnClasses(color)

    const onClick = () => {
      // const { changeLabel, changeButtonColor } = props.action(label.value, color.value)
      // label.value = changeLabel
      // color.value = changeButtonColor
      const path = testClass.route()
      router.push(path)
    }

    return {
      label,
      classes,
      onClick,
    }
  },
})
</script>
