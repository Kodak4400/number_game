import { User } from '@/types/User'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

export type State = {
  User: User
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    User: {
      name: '',
    }
  },
  mutations: {
    setUser(state, user: User) {
      state.User.name = user.name
      state.User.scores = user.scores
    }
  },
})

// useStoreを使う時にキーの指定を省略するためのラッパー関数
export const useStore = () => {
  return baseUseStore(key)
}
