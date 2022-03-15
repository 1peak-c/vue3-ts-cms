import { Module } from 'vuex'

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
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('执行accountLoginAction', payload)
    }
  }
}

export default loginModule
