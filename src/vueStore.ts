import { InjectionKey, Ref } from 'vue'

// キーを用意
export const storeKey: InjectionKey<Ref<string>> = Symbol('storeDataKey')

// リアクティブなデータの登録
export const storeData = (name: Ref<string>) => {
  return name
}

// export const storeData = () => {
//   const state = {
//     name: ''
//   }

//   const getName = computed(() => state.name)
//   const setName = (name: string) => {
//     state.name = name
//   }

//   provide('getName', getName)
// }
