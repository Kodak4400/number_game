import { User } from '@/types/User'
import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

type State = {
  Users: Array<User>
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    Users: []
  },
  mutations: {
    setUser (state, user: User) {
      state.Users.push(user)
    }
  },
})

export const useStore = () => {
  return baseUseStore(key)
}
