import { createStore } from 'vuex'
import type { IrootState } from './login/type'
import login from './login'

export default createStore<IrootState>({
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
