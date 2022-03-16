import { Module } from 'vuex'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusById
} from '@/service/login/login'
import localCache from '@/utils/cache'
import router from '@/router'

import { IrootState, ILoginState } from './type'
// Module<S, R> S是模块中state的类型  R是根模块中state的类型
const loginModule: Module<ILoginState, IrootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, token) {
      state.token = token
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, menus) {
      state.userMenus = menus
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      // 1. 登录
      const loginResult = await accountLoginRequest(payload)
      const { token, id } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)
      // 2. 获取用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)
      // 3. 请求用户菜单
      const userMenusResult = await requestUserMenusById(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 成功跳转
      router.push('/main')
    },
    // vuex刷新重载数据
    loadLocalLogin({ commit }) {
      const token = localStorage.getItem('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localStorage.getItem('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localStorage.getItem('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
