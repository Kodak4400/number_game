import { InjectionKey, Ref } from 'vue'

export const storeKey: InjectionKey<Ref<string>> = Symbol('storeKey')

export const storeData = (name: Ref<string>) => {
  return name
}
