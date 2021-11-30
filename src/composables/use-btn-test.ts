import { storeKey } from '@/vueStore'
import { inject, ref, Ref, watch } from 'vue'
import { Render } from './use-render'


export function useBtnTest1() {
  // hoge: () => console.log('aaa')

  // init: (color: Ref<string>) => {
  //   const name = inject(storeKey) ?? ref('')

  //   watch(name, () => {
  //     color.value = name?.value ? 'primary' : 'disabled'
  //   })
  // }

  function route() {
    return Render.GameStart
  }
}


export class UseBtnTestClass {

  constructor() {}

  watch(color: Ref<string>) {
    const name = inject(storeKey) ?? ref('')
    return watch(name, () => {
      color.value = name?.value ? 'primary' : 'disabled'
    })
  }

  route() {
    return Render.GameStart
  }
}
