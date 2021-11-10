import { InjectionKey, reactive } from 'vue'

export interface StateDataInterface {
  name: string
}

// キーを用意
export const storeKey: InjectionKey<StateDataInterface> = Symbol('storeDataKey')

// リアクティブなデータの登録
export const storeData = (name: string) => {
  return reactive({ name: name })
}
