import { Module } from 'vuex'
import { accountLoginRequest } from '@/service/login/login'

import { IrootState, ILoginState } from './type'
// Module<S, R> S是模块中state的类型  R是根模块中state的类型
const loginModule: Module<ILoginState, IrootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {
    changeToken(state, token) {
      state.token = token
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
    }
  }
}

export default loginModule
