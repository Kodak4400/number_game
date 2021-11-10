import { User } from '@/types/User'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

type State = {
  User: User
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    User: {
      name: '',
      score: 0
    }
  },
  mutations: {
    setUser(state, user: User) {
      state.User.name = user.name
      state.User.score = user.score
    }
  },
})

export const useStore = () => {
  return baseUseStore(key)
}
