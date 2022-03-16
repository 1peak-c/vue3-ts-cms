import { createStore } from 'vuex'
import type { IrootState } from './login/type'
import login from './login'

const store = createStore<IrootState>({
  state() {
    return {
      name: '',
      password: ''
    }
  },
  mutations: {},
  actions: {},
  modules: {
    login
  }
})
export function setupStore(): any {
  store.dispatch('login/loadLocalLogin')
}

export default store
